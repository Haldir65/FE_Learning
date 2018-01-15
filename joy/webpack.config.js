var path = require("path");

module.exports = {
    entry: './app.js',
    output: {
        filename: "./bundle.js"
    },
   
    watch: true,
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {   test: /\.hbs$/, 
                loader: "handlebars-loader"
            }
        ]
    }
}