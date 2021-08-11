import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net/';


export const getExercise = async (id) => {
  return axios
  .get(`http://purposeapi.azurewebsites.net/api/Exercises/${id}`) 


  
  // .then(response =>
  //   response.data.results.map(exercise => ({
  //     id: `${exercise.id}`,
  //     title: `${exercise.title}`,
  //     description: `${exercise.description}`,
  //     difficulty: `${exercise.difficulty}`,
  //     answer: `${exercise.answer}`,
  //     points: `${exercise.points}`,
  //     languageId: `${exercise.languageId}`,
  //     language: `${exercise.language}`,
  //   }))
  // )

}

export const getUserByEmail = async (email) => {
  return axios.get(`http://purposeapi.azurewebsites.net/api/Client/GetUsuarioByEmail/?email=${email}`) 
 


}

// id, title, description, difficulty, answer, points, languageId, language

export const login = async (email, passwordHash) => {
  return await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {email, passwordHash}, {
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

