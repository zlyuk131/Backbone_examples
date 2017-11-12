define([
    "jquery","underscore","backbone",
    "../../templates/templates",    
    "./generateModuleView"
    ], 
    function ($, _, Backbone, Templates, GenerateModuleView){

    var ModulesView = Backbone.View.extend({
        template: Templates.lesson,
        initialize: function (options) {
            //setup view element
            this.$el.html(this.template());
            this.$lessonCont = this.$el.find("#lesson-container");
            this.$scoreCont = this.$el.find("#score-container");
            //set event bus
            this.bus = options.bus;
            this.initEvents();
            
        },
        //TODO Finish display score
        //initialize event bus handlers
        initEvents: function() {
            //dis
            this.bus.on("exerciseComplete", this.displayScore);
        },

        displayScore: function(args) {
            console.log(args);

            if(this.model.length) {
                this.render();
            //no more exercise models left in collection
            //complete the session
            } else {
                //instanciate score view
                let scoreView = new scoreView({model: this.exerciseModel, 
                    bus: this.bus});
                //add score to DOM
                this.$scoreCont.html(scoreView.render().$el);
            }
        },

        startLesson: function() {
            if(this.model.length) {
                return this.render();
            } else {
                alert("No lesson exercises found!");
            }
        },

        //each time we call render a next model from collection stack is popped 
        render: function() {
            var generateModuleView;
                
            this.exerciseModel = this.model.pop();

            generateModuleView = new GenerateModuleView({model: this.exerciseModel, 
                bus: self.bus});
            this.$lessonCont.html(generateModuleView.render().$el);
            
            return this;
        }
    });
    return ModulesView;
});