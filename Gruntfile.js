module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['./*.html', 'js/*.js', 'css/*.css'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    livereload: 35729,
                    hostname: 'localhost'
                },
            }

        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Default task(s).
    grunt.registerTask('serve', ['connect:server', 'watch', 'compass']);

};