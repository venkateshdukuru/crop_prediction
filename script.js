document.getElementById("cropForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve input values
    const field1 = parseFloat(document.getElementById("field1").value);
    const field2 = parseFloat(document.getElementById("field2").value);
    const field3 = parseFloat(document.getElementById("field3").value);
    const field4 = parseFloat(document.getElementById("field4").value);
    const field5 = parseFloat(document.getElementById("field5").value);
    const field6 = parseFloat(document.getElementById("field6").value);
    const field7 = parseFloat(document.getElementById("field7").value);
    const field8 = parseFloat(document.getElementById("field8").value);

    // Perform prediction (a simple example)
    let predictedCrop = "Wheat";
    // You should implement a real prediction logic here based on the input parameters.

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Predicted Crop: ${predictedCrop}`;
    resultElement.style.display = "block";
});
