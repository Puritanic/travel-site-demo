
var gulp 		 = require('gulp'),
	nested		 = require('postcss-nested'),	
	postcss 	 = require('gulp-postcss'),
	cssImport	 = require('postcss-import'),
	simpleVars   = require('postcss-simple-vars'),
	autoprefixer = require('autoprefixer'),
	mixins	 	 = require('postcss-mixins');

gulp.task('styles', function(){
	// we return this task because gulp.src is async function
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, simpleVars, nested, autoprefixer]))
		.on('error', function(err){
			if (err) {
				console.log(err.toString());
			}
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));

	
});