[{$smarty.block.parent}]

[{if $oViewConf->showPayPalCheckoutBannerOnCheckoutPage()}]
    <div id="basket-paypal-installment-banner"></div>
    [{oxstyle include=$oViewConf->getModuleUrl('osc_paypal','out/src/css/paypal.min.css')}]
    [{assign var="basketAmount" value=$oxcmp_basket->getPrice()}]
    [{include file="modules/osc/paypal/installment_banners.tpl" amount=$basketAmount->getPrice() selector=$oViewConf->getPayPalCheckoutBannerCartPageSelector()}]
[{/if}]
