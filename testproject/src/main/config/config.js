define( [ 'angular' ],
        function(angular) {
           'use strict';

            var config = angular.module('config', []);

            /**
             * These are the AMD modules that every *application instance* should require prior to execution.
             * ngStart's src/main/main.js file should include the appropriate requirejs configuration to
             * facilitate the inclusion for objects stored in idiosyncratic locations.
             */
            config.standardRequireModules = [   'angular', 'ngRoute', 'app'];

            /**
             * These are the angular modules that every application module should require in order to execute.
             */
            config.standardAngularModules = [   'ngRoute',  'config'];


            /**
             * This is the default require configuration.  Note that putting this in the main configuration file means
             * that the location of non-"standard" (i.e., not in standardRequireModules above) can be maintained in
             * a single location without the need for synchronization across many applications.
             *
             * Also of significance: baseUrl MUST refer to root in order to support normalized pathing across all
             * sub-applications.  For applications outside of the root folder, add an 'app' entry to path referring
             * to the location of the correct app module.
             */
            config.requireConfiguration = {
                baseUrl: "/",
                paths: {
                    'angular': 'vendor/angular/angular.min',
                    'ngRoute': 'vendor/angular-route/angular-route.min'
                },
                shim: {
                    'angular': { deps: [], exports: 'angular' },
                    'ngRoute': {deps: ['angular']}
                }
            };

            return config;
        } );
