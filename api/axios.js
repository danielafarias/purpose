import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net';

export const getExercise = async (id) => {
  let exercises = [];
  await axios.get(baseUrl + `/api/Exercises/`)
   
    
      .then(response => {
        exercises.push(response);
      })
    
  return exercises;
}

export const getUserByEmail = async (email) => {
  return await axios.get(baseUrl + `/api/Client/GetUsuarioByEmail/?email=${email}`) 
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

