
var Assets = {
    init: (source) => {
        try {

            /**
            * Retrieve the json asset
            */
            $.getJSON(source.endpoint, (cache) => {

                console.log("Assets", cache);

                $(".main-content")
                    .empty()
                    .append(Handlebars.templates[source.template]({
                        current: cache.current,
                        selected: source.selected
                    }));

            });

        } catch (e) {

            /**
             * Remove any previous content
             */
            $(".main-content").empty();

        }
    },
    GetUrlParams() {
        var params = {};
        var search = window.location.search.substring(1);
        var options = search.split('&');
        for (var i = 0; i < options.length; i++) {
            var option = options[i].split('=');
            if (option && option.length === 2) {
                if (params.hasOwnProperty(option[0]))
                    continue;
                switch (option[0]) {
                    case "type":     params.type     = option[1]; break;
                    case "selected": params.selected = option[1]; break;
                    default: continue;
                }

            }
        }
        return params || {};
    }
}

var Endpoints = {
    colors: {
        template: "colors",
        selected: 0,
        endpoint: "https://fantalitystudios.ca/assets/colors/colors.json"
    }
};

$(document).ready(() => {

    var params = Assets.GetUrlParams();
    if (params && Endpoints[params.type]) {

        Assets.init(Endpoints[params.type]);

    }

});