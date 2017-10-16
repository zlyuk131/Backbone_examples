//extend default properties of the superclass
var AdditionModule = ExerciseModule.extend({
    //extend default properties inherited from parent class
    defaults: function() {
        return _.extend(ExerciseModule.prototype.defaults(), {
            type: "addition",
            exercises: []
        });
    },

    initialize: function() {
        //call parent constructor first
        ExerciseModule.prototype.initialize.apply(this);
        //execute addition function
        this.addition();
    },
    
    addition: function() {
        var self = this,
            a, b, result,
            seteps = self.get("steps"),
            toReturn = [];
        
        for(var i = 0; i < seteps; i++) {
            a = ExerciseModule.prototype.getRandomInt(0, 100);
            b = ExerciseModule.prototype.getRandomInt(0, 100);
            result = a + b; 
            toReturn.push({
                expression: a+" + "+b,
                result: result
            });
        }

        this.set("exercises", toReturn);
    },
});