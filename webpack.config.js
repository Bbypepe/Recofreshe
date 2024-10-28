// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public'), // Output path
    publicPath: '/', // Serve files from root
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Babel loader for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for transpiling
          },
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Loader for image files
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Inline images < 8KB as base64
              fallback: 'file-loader', // Use file-loader for larger images
              name: 'assets/[name].[hash].[ext]', // Output image file names
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  mode: 'development', // Development mode
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve content from 'public' directory
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server
    historyApiFallback: true, // For SPA routing
  },
};
