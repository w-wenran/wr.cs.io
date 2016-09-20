/**
 * Created by 58 on 2016/7/5.
 */
define(["./dashboard","./message","../libs/base"],function(dashboard,message,base){

    var appui = {
        rows:[
            {view:"scrollview",scroll:"y",body:{css:"bg",type:"clean",
                view: "multiview",cells:[dashboard.$ui,message.$ui]
            }}
            ,{
                id:"home_tabbar",
                view: "tabbar",
                type: "iconTop",
                multiview: true,
                tabMinWidth: 80,
                options:[
                    { id:"dashboard", icon:"home", value: "首页" },
                    { id:"message", icon:"envelope", value: "联系我们" }
                    //{ id:"company", icon:"building", value: "公司" },
                    //{ id:"my_account", icon:"user", value: "我的" }
                ]
            }
        ]
    };
    
    return {
        $ui:appui,
        $oninit:function (view,scop) {
            base.postReq("/api/v1/page_scan/page",{page:"page"});
        }
    }

});