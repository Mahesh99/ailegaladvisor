async function generateDocument(type) {
    let userInputs = {};

    if (type === "noc") {
        userInputs = {
            name: document.getElementById("nocName").value,
            receiver: document.getElementById("nocReceiver").value,
            purpose: document.getElementById("nocPurpose").value
        };
    } else if (type === "rental") {
        userInputs = {
            landlord: document.getElementById("landlord").value,
            tenant: document.getElementById("tenant").value,
            property: document.getElementById("property").value,
            rentAmount: document.getElementById("rentAmount").value
        };
    }

    const response = await fetch("https://hook.make.com/YOUR_WEBHOOK_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentType: type, userInputs })
    });

    const data = await response.json();
    downloadDocument(`${type}_document.txt`, data.documentText);
}
