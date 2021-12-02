import React from "react";
import GlobalStyle, { fontUrl } from "../src/global";

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

export const parameters = {
  options: {
    storySort: {
      order: ["Intro", "Typography", "Color Palette", "Components"],
    },
  },
  actions: { disable: true },
  creevey: {
    skip: {
      stories: ["Page"],
    },
  },
};

// Load the font and avoid re-loading it when components change
const fontLinkId = "storybook-font-link-tag";

const loadFontsForStorybook = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement("link");

    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = "stylesheet";

    document.head.appendChild(fontLink);
  }
};
loadFontsForStorybook();
