//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// guide_view() -- sp1
// guide_end_view() -- sp2
// guide_get_data() -- sp3
// guide_new() -- sp4
// guide_insert() -- sp5
// guide_view_result() -- sp6
// guide_edit() -- sp7
// guide_end_edit() -- sp8
// guide_start_edit() -- sp9
// guide_update() -- sp10
// guide_delete() -- sp11
// guide_navi() -- sp12
// guide_pdfview() -- sp13
// guide_xmlview() -- sp14
// guide_rtfview() -- sp16
// guide_txtview() -- sp17
// guide_csvview() -- sp18
// guide_jsonview() -- sp19
// guide_importfile() -- sp20
// guide_footer() -- sp21
// guide_table_head() -- sp22
// guide() -- sp23
// guide_work() -- sp24
// guide_search() -- sp25
// guide_start_rows() -- sp26
// guide_end_rows() -- sp27
// guide_rows() -- sp28
// guide_start_colms() -- sp29
// guide_end_colms() -- sp30
// guide_colms() -- sp31
// guide_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var guidei="";
var guide_keys=["id","title","sub_title","content","ref_name","ser_no","chapter","project"];
var guide_typ=["int","varchar(500)","varchar(300)","text","varchar(100)","varchar(100)","varchar(200)","varchar(100)"];
var guide_titl=["Id","Title","Sub title","Content","Ref name","Ser no","Chapter","Project"];
var guide_j={"id":"A","title":"B","sub_title":"C","content":"D","ref_name":"E","ser_no":"F","chapter":"G","project":"H"};
var guide_init={"A":"0","B":"","C":"","D":"","E":"","F":"","G":"","H":"","*":""};
//-----------------------
var navi="", header="" , guide_table="";
var guide_HEADING="";
 var guide_NM1=0,guide_NM=0, guide_NO_OF_ROWS=0,guide_data;
 var guide_TXT="",guide_TXT2="", guide_SORT="",guide_CATEGORY2="",guide_ANDOR=0,guide_STYP2=0;
 var guide_SEL="",guide_SEL_RULE="", guide_SORT_ORD="",guide_CATEGORY="",guide_STYP=0;
 var guide_DATE_FROM="01/01/1000",guide_DATE_TO="01/01/3000", guide_NROWS=20;
 var guide_data, guide_arr=[],guide_del_arr=[],guide_obj2;
var guide_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"*\":\"\"}";
var guide_na ={
 search:"Search"
, id:"Id" 
, title:"Title" 
, sub_title:"Sub title" 
, content:"Content" 
, ref_name:"Ref name" 
, ser_no:"Ser no" 
, chapter:"Chapter" 
, project:"Project" 
};
var guide_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, title:"" 
, sub_title:"" 
, content:"" 
, ref_name:"" 
, ser_no:"" 
, chapter:"" 
, project:"" 
};
//--FUNC----sp1----------
function guide_view(edit)
 {
 na=guide_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
 if(edit==1) input("","id",0,cg.id ) ;
 else  input(na.id,"id",7,cg.id ) ;
input(na.title,"title",70,cg.title ) ;
input(na.sub_title,"sub_title",70,cg.sub_title ) ;
input(na.content,"content",100,cg.content ) ;
input(na.ref_name,"ref_name",70,cg.ref_name ) ;
input(na.ser_no,"ser_no",70,cg.ser_no ) ;
input(na.chapter,"chapter",70,cg.chapter ) ;
input(na.project,"project",70,cg.project ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function guide_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function guide_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function guide_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.sub_title=json_cvt(getvlu("sub_title")) ;  
 cg.content=json_cvt(getvlu("content")) ;  
 cg.ref_name=json_cvt(getvlu("ref_name")) ;  
 cg.ser_no=json_cvt(getvlu("ser_no")) ;  
 cg.chapter=json_cvt(getvlu("chapter")) ;  
 cg.project=json_cvt(getvlu("project")) ;  
 }
//--FUNC----sp4----------
function guide_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.title=""; 
  cg.sub_title=""; 
  cg.content="" ;
  cg.ref_name=""; 
  cg.ser_no=""; 
  cg.chapter=""; 
  cg.project=""; 
printf ("<form  method='POST' action='guide' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='guide_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("guide","guide","id") ;
 guide_view(1);
 printf("<button name='action' value='insert' type='button' onclick='guide_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function guide_insert() {
if( passcheck(2)==1) return ; 
 guide_get_data(); 
var uid=db_uid("guide");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.sub_title+"\",\"D\":\""+cg.content+"\",\"E\":\""+cg.ref_name+"\",\"F\":\""+cg.ser_no+"\",\"G\":\""+cg.chapter+"\",\"H\":\""+cg.project+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO guide ( id , title , sub_title , content , ref_name , ser_no , chapter , project ) VALUES (  "+atoi(cg.id)+" , '"+cg.title+"' , '"+cg.sub_title+"' , '"+cg.content+"' , '"+cg.ref_name+"' , '"+cg.ser_no+"' , '"+cg.chapter+"' , '"+cg.project+"' );" );  
 dbdo(SQL,JSO,'guide','id',cg.id,'insert');   
 guide_view_result() ;
 
 }
//--FUNC----sp6----------
function guide_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='guide_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function guide_edit(param) {
 clear(); 
 cg=guide_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"guide_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.id , a.title , a.sub_title , a.content , a.ref_name , a.ser_no , a.chapter , a.project FROM  guide  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=guide_start_edit ;
 view_data=guide_view ;
 end_view_data=guide_end_edit ;
 dbdata(SQL,"guide","id",cg.id) ;
 } 

//--FUNC----sp8----------
function guide_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='guide_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='guide_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function guide_start_edit()
{
 printf("<form method='POST' action='guide_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='guide_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='guide_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function guide_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 guide_get_data();
var uid=db_uid("guide");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.sub_title+"\",\"D\":\""+cg.content+"\",\"E\":\""+cg.ref_name+"\",\"F\":\""+cg.ser_no+"\",\"G\":\""+cg.chapter+"\",\"H\":\""+cg.project+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE guide  SET  id = '"+cg.id+"' ,  title = '"+cg.title+"' ,  sub_title = '"+cg.sub_title+"' ,  content = '"+cg.content+"' ,  ref_name = '"+cg.ref_name+"' ,  ser_no = '"+cg.ser_no+"' ,  chapter = '"+cg.chapter+"' ,  project = '"+cg.project+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'guide','id','"+IDX+"','update');"; 
eval(wherej);
 guide_view_result() ;
 }
//--FUNC----sp11---------
function guide_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 guide_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.sub_title+"\",,\"D\":\""+cg.content+"\",,\"E\":\""+cg.ref_name+"\",,\"F\":\""+cg.ser_no+"\",,\"G\":\""+cg.chapter+"\",,\"H\":\""+cg.project+"\"}";
SQL=sprintf(SQL,"DELETE FROM guide WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'guide','id',cg.id,'delete');   
 guide_view_result() ;
 }
//--FUNC----sp12---------
function guide_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='guide_NM +=guide_NROWS;if(guide_NM > COUNT) guide_NM=COUNT; guide_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='guide_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='guide_NM =0; guide_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='guide_NM -=guide_NROWS;if(guide_NM < 0) guide_NM=0;  guide_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='guide_NM +=guide_NROWS;if(guide_NM > COUNT) guide_NM=COUNT; guide_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function guide_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Title\"";
 datapdf += ",";
 datapdf += "\"Sub title\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("guide.pdf");
 
}

//--FUNC----sp14---------
function guide_xmlview ()
{
 var dataxs ="<?xml version='1.0' ?>";
 dataxs += "\n<?xml-stylesheet type=\"text/xml\" href=\"#stylesheet\"?> ";
 dataxs += "\n<!DOCTYPE catelog [ ";
 dataxs += "\n<!ATTLIST xsl:stylesheet ";
 dataxs += "\n id ID #REQUIRED> ";
 dataxs += "\n]> ";
 dataxs += "\n ";
 dataxs += "\n<document> ";
 dataxs += "\n<xsl:stylesheet id=\"stylesheet\" version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"> ";
 dataxs += "\n<xsl:template match=\"/\"> ";
 dataxs += "\n <html> ";

 dataxs += "\n <head> ";
 dataxs +="\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>";
 dataxs += "\n <style type=\"text/css\"> ";
 dataxs += "\n body ";
 dataxs += "\n { ";
 dataxs += "\n font-family:arial,sans-serif; ";
 dataxs += "\n color:#000; ";
 dataxs += "\n font-size:13px; ";
 dataxs += "\n color:#333; ";
 dataxs += "\n } ";

 dataxs += "\n table ";
 dataxs += "\n { ";
 dataxs += "\n font-size:1.2em; ";
 dataxs += "\n margin:0 0 1em; ";
 dataxs += "\n border-collapse:collapse; ";
 dataxs += "\n border-width:0;width:100%; ";
 dataxs += "\n empty-cells:show; ";
 dataxs += "\n } ";
 dataxs += "\n td,th ";
 dataxs += "\n { ";
 dataxs += "\n border:1px solid #ccc; ";
 dataxs += "\n padding:6px 12px; ";
 dataxs += "\n text-align:left; ";
 dataxs += "\n vertical-align:top; ";
 dataxs += "\n background-color:inherit; ";
 dataxs += "\n } ";
 dataxs += "\n th ";
 dataxs += "\n { ";
 dataxs += "\n background-color:#dee8f1; ";
 dataxs += "\n } ";
 dataxs += "\n </style> ";
 dataxs += "\n </head> ";

 dataxs += "\n <body> ";
 dataxs += "\n <h2>guide</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n <th>Sub title</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/guide_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n <td><xsl:value-of select='sub_title'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "guide.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function guide_rtfview ()
{
 var datars = "{\\rtf1\\ansi\\uc1\\deff0\\deflang1024";
datars += "";
datars += "{\\fonttbl{\\f0\\fnil\\fcharset0 Times New Roman;}";
datars += "{\\f1\\fnil\\fcharset0 Arial;}";
datars += "{\\f2\\fnil\\fcharset0 Arial;}";
datars += "{\\f3\\fnil\\fcharset0 Courier New;}";
datars += "{\\f4\\fnil\\fcharset0 Rachana;}";
datars += "{\\f5\\fnil\\fcharset0 Lohit;}";
datars += "{\\f6\\fnil\\fcharset0 Zapf Chancery;}";
datars += "{\\f7\\fnil\\fcharset0 STIXGeneral;}";
datars += "}";
datars += "{\\colortbl;";
datars += "\\red0\\green0\\blue0;";
datars += "\\red0\\green0\\blue255;";
datars += "\\red0\\green255\\blue255;";
datars += "\\red0\\green255\\blue0;";
datars += "\\red255\\green0\\blue255;";
datars += "\\red255\\green0\\blue0;";
datars += "\\red255\\green255\\blue0;";
datars += "\\red255\\green255\\blue255;";
datars += "}";
datars += "{\\stylesheet";
datars += "{\\s0\\qj\\widctlpar\\f0\\fs24 \\snext0 Normal;}";
datars += "{\\cs10 \\additive\\ssemihidden Default Paragraph Font;}";
datars += "{\\s1\\qc\\sb240\\sa120\\keepn\\f0\\b\\fs40 \\sbasedon0\\snext0 Part;}";
datars += "}";
datars += "";
datars += "{\\info";
datars += "{\\title Projects}";
datars += "{\\author sajanpjose}";
datars += "{\\doccomm Created on 19/01/2018}";
datars += "}";
datars += "";
datars += "{\\footer\\pard\\plain\\f0\\fs24\\qc\\chpgn\\par}";
datars += "{\\header\\pard\\plain\\tqc\\tx4019\\tqr\\tx8038 \\tab\\tab\\par}";
datars += "{\\paperw12280\\paperh15900\\margl1542\\margr2700\\margt833\\margb-44\\pgnstart0\\widowctrl\\qj\\ftnbj\\f0\\aftnnar}";
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Guide \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Sub title}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "guide.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function guide_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "guide.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function guide_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Title, ";
 datacs += "Sub title, ";
 datacs += "Content, ";
 datacs += "Ref name, ";
 datacs += "Ser no, ";
 datacs += "Chapter, ";
 datacs += "Project, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "guide.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function guide_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "guide.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function guide_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(guide_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "guide.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function guide_importfile(typ)
{
 }

//--FUNC----sp21---------
function guide_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:guide_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:guide_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:guide_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:guide_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:guide_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:guide_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:guide_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function guide_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+guide_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function guide ()
{
 if (passcheck(1)==1) return  ; 
 guide_HEADING="";

 guide_header ();
 guide_navi();

 guide_search ();
 guide_footer ();
}
//--FUNC----sp24---------
function guide_work(txtv,tvalv,stypv,heading)

 {
 guide_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 guide_TXT=document.getElementById("tx").value ;
 guide_STYP =document.getElementById("styp").value*1 ;
 guide_ANDOR =document.getElementById("andor").value*1 ;
 guide_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 guide_TXT2=document.getElementById("tx2").value ;
 guide_STYP2 =document.getElementById("styp2").value*1 ;
 guide_SEL=document.getElementById("sel").value ;
 guide_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 guide_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) guide_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) guide_NM +=snos ;

 guide_navi();

 guide_search ();
 guide_footer ();
 }

//--FUNC----sp25---------
function guide_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_guide==0) {
 load_data("guide.zjo","guide");
 load_data("guide.json","guide");
 load_data_del("guide_del.json","guide");
LOAD_guide=1;
 }
 guide_NM1=guide_NM;
 
 clear();
 guide_navi();

 cg=guide_cg;
 where ="";
 if (guide_SEL.length)
    {
   sel_search ("", guide_SEL,"guide",1);
    }
 if (guide_SEL_RULE.length)
    {
   sel_search ("", guide_SEL_RULE,"guide",1);
    }
 if (guide_TXT.length)
    {
      if (guide_CATEGORY== "NIL");

 else if (guide_CATEGORY == "id")
 where_int ( "id",  guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "title")
 where_char ( "title",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "sub_title")
 where_char ( "sub_title",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "content")
 where_char ( "content",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "ref_name")
 where_char ( "ref_name",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "ser_no")
 where_char ( "ser_no",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "chapter")
 where_char ( "chapter",   guide_TXT, guide_STYP,"guide");
 else if (guide_CATEGORY == "project")
 where_char ( "project",   guide_TXT, guide_STYP,"guide");
  else  where=" " ;
}
 if (guide_TXT2.length)
    {
 if (guide_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (guide_CATEGORY2== "NIL");

 else if (guide_CATEGORY2 == "id")
 where2_int ( "id",   guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "title")
 where2_char ( "title",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "sub_title")
 where2_char ( "sub_title",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "content")
 where2_char ( "content",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "ref_name")
 where2_char ( "ref_name",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "ser_no")
 where2_char ( "ser_no",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "chapter")
 where2_char ( "chapter",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
 else if (guide_CATEGORY2 == "project")
 where2_char ( "project",  guide_TXT2, guide_STYP2,"guide",guide_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM guide a  WHERE 1=1 "+where+where2 );
 table_head=guide_table_head ;
  dbget(SQL,where,"guide") ;
  guide_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , title , sub_title , content , ref_name , ser_no , chapter , project FROM guide a  WHERE 1=1 "+  where + where2 +guide_SORT+" "+guide_SORT_ORD+ " LIMIT "+guide_NROWS+" OFFSET  "+guide_NM );
 if (DISPCOL==1) {
 display_start=guide_start_colms ;
 display_rows=guide_colms ;
 display_end=guide_end_colms ;
 } else  {
 display_start=guide_start_rows ;
 display_rows=guide_rows ;
 display_end=guide_end_rows ;
 } 
  dbselect(SQL,where,guide_SORT,guide_NROWS,guide_NM,"guide") ;

 guide_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function guide_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell >Sort: <a href='#' onclick='NM=0;guide_SORT=\" ORDER BY title\" ;sorting(\"title\",\"guide\") ; guide_work();' >title</a> * ");
 printf ("<a href='#' onclick='NM=0;guide_SORT=\" ORDER BY sub_title\" ;sorting(\"sub_title\",\"guide\") ; guide_search();' >sub_title</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function guide_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function guide_rows(cg)
 {
  ir++ ;
  guide_NM1++;
 var nnn= guide_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:guide_edit(\""+cg.id+"\");'>"+guide_NM1+". </a></div>");
 printf("<div class=cell><b>" + cg.title + "</b><br>");
 printf("" + decodeh(cg.sub_title) + "</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+guide_NM1+'\",'
 datap +="\""+decodep(cg.title)+"\"";datap += ',';
 datap +="\""+decodep(cg.sub_title)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+guide_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.sub_title) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<guide_entry>";
datax+="<sl_no>"+guide_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<sub_title>"+cg.sub_title +"</sub_title>";
datax+="<content>"+cg.content +"</content>";
datax+="<ref_name>"+cg.ref_name +"</ref_name>";
datax+="<ser_no>"+cg.ser_no +"</ser_no>";
datax+="<chapter>"+cg.chapter +"</chapter>";
datax+="<project>"+cg.project +"</project>";
datax+="</guide_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.sub_title +"\"";
datac+=",";
datac+="\""+cg.content +"\"";
datac+=",";
datac+="\""+cg.ref_name +"\"";
datac+=",";
datac+="\""+cg.ser_no +"\"";
datac+=",";
datac+="\""+cg.chapter +"\"";
datac+=",";
datac+="\""+cg.project +"\"";
datat+="\n";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.sub_title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.sub_title) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.content) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.ref_name) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.ser_no) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.chapter) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.project) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function guide_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function guide_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function guide_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= guide_na;
 guide_start_colms();
  ir++ ;
  guide_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:guide_edit(\""+cg.id+"\");'>"+guide_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Id</div><div class=cell>" + decodeh(cg.id) + "</div></div>");
 printf("<div  class=row ><div class=cell>Title</div><div class=cell>" + decodeh(cg.title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Sub title</div><div class=cell>" + decodeh(cg.sub_title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Content</div><div class=cell>" + decodeh(cg.content) + "</div></div>");
 printf("<div  class=row ><div class=cell>Ref name</div><div class=cell>" + decodeh(cg.ref_name) + "</div></div>");
 printf("<div  class=row ><div class=cell>Ser no</div><div class=cell>" + decodeh(cg.ser_no) + "</div></div>");
 printf("<div  class=row ><div class=cell>Chapter</div><div class=cell>" + decodeh(cg.chapter) + "</div></div>");
 printf("<div  class=row ><div class=cell>Project</div><div class=cell>" + decodeh(cg.project) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Id\",\""+decodep(cg.id)+"\"]";datap += ',';
 datap +="[\"Title\",\""+decodep(cg.title)+"\"]";datap += ',';
 datap +="[\"Sub title\",\""+decodep(cg.sub_title)+"\"]";datap += ',';
 datap +="[\"Content\",\""+decodep(cg.content)+"\"]";datap += ',';
 datap +="[\"Ref name\",\""+decodep(cg.ref_name)+"\"]";datap += ',';
 datap +="[\"Ser no\",\""+decodep(cg.ser_no)+"\"]";datap += ',';
 datap +="[\"Chapter\",\""+decodep(cg.chapter)+"\"]";datap += ',';
 datap +="[\"Project\",\""+decodep(cg.project)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+guide_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.sub_title) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<guide_entry>";
datax+="<sl_no>"+guide_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<sub_title>"+cg.sub_title +"</sub_title>";
datax+="<content>"+cg.content +"</content>";
datax+="<ref_name>"+cg.ref_name +"</ref_name>";
datax+="<ser_no>"+cg.ser_no +"</ser_no>";
datax+="<chapter>"+cg.chapter +"</chapter>";
datax+="<project>"+cg.project +"</project>";
datax+="</guide_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.sub_title +"\"";
datac+=",";
datac+="\""+cg.content +"\"";
datac+=",";
datac+="\""+cg.ref_name +"\"";
datac+=",";
datac+="\""+cg.ser_no +"\"";
datac+=",";
datac+="\""+cg.chapter +"\"";
datac+=",";
datac+="\""+cg.project +"\"";
datat+="\n";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.sub_title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.sub_title) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.content) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.ref_name) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.ser_no) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.chapter) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.project) +"\"";
dataj+="}\n";
 guide_end_colms();
 }
//--FUNC----sp32---------
function guide_header()
 {
 var key=guide_keys;
 var titl=guide_titl;

clear();

printf ( "<center><h2>Guide</h2></center>");
printf ( "<div id=serh><table id=t6  class='rt' width=100%%>");
printf ( " ");
printf ( " <tr><td><select name=category id=cat >");
for(var nn=1;nn<key.length;nn++)
{
printf ("<option value="+key[nn]+">"+titl[nn]+"</option>");
}
printf ("<option value="+key[0]+">"+titl[0]+"</option>");
printf ( "</select>");
printf ( "");
printf ( " <select name=styp id=styp >");
printf ( "<option value=1>Start with</option>");
printf ( "<option value=2>Contain</option>");
printf ( "<option value=3>Between (start,end)</option>");
printf ( "<option value=4>Greater than</option>");
printf ( "<option value=5>Equal</option>");
printf ( "<option value=6>Less than</option>");
printf ( "<option value=7>In(start,end)</option>");
printf ( "<option value=8>Not In(start,end)</option>");
printf ( "<option value=9>Not Equal</option>");
printf ( "</select>");
printf ( "<input type=text value='' name=txt size=11 id=tx>");
printf ( " <input type=hidden value='' name=sel size=10 id=sel>");
printf ( " <input type=hidden  value='' name=sel_rule size=10 id=sel_rule>");
printf ( "  <a  href='javascript:hide_adv();' >More Options</a>");
printf ( "<div id=adv >");
printf ( " <select name=andor id=andor >");
printf ( "<option value=1>AND</option>");
printf ( "<option value=2>OR</option>");
printf ( "</select>");
printf ( "<select name=category2 id=cat2 >");
for(var nn=1;nn<key.length;nn++)
{
printf ("<option value="+key[nn]+">"+titl[nn]+"</option>");
}
printf ("<option value="+key[0]+">"+titl[0]+"</option>");
printf ( "</select>");
printf ( "");
printf ( " <select name=styp id=styp2 >");
printf ( "<option value=1>Start with</option>");
printf ( "<option value=2>Contain</option>");
printf ( "<option value=3>Between (s-e)</option>");
printf ( "<option value=4>Greater than</option>");
printf ( "<option value=5>Equal</option>");
printf ( "<option value=6>Less than</option>");
printf ( "<option value=7>In(start,end)</option>");
printf ( "<option value=8>Not In(start,end)</option>");
printf ( "<option value=9>Not Equal</option>");
printf ( "</select>");
printf ( "<input type=text value='' name=txt2 size=10 id=tx2>");
printf ( "</div>");
//------------ p53--------------------------------------------
printf ( "</td><td><font size=-1> No of rows <input type=text value='20' name=nos size=3 id=nos><br> Rows from <input type=text value='0' name=snos size=3 id=snos>");
printf ("<br>Single Col.<input type=checkbox id=dispcol value=1>");
printf ( "</td></tr></table></div>");
printf ( "<button type=button  onclick='guide_NM=0;guide_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:guide_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------