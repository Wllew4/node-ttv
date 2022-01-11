const https = require("https");

exports.Get = (hostname: string, path: string, headers: any) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            hostname,
            path,
            port: 443,
            headers
        };

        const req = https.request(options, (res: any) => {
            res.setEncoding("utf8");
            let returnData = "";

            res.on('data', (chunk: any) => {
                returnData += chunk;
            });

            res.on('end', () => {
                if( res.statusCode < 200 || res.statusCode >= 300){
                    reject(returnData);
                }
                else {
                    resolve(returnData);
                }
            });

            res.on('error', (err: any) => {
                reject(err);
            });
        });

        req.end();
    });
}