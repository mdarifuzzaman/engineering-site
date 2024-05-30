"use server"

//export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: Request) {
    const routeName = '/home';
    const { pathname } = new URL(req.url)

    console.log("Request pathname", pathname);    
    return fetch(`https://localhost:7278/layoutservice/7036045f-b253-4bb2-93d3-49615d958ed1/page/en-US/?apiKey=f9ba558f-4d9d-48dd-b629-c3cf958cc762&route=${routeName}`, {
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