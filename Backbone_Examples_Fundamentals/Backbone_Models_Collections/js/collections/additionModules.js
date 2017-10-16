//AdditionModules  collection allows to compare different exercise attempts
var AdditionModules = Backbone.Collection.extend({
    model: AdditionModule,
});

var additionModules = new AdditionModules ([
    new AdditionModule({steps: 5})
]);

additionModules.add(new AdditionModule({steps: 15}));

var additionModule_1 = additionModules.at(1);

console.log("addition module instance: ",additionModule_1);
console.log(additionModule_1.isValid());

var exrcise_1 = additionModule_1.addition();

console.log("addition module exercise: "+exrcise_1);

//this to become a backbone view
$("#container").html("");
additionModules.each(function(additionMod) {
    if(additionMod.isValid) {
        //create a new DOM element 
        var $domElem = 
        $('<section class="addmod-'+additionMod.cid+'"><ul></ul></section');
        
        $domElem.find("ul").append("")
    }
});