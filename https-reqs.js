const https = require("https");

const NUM_REQUESTS = 30;

for (let i = 0; i < NUM_REQUESTS; i++) {
    console.time(`round ${i + 1}`)
    https.request("https://nebri.us/static/me.jpg", res => {
        console.timeEnd(`round ${i + 1}`)
        res.on("data", () => {});
        res.on("end", () => {});
    }).end();
}