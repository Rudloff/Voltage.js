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
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('lint', 'jslint');
};
