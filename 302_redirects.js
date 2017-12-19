if (Modernizr.history    &&
    Modernizr.svg        &&
    Modernizr.inlinesvg  &&
    Modernizr.svgfilters &&
    Modernizr.svgclippaths) {

    //console.debug("Feature - history      : yes");
    //console.debug("Feature - svg          : yes");
    //console.debug("Feature - inlinesvg    : yes");
    //console.debug("Feature - svgfilters   : yes");
    //console.debug("Feature - svgclippaths : yes");
} else {

    //console.log("Feature - history      : no");
    //console.log("Feature - svg          : no");
    //console.log("Feature - inlinesvg    : no");
    //console.log("Feature - svgfilters   : no");
    //console.log("Feature - svgclippaths : no");

    window.location = ("//" + location.hostname + window.mvcBaseUri + "unsupported_browser.html");
};
