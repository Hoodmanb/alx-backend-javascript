/* eslint-disable */
export default function(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
  .then((value) => value);
}