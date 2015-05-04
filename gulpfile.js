var gulp = require("gulp"),
    less = require("gulp-less"),
    notify = require("gulp-notify"),
    bower = require("gulp-bower");
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify")
    
var config = {
    lessPath: "/psdi/assets/less",
    bowerDir: "/psdi/bower_components"
}

gulp.task("bower", function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task("icons", function() {
    return gulp.src(config.bowerDir + "/fontawesome/fonts/**.*")
        .pipe(gulp.dest("/psdi/assets/fonts"));
});

gulp.task("less", function() {
    return gulp.src("./less/**/*.less")
        .pipe(less({
            
        }))
})