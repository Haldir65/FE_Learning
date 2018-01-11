module.exports = {
    entry: './app.js',
    output: {
        filename: "./bundle.js"
    },
    watch: true,
    module:{
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules$/,
                query: {
                    presets: ['babel-preset-env']
                }
            }
        ]
    }
}