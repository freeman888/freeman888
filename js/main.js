/*点赞的数量：*/

var good = document.getElementById("good").textContent;
var flag1=0;
document.getElementById("good").innerText = good;
/*点赞的数量：*/
function sendGood(){
    if(flag1==0){
       
        good = parseInt(good) + 1;
        document.getElementById("good").style.color="#ffa000";
        document.getElementById("good").innerText = good;
        flag1=1;
     }
    else{
        good = parseInt(good) - 1;
        document.getElementById("good").style.color="black";
        document.getElementById("good").innerText = good;
        flag1=0;
    }
    document.getElementById("goodSpan").onclick = function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}
function myFunction()
{
    alert("收藏成功！");
}
function followSuccess()
{
    alert("关注成功！");
}





 
