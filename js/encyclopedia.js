$(function(){
    $(".baike-top li").click(function(){
        $(this).attr("id","baike-active").siblings().attr("id","")
        $(".xinwen-container").eq($(this).index()).addClass("active").siblings().removeClass("active")
    })
})