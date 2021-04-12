var Overlays = (() => {
    function onInit() {
        console.info("[Overlays::Init]");
        try {

            $(".main-content").empty();

            $.getJSON("https://fantalitystudios.ca/community/overlays/overlays.json", (cache) => {

                $(".main-content")
                    .append(Handlebars.templates['overlays'](cache))
                        .off('click')
                        .on('click', (e) => {

                        });

            });

        } 
        catch (error) {
            $(".main-content").empty();
            console.error("[Overlays::Init]", error);
        }
    }
    function onLoad(params) {
        console.info("[Overlays::Load]", params);
        try {

            // If we have an endpoint of the specified type, use it.
            var source = Types[params.type];
            if (params.group) {
                //If we have an endpoint of the specified group, use it instead.
                source = Groups[params.group];
            }

            //
            $(".main-content").empty();

            //
            $.getJSON(source.endpoint, (cache) => {

                //
                if (params.index >= 0 && cache.current[params.index]) {
                    cache.current[params.index].selected = true;
                }

                //
                $(".main-content")
                    .append(Handlebars.templates[source.template](cache));
            
                //
                if (source.element) {
                    $(source.element).off('click')
                        .on('click', source.callback);
                }
            
            });

        } 
        catch (error) {
            $(".main-content").empty();
            console.error("[Tutorials::Init]", error);
        }
    }
    return {
        Init: onInit,
        Load: onLoad
    }
})();

var Types = {
    "portfolio": {
        template: "overlay-portfolio",
        endpoint: "https://fantalitystudios.ca/community/overlays/portfolio/portfolio.json"
    }
};

$(document).ready(() => {
    
    try {

        var params = Helpers.GetURLParams();
        if (Helpers.IsEmpty(params)) {
            Overlays.Init();
        }
        else {
            Overlays.Load(params);
        }
        
    } 
    catch (error) {
        console.error("[Overlays::Error]", error);
    }

});