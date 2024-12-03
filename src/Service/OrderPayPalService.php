<?php

namespace OxidSolutionCatalysts\PayPal\Service;

use OxidEsales\Eshop\Core\Request;

class OrderPayPalService
{
    public function __construct(private Request $request, private Payment $paymentService)
    {
    }

    public function cancelPayPalSession(string $errorcode = null): string
    {
        //TODO: we get the PayPal order id retuned in token parameter, can be used for paranoia checks
        //(string) Registry::getRequest()->getRequestParameter('token')
        $requestErrorcode = (string) $this->request->getRequestParameter('errorcode');

        $this->paymentService->removeTemporaryOrder();

        $goNext = 'payment';
        if ($errorcode || $requestErrorcode) {
            $goNext = 'payment?payerror=2';
        }

        return $goNext;
    }
}
