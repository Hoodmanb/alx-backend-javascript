/* eslint-disable */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj = {};
  try {

      let photo = await uploadPhoto();
      let user = await createUser();
      obj = {photo, user};
  } catch (e) {
      obj = {photo: null, user: null};
  }

  return obj;

}