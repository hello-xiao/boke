$(function () {
    // 内容的输入
    $("body").delegate(".comment","propertychange input", function () {
        // 判断是否输入了内容
        if($(this).val().length > 0){
            $(".send").prop("disabled", false);
        }else{
            $(".send").prop("disabled", true);
        }
    });
    // 发布按钮的点击
    $(".send").click(function () {
        var $text = $(".comment").val();
        var $liuyan = createEle($text);
        $(".messageList").prepend($liuyan);
    });
    // 删除点击
    $("body").delegate(".infoDel", "click", function () {
        $(this).parents(".info").remove();
    });

    // 创建节点方法
    function createEle(text) {
        var $liuyan = $("<div class=\"info\">\n" +
            "            <p class=\"infoText\">"+text+"</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "                <span class=\"infoTime\">"+formartDate()+"</span>\n" +
            "                <span class=\"infoHandle\">\n" +
            "                    <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
            "                </span>\n" +
            "            </p>\n" +
            "        </div>");
        return $liuyan;
    }

    // 生成时间方法
    function formartDate() {
        var date = new Date();
        // 2019-12-28 21:30:23
        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join("");

    }
});