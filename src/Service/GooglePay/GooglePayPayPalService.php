<?php

namespace OxidSolutionCatalysts\PayPal\Service\GooglePay;

use Exception;
use OxidSolutionCatalysts\PayPal\Model\Order;
use OxidSolutionCatalysts\PayPal\Service\Logger;

class GooglePayPayPalService
{
    public function __construct(private Logger $logger)
    {
    }

    public function finalizeGooglePay(string $oxidOrderId, string $payPalOrderId, bool $forceFetchDetails): bool
    {
        try {
            /**
 * @var Order $order
*/
            $order = oxNew(Order::class);
            $order->load($oxidOrderId);
            $order->finalizeOrderAfterExternalPayment($payPalOrderId, $forceFetchDetails);
            return true;
        } catch (Exception $exception) {
            $this->logger->log(
                'error',
                __CLASS__ . ': failure during finalizeOrderAfterExternalPayment',
                [$exception]
            );
        }

        return false;
    }
}
