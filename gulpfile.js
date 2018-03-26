"use strict";
var gulp = require('gulp'),
	gulpsync = require('gulp-sync')(gulp),
	clean = require('gulp-clean'),
	exec = require('gulp-exec'),
	runSequence = require('gulp-run-sequence');

//clean
gulp.task('cleanTest', function () {
    return gulp.src(['test.txt'])
        .pipe(clean())
});

gulp.task('step1', function (cb) {
    runSequence(['cleanTest'], cb);
});

gulp.task('deploy', gulpsync.sync(['step1']));
