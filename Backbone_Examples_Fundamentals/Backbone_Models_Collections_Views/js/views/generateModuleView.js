var GenerateModuleView = Backbone.View.extend({
    tagName: "section",
    className: "exercise-group",
    template: _.template($("#exercisemodule-view").html()),
    events: {
        "keyup .expression-result": "onEnter",
        "click .validate-answer": "onValidate"
    },
 
    initialize: function() {
 
    },
 
    onValidate: function() {
        var self = this;
            inputVal = this.$el.find(".expression-result").val();
            answer = this.$el.find(".expression-result").data("value");
            currentIndex = this.model.get("currentStep");
        if(Number(inputVal) === answer) {
            //pass to the next test executed once per view lifecycle
            this.model.setNextStep();           
            this.$el.find(".expression-container").removeClass("incorrect");
            this.$el.find(".expression-container").addClass("correct");
            setTimeout(_.bind(self.render, self), 4000);
        } else {
            let numAttempts = this.model.get("numAttempts");
           
            if(numAttempts < this.model.get("maxAttempts")) {
                this.model.set("numAttempts", numAttempts+1);
                this.$el.find(".expression-container").addClass("incorrect");
            } else {
                //reset number of attempts
                this.model.setNextStep();
                //pass to the next test, executed once per view lifecycle
                this.$el.find(".expression-container").addClass("fail");
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
        }
    },
 
    onEnter: function(e) {
        if(e.keyCode === 13) {
            this.onValidate();
        }
    },
 
    evaluateAnswer: function(e) {
    var inputVal = $(e.currentTarget).val(),
        answer = $(e.currentTarget).data("value");
 
        $(e.currentTarget).attr("class", "expression-result");
 
        if(inputVal.length > 0) {
 
            if (Number(inputVal) === answer) {
                $(e.currentTarget).addClass("correct");
            } else {
                $(e.currentTarget).addClass("incorrect");
            }
        }
    }
 });
 