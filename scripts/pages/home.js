define(['jquery', 'domReady!', 'debounced'], function ($)
{
	var screenwidth = parseInt($(this).width());
	var screenheight = parseInt($(this).height());

	var PrivateMessage = function ()
	{
		return msg;
	};

	var PrivateMethods = {
		onLoad: function ()
		{

			require(['lazyloader', 'easings', 'sly'], function ()
			{
				// code //
				// load scripts for desktop, tablet and mobile

				//-- Lazyload website images -----------------------
				//$('.img-responsive').bttrlazyloading({
				//    //placeholder: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
				//    backgroundcolor: 'transparent',
				//    animation: 'fadeIn',
				//    container: '.scroll-pane'
				//}); //--------------------------------------------

				//-- Sly Analytics -------------------------------
				//$('.dl-menu a').click(function () {
				//    _gaq.push(['_trackEvent', 'Menu Path', 'Navigation', $(this).text()]);
				//});
				//$('.dl-menu a').click(function () {
				//    _gaq.push(['_trackEvent', 'Menu Path', 'Navigation', $(this).text()]);
				//});
				//$('.dl-menu a').click(function () {
				//    _gaq.push(['_trackEvent', 'Menu Path', 'Navigation', $(this).text()]);
				//});
				//-----------------------------------------------

				// set slide height to match window height
				//$(".pt-perspective").css("height", function (index)
				//{
				//    //var topBar = parseInt($('.topBar').height());
				//    //return screenheight - topBar;
				//    return screenheight;
				//}); //-----------------------------------------------

				//-- Sly horizontal scroll -----------------------
				//(function () { var $frame = $('#row1'); var $section = $frame.parent(); $frame.sly({ horizontal: 1, itemNav: 'centered', smart: 1, activateOn: 'click', mouseDragging: 1, touchDragging: 1, releaseSwing: 1, startAt: 0, scrollBar: $section.find('.scrollbar'), scrollBy: 1, pagesBar: $section.find('.pages'), activatePageOn: 'click', speed: 300, elasticBounds: 1, easing: 'easeOutExpo', dragHandle: 1, dynamicHandle: 1, clickBar: 1, prev: $section.find('.prev'), next: $section.find('.next'), prevPage: $section.find('.prevPage'), nextPage: $section.find('.nextPage'), forward: $section.find('.forward'), backward: $section.find('.backward') }); } ());
				//(function () { var $frame = $('#row2'); var $section = $frame.parent(); $frame.sly({ horizontal: 1, itemNav: 'centered', smart: 1, activateOn: 'click', mouseDragging: 1, touchDragging: 1, releaseSwing: 1, startAt: 0, scrollBar: $section.find('.scrollbar'), scrollBy: 1, pagesBar: $section.find('.pages'), activatePageOn: 'click', speed: 300, elasticBounds: 1, easing: 'easeOutExpo', dragHandle: 1, dynamicHandle: 1, clickBar: 1, prev: $section.find('.prev'), next: $section.find('.next'), prevPage: $section.find('.prevPage'), nextPage: $section.find('.nextPage'), forward: $section.find('.forward'), backward: $section.find('.backward') }); } ());
				//(function () { var $frame = $('#row3'); var $section = $frame.parent(); $frame.sly({ horizontal: 1, itemNav: 'centered', smart: 1, activateOn: 'click', mouseDragging: 1, touchDragging: 1, releaseSwing: 1, startAt: 0, scrollBar: $section.find('.scrollbar'), scrollBy: 1, pagesBar: $section.find('.pages'), activatePageOn: 'click', speed: 300, elasticBounds: 1, easing: 'easeOutExpo', dragHandle: 1, dynamicHandle: 1, clickBar: 1, prev: $section.find('.prev'), next: $section.find('.next'), prevPage: $section.find('.prevPage'), nextPage: $section.find('.nextPage'), forward: $section.find('.forward'), backward: $section.find('.backward') }); } ());
			    //------------------------------------------------

				if (screenwidth < 1025)
				{
					require([], function ()
					{
						// code //
						// load scripts only for tablet

						//-- screen-size ----------------------------------
						$('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');
						//-------------------------------------------------

						if (screenwidth < 700)
						{
							require([], function ()
							{
								// code //
								// load scripts only for mobile
								
								//-- screen-size ----------------------------------
								$("#msg").text(screenwidth + " x " + screenheight + " - mobile");
								//-------------------------------------------------
							});
						}
					});
				}

				if (screenwidth >= 1025)
				{
					require([], function ()
					{
						// code //
						// load scripts only for desktop

						//-- screen-size ----------------------------------
						$("#msg").text(screenwidth + " x " + screenheight + " - desktop");
						//-------------------------------------------------
					});
				}
			});
		},
		onResize: function ()
		{
			//alert(PrivateMessage());

			// ---------------------------------------------------
			// On Smart PageResize...
			// fires only after user is done resizing the window
			// ---------------------------------------------------            
			$(window).on('debouncedresize', function (event)
			{
				var screenwidth = parseInt($(this).width());
				var screenheight = parseInt($(this).height());

				if (screenwidth < 1025)
				{
					require([], function ()
					{
						// code //
						// load scripts only for tablet

						//-- screen-size ----------------------------------
						$('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');
						//-------------------------------------------------

						if (screenwidth < 700)
						{
							require([], function ()
							{
								// code //
								// load scripts only for mobile

								//-- screen-size ----------------------------------
								$("#msg").text(screenwidth + " x " + screenheight + " - mobile");
								//-------------------------------------------------
							});
						}
					});
				}

				if (screenwidth >= 1025)
				{
					require([], function ()
					{
						// code //
						// load scripts only for desktop

						//-- screen-size ----------------------------------
						$("#msg").text(screenwidth + " x " + screenheight + " - desktop");
						//-------------------------------------------------
					});
				}
			}); // end debouncedresize
		}
	};

	return PrivateMethods;
});