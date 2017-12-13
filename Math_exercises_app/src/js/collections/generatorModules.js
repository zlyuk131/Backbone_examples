
define([
    "jquery","underscore","backbone",
    "models/generatorModule"
    ], 
    function ($, _, Backbone, GeneratorModule){

    //testModules  collection allows to compare different exercise attempts
    var GeneratorModules = Backbone.Collection.extend({
        model: GeneratorModule,
    });
    
   return GeneratorModules; 
});