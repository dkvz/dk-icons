const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

console.log('Starting icon minification in folder dist...');

(async () => {
	await imagemin(['icons/*.svg'], {
		destination: 'dist/icons',
		plugins: [
			imageminSvgo({
				plugins: [
					{
						removeViewBox: false
          }
				]
			})
		]
	});

	console.log('Images optimized');
})();