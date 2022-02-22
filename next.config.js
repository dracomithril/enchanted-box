/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ['tsx'],
  images: {
    domains: ['ucarecdn.com'],
  },
  reactStrictMode: true,
  webpack: (cfg, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    cfg.module.rules.push(
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
      ]
    );
    return cfg;
  },
};
