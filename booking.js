document.getElementById("booking-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;

  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    window.location.href = "thank-you.html";
  } else {
    alert("Fehler – Bitte probiere es später erneut.");
  }
});
