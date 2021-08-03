import axios from 'axios';

export const API2 = {

    baseUrl: 'http://purposeapi.azurewebsites.net',  //URL base do banco de dados

    registerUrl: () => API2.baseUrl + '/api/v1/Auth/Register',   //URL para registro dados
    getUrl: () => API2.baseUrl + '/api/Client',                  //URL para visualizar dados
    updateUrl: () => API2.baseUrl + '/api/Client/UpdateUsuario', //URL para atualizar dados

    buildApiPostRequest: () => {
    return axios
        .post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', {
            userName: '',
            email: '',
            passwordHash: '',
        })
        .then(response => {
            console.log(response);
        }); 
    }
    
}