!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.assets=n({1:function(n,e,l,r,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n'+(null!=(e=o(l,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?o(e,"selected"):e,{name:"if",hash:{},fn:n.program(2,a,0,t),inverse:n.program(4,a,0,t),data:a,blockParams:t,loc:{start:{line:15,column:20},end:{line:19,column:27}}}))?e:"")+"                </li>\r\n\r\n"},2:function(n,e,l,r,a,t){var o=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link selected" href="'+s(o(null!=(n=t[1][0])?c(n,"endpoint"):n,e))+'">'+s(o(null!=(n=t[1][0])?c(n,"name"):n,e))+"</a>\r\n"},4:function(n,e,l,r,a,t){var o=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link" href="'+s(o(null!=(n=t[1][0])?c(n,"endpoint"):n,e))+'">'+s(o(null!=(n=t[1][0])?c(n,"name"):n,e))+"</a>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,r,a,t){var o,s=null!=e?e:n.nullContext||{},c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(o=null!=(o=c(l,"title")||(null!=e?c(e,"title"):e))?o:n.hooks.helperMissing)?o.call(s,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:7,column:43},end:{line:7,column:52}}}):o)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(t=c(l,"each").call(s,null!=e?c(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:12,column:12},end:{line:22,column:21}}}))?t:"")+"\r\n        </ul>\r\n\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.colors=n({1:function(n,e,l,r,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'            \r\n                <li class="assets-options-menu-item">\r\n'+(null!=(e=o(l,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?o(e,"selected"):e,{name:"if",hash:{},fn:n.program(2,a,0,t),inverse:n.program(4,a,0,t),data:a,blockParams:t,loc:{start:{line:16,column:20},end:{line:20,column:27}}}))?e:"")+"                </li>\r\n\r\n"},2:function(n,e,l,r,a,t){var o=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link selected" href="'+s(o(null!=(n=t[1][0])?c(n,"endpoint"):n,e))+'">'+s(o(null!=(n=t[1][0])?c(n,"name"):n,e))+"</a>\r\n"},4:function(n,e,l,r,a,t){var o=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <a class="assets-options-menu-item-link" href="'+s(o(null!=(n=t[1][0])?c(n,"endpoint"):n,e))+'">'+s(o(null!=(n=t[1][0])?c(n,"name"):n,e))+"</a>\r\n"},6:function(n,e,l,r,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\r\n"+(null!=(e=o(l,"if").call(null!=e?e:n.nullContext||{},null!=(e=t[0][0])?o(e,"selected"):e,{name:"if",hash:{},fn:n.program(7,a,0,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:35,column:12},end:{line:51,column:19}}}))?e:"")+"            \r\n"},7:function(n,e,l,r,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\r\n"+(null!=(t=o(l,"each").call(null!=e?e:n.nullContext||{},null!=e?o(e,"colors"):e,{name:"each",hash:{},fn:n.program(8,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:38,column:16},end:{line:49,column:25}}}))?t:"")+"\r\n"},8:function(n,e,l,r,a,t){var o=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n                    <div class="color-container">            \r\n                        <div class="color-swatch-container copy" style="background: '+s(o(null!=(n=t[0][0])?c(n,"color"):n,e))+'" title="'+s(o(null!=(n=t[0][0])?c(n,"name"):n,e))+": "+s(o(null!=(n=t[0][0])?c(n,"color"):n,e))+'" data-clipboard-text="'+s(o(null!=(n=t[0][0])?c(n,"color"):n,e))+'">\r\n                            <div class="color-text-options">\r\n                                <span class="color-title-name">'+s(o(null!=(n=t[0][0])?c(n,"name"):n,e))+"</span>\r\n                            </div>               \r\n                        </div>\r\n                    </div>\r\n                    \r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,r,a,t){var o,s=null!=e?e:n.nullContext||{},c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(o=null!=(o=c(l,"title")||(null!=e?c(e,"title"):e))?o:n.hooks.helperMissing)?o.call(s,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):o)+'</span>\r\n\r\n        <ul class="assets-options-menu-container">\r\n\r\n'+(null!=(o=c(l,"each").call(s,null!=e?c(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:13,column:12},end:{line:23,column:21}}}))?o:"")+'\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(o=c(l,"each").call(s,null!=e?c(e,"current"):e,{name:"each",hash:{},fn:n.program(6,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:33,column:8},end:{line:53,column:17}}}))?o:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0}),e.nameplates=n({1:function(n,e,l,r,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\r\n            <div class="nameplate-container">            \r\n                <div class="nameplate-image-container">\r\n                    <img src="'+n.escapeExpression(n.lambda(null!=(t=t[0][0])?o(t,"image"):t,e))+'" alt="Loading...">             \r\n                </div>\r\n            </div>\r\n            \r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,r,a,t){var o,s=null!=e?e:n.nullContext||{},c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="assets-container">\r\n\r\n    <div class="assets-options-header">\r\n\r\n        <span class="assets-options-title">'+n.escapeExpression("function"==typeof(o=null!=(o=c(l,"title")||(null!=e?c(e,"title"):e))?o:n.hooks.helperMissing)?o.call(s,{name:"title",hash:{},data:a,blockParams:t,loc:{start:{line:8,column:43},end:{line:8,column:52}}}):o)+'</span>\r\n\r\n    </div>\r\n\r\n    <div class="assets-options-footer">\r\n\r\n'+(null!=(t=c(l,"each").call(s,null!=e?c(e,"current"):e,{name:"each",hash:{},fn:n.program(1,a,1,t),inverse:n.noop,data:a,blockParams:t,loc:{start:{line:16,column:8},end:{line:25,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0})}();