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
                    .append(Handlebars.templates[source.template](cache))
                        .on('click', '.notifier', (e) => {
                            $('.main-notifications')
                                .empty()
                                .append(Handlebars.templates['notification']({
                                    title: `'${$(e.currentTarget).data('name')}' was copied to your clipboard!`
                                }));
                            setTimeout(() => {
                                $('.main-notifications').empty();
                            }, 3000);
                        });
            
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
    "colors": {
        element: ".color-swatch-container",
        template: "colors",
        endpoint: "https://fantalitystudios.ca/assets/colors/colors.json"
    },
    "images": {
        template: "images",
        endpoint: "https://fantalitystudios.ca/assets/images/images.json"
    },
    "videos": {
        template: "videos",
        endpoint: "https://fantalitystudios.ca/assets/videos/videos.json"
    }
};
var Groups = {
    "ranks": {
        template: "ranks",
        endpoint: "https://fantalitystudios.ca/assets/images/ranks/ranks.json"
    },
    "nameplates": {
        element: ".nameplate-image",
        template: "nameplates",
        endpoint: "https://fantalitystudios.ca/assets/images/nameplates/nameplates.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "mcc-ranks": {
        element: ".mcc-ranks-image",
        template: "mcc-ranks",
        endpoint: "https://fantalitystudios.ca/assets/images/ranks/mcc/ranks/ranks.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "mcc-tours": {
        element: ".mcc-tours-image",
        template: "mcc-tours",
        endpoint: "https://fantalitystudios.ca/assets/images/ranks/mcc/tours/tours.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "mcc-competitive": {
        element: ".mcc-competitive-image",
        template: "mcc-competitive",
        endpoint: "https://fantalitystudios.ca/assets/images/ranks/mcc/competitive/competitive.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "menus": {
        template: "video-menus",
        endpoint: "https://fantalitystudios.ca/assets/videos/menus/menus.json"
    },
    "backgrounds": {
        template: "video-backgrounds",
        endpoint: "https://fantalitystudios.ca/assets/videos/backgrounds/backgrounds.json"
    }
}

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