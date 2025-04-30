export function showHackedMessage(): void {
  (function (): void {
    if (document.getElementById('matrix-canvas')) return;
    const japanese: string[] = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン'.split('');
    function getRandomJapaneseChar(): string {
      return japanese[Math.floor(Math.random() * japanese.length)];
    }
    function transformTextNodes(node: Node): void {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
        let index = 0;
        const text = node.nodeValue.split('');
        const interval = setInterval(() => {
          if (index < text.length) {
            text[index] = getRandomJapaneseChar();
            node.nodeValue = text.join('');
            index++;
          }
        }, 50); // Delay between replacing each character
      } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName !== 'SCRIPT' && (node as Element).tagName !== 'STYLE') {
        for (const child of node.childNodes) {
          transformTextNodes(child);
        }
      }
    }
    transformTextNodes(document.body);
    document.body.style.backgroundColor = 'black';
    document.body.style.color = '#0f0';
    document.body.style.fontFamily = "'Courier New', Courier, monospace";
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;  // Add null check for context
    let width: number, height: number, columns: number, drops: number[];
    const fontSize = 14;
    function resize(): void {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    }
    window.addEventListener('resize', resize);
    resize();
    function draw(): void {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px 'Courier New', Courier, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = japanese[Math.floor(Math.random() * japanese.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      // Add "You've been hacked" message in the middle
      const hackedMessage = "YOU'VE BEEN HACKED";
      ctx.font = "regular 48px 'Courier New', Courier, monospace";
      ctx.fillStyle = "#00FF00"; // Red color for emphasis
      
      // Calculate text width to center it
      const textMetrics = ctx.measureText(hackedMessage);
      const textWidth = textMetrics.width;
      
      // Center the text on the canvas
      ctx.fillText(hackedMessage, (width - textWidth) / 2, height / 2);
      
      requestAnimationFrame(draw);
    }
    // Wait 3 seconds before starting animation
    setTimeout(() => {
      draw();
    }, 3000);
  })();
}

// Auto-execute when script loads
if (typeof window !== 'undefined') {
  // Wait for the DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(showHackedMessage, 3000);
    });
  } else {
    // DOM is already loaded
    setTimeout(showHackedMessage, 3000);
  }
}