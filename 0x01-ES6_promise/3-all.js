import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadPhoto, createUser] = response;
      console.log(uploadPhoto.body, createUser.firstName, createUser.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
