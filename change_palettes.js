const palettes = ['color', 'dmg', 'gbp', 'gbl', 'sgb'];

window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let bgps = urlParams.get('bgps');

    if (bgps === null) {
        bgps = palettes[0];
    }

    change_palette(bgps)
};

const onGroseilleClick = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let bgps_i = palettes.indexOf(urlParams.get('bgps'));
    if (bgps_i < 0) {
        bgps_i = 0;
    }

    bgps_i = (bgps_i + 1) % palettes.length;

    window.location.search = `bgps=${palettes[bgps_i]}`;
};
document.querySelectorAll(".groseille-button").forEach(b => b.addEventListener("click", onGroseilleClick));

const change_palette = function (palettes) {
    const sheet = `style/palettes/${palettes}.css`;

    const cssId = "bgps";
    const cssIdCustom = "customBgps";
    const cssElement = document.getElementById(cssId);

    if (!cssElement) {
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
