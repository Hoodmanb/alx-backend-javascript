/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup (firstName, lastName, fileName) => {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    .then((response) => {
      response.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
      }));
    });
}

export default handleProfileSignup;