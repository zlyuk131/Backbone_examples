require.config({
    paths: {
        jquery: "/node_modules/jquery/dist/jquery",
        underscore: "/node_modules/underscore/underscore",
        backbone: "/node_modules/backbone/backbone",
        handlebars: "../lib/handlebars"
    }
 });
 
 require(["app"], function(App) {
    App.initialize();
 });
 