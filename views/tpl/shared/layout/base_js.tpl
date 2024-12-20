[{if $oViewConf->isPayPalCheckoutActive()}]
    [{assign var="className" value=$oViewConf->getTopActiveClassName()}]
    [{assign var="sFileMTime" value=$oViewConf->getModulePath('osc_paypal','out/src/js/paypal-frontend.min.js')|filemtime}]
    [{oxscript include=$oViewConf->getModuleUrl('osc_paypal','out/src/js/paypal-frontend.min.js')|cat:"?"|cat:$sFileMTime priority=10}]
    <script src="[{$oViewConf->getPayPalJsSdkUrl()}]"
        [{if $oViewConf->isVaultingEligibility()}]
            data-user-id-token="[{$oViewConf->getUserIdForVaulting()}]"
        [{/if}]
        data-partner-attribution-id="[{$oViewConf->getPayPalPartnerAttributionIdForBanner()}]"
        data-client-token="[{$oViewConf->getDataClientToken()}]"
        ></script>
    [{assign var="sCountryRestriction" value=$oViewConf->getCountryRestrictionForPayPalExpress()}]
    [{if $sCountryRestriction}]
        <script>
            const countryRestriction = [[{$sCountryRestriction}]];
        </script>
    [{/if}]
    [{if $submitCart}]
    <script>
        document.getElementById('orderConfirmAgbBottom').submit();
    </script>
    [{/if}]
[{/if}]
