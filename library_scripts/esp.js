//-----esp related functions---------- 
//onepi()   --p1
//read_setup()  --p2
//beep() --p3
//write_data(table,data,ext)--  p4
//save_data(file,data,ext,size)-- p5
var esp32='no' ;
var i=0;
//---------------------p1-------------
function onepi() { 
var msg="";
COUNT++;
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    msg=this.responseText;
var dtf=JSON.parse(msg) ;
var vmsg = "<font size =-2> No"+dtf['NO'] +" TIME:"+dtf['TIME']+ " MEM:" +dtf['MEM']+" Disk:"+dtf['DISK']+" USED:"+dtf['USED']+"</font><font size=+2><br>"+dtf['MSG']+"</font>";

    document.getElementById("msg_box").innerHTML = vmsg;

}
}
 xhttp.open("GET","hello.msgr", true);

 xhttp.send();

 document.getElementById("msg_box").innerHTML = msg;

//d3.select("body")
//.select('#msg_box')
//.style("font-size", "1.5em")
//.style("color","rgba(255, 255, 255, 0)")
//.transition()
//.style("color", "red")
//.duration(500)
//.delay(5)
// ;
 } 
//--------------------p2----------------
function read_setup() {
var result="",jsons="";
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
jsons =JSON.parse(this.responseText); 
TITLE=decodeURIComponent(jsons.A);
ADDRESS=decodeURIComponent(jsons.B);
USER=decodeURIComponent(jsons.C);
PASS=decodeURIComponent(jsons.D);
WIFI_PASS=decodeURIComponent(jsons.E);
AP=decodeURIComponent(jsons.F);
IPNO=decodeURIComponent(jsons.G);
SECURITY=decodeURIComponent(jsons.H);
SIGNAL =decodeURIComponent(jsons.I);
ID2=decodeURIComponent(jsons.J);
UID  =decodeURIComponent(jsons.K);
 }
 };
 xhttp.open("GET", "setup.setr", true);
 xhttp.send();
}
//----------------p3------------------
function beep() { 
var msg="Beep ";
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    msg=this.responseText;
    document.getElementById("error").innerHTML =msg ;
}
}
 xhttp.open("GET","hello.beep", true);
 xhttp.send();
 } 

//----------------p3------------------
function  set_theme() { 
var msg="Beep ";
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    msg=this.responseText;
    document.getElementById("error").innerHTML =msg ;
}
}
 xhttp.open("GET","hello.setth", true);
 xhttp.send();
 } 
//----------------p3------------------
function switch_on(on,name,delay) { 
var msg="Beep ";
var fun;
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    msg=this.responseText;
    document.getElementById("error").innerHTML =msg ;
}
}
if(on==0) fun='swoff' ;
else fun='swon' ;

 xhttp.open("GET",name+"io."+fun, true);
 xhttp.send();
 } 
//------------------p3---------------------
function write_data(table,data,ext)
 {
 
  save_data(table,data,ext,400);
  toc("Writing ..."+table+"."+ext);
}
//---------------------------------------

//------------------p4---------------------
function write_data0(table,data,ext)
 {
 var chunkSize = 200,fileSize=0;
 var blob,dtz ;
fileSize=data.length ;
if(esp32=='yes') chunkSize=4096 ;

for(var i =0; i < fileSize; i += chunkSize) 
   {
    blob = data.slice(i, chunkSize + i);
    dtz = utf8_to_b64(blob) ; 
    save_data(table,dtz,ext,400);
   }
toc("Writing ..."+table+"."+ext);
}
//---------------------------------------
//---------------------p5------------------
function save_data0(file,data,ext,size) {
    var result="";
//tic();
var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
 result =this.responseText; 
 }
 };

xhttp.open("GET", file+"."+ext+"?"+data, true );
xhttp.send();
toc("Writing /Saving ..."+file+"."+ext);
}
//---------------------------------------

//---------------------p5------------------
function save_data(table,data,ext,size) {
 var result="";
 var chunkSize = 200,fileSize=0;
 var blob,dtz ;
    fileSize=data.length ;
    if( fileSize  < 1) return ;

if(esp32=='yes') chunkSize=4096 ;

    blob = data.slice(i, chunkSize + i);

    dtz = utf8_to_b64(blob) ;

 console.log("\nSb:"+i);
      i += chunkSize ;
    var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() 
{
if (this.readyState == 4 && this.status == 200) {
      result =this.responseText; 

     if(i < fileSize)
       { 
  save_data(table,data,ext,200);
       }
 toc("File size: "+fileSize+"  "+ result);
     }
 };

xhttp.open("GET", table+"."+ext+"?"+dtz, true );
xhttp.send();

}
//---------------------------------------

//---------------------p6------------------
function save_data_bin(table,data,ext,size) {
 var result="";
 var chunkSize = 200,fileSize=0;
 var blob,dtz ;
    fileSize=data.length ;
    if( fileSize  < 1) return ;
if(esp32=='yes') chunkSize=4096 ;

    blob = data.slice(i, chunkSize + i);

      dtz=arr2b64(blob) ;
 console.log("\n 1:\n"+i);

    var xhttp = new XMLHttpRequest();
xhttp.open("GET", table+"."+ext+"?"+dtz, true );
xhttp.send();
      i += chunkSize ;
//---------------------------------------


 xhttp.onreadystatechange = function() 
{
if (this.readyState == 4 && this.status == 200) {
      result =this.responseText; 

     if(i <= fileSize)
       { 
 save_data_bin(table,data,ext,200);

       }
 toc("File size: "+fileSize+"  "+ result);
     }
 };
}
//---------------------------------------

//---------------------p7------------------
function save_data_file(table,data,ext,size) {
 var result="";
 var chunkSize = 200,fileSize=0;
 var blob,dtz='' ;

var fileSize = data.length ;

if(esp32=='yes') chunkSize=4096 ;
toc("Writing "+chunkSize+" Bytes Total:"+fileSize);

 console.log("Writing "+chunkSize+" Bytes Total:"+fileSize);

    if(fileSize < 1) return ;

    var foo = function(e)
   {
    var dt=e.target.result;
    dtz= dt.split(',')[1];

    // var gg=b64_to_utf8(dtz);
     console.log("\n nn:",i);
     i += chunkSize ;
   var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() 
{
if (this.readyState == 4 && this.status == 200) {
      result =this.responseText; 


     if(i <= fileSize)
       { 
       save_data_file(table,data,ext,200);

       }


 toc("File size: "+fileSize+"  "+ result);
     }
 };

xhttp.open("GET", table+"."+ext+"?"+dtz, true );
xhttp.send();
    };

    if( i < fileSize ) {
        (function( dat, start )
       {
            var reader = new FileReader();
            var blob = dat.slice(start, chunkSize + start);
            reader.onload = foo;

         reader.readAsDataURL(blob);
        })(data, i);
    }
//----------------------------------

 

}
//---------------------------------------
