var Settings = {
    init: () => {

        Settings.background.change();

    },
    background: (() => {
        return { 
            change: function () {
                $.getJSON("https://fantalitystudios.ca/assets/videos/menus/menus.json", (data) => {
                    var game = data.current[Math.floor(Math.random() * data.current.length)];
                    var item = game.videos[Math.floor(Math.random() * game.videos.length)];
                    if (item) {
                        console.log(item);
                        $("#background").attr("poster", item.thumbnail);
                        setTimeout(() => { 
                            $("#background").attr("src", item.file);
                        }, 1500)
                    }
                })
            }
        }
    })(jQuery)
};

$(document)
    .ready(() => {

        new ClipboardJS('.copy');
        NProgress.settings.showSpinner = false;

        Settings.init(); 

    })
    .ajaxStart(() => NProgress.start())
    .ajaxStop(() => NProgress.done());