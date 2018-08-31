(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/Templating.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),m=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./src/Img.js");function p(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}a.default=function(e){var a=e.components;p(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:a},o.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"mediawiki-templating"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#mediawiki-templating"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"MediaWiki Templating"),o.a.createElement(m.MDXTag,{name:"p",components:a},"We saw on the last section that my code had a reused piece. ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'<h1 id="uw-header">iGEM Washington Example</h1>'),". Now, although this is a very simple piece, just imagine that this reused piece of code was 30 lines long. For example, maybe this piece of code could be a header bar that contains the logic for navigation. You would have to copy paste that onto every single page you go to. "),o.a.createElement(m.MDXTag,{name:"p",components:a},"Now that's all fine and dandy, but what if you want to change a single thing? You'd have to change a single thing on 20 different pages, if you have it on every page of your wiki!"),o.a.createElement(m.MDXTag,{name:"p",components:a},"\ud83e\udd14 If only there was a way to easily reuse HTML data and modify it once so it changes everywhere else."),o.a.createElement(m.MDXTag,{name:"p",components:a},"\ud83d\ude0c There is! You can use MediaWiki's templating feature."),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"To reiterate the purpose of templating"),": You can reuse code without having to copy paste it everywhere, and you can modify it in a single place and it changes for ALL of the pages."),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"making-a-template-for-html"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#making-a-template-for-html"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Making a template for HTML"),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"IMPORTANT")," note before we start. This ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"WILL")," work for CSS and JavaScript, ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"BUT"),", it will ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"FAIL")," if your CSS or JavaScript has the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"&")," symbol ANYWHERE in it. There is a way around this that I will teach in the next segment."),o.a.createElement(m.MDXTag,{name:"p",components:a},"A ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"template")," is a page that you can use for many things. These templates can contain HTML or just plaintext code (without ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"&")," symbol, again). It is almost the same as making a blank page from the last section. "),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"To get a template page, you use the format ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"http://[YEAR].igem.org/Template:[TEAM]/[TEMPLATENAME]")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"To use the template in your actual page, you use {{","[TEAM]","/","[TEMPLATENAME]","}}."),o.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Note, this goes outside any tags you have. You cannot insert it in the middle of ",o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"li"},"any")," HTML tag. For example, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<div>{{Washington/Test}}</div>")," would do nothing.")))),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"an-example"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#an-example"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"An example"),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"We go to the new template page we want. Let's just go to ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://2018.igem.org/Template:Washington/Test"}},"http://2018.igem.org/Template:Washington/Test")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"We create and start editing. We want to put in the HTML code for the header we just made. This will output whatever we wanted to the resulting page. It looks messy but that doesn't matter. Only whatever you input on this box will be brought over to the page you call the template on.")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre"},'<h1 id="uw-header">iGEM Washington Example</h1>\n')),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Include this on the page we want. We will include this on both EP1 and EP2. ")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre"},'{{Washington/Test}}\n\n<html>\n    <h2 id="uw-subheader">This is the example page one</h2>\n    <p id="uw-content">Content content content content content</p>\n</html>\n')),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"Now if you look at it, it works! I won't show a picture, but if you've been following along, you'll see it worked for you. If it didn't please reach out and ask for help!")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"You can also include ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<style></style>")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<script><\/script>")," tags in here and template that too, but there is a better way, because the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"&")," symbol doesn't work correctly at times."))),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"templating-css-and-javascript"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#templating-css-and-javascript"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),'"Templating" CSS and JavaScript'),o.a.createElement(m.MDXTag,{name:"p",components:a},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"&")," symbol not working correctly is a known issue but nobody has ever sought to fix it. This makes using JavaScript and some CSS a lot harder, but it's doable! This is very crucial to have if you want to use APIs like Bootstrap. "),o.a.createElement(m.MDXTag,{name:"p",components:a},"This next portion is how I encourage you to incorporate code from now on. I will call it ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"the correct way to incorporate code"),". I will show an example after listing the steps."),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Take your template link with your CSS or JavaScript code: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"http://[YEAR].igem.org/Template:[TEAM]/[TEMPLATE]")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Add this exact string: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"?action=raw&ctype=text/[CSS OR JAVASCRIPT]")," where ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"[CSS OR JAVASCRIPT]")," is ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"css")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"javascript"),", depending on what type of code is in the template."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Incorporate it into an actual page with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<script>")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<style>")," tags like so:")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre"},'\x3c!-- For CSS --\x3e\n<link href="http://[YEAR].igem.org/Template:[TEAM]/[TEMPLATE]?action=raw&ctype=text/css" type="text/css" rel="stylesheet" />\n\n\x3c!-- For JavaScript --\x3e\n<script src="http://[YEAR].igem.org/Template:[TEAM]/[TEMPLATE]?action=raw&ctype=text/javascript" type="text/javascript"><\/script>\n')),o.a.createElement(m.MDXTag,{name:"p",components:a},"Those two lines of codes will act exactly like incorporating a local JavaScript/CSS file, or using a CDN, like you have learned about in the INFO 343 book."),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"another-example"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#another-example"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Another example"),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"On ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://2018.igem.org/Template:Washington/Testtest"}},"http://2018.igem.org/Template:Washington/Testtest"),", I put just this:")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre"},"#uw-header {\n color: red;\n}\n")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"On EP1, I have this. Note that the /Test template is what actually has the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"#uw-header")," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"h1")," tag!")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre"},'{{Washington/Test}}\n\n<html>\n    <link href="http://2018.igem.org/Template:Washington/Testtest?action=raw&ctype=text/css" type="text/css" rel="stylesheet" />\n    <h2 id="uw-subheader">This is the example page one</h2>\n    <p id="uw-content">Content content content content content</p>\n</html>\n')),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"It totally works.")),o.a.createElement(r.a,{src:t("./src/imgs/1-3.png"),alt:"Example 1-3"}))}},"./src/imgs/1-3.png":function(e,a,t){e.exports=t.p+"static/img/1-3.2c095816.png"}}]);