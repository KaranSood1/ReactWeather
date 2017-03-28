/**
 * Created by Tridev on 26-03-2017.
 */
module.exports={
  entry: './app/app.jsx',
  output :{
      path: __dirname,
      filename:'./public/bundle.js'
  },
    resolve:{
      extensions:[' ','.js','.jsx']
    },
    module:{
      loaders:[
          {
             loader: 'babel-loader',
              query:{
                 presets:['react','es2015', 'stage-0']
              },
              test: /\.jsx?$/,
              exclude:/(node_modules | bower_components)/
          }
      ]
    },
    devtool:'cheap-module-eval-source-map'
};
