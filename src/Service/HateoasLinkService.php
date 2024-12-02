<?php

namespace OxidSolutionCatalysts\PayPal\Service;

use OxidSolutionCatalysts\PayPal\Model\HateoasLink;
use OxidSolutionCatalysts\PayPal\Model\HateoasLinks;

class HateoasLinkService
{
    private HateoasLinks $hateoasLinks;
    public function __construct(array $links)
    {
        $this->hateoasLinks = HateoasLinks::fromArray($links);
    }

    public function getSelfLink(): HateoasLink
    {
        return $this->hateoasLinks->getSelfLink();
    }

    public function getApproveLink(): HateoasLink
    {
        return $this->hateoasLinks->getApproveLink();
    }

    public function getUpdateLink(): HateoasLink
    {
        return $this->hateoasLinks->getUpdateLink();
    }

    public function getCaptureLink(): HateoasLink
    {
        return $this->hateoasLinks->getCaptureLink();
    }
}
