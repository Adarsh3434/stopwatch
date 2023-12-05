var isstop=true;
var s=0;
var m=0;
var h=0;

function start(){
    if(isstop==true){
        isstop=false;
        stopwatch();
    }
}
function stopwatch(){
    if(isstop==false){
        s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);
        s++;
        if(s==60){
            s=0;
            m++;
           } 
           if(m==60){
            h++;
           }
           if(s<10){
            s="0"+s;
           }
           if(m<10){
            m="0"+m;
           }
           if(h<10){
            h="0"+h;
           }
        document.getElementById("watch").innerHTML=h+":"+m+":"+s;
        setTimeout("stopwatch()",1000);
      
    }
}
function stop(){
    isstop=true;
    
    
}
function reset(){
    isstop=true;
    s=h=m=0;
    s="0"+s;
    m="0"+m;
    h="0"+h;
    document.getElementById("watch").innerHTML=h+":"+m+":"+s;
}