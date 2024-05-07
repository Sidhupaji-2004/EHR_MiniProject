const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // For minification (optional)

module.exports = {
  // Entry point for your application
  entry: './src/index.js',
  // Output configuration
  output: {
    filename: '[name].bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clear output directory before building (optional)
  },

  // Module configuration (loaders)
  module: {
    rules: [
      {
        test: /\.html$/, // Target HTML files
        use: {
          loader: 'html-loader', // Use html-loader
        },
      },
      {
        test: /\.(js|jsx)$/, // Target JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },
        },
      },
      // Add other loaders for CSS, images, etc. if needed
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template from public directory
      filename: 'index.html', // Output file name in the dist directory
    }),
    // Optional plugin for minification
    new TerserWebpackPlugin({
      parallel: true,
      terserOptions: {
        // Minification options for Terser
      },
    }),
  ],

  // Optimization options (optional)
  optimization: {
    // Code splitting, minification, etc.
  },
};
