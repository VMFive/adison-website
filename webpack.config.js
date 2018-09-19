const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const src = path.join(__dirname, 'src');

module.exports = (env, argv) => {
  console.log(`Mode: ${argv.mode}`);

  return {

    mode: argv.mode === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
              test: /\.pug$/,
              use:  ['html-loader', 'pug-html-loader?pretty&exports=false'],
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.sass$/,
              use: [
                {
                    loader: argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader", options: {
                        sourceMap: false
                    }
                },
                {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer'),
                      ];
                    },
                  },
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: false
                    }
                },
              ],
            },
            {
              test: /\.css$/,
              use: [
                {
                    loader: argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader", options: {
                        sourceMap: false
                    }
                },
              ],
            },
        ]
    },

    plugins: [
      new CopyWebpackPlugin([
        { from: 'img/**/*', to: '' },
      ], {}),
      // new ImageminPlugin({
      //   test: /\.(jpe?g|png|gif|svg)$/i
      // }),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: path.join(src, 'index.pug'),
      }),
    ],
  };
};
