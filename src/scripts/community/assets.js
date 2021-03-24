
var Assets = {
    Initialize: (params) => {
        try {

            var options = {
                params: params || null,
                target: Endpoints[params.type] || null
            };

            if (!options.params)
                console.error('[]', "");
            if (!options.target)
                console.error('[]', "");

            $.getJSON(options.target.endpoint, (cache) => {

                console.log("Assets", cache);

                if (options.params.index >= 0 && cache.current[options.params.index])
                    cache.current[options.params.index].selected = true;

                $(".main-content")
                    .empty()
                    .append(Handlebars.templates[options.target.template](cache));

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
                    case "type":  params.type  = option[1]; break;
                    case "index": params.index = option[1]; break;
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
        endpoint: "https://fantalitystudios.ca/assets/colors/colors.json"
    }
};

$(document).ready(() => {
    
    var params = Assets.GetUrlParams();
    if (params) {
        Assets.Initialize(params);
    }

});