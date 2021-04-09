var Helpers = (() => {
    function isEmpty(source) {
        return (source && Object.keys(source).length === 0)
    }
    function GetParams() {
        var params = {};
        var search = window.location.search.substring(1);
        var options = search.split('&');
        for (var i = 0; i < options.length; i++) {
            var option = options[i].split('=');
            if (option && option.length === 2) {
                if (params.hasOwnProperty(option[0]))
                    continue;
                params[option[0]] = option[1];
            }
        }
        return params;
    }
    function ToBase64(source) {
        return (source) ? btoa(JSON.stringify(source)) : {};
    }
    function FromBase64(source) {
        return (source) ? JSON.parse(atob(source)) : {};
    }
    return {
        IsEmpty: isEmpty,
        GetURLParams: GetParams,
        ToBase64: ToBase64,
        FromBase64: FromBase64
    }
})();

$(document).ready(() => {
    
});