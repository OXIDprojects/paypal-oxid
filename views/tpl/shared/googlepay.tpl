[{block name="oscpaypal_googlepay"}]
    [{oxhasrights ident="PAYWITHGOOGLEPAY"}]
        [{assign var="sToken" value=$oViewConf->getSessionChallengeToken()}]
        [{assign var="sSelfLink" value=$oViewConf->getSslSelfLink()|replace:"&amp;":"&"}]
        [{assign var="oPPconfig" value=$oViewConf->getPayPalCheckoutConfig()}]
        [{assign var="oConfig" value=$oViewConf->getConfig()}]
        [{assign var="bGooglePayDelivery" value=$oConfig->getConfigParam('oscPayPalUseGooglePayAddress')}]
        <div class="google-pay-loading-container">
            <img src="[{$oViewConf->getModuleUrl('osc_paypal', 'out/src/img/loading.svg')}]" width="24" height="24" alt="loading animation"/>
        </div>
        <div id="[{$paymentId}]"
             class="paypal-button-container paypal-button-wrapper large"
             data-button-id="[{$buttonId}]"
             data-token="[{$sToken}]"
             data-self-link="[{$sSelfLink}]"
             data-use-google-pay-address="[{$bGooglePayDelivery}]"
             data-is-sandbox="[{$oPPconfig->isSandbox()}]"
             data-merchant-name="[{$oxcmp_shop->oxshops__oxname->value|json_encode}]"
             data-total-price="[{oxprice price=$oxcmp_basket->getBruttoSum() currency=$currency}]"
             data-currency="[{*$oView->getActCurrency()->name*}]"
             data-delivery-address-md5="[{$oView->getDeliveryAddressMD5()}]"
             data-language="[{$oView->getActiveLangAbbr()|lower}]"
             data-loading-container-class-name="google-pay-loading-container"
        ></div>

        <script>
            window.googlePayReady = new Promise(resolve => {
                window.onGooglePayLoaded = resolve;
            });
        </script>
        <script async src="https://pay.google.com/gp/p/js/pay.js" onload="window.onGooglePayLoaded()"></script>
    [{/oxhasrights}]
[{/block}]

