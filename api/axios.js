import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net/';

export const verification = async (userName) => {
  return axios.get('http://purposeapi.azurewebsites.net/api/Client/GetUsuarioByUserName/' + userName) 
}

export const login = async (email, passwordHash) => {
  return axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {
    email,
    passwordHash
  }) 
  // (response => {
      
  //     localStorage.setItem('userToken', JSON.stringify(response.data));

  //   })
}

export const logout = async () => {
    localStorage.removeItem('user');
}

export const register = async(name, lastName, userName, birthDate, email, passwordHash) => {
    return axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', {
      name,
      lastName,
      userName,
      birthDate,
      email,
      passwordHash
    });
}

