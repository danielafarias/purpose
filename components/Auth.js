import axios from 'axios';

export default function AuthenticationProvider() {

    const baseUrl = 'http://purposeapi.azurewebsites.net/';

    const login = async (response) => {
        await axios.post(baseUrl + 'api/v1/Auth/Token', {email, passwordHash}, {
            auth: {
                email: email,
                password: passwordHash
              } 
            })
            
              if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
              }
              return response.data;
           
    }

    const logout = async () => {
        localStorage.removeItem('user');
    }

    const register = async(name, lastName, userName, email, passwordHash) => {
        return axios.post(baseUrl + '/api/v1/Auth/Register', {
          name: name,
          lastname: lastName,
          username: userName,
          birthDate: birthDate,
          email: email,
          password: passwordHash
        });
      }
}