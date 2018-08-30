export const imports = {
  'src/Test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-test" */ 'src/Test.mdx'),
}
