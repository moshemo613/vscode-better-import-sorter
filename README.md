# Better Import Sorter

This extension is a fork of [Sort Imports by Length](https://github.com/mario-iliev/vscode-sort-lengthy-imports) by Mario Iliev and allows for an enhanced sorting of imports by length, alphabetical order, and context. It can be configured to work on file save.

## Example

Imagine you have the following imports:

```js
import React from "react";
import css from "./styles.css";
import cn from "classnames";
import Text from "./Text";
import { MyFancyComponent } from "../common/MyFancyComponent";
import styled, { createGlobalStyle } from "styled-components";
```

You can sort and organize them as follows:

### By Length

#### Shortest to Longest (default behavior)

```js
import React from "react";
import cn from "classnames";
import styled, { createGlobalStyle } from "styled-components";

import Text from "./Text";
import css from "./styles.css";
import { MyFancyComponent } from "../common/MyFancyComponent";
```

#### Longest to Shortest

```js
import styled, { createGlobalStyle } from "styled-components";
import cn from "classnames";
import React from "react";

import { MyFancyComponent } from "../common/MyFancyComponent";
import css from "./styles.css";
import Text from "./Text";
```

#### Sorting Alphabetically (A-Z)

```js
import cn from "classnames";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import css from "./styles.css";
import { MyFancyComponent } from "../common/MyFancyComponent";
import Text from "./Text";
```

#### Sorting Alphabetically (Z-A)

```js
import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import cn from "classnames";

import Text from "./Text";
import { MyFancyComponent } from "../common/MyFancyComponent";
import css from "./styles.css";
```

## Configuration

You can configure the sort order by modifying your settings in VS Code. The available configuration options are:

```json
"better-import-sorter.sort": "shortestFirst"
"better-import-sorter.sort": "longestFirst"
"better-import-sorter.sort": "alphabeticalAsc"
"better-import-sorter.sort": "alphabeticalDesc"
"better-import-sorter.groupByFolder": true
```

### Grouping By Folder

```json
"better-import-sorter.groupByFolder": true
```

With this configuration, imports from different folders will be grouped together with a line break in between. It helps in visually separating imports from different contexts or parts of your project.

## Installation

### Via Visual Studio Code Marketplace

1. Open Visual Studio Code.
2. Go to Extensions (you can use the shortcut `Ctrl+Shift+X`).
3. Search for `Better Import Sorter`.
4. Click on `Install` to install the extension.

### Manual Installation

1. Download the extension from the [GitHub repository](https://github.com/moshemo613/vscode-better-import-sorter) or [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=your-extension-id).
2. Launch VS Code.
3. Go to Extensions (you can use the shortcut `Ctrl+Shift+X`).
4. Click on the three dots `...` at the top of the extensions pane, and select `Install from VSIX...`.
5. Locate the downloaded `.vsix` file and select it.

## Activation

The extension can be activated in two ways:

- Invoking the `Sort Imports` command through the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac, then type `Sort Imports` and hit `Enter`).
- On file save, if configured in the settings.

To enable sorting on file save, add the following to your settings:

```json
"better-import-sorter.onSave": true
```

## Supported Languages

The extension supports the following languages:

- JavaScript
- TypeScript
- JSX
- TSX

## Issues and Contribution

For any issues or if you'd like to contribute, please visit the [GitHub repository](https://github.com/moshemo613/vscode-better-import-sorter).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# TEST 123
