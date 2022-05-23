
export function allInputFieldsRequired(...input) {
    if (input.includes(undefined) || input.includes(null)) {
        alert('All fields are required!');
        return;
    }
}