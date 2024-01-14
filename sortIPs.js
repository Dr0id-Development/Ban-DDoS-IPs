const fs = require("node:fs");

const main = () => {
  let ips = fs.readFileSync("IPv4 List.txt").toString().split("\n");
  let sortedIps = ips.sort((a, b) => a.localeCompare(b));
  fs.writeFileSync("IPv4 List.txt", sortedIps.join("\n"));
  ips = fs.readFileSync("IPv6 List.txt").toString().split("\n");
  sortedIps = ips.sort((a, b) => a.localeCompare(b));
  fs.writeFileSync("IPv6 List.txt", sortedIps.join("\n"));
};

main();
