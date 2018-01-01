define([
    "jquery","underscore","backbone",
    "../../templates/templates"
    ], 
    function ($, _, Backbone, Templates){
    //TODO finish this view
    var ScoreView = Backbone.View.extend({
        
        template: Templates.exerciseResult,

        events: {
            "click .continue": "onContinue"
        },

        onContinue: function() {
            this.trigger("onContinue");
            this.remove();
        },

        initialize: function(options) {
            this.bus = options.bus;
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ScoreView;
});