const vscode = require("vscode");
const sortImports = require("./src/commands/sortImports");
const {
  unregisterWillSaveTextDocument,
  registerWillSaveTextDocument,
  updateSaveRegistration,
} = require("./src/handlers/updateSaveRegistration");

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    "better-import-sorter.sort",
    sortImports
  );

  context.subscriptions.push(disposable);
  updateSaveRegistration();
  vscode.workspace.onDidChangeConfiguration(updateSaveRegistration);

  // Register the onWillSaveTextDocument event
  registerWillSaveTextDocument();
}

function deactivate() {
  unregisterWillSaveTextDocument();
}

module.exports = {
  activate,
  deactivate,
};
