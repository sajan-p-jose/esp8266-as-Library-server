//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// shelf_view() -- sp1
// shelf_end_view() -- sp2
// shelf_get_data() -- sp3
// shelf_new() -- sp4
// shelf_insert() -- sp5
// shelf_view_result() -- sp6
// shelf_edit() -- sp7
// shelf_end_edit() -- sp8
// shelf_start_edit() -- sp9
// shelf_update() -- sp10
// shelf_delete() -- sp11
// shelf_navi() -- sp12
// shelf_pdfview() -- sp13
// shelf_xmlview() -- sp14
// shelf_rtfview() -- sp16
// shelf_txtview() -- sp17
// shelf_csvview() -- sp18
// shelf_jsonview() -- sp19
// shelf_importfile() -- sp20
// shelf_footer() -- sp21
// shelf_table_head() -- sp22
// shelf() -- sp23
// shelf_work() -- sp24
// shelf_search() -- sp25
// shelf_start_rows() -- sp26
// shelf_end_rows() -- sp27
// shelf_rows() -- sp28
// shelf_start_colms() -- sp29
// shelf_end_colms() -- sp30
// shelf_colms() -- sp31
// shelf_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var shelfi="";
var shelf_keys=["id","title","classification","location","notes"];
var shelf_typ=["int","varchar(300)","varchar(300)","varchar(300)","varchar(300)"];
var shelf_titl=["Id","Title","Classification","Location","Notes"];
var shelf_j={"id":"A","title":"B","classification":"C","location":"D","notes":"E"};
var shelf_init={"A":"0","B":"","C":"","D":"","E":"","*":""};
//-----------------------
var navi="", header="" , shelf_table="";
var shelf_HEADING="";
 var shelf_NM1=0,shelf_NM=0, shelf_NO_OF_ROWS=0,shelf_data;
 var shelf_TXT="",shelf_TXT2="", shelf_SORT="",shelf_CATEGORY2="",shelf_ANDOR=0,shelf_STYP2=0;
 var shelf_SEL="",shelf_SEL_RULE="", shelf_SORT_ORD="",shelf_CATEGORY="",shelf_STYP=0;
 var shelf_DATE_FROM="01/01/1000",shelf_DATE_TO="01/01/3000", shelf_NROWS=20;
 var shelf_data, shelf_arr=[],shelf_del_arr=[],shelf_obj2;
var shelf_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"*\":\"\"}";
var shelf_na ={
 search:"Search"
, id:"Id" 
, title:"Title" 
, classification:"Classification" 
, location:"Location" 
, notes:"Notes" 
};
var shelf_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, title:"" 
, classification:"" 
, location:"" 
, notes:"" 
};
//--FUNC----sp1----------
function shelf_view(edit)
 {
 na=shelf_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
input(na.id,"id",7,cg.id ) ;
input(na.title,"title",70,cg.title ) ;
input(na.classification,"classification",70,cg.classification ) ;
input(na.location,"location",70,cg.location ) ;
input(na.notes,"notes",70,cg.notes ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function shelf_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function shelf_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function shelf_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.classification=json_cvt(getvlu("classification")) ;  
 cg.location=json_cvt(getvlu("location")) ;  
 cg.notes=json_cvt(getvlu("notes")) ;  
 }
//--FUNC----sp4----------
function shelf_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.title=""; 
  cg.classification=""; 
  cg.location=""; 
  cg.notes=""; 
printf ("<form  method='POST' action='shelf' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='shelf_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("shelf","shelf","id") ;
 shelf_view(1);
 printf("<button name='action' value='insert' type='button' onclick='shelf_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function shelf_insert() {
if( passcheck(2)==1) return ; 
 shelf_get_data(); 
var uid=db_uid("shelf");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.classification+"\",\"D\":\""+cg.location+"\",\"E\":\""+cg.notes+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO shelf ( id , title , classification , location , notes ) VALUES (  "+atoi(cg.id)+" , '"+cg.title+"' , '"+cg.classification+"' , '"+cg.location+"' , '"+cg.notes+"' );" );  
 dbdo(SQL,JSO,'shelf','id',cg.id,'insert');   
 shelf_view_result() ;
 
 }
//--FUNC----sp6----------
function shelf_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='shelf_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function shelf_edit(param) {
 clear(); 
 cg=shelf_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"shelf_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.id , a.title , a.classification , a.location , a.notes FROM  shelf  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=shelf_start_edit ;
 view_data=shelf_view ;
 end_view_data=shelf_end_edit ;
 dbdata(SQL,"shelf","id",cg.id) ;
 } 

//--FUNC----sp8----------
function shelf_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='shelf_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='shelf_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function shelf_start_edit()
{
 printf("<form method='POST' action='shelf_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='shelf_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='shelf_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function shelf_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 shelf_get_data();
var uid=db_uid("shelf");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.classification+"\",\"D\":\""+cg.location+"\",\"E\":\""+cg.notes+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE shelf  SET  id = '"+cg.id+"' ,  title = '"+cg.title+"' ,  classification = '"+cg.classification+"' ,  location = '"+cg.location+"' ,  notes = '"+cg.notes+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'shelf','id','"+IDX+"','update');"; 
eval(wherej);
 shelf_view_result() ;
 }
//--FUNC----sp11---------
function shelf_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 shelf_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.classification+"\",,\"D\":\""+cg.location+"\",,\"E\":\""+cg.notes+"\"}";
SQL=sprintf(SQL,"DELETE FROM shelf WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'shelf','id',cg.id,'delete');   
 shelf_view_result() ;
 }
//--FUNC----sp12---------
function shelf_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='shelf_NM +=shelf_NROWS;if(shelf_NM > COUNT) shelf_NM=COUNT; shelf_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='shelf_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='shelf_NM =0; shelf_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='shelf_NM -=shelf_NROWS;if(shelf_NM < 0) shelf_NM=0;  shelf_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='shelf_NM +=shelf_NROWS;if(shelf_NM > COUNT) shelf_NM=COUNT; shelf_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function shelf_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Id\"";
 datapdf += ",";
 datapdf += "\"Title\"";
 datapdf += ",";
 datapdf += "\"Classification\"";
 datapdf += ",";
 datapdf += "\"Location\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("shelf.pdf");
 
}

//--FUNC----sp14---------
function shelf_xmlview ()
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
 dataxs += "\n <h2>shelf</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Id</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n <th>Classification</th> ";
 dataxs += "\n <th>Location</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/shelf_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='id'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n <td><xsl:value-of select='classification'/></td> ";
 dataxs += "\n <td><xsl:value-of select='location'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "shelf.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function shelf_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Shelf list \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Id}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Classification}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Location}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "shelf.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function shelf_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "shelf.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function shelf_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Title, ";
 datacs += "Classification, ";
 datacs += "Location, ";
 datacs += "Notes, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "shelf.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function shelf_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "shelf.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function shelf_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(shelf_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "shelf.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function shelf_importfile(typ)
{
 }

//--FUNC----sp21---------
function shelf_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:shelf_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:shelf_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:shelf_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:shelf_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:shelf_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:shelf_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:shelf_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function shelf_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+shelf_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function shelf ()
{
 if (passcheck(1)==1) return  ; 
 shelf_HEADING="";

 shelf_header ();
 shelf_navi();

 shelf_search ();
 shelf_footer ();
}
//--FUNC----sp24---------
function shelf_work(txtv,tvalv,stypv,heading)

 {
 shelf_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 shelf_TXT=document.getElementById("tx").value ;
 shelf_STYP =document.getElementById("styp").value*1 ;
 shelf_ANDOR =document.getElementById("andor").value*1 ;
 shelf_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 shelf_TXT2=document.getElementById("tx2").value ;
 shelf_STYP2 =document.getElementById("styp2").value*1 ;
 shelf_SEL=document.getElementById("sel").value ;
 shelf_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 shelf_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) shelf_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) shelf_NM +=snos ;

 shelf_navi();

 shelf_search ();
 shelf_footer ();
 }

//--FUNC----sp25---------
function shelf_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_shelf==0) {
 load_data("shelf.zjo","shelf");
 load_data("shelf.json","shelf");
 load_data_del("shelf_del.json","shelf");
LOAD_shelf=1;
 }
 shelf_NM1=shelf_NM;
 
 clear();
 shelf_navi();

 cg=shelf_cg;
 where ="";
 if (shelf_SEL.length)
    {
   sel_search ("", shelf_SEL,"shelf",1);
    }
 if (shelf_SEL_RULE.length)
    {
   sel_search ("", shelf_SEL_RULE,"shelf",1);
    }
 if (shelf_TXT.length)
    {
      if (shelf_CATEGORY== "NIL");

 else if (shelf_CATEGORY == "id")
 where_int ( "id",  shelf_TXT, shelf_STYP,"shelf");
 else if (shelf_CATEGORY == "title")
 where_char ( "title",   shelf_TXT, shelf_STYP,"shelf");
 else if (shelf_CATEGORY == "classification")
 where_char ( "classification",   shelf_TXT, shelf_STYP,"shelf");
 else if (shelf_CATEGORY == "location")
 where_char ( "location",   shelf_TXT, shelf_STYP,"shelf");
 else if (shelf_CATEGORY == "notes")
 where_char ( "notes",   shelf_TXT, shelf_STYP,"shelf");
  else  where=" " ;
}
 if (shelf_TXT2.length)
    {
 if (shelf_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (shelf_CATEGORY2== "NIL");

 else if (shelf_CATEGORY2 == "id")
 where2_int ( "id",   shelf_TXT2, shelf_STYP2,"shelf",shelf_ANDOR);
 else if (shelf_CATEGORY2 == "title")
 where2_char ( "title",  shelf_TXT2, shelf_STYP2,"shelf",shelf_ANDOR);
 else if (shelf_CATEGORY2 == "classification")
 where2_char ( "classification",  shelf_TXT2, shelf_STYP2,"shelf",shelf_ANDOR);
 else if (shelf_CATEGORY2 == "location")
 where2_char ( "location",  shelf_TXT2, shelf_STYP2,"shelf",shelf_ANDOR);
 else if (shelf_CATEGORY2 == "notes")
 where2_char ( "notes",  shelf_TXT2, shelf_STYP2,"shelf",shelf_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM shelf a  WHERE 1=1 "+where+where2 );
 table_head=shelf_table_head ;
  dbget(SQL,where,"shelf") ;
  shelf_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , title , classification , location , notes FROM shelf a  WHERE 1=1 "+  where + where2 +shelf_SORT+" "+shelf_SORT_ORD+ " LIMIT "+shelf_NROWS+" OFFSET  "+shelf_NM );
 if (DISPCOL==1) {
 display_start=shelf_start_colms ;
 display_rows=shelf_colms ;
 display_end=shelf_end_colms ;
 } else  {
 display_start=shelf_start_rows ;
 display_rows=shelf_rows ;
 display_end=shelf_end_rows ;
 } 
  dbselect(SQL,where,shelf_SORT,shelf_NROWS,shelf_NM,"shelf") ;

 shelf_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function shelf_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;shelf_SORT=\" ORDER BY id\" ;sorting(\"id\",\"shelf\") ; shelf_work();' >Id</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;shelf_SORT=\" ORDER BY title\" ;sorting(\"title\",\"shelf\") ; shelf_work();' >Title</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;shelf_SORT=\" ORDER BY classification\" ;sorting(\"classification\",\"shelf\") ; shelf_work();' >Classification</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;shelf_SORT=\" ORDER BY location\" ;sorting(\"location\",\"shelf\") ; shelf_work();' >Location</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function shelf_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function shelf_rows(cg)
 {
  ir++ ;
  shelf_NM1++;
 var nnn= shelf_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:shelf_edit(\""+cg.id+"\");'>"+shelf_NM1+". </a></div>");
 printf("<div class=cell><a href='javascript:DISPCOL=1;shelf_NROWS=1;shelf_NM="+nnn+"; shelf_search();'>" + decodeh(cg.id) + "</a></div>");
 printf("<div class=cell>" + decodeh(cg.title) + "</div>");
 printf("<div class=cell>" + decodeh(cg.classification) + "</div>");
 printf("<div class=cell>" + decodeh(cg.location) + "</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+shelf_NM1+'\",'
 datap +="\""+decodep(cg.id)+"\"";datap += ',';
 datap +="\""+decodep(cg.title)+"\"";datap += ',';
 datap +="\""+decodep(cg.classification)+"\"";datap += ',';
 datap +="\""+decodep(cg.location)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+shelf_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.classification) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.location) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<shelf_entry>";
datax+="<sl_no>"+shelf_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<classification>"+cg.classification +"</classification>";
datax+="<location>"+cg.location +"</location>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="</shelf_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.classification +"\"";
datac+=",";
datac+="\""+cg.location +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.classification +"";
datat+=",";
datat+=""+cg.location +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.classification) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.location) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.notes) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function shelf_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function shelf_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function shelf_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= shelf_na;
 shelf_start_colms();
  ir++ ;
  shelf_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:shelf_edit(\""+cg.id+"\");'>"+shelf_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Id</div><div class=cell>" + decodeh(cg.id) + "</div></div>");
 printf("<div  class=row ><div class=cell>Title</div><div class=cell>" + decodeh(cg.title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Classification</div><div class=cell>" + decodeh(cg.classification) + "</div></div>");
 printf("<div  class=row ><div class=cell>Location</div><div class=cell>" + decodeh(cg.location) + "</div></div>");
 printf("<div  class=row ><div class=cell>Notes</div><div class=cell>" + decodeh(cg.notes) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Id\",\""+decodep(cg.id)+"\"]";datap += ',';
 datap +="[\"Title\",\""+decodep(cg.title)+"\"]";datap += ',';
 datap +="[\"Classification\",\""+decodep(cg.classification)+"\"]";datap += ',';
 datap +="[\"Location\",\""+decodep(cg.location)+"\"]";datap += ',';
 datap +="[\"Notes\",\""+decodep(cg.notes)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+shelf_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.classification) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.location) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<shelf_entry>";
datax+="<sl_no>"+shelf_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<classification>"+cg.classification +"</classification>";
datax+="<location>"+cg.location +"</location>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="</shelf_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.classification +"\"";
datac+=",";
datac+="\""+cg.location +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.classification +"";
datat+=",";
datat+=""+cg.location +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.classification) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.location) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.notes) +"\"";
dataj+="}\n";
 shelf_end_colms();
 }
//--FUNC----sp32---------
function shelf_header()
 {
 var key=shelf_keys;
 var titl=shelf_titl;

clear();

printf ( "<center><h2>Shelf list</h2></center>");
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
printf ( "<button type=button  onclick='shelf_NM=0;shelf_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:shelf_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------