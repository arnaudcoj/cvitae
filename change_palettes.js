window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const palettes = urlParams.get('bgps');
    let sheet;

    if (palettes == undefined) {
        sheet = 'style/palettes/color.css';
    } else {
        sheet = `style/palettes/${palettes}.css`;
    }

    const cssId = "bgps";
    const cssIdCustom = "customBgps";
    const cssElement = document.getElementById(cssId);

    console.log(cssElement?.href);

    if (!cssElement) {
        console.log("new");
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssIdCustom;
        link.rel  = 'stylesheet';
        link.href = sheet;
        link.type = 'text/css';
        link.media = 'all';
        head.appendChild(link);
    } else if (!cssElement.href.endsWith(sheet)) {
        cssElement.href = sheet;
    }
};
