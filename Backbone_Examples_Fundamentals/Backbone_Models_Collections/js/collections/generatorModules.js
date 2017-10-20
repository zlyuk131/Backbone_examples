//testModules  collection allows to compare different exercise attempts
var GeneratorModules = Backbone.Collection.extend({
    model: GeneratorModule,
 
 });
 
 //add first model to the collection
 var generatorModules = new GeneratorModules ([
    new GeneratorModule({steps: 5, operator: "+"})
 ]);
 
 //add another two models second is invalid model
 generatorModules.add(new GeneratorModule({steps: 15, operator:"-"}));
 generatorModules.add(new GeneratorModule({steps: ""}));
 
 var generatorModule_1 = generatorModules.at(1);
 
 console.log("addition module instance: ",generatorModule_1);
 console.log(generatorModule_1.isValid());
 
 var exrcise_1 = generatorModule_1.get("exercises");
 
 console.log("addition module exercise: "+exrcise_1);
 
 //moved to view
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
 generatorModules.each(function(testMod) {
    //check if model is valid before adding it
    if(testMod.isValid()) {
        //create a new DOM element
        var $domElem =
        $('<section class="addMod addmod-'+testMod.cid+'"></section><br>'),
            exercises = testMod.get("exercises");
 
        _.each(testMod.get("exercises"), function(exercise) {
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