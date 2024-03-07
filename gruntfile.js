module.exports = function(grunt) {
    grunt.initConfig({
        less: {
        development: {
            options: {
            paths: ["assets/less"]
        },
        files: {
            "assets/css/style.css": "assets/less/style.less"
            }
        }
    },
    uglify: {
        options: {
            mangle: false
        },
        my_target: {
            files: {
            'assets/js/scripts.min.js': ['assets/js/scripts.js']
            }
        }
    },
    watch: {
        styles: {
            files: ['assets/less/*.less'],
            tasks: ['less'],
            options: {
            nospawn: true
            } 
        },
        scripts: {
            files: ['assets/js/scripts.js'],
            tasks: ['uglify'],
            options: {
            nospawn: true
            }
        }
    }
});

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);

};