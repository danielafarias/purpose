import axios from 'axios';

const baseUrl = 'http://purposeapi.azurewebsites.net/';

// export const login = async () => {
//     axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {email, passwordHash}, {
//     auth: {
//         email,
//         passwordHash
//       } 
//     })
//     // .then((response) => {
//     //   if (response.data.accessToken) {
//     //     localStorage.setItem('user', JSON.stringify(response.data));
//     //   }
//     //   return response.data;
//     // });
//   }

  export const login = async(email, passwordHash) => {
    return axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {
      email,
      passwordHash
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

