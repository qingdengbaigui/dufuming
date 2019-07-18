window.onload=function() {
    clickFoot();
    contentXq();
    divCut();
    fanghui();
    changAn();
}
 function clickFoot() {
     var con =document.querySelector(".wx-foot");
     var Lis = con.getElementsByTagName('li');
     for(var i = 0;i<Lis.length;i++){
         Lis[i].index = i;
         Lis[i].addEventListener("tap",function () {
             console.log(this.index);
             method(this.index);
         })

     }
 }
 function method(i) {
     $(".wx-nav").removeClass("action").eq(i) .addClass("action");
     $(".wx-content").hide().eq(i).show();
     if(i==1){
         $(".wx-top").show();
         $(".wx-name").replaceWith("<span class=\"wx-name \">通讯录</span>");
     }else if(i==0){
         $(".wx-top").show();
         $(".wx-name").replaceWith("<span class=\"wx-name \">微信(99)</span>");
     }else if(i==2){
         $(".wx-top").show();
         $(".wx-name").replaceWith("<span class=\"wx-name \">发现</span>");
     }else if(i==3){

         $(".wx-top").hide();
     }
 }
 function contentXq() {
     var con =document.querySelector(".wx-content");
     //console.log(con);
     var Uls = con.getElementsByClassName('wx-con-xq');

     for(var i = 0;i<Uls.length;i++){
         Uls[i].index = i;
         Uls[i].addEventListener("tap",function () {

             window.location.href = "./chat.html";
         })
     }
 }
 function divCut (){
     var con =document.querySelector(".wx-us");
     var Wxcon = con.getElementsByClassName('wx-content');
     var startX,startY,moveX,moveY,disY,disX,endX,endY;
     for(var i = 0;i<Wxcon.length;i++){
         Wxcon[i].index = i;
         //开始触摸
         Wxcon[i].addEventListener("touchstart",function (e) {
          /* console.log(this.index);*/
             console.log(e.changedTouches);
             //记录手指的开始坐标
             var touches =e.changedTouches[0];

             startX=touches.clientX;
             startY=touches.clientY;
             /*console.log(startX+":"+startY);*/

         });
         //触摸滑动
         Wxcon[i].addEventListener("touchmove",function (e) {
             var touches =e.changedTouches[0];
             //记录手指的滑动坐标
             moveX=touches.clientX;
            moveY=touches.clientY;
          /*   console.log(moveX+":"+moveY);*/
            //计算上一次坐标的差异
             disX =moveX-startX;
             disY =moveY-startY;
            /* console.log(disY);*/
           /*  con.style.transform="translateY(100px)";*/
       /*      if(disX >30 ){
                 i=this.index;
                 i--;
                 if(i<0){
                     return;
                 }else {
                     method(i);
                 }
             }else if(disX< -30 ) {
                 i=this.index;
                 i++;
                 if(i>=Wxcon.length){
                     return;
                 }else {
                     method(i);
                 }
             }*/
       if (Math.abs(disX) > 30){
           i=this.index;
           if(disX>0){
               i--;
           }else {
               i++;
           }
           if(i<0 ){
               return;
           }else if(i>=Wxcon.length){
               return;
           }
           method(i);
       }

             if(this.index==0 ){
                 $(".wx-top").eq(0).css(' height',disY+"px");
                /* if(disY>50){ $(".wx-content").css(' padding-top',disY+"px");}*/
                 $(".wx-content").css(' padding-top',disY+"px");
             }
         });
         //结束触摸
         Wxcon[i].addEventListener("touchend",function (e) {
             //记录手指结束的坐标
            console.log(disY);
            if(disY<0){
                return;
            }
            if(Math.abs(disY)>150){

                if(this.index!=0){
                    return;
                }
                $(".wx-content").css(' padding-top',"0px");

                $(".wx-top").css({
                    height:'100%',

                });
                $(".wxtop-a").hide();
                $(".foot-en").hide();
                $(".top-con").show();
            }else {
                $(".wx-top").css("height",'50px');
                $(".wx-content").css(' padding-top',"0px");
            }



         });
     }
 }
 function fanghui() {
     var spans =document.querySelector(".fhui");
     spans.addEventListener("tap",function () {
         $(".top-con").hide();
         $(".wxtop-a").show();
         $(".foot-en").show();
         $(".wx-top").css({
             height:'50px',

         });
     });
 }
//长按操作
function changAn (){

    //获取操作的位置
    var wxCon1 =document.querySelector(".wx-con-xq");
    wxCon1.addEventListener("touchstart",function (e){

            if (e.targetToches.length > 1) {
                //判断是否一根手指进行操作
                return;
            }
            /* /!*记录手指开始触摸的时间*!/*/
        startTime = Date.now();
      /*  /!*记录手指当前的坐标*!/*/
        startX=e.targetTouches[0].clientX;
        startY=e.targetTouches[0].clientY;


    });


    wxCon1.addEventListener("touchend",function (e){
        if (e.changedTouches.length > 1) {
            //判断是否一根手指进行操作
            return;
        }
        /*/!*判断时间差异 150ms*!/*/
        console.log(Date.now() - startTime);
        if (Date.now() - startTime > 150) {//
            var boarddiv = "<div style='background:white;width:100%;height:100%;z-index:999;position:absolute;top:0;margin-top:100px;z-index: 9'>加载中...</div>";
            $(window).load(function(){
//window.alert("ok");
                $(document.body).append(boarddiv);
            });
        }
    });



}

function cjdc() {

}

