const cagovBuildSystem = require('@cagov/11ty-build-system');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js');

const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});

md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
  const token = tokens[idx];
  const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
  const [lang, instruction] = info.split(/\s+/g);

  const rawCode = token.content;
  let formattedCode;

  if (lang) {
    try {
      const hljsOptions = {
        language: lang,
        ignoreIllegals: true,
      };
      const highlightedCode = hljs.highlight(rawCode, hljsOptions).value;
      formattedCode = `<pre><code class="hljs">${highlightedCode}</code></pre>`;
    } catch (_) {
      const escapedCode = md.utils.escapeHtml(rawCode);
      formattedCode = `<pre><code class="hljs">${escapedCode}</code></pre>`;
    }

    if (instruction === 'script') {
      formattedCode = `<script type="module">${rawCode}</script>${formattedCode}`;
    }

    if (instruction === 'preview') {
      formattedCode = `<div class="code-block-preview">${rawCode}</div>${formattedCode}`;
    }

    return formattedCode;
  }

  const escapedCode = md.utils.escapeHtml(rawCode);
  return `<pre><code>${escapedCode}</code></pre>`;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addPlugin(cagovBuildSystem, {
    processors: {
      sass: {
        watch: ['docs/src/css/**/*', 'components/**/*.scss'],
        output: '_site_dist/index.css',
        minify: true,
        options: {
          file: 'docs/src/css/sass/index.scss',
          includePaths: ['./src/css/sass'],
        },
      },
      esbuild: {
        watch: ['docs/src/js/**/*', 'components/**/*.!(md)'],
        options: {
          entryPoints: ['docs/src/js/index.js'],
          bundle: true,
          minify: true,
          outfile: '_site_dist/built.js',
        },
      },
    },
  });

<<<<<<< HEAD
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/img/*': 'img' });
=======
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({ 'docs/src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/css/fonts': 'fonts' });
>>>>>>> 83708b33668976f1593d0f468a31d26473dd1a06
  eleventyConfig.addPassthroughCopy({ '_site_dist/*': '/' });

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', '11ty.js', 'md'],
    dir: {
      input: '.',
      output: '_site',
      includes: 'docs/site/_includes',
      layouts: 'docs/site/_includes/layouts',
      data: 'docs/site/_data',
    },
  };
};
