var slideIndex = 0;
showSlides();
//add the global timer variable
var slides,dots,timer;

var sub=0;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

function chineseversion() {
  var x1=document.getElementById('colright');
  x1.style.display = "block";
}

function about2() {
  var x1=document.getElementById('subcolr');
  x1.style.display = "block";
}



function imgc1(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="block";
  x2.style.display="none";
  x3.style.display="none";
  x4.style.display="none";
  x5.style.display="none";
  x6.style.display="none";
}

function imgc2(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="none";
  x2.style.display="block";
  x3.style.display="none";
  x4.style.display="none";
  x5.style.display="none";
  x6.style.display="none";
}

function imgc3(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="none";
  x2.style.display="none";
  x3.style.display="block";
  x4.style.display="none";
  x5.style.display="none";
  x6.style.display="none";
}

function imgc4(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="none";
  x2.style.display="none";
  x3.style.display="none";
  x4.style.display="block";
  x5.style.display="none";
  x6.style.display="none";
}

function imgc5(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="none";
  x2.style.display="none";
  x3.style.display="none";
  x4.style.display="none";
  x5.style.display="block";
  x6.style.display="none";
}


function imgc6(){
  var x1=document.getElementById('m1');
  var x2=document.getElementById('m2');
  var x3=document.getElementById('m3');
  var x4=document.getElementById('m4');
  var x5=document.getElementById('m5');
  var x6=document.getElementById('m6');
  x1.style.display="none";
  x2.style.display="none";
  x3.style.display="none";
  x4.style.display="none";
  x5.style.display="none";
  x6.style.display="block";
}



/*
function myFunction0() {
  var n1 = document.getElementById('fname1').value;
  var x1=document.getElementById('cell');
  if (n1=="suit") {
      x1.style.display = "block";
    } 
    else if(n1=="T-shirt") {
        alert("got you");
    }
    else if (n1=="fuck"){
      alert("cool bro")
    }
    else if(n1=="pajamas"){
      alert("right but... wrong")
    }
    else  {
      alert("nice try");
    }
}

function myFunction() {
    var n1 = document.getElementById('fname').value;
    var x1=document.getElementById('q2');
    if (n1=="7") {
        x1.style.display = "block";
      } 
      else if(n1=="0") {
          alert("got you");
      }
      else if (n1=="fuck"){
        alert("cool bro")
      }
      else if(n1=="1"){
        alert("use your brain")
      }
      else  {
        alert("nice try");
      }
  }

  function myFunction2() {
    var n2 = document.getElementById('fname2').value;
    var x2=document.getElementById('q3');
    if (n2=="tan(x)") {
        x2.style.display = "block";
      } 
      else if(n2=="0") {
          alert("poor you");
      }
      else  {
        alert("nice try");
      }
  }

  function myFunction3() {
    var n3 = document.getElementById('fname3').value;
    var x3=document.getElementById('lock');
    if (n3=="curl") {
        x3.style.display = "block";
      } 
      else if(n3=="divergence") {
          alert("close~");
      }
      else if(n3=="gradient") {
          alert("got you");
      }
      else  {
        alert("nice try");
      }
  }


  function myFunction4() {
    var n4 = document.getElementById('fname4').value;
    var x4=document.getElementById('lock');
    if (n4=="Joanne") {
      alert("In fact I think that your are avoiding the cost of love(2021/11/22)");
        x4.style.display = "block";
      } 
      else if(n3=="Sofia") {
          alert("I may be too childish, you're a nice friend");
      }
      else if(n3=="小書帆") {
          alert("嘿嘿");
      }
      else  {
        alert("have not built it yet, maybe try it later");
      }
  }
  */




  function myFunction1() {
    var n1 = document.getElementById('fname1').value;
    var x1=document.getElementById('q2');
    if (n1=="Y") {
        x1.style.display = "block";
        wha-=1;
        veh+=1;
        tra+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha+=1;
        veh-=1;
        tra-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction2() {
    var n1 = document.getElementById('fname2').value;
    var x1=document.getElementById('q3');
    if (n1=="Y") {
        x1.style.display = "block";
        own+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        own-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction3() {
    var n1 = document.getElementById('fname3').value;
    var x1=document.getElementById('q4');
    if (n1=="Y") {
        x1.style.display = "block";
        fan+=1;
        cro+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        fan-=1;
        cro-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction4() {
    var n1 = document.getElementById('fname4').value;
    var x1=document.getElementById('q5');
    if (n1=="Y") {
        x1.style.display = "block";
        veh-=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        veh+=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction5() {
    var n1 = document.getElementById('fname5').value;
    var x1=document.getElementById('q6');
    if (n1=="Y") {
        x1.style.display = "block";
        cro+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        cro-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction6() {
    var n1 = document.getElementById('fname6').value;
    var x1=document.getElementById('q7');
    if (n1=="Y") {
        x1.style.display = "block";
        wat+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wat-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction7() {
    var n1 = document.getElementById('fname7').value;
    var x1=document.getElementById('q8');
    var r1=document.getElementById('q1');
    var r2=document.getElementById('q2');
    var r3=document.getElementById('q3');
    var r4=document.getElementById('q4');
    var r5=document.getElementById('q5');
    var r6=document.getElementById('q6');
    var r7=document.getElementById('q7');
    r1.style.display="none";
    r2.style.display="none";
    r3.style.display="none";
    r4.style.display="none";
    r5.style.display="none";
    r6.style.display="none";
    r7.style.display="none";
    if (n1=="Y") {
        x1.style.display = "block";
        wha+=1;
        cro+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha-=1;
        cro-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction8() {
    var n1 = document.getElementById('fname8').value;
    var x1=document.getElementById('q9');
    if (n1=="Y") {
        x1.style.display = "block";
        spe-=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        spe+=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction9() {
    var n1 = document.getElementById('fname9').value;
    var x1=document.getElementById('q10');
    if (n1=="Y") {
        x1.style.display = "block";
        wha-=1;
        com-=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha+=1;
        com+=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction10() {
    var n1 = document.getElementById('fname10').value;
    var x1=document.getElementById('q11');
    if (n1=="Y") {
        x1.style.display = "block";
        wha+=1;
        fan-=1;
        tra-=1;
        own+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha-=1;
        fan+=1;
        tra+=1;
        own-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction11() {
    var n1 = document.getElementById('fname11').value;
    var x1=document.getElementById('q12');
    if (n1=="Y") {
        x1.style.display = "block";
        wha+=1;
        veh-=1;
        cro+=1;
        tra+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha-=1;
        veh+=1;
        cro-=1;
        tra-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction12() {
    var n1 = document.getElementById('fname12').value;
    var x1=document.getElementById('q13');
    if (n1=="Y") {
        x1.style.display = "block";
        wha+=1;
        own+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha-=1;
        own-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction13() {
    var n1 = document.getElementById('fname13').value;
    var x1=document.getElementById('q14');
    if (n1=="Y") {
        x1.style.display = "block";
        fan+=1;
        spe+=1;
        com+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        fan-=1;
        spe-=1;
        com-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction14() {
    var n1 = document.getElementById('fname14').value;
    var x1=document.getElementById('q15');

    var r1=document.getElementById('q8');
    var r2=document.getElementById('q9');
    var r3=document.getElementById('q10');
    var r4=document.getElementById('q11');
    var r5=document.getElementById('q12');
    var r6=document.getElementById('q13');
    var r7=document.getElementById('q14');
    r1.style.display="none";
    r2.style.display="none";
    r3.style.display="none";
    r4.style.display="none";
    r5.style.display="none";
    r6.style.display="none";
    r7.style.display="none";

    if (n1=="Y") {
        x1.style.display = "block";
        cro+=1;
        exe+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        cro-=1;
        exe-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction15() {
    var n1 = document.getElementById('fname15').value;
    var x1=document.getElementById('q16');
    if (n1=="Y") {
        x1.style.display = "block";
        wha-=1;
        fan-=1;
        wat-=1;
        com-=1;
        exe-=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wha+=1;
        fan+=1;
        wat+=1;
        com+=1;
        exe+=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction16() {
    var n1 = document.getElementById('fname16').value;
    var x1=document.getElementById('q17');
    if (n1=="Y") {
        x1.style.display = "block";
        wat+=1;
        exe+=1;
        own+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        wat-=1;
        exe-=1;
        own-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction17() {
    var n1 = document.getElementById('fname17').value;
    var x1=document.getElementById('q18');
    if (n1=="Y") {
        x1.style.display = "block";
        fan+=1;
        veh+=1;
        tra+=1;
        spe+=1;
        com+=1;
      } 
      else if(n1=="N") {
        x1.style.display = "block";
        fan-=1;
        veh-=1;
        tra-=1;
        spe-=1;
        com-=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
  }

  function myFunction18() {
    var n1 = document.getElementById('fname18').value;
    var o1 = document.getElementById('out');
    var o2 = document.getElementById('out2');
    var o3 = document.getElementById('out3');
    var o4 = document.getElementById('out4');



    var r1=document.getElementById('q15');
    var r2=document.getElementById('q16');
    var r3=document.getElementById('q17');
    var r4=document.getElementById('q18');
    r1.style.display="none";
    r2.style.display="none";
    r3.style.display="none";
    r4.style.display="none";

    if (n1=="Y") {
        wha+=1;
        fan-=1;
        com-=1;
      } 
      else if(n1=="N") {
        wha-=1;
        fan+=1;
        com+=1;
      }
      else  {
        alert("請輸入Y或N. Please type Y or N");
      }
    if(fan+veh+com+spe>10){
      o1.style.display="block";
    }  
    else if(wha+cro+tra+com+own>=0){
      o2.style.display="block";
    }
    else if(exe+wat>4){
      o4.style.display="block";
    }
    else{
      o3.style.display="block";
    }
  }

  function cafe(){
    var o4 = document.getElementById('cafe');
    o4.style.display="block";

    var o1 = document.getElementById('out');
    var o2 = document.getElementById('out2');
    var o3 = document.getElementById('out3');
    var o9 = document.getElementById('out4');
    var o5 = document.getElementById('sall');
    var o6 = document.getElementById('sall1');
    var o7 = document.getElementById('sall2');
    var o8 = document.getElementById('sall3');
    o1.style.display="none";
    o2.style.display="none";
    o3.style.display="none";
    o9.style.display="none";
    o5.style.display="none";
    o6.style.display="none";
    o7.style.display="none";
    o8.style.display="none";
  }

  function park(){
    var o4 = document.getElementById('park');
    o4.style.display="block";

    var o1 = document.getElementById('out');
    var o2 = document.getElementById('out2');
    var o3 = document.getElementById('out3');
    var o9 = document.getElementById('out4');
    var o5 = document.getElementById('sall');
    var o6 = document.getElementById('sall1');
    var o7 = document.getElementById('sall2');
    var o8 = document.getElementById('sall3');
    o1.style.display="none";
    o2.style.display="none";
    o3.style.display="none";
    o9.style.display="none";
    o5.style.display="none";
    o6.style.display="none";
    o7.style.display="none";
    o8.style.display="none";
  }

  function kripky(){
    var o1=document.getElementById('out4');
    o1.style.display="block";
  }

  function sall(){
    var o1 = document.getElementById('out');
    var o2 = document.getElementById('out2');
    var o3 = document.getElementById('out3');
    var o4 = document.getElementById('out4');
    var o5 = document.getElementById('sall');
    var o6 = document.getElementById('sall1');
    var o7 = document.getElementById('sall2');
    var o8 = document.getElementById('sall3');
    o1.style.display="block";
    o2.style.display="block";
    o3.style.display="block";
    o4.style.display="block";
    o5.style.display="none";
    o6.style.display="none";
    o7.style.display="none";
    o8.style.display="none";
  }