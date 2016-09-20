/**
 * Created by 58 on 2016/7/5.
 */
define(["libs/core"],function(core){

    webix.ui.fullScreen();
    
    var app = core.create({
        id:"webix-app",
        name:"Webix admin",
        version:"0.10",
        debug:"true",
        start:"/page"
    });

    return app;
});