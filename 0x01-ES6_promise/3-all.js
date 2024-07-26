/* eslint-disable */
import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then(([resUploadPhoto, resCreateUser]) => {
        console.log(resUploadPhoto.body, resCreateUser.firstName, resCreateUser.lastName)
    })
    .catch(() => {
        console.error('Signup system offline')
    })
}