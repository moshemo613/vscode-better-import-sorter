function getNewLineChar(rawText) {
  return rawText.includes("\r\n") ? "\r\n" : "\n";
}

function getSortFunction(sortType) {
  if (sortType === "alphabeticalAsc") {
    return (a, b) => a.localeCompare(b);
  } else if (sortType === "alphabeticalDesc") {
    return (a, b) => b.localeCompare(a);
  } else {
    return sortType === "longestFirst"
      ? (a, b) => b.length - a.length || a.localeCompare(b)
      : (a, b) => a.length - b.length || a.localeCompare(b);
  }
}

function processImportsLines(importsLines, newLineChar) {
  let comment = [];
  let imports = [];
  let tempImport = [];
  importsLines.forEach((line, index) => {
    const isImportLine =
      line.startsWith("import") || line.startsWith("// import");
    const isLineEnd = line.endsWith('";') || line.endsWith("';");
    const isCommentStart = line.startsWith("/*");
    const isCommentEnd = line.endsWith("*/");

    if (index === 0 && isCommentStart && isCommentEnd) {
      comment.push(line);
    } else if (isImportLine && isLineEnd) {
      imports.push(line);
    } else {
      if (!isImportLine && !isLineEnd) {
        tempImport.push(line);
      }

      if (isLineEnd) {
        tempImport = tempImport.sort((a, b) => b.length - a.length);
        tempImport = `import {${newLineChar}${tempImport.join(
          newLineChar
        )}${newLineChar}${line}`;
        tempImport && imports.push(tempImport);
        tempImport = [];
      }
    }
  });
  return { comment, imports };
}

function categorizeImports(imports) {
  const importsByContext = {
    external: [],
    internal: [],
  };
  imports.forEach((string) => {
    if (string) {
      if (
        string.includes('from ".') ||
        string.includes('from "/') ||
        string.includes("from '.") ||
        string.includes("from '/")
      ) {
        importsByContext.internal.push(string);
      } else {
        importsByContext.external.push(string);
      }
    }
  });
  return importsByContext;
}
module.exports = {
  getNewLineChar,
  getSortFunction,
  processImportsLines,
  categorizeImports,
};
