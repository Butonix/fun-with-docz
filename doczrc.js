export default {
  title: 'Fun with Docz',
  description: 'Here we`ll be playing around with Docz!!',
  // themeConfig: {
  //   mode: 'dark',
  // },
  dest: '/docs-build',
  files: './src/docs/*.{md,mdx}',
  public: './public',
  port: 3003,
  menu: [
    'Greet',
  ],
}