const kommenRadio = document.querySelector('input[value="Ich komme"]');
const nichtKommenRadio = document.querySelector('input[value="Ich komme nicht"]');
const guestCount = document.getElementById("guestCount");
const scrollHint = document.getElementById("scrollHint");
const personenInput = document.querySelector('input[name="personen"]');

kommenRadio.addEventListener("change", () => {
  guestCount.style.display = "block";
});

nichtKommenRadio.addEventListener("change", () => {
  guestCount.style.display = "none";
});

personenInput.addEventListener("input", () => {
  personenInput.value = personenInput.value.replace(/[^1-9]/g, "");
});

window.addEventListener("scroll", () => {
  const progress = Math.min(window.scrollY / 200, 1);
  scrollHint.style.opacity = 1 - progress;
});
