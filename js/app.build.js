({
    appDir: ".",
    baseUrl: ".",
    dir: "../build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",

    uglify: {
        no_mangle: false
    },

    cssIn: "../css/main.css",
    out: "../css/main-optimized.css",

    paths: {
          'jquery': 'vendor/jquery/jquery'
        , 'underscore': 'vendor/underscore/underscore_amd'
        , 'backbone': 'vendor/backbone/backbone_amd'
        , 'localStorage': 'vendor/backbone/backbone.localStorage'
        , 'text': 'vendor/require/text'
        , 'handlebars': 'vendor/handlebars/handlebars'
        , 'models': 'models'
        , 'views': 'views'
        , 'collections': 'collections'
        , 'templates': 'templates'
        , 'helpers': 'templates/helpers/helpers'
    },

    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})
