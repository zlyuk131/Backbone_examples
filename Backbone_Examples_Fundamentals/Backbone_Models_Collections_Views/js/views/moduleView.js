var ModulesView = Backbone.View.extend({
    tagName: "section",
    className: "add-mod",
   
    render: function() {
        var self = this;
       
        this.model.each(function(model){
            var generateModuleView = new GenerateModuleView({model:model});
            self.$el.append(generateModuleView.render().$el);
        });
       
        return this;
    }
 });
 
 var modulesView = new ModulesView({model: generatorModules})
 //this to become a backbone view
 modulesView.render();
 
 $("#container").html(modulesView.$el);
 