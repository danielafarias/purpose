import axios from 'axios';

axios
  .post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', {
    userName: '',
    email: '',
    passwordHash: '',
  })
  .then(response => {
    console.log(response);
});