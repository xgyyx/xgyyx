const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    portal: './src/portal/index.js',
    home: './src/pages/home/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].js'
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    hot: true,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'mobx': 'mobx',
    '@mui/material': 'MaterialUI'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "esmodules": true
                    }
                  }
                ],
                "@babel/preset-react",
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties"]
              ]
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './public/index.html'
    }),
  ]
};