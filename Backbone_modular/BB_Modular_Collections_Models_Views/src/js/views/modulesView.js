define([
    "jquery","underscore","backbone",
    "../../templates/templates",    
    "./generateModuleView",
    "./scoreView"
    ], 
    function ($, _, Backbone, Templates, GenerateModuleView, ScoreView){

    var ModulesView = Backbone.View.extend({
        //get lesson template from precompiled template bundle
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
        //initialize event bus handlers
        initEvents: function() {
            //dis
            this.bus.on("exerciseComplete", this.displayScore, this);
        },

        displayScore: function(exerciseModel) {
            //instanciate score view
            let scoreView = new ScoreView({model: exerciseModel, 
                bus: this.bus});
            var self = this;
            //add score to DOM
            this.$scoreCont.html(scoreView.render().$el);
            //display score 
            this.listenTo(scoreView, "onContinue", function(){

                if(self.model.length) {
                    self.render();
                    //no more exercise models left in collection
                    //complete the lesson
                } else {
                    console.log("End of the exercise");
                }
            });
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
                
            this.exerciseModel = this.model.shift();

            generateModuleView = new GenerateModuleView({model: this.exerciseModel, 
                bus: this.bus});
            this.$lessonCont.html(generateModuleView.render().$el);
            
            return this;
        }
    });
    return ModulesView;
});