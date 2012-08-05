##Readable: Uncluttering (some) websites and blogs##

This simple bookmarklet was made to make reading websites easier. Some blogs and news sites have great content but the page is cluttered with social sharing, headers, footers, sidebars, popups, etc.. Readable removes the distractions and just gives you the content.


Check out the landing page for Readable [here](http://jacob.io/readable/ "landing").

####How it's built####
You can view the js file that does all the work above, it's called readable.js

The key piece of readable is the loadPage() function. This function accepts two ###, one is the article that's being made 'readable' and the other is any specific div(s) that need to be hidden.
A little more on the second ###: Sometimes articles will have share buttons or other advertising mixed in with the article, the second ## takes a string of css selectors seperated by commas then hides those when the loadPage function runs then shows them when the user return's to the origional document. 

I have a switch() statement with a 'case' for every website that Readable runs on. The key piece of the switch statement is the pathArray on line 6 & 7. The way I tell websites apart is by the URL bar (probably not the best way to do this). Once I know what website the user is on I pass the website name through the switch, if the website doesn't exist in the switch then nothing happens. If the website does exists then I manually grab the content via css id AND I grab all content that I want to hide while running readable. These two pieces are fed into loadPage as mentioned above.


I'm having issues getting it to work on NYtimes, LAtimes, CNN, and Guardian, this is the console error I recieve:

Uncaught TypeError: Cannot call method 'click' of null readable.js:56

If you know how to solve this, shoot me and [email](mailto:jacobdmulligan@gmail.com?Subject=Hello%20again "jacobdmulligan@gmail.com") :)