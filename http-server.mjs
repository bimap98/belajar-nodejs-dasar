import http from "http";

const server = http.createServer((request, respose) => {

    console.info(request.method);
    console.info(request.url);

    if(request.method === "POST"){
        request.addListener("data", (data) => {
            respose.setHeader("Content-Type", "application/json");
            respose.write(data);
            respose.end();
        })
    }else{
        if(request.url === "/bima"){
            respose.write("Hello Bima")
        } else {
            respose.write("Hello HTTP Server")
        }
        respose.end();
    }

});

server.listen(3000);
