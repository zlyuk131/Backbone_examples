define([
    "jquery","underscore","backbone",
    "collections/generatorModules",
    "models/generatorModule", 
    "views/modulesView"
  ],
  function ($, _, Backbone, 
    GeneratorModules, GeneratorModule, ModulesView
) {
     //all processing is going on here
    var initialize = function() {
      //add first model to the collection
        var generatorModules = new GeneratorModules ([
            new GeneratorModule({steps: 5, operator: "+"}),
            new GeneratorModule({steps: 15, operator:"-"})
        ]);
 
        var modulesView = new ModulesView({model: generatorModules});
        //this to become a backbone view
        modulesView.render();
       
        $("#container").html(modulesView.$el);
    }
    return {initialize: initialize};
  });
 