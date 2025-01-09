[{$smarty.block.parent}]
[{if $oViewConf->isPayPalCheckoutActive()}]
    [{assign var="sFileMTime" value=$oViewConf->getModulePath('osc_paypal','css/paypal.min.css')|filemtime}]
    [{oxstyle include=$oViewConf->getModuleUrl('osc_paypal', 'css/paypal.min.css')|cat:"?"|cat:$sFileMTime}]
[{/if}]

