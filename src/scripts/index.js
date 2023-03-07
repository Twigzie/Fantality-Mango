var Settings = {
    init: () => {

        $(".main-dialogs")
            .on("mouseenter", ".dialog-footer-option.select", (e) => {
                $(".dialog-footer-option.select").removeClass("selected");
                $(e.currentTarget).addClass("selected");
            })

        Handlebars.registerHelper('switch', function(value, options) {
          this.switch_value = value;
          return options.fn(this);
        });        
        Handlebars.registerHelper('case', function(value, options) {
          if (value == this.switch_value) {
            return options.fn(this);
          }
        });        
        Handlebars.registerHelper('default', function(value, options) {
            return true;
        });
        Handlebars.registerHelper('encode', function(value, options) {
            return Helpers.ToBase64(value);
        });

        Settings.background.change();
        
    },
    load: ((name) => {
        return JSON.parse(localStorage.getItem(name));
    }),
    save: ((name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    }),
    background: (() => {
        return { 
            change: function () {
                $.getJSON("https://www.fantalitystudios.ca/assets/videos/menus/menus.json", (data) => {
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
