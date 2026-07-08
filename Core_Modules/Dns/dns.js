const dns = require("dns");
console.log("DNS Module Imported");

dns.lookup("google.com",(err,address,family)=>{
   console.log(address);
   console.log("IPv"+family);
});

dns.resolve4("google.com",(err,addresses)=>{
   console.log(addresses);
});

dns.resolve6("google.com",(err,address)=>{
   console.log(address);
});

dns.reverse("8.8.8.8",(err,hostnames)=>{
   console.log(hostnames);
});

dns.resolveMx("gmail.com",(err,data)=>{
   console.log(data);
});

dns.resolveTxt("google.com",(err,data)=>{
   console.log(data);
});

dns.resolveNs("google.com",(err,data)=>{
   console.log(data);
});

