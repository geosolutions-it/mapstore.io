module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("CNAME");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
