define([
    "jquery","underscore","backbone",
    "../../templates/templates"
    ], 
    function ($, _, Backbone,Templates){
   
    var GenerateModuleView = Backbone.View.extend({
        tagName: "section",

        className: "exercise-group",

        template: Templates.exercise,

        events: {
            "keyup .expression-result": "onEnter",
            "click .validate-answer": "onValidate"
        },
    
        initialize: function(options) {
            //get event bus from parent view
            this.bus = options.bus;
        },

        onValidate: function() {
            var self = this,
                inputVal = this.$el.find(".expression-result").val(),
                answer = this.$el.find(".expression-result").data("value"),
                numSteps = this.model.get("steps"),
                currentIndex = this.model.get("currentStep");

            if(Number(inputVal) === answer) {
                let successRate = this.model.get("sucessRate");
                //pass to the next test executed once per view lifecycle
                this.model.setNextStep(currentIndex);

                //update success rate
                this.model.set("successRate", successRate + 1);

                this.$el.find(".expression-container").removeClass("incorrect");
                this.$el.find(".expression-container").addClass("correct");
                //if it is final step, !get form model updated in setNextStep
                if(this.model.get("currentStep") === numSteps) {
                    //set flag that exercise is complete
                    this.model.set("isComplete", true);               
                }
                setTimeout(_.bind(self.render, self), 4000);
            } else {
                let numAttempts = this.model.get("numAttempts"),
                    failRate = this.model.get("failRate");
                
                if(numAttempts < this.model.get("maxAttempts")) {
                    //update fail rate
                    this.model.set("failRate", failRate + 1);
                    //incriment number of attempts
                    this.model.set("numAttempts", numAttempts + 1);
                    this.$el.find(".expression-container").addClass("incorrect");
                } else {
                    this.model.setNextStep(currentIndex);
                    if(this.model.get("currentStep") === numSteps) {
                        //set flag that exercise is complete
                        this.model.set("isComplete", true);               
                        this.$el.find(".expression-container").addClass("fail");
                    }
                    //pass to the next test, executed once per view lifecycle
                    setTimeout(_.bind(self.render, self), 4000);
                }
            }
        },
    
        //display only one view at the time
        render: function() {
            var self = this;
            if(this.model.get("exercises").length
                && !this.model.get("isComplete")) {
                //get current site
                var currentIndex = this.model.get("currentStep"),
                    exercise = this.model.get("exercises")[currentIndex];
                    self.$el.html(self.template(exercise));
                return this;
                //remove view after exercise is complete
            } else if (this.model.get("isComplete")) {
                //pass event to parent class to display results
                this.bus.trigger("exerciseComplete", self.model);
                this.remove();
            }

        },
    
        onEnter: function(e) {
            if(e.keyCode === 13) {
                this.onValidate();
            }
        }
    });
    return GenerateModuleView;
});