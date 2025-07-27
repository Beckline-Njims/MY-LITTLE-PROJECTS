const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progress = document.querySelectorAll(".step");
let currentStep = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        progress[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
        progress[currentStep].classList.add("active");
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        progress[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
        progress[currentStep].classList.add("active");
    });
});

document.getElementById("multiStepForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
