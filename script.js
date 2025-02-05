async function generateDocument(type) {
    let userInputs = {
        name: "",
        receiver: "",
        purpose: "",
        landlord: "",
        tenant: "",
        property: "",
        rentAmount: ""
    };
    
    if (type === "noc") {
        userInputs = {
            type: "noc",
            name: document.getElementById("nocName").value,
            receiver: document.getElementById("nocReceiver").value,
            purpose: document.getElementById("nocPurpose").value
        };
    } else if (type === "rental") {
        userInputs = {
            type: "rental",
            landlord: document.getElementById("landlord").value,
            tenant: document.getElementById("tenant").value,
            property: document.getElementById("property").value,
            rentAmount: document.getElementById("rentAmount").value
        };
    }
    const response = await fetch("https://hook.eu2.make.com/e4k36mlugsisxq5arp9vxr9l9tr73jh0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentType: type, userInputs })
    });

    const data = await response.json();
    downloadDocument(`${type}_document.txt`, data.documentText);
}
