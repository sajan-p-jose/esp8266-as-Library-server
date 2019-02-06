//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// introduction_view() -- sp1
// introduction_end_view() -- sp2
// introduction_get_data() -- sp3
// introduction_new() -- sp4
// introduction_insert() -- sp5
// introduction_view_result() -- sp6
// introduction_edit() -- sp7
// introduction_end_edit() -- sp8
// introduction_start_edit() -- sp9
// introduction_update() -- sp10
// introduction_delete() -- sp11
// introduction_navi() -- sp12
// introduction_pdfview() -- sp13
// introduction_xmlview() -- sp14
// introduction_rtfview() -- sp16
// introduction_txtview() -- sp17
// introduction_csvview() -- sp18
// introduction_jsonview() -- sp19
// introduction_importfile() -- sp20
// introduction_footer() -- sp21
// introduction_table_head() -- sp22
// introduction() -- sp23
// introduction_work() -- sp24
// introduction_search() -- sp25
// introduction_start_rows() -- sp26
// introduction_end_rows() -- sp27
// introduction_rows() -- sp28
// introduction_start_colms() -- sp29
// introduction_end_colms() -- sp30
// introduction_colms() -- sp31
// introduction_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var introductioni="";
var introduction_keys=["id","title","description"];
var introduction_typ=["integer","character varying(100)","text"];
var introduction_titl=["Id","Title","Description"];
var introduction_j={"id":"A","title":"B","description":"C"};
var introduction_init={"A":"0","B":"","C":"","*":""};
//-----------------------
var navi="", header="" , introduction_table="";
var introduction_HEADING="";
 var introduction_NM1=0,introduction_NM=0, introduction_NO_OF_ROWS=0,introduction_data;
 var introduction_TXT="",introduction_TXT2="", introduction_SORT="",introduction_CATEGORY2="",introduction_ANDOR=0,introduction_STYP2=0;
 var introduction_SEL="",introduction_SEL_RULE="", introduction_SORT_ORD="",introduction_CATEGORY="",introduction_STYP=0;
 var introduction_DATE_FROM="01/01/1000",introduction_DATE_TO="01/01/3000", introduction_NROWS=20;
 var introduction_data, introduction_arr=[],introduction_del_arr=[],introduction_obj2;
var introduction_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"*\":\"\"}";
var introduction_na ={
 search:"Search"
, id:"Id" 
, title:"Title" 
, description:"Description" 
};
var introduction_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, title:"" 
, description:"" 
};
//--FUNC----sp1----------
function introduction_view(edit)
 {
 na=introduction_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
 if(edit==1) input("","id",0,cg.id ) ;
 else  input(na.id,"id",7,cg.id ) ;
input(na.title,"title",70,cg.title ) ;
input(na.description,"description",100,cg.description ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function introduction_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function introduction_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function introduction_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.description=json_cvt(getvlu("description")) ;  
 }
//--FUNC----sp4----------
function introduction_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.title=""; 
  cg.description="" ;
printf ("<form  method='POST' action='introduction' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='introduction_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("introduction","introduction","id") ;
 introduction_view(1);
 printf("<button name='action' value='insert' type='button' onclick='introduction_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function introduction_insert() {
if( passcheck(2)==1) return ; 
 introduction_get_data(); 
var uid=db_uid("introduction");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.description+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO introduction ( id , title , description ) VALUES (  '"+cg.id+"' , '"+cg.title+"' , '"+cg.description+"' );" );  
 dbdo(SQL,JSO,'introduction','id',cg.id,'insert');   
 introduction_view_result() ;
 
 }
//--FUNC----sp6----------
function introduction_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='introduction_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function introduction_edit(param) {
 clear(); 
 cg=introduction_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"introduction_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.id , a.title , a.description FROM  introduction  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=introduction_start_edit ;
 view_data=introduction_view ;
 end_view_data=introduction_end_edit ;
 dbdata(SQL,"introduction","id",cg.id) ;
 } 

//--FUNC----sp8----------
function introduction_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='introduction_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='introduction_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function introduction_start_edit()
{
 printf("<form method='POST' action='introduction_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='introduction_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='introduction_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function introduction_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 introduction_get_data();
var uid=db_uid("introduction");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.description+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE introduction  SET  id = '"+cg.id+"' ,  title = '"+cg.title+"' ,  description = '"+cg.description+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'introduction','id','"+IDX+"','update');"; 
eval(wherej);
 introduction_view_result() ;
 }
//--FUNC----sp11---------
function introduction_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 introduction_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.description+"\"}";
SQL=sprintf(SQL,"DELETE FROM introduction WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'introduction','id',cg.id,'delete');   
 introduction_view_result() ;
 }
//--FUNC----sp12---------
function introduction_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='introduction_NM +=introduction_NROWS;if(introduction_NM > COUNT) introduction_NM=COUNT; introduction_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='introduction_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='introduction_NM =0; introduction_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='introduction_NM -=introduction_NROWS;if(introduction_NM < 0) introduction_NM=0;  introduction_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='introduction_NM +=introduction_NROWS;if(introduction_NM > COUNT) introduction_NM=COUNT; introduction_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function introduction_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Title\"";
 datapdf += ",";
 datapdf += "\"Description\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("introduction.pdf");
 
}

//--FUNC----sp14---------
function introduction_xmlview ()
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
 dataxs += "\n <h2>introduction</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n <th>Description</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/introduction_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n <td><xsl:value-of select='description'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "introduction.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function introduction_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Introduction \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Description}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "introduction.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function introduction_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "introduction.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function introduction_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Title, ";
 datacs += "Description, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "introduction.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function introduction_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "introduction.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function introduction_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(introduction_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "introduction.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function introduction_importfile(typ)
{
 }

//--FUNC----sp21---------
function introduction_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:introduction_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:introduction_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:introduction_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:introduction_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:introduction_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:introduction_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:introduction_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function introduction_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+introduction_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function introduction ()
{
 if (passcheck(1)==1) return  ; 
 introduction_HEADING="";

 introduction_header ();
 introduction_navi();

 introduction_search ();
 introduction_footer ();
}
//--FUNC----sp24---------
function introduction_work(txtv,tvalv,stypv,heading)

 {
 introduction_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 introduction_TXT=document.getElementById("tx").value ;
 introduction_STYP =document.getElementById("styp").value*1 ;
 introduction_ANDOR =document.getElementById("andor").value*1 ;
 introduction_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 introduction_TXT2=document.getElementById("tx2").value ;
 introduction_STYP2 =document.getElementById("styp2").value*1 ;
 introduction_SEL=document.getElementById("sel").value ;
 introduction_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 introduction_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) introduction_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) introduction_NM +=snos ;

 introduction_navi();

 introduction_search ();
 introduction_footer ();
 }

//--FUNC----sp25---------
function introduction_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_introduction==0) {
 load_data("introduction.zjo","introduction");
 load_data("introduction.json","introduction");
 load_data_del("introduction_del.json","introduction");
LOAD_introduction=1;
 }
 introduction_NM1=introduction_NM;
 
 clear();
 introduction_navi();

 cg=introduction_cg;
 where ="";
 if (introduction_SEL.length)
    {
   sel_search ("", introduction_SEL,"introduction",1);
    }
 if (introduction_SEL_RULE.length)
    {
   sel_search ("", introduction_SEL_RULE,"introduction",1);
    }
 if (introduction_TXT.length)
    {
      if (introduction_CATEGORY== "NIL");

 else if (introduction_CATEGORY == "id")
 where_char ( "id",   introduction_TXT, introduction_STYP,"introduction");
 else if (introduction_CATEGORY == "title")
 where_char ( "title",   introduction_TXT, introduction_STYP,"introduction");
 else if (introduction_CATEGORY == "description")
 where_char ( "description",   introduction_TXT, introduction_STYP,"introduction");
  else  where=" " ;
}
 if (introduction_TXT2.length)
    {
 if (introduction_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (introduction_CATEGORY2== "NIL");

 else if (introduction_CATEGORY2 == "id")
 where2_char ( "id",  introduction_TXT2, introduction_STYP2,"introduction",introduction_ANDOR);
 else if (introduction_CATEGORY2 == "title")
 where2_char ( "title",  introduction_TXT2, introduction_STYP2,"introduction",introduction_ANDOR);
 else if (introduction_CATEGORY2 == "description")
 where2_char ( "description",  introduction_TXT2, introduction_STYP2,"introduction",introduction_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM introduction a  WHERE 1=1 "+where+where2 );
 table_head=introduction_table_head ;
  dbget(SQL,where,"introduction") ;
  introduction_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , title , description FROM introduction a  WHERE 1=1 "+  where + where2 +introduction_SORT+" "+introduction_SORT_ORD+ " LIMIT "+introduction_NROWS+" OFFSET  "+introduction_NM );
 if (DISPCOL==1) {
 display_start=introduction_start_colms ;
 display_rows=introduction_colms ;
 display_end=introduction_end_colms ;
 } else  {
 display_start=introduction_start_rows ;
 display_rows=introduction_rows ;
 display_end=introduction_end_rows ;
 } 
  dbselect(SQL,where,introduction_SORT,introduction_NROWS,introduction_NM,"introduction") ;

 introduction_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function introduction_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell >Sort: <a href='#' onclick='NM=0;introduction_SORT=\" ORDER BY title\" ;sorting(\"title\",\"introduction\") ; introduction_work();' >title</a> * ");
 printf ("<a href='#' onclick='NM=0;introduction_SORT=\" ORDER BY description\" ;sorting(\"description\",\"introduction\") ; introduction_search();' >description</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function introduction_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function introduction_rows(cg)
 {
  ir++ ;
  introduction_NM1++;
 var nnn= introduction_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:introduction_edit(\""+cg.id+"\");'>"+introduction_NM1+". </a></div>");
 printf("<div class=cell><b>" + cg.title + "</b><br>");
 printf("" + decodeh(cg.description) + "</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+introduction_NM1+'\",'
 datap +="\""+decodep(cg.title)+"\"";datap += ',';
 datap +="\""+decodep(cg.description)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+introduction_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.description) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<introduction_entry>";
datax+="<sl_no>"+introduction_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<description>"+cg.description +"</description>";
datax+="</introduction_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.description +"\"";
datat+="\n";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.description +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.description) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function introduction_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function introduction_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function introduction_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= introduction_na;
 introduction_start_colms();
  ir++ ;
  introduction_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:introduction_edit(\""+cg.id+"\");'>"+introduction_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Id</div><div class=cell>" + decodeh(cg.id) + "</div></div>");
 printf("<div  class=row ><div class=cell>Title</div><div class=cell>" + decodeh(cg.title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Description</div><div class=cell>" + decodeh(cg.description) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Id\",\""+decodep(cg.id)+"\"]";datap += ',';
 datap +="[\"Title\",\""+decodep(cg.title)+"\"]";datap += ',';
 datap +="[\"Description\",\""+decodep(cg.description)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+introduction_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.description) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<introduction_entry>";
datax+="<sl_no>"+introduction_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<description>"+cg.description +"</description>";
datax+="</introduction_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.description +"\"";
datat+="\n";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.description +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.description) +"\"";
dataj+="}\n";
 introduction_end_colms();
 }
//--FUNC----sp32---------
function introduction_header()
 {
 var key=introduction_keys;
 var titl=introduction_titl;

clear();

printf ( "<center><h2>Introduction</h2></center>");
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
printf ( "<button type=button  onclick='introduction_NM=0;introduction_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:introduction_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------