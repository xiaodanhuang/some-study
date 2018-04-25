function login(){
    var name=$("#name").val();
    var password=$("#password").val();

    console.log(name,password);
    $.ajax({
        url: "api/login",//登录的api

        data:{
            name:name,
            password:password
        },

        type: "POST",

        dataType:'json',

        success:function(res){
            console.log(res);//请求成功的返回值
        },
        error:function(err){

            console.log(err)//请求失败
        }
    });

}
