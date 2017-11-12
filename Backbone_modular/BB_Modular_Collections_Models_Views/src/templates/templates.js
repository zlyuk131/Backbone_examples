define(['handlebars'], function (Handlebars){Handlebars = Handlebars['default']; var templates = Handlebars.templates || {};  templates["exercise"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "   <div class=\"expression-container\">\n       <span class=\"expression-body\">"
    + alias4(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expression","hash":{},"data":data}) : helper)))
    + "</span>\n       <span class=\"expr-sum\">&nbsp;=&nbsp;</span>\n       <input type=\"text\" class=\"expression-result\"\n       data-value=\""
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data}) : helper)))
    + "\"/>\n       <button class=\"validate-answer\">Validate</button>\n       <span class=\"answer-icon\">\n         <span class=\"correct-icon\">Correct</span>\n         <span class=\"incorrect-icon\">Incorrect</span>\n       </span>\n   </div>";
},"useData":true});
templates["exerciseResult"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"icon-correct\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"icon-incorrect\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"exercise-results\">\n    <div class=\"answer-counter\">\n        <div class=\"correc\">Correct answers:"
    + alias4(((helper = (helper = helpers.sucessRate || (depth0 != null ? depth0.sucessRate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sucessRate","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"incorrec\">Incorrect answers:"
    + alias4(((helper = (helper = helpers.failRate || (depth0 != null ? depth0.failRate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"failRate","hash":{},"data":data}) : helper)))
    + "</div>\n        <button class=\"continue\">Continue</button>\n    </div>\n    <div class=\"answer-icon\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPassed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});
templates["lesson"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"score-container\"></div>\n<div id=\"lesson-container\"></div>";
},"useData":true}); return templates;});