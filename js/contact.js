const form = document.getElementById("complaints-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = event.target.emailInput.value;
  const subjectInput = event.target.subjectInput.value;
  const contentInput = event.target.contentInput.value;

  localStorage.setItem("email", emailInput);
  localStorage.setItem("subject", subjectInput);
  localStorage.setItem("content", contentInput);

  form.reset();
});
