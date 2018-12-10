var gulp = require('gulp');
var server = require('gulp-webserver');
gulp.task('SERVER', function() {
    return gulp.src('src')
        .pipe(server({
            port: '9090',
// 			proxies:[
// 				{
// 					source:
// 					target:
// 				}
// 			]
        }))
})