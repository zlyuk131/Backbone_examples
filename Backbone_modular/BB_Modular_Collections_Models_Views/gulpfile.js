var gulp = require("gulp");
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var defineModule = require('gulp-define-module');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('compile-templates', function() {
 gulp.src('src/rawTemplates/*.hbs')
   //pass local version of the handlebars
   .pipe(handlebars(
     {handlebars: require('handlebars')}
   ))
   // Define templates as AMD modules
   .pipe(wrap('Handlebars.template(<%= contents %>)'))
   .pipe(declare({
       root: "templates",
       noRedeclare: true
     }))
   .pipe(concat('templates.js'))
 .pipe(wrap("define(['handlebars'], function (Handlebars){"
   +"Handlebars = Handlebars['default']; "
   +"var templates = Handlebars.templates || {}; "
   +" <%= contents %> return templates;});"))
   .pipe(gulp.dest('src/templates'));
});
//watch all files in folder and compile when chaged
gulp.task('watch', ['compile-templates'], function() {
   gulp.watch('src/rawTemplates/*.hbs', ['compile-templates']);
});