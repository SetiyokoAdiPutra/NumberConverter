document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("binary-inp");
    const resultInput = document.getElementById("result");
    const conversionFromSelect = document.getElementById("conversion-from");
    const conversionToSelect = document.getElementById("conversion-to");
    const convertButton = document.getElementById("convert-button");
    const errorMsg = document.getElementById("error-msg");
  
    convertButton.addEventListener("click", function () {
      const inputValue = inputField.value;
      const conversionFrom = conversionFromSelect.value;
      const conversionTo = conversionToSelect.value;
  
      // Fungsi regex untuk memeriksa apakah input adalah bilangan valid
      const decimalRegex = /^[0-9]+$/;
      const octalRegex = /^[0-7]+$/;
      const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
      const binaryRegex = /^[01]+$/;
  
      let decimalValue;
  
      switch (conversionFrom) {
        case "decimal":
          if (decimalRegex.test(inputValue)) {
            decimalValue = parseInt(inputValue, 10);
          } else {
            displayErrorMessage("Masukkan bilangan desimal yang valid.");
            return;
          }
          break;
  
        case "octal":
          if (octalRegex.test(inputValue)) {
            decimalValue = parseInt(inputValue, 8);
          } else {
            displayErrorMessage("Masukkan bilangan oktal yang valid.");
            return;
          }
          break;
  
        case "hexadecimal":
          if (hexadecimalRegex.test(inputValue)) {
            decimalValue = parseInt(inputValue, 16);
          } else {
            displayErrorMessage("Masukkan bilangan heksadesimal yang valid.");
            return;
          }
          break;
  
        case "binary":
          if (binaryRegex.test(inputValue)) {
            decimalValue = parseInt(inputValue, 2);
          } else {
            displayErrorMessage("Masukkan bilangan biner yang valid.");
            return;
          }
          break;
  
        default:
          displayErrorMessage("Pilih jenis konversi yang sesuai.");
          return;
      }
  
      errorMsg.textContent = "";
  
      switch (conversionTo) {
        case "decimal":
          resultInput.value = decimalValue;
          break;
  
        case "octal":
          resultInput.value = decimalValue.toString(8);
          break;
  
        case "hexadecimal":
          resultInput.value = decimalValue.toString(16).toUpperCase();
          break;
  
        case "binary":
          resultInput.value = decimalValue.toString(2);
          break;
  
        default:
          displayErrorMessage("Pilih jenis konversi yang sesuai.");
          return;
      }
    });
  
    function displayErrorMessage(message) {
      errorMsg.textContent = message;
      resultInput.value = "";
    }
  });
  