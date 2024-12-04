<?php

namespace OxidSolutionCatalysts\paypal\tests\Unit\Model;

use OxidSolutionCatalysts\PayPal\Model\HateoasLinks;
use PHPUnit\Framework\TestCase;

class HateoasLinksTest extends TestCase
{
    private array $exampleLinks;

    protected function setUp(): void
    {
        $this->exampleLinks = [
            [
                'href' => 'https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229',
                'rel' => 'self',
                'method' => 'GET',
            ],
            [
                'href' => 'https://www.sandbox.paypal.com/checkoutnow?token=8XK895404V5164229',
                'rel' => 'approve',
                'method' => 'GET',
            ],
            [
                'href' => 'https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229',
                'rel' => 'update',
                'method' => 'PATCH',
            ],
            [
                'href' => 'https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229/capture',
                'rel' => 'capture',
                'method' => 'POST',
            ],
        ];
    }

    public function testGetSelfLink(): void
    {
        $hateoasLinks = HateoasLinks::fromArray($this->exampleLinks);
        $selfLink = $hateoasLinks->getSelfLink();

        $this->assertNotNull($selfLink);
        $this->assertEquals('https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229', $selfLink->getUrl());
        $this->assertEquals('GET', $selfLink->getMethod());
    }

    public function testGetApproveLink(): void
    {
        $hateoasLinks = HateoasLinks::fromArray($this->exampleLinks);
        $approveLink = $hateoasLinks->getApproveLink();

        $this->assertNotNull($approveLink);
        $this->assertEquals(
            'https://www.sandbox.paypal.com/checkoutnow?token=8XK895404V5164229',
            $approveLink->getUrl()
        );
        $this->assertEquals('GET', $approveLink->getMethod());
    }

    public function testGetUpdateLink(): void
    {
        $hateoasLinks = HateoasLinks::fromArray($this->exampleLinks);
        $updateLink = $hateoasLinks->getUpdateLink();

        $this->assertNotNull($updateLink);
        $this->assertEquals(
            'https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229',
            $updateLink->getUrl()
        );
        $this->assertEquals('PATCH', $updateLink->getMethod());
    }

    public function testGetCaptureLink(): void
    {
        $hateoasLinks = HateoasLinks::fromArray($this->exampleLinks);
        $captureLink = $hateoasLinks->getCaptureLink();

        $this->assertNotNull($captureLink);
        $this->assertEquals(
            'https://api.sandbox.paypal.com/v2/checkout/orders/8XK895404V5164229/capture',
            $captureLink->getUrl()
        );
        $this->assertEquals('POST', $captureLink->getMethod());
    }

    public function testHandlesMissingLinksGracefully(): void
    {
        $hateoasLinks = HateoasLinks::fromArray([]);
        $selfLink = $hateoasLinks->getSelfLink();
        $approveLink = $hateoasLinks->getApproveLink();
        $updateLink = $hateoasLinks->getUpdateLink();
        $captureLink = $hateoasLinks->getCaptureLink();

        $this->assertNull($selfLink);
        $this->assertNull($approveLink);
        $this->assertNull($updateLink);
        $this->assertNull($captureLink);
    }
}
