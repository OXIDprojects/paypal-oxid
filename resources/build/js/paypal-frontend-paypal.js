window.OxidPayPal = {
    sdkLoaded: false,
    onSDKLoaded: function () {
        this.sdkLoaded = true;
    },
    isSDKLoaded: function () {
        return this.sdkLoaded;
    }
};
