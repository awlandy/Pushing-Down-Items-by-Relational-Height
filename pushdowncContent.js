function setcontentHeight() {
    var element = document.getElementById("ID");
    var contentPlacement = element.style.top + element.offsetHeight;    //you can add up all the height that you want to push down
                                                                //like element1.offsetHeight + element2.offsetHeight blahblahblah
    // contentPlacement returns integar value
    document.getElementById("content").style.marginTop = contentPlacement.toString()+"px";
    // js HTMLelement.style.marginTop takes string
	}
window.onload = setcontentHeight;
