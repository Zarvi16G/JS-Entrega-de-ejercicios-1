const textInput = document.getElementById('text-input');
const charactersCount = document.getElementById('characters-count');
const wordsCount = document.getElementById('words-count');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    const characters = text.replace(/\s/g, '').length;

    const trimmedText = text.trim();
    const words = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;

    charactersCount.textContent = `Characters: ${characters}`;
    wordsCount.textContent = `Words: ${words}`;
});
