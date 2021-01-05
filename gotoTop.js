/**
 * 返回顶部功能函数封装
 * 
 * */ 
//当页面加载完毕
$(function(){
    //把函数 挂载在window上暴露出去
    window.gotoTop=function(options){

        var defaults={
            bottom:'100px'
        }

        //参数合并
        var params=$.extend({},defaults,options)
         //准备结构
         var $gotoTopHtml=$(` <div class="backToTop">
                               <img src="${options.imgUrl}" alt="">
                                  </div>`);

       //写样式定位
       $gotoTopHtml.css({
        width: '30px',
        height: '50px',
        backgroundColor: '#ff6700',
        /* 定位 */
        position: 'fixed',
        bottom: params.bottom,
        left: '610px',
        marginLeft: '50%',
        display: 'none',
       });
       // 返回顶部
$(document).scroll(function(){
    //获得顶部的位置
    var topDistance=$('html, body').scrollTop();
    //判断
    if(topDistance>500){
        $('.backToTop').fadeIn();
    }else{
        $('.backToTop').fadeOut();
    }
})

$('body').on('click','.backToTop',function(){
    $('html , body').animate({
        scrollTop :0
    },300)
})
  $('body').append($gotoTopHtml)
    }
})