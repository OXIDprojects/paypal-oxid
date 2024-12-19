// After receiving PAYER_ACTION_REQUIRED from PayPal

window.OxidPayPalGooglePay3DS = {
    handle: async (paypalOrderResponse) => {
        // Create new payment data request with 3DS parameters
        const paymentDataRequest = await window.OxidPayPalGooglePay.getGooglePaymentDataRequest();
        const threeDSPaymentDataRequest = {
            ...paymentDataRequest,
            paymentData: {
                tokenizationData: {
                    type: 'PAYMENT_GATEWAY',
                    token: paypalOrderResponse.id // Original PayPal order ID
                },
                // 3DS specific parameters
                threeDSData: {
                    authenticationParameters: {
                        threeDSRequestData: {
                            threeDSServerTransID: generateTransactionId(),
                            challengeWindowSize: "03", // Full screen
                            messageCategory: "PAYMENT_AUTHENTICATION"
                        }
                    }
                }
            }
        };

        try {
            // This triggers the 3DS popup
            const paymentData = await paymentClient.loadPaymentData(threeDSPaymentDataRequest);

            // After successful 3DS authentication
            // Update PayPal order with new payment token
            const updateOrderResponse = await fetch(`/v2/checkout/orders/${paypalOrderResponse.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([{
                    op: 'replace',
                    path: '/payment_source/google_pay/card/authentication_result',
                    value: {
                        liability_shift: "POSSIBLE",
                        three_d_secure: {
                            authentication_status: "Y",
                            enrollment_status: "Y"
                        }
                    }
                }])
            });

            // Finally capture the order
            if (updateOrderResponse.ok) {
                const captureResponse = await fetch(`/v2/checkout/orders/${paypalOrderResponse.id}/capture`, {
                    method: 'POST'
                });
                return captureResponse;
            }
        } catch (error) {
            // Handle 3DS or payment errors
            console.error('3DS Authentication failed:', error);
            throw error;
        }
    }
};
