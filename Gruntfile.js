module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['src/scripts/*.js', 'src/application.js'],
                dest: 'dist/application.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'chrome/source/background.min.js': ['src/background.js'],
                    'chrome/source/application.min.js': ['dist/application.js']
                }
            }
        },
        less: {
            development: {
                files: {
                    'dist/application.css': 'src/styles/*.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'chrome/source/application.min.css': ['dist/application.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', 'src/application.js', 'src/background.js', 'src/scripts/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    debounceDelay: 250
                }
            },
            less: {
                files: 'src/styles/*.less',
                tasks: ['less','cssmin'],
                options: {
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin']);

};