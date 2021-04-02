var Tutorials = (() => {
    function onInit() {
        console.info("[Tutorials::Init]");
        try {

            $(".main-content").empty();

            $.getJSON("https://fantalitystudios.ca/community/tutorials/tutorials.json", (cache) => {

                $(".main-content")
                    .append(Handlebars.templates['assets'](cache))
                        .off('click')
                        .on('click', (e) => {

                        });

            });

        } 
        catch (error) {
            $(".main-content").empty();
            console.error("[Tutorials::Init]", error);
        }
    }
    function onLoad(params) {
        console.info("[Assets::Load]", params);
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
            console.error("[Assets::Init]", error);
        }
    }
    return {
        Init: onInit,
        Load: onLoad
    }
})();

var Types = {
    "skins": {
        endpoint: "https://fantalitystudios.ca/community/tutorials/controller/skins/skins.json"
    }
};

$(document).ready(() => {
    
    try {

        var params = Helpers.GetURLParams();
        if (Helpers.IsEmpty(params)) {
            Assets.Init();
        }
        else {
            Assets.Load(params);
        }
        
    } 
    catch (error) {
        console.error("[]", error);
    }

});