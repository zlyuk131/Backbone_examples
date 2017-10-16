//extend default properties of the superclass
var AdditionModule = ExerciseModule.extend({
    //extend default properties inherited from parent class
    defaults: function() {
        return _.extend(ExerciseModule.prototype.defaults(), {
            type: "addition"
        });
    },
    addition: function() {
        var self = this,
            a, b, result,
            toReturn = [];
        
        for(var i = 0; i < self.get("steps"); i++) {
            a = ExerciseModule.prototype.getRandomInt(0, 100);
            b = ExerciseModule.prototype.getRandomInt(0, 100);
            result = a + b; 
            toReturn.push({
                expression: a+" + "+b,
                result: result
            });
        }

        return toReturn;
    },
});