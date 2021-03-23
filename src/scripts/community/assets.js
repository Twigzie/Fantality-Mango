var Assets = {
    init: () => {
        try {   

            if (Fantality.utils.params) {

            }

            /**
            * Retrieve the json asset for colors
            */
            $.getJSON("https://fantalitystudios.ca/assets/colors/colors.json", (colors) => {

                console.log("Current Assets", colors);

                

                $(".main-content")
                    .empty()
                    .append(Handlebars.templates['colors'](colors));

            });

        } catch (e) {

            /**
             * Remove any previous content
             */
            $(".main-content").empty();

        }
    },
}

$(document).ready(() => {

    Assets.init();

});