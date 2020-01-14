module.exports = {
    title: "chenshuang 的vuepress",
    description: "chenshuang vuepress",
    port: 9999,
    themeConfig: {
        nav: [{
            text: "Languages",
            items: [{
                    text: "Group1",
                    items: [
                        /*  */
                    ]
                },
                {
                    text: "Group2",
                    items: [
                        /*  */
                    ]
                }
            ]
        }],
        sidebar: {
            "/foo/": [
                "" /* /foo/ */ ,
                "one" /* /foo/one.html */ ,
                "two" /* /foo/two.html */
            ],

            "/bar/": [
                "" /* /bar/ */ ,
                "three" /* /bar/three.html */ ,
                "four" /* /bar/four.html */
            ],

            // fallback
            "/": [
                "" /* / */ ,
                "contact" /* /contact.html */ ,
                "about" /* /about.html */
            ]
        }
    }
};