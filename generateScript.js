const fs = require("node:fs");

const main = () => {
  const ipv4List = fs.readFileSync("IPv4 List.txt").toString().split("\n");
  const ipv6List = fs.readFileSync("IPv6 List.txt").toString().split("\n");
  const prefix = "ufw deny from ";
  const suffix = " to any";
  let script = "";
  for(const ip of ipv4List) {
    script += `${prefix}${ip}${suffix}\n`;
  }
  for(const ip of ipv6List) {
    script += `${prefix}${ip}${suffix}\n`;
  }
  fs.writeFileSync("BanIP.sh", script);
}

main();