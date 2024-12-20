<?php

namespace OxidSolutionCatalysts\PayPal\Model;

class HateoasLink
{
    private ?array $link;

    public function __construct(?array $link)
    {
        $this->link = $link;
    }
    public static function fromArray(?array $link): self
    {
        return new HateoasLink($link);
    }

    public function getUrl(): ?string
    {
        return $this->link['href'] ?? null;
    }

    public function getMethod(): ?string
    {
        return $this->link['method'] ?? null;
    }
}
