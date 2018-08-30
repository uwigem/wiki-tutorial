export const imports = {
  'src/CreatingAndEditing.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-creating-and-editing" */ 'src/CreatingAndEditing.mdx'),
  'src/CSS.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-css" */ 'src/CSS.mdx'),
  'src/HTML.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-html" */ 'src/HTML.mdx'),
  'src/HTMLII.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-htmlii" */ 'src/HTMLII.mdx'),
  'src/Preface.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-preface" */ 'src/Preface.mdx'),
  'src/Templating.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-templating" */ 'src/Templating.mdx'),
}
