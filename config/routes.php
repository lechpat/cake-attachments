<?php
use Cake\Routing\Router;

Router::prefix('admin', function ($routes) {
    $routes->plugin('Attachments', function ($routes) {
        $routes->fallbacks('DashedRoute');
    });
});

Router::plugin('Attachments', function ($routes) {
    $routes->fallbacks('DashedRoute');
});
