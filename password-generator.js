const lengthInput = document.getElementById('length');
const generatorBtn = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

const generatePassword = (length) => {
    // El Uint32Array tiene tantas posiciones como caracteres pida el usuario
    const randomValues = new Uint32Array(length);
    // Aqui le decimos que coloque por cada value del array que son 0 por numeros aleatorios.
    crypto.getRandomValues(randomValues);

    let password = '';

    for (let i = 0; i < length; i++) {
        // basado en el lenght, se hace cada iteracion -1 por los indices
        // y tambien usamos el acceso de array [] para tomar el valor de randomValues y con 
        // el restante del % asegurar que en esa oepracion, el resultado exista dentro de charset
        //  evitar undefined si el numero es mas que la cantidad total del charset
        password += charset[randomValues[i] % charset.length];
    }

    return password;

};

generatorBtn.addEventListener('click', () => {
    const length = Number(lengthInput.value);

    if (!Number.isInteger(length) || length < 4) {
        passwordDisplay.textContent = 'Introduce una longitud valida mayor o igual a 4'
        return;
    }
    passwordDisplay.textContent = generatePassword(length)
});