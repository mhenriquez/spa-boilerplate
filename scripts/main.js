/*! Avoid `console` errors in browsers that lack a console. */
(function () { for (var g, h = function () { }, f = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), j = f.length, i = window.console = window.console || {}; j--; ) { g = f[j], i[g] || (i[g] = h) } })();
//-----------------------------------------------
// Logs the start of the file.
console.log( 'START: main.js' );
//-----------------------------------------------

// Configure RequireJS
requirejs.config({
    baseUrl: '/scripts',
    paths: {
        /**-----------------------------------
         Frameworks/Libraries
        -----------------------------------**/

        'angular': [ // angular does not support AMD out of the box, put it in a shim
            '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
            // If CDN fails, load from this location
            'lib/angular-1.2.16.min'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'lib/bootstrap-3.1.1.min'
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            // If CDN fails, load from this location
            'lib/jquery-2.0.3.min'
        ],
        'jquery-ui': [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            // If CDN fails, load from this location
            'lib/jquery-ui-1.10.3.min'
        ],

        'modernizr': 'lib/modernizr-2.8.0.min',
        'domReady': 'lib/domReady', // v2.0.1

        /**-----------------------------------
         jQuery Plugins
        -----------------------------------**/

        'classie': 'lib/classie', // v1.0.1
        'debounced': 'lib/jquery.debouncedresize',
        'lazyloader': 'lib/jquery.bttrlazyloading-1.0.5.min',

        // pagescroll
        'mousewheel': 'lib/jquery.mousewheel',
        'mwintent': 'lib/mwheelIntent',
        'jscroll': 'lib/jquery.jscrollpane.min',

        // fullpage
        'easings': 'lib/jquery.easings-1.9.2.min',
        'slimscroll': 'lib/jquery.slimscroll-1.3.2.min',
        'fullpage': 'lib/jquery.fullPage-2.0.7.min',

        // sly
        'easing': 'lib/jquery.easing-1.3.min',
        'sly': 'lib/sly-1.1.0.min'

        // -------------------------------------
    },
    shim:
    {
        'angular':
        {
            exports: 'angular'
        },
        'bootstrap':
        {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'jquery':
        {
            exports: '$'
        },
        'jquery-ui':
        {
            deps: ['jquery'],
            exports: 'jqueryui'
        },
        'modernizr':
        {
            exports: 'modernizr'
        },

        // -------------------------------------------

        'debounced':
        {
            deps: ['jquery']
        },
        'easing':
        {
            deps: ['jquery']
        },
        'easings':
        {
            deps: ['jquery']
        },
        'fullpage':
        {
            deps: ['easing', 'jquery']
        },
        'jscroll':
        {
            deps: ['jquery', 'mousewheel', 'mwintent']
        },
        'lazyloader':
        {
            deps: ['jquery']
        },
        'mousewheel':
        {
            deps: ['jquery']
        },
        'mwintent':
        {
            deps: ['mousewheel']
        },
        'slimscroll':
        {
            deps: ['jquery']
        },
        'sly':
        {
            deps: ['easing'],
            exports: 'sly'
        }

        // -------------------------------------------
    }
});

// Enter global require code here...
require(['modernizr'], function ()
{
    require(['jquery', 'domReady'], function ($, domReady)
    {
        // Log that jquery was loaded into the global name-space
        console.log('jQuery', $.fn.jquery, 'loaded!');

		// Google Analytics Tracking
		//$('.dl-trigger').click(function () {
		//	_gaq.push(['_trackEvent', 'Menu Button', 'Navigation', $(this).text()]);
		//});
		//Track navigation for this site.
		//$('.dl-menu a').click(function () {
		//	_gaq.push(['_trackEvent', 'Menu Path', 'Navigation', $(this).text()]);
		//});


        domReady(function ()
        {
            require(['angular', 'bootstrap', 'classie', 'easings', 'slimscroll', 'fullpage', 'lazyloader'], function (ng)
            {
                // scripts for all mediums
                
                var screenwidth = parseInt($(this).width());
                var screenheight = parseInt($(this).height());

                $('#page').fullpage({
				    'verticalCentered': false,
				    'resize': false,
                    'slidesNavigation': true,
                    'loopHorizontal': false,
                    'autoScrolling': false
			    });

                // Lazyload website images
                $('.img-responsive').bttrlazyloading({
                    //placeholder: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
                    backgroundcolor: 'transparent',
                    animation: 'fadeIn',
                    container: '.scroll-pane'
                });

                //YouTube Player Settings
                //var tag = document.createElement('script'); tag.src = "https://www.youtube.com/player_api"; var firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                //$('#playerA').click(function () { var player; player = new YT.Player('playerA', { height: '300', width: '320', videoId: 'sibcnHOLPec', playerVars: { 'autoplay': 1, 'playsinline': 1, 'showinfo': 0, 'controls': 1, 'enablejsapi': 1, 'modestbranding': 1, 'color': 'white', 'iv_load_policy': 3, 'rel': 0, 'theme': 'light'} }); });


                if (screenwidth < 1000) // load only tablet scripts
                {
                    require([], function ()
                    {
                        //code

                        if (screenwidth < 700) // load only mobile scripts
                        {
                            require([], function ()
                            {
                                //code
                            });
                        }
                    });
                }

                if (screenwidth >= 1000) // load only desktop scripts
                {
                    require(['easing'], function ()
                    {
                        //code

                        //-- Right-click disabled -----------------------
                        //$(document).bind('contextmenu', function (e)
                        //{
                        //    return false;
                        //}); //-----------------------------------------

                    });
                }

                // Logs the end of the file.
                console.log('END: main.js');
            });
        });
    });
}, function (err) {
    //The errback, error callback
    //The error has a list of modules that failed
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'modernizr') {
        //undef is function only on the global requirejs object.
        //Use it to clear internal knowledge of jQuery. Any modules
        //that were dependent on jQuery and in the middle of loading
        //will not be loaded yet, they will wait until a valid jQuery
        //does load.
        requirejs.undef(failedId);

        console.log('Modernizr did not load');

    } else 
    {
        
    }
});