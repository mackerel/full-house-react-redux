var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
