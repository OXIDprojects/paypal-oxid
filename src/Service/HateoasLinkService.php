<?php

namespace OxidSolutionCatalysts\PayPal\Service;

use OxidSolutionCatalysts\PayPal\Model\HateoasLink;
use OxidSolutionCatalysts\PayPal\Model\HateoasLinks;

class HateoasLinkService
{
    public function getSelfLink(array $links): HateoasLink
    {
        return HateoasLinks::fromArray($links)->getSelfLink();
    }

    public function getApproveLink(array $links): HateoasLink
    {
        return HateoasLinks::fromArray($links)->getApproveLink();
    }

    public function getUpdateLink(array $links): HateoasLink
    {
        return HateoasLinks::fromArray($links)->getUpdateLink();
    }

    public function getCaptureLink(array $links): HateoasLink
    {
        return HateoasLinks::fromArray($links)->getCaptureLink();
    }
}
