<?php

namespace OxidSolutionCatalysts\PayPal\Model;

class HateoasLinks
{
    private ?array $links;

    public function __construct(?array $links)
    {
        $this->links = $links;
    }
    public static function fromArray(?array $links): self
    {
        return new HateoasLinks($links);
    }

    public function getSelfLink(): ?HateoasLink
    {
        return $this->findLink('self');
    }

    public function getUpdateLink(): ?HateoasLink
    {
        return $this->findLink('update');
    }

    public function getApproveLink(): ?HateoasLink
    {
        return $this->findLink('approve');
    }

    public function getCaptureLink(): ?HateoasLink
    {
        return $this->findLink('capture');
    }

    private function findLink(string $linkType): ?HateoasLink
    {
        foreach ($this->links as $link) {
            if ($link['rel'] === $linkType) {
                return HateoasLink::fromArray($link);
            }
        }
        return null;
    }
}
