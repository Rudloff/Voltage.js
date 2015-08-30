/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                Voltage: {
                    src: ['Voltage.js']
                },
                demo: {
                    src: ['demo/demo.js']
                },
                tests: {
                    src: ['tests/*.js']
                },
                Gruntfile: {
                    src: ['Gruntfile.js']
                }
            },
            qunit: {
                files: ['tests/index.html']
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('lint', 'jslint');
    grunt.registerTask('test', 'qunit');
};
