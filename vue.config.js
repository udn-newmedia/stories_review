module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module.rules.delete('eslint');

    const rules = [
      { name: 'images', dir: 'img' },
      { name: 'media',  dir: 'media' }
    ];
    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule.name)
      ruleConf.uses.clear()
      ruleConf
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: `${rule.dir}/[name].[hash:8].[ext]`
        })
    });
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    colorful: {
      entry: 'src/main.js',
      template: 'public/colorful.html',
      filename: 'colorful.html',
    }
  }
}