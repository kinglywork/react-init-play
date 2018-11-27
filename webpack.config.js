const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: "[name].chunk.[chunkhash].js",
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					{
						// loader: MiniCssExtractPlugin.loader
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};