export const imports = {
  'src/CreatingAndEditing.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-creating-and-editing" */ 'src/CreatingAndEditing.mdx'),
  'src/HTML.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-html" */ 'src/HTML.mdx'),
  'src/Preface.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-preface" */ 'src/Preface.mdx'),
}
