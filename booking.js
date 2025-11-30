document.getElementById("bookingForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Verhindert Formspree-Standardseite

    const form = e.target;
    const data = new FormData(form);

    // An Formspree senden
    await fetch("https://formspree.io/f/mjkqnoja", {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    // Weiterleiten auf deine eigene Seite
    window.location.href = "thank-you.html";
});
