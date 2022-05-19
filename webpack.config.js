
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const configuration = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader',] },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]

};

export default configuration;

