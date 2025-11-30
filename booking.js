document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successBox = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // verhindert Redirect

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      .then(() => {
        form.reset();
        successBox.style.display = "block";
      })
      .catch(() => {
        alert("Fehler – bitte später nochmal versuchen.");
      });
  });
});
