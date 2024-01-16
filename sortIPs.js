const fs = require("node:fs");
const ip = require("ip");

const main = () => {
  let ips = fs.readFileSync("IPv4 List.txt").toString().split("\n");
  let sortedIps = ips.filter((IP) => ip.isV4Format(IP)).sort((a, b) => a.localeCompare(b));
  fs.writeFileSync("IPv4 List.txt", sortedIps.join("\n"));
  ips = fs.readFileSync("IPv6 List.txt").toString().split("\n");
  sortedIps = ips.filter((IP) => ip.isV6Format(IP)).sort((a, b) => a.localeCompare(b));
  fs.writeFileSync("IPv6 List.txt", sortedIps.join("\n"));
};

main();
