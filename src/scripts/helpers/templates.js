!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.assets=n({1:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n'+(null!=(e=s(r,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?s(e,"selected"):e,{name:"if",hash:{},fn:n.program(2,a,0,t),inverse:n.program(4,a,0,t),data:a,blockParams:t,loc:{start:{line:15,column:20},end:{line:19,column:27}}}))?e:"")+"                </li>\r\n\r\n"},2:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link selected" href="'+o(s(null!=(n=t[1][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[1][0])?i(n,"name"):n,e))+"</a>\r\n"},4:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link" href="'+o(s(null!=(n=t[1][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[1][0])?i(n,"name"):n,e))+"</a>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:7,column:43},end:{line:7,column:52}}}):s)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:12,column:12},end:{line:22,column:21}}}))?t:"")+"\r\n        </ul>\r\n\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.colors=n({1:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n'+(null!=(e=s(r,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?s(e,"selected"):e,{name:"if",hash:{},fn:n.program(2,a,0,t),inverse:n.program(4,a,0,t),data:a,blockParams:t,loc:{start:{line:16,column:20},end:{line:20,column:27}}}))?e:"")+"                </li>\r\n\r\n"},2:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link selected" href="'+o(s(null!=(n=t[1][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[1][0])?i(n,"name"):n,e))+"</a>\r\n"},4:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link" href="'+o(s(null!=(n=t[1][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[1][0])?i(n,"name"):n,e))+"</a>\r\n"},6:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\r\n"+(null!=(e=s(r,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?s(e,"selected"):e,{name:"if",hash:{},fn:n.program(7,a,0,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:35,column:12},end:{line:51,column:19}}}))?e:"")+"            \r\n"},7:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\r\n"+(null!=(t=s(r,"each").call(null!=e?e:n.nullContext||{},null!=e?s(e,"colors"):e,{name:"each",hash:{},fn:n.program(8,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:38,column:16},end:{line:49,column:25}}}))?t:"")+"\r\n"},8:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n                    <div class="color-container">            \r\n                        <div class="color-swatch-container copy" style="background: '+o(s(null!=(n=t[0][0])?i(n,"color"):n,e))+'" title="'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+": "+o(s(null!=(n=t[0][0])?i(n,"color"):n,e))+'" data-clipboard-text="'+o(s(null!=(n=t[0][0])?i(n,"color"):n,e))+'">\r\n                            <div class="color-text-options">\r\n                                <span class="color-title-name">'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+"</span>\r\n                            </div>               \r\n                        </div>\r\n                    </div>\r\n                    \r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):s)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(s=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:13,column:12},end:{line:23,column:21}}}))?s:"")+'\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(s=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(6,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:33,column:8},end:{line:53,column:17}}}))?s:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.images=n({1:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n                    <a class="assets-options-menu-item-link" href="'+o(s(null!=(n=t[0][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+"</a>\r\n                </li>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:7,column:43},end:{line:7,column:52}}}):s)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:12,column:12},end:{line:18,column:21}}}))?t:"")+"\r\n        </ul>\r\n\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e["mcc-competitive"]=n({1:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n            <div class="mcc-competitive-container">            \r\n                <div class="mcc-competitive-image-container">\r\n                    <img class="mcc-competitive-image" src="'+n.escapeExpression(n.lambda(null!=(t=t[0][0])?s(t,"image"):t,e))+'" alt="Loading...">             \r\n                </div>\r\n            </div>\r\n            \r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):s)+'</span>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:16,column:8},end:{line:25,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e["mcc-ranks"]=n({1:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n            <div class="mcc-ranks-container">            \r\n                <div class="mcc-ranks-image-container">\r\n                    <img class="mcc-ranks-image" src="'+o(s(null!=(n=t[0][0])?i(n,"image"):n,e))+'" alt="Loading..." title="'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+" ("+o(s(null!=(n=t[0][0])?i(n,"rank"):n,e))+')">             \r\n                </div>\r\n            </div>\r\n            \r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):s)+'</span>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:16,column:8},end:{line:25,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e["mcc-tours"]=n({1:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n            <div class="mcc-tours-container">            \r\n                <div class="mcc-tours-image-container">\r\n                    <img class="mcc-tours-image" src="'+o(s(null!=(n=t[0][0])?i(n,"image"):n,e))+'" alt="Loading..." title="'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+'"">             \r\n                </div>\r\n            </div>\r\n            \r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):s)+'</span>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:16,column:8},end:{line:25,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.nameplates=n({1:function(n,e,r,l,a,t){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n            <div class="nameplate-container">            \r\n                <div class="nameplate-image-container">\r\n                    <img class="nameplate-image" src="'+n.escapeExpression(n.lambda(null!=(t=t[0][0])?s(t,"image"):t,e))+'" alt="Loading...">             \r\n                </div>\r\n            </div>\r\n            \r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):s)+'</span>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:16,column:8},end:{line:25,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.ranks=n({1:function(n,e,r,l,a,t){var s=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n                    <a class="assets-options-menu-item-link" href="'+o(s(null!=(n=t[0][0])?i(n,"endpoint"):n,e))+'">'+o(s(null!=(n=t[0][0])?i(n,"name"):n,e))+"</a>\r\n                </li>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,r,l,a,t){var s,o=null!=e?e:n.nullContext||{},i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(s=null!=(s=i(r,"title")||(null!=e?i(e,"title"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:7,column:43},end:{line:7,column:52}}}):s)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(t=i(r,"each").call(o,null!=e?i(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:12,column:12},end:{line:18,column:21}}}))?t:"")+"\r\n        </ul>\r\n\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0})}();