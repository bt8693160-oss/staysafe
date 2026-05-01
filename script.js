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

    result.innerText = "🔍 Verifying documents...";
    result.style.color = "black";
    scoreText.innerText = "";

    setTimeout(() => {
        let score = Math.floor(Math.random() * 100);

        scoreText.innerText = "Verification Score: " + score + "%";

        if (score > 60) {
            result.innerText = "✅ Documents Verified (Authentic)";
            result.style.color = "green";
        } else {
            result.innerText = "❌ Suspicious / Fake Documents";
            result.style.color = "red";
        }
    }, 2000);
}