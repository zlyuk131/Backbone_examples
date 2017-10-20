//extend default properties of the superclass
var GeneratorModule = ExerciseModule.extend({
    //extend default properties inherited from parent class
    defaults: function() {
        return _.extend(ExerciseModule.prototype.defaults(), {
            testType: "",
            operator: "",
            numAttempts: 1,
            maxAttempts: 3,
            exercises: []
        });
    },
    //TODO extend validation
    //pass arguments from instanciation
    initialize: function(options) {
 
        var typeMap = {
            "+": "addition",
            "-": "subtraction",
            "*": "multiplication",
            "/": "division"};
        //call parent constructor first
        ExerciseModule.prototype.initialize.apply(this);
       
        //execute test generator function if operator is defined
        if(options.operator
            && _.contains(["+","-","*","/"], options.operator)){
 
            this.set("testType", typeMap[options.operator]);
            this.set("operator",options.operator);
            this.genereateTest();
        }
    },
    setNextStep: function() {
        this.set("numAttempts", 1);
        this.set("currentStep", currentIndex + 1);
    },
    // @param operator {string} - values "+","-","*","/"
    genereateTest: function() {
        var self = this,
            a, b, result = null,
            seteps = self.get("steps"),
            invalidOperator = false,
            operator = self.get("operator"),
            toReturn = [];
 
        if(operator) {
            for(var i = 0; i < seteps; i++) {
                a = self.getRandomInt(0, 100);
                b = self.getRandomInt(0, 100);
                switch(operator) {
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        b = b === 0 ? 1 : b;
                        result = a / b;
                        break;
                    default:
                    invalidOperator = true;
                        console.log("Invalid operator", operator);
                        break;
                }
 
                if(!invalidOperator) {
                    toReturn.push({
                        expression: a+" "+operator+" "+b,
                        result: result
                    });
                } else {
                    toReturn.push({
                        expression: "Invalid operator",
                        result: result
                    });
                    return;
                }
            }
        }
 
        this.set("exercises", toReturn);
    },
 
    //generates random integer of specified range
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 });
 