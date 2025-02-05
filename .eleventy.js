
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode(
    "card",
    (title, subtitle) => {
      return `<div class="card ${title}"><div class="icon ${title}"></div><strong>${title}</strong>${subtitle}</div>`;
    }
  );
};