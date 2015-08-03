/**
 * Created by Donghui Huo on 2015/5/28.
 * the demo http://www.elegantthemes.com/preview/Aggregate/
 */
module.exports = function (grunt) {
    grunt.config.init({
        'compass': {
            dev: {
                options: {
                    force: true,
                    sassDir: ['scss'],
                    cssDir: ['css'],
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    force: true,
                    sassDir: ['scss'],
                    cssDir: ['css'],
                    environment: 'production'
                }
            }
        },
        'copy': {
            once: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['node_modules/flexslider/flexslider.css'],
                        dest: 'css/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['node_modules/flexslider/fonts/*'],
                        dest: 'css/fonts/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        browserify:{
            options: {
                transform: ["browserify-shim"]
            },
            all:{
                src: ['js/all.js'],
                dest: 'js/all.browserify.js',
                options: {
                    transform: ["browserify-shim"]
                }
            }
        },
            uglify: {
            my_target: {
                files: {
                    'js/all.min.js': ['js/all.browserify.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', "Builds the application.",
        ['compass:prod','browserify:all', 'uglify']);
}