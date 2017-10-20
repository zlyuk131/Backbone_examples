//testModules  collection allows to compare different exercise attempts
var GeneratorModules = Backbone.Collection.extend({
    model: GeneratorModule,
 });
 
 //add first model to the collection
 var generatorModules = new GeneratorModules ([
    new GeneratorModule({steps: 5, operator: "+"}),
    new GeneratorModule({steps: 15, operator:"-"})
 ]);
 