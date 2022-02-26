const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push(
    ...[
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] },
      },
      {
        test: /\.yml$/,
        type: 'json',
        use: 'yaml-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ]
  );
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    tls: false,
    net: false,
    module: false,
  };
  console.dir(config);
  return config;
};
