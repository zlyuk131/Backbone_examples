var VehiclesView = Backbone.View.extend({
    render: function() {
        var self = this;
        self.$el.html("<ul></ul>")
        this.model.each(function(vehicle){
            var vehicleView = new VehicleView({model: vehicle});
            self.$el.append(vehicleView.render().$el);
        });
        return this;
    }
});

var vehicles = new Vehicles ([
    new Vehicle({regNum: "AAA123", model: "Feat", color: "Red"}),
    new Vehicle({regNum: "ABC122", model: "Lada", color: "Blue"}),
    new Vehicle({regNum: "CCC222", model: "Feat", color: "Red"})    
]);

var vehiclesView = new VehiclesView({el: "#container", model: vehicles});
vehiclesView.render();