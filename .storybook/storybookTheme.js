const { create } = require("storybook/theming");
const packageJson = require("../package.json");
const colors = require("../src/theme/colors.json");

const brandMarkup = `
  <span style="display:flex;gap:10px;font-family:'Inter',sans-serif;color:${colors.storybookText};">
    <img src="/react-logo.svg" alt="React" style="width:24px;height:24px;display:block;" />
    <span>
      <span>Component Storybook</span>
      <span>v${packageJson.version}</span>
    </span>
  </span>
`;

const storybookTheme = create({
  base: "dark",
  fontBase: '"Inter", sans-serif',
  fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  appBg: colors.storybookAppBg,
  appContentBg: colors.storybookSurface,
  appPreviewBg: colors.storybookSurface,
  appBorderColor: colors.storybookBorder,
  appBorderRadius: 14,
  barBg: colors.storybookSurface,
  barTextColor: colors.storybookTextMuted,
  barSelectedColor: colors.storybookAccent,
  barHoverColor: colors.storybookText,
  inputBg: colors.storybookSurfaceElevated,
  inputBorder: colors.storybookBorder,
  inputTextColor: colors.storybookText,
  inputBorderRadius: 10,
  buttonBg: colors.storybookSurfaceElevated,
  buttonBorder: colors.storybookBorder,
  colorPrimary: colors.storybookAccent,
  colorSecondary: colors.accent,
  textColor: colors.storybookText,
  textInverseColor: colors.storybookText,
  textMutedColor: colors.storybookTextMuted,
  brandTitle: brandMarkup,
  brandTarget: "_self",
});

const previewParameters = {
  layout: "centered",
  backgrounds: {
    default: "Canvas",
    values: [
      { name: "Canvas", value: colors.surfaceBase },
      { name: "Muted Surface", value: colors.surfaceMuted },
      { name: "Storybook Dark", value: colors.storybookAppBg },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  docs: {
    theme: storybookTheme,
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
};

module.exports = {
  previewParameters,
  storybookTheme,
};
