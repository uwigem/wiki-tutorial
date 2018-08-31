export const imports = {
  'src/CreatingAndEditing.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-creating-and-editing" */ 'src/CreatingAndEditing.mdx'),
  'src/CSSFrameworks.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-css-frameworks" */ 'src/CSSFrameworks.mdx'),
  'src/HTML.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-html" */ 'src/HTML.mdx'),
  'src/HTMLII.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-htmlii" */ 'src/HTMLII.mdx'),
  'src/Override.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-override" */ 'src/Override.mdx'),
  'src/Preface.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-preface" */ 'src/Preface.mdx'),
  'src/Templating.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-templating" */ 'src/Templating.mdx'),
}
