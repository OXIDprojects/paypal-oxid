<dl>
    <dt>
        [{include file="@osc_paypal/frontend/shared/select_payment.tpl"}]
        <label for="payment_[{$sPaymentID}]"><b>[{$paymentmethod->oxpayments__oxdesc->value}]</b></label>
        [{include file="@osc_paypal/frontend/shared/paymentbuttons.tpl" buttonId=$sPaymentID buttonClass="paypal-button-wrapper large"}]
    </dt>
</dl>
