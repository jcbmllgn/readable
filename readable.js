// version 2

javascript:(function(){
// If the url bar doesn't have the 'www' we want to change the url split that we're grabbing
pathArray = window.location.hostname.split('.');
host = pathArray[1];	// host = name of the website (ie nytimes, forbes, techcrunch, etc)

// If the url bar doesn't have the 'www' we want to change the url split that we're grabbing
if (host == 'io' || host == 'com' || host == 'org' || host == 'edu' || host == 'cc' || host == 'in' || host == 'net' || host == 'info' || host == 'me' || host == 'bo') {
	host = pathArray[0];
}

function loadPage(readable_fillercontent) {
// ugly (and definitely not the best way to do it) way of creating the new cover articl

	$('head').prepend('<link rel="stylesheet" type="text/css" href="http://jacob.io/readable.co/readable.css">');

	function getDocHeight() { // returns the size of the document.
	    var D = document;
	    return Math.max(
	        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
	        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
	        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	    );
	}

	$('body').prepend('<div id="uniqueIDright" style="height:' + getDocHeight() + 'px;"><div id="readable_sidebar"><a id="hideReadable">Return to origional</a><p>Thanks for using <a href="http://readable.co" target="_blank">Readable.co</a><p><p>By <a href="http://twitter.com/jcbmllgn" target="_blank">@jcbmllgn</a></p></div><div id="readable_contentReplacement">' + readable_fillercontent + '</div></div>');

	// This adds the on click event to the 'return to last page button'
	$('head').prepend('<script>(function() { $("a#hideReadable").click(function(){  $("div#uniqueIDright").fadeOut("slow");console.log("test");}) })();</script>'); 

	}



switch(host) {
	case 'jacob':
		// grab content:
		var newContentReadable = $('div#thisissoveryreadable').html(),
			newHeight = newContentReadable.height;
		// load content into new readable page:
		loadPage(newContentReadable); 
	break;

	case 'forbes':
		$('div.article_actions, .article_footer, .video_promo_block, #comments').remove();
		var $newContentReadable = $('div#contentwrapper #abovefold .fleft').html();
		loadPage($newContentReadable);
	break;

	case 'techcrunch': // I should format the text here a little better.
		var $newContentReadable = $('div#module-post-detail').html();
		loadPage($newContentReadable);
	break;

	case 'nytimes':
		var $newContentReadable = $('div#article div.first').html();
		loadPage($newContentReadable);
	break;

	case 'thenextweb':
		var $newContentReadable = $('div.content .media-wrapper .article-wrapper').html();
		loadPage($newContentReadable);
	break;

	case 'boston':
		$('div#sharetoolContainer, .OUTBRAIN, #taboola-div, #outBrain').remove();
		var $newContentReadable = $('div#Col1').html();
		loadPage($newContentReadable);
	break;

	case 'inc':
		$('div#incsharebox, #divvy, #topvideos, #innercontainer-footer, #readmorearticles').remove();
		var $newContentReadable = $('div#maincolumn_inner').html();
		loadPage($newContentReadable);
	break;

	case 'huffingtonpost':
		// $('div.like_box_news div.clearfix div.float_left').remove();
		var $newContentReadable = $('div#news_entries').html();
		loadPage($newContentReadable);
	break;

	case 'mashable':
		$('div.post_share, #outbrain_height_marker, footer, #comments, section.more-in, div.fb_widget_wrapper, section#commenting').remove();
		var $newContentReadable = $('div#primary').html();
		loadPage($newContentReadable);
	break;


};

loadPage();


console.log('Running Readable.io on ' + host);

})();












