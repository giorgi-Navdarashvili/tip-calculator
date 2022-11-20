export const preventIllegalCharacters = (e) => {
    if (e.code === 'KeyE' || e.code === 'Minus' || e.code === "Period") {
        e.preventDefault();
    }
}