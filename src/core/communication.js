// import Vue from 'vue'
import axios from 'axios'
class comms {

  callHttp(requestType, url, headers, data) {

    let req =   axios.interceptors.request.use(
        conf => {
          return conf;
        },
        error => {
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );

    return new Promise((resolve, reject) => {
      if (requestType === 'get') {
        axios[requestType](url, {headers: headers})
          .then(response => {
            axios.interceptors.request.eject(req);
            resolve(this.onSuccess(response.data));
          })
          .catch(error => {
            axios.interceptors.request.eject(req);
            reject(this.onFail(error));
          })
      } else {
        axios[requestType](url, data, {headers: headers})
          .then(response => {
            axios.interceptors.request.eject(req);
            resolve(this.onSuccess(response.data));
          })
          .catch(error => {
            axios.interceptors.request.eject(req);
            reject(this.onFail(error));
          })
      }

    })
  }

  onSuccess(data) {
    return data;
  }

  onFail(response) {
    return response;
  }

}

export default comms;
