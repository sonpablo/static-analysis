# @neuraverse/static-analysis

Shared ESLint, Prettier, Commitlint, and TypeScript configurations for React projects. This package provides consistent static analysis rules across all Neuraverse applications.

## Quick Start

For React projects, follow these steps to get up and running quickly:

1. **Configure GitLab Registry** (create `.npmrc` in your project root):
   ```ini
   @neuraverse:registry=https://gitlab.hrg.systems/api/v4/packages/npm/
   //gitlab.hrg.systems/api/v4/packages/npm/:_authToken=${GITLAB_TOKEN}
   //gitlab.hrg.systems/api/v4/packages/npm/:always-auth=true
   ```

2. **Install the package and peer dependencies** (npm example):
   ```bash
   npm install --save-dev @neuraverse/static-analysis@^1.0.0 \
     eslint@^9.0.0 prettier@^3.0.0 \
     @ianvs/prettier-plugin-sort-imports@^4.0.0
   ```

3. **Create `eslint.config.mjs`**:
   ```javascript
   import reactConfig from "@neuraverse/static-analysis/eslint/react";
   export default [...reactConfig];
   ```

4. **Create `prettier.config.js`**:
   ```javascript
   import prettierConfig from "@neuraverse/static-analysis/prettier";
   export default { ...prettierConfig };
   ```

5. **Add scripts to `package.json`**:
   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix",
       "format": "prettier --write .",
       "format:check": "prettier --check ."
     }
   }
   ```

For detailed instructions and additional configurations (TypeScript, Commitlint, Husky, etc.), see the sections below.

## Installation

### Configure GitLab Registry

Create or update your `.npmrc` file in your project root:

```ini
@neuraverse:registry=https://gitlab.hrg.systems/api/v4/packages/npm/
//gitlab.hrg.systems/api/v4/packages/npm/:_authToken=${GITLAB_TOKEN}
//gitlab.hrg.systems/api/v4/packages/npm/:always-auth=true
```

Set your `GITLAB_TOKEN` environment variable with a personal access token that has `read_api` scope.

### Install the Package

Using npm:

```bash
npm install --save-dev @neuraverse/static-analysis@^1.0.0
```

Using yarn:

```bash
yarn add -D @neuraverse/static-analysis@^1.0.0
```

Using pnpm:

```bash
pnpm add -D @neuraverse/static-analysis@^1.0.0
```

### Install Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

**Using npm:**

```bash
npm install --save-dev eslint@^9.0.0 prettier@^3.0.0 @ianvs/prettier-plugin-sort-imports@^4.0.0
```

**Using yarn:**

```bash
yarn add -D eslint@^9.0.0 prettier@^3.0.0 @ianvs/prettier-plugin-sort-imports@^4.0.0
```

**Using pnpm:**

```bash
pnpm add -D eslint@^9.0.0 prettier@^3.0.0 @ianvs/prettier-plugin-sort-imports@^4.0.0
```

> **Note:** `@commitlint/cli` is optional and only required if you want to enforce conventional commits with Husky hooks.

### Optional: Commitlint

If you want to enforce conventional commits with Husky hooks, install:

```bash
npm install --save-dev @commitlint/cli@^19.0.0
```

### Dependencies Included (DO NOT install separately)

The following packages are already included as dependencies of this library. **Do not install them directly** in your project to avoid version conflicts:

- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier
- `eslint-plugin-react` - React specific linting rules
- `eslint-plugin-react-hooks` - Rules of Hooks enforcement
- `eslint-plugin-jsx-a11y` - Accessibility rules for JSX
- `eslint-plugin-import` - Import/export linting
- `typescript-eslint` - TypeScript ESLint support
- `@commitlint/config-conventional` - Conventional commits configuration

If your project already has any of these installed, **remove them** before using this library:

```bash
npm uninstall eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import typescript-eslint @commitlint/config-conventional
```

## Usage

### ESLint

Create `eslint.config.mjs` in your project root:

```javascript
import reactConfig from "@neuraverse/static-analysis/eslint/react";

export default [
  ...reactConfig,
  {
    // Add your project-specific overrides here
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      // Your custom rules
    },
  },
];
```

If you don't need React-specific rules, use the base config:

```javascript
import baseConfig from "@neuraverse/static-analysis/eslint/base";

export default [
  ...baseConfig,
  // Your overrides
];
```

Add to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Prettier

Create `prettier.config.js` in your project root:

```javascript
import prettierConfig from "@neuraverse/static-analysis/prettier";

export default {
  ...prettierConfig,
  // Add your project-specific overrides here
};
```

Add to `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "prettier": {
    "ignorePath": "@neuraverse/static-analysis/prettierignore"
  }
}
```

Or use `.prettierignore` by copying from the package:

**On Linux/macOS/Git Bash:**
```bash
cp node_modules/@neuraverse/static-analysis/prettierignore .prettierignore
```

**On Windows (PowerShell):**
```powershell
Copy-Item node_modules/@neuraverse/static-analysis/prettierignore .prettierignore
```

**On Windows (Command Prompt):**
```cmd
copy node_modules\@neuraverse\static-analysis\prettierignore .prettierignore
```

### Commitlint

Create `commitlint.config.js` in your project root:

```javascript
export default {
  extends: ["@neuraverse/static-analysis/commitlint"],
};
```

### TypeScript

Create `tsconfig.json` in your project root:

For React projects:

```json
{
  "extends": "@neuraverse/static-analysis/tsconfig/react",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

For non-React projects:

```json
{
  "extends": "@neuraverse/static-analysis/tsconfig/base",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### EditorConfig

Copy the EditorConfig template to your project root:

**On Linux/macOS/Git Bash:**
```bash
cp node_modules/@neuraverse/static-analysis/editorconfig.template .editorconfig
```

**On Windows (PowerShell):**
```powershell
Copy-Item node_modules/@neuraverse/static-analysis/editorconfig.template .editorconfig
```

**On Windows (Command Prompt):**
```cmd
copy node_modules\@neuraverse\static-analysis\editorconfig.template .editorconfig
```

### Husky (Git Hooks)

To enforce commit message format and run lint-staged with Husky:

**Step 1:** Install Husky and lint-staged:

```bash
npm install --save-dev husky lint-staged
```

**Step 2:** Initialize Husky:

```bash
npm pkg set scripts.prepare="husky"
npm run prepare
```

**Step 3:** Create the pre-commit hook (runs lint-staged):

```bash
echo 'npx lint-staged' > .husky/pre-commit
```

**Step 4 (Optional):** Create the commit-msg hook to validate conventional commits:

> **Note:** This step requires `@commitlint/cli` and `@commitlint/config-conventional`. See the [Optional: Commitlint Dependencies](#optional-commitlint-dependencies) section above if you haven't installed them yet.

**On Linux/macOS/Git Bash:**
```bash
echo 'npx --no -- commitlint --edit ${1}' > .husky/commit-msg
```

**On Windows (PowerShell):**
```powershell
echo 'npx --no -- commitlint --edit $1' | Out-File -FilePath .husky/commit-msg -Encoding utf8
```

**On Windows (Command Prompt):**
```cmd
echo npx --no -- commitlint --edit %1 > .husky/commit-msg
```

### lint-staged

This package provides a ready-to-use lint-staged configuration to automatically lint and format staged files before committing.

Create a `lint-staged.config.js` in your project root:

```javascript
import lintStagedConfig from "@neuraverse/static-analysis/lintstaged";

export default lintStagedConfig;
```

You can extend or override the config as needed:

```javascript
import lintStagedConfig from "@neuraverse/static-analysis/lintstaged";

export default {
  ...lintStagedConfig,
  // custom rules
};
```

Add the script to your `package.json`:

```json
{
  "scripts": {
    "lint-staged": "lint-staged"
  }
}
```

> **Note:** See the [Husky (Git Hooks)](#husky-git-hooks) section above for setting up the pre-commit hook that runs lint-staged.

## Configurations Included

### ESLint

- **Base Config**: TypeScript support with `typescript-eslint`, JavaScript support
- **React Config**: Extends base with React, React Hooks, JSX a11y, and import plugins
- Auto-detects React version
- Prettier integration (disables conflicting rules)

### Prettier

- Single quotes
- Tabs for indentation
- 100 character line width
- ES5 trailing commas
- Avoid arrow function parentheses when possible
- Automatic import sorting with React prioritization

### Commitlint

- Conventional commits format
- Custom types: `feat`, `fix`, `patch`, `breaking`, `doc`
- Case-insensitive subject lines

### TypeScript

- **Base Config**: Strict mode, ES2020 target, bundler module resolution
- **React Config**: Extends base with React JSX support and DOM types

## Versioning

This package follows semantic versioning. Updates to dependency versions will trigger appropriate version bumps:

- **Major**: Breaking changes in rules or dependencies
- **Minor**: New features or non-breaking rule additions
- **Patch**: Bug fixes and dependency patches

See [CHANGELOG.md](./CHANGELOG.md) for version history.
