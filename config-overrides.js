const { injectBabelPlugin, getLoader } = require('react-app-rewired')

module.exports = function override(config, env) {
  //inject babel, antd 按需加载
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)

  //get css loader
  const cssLoader = getLoader(
    config.module.rules,
    rule => rule.test && String(rule.test) === String(/\.css$/)
  );

  //sass loader
  const sassLoader = {
    test: /\.scss$/,
    use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
  };
  //add sass loader to webpack.config
  const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
  oneOf.unshift(sassLoader);
  return config
}