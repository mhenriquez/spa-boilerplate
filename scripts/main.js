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
            'lib/angular.min'// v2.1.16
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'lib/bootstrap.min'// v3.1.1
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            // If CDN fails, load from this location
            'lib/jquery-2.0.3.min'// v2.0.3
        ],
        'jqueryui': [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            // If CDN fails, load from this location
            'lib/jquery-ui.min'// v1.10.3
        ],
        
        'modernizr': 'lib/modernizr-2.6.2.min', // v2.6.2
        'domReady': 'lib/domReady',// v2.0.1

        /**-----------------------------------
         jQuery Plugins
        -----------------------------------**/
        
        'classie': 'lib/classie',// v1.0.1
        'debounced': 'lib/jquery.debouncedresize', 
        'lazyloader': 'lib/jquery.bttrlazyloading.min',// v1.0.5
        
        // pagescroll
        'mousewheel': 'lib/jquery.mousewheel',// v3.1.9
        'mwintent': 'lib/mwheelIntent',// v1.2
        'jscroll': 'lib/jquery.jscrollpane.min',// v2.0
        
        // fullpage
        'easings': 'lib/jquery.easings.min',// v1.9.2
        'slimscroll': 'lib/jquery.slimscroll.min',// v1.3.2
        'fullpage': 'lib/jquery.fullPage',// v1.8.0
        
        // sly
        'sly': 'lib/sly.min'// v1.1.0
        
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
        'jqueryui':
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
        'easings':
        {
            deps: ['jquery']
        },
        'fullpage':
        {
            deps: ['jquery', 'easings', 'slimscroll']
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
            deps: ['easings'],
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
            require(['easings', 'angular', 'bootstrap', 'slimscroll', 'fullpage', 'lazyloader'], function (ng)
            {
                //FullPage Settings
                $('#fullpage').fullpage({
                    resize: false,
                    anchors: ['pane1', 'pane2', 'pane3'],
                    //navigation: true,
                    //navigationTooltips: ['First', 'Second', 'Third'],
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',
                    loopHorizontal: false,
                    autoScrolling: false, // activate for desktop
                    fixedElements: '#navbar, #copyright',

                    //events
                    onLeave: function (index, direction) { },
                    afterLoad: function (anchorLink, index) { },
                    afterRender: function () { }
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
    }
});