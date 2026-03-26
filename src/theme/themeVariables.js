const colors = require('./colors.json');

const STYLE_ID = 'shared-theme-color-variables';

const toCssVariableName = (token) =>
  `--color-${token.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;

const cssVariables = Object.entries(colors)
  .map(([token, value]) => `  ${toCssVariableName(token)}: ${value};`)
  .join('\n');

function ensureThemeVariables(targetDocument = typeof document !== 'undefined' ? document : null) {
  if (!targetDocument) {
    return;
  }

  if (targetDocument.getElementById(STYLE_ID)) {
    return;
  }

  const style = targetDocument.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `:root {\n${cssVariables}\n}`;

  const parent = targetDocument.head || targetDocument.documentElement;
  parent.prepend(style);
}

ensureThemeVariables();

module.exports = {
  colors,
  cssVariables,
  ensureThemeVariables,
};
