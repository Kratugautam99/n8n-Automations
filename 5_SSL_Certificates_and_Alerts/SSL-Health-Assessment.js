// ssl-health-assessment.js
// Usage: node ssl-health-assessment.js example.com --json

const https = require("https");

function checkSSL(domain) {
  return new Promise((resolve, reject) => {
    const options = {
      host: domain,
      port: 443,
      method: "GET",
    };

    const req = https.request(options, (res) => {
      const cert = res.socket.getPeerCertificate();
      if (!cert || Object.keys(cert).length === 0) {
        return reject(new Error("No certificate found"));
      }

      resolve({
        domain,
        issuer: cert.issuer,
        valid_from: cert.valid_from,
        valid_to: cert.valid_to,
        subject: cert.subject,
      });
    });

    req.on("error", reject);
    req.end();
  });
}

(async () => {
  const domain = process.argv[2];
  const outputJson = process.argv.includes("--json");

  if (!domain) {
    console.error("Usage: node ssl-health-assessment.js <domain> [--json]");
    process.exit(1);
  }

  try {
    const result = await checkSSL(domain);
    if (outputJson) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(`Domain: ${result.domain}`);
      console.log(`Issuer: ${JSON.stringify(result.issuer)}`);
      console.log(`Valid From: ${result.valid_from}`);
      console.log(`Valid To: ${result.valid_to}`);
      console.log(`Subject: ${JSON.stringify(result.subject)}`);
    }
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
})();
