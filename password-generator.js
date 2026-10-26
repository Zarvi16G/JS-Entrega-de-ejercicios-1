const lengthInput = document.getElementById('length');
const generatorBtn = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

const generatePassword = (length) => {
    // Un número aleatorio seguro por cada carácter de la contraseña
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);

    let password = '';

    for (let i = 0; i < length; i++) {
        // El % deja el índice entre 0 y charset.length - 1
        password += charset[randomValues[i] % charset.length];
    }

    return password;
};

generatorBtn.addEventListener('click', () => {
    const length = Number(lengthInput.value);

    if (!Number.isInteger(length) || length < 4) {
        passwordDisplay.textContent = 'La longitud debe ser mayor o igual a 4';
        return;
    }
    passwordDisplay.textContent = generatePassword(length);
});