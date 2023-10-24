const { TextEdit, Range } = require("vscode");
const sort = require("../commands/sortImports");

function sortImportsOnSave({ document, waitUntil }) {
  const edits = Promise.resolve([new TextEdit(getMaxRange(), sort(document))]);
  waitUntil(edits);
}

function getMaxRange() {
  return new Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
}

module.exports = sortImportsOnSave;
