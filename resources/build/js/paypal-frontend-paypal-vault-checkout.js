function registerClickListenerForSavedVaultRadioButtons() {
    document.querySelectorAll(".vaulting_paymentsource").forEach(function (paymentsource) {
        paymentsource.onclick = function () {
            if (paymentsource.checked) {
                document.getElementById("paypalVaultCheckoutButton").disabled = false;
            }
        };
    });
}

// clicking the vault checkout button will submit the form for payment
function registerClickListenerForTheVaultCheckoutButton() {
    document.getElementById("paypalVaultCheckoutButton").onclick = function () {
        document.querySelectorAll(".vaulting_paymentsource").forEach(function (paymentsource) {
            if (paymentsource.checked) {
                document.getElementById("payment_oscpaypal").click();

                let input = document.createElement("input");
                input.type = "hidden";
                input.name = "vaultingpaymentsource";
                input.value = paymentsource.dataset.index;
                document.getElementById("payment").appendChild(input);

                document.getElementById("paymentNextStepBottom").click();
            }
        });
    };
}

document.addEventListener("DOMContentLoaded", function() {
    registerClickListenerForSavedVaultRadioButtons();
    registerClickListenerForTheVaultCheckoutButton();
});
