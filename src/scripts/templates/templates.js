!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).colors=n({1:function(n,r,l,a,e,o){var s=n.lambda,t=n.escapeExpression,c=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return'\r\n                <li class="assets-color-menu-item">\r\n                    <a class="assets-color-menu-item-link" href="'+t(s(null!=(n=o[0][0])?c(n,"endpoint"):n,r))+'">'+t(s(null!=(n=o[0][0])?c(n,"name"):n,r))+"</a>\r\n                </li>\r\n\r\n"},3:function(n,r,l,a,e,o){var s=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return"\r\n"+(null!=(o=s(l,"each").call(null!=r?r:n.nullContext||{},null!=r?s(r,"colors"):r,{name:"each",hash:{},fn:n.program(4,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:33,column:12},end:{line:45,column:21}}}))?o:"")+"            \r\n"},4:function(n,r,l,a,e,o){var s=n.lambda,t=n.escapeExpression,c=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return'\r\n                <div class="color-container">            \r\n                    <div class="swatch-container" style="background: '+t(s(null!=(n=o[0][0])?c(n,"color"):n,r))+'">\r\n                        <div class="text-options">\r\n                            <span class="title-name">'+t(s(null!=(n=o[0][0])?c(n,"name"):n,r))+'</span>\r\n                            <span class="title-value">'+t(s(null!=(n=o[0][0])?c(n,"color"):n,r))+"</span>\r\n                        </div>               \r\n                    </div>\r\n                </div>\r\n                \r\n"},compiler:[8,">= 4.3.0"],main:function(n,r,l,a,e,o){var s,t=null!=r?r:n.nullContext||{},c=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return'<div class="assets-color-options-container">\r\n\r\n    <div class="assets-color-options-header">\r\n\r\n        <span class="assets-color-title">'+n.escapeExpression(n.lambda(null!=r?c(r,"title"):r,r))+'</span>\r\n\r\n        <ul class="assets-color-menu-container">\r\n\r\n'+(null!=(s=c(l,"each").call(t,null!=r?c(r,"current"):r,{name:"each",hash:{},fn:n.program(1,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:13,column:12},end:{line:20,column:21}}}))?s:"")+'\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div class="assets-color-options-footer">\r\n\r\n'+(null!=(s=c(l,"each").call(t,null!=r?c(r,"current"):r,{name:"each",hash:{},fn:n.program(3,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:30,column:8},end:{line:47,column:17}}}))?s:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0})}();