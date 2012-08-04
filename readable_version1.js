// version one!
// Similar to version two, but only optimized for two sites and poorly built..



javascript:(function(){ 

	pathArray = window.location.hostname.split('.');
	host = pathArray[1];

	// If the url bar doesn't have the 'www' we want to change the url split that we're grabbing
	if (host == 'io' || host == 'com' || host == 'org' || host == 'edu' || host == 'cc' || host == 'in' || host == 'net' || host == 'info' || host == 'me' || host == 'bo') {
		host = pathArray[0];
	}

	console.log('Readable.io has loaded on ' + host);

	function getDocHeight() { // returns the size of the document.
	    var D = document;
	    return Math.max(
	        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
	        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
	        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	    );
	}

	function havePage() {  // ugly (and definitely not the best way to do it) way of creating the new cover article
		$('body').prepend('<div id="readable_popup" style="width:100%;height:' + getDocHeight() + 'px ;background:#fafafa; position: relative;top:0px;left:0px;;padding-top:200px;z-index:1000;"><h1>This page (' + host +') is now readable.co</h1></div>');
	}


	switch(host) {
		case 'forbes':
			$('div#leaderboardad, div.moduleContainer, div.inline_sharing, div#follow_bar, header, aside, div.global enable_sticky_header, div#sticky_sharing, div.top_link_strip, div.follow_unireg, div.fb_iframe_widget, div.comment_bug, div.follow_links').fadeOut(100);
			$('div#sidebar_follower, .moduleContainer, .universal-footer').remove();
			havePage();
		break;

		case 'thenextweb':
			$('div.blue-box, .side-widget, div.post-toolbar-wrapper, #sidebar-socials-more, #top-stories-article, .popular-widget, footer.universal-footer').fadeOut(100); 
			$('.content-sidebar').css('opacity','0')
			havePage();
		break;

		default:
			console.log('Sorry, Readable doesn\' work on this website :(');
		break;
	}

	$('div#readable_popup').delay(1500).slideUp('500');


})();













