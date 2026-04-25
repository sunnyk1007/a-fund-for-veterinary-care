const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const amountButtons = document.querySelectorAll(".amount-button");
const donationAmount = document.querySelector("#donation-amount");
const customAmountField = document.querySelector("#custom-amount-field");
const customAmountInput = document.querySelector("#custom-amount");

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const amount = button.dataset.amount;

    if (amount === "custom") {
      customAmountField.classList.remove("hidden");
      donationAmount.value = customAmountInput.value || "custom";
      customAmountInput.focus();
    } else {
      customAmountField.classList.add("hidden");
      customAmountInput.value = "";
      donationAmount.value = amount;
    }
  });
});

if (customAmountInput && donationAmount) {
  customAmountInput.addEventListener("input", () => {
    donationAmount.value = customAmountInput.value || "custom";
  });
}

const paymentOptions = document.querySelectorAll('input[name="payment_option"]');
const paymentInstructions = document.querySelector("#payment-instructions");

const paymentText = {
  "Electronic transfer": "<strong>Electronic:</strong> After submitting, replace this message with your ACH, Zelle, or electronic transfer instructions. You can also redirect donors to a secure payment page.",
  "Check": "<strong>By check:</strong> After submitting, provide mailing instructions here. Example: Make checks payable to A Fund for Veterinary Care and mail to [Insert mailing address].",
  "Card": "<strong>By card:</strong> For security, do not collect card numbers on this static website. Link donors to Stripe, PayPal, Givebutter, Donorbox, Zeffy, or another secure card processor."
};

paymentOptions.forEach((option) => {
  option.addEventListener("change", () => {
    paymentInstructions.innerHTML = paymentText[option.value] || "Select a payment option to see the next step.";
  });
});
