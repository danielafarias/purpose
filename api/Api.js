export const Api = {
    baseUrl: 'https://purposeapi.azurewebsites.net/',

    registerUrl: () => Api.baseUrl + '/api/v1/Auth/Register',

    buildApiPostRequest: url => {
        return fetch(url, {
            method: 'POST',
            headers: new Headers({ 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },
}