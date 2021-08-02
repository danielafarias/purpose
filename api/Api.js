export const API = {

    baseUrl: 'http://purposeapi.azurewebsites.net',  //URL base do banco de dados

    registerUrl: () => API.baseUrl + '/api/v1/Auth/Register',   //URL para registro dados
    getUrl: () => API.baseUrl + '/api/Client',                  //URL para visualizar dados
    updateUrl: () => API.baseUrl + '/api/Client/UpdateUsuario', //URL para atualizar dados

    //Função utilizada para registrar os dados
    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: new Headers({ 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },

    //Função utilizada para visualizar os dados
    buildAPIGetRequest: url => {
        return fetch(url, {
            method: "GET",
        })
    },

    //Função utilizada para atualizar os dados
    buildAPIPutRequest: (url, body) => {
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },
    
}