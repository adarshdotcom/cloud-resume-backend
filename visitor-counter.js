function visitorCounter() {
    fetch("https://vjbz22cceg.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-counter").innerHTML = body;
    });
}