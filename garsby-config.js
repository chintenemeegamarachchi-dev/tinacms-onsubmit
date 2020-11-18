const tinaCmsConfig = {
    resolve: 'gatsby-plugin-tinacms',
    options: {
        // The CMS will be disabled on your production site
        enabled: process.env.NODE_ENV !== 'production',
        sidebar: true,
        plugins: ["gatsby-tinacms-remark"],
    },
}

module.exports = {
    plugins: [tinaCmsConfig],
}

