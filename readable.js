// version 2

javascript:(function(){

// If the url bar doesn't have the 'www' we want to change the url split that we're grabbing
pathArray = window.location.hostname.split('.');
host = pathArray[1];	// host = name of the website (ie nytimes, forbes, techcrunch, etc)

// If the url bar doesn't have the 'www' we want to change the url split that we're grabbing
if (host == 'io' || host == 'com' || host == 'org' || host == 'edu' || host == 'cc' || host == 'in' || host == 'net' || host == 'info' || host == 'me' || host == 'bo' || host == 'go') {
	host = pathArray[0];
}

function hideToggle(toHide) {
	$("'" + toHide + "'").toggle();
	alert(toHide);
}

function loadPage(readable_fillercontent, hideStuff) {

	// hideToggle(toHide);

	// if ( $newContentReadable == null) {
	// 	readable_fillercontent = "<h3>Sorry but it looks like Readable isn't working on this site</h3><br><br>"
	// 	console.log('gotcha');
	// } else {
	// 	alert('balls');
	// }


	$('head').prepend('<link rel="stylesheet" type="text/css" href="http://jacob.io/readable/readable.css">');

	function getDocHeight() { // returns the size of the document.
	    var D = document;
	    return Math.max(
	        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
	        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
	        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	    );
	}

	$('body').prepend('<div id="uniqueIDright" style="height:' + getDocHeight() + 'px;"><div id="readable_sidebar"><a id="hideReadable">Return to origional</a><p style="margin-top:35px;">Thanks for using Readable<p><p>By <a href="http://twitter.com/jcbmllgn" target="_blank">@jcbmllgn</a></p></div><div id="readable_contentReplacement">' + readable_fillercontent + '</div></div>');

	// This adds the on click event to the 'return to last page button'
	// $('head').prepend('<script>(function() { $("a#hideReadable").click(function(){ $("div#uniqueIDright").fadeOut("slow"); }) })();</script>'); 

	$("a#hideReadable").click(function(){ 
		$("div#uniqueIDright").fadeOut("slow");
		$(hideStuff).fadeIn("slow");
		console.log('clicky');
	}); 

	}
console.log(host + ' says boom goes the dynamite.');

$("a#hideReadable").click(function(){ 
	$("div#uniqueIDright").fadeOut("slow");
	$(hideStuff).fadeIn("slow");
	console.log('clicky');
}); 

switch(host) { // I'm checking the name of the current website against sites that readable can function on 
	
	case 'inc':
		// Select all divs you don't want to be shown
		var toHide = 'div#incsharebox, #divvy, #topvideos, #innercontainer-footer, #readmorearticles';
		$(toHide).hide();
		// Grab the div the holds all of the content
		var $newContentReadable = $('div#maincolumn_inner').html();
		loadPage($newContentReadable);
	break;

	case 'reuters':
		var toHide = '.facebookRec, .relatedRail, #masthead, #dd-navigation, #trackbar, #relatedStocks2, .shareLinks, .section, #commentForm, .commentDisclaimer, .articleComments, #trackTabs, #trackbarFlyout, #trackbarError';
		$(toHide).hide();

		var $newContentReadable = $('div.column2').html();
		loadPage($newContentReadable);
	break;

	case 'forbes':
		var toHide = 'div.article_actions, .article_footer, .video_promo_block, #comments, .vestpocket';
		$(toHide).hide();

		var $newContentReadable = $('div#contentwrapper #abovefold .fleft').html();
		loadPage($newContentReadable);
	break;

	case 'techcrunch': // I should format the text here a little better.
		var $newContentReadable = $('div#module-post-detail').html();
		loadPage($newContentReadable);
	break;

	case 'thenextweb':
		var $newContentReadable = $('div.content .media-wrapper .article-wrapper').html();
		loadPage($newContentReadable);
	break;

	case 'boston':
		var toHide = 'div#sharetoolContainer, .OUTBRAIN, #taboola-div, #outBrain, #articleMasthead, #articleComments, #commLoginForm';
		$(toHide).hide();

		var $newContentReadable = $('div#Col1').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'slate':
		var toHide = 'div#share-box-flank, .sl-chunky-tbar, .contentWellBottom, .sl-comments, .contentWellCommentsBottom';
		$(toHide).hide();

		var $newContentReadable = $('article').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'theonion':
		var toHide = 'div.toolbar_side, #topwrapper, #pagination, #recent_slider, #ob_holder, .OUTBRAIN, .videowidget';
		$(toHide).hide();

		var $newContentReadable = $('div#content').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'bostinno':
		var toHide = 'div.related, #dd_ajax_float, .discuss, .dd_content_wrap';
		$(toHide).hide();

		var $newContentReadable = $('div#main').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'boingboing':
		var toHide = '';
		$(toHide).hide();

		var $newContentReadable = $('div#column').html();
		loadPage($newContentReadable);
	break;

	case 'rollingstone':
		var toHide = '#header, #nav, .socialActionsBottom, .rs-plus, .prev-next-wrapper, #insideRs, #outbrain_widget_box, #add-a-comment, #disqus_thread, ';
		$(toHide).hide();

		var $newContentReadable = $('div#col1_content').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'huffingtonpost':
		// $('div.like_box_news div.clearfix div.float_left').remove();
		var $newContentReadable = $('div#news_entries').html();
		loadPage($newContentReadable);
	break;

	case "wired" :
		// $('').remove();
		var $newContentReadable = $('#content').html();
		loadPage($newContentReadable);
	break;

	case "venturebeat":
		// $('').remove();
		var $newContentReadable = $('#content').html();
		loadPage($newContentReadable);
	break;

	case "abcnews":
		var $newContentReadable = $('#story_core').html(),
			toHide = ".headerBgContainer, .headerbg, .show_tools, #share-left, .breadcrumb, .rel_container, #more-coverage";
		loadPage($newContentReadable, toHide);
	break;

	case "cbsnews":
		var $newContentReadable = $('#contentBody').html(),
			toHide = "";
		loadPage($newContentReadable, toHide);
	break;

	case 'mashable':
		// $('div.post_share, #outbrain_height_marker, footer, #comments, section.more-in, div.fb_widget_wrapper, section#commenting').remove();

		var toHide = 'div.post_share, #outbrain_height_marker, footer, #comments, section.more-in, div.fb_widget_wrapper, section#commenting';
		$(toHide).hide();

		var $newContentReadable = $('div#primary').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'jacob':
		$('#readableButton').text('Drag me to your bookmarks');

		var toHide = '#socialObnoxious, #unrelated_news';
		$(toHide).hide();

		var $newContentReadable = $('div#readableGrabsThis').html();
		loadPage($newContentReadable, toHide);
	break;




// These sites don't work:

	case 'time':
		var toHide = 'div.entry-share';
		$(toHide).hide();

		var $newContentReadable = $('div#container').html();
		loadPage($newContentReadable);
	break;

	case 'nytimes':
		var toHide = '';
		$(toHide).hide();

		var $newContentReadable = $('div#readableGrabsThis').html();
		loadPage($newContentReadable, toHide);
	break;

	case 'guardian':
		var toHide = '#content-actions';
		$(toHide).hide();

		var $newContentReadable = $('div#box').html();
		loadPage($newContentReadable);
	break;

	case 'cnn':
		// $('socialObnoxious').remove();
		var $newContentReadable = $('div#cnnContentContainer').html();
		loadPage($newContentReadable);

		alert($newContentReadable);
	break;

	case 'latimes':
		// $('').remove();
		var $newContentReadable = $('#content').html();
		loadPage($newContentReadable);
	break;

	default:
		console.log('not an available website, sorry!');
	break;

};

loadPage();

console.log('Running Readable.io on ' + host);

})();













