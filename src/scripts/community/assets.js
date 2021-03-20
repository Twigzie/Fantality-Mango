var Assets = {
    init: () => {
        try {            
            
            /**
            * Retrieve the json asset for colors
            */

            $.getJSON("https://fantalitystudios.ca/assets/colors/colors.json", (assets) => {

                console.log("Current Assets", assets);

                /**
                 * Remove any previous content
                 */
                $("main-content").empty();

                /**
                 * 
                 */
                assets.current.forEach((asset) => {

                    /**
                     * Remove any previous content
                     */
                    $("main-content")
                        .append();

                    console.log("Asset", asset);
                    
                });

            });

        } catch (e) {

            /**
             * Remove any previous content
             */
            $("main-content").empty();

        }
    },
}

$(document).ready(() => {
    Assets.init();
});