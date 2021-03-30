var Assets = (() => {
    function onInit() {
        console.info("[Assets::Init]");
        try {

            $(".main-content").empty();

            $.getJSON("https://fantalitystudios.ca/assets/assets.json", (cache) => {

                $(".main-content")
                    .append(Handlebars.templates['assets'](cache))
                        .off('click')
                        .on('click', (e) => {

                        });

            });

        } 
        catch (error) {
            $(".main-content").empty();
            console.error("[Assets::Init]", error);
        }
    }
    function onLoad(params) {
        console.info("[Assets::Load]", params);
        try {

            //
            var target = Endpoints[params.type];
            if (params.group)
                target = Endpoints[params.group];


            //
            $(".main-content").empty();

            //
            $.getJSON(target.endpoint, (cache) => {

                //
                if (cache.current[params.index])
                    cache.current[params.index].selected = true;

                //
                $(".main-content")
                    .append(Handlebars.templates[target.template](cache));
            
                //
                if (target.element) {
                    $(target.element).off('click')
                        .on('click', target.callback);
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

var Endpoints = {
    colors: {
        element: ".color-swatch-container",
        template: "colors",
        endpoint: "https://fantalitystudios.ca/assets/colors/colors.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    images: {
        template: "images",
        endpoint: "https://fantalitystudios.ca/assets/images/images.json"
    },
    nameplates: {
        element: ".nameplate-image",
        template: "nameplates",
        endpoint: "https://fantalitystudios.ca/assets/images/nameplates/nameplates.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
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