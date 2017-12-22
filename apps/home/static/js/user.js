
function loginformSubmit()
{

    var usr = document.getElementById("username").value;
    if (check_phone(usr) == false) {
        alert("请输入正确的手机号码");
        return false;
    }
    else {
        console.log("start login");
        var pwd = document.getElementById('password').value;
        axios.post('/login/',{
                    username: usr,
                    password:pwd

            })
            .then(function (response) {
            console.log(response.data.token);
            delCookie('xmdjusername');
            delCookie('xmdjtoken');
            console.log("clean cookie success");
            setCookie('xmdjusername',usr , 'd7');
            setCookie('xmdjtoken',response.data.token , 'd7');
            console.log("set cookie success");
            document.getElementById("logination").submit();
            })
            .catch(function (error) {
            if (error.response) {
                console.log(error.response.data.non_field_errors);
                alert(error.response.data.non_field_errors);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
                console.log(error.config);
            });

    }


}

function registerformSubmit(){
    var usr = document.getElementById('username').value;
    var cod = document.getElementById('code').value;
    var pwd = document.getElementById('password').value;
    if (check_phone(usr) == false) {
        alert("请输入正确的手机号码");
        return false;
    }
    if (check_valid_password(pwd) == false) {
        alert("请输入至少大于8位且至少一位数字和一位字母的密码");
        return false;
    }
    axios.post('/users/',{
                    username: usr,
                    code:cod,
                    password:pwd

            })
            .then(function (response) {
            console.log(response.data.token);
            delCookie('xmdjusername');
            delCookie('xmdjtoken');
            console.log("clean cookie success");
            setCookie('xmdjusername',response.data.username , 'd7');
            setCookie('xmdjtoken',response.data.token , 'd7');
            console.log("set cookie success");
            document.getElementById("registration").submit();
            })
            .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                for(var Key in error.response.data){
                    alert( error.response.data[Key])
                }
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
                console.log(error.config);
            });

}


function check_phone(phone_number){
    if(!(/^1[34578]\d{9}$/.test(phone_number))){
        return false;
    }
}

function check_valid_password(pwd){
    var str = pwd;
    if (str == null || str.length < 8 || str.length > 20) {
        return false;
    }
    var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    if (reg.test(str)){
        return true;
    }
    else{
        return false;
    }
}

function user_logout(){
    console.log("delete cookie");
    delCookie('xmdjusername');
    delCookie('xmdjtoken');

}