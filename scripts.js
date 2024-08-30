function addInkSplat(event) {
    const splat = document.createElement('div');
    splat.className = 'ink-splat';
    
    // List of possible sizes for the ink splat
    const sizes = [
        { width: '50px', height: '50px' },
        { width: '75px', height: '75px' },
        { width: '100px', height: '100px' },
        { width: '125px', height: '125px' }
    ];
    
    // List of possible colors for the ink splat
    const colors = [
        '#ff5722', // Orange
        '#03a9f4', // Blue
        '#4caf50', // Green
        '#f44336', // Red
        '#9c27b0', // Purple
        '#ffeb3b'  // Yellow
    ];
    
    // Randomly select a size and color
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    splat.style.backgroundImage = `radial-gradient(circle, ${color} 20%, transparent 80%)`; // Use a radial gradient for color
    splat.style.width = size.width;
    splat.style.height = size.height;
    
    // Get the correct x and y positions of the mouse click relative to the target element
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    splat.style.left = `${x - parseInt(size.width) / 2}px`;
    splat.style.top = `${y - parseInt(size.height) / 2}px`;
    document.body.appendChild(splat);
    
    // Remove the ink splat after a few seconds to avoid clutter
    setTimeout(() => {
        splat.remove();
    }, 2000);
}