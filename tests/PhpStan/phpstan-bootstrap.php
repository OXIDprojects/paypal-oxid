<?php

/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */

declare(strict_types=1);

class_alias(
    \OxidEsales\Eshop\Application\Component\UserComponent::class,
    \OxidSolutionCatalysts\PayPal\Component\UserComponent_parent::class
);
class_alias(
    \OxidEsales\Eshop\Application\Component\BasketComponent::class,
    \OxidSolutionCatalysts\PayPal\Component\BasketComponent_parent::class
);

class_alias(
    \OxidEsales\Eshop\Application\Controller\Admin\OrderMain::class,
    \OxidSolutionCatalysts\PayPal\Controller\Admin\OrderMain_parent::class
);

class_alias(
    \OxidEsales\Eshop\Application\Controller\Admin\OrderOverview::class,
    \OxidSolutionCatalysts\PayPal\Controller\Admin\OrderOverview_parent::class
);

class_alias(
    \OxidEsales\Eshop\Application\Controller\OrderController::class,
    \OxidSolutionCatalysts\PayPal\Controller\OrderController_parent::class
);

class_alias(
    \OxidEsales\Eshop\Application\Controller\PaymentController::class,
    \OxidSolutionCatalysts\PayPal\Controller\PaymentController_parent::class,
);

class_alias(
    \OxidEsales\EshopCommunity\Core\InputValidator::class,
    \OxidSolutionCatalysts\PayPal\Core\InputValidator_parent::class,
);

class_alias(
    \OxidEsales\EshopCommunity\Core\ShopControl::class,
    \OxidSolutionCatalysts\PayPal\Core\ShopControl_parent::class
);

class_alias(
    \OxidEsales\Eshop\Core\ViewConfig::class,
    \OxidSolutionCatalysts\PayPal\Core\ViewConfig_parent::class,
);

class_alias(
    \OxidEsales\Eshop\Application\Model\Order::class,
    \OxidSolutionCatalysts\PayPal\Model\Order_parent::class,
);

class_alias(
    \OxidEsales\Eshop\Application\Model\Article::class,
    \OxidSolutionCatalysts\PayPal\Model\Article_parent::class,
);

class_alias(
    \OxidEsales\Eshop\Application\Model\User::class,
    \OxidSolutionCatalysts\PayPal\Model\User_parent::class
);

class_alias(
    \OxidEsales\Eshop\Application\Model\State::class,
    \OxidSolutionCatalysts\PayPal\Model\State_parent::class
);

class_alias(
    \OxidEsales\EshopCommunity\Application\Model\PaymentGateway::class,
    \OxidSolutionCatalysts\PayPal\Model\PaymentGateway_parent::class
);

class_alias(
    \OxidEsales\EshopCommunity\Application\Model\Payment::class,
    \OxidSolutionCatalysts\PayPal\Model\Payment_parent::class
);

class_alias(
    \OxidEsales\EshopCommunity\Application\Model\Basket::class,
    \OxidSolutionCatalysts\PayPal\Model\Basket_parent::class
);

class_alias(
    \OxidEsales\EshopCommunity\Application\Model\Basket::class,
    \OxidSolutionCatalysts\PayPal\Core\Onboarding\Logger\Basket_parent::class
);
