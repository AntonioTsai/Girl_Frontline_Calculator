var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
    // watch files for changes and reload
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'js/*.js'], reload);
});
