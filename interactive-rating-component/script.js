const ratPage = document.getElementById("rating");
const tyPage = document.getElementById("thankyou");
const resultDiv = document.getElementById("result");

function changePage() {
    ratPage.classList.add("ativo");
    tyPage.classList.add("ativo");
    const radioInputs = document.querySelectorAll("#select input[type=radio]");
    let selectedOption;
    radioInputs.forEach(input => {
        if (input.checked) {
            selectedOption = input.nextElementSibling.textContent;
        }
    });
    if (selectedOption) {
        resultDiv.textContent = `You selected ${selectedOption} out of 5`;
    } else {
        resultDiv.textContent = "Please select an option";
    }
}