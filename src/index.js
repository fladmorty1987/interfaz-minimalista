export function createButton(text, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className || 'minimal-button';
    return button;
}