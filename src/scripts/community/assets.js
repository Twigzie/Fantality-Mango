var Assets = (() => {
    let config = {
        content: []
    }
    function onInit() {
        console.info("[Assets::Init]");
        try {

            $(".main-content").empty();

            $.getJSON("https://www.fantalitystudios.ca/assets/assets.json", (cache) => {

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
                config.content = cache;

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
                        })
                        .on('click', '.video-thumbnail', (e) => {
                            $(".main-dialogs")
                                .empty()
                                .removeClass('active')
                                .append(Handlebars.templates['dialog-preview']({
                                    title: $(e.currentTarget).data('name'),
                                    preview: $(e.currentTarget).data('file')
                                }))
                                    .find(".dialog-option.select")
                                        .off('click')
                                        .on("click", (e) => {
                                            $(".main-dialogs").empty().removeClass('active');
                                        })
                                .end()
                                .addClass('active');
                        })
                        .on('click', '.nameplate-image', (e) => {
                            $(".main-dialogs")
                                .empty()
                                .removeClass('active')
                                .append(Handlebars.templates['dialog-nameplate']({
                                    nameplate: Fetch($(e.currentTarget).data('name'))
                                }))
                                    .find(".dialog-option.select")
                                        .off('click')
                                        .on("click", (e) => {
                                            $(".main-dialogs").empty().removeClass('active');
                                        })
                                .end()
                                .addClass('active');
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
    function Fetch(value) {
        if (!config.content || config.content.current.length <= 0)
            return {};
        return config.content.current.find((entry) => entry.name === value) || {};
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
        endpoint: "https://www.fantalitystudios.ca/assets/colors/colors.json"
    },
    "images": {
        template: "images",
        endpoint: "https://www.fantalitystudios.ca/assets/images/images.json"
    },
    "videos": {
        template: "videos",
        endpoint: "https://www.fantalitystudios.ca/assets/videos/videos.json"
    }
};
var Groups = {
    "ranks": {
        template: "ranks",
        endpoint: "https://www.fantalitystudios.ca/assets/images/ranks/ranks.json"
    },
    "nameplates": {
        element: ".nameplate-image",
        template: "nameplates",
        endpoint: "https://www.fantalitystudios.ca/assets/images/nameplates/nameplates.json"
    },
    "mcc-ranks": {
        element: ".mcc-ranks-image",
        template: "mcc-ranks",
        endpoint: "https://www.fantalitystudios.ca/assets/images/ranks/mcc/ranks/ranks.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "mcc-tours": {
        element: ".mcc-tours-image",
        template: "mcc-tours",
        endpoint: "https://www.fantalitystudios.ca/assets/images/ranks/mcc/tours/tours.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "mcc-competitive": {
        element: ".mcc-competitive-image",
        template: "mcc-competitive",
        endpoint: "https://www.fantalitystudios.ca/assets/images/ranks/mcc/competitive/competitive.json",
        callback: (e) => {
            console.warn("[TODO: ADD CLIPBOARD COPY NOTIFICATION]");
        }
    },
    "menus": {
        template: "videos-menus",
        endpoint: "https://www.fantalitystudios.ca/assets/videos/menus/menus.json"
    },
    "backgrounds": {
        template: "videos-backgrounds",
        endpoint: "https://www.fantalitystudios.ca/assets/videos/backgrounds/backgrounds.json"
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