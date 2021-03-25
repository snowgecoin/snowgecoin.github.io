module.exports = {
    siteMetadata: {
        title: "Snowge",
        description: 'Front end site for Snowge, the next moon rocket.',
        author: 'SnowgeMami'
    },
    plugins: [
        "gatsby-plugin-sass",
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sharp`,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "xxx",
                short_name: "xxxx",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "standalone",
                icon: "src/images/Smollsnoge.png" // This path is relative to the root of the site.
            }
        }
    ],
};
