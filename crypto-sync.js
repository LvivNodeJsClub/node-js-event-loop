const crypto = require("crypto");

const NUM_REQUESTS = 30;

for (let i = 0; i < NUM_REQUESTS; i++) {
    console.time(`round ${i + 1}`)
    crypto.pbkdf2Sync('secret', 'salt', 1000, 512, 'sha512')
    console.timeEnd(`round ${i + 1}`)
}