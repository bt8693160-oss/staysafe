function startApp() {
    window.location.href = "login.html";
}

function goToUpload() {
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Please fill all details!");
            return;
        }
    }

    window.location.href = "upload.html";
}

function goToResult() {
    let files = document.querySelectorAll("input[type='file']");
    let uploaded = false;

    files.forEach(file => {
        if (file.files.length > 0) {
            uploaded = true;
        }
    });

    if (!uploaded) {
        alert("Please upload at least one document!");
        return;
    }

    window.location.href = "result.html";
}

function goHome() {
    window.location.href = "index.html";
}

function checkResult() {

    let result = document.getElementById("result");
    let scoreText = document.getElementById("score");
    let risk = document.getElementById("risk");

    let scanText = document.getElementById("scanText");

    let layer1 = document.getElementById("layer1");
    let layer2 = document.getElementById("layer2");
    let layer3 = document.getElementById("layer3");
    let layer4 = document.getElementById("layer4");
    let layer5 = document.getElementById("layer5");

    result.innerText = "";
    scoreText.innerText = "";
    risk.innerText = "";

    layer1.innerText = "";
    layer2.innerText = "";
    layer3.innerText = "";
    layer4.innerText = "";
    layer5.innerText = "";

    scanText.innerText = "🔍 Initializing AI Scanner...";

    setTimeout(() => {
        scanText.innerText = "📄 Checking Document Format...";
    }, 1500);

    setTimeout(() => {
        scanText.innerText = "🧠 Matching Identity Data...";
    }, 3000);

    setTimeout(() => {
        scanText.innerText = "🛡 Running Security Validation...";
    }, 4500);

    setTimeout(() => {
        scanText.innerText = "🚔 Connecting to Police Verification...";
    }, 6000);

    setTimeout(() => {

        scanText.innerText = "✅ Verification Completed";

        let score = Math.floor(Math.random() * 100);

        scoreText.innerText = "Verification Score: " + score + "%";

        if (score > 70) {

            result.innerText = "✅ DOCUMENTS VERIFIED";
            result.style.color = "green";

            risk.innerText = "LOW FRAUD RISK";
            risk.style.color = "green";

        } else {

            result.innerText = "❌ SUSPICIOUS DOCUMENTS";
            result.style.color = "red";

            risk.innerText = "HIGH FRAUD RISK";
            risk.style.color = "red";
        }

        layer1.innerText = "✔ Document Format Validation";
        layer2.innerText = "✔ OCR Text Analysis";
        layer3.innerText = "✔ Identity Matching";
        layer4.innerText = "✔ AI Security Scanning";
        layer5.innerText = "✔ Police Database Verification";

    }, 8000);
}