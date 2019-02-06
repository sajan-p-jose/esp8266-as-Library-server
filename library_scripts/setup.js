//Script writer:Sajan P Jose, Address: Puthupparambil, Kanakkary, kerala, E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:09/07/2018
// setup_view() -- sp1
// setup_end_view() -- sp2
// setup_get_data() -- sp3
// setup_new() -- sp4
// setup_insert() -- sp5
// setup_view_result() -- sp6
// setup_edit() -- sp7
// setup_end_edit() -- sp8
// setup_start_edit() -- sp9
// setup_update() -- sp10
// setup_delete() -- sp11
// setup_navi() -- sp12
// setup_pdfview() -- sp13
// setup_xmlview() -- sp14
// setup_rtfview() -- sp16
// setup_txtview() -- sp17
// setup_csvview() -- sp18
// setup_jsonview() -- SO18
// setup_importfile() -- sp20
// setup_footer() -- sp21
// setup_table_head() -- sp22
// setup() -- sp23
// setup_work() -- sp24
// setup_search() -- sp25
// setup_start_rows() -- sp26
// setup_end_rows() -- sp27
// setup_rows() -- sp28
// setup_header() -- sp29


var str=0;
var data="" ,ext="",extn="",DATA="";

var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;

var obj0="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"I\":\"\",\"J\":\"\",\"K\":\"\",\"L\":\"\",\"M\":\"\",\"N\":\"\",\"O\":\"\",\"P\":\"\",\"Q\":\"\",\"R\":\"\"}";



var setupi="";
var setup_keys=["id","title"];
var setup_typ=["int","varchar (300)"];
var setup_j={"id":"A","title":"B"};
var setup_init={"A":"0","B":""};
//-----------------------
var navi="", header="" , setup_table="";
var setup_HEADING="";
var setup_NM1=0,setup_NM=0, setup_NO_OF_ROWS=0,setup_data;
var setup_TXT="",setup_TXT2="", setup_SORT="",setup_CATEGORY2="",setup_ANDOR=0,setup_STYP2=0;
var setup_SEL="",setup_SEL_RULE="", setup_SORT_ORD="",setup_CATEGORY="",setup_STYP=0;
var setup_DATE_FROM="01/01/1000",setup_DATE_TO="01/01/3000", setup_NROWS=20;
var setup_data, setup_arr=[],setup_del_arr=[],setup_obj2;
var setup_obj="{\"A\":\"\",\"B\":\"\"}";
var setup_na ={
    search:"Search"
    , id:"Id" 
    , title:"Title" 
};
var setup_cg ={
    sel:""
    ,dummy:""
    ,sel_rule:""
    ,id:""
    ,date_from:""
    ,date_to:""
    , id:"" 
    , title:"" 
    ,password:""
    ,user:""
    ,ap:""
};

//---------------------------------------
//---------------------------------------

//--FUNC----sp1----------
function setup_index() {
    clear_all();
    clear();
    printf("<style> img.icon {width:3em;} </style>");
    printf("<div class=headbg align='center'>");
    printf ( "<h1>Admin / Setup</h1> </div>");

    printf ( "<div id='book_tile'>");
    printf ( " <table border=0 padding=5 cellpadding=5 cellspacing=5 align=center ><tr>");
    printf ( "");


    printf ( "<td class=til id=t_1 width=30% align=center >");

    printf ( "<a href='javascript:setup_new();' >Setup</a></td>");

    printf ( "<td class=til id=t_2 width=30% align=center >");

    printf ( "<a href='javascript:xml_export();' >Backup (xml)</a></td>");

    printf ( "<td class=til id=t_3 width=30% align=center >");

    printf ( "<a href='javascript:updt_script();' >Program Update </a></td><tr>");

    printf ( "<td class=til id=t_1 width=30% align=center >");

    printf ( "<a href='javascript:savefile2();' >Insert File</a></td>");


    printf ( "<td class=til id=t_5 width=30% align=center >");

    printf ( "<a href='javascript:gz2rom2();' >Save to disk (compressed)</a></td>");

    printf ( "<td class=til id=t_6 width=30% align=center >");

    printf ( "<a href='javascript:data2rom2();' >Save to disk</a></td>");
    printf ( "</tr><tr>");
    printf ( "<td class=til id=t_7 width=30% align=center >");
    printf ( "<a href='javascript:restore();' >Restore backup</a></td>");


    printf ( "<td class=til id=t_8 width=30% align=center >");

    printf ( "<a href='javascript:clear_data2();' >Clear Memory</a></td>");

    printf ( "<td class=til id=t_9 width=30% align=center >");
    printf ( "<a href='javascript:reset_data2();' >Clear disk</a></td>");

   
    printf ( "</tr>");
    printf ( "<tr>");
    printf ( "<td class=til id=t_2 width=30% align=center >");

    printf ( "<a href='javascript:jsonfilein2();' >Json import</a></td>");

    printf ( "<td class=til id=t_3 width=30% align=center >");

    printf ( "<a href='javascript:xmlfile2();' >Xml import</a></td>");


    printf ( "<td class=til id=t_4 width=30% align=center >");

    printf ( "<a href='javascript:csvfile2();' >CSV Import</a></td>");
    printf ( "</tr>");
    printf ( "<tr>");
    printf ( "</tr></table>");
    printf ( "</div>");
    printf ( "<br><center>");
    printf ( "</center>");

    printf ("<table align=center ><tr>");
    printf ("<td class=ccom  id=t_2 > <a href='javascript:switch_on(1,1)'> ON </a> ");

    printf("<td class=ccom   id=t_3 > <a href='javascript:switch_on(0,1)'>OFF</a> ");
   
/*
 printf("<a href='javascript:switch_on(0,1)'>OFF</a> </td>");


    printf("<td class=ccom   id=t_3 > <a href='javascript:switch_on(1,2)'>ON</a> <br>Switch 2<br>");
    printf(" <a href='javascript:switch_on(0,2)'> OFF</a> </td>");

    printf("<td class=ccom   id=t_6> <a href='javascript:switch_on(1,3)'>ON</a> <br>Switch 3 <br>");
    printf(" <a href='javascript:switch_on(0,3)'>OFF</a> </td>");

    printf("<td class=ccom   id=t_5> <a href='javascript:switch_on(1,4)'> ON</a> <br>Switch 4<br>");
    printf("<a href='javascript:switch_on(0,4)'> OFF</a> </td>");

*/
    printf("<td class=ccom   id=t_1 > <a href='javascript:set_theme()'>Set Theme</a> </td>");
    printf("<td class=ccom   id=t_1 > <a href='javascript:beep()'>Beep</a> </td></tr></table> ");


    status_box();
    refresh("rows");

}
//----------------------p50-----------------
function select_page(d1,d2,d3,d4) 
{
    printf ("<form id=\"jsonFile\" name=\"form1\" enctype=\"multipart/form-data\" method=\"post\">");

    if(d1)
	{
	    printf( " <h1>Database / Files </h1>");
	    printf (" <input type='file' onchange='openFile(event)' id='fileinput'  >");
	}


    if(d2)
	{

	    printf ("<br> File: <select  name='saveto'     id=saveto  value=''  style='width:40%%;' >");

	    // onChange='document.form1.tbl.value=document.form1.saveto.options[document.form1.saveto.selectedIndex].value ;'
	    if(d4==1){
		printf ("<option value='0' >All</option>");
		
	    }else {
		printf ("<option value='' >--select--</option>");
	    }

	    for(var ii=0;ii<tables.length;ii++)
		{
		    printf ("<option value="+tables[ii]+" >"+tables[ii]+"</option>");
		}
	    printf ("</select>");
	}


    if(d3)
	{
	    printf (" <br> Type: <select  id='type' name=type >");
	    printf ("<option value='' >--select--</option>");
	    printf ("<option value=json>json ");
	    printf ("<option value=zjo>gziped json ");
	    printf ("<option value=js>js ");
	    printf ("<option value=sql >sql ");
	    printf ("<option value=svg>svg ");
	    printf ("<option value=jpg>jpg ");
	    printf ("<option value=html>html ");
	}
    printf ("</select></form><br>");
    // toc ("File Loaded");

}



//---------------------------------------
function newfile(table,ext)
{
    i=0;
    save_data(table,"   ",ext,100);
    toc("New file "+table+"."+ext);
}
//-------------------------------------
function restore ()
{

    clear_all();
    clear();

   
   
    printf ("<br><br><h2>RESTORE ALL DATA FROM BACKUP </h2>");
    printf ( "<h3><a href='javascript:clear_data2();' >1.Clear memory</a></div><br><br>");
    printf ( "<a href='javascript:xmlfile2();' >2.Backup file import</a></div><br><br>");

    printf ( "<a href='javascript:gz2rom();' >3.Save to disk</a></div><br><br></h3>");



    status_box();
    refresh("rows");


}
//------------------------------------
function reset_all_data()
{
   var sel=document.getElementById("saveto").selectedIndex;
   var table=document.getElementById("saveto").options[sel].value;
   tic();
  
    if(!confirm("Reset "+table)) return ;
    if(table=='0')
	{
	    var ii=0;
	    for (ii=0;ii<tables.length;ii++)
		{reset_data(tables[ii]) ;}
	}
    else 
	reset_data(table) ;
} 



//---------------------------------------


//------------------p21---------------------
function reset_data (table)
{
    var extn,ext ,data="";

    var clr=document.getElementById("clr").checked;

    var msg=" Memory not cleared";
    if(clr==true) msg=" Clear memory";
   
    
    if(table.length >2){

	data="{\"A\":\"\",\"*\":\"\"}" ; 
	ext="newj" ;extn="startj";
	newfile(table,extn);
	i=0;
	save_data(table,data,ext);

	ext="znewj" ;extn="startz";

	newfile(table,extn);

	ext="newj" ;extn="startj";
	newfile(table+"_del",extn);
	i=0;
	save_data(table+"_del","0",ext);

	if(clr==true) 
	    clear_table(table);
	toc(table+" Reseted");
    }
    
}
//-------------------------p88--------------
function savefile2()
{
    clear_all();
    clear();
    select_page(1,0,0,0);
    printf("<br> Admin code:<input id=uid type=text name=uid size=10 ><br><br>");

    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:savefile();' >Insert file</a></div><br>");
    status_box();
    refresh("rows");
}
//---------------------------------------

//---------------------------------------
function jsonfilein2()
{
    clear_all();
    clear();

    select_page(1,1,0,0);
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:jsonfilein();' >Json file import</a></div><br>");

    printf ( "<a href='javascript:gz2rom();' >Save to disk</a></div><br><br>");



    status_box();
    refresh("rows");
}
//---------------------------------------
//---------------------------------------
function csvfile2()
{
    clear_all();
    clear();
    select_page(1,1,0,0);
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:csvfile();' >Csv file import</a></div><br>");

    printf ( "<a href='javascript:gz2rom();' >Save to disk</a></div><br><br>");


    status_box();
    refresh("rows");
}
//---------------------------------------
//---------------------------------------
function gz2rom2()
{
    clear_all();
    clear();
    printf( " <h1>Database / Files </h1>");
    select_page(0,1,0,0);
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:gz2rom();' >Write compressed data</a></div><br>");
    status_box();
    refresh("rows");
}
//---------------------------------------
//---------------------------------------
function data2rom2()
{
    clear_all();
    clear();
    printf( " <h1>Database / Files </h1>");
    select_page(0,1,0,1);

    printf("Row From:<input id=from type=text  name=from  value='0' size=4 > ");
    printf("To:<input id=to type=text  name=to  value='0' size=4  ><br>");
    printf("Save as new <input id=neww type=checkbox  name=neww  value='y' checked  ><br><br>");


    printf ( "<div class=ttl id=t_2  align=center >");
    printf ( "<a href='javascript:data2rom();' >Write data to Disk</a></div><br><br>");

    status_box();
    refresh("rows");

}
//---------------------------------------
//---------------------------------------
function xmlfile2()
{
    clear_all();
    clear();
    select_page(1,1,0,1);
    printf ("<br>Import data to memory (temporarily) ");
    printf ( "<div class=ttl id=t_1  align=center >");

    printf ( "<a href='javascript:xmlfile();' >Xml file import</a></div><br>");

    printf ( "<a href='javascript:data2rom2();' >Save to disk</a></div><br><br>");
    status_box();
    refresh("rows");

}
//---------------------------------------
function clear_data2()
{
    clear_all();
    clear();
    printf( " <h1>Database / Files </h1>");
    printf("<br><br><br>This will clear data from memory (Not from disk/Rom)") ;
    select_page(0,1,0,1);
    printf ( "<br><br><div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:clear_data();' >Clear data</a></div><br>");
    status_box();
    refresh("rows");
}
//---------------------------------------
function reset_data2()
{
    clear_all();
    clear();
    printf( " <h1>Database / Files </h1>");
    select_page(0,1,0,1);
    printf(" Clear Memory:<input id=clr type=checkbox  name=clr  value=1 checked ><br>");
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:reset_all_data();' >Reset data</a></div><br>");
    status_box();
    refresh("rows");
}
//----------------------

function savefile_gz()
{

}

//---------------------------------------
function savefile(save)
{

    tic();
    var input = document.getElementById("fileinput");
    var title = input.files[0].name;
    var name = input.files[0].name;
    var typ=name.split('.')[1] ;
    var table=name.split('.')[0] ;

    if(save) table=save ;
    // typ=document.getElementById("type").value ;  
    if(!confirm("Save "+table+"."+typ)) return ;
   
    if(typ =='json'){ext="newj" ;extn="startj";}
    else if(typ =='zjo'){ext="znewj" ;extn="startz";}
    else if(typ =='js'){ext="newjs" ;extn="startjs";}
    else if(typ =='txt'){ext="newtxt" ;extn="starttxt";}
    else if(typ =='svg'){ext="newsvg" ;extn="startsv";}

    else if(typ =='jpg'){ext="newjpg" ;extn="startjpg";}
    else if(typ =='png'){ext="newpng" ;extn="startpng";}
    else if(typ =='mp3'){ext="newmp3" ;extn="startmp3";}
    else if(typ =='sql'){ext="adds" ;extn="starts";}
    else if(typ =='html'){ext="newhtm" ;extn="startht";}

    else {return;}

    newfile(table,extn);
    //---------------------------------------
    console.log("writing file "+table+" :"+ext+" :"+data);
    i=0;
    data=IMPORT_DATA;
    if(ext=='newj'){
	save_data(table,data,ext,200);
    }
    else
	{
	    var di=stringToByteArray(data);
	    //    var gzip=new Zlib.Gzip(di) ;
	    //    var dataz=gzip.compress();
	    save_data_bin(table,di,ext,200);
	}

    toc("Writing File: "+name+" Size:"+data.length );

    //---------------------------------------
    /*
      var foo = function(e)
      {
      var dt=e.target.result;
      dta= dt.split(',')[1];
      i=0;
      save_data_file(table,dta,ext,1);

      };

    
      var reader = new FileReader();
      reader.onload = foo;

      reader.readAsDataURL(data);
      toc(table+" Saved");
    */

}
//--------------------------------------

//-------------------------p98--------------
function save_photo(name)
{
    clear_all();
    clear();
    select_page(1,0,0,0);
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:saveimage(\""+name+"\");' >Save file</a></div><br>");
    status_box();
    refresh("rows");
}
//---------------------------------------

function saveimage(save)
{
  
    tic();

    var input = document.getElementById("fileinput");

    var title = input.files[0].name;

    var name = input.files[0].name;
    if(save) name=save ;
    var typ=name.split('.')[1] ;
    var table=name.split('.')[0] ;
  
    if(!confirm("Saving "+table+"."+typ ) ) return ;

   
    if(typ =='json'){ext="newj" ;extn="startj";}
    else if(typ =='zjo'){ext="znewj" ;extn="startz";}
    else if(typ =='txt'){ext="newtxt" ;extn="starttxt";}
    else if(typ =='svg'){ext="newsvg" ;extn="startsv";}

    else if(typ =='jpg'){ext="newjpg" ;extn="startjpg";}
    else if(typ =='gif'){ext="newgif" ;extn="startgif";}
    else if(typ =='png'){ext="newpng" ;extn="startpng";}
    else if(typ =='mp3'){ext="newmp3" ;extn="startmp3";}
    else if(typ =='mp4'){ext="newmp4" ;extn="startmp4";}
    else if(typ =='sql'){ext="adds" ;extn="starts";}
    else if(typ =='html'){ext="newhtml" ;extn="starthtml";}
    else if(typ =='pdf'){ext="newpdf" ;extn="startpdf";}

    else {return;}

    newfile(table,extn);
    
    var data = input.files[0];
    //-----------------------------------------
    console.log("writing file "+table+" :"+ext+" :"+data);
    i=0;
    data=IMPORT_DATA;
    toc("Writing File: "+name + "size:"+data.length );
      var di=stringToByteArray(data);
    // var gzip=new Zlib.Gzip(di) ;
    // var dataz=gzip.compress();

    save_data_bin(table,di,ext,200);
 
}

//-------------------------p98--------------
function updt_script(name)
{
    clear_all();
    clear();
    select_page(1,0,0,0);
    printf ( "<div class=ttl id=t_1  align=center >");
    printf ( "<a href='javascript:save_script(\""+name+"\");' >Save file</a></div><br>");
    status_box();
    refresh("rows");
}
//---------------------------------------

function save_script(save)
{
    tic();
    var input = document.getElementById("fileinput");
    var title = input.files[0].name;
    var name = input.files[0].name;
    // if(save) name=save ;
    var typ=name.split('.')[1] ;
    var table=name.split('.')[0] ;
  
    

    if(!confirm("Saving "+table+"."+typ ) ) return ;
    
    if(typ =='js'){ext="newjs" ;extn="startjs";}
    else if(typ =='html'){ext="newhtml" ;extn="start_html";}
    else {return;}
    newfile(table,extn);
    
    var data = input.files[0];
    //-----------------------------------------
    console.log("writing file "+table+" :"+ext+" :"+data);
    i=0;
    data=IMPORT_DATA;
  
    toc("Writing File: "+name + "size:"+data.length );
      var di=stringToByteArray(data);
      var gzip=new Zlib.Gzip(di) ;
      var dataz=gzip.compress();

    save_data_bin(table,dataz,ext,200);
 
}

//---------------------------------------
function save2file(saveto,data,item)
{
    var str=0;  
    var sel=document.getElementById("saveto").selectedIndex;
    var table=document.getElementById("saveto").options[sel].value;
    // table=document.getElementById("tbl").value;
    if(!confirm("Clear "+table)) return ;

    tic();


    var ext=document.getElementById("type").value ;  
    // var  dtz = utf8_to_b64(data) ;  
    i=0;
    save_data(table,data,ext,4000);
   
    toc(table+" File Saved");
}
//---------------------------------------
function data2rom()
{
    var sel=document.getElementById("saveto").selectedIndex;

    var ext="newj";
    var extn="startj";

    tic();



    var table=document.getElementById("saveto").options[sel].value;
    var neww=document.getElementById("neww").checked;
    var nn=" Adding";
    // if(neww==true){  toc(" As New file"); }

    var from =document.getElementById("from").value;

    var to =document.getElementById("to").value;
    var range="All" ;
    if(to >1) range="From "+from+" To "+to ;
    if(!confirm("Write "+table+" "+range+nn)) return ;



    if(table=='0')
	{
	    var ii=0;
	    for (ii=0;ii<tables.length;ii++)
		{data2rom_table(tables[ii],from,to) ;}
	}
    else 
	data2rom_table(table,from,to) ;
}
//---------------------------------------
function data2rom_table(table,from,to)
{
    var str=0;  
    var ext="newj";
    var extn="startj";
   
   
    var neww=document.getElementById("neww").checked;

    i=0;
    if(neww==true)
	{ 
	    toc(" As New "+table+"."+extn);
	    newfile(table,extn); 
	    newfile(table+"_del",extn); 
        save_data(table+"_del","0",ext,400);
	    DATA="{\"A\":\"\",\"*\":\"\"}" ; 
	    select_data(table,from,to);
	}

    else {
	toc(" Adding "+table);
	DATA="";
	select_data(table,from,to);
    }

    var siz=DATA.length;
    toc(table+" size :"+ siz);

    i=0;

    save_data(table,DATA,ext,400);

    toc(table+" Saved size="+siz);
}
//---------------------------------------

function gz2rom()
{

    var sel=document.getElementById("saveto").selectedIndex;
    var table=document.getElementById("saveto").options[sel].value;

    if(!confirm("Write (gzip) "+table)) return ;

    tic();

    toc("Please wait it will take long time ");
    if(table=='0')
	{
	    var ii=0;
	    for (ii=0;ii<tables.length;ii++)
		{  gz2rom_table(tables[ii]) ;}
	}
    else 
	gz2rom_table(table) ;
}
//---------------------------------------

function gz2rom_table(table)
{
    var str=0;   

    var ext="znewj";
    var extn="startz";
    tic();
    newfile(table,extn);
    newfile(table+"_del",extn);
    save_data(table+"_del","0",ext,40);
    // wherej ="var data ="+ table+"_obj;";
    // eval(wherej);

    DATA="{\"A\":\"\",\"*\":\"\"}" ; 
    select_data(table,0,0) ;

    var siz=DATA.length ;
    
    var di=stringToByteArray(DATA);
    var gzip=new Zlib.Gzip(di) ;
    var dataz=gzip.compress();

    //    var datz=arr2b64(dataz) ;
    i=0;
    save_data_bin(table,dataz,ext,0);

    toc(table+" Saved gziped data size="+siz);
}
//---------------------------------------

function clear_data()
{
    var sel=document.getElementById("saveto").selectedIndex;
    var table=document.getElementById("saveto").options[sel].value;

    if(!confirm("Clear "+table)) return ;
tic();
    if(table=='0')
	{
	    var ii=0;
	    for (ii=0;ii<tables.length;ii++)
		{clear_table(tables[ii]) ;}
	}
    else 
	clear_table(table) ;
} 
//---------------------------------------
function clear_table(table)
{
    
    wherej =table+"_obj = obj0 ;";  
    eval(wherej);


    wherej =table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
    eval(wherej);
    wherej =table+"_data = JsonQuery("+table+"_obj2); ";
    eval(wherej);
    //setTimeout(tic,200);
    toc(table+" Cleared");

}



//---------------------------------------
function dataload(table,data)
{
    tic();
    wherej =table+"_obj = "+data+";" ;
    eval(wherej);
    wherej =table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
    eval(wherej);
    wherej =table+"_data = JsonQuery("+table+"_obj2); ";
    eval(wherej);

    toc(table+" Data loaded");

}


//---------------------------------------
function db_page() {
    clear_all();
    clear();
    
    printf ( "<br><h2>Import data to Memory (Temporary) </h2>");



    printf ( "<div id='book_tile'>");
    printf ( " <table border=0 padding=5 cellpadding=5 cellspacing=5 align=center ><tr>");




    printf ( "<td class=til id=t_2 width=30% align=center >");

    printf ( "<a href='javascript:jsonfilein2();' >Json import</a></td>");

    printf ( "<td class=til id=t_3 width=30% align=center >");

    printf ( "<a href='javascript:xmlfile2();' >Xml import</a></td>");


    printf ( "<td class=til id=t_4 width=30% align=center >");

    printf ( "<a href='javascript:csvfile2();' >CSV Import</a></td>");
    printf ( "</tr>");


    printf ( "<tr>");
    printf ( "</tr></table>");

    printf ( "<br><a href='javascript:gz2rom2();'>Save to Rom (Permanent ) </a><br><br>");
    printf ( "</div>");
    printf ( "<br><center>");
    printf ( "</center>");
    status_box();
    refresh("rows");

}
//---------------------------------------
function setup_view()
{
    na=setup_na;

    printf("<table class=entry  width=100% >") ;

    input("Title","title",70,TITLE) ;
    input("Address","address",70,ADDRESS) ;
    input("User","user",0 ,USER) ;
    input("Password","pass",77,PASS ) ;
    input("Wifi Password","wifi_pass",10,WIFI_PASS) ;
    input("AP ","ap",70,AP ) ;
    input("IP NO.","ipno",70,IPNO ) ;
    input("Secure","security",0,'0' ) ;
    input("Signal Strength ","signal",7,SIGNAL ) ;

    /*
      printf ("<tr><td></td><td>Theme</td><td>");

      printf ("<select  id='signal' name=signal >");
      printf ("<option value=''>-Select-");
      printf ("<option value='andi'>Andi");
      printf ("<option value='bus'>Bus");
      printf ("<option value='ccom'>Ccom");
      printf ("<option value='dark'>Dark");
      printf ("<option value='easel'>Easel");
      printf ("<option value='gar'>Garland");
      printf ("<option value='grl'>Green");
      printf ("<option value='andi'>Andi");
      printf ("<option value='hert'>Hert");
      printf ("<option value='ith'>Ith");
      printf ("<option value='koi'>Koi");
      printf ("<option value='mit'>Mit");
      printf ("<option value='note'>Note");
      printf ("<option value='pro'>Pro");
      printf ("<option value='rain'>Rainbow");
      printf ("<option value=sts>Sts ");
      printf ("<option value=sur>Sur");
      printf ("<option value=vint>Vint");
      printf ("</select></td></tr>"); 
    */

    input("ID2","id2",7,ID2 ) ;
    input("Admin Passcode","uid",7,"" ) ;
    printf ("</table>");


}
//---------------------------------------
function login_view()
{
    clear();
    cg=setup_cg;
    printf ("<br><br>");
    form_title("Login") ;
    printf ("<form  method='POST' action='setup' name='form1' >") ;
    printf("<table class=entry  width=100% >") ;
    input("","dummy",0,cg.id ) ;
    input("User","user",70,cg.user ) ;
    input("Password","password",77,cg.password ) ;
    printf ("</table>");
    printf("<button name='action' value='insert' type='button' onclick='login_insert();' ><b>Enter</b></button>");
    printf("</form>");
    status_box();
    refresh("rows");

} 
//---------------------------------------
function login_insert() {
    //if( passcheck(2)==1) return ;

    var user=document.getElementById("user").value ;  
    var password=document.getElementById("password").value ;  
    var data =cg.user ;
    // write_data("login",data,"log");
    createCookie("ccom",user,"5");
    createCookie("ccom_pass",password,"5");
    setup_view_result() ;
    status_box();
}

//---------------------------------------
function msg_view()
{
    clear();
    cg=setup_cg;
    printf ("<br><br>");
    form_title("Message") ;
    printf ("<br><form  method='POST' action='setup' name='form1' onload='document.form1.msg.select();' >") ;


    printf ( " <center> <textarea colms=70 rows=3 id=msg   name=msg    class=txt ></textarea> </center>");

    //input("Message","msg",100,"" ) ;

    printf("<br><button name='action' value='insert' type='button' onclick='msg_insert();' ><b>INSERT</b></button>");
    printf("</form>");
    status_box();
    refresh("rows");

} 
//---------------------------------------
function msg_insert() {
    if( passcheck(2)==1) return ;

    var data=document.getElementById("msg").value ;  
    i=0;
    save_data("message",data,"msgw");
    //setup_view_result() ;

    msg_view();
}

//--FUNC----sp1a----------
//-------------------------------------
function setup_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function setup_end_view()
{
    refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function setup_get_data()
{
    cg.dummy=document.getElementById("dummy").value ;  
    cg.id=document.getElementById("id").value ;  
    cg.title=document.getElementById("title").value ;  
}
//--FUNC----sp4----------
function setup_new()

{
    // -----------------p55-------------
    clear();
    cg=setup_cg;
    form_title("setup") ;
    printf ("<form  method='POST' action='setup' name='form1' >") ;
    printf("<button name='action' value='insert' type='button' onclick='setup_insert();' ><b>INSERT</b></button>");
    cg.id =randno() ;
    setup_view();
    printf("<button name='action' value='insert' type='button' onclick='setup_insert();' ><b>INSERT</b></button>");

    printf("</form>");
    status_box();
    refresh("rows");
 
}
//--FUNC----sp5----------
function setup_insert() {
    //if( passcheck(2)==1) return ; 
    tic();
    var uidc=document.getElementById("uid").value ;  
    if(!uidc.length) uidc="0";
    if(uidc != UID ) 
	{
	    toc("Admin password not matching *");
	    return ;
	}
    //var ccom_pass = readCookie("ccom_pass");
    TITLE=document.getElementById("title").value ;  
    if(!TITLE.length) TITLE=" ";
    ADDRESS=document.getElementById("address").value ;  
    if(!ADDRESS.length) ADDRESS=" ";
    USER=document.getElementById("user").value ;
    if(!USER.length) USER=" ";
    PASS=document.getElementById("pass").value ;  
    if(!PASS.length) PASS=" ";
    WIFI_PASS=document.getElementById("wifi_pass").value ; 
    if(!WIFI_PASS.length) WIFI_PASS=" ";
    AP=document.getElementById("ap").value ; 
    if(!AP.length) AP="CCOM";
    IPNO=document.getElementById("ipno").value ;  
    if(!IPNO.length) IPNO="192.168.5.1";
    SECURITY=document.getElementById("security").value ;  
    if(!SECURITY.length) SECURITY="0";
    SIGNAL=document.getElementById("signal").value ;  
    if(!SIGNAL.length) SIGNAL="0";

    ID2=document.getElementById("id2").value ;  
    if(!ID2.length) ID2="0";

    var data =TITLE+";"+ADDRESS+";"+USER+";"+PASS+";"+WIFI_PASS+";"+AP+";"+IPNO+";"+SECURITY+";"+SIGNAL+";"+ID2+";";
    i=0;
    save_data("setup",data,"setw",200);

    setup_view_result() ;

}
//--FUNC----sp6----------
function setup_view_result()
{
    clear();
    refresh("titles");
    refresh("navi1");
    refresh("navi2");
    printf (RESULT);
    printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
    printf (" * <a href='#' onclick='setup_work();'><font size=+2> Home </font> </a></div>");
    status_box(); 
    refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function setup_edit(param) {
    clear(); 
    cg=setup_cg;
    var arr=param.split(","); 
    if(arr[0]) cg.id=arr[0];
    SQL=sprintf(SQL,"SELECT  a.id , a.title FROM  setup  a   WHERE    id ='"+ cg.id +"'  ;"  );
    start_view_data=setup_start_edit ;
    view_data=setup_view ;
    end_view_data=setup_end_edit ;
    dbdata(SQL,"setup","id",cg.id) ;
} 

//--FUNC----sp8----------
function setup_end_edit()
{
    printf("<button  name='action'  value='update'  type='button' onclick='setup_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
    printf("<button  name='action'  value='delete'  type='button' onclick='setup_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
    printf("</form>");
    refresh("rows");
} 

//--FUNC----sp9----------
function setup_start_edit()
{
    form_title("setup") ;
    printf("<form method='POST' action='setup_update' name='form1' >"); 
    printf("<button name='action' value='update' type='button' onclick='setup_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
    printf("<button name='action' value='delete' type='button' onclick='setup_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

} 
//--FUNC----sp10---------
function setup_update(param)
{
    passcheck(3); 
    var arr=param.split(","); 
    if(arr[0]) cg.id=cg.id=arr[0];
    setup_get_data();
    JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\"}";
    SQL= sprintf_enc(SQL,"  UPDATE setup  SET  id = '"+cg.id+"' ,  title = '"+cg.title+"'  WHERE id='"+cg.dummy+"' ;" ); 
    var IDX=sprintf(IDX, cg.dummy ) ;
    wherej="dbdo(SQL,JSO,'setup','id','"+IDX+"','update');"; 
    eval(wherej);
    setup_view_result() ;
}
//--FUNC----sp11---------
function setup_delete(param)
{
    if(passcheck(4)==1) return ; 
    var arr=param.split(","); 
    if(arr[0]) cg.id=cg.id=arr[0];
    setup_get_data();
    var IDX=sprintf(IDX,"cg.id" ) ;
    JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.title+"\"}";
    SQL=sprintf(SQL,"DELETE FROM setup WHERE  id ='"+ cg.id +"'    " ) ;
    dbdo(SQL,JSO,'setup','id',cg.id,'delete');   
    setup_view_result() ;
}
//--FUNC----sp12---------
function setup_navi()

{

    clear();

    printf ("<div class=row ><div class=cell width=50%></div><div class=cell><input type=button class=navi  value=Index onclick='index_page();' ></div>");
    printf ("<div class=cell><input  class=navi type=button value=Home  onclick='setup_search();' ></div>");
    printf ( "<div class=cell><input type=button  class=navi value=First onclick='setup_NM =0; setup_search();' ></div>");
    printf ( "<div class=cell><input type=button value=Back class=navi  onclick='setup_NM -=setup_NROWS;if(setup_NM < 0) setup_NM=0;  setup_search();' ></div>");
    printf ( "<div class=cell><input type=button value=Next class=navi  onclick='setup_NM +=setup_NROWS;if(setup_NM > COUNT) setup_NM=COUNT; setup_search();' ></div>");
    printf ( "</div>");
    refresh("navi1") ;

    refresh("navi2") ;

}

//--FUNC----sp13---------
function setup_pdfview ()
{
    msgview("Preparing PDF");
    var dataps='{ "content": [{"table": { "body": ['+datap+'] } }] }';
    var docDefinition= JSON.parse(dataps) ;
    pdfMake.createPdf(docDefinition).download("setup.pdf");
 
}

//--FUNC----sp14---------
function setup_xmlview ()
{

 
}
//--FUNC----sp16---------
function setup_rtfview ()
{

 
}
//--FUNC----sp17---------
function setup_txtview ()
{
    var datats="" ;
    datats +=datat ;
    file_txt = new File([datats], "setup.txt", {type: "text/plain;"});
    saveAs(file_txt);
 
}
//--FUNC----sp18---------
function setup_csvview ()
{
    var datacs="" ;
    datacs +=datac ;
    file_csv = new File([datacs], "setup.csv", {type: "text/csv;"});
    saveAs(file_csv);
 
}
//--FUNC----sp19---------
function setup_jsonview ()
{
    var datajs="" ;
    datajs +=dataj ;
    file_json = new File([datajs], "setup.json", {type: "text/json;"});
    saveAs(file_json);
 
}
//--FUNC----sp20---------
function setup_importfile(typ)
{
    //typ=0 ord 
    var DATA =IMPORT_DATA.split(',')[1]; 
    var data="" , dt="",dtv="" ,dta="",start=0,end=3072 ;
    typ *=1 ;
    var table="setup";
    if(typ==0)
	{
	    i=0;
	    save_data(table,DATA,"start",4000);

	}
    else if(typ==1)
	{

	    dt = b64_to_utf8(DATA) ;
	    dtv=dt;
	    wherej =table+"_obj += \",\"+dt ";
	    eval(wherej);

	    wherej =table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
	    eval(wherej);

	    wherej =table+"_data = JsonQuery("+table+"_obj2); ";
	    eval(wherej);


	}

    if(typ==2)
	{
	    i=0;
	    save_data(table,data,"start",4000);
	    i=0;
	    save_data(table,data,"newj",4000);
	    /*
	      DATA=utf8_to_b64(setup_obj)
	      do {
	      data =DATA.slice(start,end);
	      dtv = b64_to_utf8(data) ;
	      save_data(table,data,"newj",4000);
	      start +=3072; end +=3072;
	      } while (data.length) 
	    */

	}
    if(typ==3)
	{
	    i=0;
	    save_data(table,DATA,"start",4000);

	}
    if(typ==4)
	{
	    i=0;
	    save_data(table,"   ","start",4000);
	    i=0;
	    save_data(table,DATA,"znews",4000);
	}
    else {dtv ="No data "+typ; }
    document.getElementById("output").innerHTML = dtv;
}

//--FUNC----sp21---------
function setup_footer(){}
function import_data()
{
    clear_all();
    clear();




    printf ( " <br><br><br><br> <div id=import >");
    printf ("<form id=\"jsonFile\" name=\"form1\" enctype=\"multipart/form-data\" method=\"post\">");
    printf( " <h1>Database / Files </h1>");
    printf (" <input type='file' onchange='openFile(event)' id='fileinput'  >");
    printf("<br>Save as:<input id=tbl type=text name=tbl size=10 >");


    printf (" * <select  name='saveto'  value=''  onChange='document.form1.tbl.value=document.form1.saveto.options[document.form1.saveto.selectedIndex].value ;' style='width:40%%;'  >");

    printf ("<option value='' >--select--</option>");
    for(var ii=0;ii<tables.length;ii++)
	{
	    printf ("<option value="+tables[ii]+" >"+tables[ii]+"</option>");
	}
    printf ("</select>");

    printf (" <br>Type: <select  id='type' name=type >");
    printf ("<option value=json>json ");
    printf ("<option value=zjo>gziped json ");
    printf ("<option value=js>js ");
    printf ("<option value=sql >sql ");
    printf ("<option value=svg>svg ");
    printf ("<option value=jpg>jpg ");
    printf ("<option value=html>html ");
    printf ("<option value=png>png ");
    printf ("<option value=mp3>mp3 ");

    printf ("</select>");

    printf (" <br><br><input  class=btn  type='button' id='btnLoad' onclick='savefile(\"tbl\",\"fileinput\",\"type\");' value='Save file'>");
    //---------------------------------------
    printf (" <br><br> <input type='button' id='btnLoad2' onclick='var tblv=document.getElementById(\"tbl\").value;jsonfilein(tblv);' value='Load json data'>");

    printf (" * <input type='button' id='btnLoad3' onclick='xmlfile(\"fileinput\");' value='Load Xml data'>");

    printf (" * <input type='button' id='btnLoad3' onclick='csvfile();' value='Load CSV data'>");


    printf (" <br><br> <input type='button' id='btnLoad4' onclick='gz2rom();' value='Save as compressed' >");


    printf (" * <input type='button' id='btnLoad6' onclick='data2rom();' value='Save data'>");

 
    printf (" <br><br> <input type='button' id='btnLoad6' onclick='reset_data();' value='Reset Database '>");

    printf (" * <input type='button' id='btnLoad6' onclick='clear_data();' value='Clear Data '>");



    printf ( "<br><div id=output></div>");
    printf ( "</form></div><div id=xmm></div>");

    status_box();
    refresh("rows"); 

}
//---------------------------------------
function csvfile0()
{
    var data =IMPORT_DATA ;
    var dta= CSV.csvToArray(data);
    var out=JSON.stringify(dta);
    var jsot = "",fld="";

    document.getElementById("xmm").innerHTML=out

	}



//--FUNC----sp22---------
function setup_table_head()
{
    clear(); 
    printf ("<div class=row><div class=cell>"+setup_HEADING+"</div>");
    printf("<div class=cell>No of selections="+COUNT+"</div>");
    printf ("</div>");
    refresh("titles"); 
}
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function setup ()
{
    if (passcheck(1)==1) return  ; 
    if (LOAD_setup==0) {
	if(PROJECT_MODE=='jsonq'){
	    load_data("setup.json","setup");
	    // books_obj += ",";
	    // load_data("setup.zjso","setup");
	    load_data_del("setup_del.json","setup");
	    LOAD_setup =1 ;
	}
    }
    //----------------------------
    setup_HEADING="";

    setup_header ();
    setup_navi();

    setup_search ();
    setup_footer ();
}
//--FUNC----sp24---------
function setup_work(txtv,tvalv,stypv,heading)

{
    setup_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
    setup_TXT=document.getElementById("tx").value ;
    setup_STYP =document.getElementById("styp").value*1 ;
    setup_ANDOR =document.getElementById("andor").value*1 ;
    setup_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
    setup_TXT2=document.getElementById("tx2").value ;
    setup_STYP2 =document.getElementById("styp2").value*1 ;
    setup_SEL=document.getElementById("sel").value ;
    setup_SEL_RULE=document.getElementById("sel_rule").value ;
    setup_NROWS =document.getElementById("nos").value*1 ;
    var snos=document.getElementById("snos").value*1 ;
    if(snos > 0) setup_NM +=snos ;

    setup_navi();

    setup_search ();
    setup_footer ();
}

//--FUNC----sp25---------
function setup_search()

{
    ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
    setup_NM1=setup_NM;
 
    clear();
    setup_navi();

    cg=setup_cg;
    where ="";
    if (setup_DATE_FROM.length)
	{
	    date_search (setup_DATE_FROM, setup_DATE_TO, "due_date");
	}
    if (setup_SEL.length)
	{
	    where +=" AND a.='setup_SEL' ";
	}
    if (setup_SEL_RULE.length)
	{
	    where +=" AND a.='setup_SEL_RULE' ";
	}
    if (setup_TXT.length)
	{
	    if (setup_CATEGORY== "NIL");

	    else if (setup_CATEGORY == "id")
		where_int ( "id",  setup_TXT, setup_STYP,"setup");
	    else if (setup_CATEGORY == "title")
		where_char ( "title",   setup_TXT, setup_STYP,"setup");
	    else  where=" " ;
	}
    if (setup_TXT2.length)
	{
	    if (setup_ANDOR == 1)
		where2 =" AND ";
	    else 
		where2 =" OR ";
	    if (setup_CATEGORY2== "NIL");

	    else if (setup_CATEGORY2 == "id")
		where2_int ( "id",   setup_TXT2, setup_STYP2,"setup",setup_ANDOR);
	    else if (setup_CATEGORY2 == "title")
		where2_char ( "title",  setup_TXT2, setup_STYP2,"setup",setup_ANDOR);
	    else  where2=" " ;
	}
    var records=0;
    SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM setup a  WHERE 1=1 "+where+where2 );
    table_head=setup_table_head ;
    dbget(SQL,where,"setup") ;
    setup_NO_OF_ROWS = COUNT ;
    SQL=  sprintf (SQL,
		   "SELECT  id , title FROM setup a  WHERE 1=1 "+  where + where2 +setup_SORT+" "+setup_SORT_ORD+ " LIMIT "+setup_NROWS+" OFFSET  "+setup_NM );
    display_start=setup_start_rows ;
    display_rows=setup_rows ;
    display_end=setup_end_rows ;
    dbselect(SQL,where,setup_SORT,setup_NROWS,setup_NM,"setup") ;

    setup_footer ();
}
// ---------------------
//--FUNC----sp26---------
function setup_start_rows()
{
    clear(); 
    printf ("<div class=row><div class=cell></div>");
    printf ("<div  class=cell ><a href='#' onclick='NM=0;setup_SORT=\" ORDER BY id\" ;sorting(\"id\",\"setup\") ; setup_work();' >Id</a></div>");
    printf ("<div  class=cell ><a href='#' onclick='NM=0;setup_SORT=\" ORDER BY title\" ;sorting(\"title\",\"setup\") ; setup_work();' >Title</a></div>");
    printf ("</div>");
}
//--FUNC----sp27---------
function setup_end_rows()
{
    printf("</div>");
    refresh("rows");
}
//--FUNC----sp28---------
function setup_rows(cg)
{
    ir++ ;
    setup_NM1++;
    printf( "<div  class=row >");
    printf("<div class=cell ><a href='javascript:setup_edit(\""+cg.id+"\");'>"+setup_NM1+"</a></div>");
    printf("<div class=cell>" + cg.id + "</div>");
    printf("<div class=cell>" + cg.title + "</div>");
    printf("</div>");
 
    if(ir >1) datap +=',';
    datap +='["'+cg.call_no+'", "'+cg.title+'", "'+cg.author+'"]';
 
    datar += "{\\trowd";
    datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
    datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
    datar+="\n{\\pard\\intbl\\ql { "+cg.id +"}\\cell}";
    datar+="\n{\\pard\\intbl\\ql { "+cg.title +"}\\cell}"; 
    datar+="\\row} ";
 
    datax+="<setup>";
    datax+="<id>"+cg.id +"</id>";
    datax+="<title>"+cg.title +"</title>";
    datax+="</setup>";
 
    if(ir>0) datac+="\n";
    datac+="\""+cg.id +"\"";
    datac+=",";
    datac+="\""+cg.title +"\"";
    datat+="\n";
    datat+=""+cg.id +"";
    datat+=",";
    datat+=""+cg.title +"";
    if(ir>1)   dataj+=",";
    dataj+="{";
    dataj+="\"A\":\""+cg.id +"\"";
    dataj+=",";
    dataj+="\"B\":\""+cg.title +"\"";
    dataj+="}\n";
}
//--FUNC----sp29---------
function setup_header()

{

    clear();

    printf ( "<center><h3>setup</h3></center>");
    printf ( "<table id=t6  class='rt' width=100%%>");
    printf ( "<tr>");
    printf ( "<td colspan=10><select name=category id=cat >");
    printf ( "<option value=id> Id</option>");
    printf ( "<option value=title> Title</option>");
    printf ( "</select>");
    printf ( "");
    printf ( " <select name=styp id=styp >");
    printf ( "<option value=1>Start with</option>");
    printf ( "<option value=2>Contain</option>");
    printf ( "<option value=3>Between (start,end)</option>");
    printf ( "<option value=4>Greater than</option>");
    printf ( "<option value=5>Equal</option>");
    printf ( "<option value=6>Less than</option>");
    printf ( "</select>");
    printf ( "<input type=text value='' name=txt size=10 id=tx>");
    printf ( " <button type=button  onclick='setup_NM=0;setup_work();'><font size=+2>Search</font></button> ");
    printf ( " <input type=hidden value='' name=sel size=10 id=sel>");
    printf ( " <input type=hidden  value='' name=sel_rule size=10 id=sel_rule>");
    printf ( "<br><a href='#' onclick='setup_new();' >New Entry</a> * ");
    printf ( "<a href='javascript:hide_adv();'>More Options</a>");
    printf ( "<div id=adv >");
    printf ( " <select name=andor id=andor >");
    printf ( "<option value=1>AND</option>");
    printf ( "<option value=2>OR</option>");
    printf ( "</select>");
    printf ( "<select name=category2 id=cat2 >");
    printf ( "<option value=id> Id</option>");
    printf ( "<option value=title> Title</option>");
    printf ( "</select>");
    printf ( "");
    printf ( " <select name=styp id=styp2 >");
    printf ( "<option value=1>Start with</option>");
    printf ( "<option value=2>Contain</option>");
    printf ( "<option value=3>Between (s-e)</option>");
    printf ( "<option value=4>Greater than</option>");
    printf ( "<option value=5>Equal</option>");
    printf ( "<option value=6>Less than</option>");
    printf ( "</select>");
    printf ( "<input type=text value='' name=txt2 size=10 id=tx2>");
    printf ( "</div>");
    //------------ p23--------------------------------------------
    printf ( "</td><td><font size=-1> No of rows <input type=text value='20' name=nos size=3 id=nos><br> Rows from <input type=text value='0' name=snos size=3 id=snos>");
    printf ( "</td></tr></table>");
    refresh ("heading");
    hide_adv ();
}
//---------------------------------------

function arr2b64 (arrayBuffer) {
    var base64    = ''
	var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

	var bytes         = new Uint8Array(arrayBuffer)
	var byteLength    = bytes.byteLength
	var byteRemainder = byteLength % 3
	var mainLength    = byteLength - byteRemainder

	var a, b, c, d
	var chunk

	// Main loop deals with bytes in chunks of 3
	for (var i = 0; i < mainLength; i = i + 3) {
	    // Combine the three bytes into a single integer
	    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

	    // Use bitmasks to extract 6-bit segments from the triplet
	    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
	    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
	    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
	    d = chunk & 63               // 63       = 2^6 - 1

	    // Convert the raw binary segments to the appropriate ASCII encoding
	    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
	}

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
	chunk = bytes[mainLength]

	    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

	    // Set the 4 least significant bits to zero
	    b = (chunk & 3)   << 4 // 3   = 2^2 - 1

	    base64 += encodings[a] + encodings[b] + '=='
	    } else if (byteRemainder == 2) {
	chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

	    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
	    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

	    // Set the 2 least significant bits to zero
	    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

	    base64 += encodings[a] + encodings[b] + encodings[c] + '='
	    }
  
    return base64
	}

//------------------p77---------------------

function select_data (table,start,end)
{
    var datax,row ;
    start *=1;
    end *=1 ;
 
    wherej ="datax ="+ table+"_obj2;";
    eval(wherej);
    if(end ==0) end =datax.length ;
    else end++;

    for(var g=0;g < end ; g++)
	{
	    row=datax[g];
	    if(row["A"] ==='' ) {continue ;}
	    row["*"]=g ;
	    var shw=JSON.stringify(row);

	    if(g >= start)
		{ 
		    DATA += "\n,"+shw ;
		    
		}
	}
    console.log("\nRows saved from "+start+" To"+end);
    
}

//---------------------------------------
function  heading_box()
{
    //clear();
    //printf ("<font size=+1><center>"+TITLE+"</center></font><br>");
    //refresh("heading");
}
//--------------------------------
function  msg_box()
{
    //clear();
    printf ("<hr><table align=center ><tr>");
    printf ("<td class=ccom id=t_1 > <a href='javascript:msg_view();'>Message </a> </td><td class=ccom id=t_5> </td><td class=ccom  id=t_2 > <a href='javascript:beep()'>Beep</a> </td></tr></table> ");

    //refresh("msg_box");
}
//--------------------------------
function status_box()
{
    //  clear();
    printf ("<table align=center ><tr>");

    printf ("<td   class=ttl align=center  id=t_2 >  <a href='javascript:index_page();'>Index</a></td> ");

    printf ("<td   class=ttl align=center  id=t_2 >  <a href='index.html'>Refresh</a></td> ");


    printf ("<td class=ttl align=center  id=t_4 > <a href='javascript:javascript:loadScript(\"setup\", function(){ setup_index();});'>Admin/Setup</a></td> ");

    var ccom = readCookie("ccom");
    if(ccom) ccom="("+ccom+")";  else ccom=""; 
    printf ("<td   class=ttl align=center  id=t_5 >  <a href='javascript:login_view();'>Login </a>");

    printf(ccom);
    printf ("</td>");
    printf ("<td  class=ttl  align=center  id=t_6 >  <a href='javascript:guide();'>Guide</a></td> ");

    printf ("</tr></table>");
 printf ("<div align=center> * <a href='http://www.ccoms.info'>www.ccoms.info</a> * ID: "+ID2+"</div>");
    //  refresh("foot");
}
//------------------



//--------------------------------------
/*
  printf("<div class=cell><b>" + cg.title + "</b><br>");
  printf(" <i><font color=#990044 >Author:</i>" + cg.author + "</font><br>");
  printf(" <i>Class No:</i>" + cg.call_no +" <i>Year: </i>"+cg.year_published+"<br><i>Publisher: </i>"+cg.pubid+ "</div>");

  printf("<div class=cell><a href='#'>Status</a><br><a href='javascript:books_edit(\""+cg.call_no+"\");'>Edit</a> </div>");
  printf("</div>");


*/
/*
  printf("<div class=cell>" + "<a href='javascript:books_TXT=\""+cg.cl_code+"\";books_CATEGORY=\"call_no\" ;books_STYP=1;books_HEADING=\" Books on  "+cg.cl_name+"\";books_search();'>Books</a>" + "</div>");
*/

/*
  printf("<div class=cell>" + "<a href='javascript:books_TXT=\""+cg.call_no+"\";books_CATEGORY=\"call_no\" ;books_STYP=1;books_HEADING=\" Books on  "+cg.call_no+"\";books_search();'>Book detail</a>" + "</div>");
*/

// Book details 
/*
  display_book(cg.title,cg.author,cg.call_no,cg.year_published,cg.pubid);

  show_link("book_data",cg.call_no,"Status");
*/
// Book data

/*
  var res=dbgetname("book_details","B",cg.call_no);
  if(res)
  printf("<div class=cell><b>" + res.C +"</b><br><i>Author:</i>"+res.D + "</div>");


*/



//classification
// show_link("books",cg.id,"books");

//lender
// show_link("lending",cg.id,"lending");



//lending

/*
  printf("<div class=cell>" + cg.member_id + "<br>");
  res=dbgetname("members","A",cg.member_id);
  if(res)
  printf("" + res.B + "");
  printf("</div>");
  printf("<div class=cell>" + cg.book_no + "<br>");
  res=dbgetname("book_data","A",cg.book_no);
  if(res)
  res=dbgetname("book_details","B",res.B);
  if(res)
  printf("" + res.C + "");
  printf("</div>");
*/
