    axios.get('/IndexBanners/', {
        params: {
            is_active: true
        }
    })
        .then(function (response) {
            //     <li  li_index="1">
            //         <a href="#">
            //             <img src="{% static '/images/slides/slide-1.jpg' %}" />
            //         </a>
            //     </li>
            console.log("load indexbanner start");
            var u1 = document.getElementById('indexbanner');
            for (i = 0; i < response.data.length; i++) {
                var l1 = document.createElement('li');
                var a1 = document.createElement('a');
                var i1 = document.createElement('img');
                i1.src = response.data[i].image;
                i1.alt = response.data[i].alt;
                a1.appendChild(i1);
                a1.setAttribute('href', response.data[i].href);
                l1.appendChild(a1);
                l1.setAttribute('li_index', response.data[i].index);
                u1.appendChild(l1);
            }
            console.log("load indexbanner successfully");
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

    jQuery.getScript("/static/vendor/amazeui/js/amazeui.min.js")
        .done(function() {
            console.log("load amazeui again ") ;
        })
        .fail(function() {
            console.log("load amazeui failed ") ;
        });
