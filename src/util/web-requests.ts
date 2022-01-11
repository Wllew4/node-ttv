import https from 'https'

export {
	Delete,
	Get,
	Patch,
	Post
}

enum Method
{
	DELETE = "DELETE",
	GET = "GET",
	PATCH = "PATCH",
	POST = "POST"
}

function webRequest(hostname: string, path: string, postData: any, headers: any, method: Method): Promise<string>
{
    return new Promise((resolve, reject) =>
	{
        const options =
		{
            method: method,
            hostname,
            path,
            port: 443,
            headers
        };

        const req = https.request(options, (res: any) =>
		{
            res.setEncoding("utf8");
            let returnData = "";

            res.on('data', (chunk: any) =>
			{
                returnData += chunk;
            });

            res.on('end', () =>
			{
                if( res.statusCode < 200 || res.statusCode >= 300)
				{
                    reject(returnData);
                }
                else
				{
                    resolve(returnData);
                }
            });

            res.on('error', (err: any) =>
			{
                reject(err);
            });
        });

        if(postData)
		{
            req.write(postData);
        }

        req.end();
    });
}

function Delete(hostname: string, path: string, headers: any): Promise<string>
{
	return webRequest(hostname, path, null, headers, Method.DELETE)
}

function Get(hostname: string, path: string, headers: any): Promise<string>
{
	return webRequest(hostname, path, null, headers, Method.GET)
}

function Patch(hostname: string, path: string, postData: any, headers: any): Promise<string>
{
	return webRequest(hostname, path, postData, headers, Method.PATCH)
}

function Post(hostname: string, path: string, postData: any, headers: any): Promise<string>
{
	return webRequest(hostname, path, postData, headers, Method.POST)
}