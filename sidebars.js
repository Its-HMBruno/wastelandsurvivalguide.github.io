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
  // TutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
          GuideSidebar: [
            'intro',
            'hello',
            {
              type: 'category',
              label: 'Guide',
              items: ['Guide-basics/create-a-document'],
            },
          ],
           */
  sidebar: [
    "intro",
    "ui",
    "gameplay",
    "content",
    "overhauls",
    "visuals",
    "finish",
    "faq",
    {
      type: "category",
      label: "Appendix",
      items: [
        "contributors",
        "dogma",
        "incompatible",
        {
          type: "link",
          label: "LOD Guide",
          href: "https://vivanewvegas.moddinglinked.com/lod.html",
        },
        "mods-avoid",
        "tools-avoid",
        "xedit",
        "themethod",
      ],
    },
  ],
};

module.exports = sidebars;
