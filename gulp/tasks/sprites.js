var gulp 	= require('gulp'),
rename 		= require('gulp-rename'),
svg2png	 	= require('gulp-svg2png'),
del 		= require('del'),
svgSprite 	= require('gulp-svg-sprite');

var config = {
	shape: {
		spacing: {
			padding: 1 // removing artifacts from sprites icons which have happened because the icons on spritesheet were positioned to close
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function(){		// replacing svg with png sprites
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}


gulp.task('beginClean', function(){ // cleaning sprite directories so that there is no leftover files from previous run
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});


gulp.task('createSprite', ['beginClean'], function(){ // creating sprite files, after beginClean finished cleaning directories
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
}); 

gulp.task('createPngCopy', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function(){
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del(['./app/temp/sprite', './app/temp/sprites']);
});


gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'] );