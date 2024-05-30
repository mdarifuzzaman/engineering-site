"use server"

export async function GET(req: Request) {
    const routeName = '/home';
    let url = req.headers.get("req_url");
    url = url + `&route=${routeName}`
    console.log("Request url", url);    
    return fetch(url, {
        next: {revalidate: 100},
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    }).then(res => res.json()).then(data => {
        return Response.json({ data })
    }).catch((error:any) => {
        throw error;
    })
    
    
}