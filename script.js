function generateNOC() {
    let name = document.getElementById("nocName").value;
    let receiver = document.getElementById("nocReceiver").value;
    let purpose = document.getElementById("nocPurpose").value;

    let text = `NO OBJECTION CERTIFICATE\n\nThis is to certify that ${name} has no objection to ${receiver} regarding ${purpose}.`;

    downloadDocument("noc_document.txt", text);
}

function generateRental() {
    let landlord = document.getElementById("landlord").value;
    let tenant = document.getElementById("tenant").value;
    let property = document.getElementById("property").value;
    let rentAmount = document.getElementById("rentAmount").value;

    let text = `RENTAL AGREEMENT\n\nThis agreement is made between ${landlord} (Landlord) and ${tenant} (Tenant) for the property: ${property}.\n\nThe agreed rent is ${rentAmount}.`;

    downloadDocument("rental_agreement.txt", text);
}

function downloadDocument(filename, text) {
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
