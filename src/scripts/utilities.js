var Fantality = {
    utils: (() => {

        var config = {
            params: {}
        };

        function Init() {
            GetUrlParams();
        }
        function GetUrlParams() {
            config.params = {};
            var search = window.location.search.substring(1);
            var options = search.split('&');
            for (var i = 0; i < options.length; i++) {
                var option = options[i].split('=');
                if (params.hasOwnProperty(option[0]))
                    continue;
                params.push(option);
            }
            return config.params || {};
        }

        return {
            init: Init,
            params: config.params
        }

    })(jquery)
};

$(document).ready(() => {
    Fantality.utils.init();
});