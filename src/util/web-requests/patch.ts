// const https = require("https");

exports.Patch = (hostname: string, path: string, postData: any, headers: any) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: "PATCH",
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

        if(postData){
            req.write(postData);
        }

        req.end();
    });
}