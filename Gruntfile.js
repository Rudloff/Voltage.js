/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                Voltage: {
                    src: ['Voltage.js']
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
