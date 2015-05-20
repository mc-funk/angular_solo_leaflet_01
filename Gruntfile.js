//Scott's gruntfile templategit i

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css"
                ],
                "dest": "public/vendor/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "public/vendor/"
            },
            angular_leaflet_directive: {
                expand: true,
                cwd: "client/vendor/",
                src: [
                    "angular_leaflet_directive/angular-leaflet-directive.min.js",
                    "angular_leaflet_directive/angular-leaflet-directive_dev_mapped.js",
                ],
                "dest": "public/vendor/"
            },
            japan_geo: {
                expand: true,
                cwd: "client/vendor/",
                src: [
                    "japan_geo/japan.json"
                ],
                "dest": "public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client",
                src: [
                    "stylesheets/style.css"
                ],
                "dest": "public/"
            },
            views: {
                expand: true,
                cwd: "client",
                src: [
                    "views/userinfo.html",
                    "views/map.html"
                ],
                "dest": "public/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};