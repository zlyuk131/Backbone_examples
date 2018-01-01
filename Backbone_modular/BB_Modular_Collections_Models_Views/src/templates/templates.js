define(['handlebars'], function (Handlebars){Handlebars = Handlebars['default']; var templates = Handlebars.templates || {};  templates["exercise"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "   <div class=\"exercise-container\">\n      <div class=\"attempts-status\">\n        <div class=\"attempts-icon\">\n          <p class=\"attempts-correct hidden\">\n            Answer is Correct!\n          </p>\n          <p class=\"attempts-incorrect hidden\">\n            Answer is Incorrect. \n          </p>\n        </div>\n        <p class=\"attempts-counter hidden\">\n          <span class=\"no-attempts hidden\">No</span>\n          Attempts left<span class = \"attempts-left\">\n            : "
    + alias4(((helper = (helper = helpers.attemptsLeft || (depth0 != null ? depth0.attemptsLeft : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attemptsLeft","hash":{},"data":data}) : helper)))
    + "\n          </span>\n        </p>\n      </div>\n      <div class=\"expression-container\">\n        <span class=\"expression-body\">"
    + alias4(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expression","hash":{},"data":data}) : helper)))
    + "</span>\n        <span class=\"expr-sum\">&nbsp;=&nbsp;</span>\n        <input type=\"text\" class=\"expression-result\"\n        data-value=\""
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data}) : helper)))
    + "\"/>\n        <button class=\"validate-answer\">Validate</button>\n      </div>\n   </div>";
},"useData":true});
templates["exerciseResult"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"pass-icon\">Pass!</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"fail-icon\">Fail</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"exercise-results\">\n    <div class=\"answer-counter\">\n        <div class=\"correc\">\n            Correct answers:<span class=\"answers-count\">"
    + alias4(((helper = (helper = helpers.successRate || (depth0 != null ? depth0.successRate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"successRate","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n        <div class=\"incorrec\">\n            Incorrect answers:<span class=\"answers-count\">"
    + alias4(((helper = (helper = helpers.failRate || (depth0 != null ? depth0.failRate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"failRate","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <br/>\n        <button class=\"continue\">Continue</button>\n    </div>\n    <div class=\"lesson-status \">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPassed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});
templates["lesson"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"score-container\"></div>\n<div id=\"lesson-container\"></div>";
},"useData":true}); return templates;});