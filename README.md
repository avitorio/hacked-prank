# hacked-prank

A fun package that creates a "Matrix-style" hacking effect on your webpage, complete with falling Japanese characters and a "YOU'VE BEEN HACKED" message. Perfect for pranks and demonstrations.

## Installation

```bash
npm install hacked-prank
```

## Usage

### ESM Import
```javascript
// The effect will start automatically when imported
import 'hacked-prank';

// Or if you need the function for manual control:
import { showHackedMessage } from 'hacked-prank';
showHackedMessage();
```

### CommonJS Import
```javascript
// The effect will start automatically when required
require('hacked-prank');

// Or if you need the function for manual control:
const { showHackedMessage } = require('hacked-prank');
showHackedMessage();
```

### Browser (CDN)
```html
<!-- The effect will start automatically when the script loads -->
<script src="https://cdn.jsdelivr.net/npm/hacked-prank/dist/index.umd.js"></script>
```

## Effects

When called, the package will:
1. Transform all text on the page into randomly changing Japanese characters
2. Create a Matrix-style rain effect with falling Japanese characters
3. Display a centered "YOU'VE BEEN HACKED" message
4. Change the page background to black with green text
5. Start the animation after a 3-second delay

## Features
- Full-screen Matrix-style animation
- Text transformation effect
- Responsive canvas that adjusts to window size
- Automatic execution when DOM is loaded
- Non-blocking animation using requestAnimationFrame
- Works with both module and script tag implementations

## Technical Details
- Uses HTML5 Canvas for the animation
- Written in TypeScript
- Automatically checks for DOM readiness
- Prevents multiple instances from running simultaneously
- Safe to use (doesn't affect scripts or styles)

## License

MIT 