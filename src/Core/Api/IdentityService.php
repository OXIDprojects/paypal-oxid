<?php

/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */

namespace OxidSolutionCatalysts\PayPal\Core\Api;

use GuzzleHttp\Exception\GuzzleException;
use JsonException;
use OxidSolutionCatalysts\PayPalApi\Exception\ApiException;
use OxidSolutionCatalysts\PayPalApi\Service\BaseService;
use Psr\Http\Message\ResponseInterface;

class IdentityService extends BaseService
{
    /**
     * @throws ApiException
     * @throws JsonException
     */
    public function requestClientToken(): array
    {
        $headers = [];
        $headers['Content-Type'] = 'application/json';
        $headers = array_merge($headers, $this->getAuthHeaders());

        $path = '/v1/identity/generate-token';

        /** @var ResponseInterface $response */
        $response = $this->send('POST', $path, [], $headers);
        $body = $response->getBody();

        $result = json_decode((string)$body, true, 512, JSON_THROW_ON_ERROR);
        return is_array($result) ? $result : [];
    }

    /**
     * @return array
     * @throws JsonException
     * @throws GuzzleException
     */
    protected function getAuthHeaders(): array
    {
        if (!$this->client->isAuthenticated()) {
            $this->client->auth();
        }

        $headers = [];
        $headers['Authorization'] = 'Bearer ' . $this->client->getTokenResponse();

        return $headers;
    }
}
