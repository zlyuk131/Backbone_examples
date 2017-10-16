//AdditionModules  collection allows to compare different exercise attempts
var AdditionModules = Backbone.Collection.extend({
    model: AdditionModule,

});

//add first model to the collection
var additionModules = new AdditionModules ([
    new AdditionModule({steps: 5})
]);

//add another two models second is invalid model
additionModules.add(new AdditionModule({steps: 15}));
additionModules.add(new AdditionModule({steps: ""}));

var additionModule_1 = additionModules.at(1);

console.log("addition module instance: ",additionModule_1);
console.log(additionModule_1.isValid());

var exrcise_1 = additionModule_1.addition();

console.log("addition module exercise: "+exrcise_1);

var evaluateAnswer = function(e) {
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
};

//this to become a backbone view
$("#container").html("");
additionModules.each(function(additionMod) {
    //check if model is valid before adding it
    if(additionMod.isValid()) {
        //create a new DOM element 
        var $domElem = 
        $('<section class="addMod addmod-'+additionMod.cid+'"></section><br>'),
            exercises = additionMod.get("exercises");

        _.each(additionMod.get("exercises"), function(exercise) {
            $domElem.append(
                '<div class="expression-container">'
                    +'<span class="expression-body">'+exercise.expression+'</span>'
                    + '<span class="expr-sum">&nbsp;=&nbsp;</span>'
                    +'<input type="text" class="expression-result" data-value="'
                    + exercise.result + '"/>'
                    + '<span class="exp-answer">'
                    
                    +'</span>'
                +'</div>'
                );
            $domElem.find(".expression-result").on("keyup", evaluateAnswer);
        });
        $("#container").append($domElem);
    }
});