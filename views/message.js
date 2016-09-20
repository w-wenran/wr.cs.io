/**
 * Created by 58 on 2016/7/13.
 */
define(["../libs/base"],function(base){

    var submit = function(){
        if($$("leave_message_form").validate()){
            var formdata = $$("leave_message_form").getValues();
            console.log(formdata);
        }
    };

    var layout = {
        id:"message",
        rows:[
            {view:"toolbar", elements:[
                {view:"label", label: "留言板"}
            ]},
            {view:"form",id:"leave_message_form", autoheight: false, scroll: true, elements:[
                { view:"text", id:'name', label: '姓名', labelWidth: 100, placeholder:"我们联系您时的称呼",required:true},
                { view:"text",id:"contact_way",label:"联系方式",labelWidth: 100, placeholder:"QQ/微信/邮箱/电话",required:true},
                { view:"textarea",id:"user_message", label:"留言内容",labelWidth: 100, placeholder:"赶快给我们留言吧！！",required:true},
                { view:"button", type:"form", label: '提交', align:"center",click:function(){
                    submit();
                }}
            ]
            }
        ]
    }

    return {
        $ui:layout
    };
});