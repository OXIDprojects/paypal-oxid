[{if $oViewConf->showPayPalCheckoutBannerOnStartPage()}]
    [{assign var="paypalInstallmentPrice" value=$oxcmp_basket->getBruttoSum()}]
    [{if $oxcmp_basket->isPriceViewModeNetto()}]
        [{assign var="paypalInstallmentPrice" value=$oxcmp_basket->getNettoSum()}]
    [{/if}]

    [{oxstyle include=$oViewConf->getModuleUrl('osc_paypal','css/paypal.min.css')}]
    [{include file="@osc_paypal/frontend/shared/installment_banners.tpl" amount=$paypalInstallmentPrice selector=$oViewConf->getPayPalCheckoutBannerStartPageSelector()}]
[{/if}]
[{$smarty.block.parent}]