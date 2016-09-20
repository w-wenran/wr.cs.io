/**
 * Created by 58 on 2016/7/5.
 */
define([],function(){

    var img = function(obj){
        return '<img src="'+obj.src+'" class="content" ondragstart="return false"/><div class="title">'+obj.title+'</div>'
    };

    var header = {
        id:"banner_header",
        view:"carousel",
        height:160,
        cols:[
            { css: "image", template:img, data:{src:"imgs/2.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/1.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/3.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/4.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c1.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c2.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c3.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c4.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c5.jpg", title: ""} },
            { css: "image", template:img, data:{src:"imgs/c6.jpg", title: ""} }

        ],
        navigation:{
            type: "side",
            buttons:true,
            items:true
        }
    };

    var msg_template = function(obj){
            var html = '<div class="u-tab-bar">';
            html+='<div class="u-tag">&nbsp;</div>';
            html+=obj.name+"</div>";
            html+="<p>"+obj.desc+"</p>"
            return html;
        };

    var layout = {
            id:"dashboard",
            margin:15,
            type:"clean",
            rows:[
                header,
                { borderless:true,
                    autoheight:true,
                    template: msg_template,
                    data: {name: "陶雕绘DIY手工坊",desc:"&nbsp;&nbsp;&nbsp;&nbsp;昆明陶雕绘DIY手工坊是一家专门从事各类手工制作及培训的专业专业机构，拥有完善的陶艺设施与工具，专业的师资团队。能够实现手工陶艺作品的手工制作及拉坯造型，釉彩及烧制等全部工艺流程。特别推出“陶艺DIY、软陶DIY、剪纸DIY、雕塑头像DIY,.软陶定制、石膏彩绘及陶瓷彩绘等特色产品的DIY项目”。专业陶艺师现场教授指导，同时开办陶艺培训班，软陶培训班，雕塑培训班，美术培训，家庭陶艺饰品，软陶情侣公仔，软陶饰品挂件等。"}
                },
                { borderless:true,
                    autoheight:true,
                    template: msg_template,
                    data: {name: "陶雕绘手工坊课程",desc:"" +
                    "★ 报名期间小朋友可以免费体验一次DIY手工制作,请提前电话预约<br/>" +
                    "★ 凡是报名成功的小朋友学完后我中心免费为其制作泥塑肖像一尊<br/>" +
                    "★ 凡是报名两项科目的小朋友学完后 我中心免费为其制作泥塑肖像3尊（小朋友及其爸爸妈妈）<br/>" +
                    "★ 凡介绍3位小朋友到我中心成功报名手工课的小朋友将获得软陶全身塑像一尊。永久留住灿烂时光<br/>" +
                    "★ 凡同时报名陶艺和软陶课程的小朋友，可以免费学绘画8学时<br/>" +
                    "<span style='color:red;'>★ 备注：以上优惠只针对办卡，单次不享受以上特权</span>"}
                },
                { borderless:true,
                    autoheight:true,
                    template: msg_template,
                    data: {name: "上课时间",desc:"周一至周五下午1点--8点<br/>周六周日上午9点到下午10点"}
                },
                { borderless:true,
                    autoheight:true,
                    template: msg_template,
                    data: {name: "联系方式",desc:"联系电话：15887049205 王老师<br/>" +
                    "地址：昆明市五华区茭菱路经典双城A区7栋602(正大家乐福，高新一小，西山一中，丰宁小区)"}
                }
            ]
    };

    setInterval(function(){
        var index = $$("banner_header").getActiveIndex();
        if(index==header.cols.length-1){
            $$("banner_header").setActiveIndex(0);
        }else{
            $$("banner_header").showNext();
        }
    },3000);



    return {
        $ui:layout,
        $oninit:function (view,scop) {
            $$("home_tabbar").setValue("dashboard");
        }
    }
});