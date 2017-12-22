//initial categorys

    a = getCookie("xmdjtoken");
    c_start = document.cookie.indexOf("xmdjtoken=");
    if (c_start == -1) {
        console.log("未登录");
    }
    else {
        console.log("已登录");
        axios.defaults.headers.common['Authorization'] = a;
    }

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


    axios.get('/activitys/')
        .then(function (response) {
            console.log("load activitys start");
            for (var j = 0; j < response.data.length; j++) {
                var activitycategory = document.getElementById('activitycategory');
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.setAttribute('href', response.data[j].url);
                a.innerHTML = response.data[j].name;
                li.appendChild(a);
                activitycategory.appendChild(li);

            }
            console.log("load activitys successfully");
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


    axios.get('/categorys/')
        .then(function (response) {
            console.log("load categorys start");
            var c1 = document.getElementById('categorys');
            // <li class="megamenu__columns__top-block text-uppercase">
            //   <ul>
            //     <li>
            //       <span class="icon icon-box icon--lg"></span>
            //       <a href="#">GIFTS EXCLUSIVE</a>
            //     </li>
            //     <li>
            //       <span class="icon icon-sales-alt icon--lg"></span>
            //       <a href="#">OFFERS</a>
            //     </li>
            //   </ul>
            // </li>
            //category body head  start
            var li_head = document.createElement('li');
            li_head.setAttribute('class', "megamenu__columns__top-block text-uppercase");
            var ul_head = document.createElement('ul');
            var li_head_sub1 = document.createElement('li');
            var li_head_sub_span1 = document.createElement('span');
            var li_head_sub_a1 = document.createElement('a');
            li_head_sub_span1.setAttribute('class', "icon icon-box icon--lg");
            li_head_sub_a1.setAttribute('href', "#");
            li_head_sub_a1.innerHTML = "GIFTS EXCLUSIVE";
            var li_head_sub2 = document.createElement('li');
            var li_head_sub_span2 = document.createElement('span');
            var li_head_sub_a2 = document.createElement('a');
            li_head_sub_span2.setAttribute('class', "icon icon-sales-alt icon--lg");
            li_head_sub_a2.setAttribute('href', "#");
            li_head_sub_a2.innerHTML = "OFFERS";
            li_head_sub1.appendChild(li_head_sub_span1);
            li_head_sub1.appendChild(li_head_sub_a1);
            li_head_sub2.appendChild(li_head_sub_span2);
            li_head_sub2.appendChild(li_head_sub_a2);
            ul_head.appendChild(li_head_sub1);
            ul_head.appendChild(li_head_sub2);
            li_head.appendChild(ul_head);
            c1.appendChild(li_head);
            //category body head  end


            // category body start
            for (var j = 0; j < response.data.length; j++) {

                var l1 = document.createElement('li');
                var u1 = document.createElement('ul');
                var l1_title = document.createElement('li');
                var a1 = document.createElement('a');
                a1.setAttribute('href', response.data[j].url);
                a1.innerHTML = response.data[j].name;
                l1_title.appendChild(a1);
                if (response.data[j].is_new == true) {
                    var sp1 = document.createElement('span');
                    sp1.setAttribute('class', "badge badge--squared");
                    sp1.innerHTML = "NEW";
                    l1_title.appendChild(sp1);

                }
                if (response.data[j].is_discount == true) {
                    var sp1 = document.createElement('span');
                    sp1.setAttribute('class', "badge badge--squared badge--color-alt");
                    sp1.innerHTML = "-10%";
                    l1_title.appendChild(sp1);

                }
                l1_title.setAttribute('class', "title");
                u1.appendChild(l1_title);
                for (var i = 0; i < response.data[j].sub_cat.length; i++) {
                    var l2_title = document.createElement('li');
                    l2_title.setAttribute('class', "title2");
                    var a2 = document.createElement('a');
                    a2.setAttribute('href', response.data[j].sub_cat[i].url);
                    a2.innerHTML = response.data[j].sub_cat[i].name;
                    l2_title.appendChild(a2);
                    u1.appendChild(l2_title);
                }
                l1.appendChild(u1);
                l1.setAttribute('class', "level-menu level1");
                c1.appendChild(l1);
            }
            // category body end
            // category foot start
            //         <li class="megamenu__columns__bottom-block text-uppercase">
            //           <ul>
            //             <li>
            //               <span class="icon icon-bag icon--lg"></span>
            //               <a href="#">SPECIAL OFFER</a>
            //             </li>
            //             <li>
            //               <span class="icon icon-shop-label icon--lg"></span>
            //               <a href="#">UP TO 50% OFF DISCOUNTS</a>
            //             </li>
            //           </ul>
            //         </li>
            var li_foot = document.createElement('li');
            li_foot.setAttribute('class', "megamenu__columns__bottom-block text-uppercase");
            var ul_foot = document.createElement('ul');
            var li_foot_sub1 = document.createElement('li');
            var li_foot_sub_span1 = document.createElement('span');
            var li_foot_sub_a1 = document.createElement('a');
            li_foot_sub_span1.setAttribute('class', "icon icon-bag icon--lg");
            li_foot_sub_a1.setAttribute('href', "#");
            li_foot_sub_a1.innerHTML = "SPECIAL OFFER";
            var li_foot_sub2 = document.createElement('li');
            var li_foot_sub_span2 = document.createElement('span');
            var li_foot_sub_a2 = document.createElement('a');
            li_foot_sub_span2.setAttribute('class', "icon icon-shop-label icon--lg");
            li_foot_sub_a2.setAttribute('href', "#");
            li_foot_sub_a2.innerHTML = "UP TO 50% OFF DISCOUNTS";
            li_foot_sub1.appendChild(li_foot_sub_span1);
            li_foot_sub1.appendChild(li_foot_sub_a1);
            li_foot_sub2.appendChild(li_foot_sub_span2);
            li_foot_sub2.appendChild(li_foot_sub_a2);
            ul_foot.appendChild(li_foot_sub1);
            ul_foot.appendChild(li_foot_sub2);
            li_foot.appendChild(ul_foot);
            c1.appendChild(li_foot);
            // category foot end

            console.log("load categorys successfully");

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

    axios.get('/CategorySideImages/', {
        params: {
            is_active: true
        }
    })
        .then(function (response) {
            console.log("load sideimage start");
            // side_image start
            //         <li class="megamenu__columns__side-image">
            //           <img src="{% static '/images/img-megamenu.jpg' %}" alt="Megamenu Image">
            //         </li>
            var c1 = document.getElementById('categorys');
            var li_side_image = document.createElement('li');
            var a_img = document.createElement('a');
            var img = document.createElement('img');
            li_side_image.setAttribute('class', "megamenu__columns__side-image");
            img.src = response.data[0].img;
            img.alt = response.data[0].alt;
            a_img.appendChild(img);
            a_img.setAttribute('href', response.data[0].href);
            li_side_image.appendChild(a_img);
            c1.appendChild(li_side_image);


            // side_image end
            console.log("load sideimage successfully");
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

    var div_promotions = document.getElementById('promotions');

jQuery.getScript("/static/vendor/amazeui/js/amazeui.min.js")
 .done(function() {
  console.log("load amazeui again ") ;
 })
 .fail(function() {
    console.log("load amazeui failed ") ;
});
