define([
    "jquery","underscore","backbone"
    ], 
    function ($, _, Backbone){

    //General mododel contains all key properies and methods of each exercise attempt instance
    var ExerciseModule = Backbone.Model.extend({
        /*
    * @attr type {string}  type of module
    * @attr steps {int} - number of steps that exersise will have
    * @attr successRate {int} - number of successful attempts
    * @attr failRate {int} - number of fail attempts
    * @attr overallRate {int} -
    */
    defaults: function() {
        return {
            type: "default",
            steps: 10,
            currentStep: 0,
            successRate: 0,
            failRate: 0,
            overallRate: 0, //success rate
            isPassed: false, //indicate if exercise is passed
            isComplete: false
        };
    },
    initialize: function() {
        this.on("change:successRate", this.onRateChange);
        this.on("change:currentStep", this.checkIsComplete);
        this.on("change:isComplete", this.checkIsPassed);        
    },
    //update rate ration of succes and fail exercises
    onRateChange: function() {
        console.log("Module "+this.type+" has changed");
    },

    updateSuccess: function() {
        var newRate = this.get("successRate") + 1;
        this.set("successRate", newRate);
        this._updateoverallRate();       
    },

    updateFail: function() {
        var newRate = this.get("failRate") + 1;
        this.set("failRate", newRate);
        this._updateoverallRate();
    },
    //private function
    _updateoverallRate: function() {
        var newOverallRate =
        (this.get("successRate") / this.get("steps")) * 100;
        this.set("overallRate", newOverallRate);
    },
    //returns success rate as percentage string
    getRate: function() {
        return this.get("overallRate")+"%";
    },

    validate: function(attrs) {
        if (!_.every(_.values(attrs), function(val){return val !== "" ;})){
            return "One or more attributes is empty string";
        }
    },

    checkIsComplete: function() {
        if (this.get("currentStep") === this.get("steps")) {
            //if success rate is >= 50%
            if(this.get("overallRate") >= 50) {
                this.set("isPassed", true);
            }
            this.set("isComplete", true);
        }
    }
    });

    return ExerciseModule;
});