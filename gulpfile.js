'use strict';
var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

gulp.task('default', function() {
    gulp.src(__dirname + '/_b/index.js')
        .pipe(webpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel', 
                    exclude: [nodeModulesPath]  //exclude node_modules so that they are not all compiled
                }]
            },
            output: {
                filename: 'index.js'
            }
            // ,
            // externals: {
            //     react: 'React'
            // }
        }))
        .pipe(gulp.dest(__dirname + '/public/scripts/'));
});

gulp.task('img', require('./imgjson-generator.js'))
