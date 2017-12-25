  axios.get('/UserComments/', {
        params: {

        }
    })
        .then(function (response) {
            console.log(response.data.count)
            var r_t = document.getElementById('reviews_total');
            r_t.innerHTML = "<span class=\"icon icon-man\"></span>     " +response.data.count +" reviews"
            console.log(response.data.results)
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });