import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net/';

export const getUserByEmail = async (email) => {
  return axios.get(`http://purposeapi.azurewebsites.net/api/Client/GetUsuarioByEmail/?email=${email}`) 
}

export const login = async (email, passwordHash) => {
  return await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {email, passwordHash}, {
    auth: {
        email,
        passwordHash
      } 
    })(response => {
      localStorage.setItem('token', response.data);
  })
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

