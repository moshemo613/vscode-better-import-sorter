const vscode = require("vscode");
const sortImportsOnSave = require("./onSaveHandler");

let saveRegistration;

function unregisterWillSaveTextDocument() {
  if (!saveRegistration) {
    return;
  }

  saveRegistration.dispose();
  saveRegistration = null;
}

function registerWillSaveTextDocument() {
  if (saveRegistration) {
    return;
  }

  // Register sortImportsOnSave as the event handler for onWillSaveTextDocument event
  saveRegistration = vscode.workspace.onWillSaveTextDocument(sortImportsOnSave);
}

function getOnSaveSetting() {
  return vscode.workspace
    .getConfiguration("better-import-sorter")
    .get("onSave"); // Ensure to require vscode
}

function updateSaveRegistration() {
  if (getOnSaveSetting()) {
    registerWillSaveTextDocument();
  } else {
    unregisterWillSaveTextDocument();
  }
}

module.exports = {
  unregisterWillSaveTextDocument,
  registerWillSaveTextDocument,
  getOnSaveSetting,
  updateSaveRegistration,
};
