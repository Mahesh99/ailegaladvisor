function generateDocument(type) {
    let formData = {
    ownerName: "",
    propertyAddress: "",
    businessName: "",
    agreementLocation: "",
    landlord: "",
    landlordAddress: "",
    tenant: "",
    tenantAddress: "",
    leaseProperty: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    carparks: "",
    area: "",
    leaseTerm: "",
    leaseStartDate: "",
    rentAmount: "",
    noticePeriod: "",
    depositAmount: "",
    meterReading: "",
    fixtures: ""
};


    if (type === "noc") {
        formData = {
            type:"noc",
            ownerName: document.getElementById("ownerName").value,
            propertyAddress: document.getElementById("propertyAddress").value,
            businessName: document.getElementById("businessName").value,
            agreementLocation: "",
    landlord: "",
    landlordAddress: "",
    tenant: "",
    tenantAddress: "",
    leaseProperty: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    carparks: "",
    area: "",
    leaseTerm: "",
    leaseStartDate: "",
    rentAmount: "",
    noticePeriod: "",
    depositAmount: "",
    meterReading: "",
    fixtures: ""
        };
    } 
    else if (type === "rental") {
        formData = {
            type:"rental",
            ownerName: "",
    propertyAddress: "",
    businessName: "",
            agreementLocation: document.getElementById("agreementLocation").value,
            landlord: document.getElementById("landlord").value,
            landlordAddress: document.getElementById("landlordAddress").value,
            tenant: document.getElementById("tenant").value,
            tenantAddress: document.getElementById("tenantAddress").value,
            leaseProperty: document.getElementById("leaseProperty").value,
            propertyType: document.getElementById("propertyType").value,
            bedrooms: document.getElementById("bedrooms").value,
            bathrooms: document.getElementById("bathrooms").value,
            carparks: document.getElementById("carparks").value,
            area: document.getElementById("area").value,
            leaseTerm: document.getElementById("leaseTerm").value,
            leaseStartDate: document.getElementById("leaseStartDate").value,
            rentAmount: document.getElementById("rentAmount").value,
            noticePeriod: document.getElementById("noticePeriod").value,
            depositAmount: document.getElementById("depositAmount").value,
            meterReading: document.getElementById("meterReading").value,
            fixtures: document.getElementById("fixtures").value
        };
    }
    fetch("https://hook.eu2.make.com/e4k36mlugsisxq5arp9vxr9l9tr73jh0", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Document generated successfully!");

        // Check if Make.com returns a document download link
        if (data.downloadUrl) {
            let downloadLink = document.getElementById("downloadLink");
            downloadLink.href = data.downloadUrl;
            downloadLink.style.display = "block"; // Show the link
        }
    })
    .catch(error => {
        console.error("Error generating document:", error);
        alert("An error occurred while generating the document.");
    });
}
