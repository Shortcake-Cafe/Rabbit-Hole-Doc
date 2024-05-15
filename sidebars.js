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
export default {
  docSidebar: [
    {
      type: 'doc',
      id: 'introduction', 
      label: 'Introduction', 
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: 'Installation', 
        },
        {
          type: 'doc',
          id: 'getting-started/compiling',
          label: 'Compiling the game', 
        },
      ]
    },
    {
      type: 'category',
      label: 'Characters',
      items: [
        {
          type: 'doc',
          id: 'character/overview',
          label: 'Overview', 
        },
        /*
        {
          type: 'category',
          label: 'Creating a character',
          items: [
            {
              type: 'doc',
              id: 'character/creating-chara/first-steps',
              label: 'First steps', 
            },
            {
              type: 'doc',
              id: 'character/creating-chara/sprites',
              label: 'Spriting', 
            },
            {
              type: 'doc',
              id: 'character/creating-chara/gimmick',
              label: 'Custom Gimmick', 
            },
            {
              type: 'doc',
              id: 'character/creating-chara/unlock',
              label: 'Unlocking', 
            },
          ]
        },
        */
      ]
    },
  ],
  extSidebar: [
    {
      type: 'doc',
      id: 'ext/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'ext/usage',
      label: 'Usage',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'ext/getting-started/core-concepts',
          label: 'Core Concepts',
        },
        {
          type: 'doc',
          id: "ext/getting-started/environment",
          label: 'Dev Environment',
        },
        {
          type: 'doc',
          id: 'ext/getting-started/first-extension',
          label: 'First Extension',
        }
      ],
    },
    {
      type: 'doc',
      id: 'ext/skinning',
      label: 'Skinning',
    }
  ],
};
