define(['handlebars'], function (Handlebars){Handlebars = Handlebars['default']; var templates = Handlebars.templates || {};  templates["exercise"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "   <div class=\"expression-container\">\n       <span class=\"expression-body\">"
    + alias4(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expression","hash":{},"data":data}) : helper)))
    + "</span>\n       <span class=\"expr-sum\">&nbsp;=&nbsp;</span>\n       <input type=\"text\" class=\"expression-result\"\n       data-value=\""
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data}) : helper)))
    + "\"/>\n       <button class=\"validate-answer\">Validate</button>\n       <span class=\"answer-icon\">\n         <span class=\"correct-icon\">Correct</span>\n         <span class=\"incorrect-icon\">Incorrect</span>\n       </span>\n   </div>";
},"useData":true}); return templates;});