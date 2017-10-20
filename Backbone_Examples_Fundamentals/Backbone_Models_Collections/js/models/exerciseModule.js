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
            sucessRate: 0,
            failRate: 0,
            overallRate: 0, //success rate
            isComplete: false
        };
    },
    initialize: function() {
        this.on("change:sucessRate", this.onRateChange);
    },
    //update rate ration of succes and fail exercises
    onRateChange: function() {
        console.log("Module "+this.type+" has changed");
    },
 
    updateSuccess: function() {
        var newRate = Number(this.get("sucessRate")) + 1;
        this.set("sucessRate", newRate);
        this._updateoverallRate();       
    },
 
    updateFail: function() {
        var newRate = Number(this.get("failRate")) + 1;
        this.set("failRate", newRate);
        this._updateoverallRate();
    },
    //private function
    _updateoverallRate: function() {
        var newOverallRate =
        (this.get("sucessRate") / this.get("steps")) * 100;
        this.set("overallRate", newOverallRate);
    },
    //returns success rate as percentage string
    getRate: function() {
        return this.get("overallRate")+"%";
    },
 
    validate: function(attrs) {
        if(!_.every(_.values(attrs), function(val){return val !== "" ;})){
            return "One or more attributes is empty string";
        }
    }
 });
 