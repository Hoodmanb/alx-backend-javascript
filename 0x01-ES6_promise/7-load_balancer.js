const loadBalancer = (chinaDownload, USDownload) => {
  return Promise.race([chinaDownload, USDownload]);
  .then((response) => {
    return response;
  })
}
export default loadBalancer;