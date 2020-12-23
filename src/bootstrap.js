
// Inject script content at the top of the HTML document.
injectScriptContent( installEchoScriptContent );
injectScriptContent( installCustomEchoStylerContent );

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// I inject and execute the given IIFE (immediately-invoked function expression) into the
// current HTML document.
function injectScriptContent( iifeFunction ) {

	var script = document.createElement( "script" );
	script.setAttribute( "type", "text/javascript" );
	script.setAttribute( "data-source", "Injected by Echo-Log Chrome Extension." );
	script.textContent = `;( ${ iifeFunction.toString() } )();`;

	document.documentElement.appendChild( script );

}


// I define custom echo stylers for the current page.
function installCustomEchoStylerContent() {

	echo
		// The list of colors taken from MDN
		// --
		// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
		.defineStyler( "black", "color: #000000" )
		.defineStyler( "bgBlack", "background-color: #000000" )
		.defineStyler( "silver", "color: #c0c0c0" )
		.defineStyler( "bgSilver", "background-color: #c0c0c0" )
		.defineStyler( "gray", "color: #808080" )
		.defineStyler( "bgGray", "background-color: #808080" )
		.defineStyler( "white", "color: #ffffff" )
		.defineStyler( "bgWhite", "background-color: #ffffff" )
		.defineStyler( "maroon", "color: #800000" )
		.defineStyler( "bgMaroon", "background-color: #800000" )
		.defineStyler( "red", "color: #ff0000" )
		.defineStyler( "bgRed", "background-color: #ff0000" )
		.defineStyler( "purple", "color: #800080" )
		.defineStyler( "bgPurple", "background-color: #800080" )
		.defineStyler( "fuchsia", "color: #ff00ff" )
		.defineStyler( "bgFuchsia", "background-color: #ff00ff" )
		.defineStyler( "green", "color: #008000" )
		.defineStyler( "bgGreen", "background-color: #008000" )
		.defineStyler( "lime", "color: #00ff00" )
		.defineStyler( "bgLime", "background-color: #00ff00" )
		.defineStyler( "olive", "color: #808000" )
		.defineStyler( "bgOlive", "background-color: #808000" )
		.defineStyler( "yellow", "color: #ffff00" )
		.defineStyler( "bgYellow", "background-color: #ffff00" )
		.defineStyler( "navy", "color: #000080" )
		.defineStyler( "bgNavy", "background-color: #000080" )
		.defineStyler( "blue", "color: #0000ff" )
		.defineStyler( "bgBlue", "background-color: #0000ff" )
		.defineStyler( "teal", "color: #008080" )
		.defineStyler( "bgTeal", "background-color: #008080" )
		.defineStyler( "aqua", "color: #00ffff" )
		.defineStyler( "bgAqua", "background-color: #00ffff" )
		.defineStyler( "orange", "color: #ffa500" )
		.defineStyler( "bgOrange", "background-color: #ffa500" )
		.defineStyler( "aliceblue", "color: #f0f8ff" )
		.defineStyler( "bgAliceblue", "background-color: #f0f8ff" )
		.defineStyler( "antiquewhite", "color: #faebd7" )
		.defineStyler( "bgAntiquewhite", "background-color: #faebd7" )
		.defineStyler( "aquamarine", "color: #7fffd4" )
		.defineStyler( "bgAquamarine", "background-color: #7fffd4" )
		.defineStyler( "azure", "color: #f0ffff" )
		.defineStyler( "bgAzure", "background-color: #f0ffff" )
		.defineStyler( "beige", "color: #f5f5dc" )
		.defineStyler( "bgBeige", "background-color: #f5f5dc" )
		.defineStyler( "bisque", "color: #ffe4c4" )
		.defineStyler( "bgBisque", "background-color: #ffe4c4" )
		.defineStyler( "blanchedalmond", "color: #ffebcd" )
		.defineStyler( "bgBlanchedalmond", "background-color: #ffebcd" )
		.defineStyler( "blueviolet", "color: #8a2be2" )
		.defineStyler( "bgBlueviolet", "background-color: #8a2be2" )
		.defineStyler( "brown", "color: #a52a2a" )
		.defineStyler( "bgBrown", "background-color: #a52a2a" )
		.defineStyler( "burlywood", "color: #deb887" )
		.defineStyler( "bgBurlywood", "background-color: #deb887" )
		.defineStyler( "cadetblue", "color: #5f9ea0" )
		.defineStyler( "bgCadetblue", "background-color: #5f9ea0" )
		.defineStyler( "chartreuse", "color: #7fff00" )
		.defineStyler( "bgChartreuse", "background-color: #7fff00" )
		.defineStyler( "chocolate", "color: #d2691e" )
		.defineStyler( "bgChocolate", "background-color: #d2691e" )
		.defineStyler( "coral", "color: #ff7f50" )
		.defineStyler( "bgCoral", "background-color: #ff7f50" )
		.defineStyler( "cornflowerblue", "color: #6495ed" )
		.defineStyler( "bgCornflowerblue", "background-color: #6495ed" )
		.defineStyler( "cornsilk", "color: #fff8dc" )
		.defineStyler( "bgCornsilk", "background-color: #fff8dc" )
		.defineStyler( "crimson", "color: #dc143c" )
		.defineStyler( "bgCrimson", "background-color: #dc143c" )
		.defineStyler( "cyan", "color: #00ffff" )
		.defineStyler( "bgCyan", "background-color: #00ffff" )
		.defineStyler( "darkblue", "color: #00008b" )
		.defineStyler( "bgDarkblue", "background-color: #00008b" )
		.defineStyler( "darkcyan", "color: #008b8b" )
		.defineStyler( "bgDarkcyan", "background-color: #008b8b" )
		.defineStyler( "darkgoldenrod", "color: #b8860b" )
		.defineStyler( "bgDarkgoldenrod", "background-color: #b8860b" )
		.defineStyler( "darkgray", "color: #a9a9a9" )
		.defineStyler( "bgDarkgray", "background-color: #a9a9a9" )
		.defineStyler( "darkgreen", "color: #006400" )
		.defineStyler( "bgDarkgreen", "background-color: #006400" )
		.defineStyler( "darkgrey", "color: #a9a9a9" )
		.defineStyler( "bgDarkgrey", "background-color: #a9a9a9" )
		.defineStyler( "darkkhaki", "color: #bdb76b" )
		.defineStyler( "bgDarkkhaki", "background-color: #bdb76b" )
		.defineStyler( "darkmagenta", "color: #8b008b" )
		.defineStyler( "bgDarkmagenta", "background-color: #8b008b" )
		.defineStyler( "darkolivegreen", "color: #556b2f" )
		.defineStyler( "bgDarkolivegreen", "background-color: #556b2f" )
		.defineStyler( "darkorange", "color: #ff8c00" )
		.defineStyler( "bgDarkorange", "background-color: #ff8c00" )
		.defineStyler( "darkorchid", "color: #9932cc" )
		.defineStyler( "bgDarkorchid", "background-color: #9932cc" )
		.defineStyler( "darkred", "color: #8b0000" )
		.defineStyler( "bgDarkred", "background-color: #8b0000" )
		.defineStyler( "darksalmon", "color: #e9967a" )
		.defineStyler( "bgDarksalmon", "background-color: #e9967a" )
		.defineStyler( "darkseagreen", "color: #8fbc8f" )
		.defineStyler( "bgDarkseagreen", "background-color: #8fbc8f" )
		.defineStyler( "darkslateblue", "color: #483d8b" )
		.defineStyler( "bgDarkslateblue", "background-color: #483d8b" )
		.defineStyler( "darkslategray", "color: #2f4f4f" )
		.defineStyler( "bgDarkslategray", "background-color: #2f4f4f" )
		.defineStyler( "darkslategrey", "color: #2f4f4f" )
		.defineStyler( "bgDarkslategrey", "background-color: #2f4f4f" )
		.defineStyler( "darkturquoise", "color: #00ced1" )
		.defineStyler( "bgDarkturquoise", "background-color: #00ced1" )
		.defineStyler( "darkviolet", "color: #9400d3" )
		.defineStyler( "bgDarkviolet", "background-color: #9400d3" )
		.defineStyler( "deeppink", "color: #ff1493" )
		.defineStyler( "bgDeeppink", "background-color: #ff1493" )
		.defineStyler( "deepskyblue", "color: #00bfff" )
		.defineStyler( "bgDeepskyblue", "background-color: #00bfff" )
		.defineStyler( "dimgray", "color: #696969" )
		.defineStyler( "bgDimgray", "background-color: #696969" )
		.defineStyler( "dimgrey", "color: #696969" )
		.defineStyler( "bgDimgrey", "background-color: #696969" )
		.defineStyler( "dodgerblue", "color: #1e90ff" )
		.defineStyler( "bgDodgerblue", "background-color: #1e90ff" )
		.defineStyler( "firebrick", "color: #b22222" )
		.defineStyler( "bgFirebrick", "background-color: #b22222" )
		.defineStyler( "floralwhite", "color: #fffaf0" )
		.defineStyler( "bgFloralwhite", "background-color: #fffaf0" )
		.defineStyler( "forestgreen", "color: #228b22" )
		.defineStyler( "bgForestgreen", "background-color: #228b22" )
		.defineStyler( "gainsboro", "color: #dcdcdc" )
		.defineStyler( "bgGainsboro", "background-color: #dcdcdc" )
		.defineStyler( "ghostwhite", "color: #f8f8ff" )
		.defineStyler( "bgGhostwhite", "background-color: #f8f8ff" )
		.defineStyler( "gold", "color: #ffd700" )
		.defineStyler( "bgGold", "background-color: #ffd700" )
		.defineStyler( "goldenrod", "color: #daa520" )
		.defineStyler( "bgGoldenrod", "background-color: #daa520" )
		.defineStyler( "greenyellow", "color: #adff2f" )
		.defineStyler( "bgGreenyellow", "background-color: #adff2f" )
		.defineStyler( "grey", "color: #808080" )
		.defineStyler( "bgGrey", "background-color: #808080" )
		.defineStyler( "honeydew", "color: #f0fff0" )
		.defineStyler( "bgHoneydew", "background-color: #f0fff0" )
		.defineStyler( "hotpink", "color: #ff69b4" )
		.defineStyler( "bgHotpink", "background-color: #ff69b4" )
		.defineStyler( "indianred", "color: #cd5c5c" )
		.defineStyler( "bgIndianred", "background-color: #cd5c5c" )
		.defineStyler( "indigo", "color: #4b0082" )
		.defineStyler( "bgIndigo", "background-color: #4b0082" )
		.defineStyler( "ivory", "color: #fffff0" )
		.defineStyler( "bgIvory", "background-color: #fffff0" )
		.defineStyler( "khaki", "color: #f0e68c" )
		.defineStyler( "bgKhaki", "background-color: #f0e68c" )
		.defineStyler( "lavender", "color: #e6e6fa" )
		.defineStyler( "bgLavender", "background-color: #e6e6fa" )
		.defineStyler( "lavenderblush", "color: #fff0f5" )
		.defineStyler( "bgLavenderblush", "background-color: #fff0f5" )
		.defineStyler( "lawngreen", "color: #7cfc00" )
		.defineStyler( "bgLawngreen", "background-color: #7cfc00" )
		.defineStyler( "lemonchiffon", "color: #fffacd" )
		.defineStyler( "bgLemonchiffon", "background-color: #fffacd" )
		.defineStyler( "lightblue", "color: #add8e6" )
		.defineStyler( "bgLightblue", "background-color: #add8e6" )
		.defineStyler( "lightcoral", "color: #f08080" )
		.defineStyler( "bgLightcoral", "background-color: #f08080" )
		.defineStyler( "lightcyan", "color: #e0ffff" )
		.defineStyler( "bgLightcyan", "background-color: #e0ffff" )
		.defineStyler( "lightgoldenrodyellow", "color: #fafad2" )
		.defineStyler( "bgLightgoldenrodyellow", "background-color: #fafad2" )
		.defineStyler( "lightgray", "color: #d3d3d3" )
		.defineStyler( "bgLightgray", "background-color: #d3d3d3" )
		.defineStyler( "lightgreen", "color: #90ee90" )
		.defineStyler( "bgLightgreen", "background-color: #90ee90" )
		.defineStyler( "lightgrey", "color: #d3d3d3" )
		.defineStyler( "bgLightgrey", "background-color: #d3d3d3" )
		.defineStyler( "lightpink", "color: #ffb6c1" )
		.defineStyler( "bgLightpink", "background-color: #ffb6c1" )
		.defineStyler( "lightsalmon", "color: #ffa07a" )
		.defineStyler( "bgLightsalmon", "background-color: #ffa07a" )
		.defineStyler( "lightseagreen", "color: #20b2aa" )
		.defineStyler( "bgLightseagreen", "background-color: #20b2aa" )
		.defineStyler( "lightskyblue", "color: #87cefa" )
		.defineStyler( "bgLightskyblue", "background-color: #87cefa" )
		.defineStyler( "lightslategray", "color: #778899" )
		.defineStyler( "bgLightslategray", "background-color: #778899" )
		.defineStyler( "lightslategrey", "color: #778899" )
		.defineStyler( "bgLightslategrey", "background-color: #778899" )
		.defineStyler( "lightsteelblue", "color: #b0c4de" )
		.defineStyler( "bgLightsteelblue", "background-color: #b0c4de" )
		.defineStyler( "lightyellow", "color: #ffffe0" )
		.defineStyler( "bgLightyellow", "background-color: #ffffe0" )
		.defineStyler( "limegreen", "color: #32cd32" )
		.defineStyler( "bgLimegreen", "background-color: #32cd32" )
		.defineStyler( "linen", "color: #faf0e6" )
		.defineStyler( "bgLinen", "background-color: #faf0e6" )
		.defineStyler( "magenta", "color: #ff00ff" )
		.defineStyler( "bgMagenta", "background-color: #ff00ff" )
		.defineStyler( "mediumaquamarine", "color: #66cdaa" )
		.defineStyler( "bgMediumaquamarine", "background-color: #66cdaa" )
		.defineStyler( "mediumblue", "color: #0000cd" )
		.defineStyler( "bgMediumblue", "background-color: #0000cd" )
		.defineStyler( "mediumorchid", "color: #ba55d3" )
		.defineStyler( "bgMediumorchid", "background-color: #ba55d3" )
		.defineStyler( "mediumpurple", "color: #9370db" )
		.defineStyler( "bgMediumpurple", "background-color: #9370db" )
		.defineStyler( "mediumseagreen", "color: #3cb371" )
		.defineStyler( "bgMediumseagreen", "background-color: #3cb371" )
		.defineStyler( "mediumslateblue", "color: #7b68ee" )
		.defineStyler( "bgMediumslateblue", "background-color: #7b68ee" )
		.defineStyler( "mediumspringgreen", "color: #00fa9a" )
		.defineStyler( "bgMediumspringgreen", "background-color: #00fa9a" )
		.defineStyler( "mediumturquoise", "color: #48d1cc" )
		.defineStyler( "bgMediumturquoise", "background-color: #48d1cc" )
		.defineStyler( "mediumvioletred", "color: #c71585" )
		.defineStyler( "bgMediumvioletred", "background-color: #c71585" )
		.defineStyler( "midnightblue", "color: #191970" )
		.defineStyler( "bgMidnightblue", "background-color: #191970" )
		.defineStyler( "mintcream", "color: #f5fffa" )
		.defineStyler( "bgMintcream", "background-color: #f5fffa" )
		.defineStyler( "mistyrose", "color: #ffe4e1" )
		.defineStyler( "bgMistyrose", "background-color: #ffe4e1" )
		.defineStyler( "moccasin", "color: #ffe4b5" )
		.defineStyler( "bgMoccasin", "background-color: #ffe4b5" )
		.defineStyler( "navajowhite", "color: #ffdead" )
		.defineStyler( "bgNavajowhite", "background-color: #ffdead" )
		.defineStyler( "oldlace", "color: #fdf5e6" )
		.defineStyler( "bgOldlace", "background-color: #fdf5e6" )
		.defineStyler( "olivedrab", "color: #6b8e23" )
		.defineStyler( "bgOlivedrab", "background-color: #6b8e23" )
		.defineStyler( "orangered", "color: #ff4500" )
		.defineStyler( "bgOrangered", "background-color: #ff4500" )
		.defineStyler( "orchid", "color: #da70d6" )
		.defineStyler( "bgOrchid", "background-color: #da70d6" )
		.defineStyler( "palegoldenrod", "color: #eee8aa" )
		.defineStyler( "bgPalegoldenrod", "background-color: #eee8aa" )
		.defineStyler( "palegreen", "color: #98fb98" )
		.defineStyler( "bgPalegreen", "background-color: #98fb98" )
		.defineStyler( "paleturquoise", "color: #afeeee" )
		.defineStyler( "bgPaleturquoise", "background-color: #afeeee" )
		.defineStyler( "palevioletred", "color: #db7093" )
		.defineStyler( "bgPalevioletred", "background-color: #db7093" )
		.defineStyler( "papayawhip", "color: #ffefd5" )
		.defineStyler( "bgPapayawhip", "background-color: #ffefd5" )
		.defineStyler( "peachpuff", "color: #ffdab9" )
		.defineStyler( "bgPeachpuff", "background-color: #ffdab9" )
		.defineStyler( "peru", "color: #cd853f" )
		.defineStyler( "bgPeru", "background-color: #cd853f" )
		.defineStyler( "pink", "color: #ffc0cb" )
		.defineStyler( "bgPink", "background-color: #ffc0cb" )
		.defineStyler( "plum", "color: #dda0dd" )
		.defineStyler( "bgPlum", "background-color: #dda0dd" )
		.defineStyler( "powderblue", "color: #b0e0e6" )
		.defineStyler( "bgPowderblue", "background-color: #b0e0e6" )
		.defineStyler( "rosybrown", "color: #bc8f8f" )
		.defineStyler( "bgRosybrown", "background-color: #bc8f8f" )
		.defineStyler( "royalblue", "color: #4169e1" )
		.defineStyler( "bgRoyalblue", "background-color: #4169e1" )
		.defineStyler( "saddlebrown", "color: #8b4513" )
		.defineStyler( "bgSaddlebrown", "background-color: #8b4513" )
		.defineStyler( "salmon", "color: #fa8072" )
		.defineStyler( "bgSalmon", "background-color: #fa8072" )
		.defineStyler( "sandybrown", "color: #f4a460" )
		.defineStyler( "bgSandybrown", "background-color: #f4a460" )
		.defineStyler( "seagreen", "color: #2e8b57" )
		.defineStyler( "bgSeagreen", "background-color: #2e8b57" )
		.defineStyler( "seashell", "color: #fff5ee" )
		.defineStyler( "bgSeashell", "background-color: #fff5ee" )
		.defineStyler( "sienna", "color: #a0522d" )
		.defineStyler( "bgSienna", "background-color: #a0522d" )
		.defineStyler( "skyblue", "color: #87ceeb" )
		.defineStyler( "bgSkyblue", "background-color: #87ceeb" )
		.defineStyler( "slateblue", "color: #6a5acd" )
		.defineStyler( "bgSlateblue", "background-color: #6a5acd" )
		.defineStyler( "slategray", "color: #708090" )
		.defineStyler( "bgSlategray", "background-color: #708090" )
		.defineStyler( "slategrey", "color: #708090" )
		.defineStyler( "bgSlategrey", "background-color: #708090" )
		.defineStyler( "snow", "color: #fffafa" )
		.defineStyler( "bgSnow", "background-color: #fffafa" )
		.defineStyler( "springgreen", "color: #00ff7f" )
		.defineStyler( "bgSpringgreen", "background-color: #00ff7f" )
		.defineStyler( "steelblue", "color: #4682b4" )
		.defineStyler( "bgSteelblue", "background-color: #4682b4" )
		.defineStyler( "tan", "color: #d2b48c" )
		.defineStyler( "bgTan", "background-color: #d2b48c" )
		.defineStyler( "thistle", "color: #d8bfd8" )
		.defineStyler( "bgThistle", "background-color: #d8bfd8" )
		.defineStyler( "tomato", "color: #ff6347" )
		.defineStyler( "bgTomato", "background-color: #ff6347" )
		.defineStyler( "turquoise", "color: #40e0d0" )
		.defineStyler( "bgTurquoise", "background-color: #40e0d0" )
		.defineStyler( "violet", "color: #ee82ee" )
		.defineStyler( "bgViolet", "background-color: #ee82ee" )
		.defineStyler( "wheat", "color: #f5deb3" )
		.defineStyler( "bgWheat", "background-color: #f5deb3" )
		.defineStyler( "whitesmoke", "color: #f5f5f5" )
		.defineStyler( "bgWhitesmoke", "background-color: #f5f5f5" )
		.defineStyler( "yellowgreen", "color: #9acd32" )
		.defineStyler( "bgYellowgreen", "background-color: #9acd32" )
		.defineStyler( "rebeccapurple", "color: #663399" )
		.defineStyler( "bgRebeccapurple", "background-color: #663399" )

		// Custom stylers I use in my code.
		.defineStyler( "monospace", "font-family: monospace" )
		.defineStyler( "linethrough", echo.strikethrough )
		.defineStyler( "asTag", echo.rounded.padded.monospace )
		.defineStyler( "asAlert", echo.asTag.bgRed.white.bold )
		.defineStyler( "asWarning", echo.asTag.bgGold.black.bold )
	;

}


// I define the echo() API for outputting styles log statements.
// --
// NOTE: This is more-or-less a direct copy from the script located here:
// https://www.bennadel.com/blog/3942-styling-console-log-output-with-a-chalk-inspired-formatter-using-javascript-proxies.htm
function installEchoScriptContent() {

	var stylers = {
		// NOTE: All TEXT COLOR and BACKGROUND COLOR stylers have been moved into the
		// custom echo stylers above. There was no need to define them more than once.
		// --
		// Text modifiers.
		bold: "font-weight: bold",
		lighter: "font-weight: lighter",
		italic: "font-style: italic",
		strikethrough: "text-decoration: line-through",
		underline: "text-decoration: underline",
		large: "font-size: 16px",
		larger: "font-size: 22px",
		largest: "font-size: 26px",
		massive: "font-size: 36px",

		// Block modifiers.
		padded: "display: inline-block ; padding: 4px 6px",
		rounded: "display: inline-block ; border-radius: 4px"
	};

	var rootStyler = "";

	// As "styler" functions are called, they are going to push values and CSS onto this
	// queue. Then, when the "log" functions are called, this queue will be processed and
	// cleared (for the next set of styler invocations).
	var logItemQueue = [];

	// When the "styler" functions are called, they populate the queue (above). As such,
	// their return value isn't directly consumable. Therefore, they return this token
	// which helps our queue-processor differentiate from a styler value vs. a raw value.
	// And, the embedded warning helps the developer understand where / if they made a
	// mistake in how the styler return value was used.
	var ECHO_TOKEN = {
		warning: "This value should not be used directly - it should be an argument to an echo invocation."
	};
	var RESET_INPUT = "%c ";
	var RESET_CSS = "";

	var coreApi = {
		log: wrapConsoleFunction( console.log ),
		warn: wrapConsoleFunction( console.warn ),
		error: wrapConsoleFunction( console.error ),
		trace: wrapConsoleFunction( console.trace ),
		group: wrapConsoleFunction( console.group ),
		groupEnd: wrapConsoleFunction( console.groupEnd ),
		defineStyler: defineStyler,
		defineRootStyler: defineRootStyler
	};

	// We want all of our "stylers" to hang off the core API. And, since the collection
	// of stylers can change over time (using aliases and customizations), we have to
	// proxy the core API such that we can dynamically see if a styler is being accessed.
	var coreApiProxy = new Proxy(
		coreApi,
		{
			get: function( target, prop, receiver ) {

				// Intercept styler access.
				if ( prop in stylers ) {

					return( createStylerProxy( prop ) );

				}

				return( target[ prop ] );

			}
		}
	);

	return( window.echo = coreApiProxy );

	// ---
	// PUBLIC METHODS.
	// ---

	// I define the root CSS that all other styles will start with.
	// --
	// NOTE: This method should be called before any other stylers are created.
	function defineRootStyler( rawCSS ) {

		rootStyler = rawCSS;
		return( this );

	}


	// I allow new stylers to be defined. The "newStyler" can be a string of raw CSS; or,
	// it can be a reference to another styler.
	function defineStyler( name, newStyler ) {

		if ( typeof( newStyler ) === "string" ) {

			stylers[ name ] = newStyler;
			return( this );

		} else {

			stylers[ name ] = newStyler.proxyCSS;
			return( this );

		}

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// Every "styler" needs to hang off of very other styler. And, as each styler is
	// accessed, it needs to aggregate the pending CSS from all of the previous stylers
	// in the access path. To do this, we're going to use a Proxy object.
	function createStylerProxy( rootProp, rootCSS = "" ) {

		var proxyCSS = ( rootCSS + ";" + stylers[ rootProp ] );

		// Every "styler" ultimately needs to be a Function call that applies the
		// aggregate CSS to the given value.
		var applyAggregateCSS = function( value ) {

			logItemQueue.push({
				value: value,
				css: ( rootStyler + ";" + proxyCSS )
			});

			return( ECHO_TOKEN );

		};

		var stylerProxy = new Proxy(
			applyAggregateCSS,
			{
				get: function( target, prop ) {

					// Since we can alias styler proxies, we need a way to return the
					// aggregated CSS for any given proxy.
					if ( prop === "proxyCSS" ) {

						return( proxyCSS );

					}

					if ( prop in stylers ) {

						return( createStylerProxy( prop, proxyCSS ) );

					}

				}
			}
		);

		return( stylerProxy );

	}


	// I provide an echo-based wrapper for the given Console Function. This uses an
	// internal queue to aggregate values before calling the underlying Console Function
	// with the desired CSS formatting.
	function wrapConsoleFunction( consoleFunction ) {

		function consoleFunctionWrapper() {

			// As we loop over the arguments, we're going to aggregate a set of inputs
			// and modifiers. The Inputs will ultimately be collapsed down into a single
			// string that acts as the first console.log parameter while the modifiers
			// are then SPREAD into console.log as 2...N.
			// --
			// NOTE: After each input/modifier pair, I'm adding a RESET pairing. This
			// implicitly resets the CSS after every formatted pairing.
			var inputs = [];
			var modifiers = [];

			for ( var rawArg of arguments ) {

				// When the styler methods are called, they return a special token. This
				// token indicates that we should pull the corresponding value out of the
				// QUEUE instead of trying to consume the given argument directly.
				if ( rawArg === ECHO_TOKEN ) {

					var item = logItemQueue.shift();

					inputs.push( ( "%c" + item.value ), RESET_INPUT );
					modifiers.push( item.css, RESET_CSS );

				// For every other argument type, output the value directly.
				} else {

					if (
						( typeof( rawArg ) === "object" ) ||
						( typeof( rawArg ) === "function" )
						) {

						inputs.push( "%o", RESET_INPUT );
						modifiers.push( rawArg, RESET_CSS );

					} else {

						inputs.push( ( "%c" + rawArg ), RESET_INPUT );
						modifiers.push( RESET_CSS, RESET_CSS );

					}

				}

			}

			consoleFunction( inputs.join( "" ), ...modifiers );

			// Once we output the aggregated value, reset the queue. This should have
			// already been emptied by the .shift() calls; but the explicit reset here
			// acts as both a marker of intention as well as a fail-safe.
			logItemQueue = [];

		}

		return( consoleFunctionWrapper );

	}

}
