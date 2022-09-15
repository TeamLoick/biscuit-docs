import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'bd9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '90d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c03'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '244'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f7d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '791'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0ab'),
    routes: [
      {
        path: '/docs/guide/Creating your bot/Command handling',
        component: ComponentCreator('/docs/guide/Creating your bot/Command handling', '15d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide/Creating your bot/Creating your first commands',
        component: ComponentCreator('/docs/guide/Creating your bot/Creating your first commands', '9a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide/Creating your bot/Event handling',
        component: ComponentCreator('/docs/guide/Creating your bot/Event handling', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide/Creating your bot/Initial files',
        component: ComponentCreator('/docs/guide/Creating your bot/Initial files', 'c69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide/Installations & Preparations/Installing Node.js and discord.js',
        component: ComponentCreator('/docs/guide/Installations & Preparations/Installing Node.js and discord.js', '64d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide/Installations & Preparations/Setting up a bot application',
        component: ComponentCreator('/docs/guide/Installations & Preparations/Setting up a bot application', 'e04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '612'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
