var prev=document.querySelectorAll('.prev');
var next=document.querySelectorAll('.next');
var prev_1=document.querySelectorAll('.prev_1');
var next_1=document.querySelectorAll('.next_1');


$(document).ready(function(){
      $('.share_container').slick({
      	prevArrow:prev,
      	nextArrow:next,
      });
    });
    
    $(document).ready(function(){
      $('.day').slick({
      	prevArrow:prev_1,
      	nextArrow:next_1,
      });
    });

    function tableCreate(){
    var tbl_1  = document.querySelector('#tbl_1');
    var w = window.innerWidth;
    var n=w/10;
    var h=document.querySelector('.gridimg').offsetHeight;
    var m=h/10;
    for(var i = 0; i < m; i++){
        var tr = tbl_1.insertRow();
        for(var j = 0; j < n; j++){
            if(i == m-1 && j == n){
                break;
            } else {
                var td = tr.insertCell();
                td.style.border = '1px solid black';
		    }
        }
    }
}
     

tableCreate();
   