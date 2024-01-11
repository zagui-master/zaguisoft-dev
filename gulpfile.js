/** @format */
import gulp from "gulp";
import uglify from "gulp-terser";
import htmlmin from "gulp-htmlmin";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import cachebust from "gulp-cache-bust";
import imagemin from "gulp-imagemin";
import ttf2woff from "gulp-ttf2woff";
import browserSync from "browser-sync";
const puglinsCss = [cssnano(), autoprefixer()];

const html = () => {
  return gulp
    .src("src/**/*.html")
    .pipe(
      cachebust({
        type: "timestamp",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("public"));
};

const css = () => {
  return gulp
    .src("src/css/**/*.css")
    .pipe(postcss(puglinsCss))
    .pipe(gulp.dest("public/css"));
};

const assets = () => {
  return gulp
    .src("src/assets/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("public/assets"));
};

const font = () => {
  return gulp
    .src("src/font/**/*.ttf")
    //.pipe(ttf2woff())
    .pipe(gulp.dest("public/font"));
};

const javascript = () => {
  return gulp
    .src("src/js/**/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/js"));
};

const data = () => {
  return gulp
    .src("src/data/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/data"));
};
/*

gulp.task("built", gulp.parallel(html, css, assets, font, javascript, data));
*/