# @gfp/vue-ui

A Vue 3 UI component library built for GFP by Daniel Brouse @ Zero41.

## Installation

```bash
npm install git+ssh://git@github.com:Zero41/gfp-vue-ui.git
```

## Required Dependencies

This package requires the following peer dependencies to be installed in your project:

```bash
npm install vue@^3.4.0 tailgrids@^2.3.0 tailwindcss@^4.0.0 vue-icons-plus@^0.1.8
```

### Why these dependencies?

- **Vue 3.4+** - The component library is built with Vue 3
- **Tailgrids 2.3+** - Provides the design system foundation
- **Tailwind CSS 4+** - Used for styling (optional but recommended)
- **vue-icons-plus 0.1.8+** - Provides icon components (optional, only needed if you use components with icons)

## Setup

### 1. Import the Component Library

In your main application file (e.g., `main.ts` or `main.js`):

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import GfpVueUI from '@gfp/vue-ui'

const app = createApp(App)
app.use(GfpVueUI)
app.mount('#app')
```

### 2. Import Styles

Import the component library styles in your main CSS file or main application file:

```typescript
import '@gfp/vue-ui/styles.css'
```

### 3. Configure Tailwind CSS (Optional but Recommended)

If you're using Tailwind CSS, you can use the included preset in your `tailwind.config.js`:

```javascript
import gfpPreset from '@gfp/vue-ui/tailwind-preset'

export default {
  presets: [gfpPreset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@gfp/vue-ui/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // your other config...
}
```

## Usage

Once installed and configured, you can use any component in your Vue templates:

```vue
<template>
  <div>
    <Button label="Click me" primary @click="handleClick" />
    <Input v-model:value="name" placeholder="Enter your name" />
    <Select
      v-model="selectedOption"
      :options="['Option 1', 'Option 2', 'Option 3']"
      placeholder="Choose an option"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const selectedOption = ref('')

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## Available Components

The library includes the following components:

- **Layout**: Card, Fieldset, MainNav, Sidebar, SubHeader, MasonaryGrid
- **Buttons**: Button, BlockButton, ButtonGroup, IconButton
- **Forms**: Input, DateInput, Select, Checkbox, RadioGroup, Field
- **Feedback**: Badge, Dialog, Drawer, Modal, Spinner, Text
- **Navigation**: Pagination, Tabs, TabContent, Link, Dropdown
- **Tables**: Table, TableHead, TableBody, TableRow, TableHeader, TableCell
- **Utilities**: DarkModeToggle
- **Icons**: Various GFP-specific icons (Gown, Hood, Frame, Plaque, etc.)

## Development & Playground

This package includes a local playground for testing and developing components.

### Running the Playground

The playground is a Vite-powered development environment where you can see all components in action:

```bash
npm run dev
```

This will start a local development server (typically at `http://localhost:5173`) where you can:

- View live examples of all components
- Test component props and interactions
- Develop and test new components

The playground is located in the `/playground` directory and includes example pages for each component.

### Building the Library

To build the library for distribution:

```bash
npm run build
```

This will:

1. Bundle the library using Vite
2. Generate TypeScript declaration files
3. Output to the `/dist` directory

### Code Quality

Format code:

```bash
npm run format
```

Lint code:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

Type checking:

```bash
npm run type-checks
```

## Package Structure

```
@gfp/vue-ui/
├── dist/              # Built library (committed to git)
├── src/               # Source components
│   ├── components/    # All Vue components
│   └── index.ts       # Main export file
├── playground/        # Local testing environment (not distributed)
├── styles.css         # Component styles
├── tailwind-preset.js # Tailwind preset
└── package.json
```

## Notes

- The `/dist` folder is committed to git (unlike typical packages) for deployment purposes
- The playground is for local development only and is not included in the published package
- This package is currently marked as private and intended for internal use

## License

UNLICENSED

## Author

Zero41
