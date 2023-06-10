const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
   },
   plugins: [
      new webpack.ProvidePlugin({
         process: 'process/browser',
      }),
      new webpack.DefinePlugin({
         'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
         'process.env.MESSASING_SENDER_ID': JSON.stringify(
            process.env.MESSASING_SENDER_ID
         ),
         'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
         'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
      }),
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'public', 'index.html'),
      }),
   ],
   devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      historyApiFallback: true,
      port: 3000,
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
      ],
   },
   resolve: {
      extensions: ['.*', '.js', '.jsx'],
   },
}
