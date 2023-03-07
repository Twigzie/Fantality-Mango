var Gamertags = (() => {
    
    var config = {
        current: []
    };

    function init() {
        try {

            config.current = Settings.load('gamertags') || {
                version: 1,
                created: new Date().getTime(),
                lastUpdated: new Date().getTime(),
                lastExported: new Date().getTime(),
                gamertags: []
            };

            $(".main-content")
                .empty()
                .append(Handlebars.templates['gamertags-home'](config.current))
                    .find(".gamertags-options-menu-item.new")
                        .off('click')
                        .click((e) => {

                            $(".main-dialogs")
                                .empty()
                                .removeClass('active')
                                .append(Handlebars.templates['dialog-gamertag-new']({
                                    option: {
                                        ok: true,
                                        cancel: true
                                    }
                                }))
                                    .find(".dialog-footer-option.ok.select")
                                        .off('click')
                                        .on("click", (e) => {

                                            var name = $(".dialog-gamertag-new-input-name")[0].value;                                            
                                            var email = $(".dialog-gamertag-new-input-email")[0].value;
                                            var password = $(".dialog-gamertag-new-input-password")[0].value;
                                            var input = $(".dialog-gamertag-new-input-type")[0].value;

                                            if (name == null || name === "") {
                                                alert("An invalid gamertag was specified. Please try again!");
                                            }
                                            else if (email == null || email === "") {
                                                alert("An invalid email was specified. Please try again!");
                                            }
                                            else if (password == null || password === "") {
                                                alert("An invalid password was specified. Please try again!");
                                            }
                                            else if (config.current.gamertags.some(item => item.name === gamertag.name)) {
                                                alert("A gamertag with the same name was already added. Please try again!");
                                            }
                                            else if (config.current.gamertags.some(item => item.email === gamertag.email)) {
                                                alert("A gamertag with the same email was already added. Please try again!");
                                            }
                                            else if (input === "") {
                                                alert("An invalid input type was specified. Please try again!");
                                            }
                                            else {

                                                config.current.gamertags.push({
                                                    name: name,
                                                    email: email,
                                                    password: password,
                                                    type: input
                                                });
                                                Settings.save('gamertags', config.current);
                                                location.reload();

                                            }

                                        }).end()
                                    .find(".dialog-footer-option.cancel.select")
                                        .off('click')
                                        .on("click", (e) => {
                                            $(".main-dialogs").empty().removeClass('active');
                                        }).end()
                                .addClass('active');

                        }).end()
                    .find(".gamertags-options-menu-item.import")
                        .off('click')
                        .click((e) => {
                            alert("Import");
                        }).end()
                    .find(".gamertags-options-menu-item.export")
                        .off('click')
                        .click((e) => {
                            alert("Export");
                        }).end();

            if (config.current) {

                $(".gamertags-options-footer")
                    .empty()
                    .append(Handlebars.templates['gamertags-list'](config.current))
                    .find(".gamertag-copy-email")
                        .off('click')
                        .click((e) => {

                            var value = $(e.currentTarget).parent(".gamertag-email-container-right").find(".gamertag-input-email")[0].value;  
                            navigator.clipboard.writeText(value)
                                .then(() => {
                                    $('.main-notifications')
                                        .empty()
                                        .append(Handlebars.templates['notification']({
                                            title: "'Email' was copied to your clipboard!"
                                        }));
                                    setTimeout(() => {
                                        $('.main-notifications').empty();
                                    }, 3000);
                                })
                                .catch((error) => {
                                    $('.main-notifications')
                                        .empty()
                                        .append(Handlebars.templates['notification']({
                                            title: "Error copying 'Email' to your clipboard!"
                                        }));
                                    setTimeout(() => {
                                        $('.main-notifications').empty();
                                    }, 3000);
                                });

                        }).end()
                    .find(".gamertag-copy-password")
                        .off('click')
                        .click((e) => {

                            var value = $(e.currentTarget).parent(".gamertag-password-container-right").find(".gamertag-input-password")[0].value; 
                            navigator.clipboard.writeText(value)
                                .then(() => {
                                    $('.main-notifications')
                                        .empty()
                                        .append(Handlebars.templates['notification']({
                                            title: "'Password' was copied to your clipboard!"
                                        }));
                                    setTimeout(() => {
                                        $('.main-notifications').empty();
                                    }, 3000);
                                })
                                .catch((error) => {
                                    $('.main-notifications')
                                        .empty()
                                        .append(Handlebars.templates['notification']({
                                            title: "Error copying 'Password' to your clipboard!"
                                        }));
                                    setTimeout(() => {
                                        $('.main-notifications').empty();
                                    }, 3000);
                                });

                        }).end()
                    .find(".gamertag-options-menu-item-link.delete")
                        .off('click')
                        .click((e) => {

                            var target = e.currentTarget;

                            $(".main-dialogs")
                                .empty()
                                .removeClass('active')
                                .append(Handlebars.templates['dialog-message']({
                                        title: "Confirm",
                                        message: "Are you sure you want to remove the selected gamertag?",
                                        options: {
                                            confirm: true
                                        }
                                }))
                                    .find(".dialog-footer-option.no.select")
                                        .off('click')
                                        .on("click", (e) => {
                                                $(".main-dialogs")
                                                    .empty()
                                                    .removeClass('active');
                                        }).end()
                                    .find(".dialog-footer-option.yes.select")
                                        .off('click')
                                        .on("click", (e) => {

                                                var gamertagName = $(target).parents(".gamertag-container").first().data("gamertag");
                                                var gamertagIndex = config.current.gamertags.findIndex(item => item.name === gamertagName);
                
                                                config.current.gamertags.splice(gamertagIndex, 1);
                                                Settings.save('gamertags', config.current);
                                                location.reload();

                                        }).end()
                                .addClass('active');

                        }).end();
            }
            else {
                
                var settings = Settings.load('dialogs') || {
                    hideGamertagsDialog: false
                };
                if (settings && settings.hideGamertagsDialog)
                    return;

                $(".main-dialogs")
                    .empty()
                    .removeClass('active')
                    .append(Handlebars.templates['dialog-message']({
                        title: "No gamertags available!",
                        message: "Select 'New' to create a new gamertag or 'Import' to import an existing list.",
                        options: {
                            ok: true,
                            checkbox: {
                                message: "Do not show this message again"
                            }
                        }
                    }))
                        .find(".dialog-footer-option.ok.select")
                            .off('click')
                            .on("click", (e) => {
                                location.reload();
                            }).end()
                        .find(".dialog-footer-option-checkbox")
                            .off('click')
                            .on("click", (e) => {
                                settings.hideGamertagsDialog = e.currentTarget.checked;
                                Settings.save('dialogs', settings);
                            }).end()
                    .addClass('active');

            }

        } 
        catch (error) {
            $(".main-content").empty();
            console.error("[Assets::Init]", error);
        }
    }
    return {
        init: init
    }
})();

$(document).ready(() => {
    
    try {

        Gamertags.init();
        
    } 
    catch (error) {
        console.error("[Gamertags:Error]", error);
    }

});