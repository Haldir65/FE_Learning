var path = require('path');

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "bundle.js"
    },
    watch: true,
    externals: ['express'],
    module:{
        rules: [
            { 
                test: /\.hbs$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "handlebars-loader" }
          ]
    }
}