var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;
var jshint = require('gulp-jshint');


//tasks
//just a little something you can use to make sure everything is working
gulp.task('myTask', function(){
  console.log('It works!');
});

//to concatenate multiple script files, not using it yet but putting it here in case I want more scripts later
gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//call the browserify function, pulls in the user interface file, which already requires the other scripts file
gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

//browersify is a dependency. runs after Browserify, minimifies scripts for efficiency
gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('clean', function(){
  return del(['build', 'tmp']);
});

//build tasks
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});

//when things go wrong and you need a hint
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});