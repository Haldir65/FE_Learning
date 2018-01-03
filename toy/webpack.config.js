module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch : true,
    module: {
        loaders: [
            {
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    }
}