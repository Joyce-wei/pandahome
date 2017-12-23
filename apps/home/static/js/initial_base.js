//initial base.html
    var u1 = document.getElementById('list_user_menu_category');
    var u2 = document.getElementById('mobile_collapse_category');
    var jwt=localStorage.getItem('jwttoken');
    if ( jwt != null) {
        console.log("检测到jwt");
        axios.defaults.headers.common['Authorization'] = "JWT "+jwt;
        axios.get('/users/123')
        .then(function (response) {
            console.log("登录成功，loading user successfully");
            //set status of top menu
            var a1 = document.getElementById('user_links_01');
            var a2 = document.getElementById('user_links_02');
            a1.setAttribute('href', "../user/account") ;
            a1.innerHTML = response.data.mobile ;
            a2.setAttribute('href',"../user/logout");
            a2.setAttribute('onclick',"user_logout()");
            a2.innerHTML = "登出";

            //set status of user_menu title
            var a3 = document.getElementById('list_user_menu_title');
            a3.setAttribute('href',"../user/account");
            a3.innerHTML = "<h4>"+response.data.mobile+"</h4>";

            //create user menu category
            var l1 = document.createElement('li');//登出
            var a_c_1 = document.createElement('a');
            a_c_1.setAttribute('href',"../user/logout");
            a_c_1.setAttribute('onclick',"user_logout()");
            a_c_1.innerHTML = "登出";
            l1.appendChild(a_c_1);
            u1.appendChild(l1);

            //set status of mobile_collapse_title
            var a4 = document.getElementById('mobile_collapse_title');
            a4.setAttribute('href',"../user/account");
            a4.innerHTML = response.data.mobile;

            //create mobile collapse category
            var l2 = document.createElement('li');//登出
            var a_c_2 = document.createElement('a');
            a_c_2.setAttribute('href',"../user/logout");
            a_c_2.setAttribute('onclick',"user_logout()");
            a_c_2.innerHTML = "登出";
            l2.appendChild(a_c_2);
            u2.appendChild(l2);
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                localStorage.removeItem('jwttoken');
                console.log("认证失败，重新登录");
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
    else {
        console.log("未登录");

        //set status of user menu
        var l1 = document.createElement('li');//登陆
        var a_c_1 = document.createElement('a');
        a_c_1.setAttribute('href',"../user/logination");
        a_c_1.innerHTML = "登陆";
        l1.appendChild(a_c_1);
        var l2 = document.createElement('li');//登陆
        var a_c_2 = document.createElement('a');
        a_c_2.setAttribute('href',"../user/registration");
        a_c_2.innerHTML = "注册";
        l2.appendChild(a_c_2);
        u1.appendChild(l1);
        u1.appendChild(l2);

        //create mobile collapse category
        var l3 = document.createElement('li');//登陆
        var a_c_3 = document.createElement('a');
        a_c_3.setAttribute('href',"../user/logination");
        a_c_3.innerHTML = "登陆";
        l3.appendChild(a_c_3);
        var l4 = document.createElement('li');//登陆
        var a_c_4 = document.createElement('a');
        a_c_4.setAttribute('href',"../user/registration");
        a_c_4.innerHTML = "注册";
        l4.appendChild(a_c_4);
        u2.appendChild(l3);
        u2.appendChild(l4);
    }

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

