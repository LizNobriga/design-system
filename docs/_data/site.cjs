module.exports = async function () {
  return {
    dir: 'ltr',
    lang: 'en',
    name: 'California design system',
    description: 'State of California design system',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/cagov/design-system',
      },
    ],
    footer: {
      category: [
        {
          "name": "hello",
          "childred": [
            {
              "href": "my url",
              "text": "my text"
            }
          ]
        }
      ]
    },
    gitSiteUrl: 'https://github.com/cagov/design-system',
    gitBranch: 'main',
    helpUrl: 'https://github.com/cagov/design-system/issues',
    logoAlt: 'CA.gov',
    iconColorMaskIcon: '#3f93ce',
    iconColorMsapplicationTileColor: '#1d3557',
    iconColorThemeColor: '#1d3557',
    analytics: '',
  };
};