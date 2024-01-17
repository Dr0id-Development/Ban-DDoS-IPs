const fs = require("node:fs");
const ip = require("ip");

const main = () => {
  const removeDuplicates = (array) => Array.from(new Set(array));

  const processAndWriteIPs = (inputFile, outputFile, isIPv4) => {
    let ips = fs.readFileSync(inputFile).toString().split("\n");

    let uniqueIps = removeDuplicates(ips.filter((IP) => (isIPv4 ? ip.isV4Format(IP) : ip.isV6Format(IP))));

    let sortedIps = uniqueIps.sort((a, b) => a.localeCompare(b));

    fs.writeFileSync(outputFile, sortedIps.join("\n"));
  };

  processAndWriteIPs("IPv4 List.txt", "IPv4 List.txt", true);

  processAndWriteIPs("IPv6 List.txt", "IPv6 List.txt", false);
};

main();