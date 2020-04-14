const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.tsx',

    module: {
        rules: [
          {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader"
              }
            ]
          },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
          }
        ]
      },
    
      // When importing a module whose path matches one of the following, just
      // assume a corresponding global variable exists and use that instead.
      // This is important because it allows us to avoid bundling all of our
      // dependencies, which allows browsers to cache those libraries between builds.
  
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
    },

    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        template: './src/index.html'
      }),
    ],
  
    resolve: {
      extensions: [".ts", ".tsx",".js"],
},
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      }
  };