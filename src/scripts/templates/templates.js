!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).colors=n({1:function(n,r,l,a,e){return"\r\n\r\n"},3:function(n,r,l,a,e,o){var t=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return"\r\n"+(null!=(o=t(l,"each").call(null!=r?r:n.nullContext||{},null!=r?t(r,"colors"):r,{name:"each",hash:{},fn:n.program(4,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:19,column:8},end:{line:31,column:17}}}))?o:"")+"        \r\n"},4:function(n,r,l,a,e,o){var t=n.lambda,c=n.escapeExpression,s=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return'\r\n            <div class="color-container">            \r\n                <div class="swatch-container" style="background: '+c(t(null!=(n=o[0][0])?s(n,"color"):n,r))+'">\r\n                    <div class="text-options">\r\n                        <span class="title-name">'+c(t(null!=(n=o[0][0])?s(n,"name"):n,r))+'</span>\r\n                        <span class="title-value">'+c(t(null!=(n=o[0][0])?s(n,"color"):n,r))+"</span>\r\n                    </div>               \r\n                </div>\r\n            </div>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(n,r,l,a,e,o){var t,c=null!=r?r:n.nullContext||{},s=n.lookupProperty||function(n,r){if(Object.prototype.hasOwnProperty.call(n,r))return n[r]};return'<div class="assets-menu-container">\r\n\r\n'+(null!=(t=s(l,"each").call(c,null!=r?s(r,"current"):r,{name:"each",hash:{},fn:n.program(1,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:4,column:4},end:{line:8,column:13}}}))?t:"")+'\r\n</div>\r\n\r\n<div class="assets-options-container">\r\n\r\n'+(null!=(t=s(l,"each").call(c,null!=r?s(r,"current"):r,{name:"each",hash:{},fn:n.program(3,e,1,o),inverse:n.noop,data:e,blockParams:o,loc:{start:{line:16,column:4},end:{line:33,column:13}}}))?t:"")+"\r\n</div>"},useData:!0,useBlockParams:!0})}();