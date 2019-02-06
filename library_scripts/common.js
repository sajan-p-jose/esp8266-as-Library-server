//-------------common--------------------
//---------------------------------------
var start=0 ,end=20,len=0,nos=20; 
var len=0,i=0,where="",where2="",category="",sort="",sort_ord="",NROWS=20,NM=0;
var DISPCOL=0;
//---------------------------------------
 
var datax="", datar="", datat="", dataj="", datac="",datap="", file_xml,file_rtf,file_txt,file_json,file_csv,file_pdf;
var tbl2="";
//--------------------------------------
var JSO="",SQL="";
var tbl2="";
var start=0 ,end=20,len=0,nos=20; 
var len=0,i=0,where="",where2="",category="",sort="",sort_ord="",NROWS=20,NM=0;
//---------------------------------------
var ADDRESS="  ",IPNO="192.168.5.1",USER="   ",PASS=" ",WIFI_PASS=" ",AP="ccoms.info",SECURITY="0",SIGNAL="80",UID="0",ID2="0";
var PROJECT="SERVER";
var  TITLE="  ";
var  SERVER_TYPE="esp12" ;
//---------------------------------------
var datax="", datar="", datat="", dataj="", datac="",datap="", file_xml,file_rtf,file_txt,file_json,file_csv,file_pdf;

//---------------------------------------
var output="" ,heading="",search="",navi="",titles="",rows="",foot="",msg="",error="",cg;
var worker,COUNT=0,RESULT="*" ;
var st=0;
var IMPORT_DATA ="";
var TODAY = today();
var TODAYJ = todayj();
//---------------------------------------
function table_head() {};
function  view_data(cg){} ;
function  start_view_data(){} ;
function  end_view_data(){} ;
function  view_result(){} ;
function display_data(){};
//-----------------------
function display_start(){};
function display_rows(cg){};
function display_end(){};
//-----------------------
//--------------------p1-------------------
function loadScript(url, callback){

    var script = document.createElement("script")
	script.type = "text/javascript";
    script.async ="true";
     
    if (script.readyState){ //IE
	script.onreadystatechange = function(){
	    if (script.readyState == "loaded" ||
		script.readyState == "complete"){
		script.onreadystatechange = null;
		callback();

	    }
	};
    } else { //Others
	script.onload = function(){
	    callback();
	    //console.log(url);
	};
    }

    script.src = url+".js";
    document.getElementsByTagName("head")[0].appendChild(script);
}

//-------------p2--------------
function printf(text)
{
    output += text;
}
//---------------------------------------
function getvlu(id)
{
    var val =document.getElementById(id).value ; return val
						     }
//---------------------------------------
function getdate(id)
{
    var val =document.getElementById(id).value ;
    val= date2julian(val);
    return val
	}
//---------------------------
function sprintf(parm,text)
{
    parm = text;
    return parm;
}

//---------------------------
function sprintf_enc(parm,text)
{
    parm = text;
    return parm;
}

//---------------------------
function atof(value)
{
    var num=  parseFloat(value);
    return num;
}
//---------------------------
function atoi(value)
{
    var num=  parseFloat(value);
    return num;
}
function randno()
{
    return 55 ;
}    

//---------------------------
function refresh(dts)
{
    if(output==null) output="";
    document.getElementById(dts).innerHTML =output  ;  
}

//---------------------------
function clear()
{
    output ="";
}
//---------------------------
function clear_all()
{
    document.getElementById("heading").innerHTML ="" ;
    document.getElementById("search").innerHTML ="" ;
    document.getElementById("navi1").innerHTML ="" ;
    document.getElementById("titles").innerHTML ="" ;
    document.getElementById("rows").innerHTML = "";
    document.getElementById("navi2").innerHTML = "";
    document.getElementById("navi").innerHTML = "";
    document.getElementById("foot").innerHTML = "";  
    document.getElementById("error").innerHTML = "";  
}

//---------------------------
function view_all()
{
    document.getElementById("heading").innerHTML =heading ;
    document.getElementById("search").innerHTML =search ;
    document.getElementById("navi1").innerHTML =navi ;
    document.getElementById("titles").innerHTML =titles ;
    document.getElementById("rows").innerHTML =rows ;
    document.getElementById("navi2").innerHTML =navi ;
    document.getElementById("foot").innerHTML =foot ;
}
//---------------------------

//---------------------------
function msgview(msg)
{
   document.getElementById("error").innerHTML +=msg ;

    
}
//----------------------------


// Connect to the HTML element we 'print' to
function print(text) {
    outputElm.innerHTML = text.replace(/\n/g, '<br>');
}
function error(e) {
    console.log(e);
    errorElm.style.height = '2em';
    errorElm.textContent = e.message;
}

function noerror() {
    errorElm.style.height = '0';
}

// Performance measurement functions
var tictime;
if (!window.performance || !performance.now) {window.performance = {now:Date.now}}

function tic () 
{
    tictime = performance.now();
    document.getElementById("error").innerHTML ="" ;
   
}

function toc(msg)
{
    var dt = performance.now()-tictime;
    setTimeout(function()
	       {  
		   msgview(  "<center><font size=-1> "+msg + " : " + dt.toFixed(1) + "ms</font> </center>");
	       }, 1);

}

//---------------------------------------
function createCookie(name,value,days) {
    if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
//---------------------------------------
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

//-------------------------
function form_title(title)
{
   
    printf ("<h2>");
    printf (title);
    printf ("</h2>");
  
}
//---------------------------------------
function input(name,field,type,value)
{

    if(type==0)
	{
	    printf ("<tr><td></td><td></td><td><input type=hidden value='"+value+"' id="+field+" class=num ></td></tr>");
	}
    else if(type==2)
	{

	    var ch1,ch2 ;
	    if(value==1) { ch1=" checked "; ch2="";}
	    else { ch2=" checked "; ch1="";} 

	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td>Yes <input type=radio  value='1' "+ch1+" name="+field+" > No  <input type=radio  value='0'  "+ch2+" name="+field+" > </td></tr>");
	}
    else if(type==1)
	{
	    printf ("<tr><td></td><td  width=30%>"+name+" (y/n) </td><td><input type=text class=dt value='"+value+"' id="+field+" onFocus='document.form1."+field+".select();' size=1 ></td></tr>");
	}

    else if(type==7)
	{
	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=text class=dt value='"+value+"' id="+field+" onFocus='document.form1."+field+".select();' ></td></tr>");
	}
    else if(type==77)
	{
	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=password class=dt value='"+value+"' id="+field+" onFocus='document.form1."+field+".select();' ></td></tr>");
	}
    else if(type==30)
	{

	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=text class=txt value='"+value+"' id="+field+"    onchange='xx=document.form1."+field+".value; document.form1."+field+".value=xx.toUpperCase() ; '  onFocus='document.form1."+field+".select();'  ></td></tr>");
	}


    else if(type==71)
	{

	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=text class=txt value='"+value+"' id="+field+"    onchange='document.form1."+field+".value= capit(document.form1."+field+".value); '  onFocus='document.form1."+field+".select();'  ></td></tr>");
	}
    else if(type==10)
	{

	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=text  value='"+value+"' id="+field+"     onFocus='document.form1."+field+".select();'  class=datepicker ></td></tr>");
	}
    else if(type==100)
	{

	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><textarea colms=70 rows=10 id="+field+"     onFocus='document.form1."+field+".select();' class=txt >"+value+"</textarea></td></tr>");
	}
    else 
	{
	    printf ("<tr><td></td><td  width=30%>"+name+"</td><td><input type=text class=txt  value='"+value+"' id="+field+"  onFocus='document.form1."+field+".select();'></td></tr>");
	}

}    
//-------------------------------
function capit(str)
{
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
	    return letter.toUpperCase();
	});
  

}

//---------------------------------------
function file_view(file)
{
    tic();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
  
    xhr.onload = function(e) {
	if (this.readyState == 4 && this.status == 200) {        
	    try {
		var file_op = new File([this.responseText], file, {type: "application/pdf;"});
		saveAs(file_op);
  
	    }
	    catch(exception) {
		toc("\nfile error\n");
	    }
      
          
	}
    };
    xhr.send();
}
//---------------------------------------
function date2julian(val){
    var arr;
    if(val.length >1)
	{
	    arr=val.split("/");
	    dts=arr[1]+"/"+arr[0]+"/"+arr[2] ;

	    var d=new Date(dts);

	    var year=d.getFullYear();
	    var month=d.getMonth()+1;
	    var day=d.getDate();
	    var a = Math.floor((14-month)/12);
	    var y = Math.floor(year+4800-a);
	    var m = month+12*a-3;
	    var JDN = day + Math.floor((153*m+2)/5)+(365*y)+Math.floor(y/4)-Math.floor(y/100)+Math.floor(y/400)-32045;
	    return JDN+1;
	}
}
//---------------------------------------
function julian2date(jds){
    JD=atoi(jds); 
    var y = 4716;
    var v = 3;
    var j = 1401;
    var u =  5;
    var m =  2;
    var s =  153;
    var n = 12;
    var w =  2;
    var r =  4;
    var B =  274277;
    var p =  1461;
    var C =  -38;
    var f = JD + j + Math.floor((Math.floor((4 * JD + B) / 146097) * 3) / 4) + C;
    var e = r * f + v;
    var g = Math.floor((e % p) / r);
    var h = u * g + w;
    var D = Math.floor((h % s) / u) + 1;
    var M = ((Math.floor(h / s) + m) % n) + 1;
    var Y = Math.floor(e / p) - y + Math.floor((n + m - M) / n) ;
    var now= new Date(Y,M-1,D);
    var str =now.getUTCDate().toString()+ "/"+ (now.getUTCMonth()+1 ).toString() +
        "/" + (now.getUTCFullYear()).toString() ;

    return str ;
    
}
//---------------------------------------
function todayj ()
{
    var day = new Date();
    var dt=date2julian(day);
    return dt ;
}
//---------------------------------------
function today ()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
	dd='0'+dd;
    } 
    if(mm<10){
	mm='0'+mm;
    } 
    var today = dd+'/'+mm+'/'+yyyy;
    return  today;
}

//---------------------------------------
function passcheck(no)
{
    if(no==2){

	var ccom_pass = readCookie("ccom_pass");
	if(PASS.length>1)
	    {
		if(PASS==ccom_pass) return 0;
		else { beep(); toc("Password failed") ; return 1; }
	    }
    }
    return 0;
}

//--------------
function openFile (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
	IMPORT_DATA = reader.result;
    };
    
    //  var blob = input.file[0].slice(0, 20);   
    //  reader.readAsDataURL(input.files[0]);
    //  reader.readAsDataURL(input.files[0]);
    // reader.readAsArrayBuffer(input.files[0]);
    //reader.readAsText(input.files[0]);

        reader.readAsBinaryString(input.files[0]);
}
//---------------------------

function hide_adv() {
    var x = document.getElementById("adv");
    if (x.style.display === "none") {
	x.style.display = "block";
    } else {
	x.style.display = "none";
    }
}
//---------------------------

function hide_search() {
    var x = document.getElementById("serh");
    if (x.style.display === "none") {
	x.style.display = "block";
    } else {
	x.style.display = "none";
    }
}



//---------------------------------------
function hide_import() {
    var x = document.getElementById("import");
    if (x.style.display === "none") {
	x.style.display = "block";
    } else {
	x.style.display = "none";
    }
}
//---------------------------------------
function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}
//---------------------------------------
function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}
//---------------------------------------
function stringToByteArray(str)
{
    var array =new (window.Uint8Array !== void 0 ? Uint8Array : Array) (str.length);
    var i,il;
    for (i=0,il=str.length; i<il; ++i) {
	array[i] = str.charCodeAt(i) &0xff ;
    }
    return array ;
 
}
//---------------------------------------
//---------------------------------------
function utf8esc(str) {
    for (var result = '', index = 0, charCode; !isNaN(charCode = str.charCodeAt(index++));) {
	result += '\\u' + ('0000' + charCode.toString(10)).slice(-4)+"\\\'3f";
    }
    return result;
}
//---------------------------------------
//---------------------------------------
function runperiodically(func,miliseconds) {

    func();  
    return setInterval(func, miliseconds);
}
//---------------------------------------

//---------------------------------------
function json_cvt(fld)
{
    if(fld.length){ 
	fld=fld.replace(/\\/g,"\\\\");
	fld=fld.replace(/\n/g,"\\n"); 
	fld=fld.replace(/\"/g,"\\\"");

	fld=fld.replace(/\f/g,"\\f");
	fld=fld.replace(/\r/g,"\\r");
	fld=fld.replace(/\t/g,"\\t");
    }
    return fld ;
}
//---------------------------------------
function decodeh(fld)
{
    if(fld.length){ 
	fld=fld.replace(/#39;/g,"'");
    fld=fld.replace(/#34;/g,"\\\"");
	fld=fld.replace(/#92;/g,"\\");
	fld=fld.replace(/#38;/g,"\&");
	fld=fld.replace(/#60;/g,"<");
	fld=fld.replace(/#62;/g,">");
	fld=fld.replace(/\n/g,"<br>");
    }
    return fld
	}
//---------------------------------------
//---------------------------------------
function decodep(fld)
{
    if(fld.length){ 
	fld=fld.replace(/#39;/g,"'");
    fld=fld.replace(/#34;/g,"\\\"");
	fld=fld.replace(/#92;/g,"\\");
	fld=fld.replace(/#38;/g,"\&");
	fld=fld.replace(/#60;/g,"<");
	fld=fld.replace(/#62;/g,">");
	fld=fld.replace(/\n/g,"\\n");
	fld=fld.replace(/\'/g,"\'");
	fld=fld.replace(/\"/g,"\\\"");
    }
    return fld
	}
//---------------------------------------
function load_pdf()
{
    loadScript("pdfmake", function(){});
    loadScript("vfs_fonts", function(){});
}
//---------------------------------------
//---------------------------------------
/*
  var name="";
  var fmly =dbgetname("family","A",cg.family_id);
  if(fmly){name=fmly.C; }
*/

//---------------------------------------
function show_link0(file,sel,title,heading)
{
    printf("<div class=cell><a href='javascript:"+file+"_SEL=\"" + sel + "\";"+file+"_STYP=5;"+file+"_HEADING=\""+heading+"\";"+file+"_search();'>"+title+"</a></div>");

}
//---------------------------------------
//---------------------------------------
function show_link(file,sel,title)
{
    printf("<div class=cell><a href='javascript:"+file+"_SEL=\"" + sel + "\";"+file+"_STYP=5;"+file+"_HEADING=\""+title+"\";"+file+"_search();'>"+title+"</a></div>");

}
//---------------------------------------
function show_link2(file,sel,title)
{
    printf("<div class=cell><a href='javascript:"+file+"_SEL_RULE  =\"" + sel + "\";"+file+"_STYP=5;"+file+"_HEADING=\""+title+"\";"+file+"_search();'>"+title+"</a></div>");

}

//---------------------------------------
function display_phone(phone)
{
    printf("<div class=cell>");

    var ph=phone.split(",");
    for (var ii=0;ii<ph.length ; ii++)
	{
	    if(ph[ii].length)
		printf("<a href='tel:" + ph[ii] + "' >"+ph[ii]+"</a> * ");
	}
    printf("</div>");
}
//---------------------------------------
function display_book(title,author,call_no,year,pubid)
{
    printf("<div class=cell ><b>" + decodeh(title) + "</b><br>");
    printf(" <i>Author: </i><font size=+1 >" + decodeh(author) + "</font><br>");
    printf(" <i>Class No: </i>" + call_no +" <i>Year: </i>"+year+"<br><i>Publisher: </i>"+decodeh(pubid) + "</div>");

}
//---------------------------------------


//---------------------------
