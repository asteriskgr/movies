class movies {

  constructor() {

  }

  getmovies(parameters) {
    return new Promise((resolve, reject) => { 
      let defSearch =parameters.query ?'search': 'discover'
      let sordBy =parameters.query ?'': '&sort_by=popularity.desc'
      let query = parameters.query ?`&query=${parameters.query}`: ''
      let url = `${defSearch}/movie?api_key=${$config.api_key}${sordBy}&page=${parameters.PageNumber}${query}`;
      $comms.callHttp('get', $config.srv_url + url, {}, false, true)
        .then(data => {
          resolve(this.onSuccess(data));
        })
        .catch(error => {
          reject(this.onFail(error));
        })
    });
  }

  getmovie(parameters) {
    return new Promise((resolve, reject) => {

      let url = `movie/${parameters.id}?api_key=${$config.api_key}` ;
      $comms.callHttp('get', $config.srv_url + url, {}, false, true)
        .then(data => {

          resolve(this.onSuccess(data));
        })
        .catch(error => {
          reject(this.onFail(error));
        })
    });
  }
  onSuccess(data) {
    return data;
  }

  onFail(data) {
    return data;
  }
}

export default movies;
