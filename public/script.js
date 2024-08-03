document.addEventListener("DOMContentLoaded", async () => {
    const fraseElement = document.getElementById('frase');
    const autorElement = document.getElementById('autor');

    try {
        const response = await fetch("/api/phrase");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        fraseElement.textContent = data.phrase;
        autorElement.textContent = `-${data.author}`;
    } catch (error) {
        console.error("Error al obtener la frase del día", error);
        fraseElement.textContent = "Error al obtener la frase del día";
    }
});
