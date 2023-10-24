const { extname } = require("path");
const { processImportsLines, categorizeImports } = require("../utils");

function sort(document) {
  const vscode = require("vscode"); // Ensure to require vscode
  const extension = extname(document.fileName).substring(1);
  const rawText = document.getText();

  if (supportedFileExtensions[extension]) {
    const newLineChar = getNewLineChar(rawText);
    const text = rawText.split(newLineChar);

    const checkIfLineShouldStay = (line, index) => {
      // ... rest of your logic ...
    };

    const importsLines = text.filter((line, index) =>
      checkIfLineShouldStay(line, index, true)
    );

    const { comment, imports } = processImportsLines(importsLines, newLineChar);

    const importsByContext = categorizeImports(imports);

    const sortType = vscode.workspace
      .getConfiguration("better-import-sorter")
      .get("sort");
    const sortFunction = getSortFunction(sortType);

    importsByContext.external
      .sort(sortFunction)
      .sort((a, b) => a.localeCompare(b));
    importsByContext.internal
      .sort(sortFunction)
      .sort((a, b) => a.localeCompare(b));

    const hasExternals = Boolean(importsByContext.external.length);
    const hasInternals = Boolean(importsByContext.internal.length);
    const hasComments = Boolean(comment.length);

    const importsSeparator = `${newLineChar}${newLineChar}`;
    const importAndCodeSeparator =
      hasInternals || hasExternals ? `${newLineChar}${newLineChar}` : "";
    const externalExports = hasExternals
      ? `${importsByContext.external.join(newLineChar)}`
      : "";
    const internalExports = hasInternals
      ? `${importsByContext.internal.join(newLineChar)}`
      : "";
    const comments = hasComments ? `${comment.join(newLineChar)}` : "";
    const commentSeparator =
      hasComments && (hasInternals || hasExternals) ? newLineChar : "";

    let restOfDocument;
    for (let i = 0; i < code.length; i++) {
      if (code[i]) {
        restOfDocument = code.slice(i).join(newLineChar);
        break;
      }
    }

    return `${comments}${commentSeparator}${externalExports}${importsSeparator}${internalExports}${importAndCodeSeparator}${restOfDocument}`;
  } else {
    return document.getText();
  }
}

module.exports = sort;
