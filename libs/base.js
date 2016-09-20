define([],function () {

    var postReq = function (url, param) {
        $.ajax({type: "POST", dataType: "json", contentType: "application/json", timeout: 15 * 1000,
            url: url,
            async: true,
            data: JSON.stringify(param),
            success: function (data) {
                console.log("success");
            },
            error: function (xhr, status, error) {
                console.log("error");
            }
        });
    };

    return {
        postReq:postReq
    }
});