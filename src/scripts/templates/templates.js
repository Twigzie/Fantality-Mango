!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).colors=n({1:function(n,l,r,e,o,a){var t=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'            \r\n                <li class="assets-color-menu-item">\r\n'+(null!=(l=t(r,"if").call(null!=l?l:n.nullContext||{},null!=(l=a[0][0])?t(l,"selected"):l,{name:"if",hash:{},fn:n.program(2,o,0,a),inverse:n.program(4,o,0,a),data:o,blockParams:a,loc:{start:{line:16,column:20},end:{line:20,column:27}}}))?l:"")+"                </li>\r\n\r\n"},2:function(n,l,r,e,o,a){var t=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                    <a class="assets-color-menu-item-link selected" href="'+s(t(null!=(n=a[1][0])?c(n,"endpoint"):n,l))+'">'+s(t(null!=(n=a[1][0])?c(n,"name"):n,l))+"</a>\r\n"},4:function(n,l,r,e,o,a){var t=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                    <a class="assets-color-menu-item-link" href="'+s(t(null!=(n=a[1][0])?c(n,"endpoint"):n,l))+'">'+s(t(null!=(n=a[1][0])?c(n,"name"):n,l))+"</a>\r\n"},6:function(n,l,r,e,o,a){var t=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"\r\n"+(null!=(l=t(r,"if").call(null!=l?l:n.nullContext||{},null!=(l=a[0][0])?t(l,"selected"):l,{name:"if",hash:{},fn:n.program(7,o,0,a),inverse:n.noop,data:o,blockParams:a,loc:{start:{line:35,column:12},end:{line:51,column:19}}}))?l:"")+"            \r\n"},7:function(n,l,r,e,o,a){var t=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"\r\n"+(null!=(a=t(r,"each").call(null!=l?l:n.nullContext||{},null!=l?t(l,"colors"):l,{name:"each",hash:{},fn:n.program(8,o,1,a),inverse:n.noop,data:o,blockParams:a,loc:{start:{line:38,column:16},end:{line:49,column:25}}}))?a:"")+"\r\n"},8:function(n,l,r,e,o,a){var t=n.lambda,s=n.escapeExpression,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'\r\n                    <div class="color-container">            \r\n                        <div class="color-swatch-container" style="background: '+s(t(null!=(n=a[0][0])?c(n,"color"):n,l))+'" title="'+s(t(null!=(n=a[0][0])?c(n,"name"):n,l))+": "+s(t(null!=(n=a[0][0])?c(n,"color"):n,l))+'" data-game="'+s(t(null!=(n=a[2][0])?c(n,"name"):n,l))+'" data-name="'+s(t(null!=(n=a[0][0])?c(n,"name"):n,l))+'" data-color="'+s(t(null!=(n=a[0][0])?c(n,"color"):n,l))+'">\r\n                            <div class="color-text-options">\r\n                                <span class="color-title-name">'+s(t(null!=(n=a[0][0])?c(n,"name"):n,l))+"</span>\r\n                            </div>               \r\n                        </div>\r\n                    </div>\r\n                    \r\n"},compiler:[8,">= 4.3.0"],main:function(n,l,r,e,o,a){var t,s=null!=l?l:n.nullContext||{},c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div class="assets-color-options-container">\r\n\r\n    <div class="assets-color-options-header">\r\n\r\n        <span class="assets-color-title">'+n.escapeExpression("function"==typeof(t=null!=(t=c(r,"title")||(null!=l?c(l,"title"):l))?t:n.hooks.helperMissing)?t.call(s,{name:"title",hash:{},data:o,blockParams:a,loc:{start:{line:8,column:41},end:{line:8,column:50}}}):t)+'</span>\r\n\r\n        <ul class="assets-color-menu-container">\r\n\r\n'+(null!=(t=c(r,"each").call(s,null!=l?c(l,"current"):l,{name:"each",hash:{},fn:n.program(1,o,1,a),inverse:n.noop,data:o,blockParams:a,loc:{start:{line:13,column:12},end:{line:23,column:21}}}))?t:"")+'\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div class="assets-color-options-footer">\r\n\r\n'+(null!=(t=c(r,"each").call(s,null!=l?c(l,"current"):l,{name:"each",hash:{},fn:n.program(6,o,1,a),inverse:n.noop,data:o,blockParams:a,loc:{start:{line:33,column:8},end:{line:53,column:17}}}))?t:"")+"\r\n    </div>\r\n\r\n</div>"},useData:!0,useBlockParams:!0})}();