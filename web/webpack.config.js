const path = require('path');
const webpack = require('webpack');


var plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
    }),
]


module.exports = {
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        loaders: [
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader', exclude: /(node_modules|bower_components)/},
            {test: /\.css$/, loader: 'style!css'},
            // {
            //     loader: 'msx-loader',
            //     test: /\.msx/,
            //     exclude: /(node_modules|bower_components)/,
            // },
            {
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['mjsx'],
                }
            },
            {
                loader: 'babel',
                test: /\.msx$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['mjsx'],
                }
            },
        ]
    },
}
