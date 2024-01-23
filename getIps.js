const fs = require("node:fs");

const main = () => {
  const ipsList = fs.readFileSync("new ips.txt").toString().split("\n");

  const newIPs = [];

  for(let ip of ipsList) {
    if(ip.includes(";")){
      ip = ip.split(";")[0]; 
    }

    newIPs.push(ip);
  }

  fs.appendFileSync("IPv4 List.txt", newIPs.join("\n"));
}

main();