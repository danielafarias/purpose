import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net';

export const getExerciseById = async (id) => {
  const response = await axios.get(baseUrl + `/api/Exercises/${id}`)
  
    
  return response.data;
}

export const getExercises = async () => {
  const response = await axios.get(baseUrl + `/api/Exercises`)
  
    
  return response.data;
}

export const getUserByEmail = async (email) => {
  const Client = await axios.get(baseUrl + `/api/Client/GetUsuarioByEmail/?email=${email}`)
  localStorage.setItem('username', Client.data.userName)
  return Client.data;
}

export const login = async (email, passwordHash) => {
  return await axios.post(baseUrl + '/api/v1/Auth/Token', {email, passwordHash}, {
    auth: {
        email,
        passwordHash
      } 
    })
    .then((response) => {
     
      localStorage.setItem('user', JSON.stringify(response.data));
     
    });
}

export const logout = async () => {
    await localStorage.removeItem('user');
}

export const register = async(name, lastName, userName, birthDate, email, passwordHash) => {
    return await axios.post(baseUrl + '/api/v1/Auth/Register', {
      name,
      lastName,
      userName,
      birthDate,
      email,
      passwordHash
    });
}

