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
     * Process an array of links and return the aprove-link
     * @param {Link[]} links - An array of link objects.
     *
     * @returns {string|null}
     */
    OxidPayPalHateoasLinks.prototype.getApproveLink = function (links) {
        return this.getLinkByKeyword(links, 'approve');
    };

    /**
     * Process an array of links and return the payer-action-link
     * @param {Link[]} links - An array of link objects.
     *
     * @returns {string|null}
     */
    OxidPayPalHateoasLinks.prototype.getPayerActionLink = function (links) {
        return this.getLinkByKeyword(links, 'payer-action');
    };

    /**
     * Process an array of links.
     * @param {Link[]} links - An array of link objects.
     *
     * @returns {string|null}
     */
    OxidPayPalHateoasLinks.prototype.getLinkByKeyword = function (links, keyword) {
        const hateoasLink = links.find(link => link.rel === keyword);

        if (hateoasLink) {
            return hateoasLink.href;
        }

        return null;
    };

    window.OxidPayPalHateoasLinks = OxidPayPalHateoasLinks;
})();
