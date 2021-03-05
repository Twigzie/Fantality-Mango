var Settings = {
    init: () => {
        Settings.background.change();
    },
    background: (() => {
        return { 
            change: function () {
                $.getJSON("https://twigzie.github.io/Fantality-Assets/assets/videos.json", (data) => {
                    if (data.types) {
                        var game = data[data.types[Math.round(Math.random() * (data.types.length - 1))]];
                        var item = game[Math.round(Math.random() * (game.length - 1))];
                        if (item) {
                            $("#background").attr("poster", item.thumbnail);
                            setTimeout(() => { 
                                $("#background").attr("src", item.video);
                            }, 1500)
                        }
                    }
                })
            }
        }
    })(jQuery)
};

$(document).ready(() => { 
    Settings.init(); 
});