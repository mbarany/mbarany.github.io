```
javascript:(function () {
    var r = Math.random();
    var url = 'https://mbarany.github.io/bookmarklets/Bookmarklet-Framework/bookmarklet.js?_=' + r;
    var projectUrl = 'https://mbarany.github.io/bookmarklets/ADP-FSA-upload-fix/main.js?_=' + r;
    var nameSpace = 'com.michaelbarany.bookmarklet';
    var id = nameSpace + '.id';
    var script = document.getElementById(id);
    var s;

    if (script) {
        if (window[nameSpace] && window[nameSpace].die) {
            window[nameSpace].die();
        }
        script.parentElement.removeChild(script);
    }

    s = document.createElement('script');
    s.id = id;
    s.type = 'text/javascript';
    s.src = url;
    s.onload = function () {
        window[nameSpace].run(projectUrl);
    };
    document.body.appendChild(s);
})();
```
