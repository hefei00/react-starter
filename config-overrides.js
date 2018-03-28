const { injectBabelPlugin, getLoader } = require('react-app-rewired')

//针对create-react-app添加自定义配置，常见配置社区已经写好插件
//https://github.com/timarney/react-app-rewired
module.exports = function override(config, env) {
  //按需加载，以antd为例 需要npm install babel-plugin-import antd
  // config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)

  //添加自定义webpack配置，以sass为例，需要npm install node-sass sass-loader
  // const cssLoader = getLoader(
  //   config.module.rules,
  //   rule => rule.test && String(rule.test) === String(/\.css$/)
  // );

  // const sassLoader = {
  //   test: /\.scss$/,
  //   use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
  // };

  // const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
  // oneOf.unshift(sassLoader);

  return config
}