module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-json-minification');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-dom-munger2');

  grunt.initConfig({
    clean: {
      folder: 'dist'
    },
    htmlmin: {                                     // Task
      build: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'dist/index.html',     // 'destination': 'source'
        }
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/style.css': ['src/normalize.css', 'src/style.css', 'src/style2.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/scripts.js': ['src/scripts.js', 'src/scripts2.js']
        }
      }
    },
    json_minification: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/data',
          src: 'movies.json',
          dest: 'dist/data',
        }]
      }
    },
    imagemin: {
      static: {
          options: {
              optimizationLevel: 3,
              svgoPlugins: [{removeViewBox: false}],
          },
          files: [{
            expand: true,
            cwd: 'src/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/images'
        }]
      }
    },
    dom_munger: {
      your_target: {
        options: {
          remove: ['#norm', '#styv2', '#scrip2']
        },
        src: 'src/index.html',
        dest: 'dist/index.html'
      },
    },
  })

  grunt.registerTask('default', ['clean', 'dom_munger','htmlmin', 'cssmin', 'uglify', 'json_minification', 'imagemin'])

}