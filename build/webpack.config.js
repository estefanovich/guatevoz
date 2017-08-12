const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('../project.config')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const inProject = path
  .resolve
  .bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __PROD__ = project.env === 'production'

const config = {
  entry: {
    normalize: [inProjectSrc('normalize')],
    main: [inProjectSrc(project.main)]
  },
  devtool: project.sourcemaps
    ? 'source-map'
    : false,
  output: {
    path: inProject(project.outDir),
    filename: __DEV__
      ? '[name].js'
      : '[name].js',
    publicPath: project.publicPath
  },
  resolve: {
    modules: [
      inProject(project.srcDir),
      'node_modules'
    ],
    extensions: [
      '*', '.js', '.jsx', '.json'
    ],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  externals: project.externals,
  module: {
    rules: []
  },
  plugins: [new webpack.DefinePlugin(Object.assign({
      'process.env': {
        NODE_ENV: JSON.stringify(project.env)
      },
      __DEV__,
      __PROD__
    }, project.globals))]
}

// JavaScript ------------------------------------
config
  .module
  .rules
  .push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: [
            'babel-plugin-transform-class-properties',
            'babel-plugin-syntax-dynamic-import',
            [
              'babel-plugin-transform-runtime', {
                helpers: true,
                polyfill: false, // we polyfill needed features in src/normalize.js
                regenerator: true
              }
            ],
            [
              'babel-plugin-transform-object-rest-spread', {
                useBuiltIns: true // we polyfill Object.assign in src/normalize.js
              }
            ]
          ],
          presets: [
            'babel-preset-react',
            [
              'babel-preset-env', {
                modules: false,
                targets: {
                  ie9: true
                },
                uglify: true
              }
            ]
          ]
        }
      }
    ]
  })

// Styles ------------------------------------
const extractStyles = new ExtractTextPlugin({filename: 'styles/[name].css', allChunks: true, disable: __DEV__})

config
  .module
  .rules
  .push({
    test: /\.(sass|scss|css)$/,
    loader: extractStyles.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: project.sourcemaps,
            minimize: {
              autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 2 versions']
              },
              discardComments: {
                removeAll: true
              },
              discardUnused: false,
              mergeIdents: false,
              reduceIdents: false,
              safe: true,
              sourcemap: project.sourcemaps
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: project.sourcemaps,
            includePaths: [inProjectSrc('styles')]
          }
        }
      ]
    })
  })
config
  .plugins
  .push(extractStyles)

// Images ------------------------------------
config
  .module
  .rules
  .push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      'file-loader?publicPath=/,name=[name].[ext]', {
        loader: 'img-loader',
        options: {
          enabled: __PROD__,
          gifsicle: {
            interlaced: false
          },
          mozjpeg: {
            progressive: true,
            arithmetic: false
          },
          optipng: true, // disabled
          pngquant: {
            floyd: 0.5,
            speed: 2
          },
          svgo: {
            plugins: [
              {
                removeTitle: true
              }, {
                convertPathData: false
              }
            ]
          }
        }
      }
    ]
  })

// HTML Template ------------------------------------
config
  .plugins
  .push(new HtmlWebpackPlugin({
    template: inProjectSrc('index.html'),
    inject: true,
    minify: {
      collapseWhitespace: true
    }
  }))

// Development Tools ------------------------------------
if (__DEV__) {
  config
    .entry
    .main
    .push(`webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`)
  config
    .plugins
    .push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin())
}

// Production Optimizations ------------------------------------
if (__PROD__) {
  config
    .plugins
    .push(new webpack.LoaderOptionsPlugin({minimize: true, debug: false}), new CompressionPlugin({asset: "[path].gz[query]", algorithm: "gzip", test: /\.(js|css|html|svg)$/, threshold: 10240, minRatio: 0.8}), new webpack.optimize.UglifyJsPlugin({minimize: true}), new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }))
}

module.exports = config
