import axios from 'axios';

export default function AuthenticationProvider() {

    const base_Url = 'http://purposeapi.azurewebsites.net/';

    const login = async () => {
        await axios.post(base_Url + 'api/v1/Auth/Token', {email, passwordHash}, {
            auth: {
                email: email,
                password: passwordHash
              } 
            })
            .then((response) => {
              if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
              }
              return response.data;
            });
    }

    const logout = async () => {
        localStorage.removeItem('user');
    }

    const register = async(name, lastname, userName, email, passwordHash) => {
        return axios.post(base_Url + '/api/v1/Auth/Register', {
          username,
          email,
          password,
        });
      }
}