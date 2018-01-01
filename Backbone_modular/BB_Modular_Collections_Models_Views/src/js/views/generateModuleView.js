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
            "click .validate-answer": "validationDebounce"
        },
    
        initialize: function(options) {
            //get event bus from parent view
            this.bus = options.bus;
        },

        //prevent click/Enter flood  
        validationDebounce: function() {
            if (!this.preventValidation) {
                this.preventValidation = true;
                this.onValidate();
            }
        },
        
        onValidate: function() {
            var self = this,
                inputVal = this.$el.find(".expression-result").val(),
                answer = this.$el.find(".expression-result").data("value"),
                numSteps = this.model.get("steps"),
                exerciseIndex = this.model.get("currentStep");
            
            this.resetAnswerStatus();
            // valid answer
            if(Number(inputVal) === answer) {
                //update success rate
                this.model.updateSuccess();
                //add green border aroung input box
                this.$exerciseContainer.removeClass("incorrect");
                this.$exerciseContainer.addClass("correct");

                this.model.setNextStep(exerciseIndex);
                this.$attemptsCorrect.removeClass("hidden");
                
                setTimeout(_.bind(self.render, self), 4000);

            //invalid answer
            } else {
                let numAttempts = this.model.get("numAttempts");
                // still have attempts left
                this.model.updateNumberAttempts();
                
                if(numAttempts < this.model.get("maxAttempts")) {
                    //show number of attempts left
                    this.render("incorrect");
                } else {              
                    /*no more attempts left*/
                    //update fail rate
                    this.model.updateFail();
                    
                    this.model.setNextStep(exerciseIndex);
                    
                    //Show message "No Attempts left"
                    this.$exerciseContainer.addClass("incorrect");
                    this.$attemptsIncorrect.removeClass("hidden");
                    this.$exerciseContainer.find(".no-attempts").removeClass("hidden");
                    this.$exerciseContainer.find(".attempts-left").addClass("hidden");
                    this.$attemptsCounter.removeClass("hidden");                    

                    setTimeout(_.bind(self.render, self), 4000);
                }
            }
        },

        resetAnswerStatus: function() {
            this.$attemptsIncorrect.addClass("hidden");
            this.$attemptsCorrect.addClass("hidden");
            this.$attemptsCounter.addClass("hidden");
        },

        //display only one view at the time
        render: function(answerStatus) {

            this.preventValidation = false;

            if(this.model.get("exercises").length
                && !this.model.get("isComplete")) {
                //get current exercise index
                var exerciseIndex = this.model.get("currentStep"),
                    attemptsLeft = this.model.get("maxAttempts") -
                        this.model.get("numAttempts") + 1, 
                    exercise = $.extend({}
                        ,this.model.get("exercises")[exerciseIndex]
                        ,{"attemptsLeft": attemptsLeft}
                    );

                    this.$el.html(this.template(exercise));

                    this.$exerciseContainer = this.$el.find(".exercise-container");
                    this.$expressionContainer = this.$el.find(".expression-container");                    
                    this.$attemptsIncorrect = this.$el.find(".attempts-incorrect");
                    this.$attemptsCorrect = this.$el.find(".attempts-correct");
                    this.$attemptsCounter = this.$el.find(".attempts-counter");

                //if answer is incorrect display Number of attempts
                if(answerStatus === "incorrect") {
                    this.$exerciseContainer.addClass("incorrect");
                    this.$attemptsIncorrect.removeClass("hidden");
                    this.$attemptsCounter.removeClass("hidden");
                }

                return this;
                //remove view after exercise is complete
            } else if (this.model.get("isComplete")) {
                //pass event to parent class to display results
                this.bus.trigger("exerciseComplete", this.model);

                this.remove();
            }

        },
    
        onEnter: function(e) {
            if(e.keyCode === 13) {
                this.validationDebounce();
            }
        }
    });
    return GenerateModuleView;
});