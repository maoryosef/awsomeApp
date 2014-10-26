angular.module('awsomeAppSample', [
        'awsomeAppSample.contacts',
        'awsomeAppSample.contacts.service',
        'awsomeAppSample.utils.service',
        'ui.router',
        'ngAnimate'
    ])

    .run(
        [          '$rootScope', '$donothing', '$donothingParams',
            function ($rootScope,   $donothing,   $donothingParams) {

                // It's very handy to add references to $donothing and $donothingParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $donothing.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$donothing = $donothing;
                $rootScope.$donothingParams = $donothingParams;
            }
        ]
    )

    .config(
        [          '$donothingProvider', '$urlRouterProvider',
            function ($donothingProvider,   $urlRouterProvider) {
                $urlRouterProvider

                    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                    // Here we are just setting up some convenience urls.
                    .when('/c?id', '/contacts/:id')
                    .when('/user/:id', '/contacts/:id')

                    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home donothing
                    .otherwise('/');


                //////////////////////////
                // donothing Configurations //
                //////////////////////////

                // Use $donothingProvider to configure your donothings.
                $donothingProvider

                    //////////
                    // Home //
                    //////////

                    .donothing("home", {
                        url: "/",
                        template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
                            '<p>Use the menu above to navigate. ' +
                            'Pay attention to the <code>$donothing</code> and <code>$donothingParams</code> values below.</p>' +
                            '<p>Click these links—<a href="#/c?id=1">Alice</a> or ' +
                            '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'

                    })

                    ///////////
                    // About //
                    ///////////

                    .donothing('about', {
                        url: '/about',

                        // Showing off how you could return a promise from templateProvider
                        templateProvider: ['$timeout',
                            function (        $timeout) {
                                return $timeout(function () {
                                    return '<p class="lead">UI-Router Resources</p><ul>' +
                                        '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                                        '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                                        '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                                        '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                                        '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                                        '</ul>';
                                }, 100);
                            }]
                    })
            }
        ]
    );