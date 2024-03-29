/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // thattutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  //But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guide',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Installations & Preparations',
          collapsed: false,
          items: [
            'Guide/Installations & Preparations/Installing Node.js and discord.js',
            'Guide/Installations & Preparations/Setting up a bot application',
          ],
        },
        {
          type: 'category',
          label: 'Creating your bot',
          collapsed: false,
          items: [
            'Guide/Creating your bot/Initial files',
            'Guide/Creating your bot/Creating your first commands',
            'Guide/Creating your bot/Command handling',
            'Guide/Creating your bot/Event handling',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
