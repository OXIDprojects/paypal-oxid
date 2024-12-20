(function () {
    'use strict';

    function OxidPayPalHateoasLinks() {
    }
    /**
     * @typedef {Object} Link
     * @property {string} rel - The relation type.
     * @property {string} href - The link URL.
     */

    /**
     * Process an array of links.
     * @param {Link[]} links - An array of link objects.
     *
     * @returns {string|null}
     */
    OxidPayPalHateoasLinks.prototype.getApproveLink = function (links) {
        const approveHateoasLink = links.find(link => link.rel === 'approve');

        if (approveHateoasLink) {
            return approveHateoasLink.href;
        }

        return null;
    };

    window.OxidPayPalHateoasLinks = OxidPayPalHateoasLinks;
})();
