const baseURL = process.env.REACT_APP_SITE_DOMAIN || 'http://localhost:3000/api';
const baseHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
}

export async function fetchDataServer(params) {
    const { url, method = "GET" } = params;


    const response = await fetch(`${baseURL}${url}`, {
        headers: {
            ...baseHeaders,
        },
        method
    }).then((res) => {
        return res.json()
    })
    return response
}

export function fetchDataClient(params) {
    const { url, callback } = params;
    fetch(`${baseURL}${url}`, {
        method: method,
        credentials: "include",
        mode: 'cors',
        headers: {
            ...baseHeaders
        }
    })
        .then((res) => res.json())
        .then((data) => {
            callback && callback(data)
        })

}
