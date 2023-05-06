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
      extensions: ['*', '.js', '.jsx'],
   },
}
