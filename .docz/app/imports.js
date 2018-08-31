export const imports = {
  'src/Cache.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cache" */ 'src/Cache.mdx'),
  'src/CreatingAndEditing.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-creating-and-editing" */ 'src/CreatingAndEditing.mdx'),
  'src/CSSFrameworks.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-css-frameworks" */ 'src/CSSFrameworks.mdx'),
  'src/Fonts.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-fonts" */ 'src/Fonts.mdx'),
  'src/HTML.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-html" */ 'src/HTML.mdx'),
  'src/HTMLII.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-htmlii" */ 'src/HTMLII.mdx'),
  'src/Imgsize.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-imgsize" */ 'src/Imgsize.mdx'),
  'src/Override.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-override" */ 'src/Override.mdx'),
  'src/Preface.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-preface" */ 'src/Preface.mdx'),
  'src/Templating.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-templating" */ 'src/Templating.mdx'),
  'src/WAF.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-waf" */ 'src/WAF.mdx'),
}
