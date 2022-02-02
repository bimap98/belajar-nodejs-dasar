import dns from "dns/promises";

// const address = await dns.lookup("www.programmerzamannow.com");
//
// console.info(address.address);
// console.info(address.family);

function callback(error, ip){
    console.info(ip)
};

dns.lookup("www.programmerzamannow.com", callback);

