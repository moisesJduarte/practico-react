const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.rexports = {
    entry: './src/index.js',
    output : {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bunde.js',
    },
    resolve: {
        extension: ['.js', 'jsx'],
    },
    module: {
        rule: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: 'html-loader',
                    }
                ]
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: '.index.html'
        })
    ]
}
