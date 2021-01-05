/**
 * 2020-10-31
 * 乐购商城首页js
 * **/
$(function(){
$("#bannerInner").tyslide({
    boxh:460,//盒子的高度
    w:1000,//盒子的宽度
    h:390,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:20,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});

/*图书电子书小轮播 */
$("#ebooks_banner").tyslide({
    boxh:223,//盒子的高度
    w:332,//盒子的宽度
    h:223,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:3,//控制按钮高度
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#00ff00",//当前控制按钮的颜色 
});

/* 新书列表手风琴效果 */
$('.ebooks .right-box ul > li').mouseenter(function(){
    // 所有兄弟：隐藏详情 显示标题
    $(this).siblings().find('.desc').hide();
    $(this).siblings().find('.ebooks-title').show();

    //当前：隐藏标题 显示详情
    $(this).find('.ebooks-title').hide(); //隐藏标题
    $(this).find('.desc').show(); //显示详情
})

$('#clothes-banner').tyslide({
    boxh:332,//盒子的高度
    w:441,//盒子的宽度
    h:332,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
   
});

$('#sport-banner').tyslide({
    boxh:332,//盒子的高度
    w:441,//盒子的宽度
    h:332,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
   
});
$('#child-banner').tyslide({
    boxh:332,//盒子的高度
    w:441,//盒子的宽度
    h:332,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
   
});

//推广商品切换
$('.promotion .promotion-title ul li').mouseenter(function(){
    //导航激活类的切换
    $(this).addClass('active').siblings().removeClass('active')
    //内容切换
    // 获取对应的索引
    var index = $(this).index();  //0 => left:0, 1 => left:-1170, 3 => left:-2340

    console.log(index)
    console.log('.promotion .promotion-content .inner-box')
    //左右移动
    $('.promotion .promotion-content .inner-box').animate({
        'left': -index *1170
    })

})

/* 二维码滑出效果*/ 
$('.qr-code .ticket').hover(function(){
    //让二维码滑出来
    $('.qr-code div').stop(true).animate({
        left:'-100'
    })
},function(){
    //让二维码收回去
    $('.qr-code div').stop(true).animate({
        left:0
    })
})

/*顶部搜索框交互*/ 
$(document).scroll(function(){
    //获取到顶部的距离
    var topDistance = $('html,body').scrollTop();
    //判断
    if(topDistance > 500){
        //如果滚动距离大于500，就显示
        $('.top-search-box').slideDown()
    } else{
        $('.top-search-box').slideUp()
    }
})


/*楼层跳转效果*/ 
$('.floor li').click(function(){
    //获取索引
    var index = $(this).index();
    //选中每一个板块
    var topOffset = $('.floorBox').eq(index).offset().top;

    //让滚动条滚动到这个位置
    $('html,body').animate({
        scrollTop: topOffset  - 50
    })
})

})