//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:17/11/2018
// lending_view() -- sp1
// lending_end_view() -- sp2
// lending_get_data() -- sp3
// lending_new() -- sp4
// lending_insert() -- sp5
// lending_view_result() -- sp6
// lending_edit() -- sp7
// lending_end_edit() -- sp8
// lending_start_edit() -- sp9
// lending_update() -- sp10
// lending_delete() -- sp11
// lending_navi() -- sp12
// lending_pdfview() -- sp13
// lending_xmlview() -- sp14
// lending_rtfview() -- sp16
// lending_txtview() -- sp17
// lending_csvview() -- sp18
// lending_jsonview() -- sp19
// lending_importfile() -- sp20
// lending_footer() -- sp21
// lending_table_head() -- sp22
// lending() -- sp23
// lending_work() -- sp24
// lending_search() -- sp25
// lending_start_rows() -- sp26
// lending_end_rows() -- sp27
// lending_rows() -- sp28
// lending_start_colms() -- sp29
// lending_end_colms() -- sp30
// lending_colms() -- sp31
// lending_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var lendingi="";
var lending_keys=["id","member_id","book_no","issue_date","due_date"];
var lending_typ=["int","int","int","date","date"];
var lending_titl=["Id","Member id","Book no","Issue date","Due date"];
var lending_j={"id":"A","member_id":"B","book_no":"C","issue_date":"D","due_date":"E"};
var lending_init={"A":"0","B":"0","C":"0","D":"01/01/1000","E":"01/01/1000","*":""};
//-----------------------
var navi="", header="" , lending_table="";
var lending_HEADING="";
 var lending_NM1=0,lending_NM=0, lending_NO_OF_ROWS=0,lending_data;
 var lending_TXT="",lending_TXT2="", lending_SORT="",lending_CATEGORY2="",lending_ANDOR=0,lending_STYP2=0;
 var lending_SEL="",lending_SEL_RULE="", lending_SORT_ORD="",lending_CATEGORY="",lending_STYP=0;
 var lending_DATE_FROM="01/01/1000",lending_DATE_TO="01/01/3000", lending_NROWS=20;
 var lending_data, lending_arr=[],lending_del_arr=[],lending_obj2;
var lending_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"*\":\"\"}";
var lending_na ={
 search:"Search"
, id:"Id" 
, member_id:"Member id" 
, book_no:"Book no" 
, issue_date:"Issue date" 
, due_date:"Due date" 
};
var lending_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, member_id:"" 
, book_no:"" 
, issue_date:""+TODAY 
, due_date:""+TODAY 
};
//--FUNC----sp1----------
function lending_view(edit)
 {
 na=lending_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
input(na.id,"id",7,cg.id ) ;
input(na.member_id,"member_id",7,cg.member_id ) ;
input(na.book_no,"book_no",7,cg.book_no ) ;
input(na.issue_date,"issue_date",10,cg.issue_date ) ;
input(na.due_date,"due_date",10,cg.due_date ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function lending_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function lending_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function lending_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.member_id=json_cvt(getvlu("member_id")) ;  
 cg.book_no=json_cvt(getvlu("book_no")) ;  
 cg.issue_date=getdate("issue_date") ;  
 cg.due_date=getdate("due_date") ;  
 }
//--FUNC----sp4----------
function lending_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.member_id="0" ;
  cg.book_no="0" ;
  cg.issue_date=TODAY ;
  cg.due_date=TODAY ;
 form_title("lending") ;
printf ("<form  method='POST' action='lending' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='lending_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("lending","lending","id") ;
 lending_view(1);
 printf("<button name='action' value='insert' type='button' onclick='lending_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function lending_insert() {
if( passcheck(2)==1) return ; 
 lending_get_data(); 
var uid=db_uid("lending");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.member_id+"\",\"C\":\""+cg.book_no+"\",\"D\":\""+cg.issue_date+"\",\"E\":\""+cg.due_date+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO lending ( id , member_id , book_no , issue_date , due_date ) VALUES (  "+atoi(cg.id)+" , "+atoi(cg.member_id)+" , "+atoi(cg.book_no)+" , '"+cg.issue_date+"' , '"+cg.due_date+"' );" );  
 dbdo(SQL,JSO,'lending','id',cg.id,'insert');   
 lending_view_result() ;
 
 }
//--FUNC----sp6----------
function lending_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='lending_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function lending_edit(param) {
 clear(); 
 cg=lending_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
SQL=sprintf(SQL,"SELECT  a.id , a.member_id , a.book_no , %s , %s FROM  lending  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=lending_start_edit ;
 view_data=lending_view ;
 end_view_data=lending_end_edit ;
 dbdata(SQL,"lending","id",cg.id) ;
 } 

//--FUNC----sp8----------
function lending_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='lending_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='lending_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function lending_start_edit()
{
 form_title("lending") ;
 printf("<form method='POST' action='lending_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='lending_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='lending_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function lending_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 lending_get_data();
var uid=db_uid("lending");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.member_id+"\",\"C\":\""+cg.book_no+"\",\"D\":\""+cg.issue_date+"\",\"E\":\""+cg.due_date+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE lending  SET  id = '"+cg.id+"' ,  member_id = '"+cg.member_id+"' ,  book_no = '"+cg.book_no+"' ,  issue_date = '"+cg.issue_date+"' ,  due_date = '"+cg.due_date+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'lending','id','"+IDX+"','update');"; 
eval(wherej);
 lending_view_result() ;
 }
//--FUNC----sp11---------
function lending_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 lending_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.member_id+"\",,\"C\":\""+cg.book_no+"\",,\"D\":\""+cg.issue_date+"\",,\"E\":\""+cg.due_date+"\"}";
SQL=sprintf(SQL,"DELETE FROM lending WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'lending','id',cg.id,'delete');   
 lending_view_result() ;
 }
//--FUNC----sp12---------
function lending_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='lending_NM +=lending_NROWS;if(lending_NM > COUNT) lending_NM=COUNT; lending_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='lending_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='lending_NM =0; lending_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='lending_NM -=lending_NROWS;if(lending_NM < 0) lending_NM=0;  lending_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='lending_NM +=lending_NROWS;if(lending_NM > COUNT) lending_NM=COUNT; lending_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function lending_pdfview ()
{
var  datapdf ="";
 datapdf += "[\"No.\",";
 datapdf += "\"Member id\"";
 datapdf += ",";
 datapdf += "\"Book no\"";
 datapdf += ",";
 datapdf += "\"Issue date\"";
 datapdf += ",";
 datapdf += "\"Due date\"";
 datapdf += "], ";
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("lending.pdf");
 
}

//--FUNC----sp14---------
function lending_xmlview ()
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
 dataxs += "\n <h2>lending</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Member id</th> ";
 dataxs += "\n <th>Book no</th> ";
 dataxs += "\n <th>Issue date</th> ";
 dataxs += "\n <th>Due date</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/lending_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='member_id'/></td> ";
 dataxs += "\n <td><xsl:value-of select='book_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='issue_date'/></td> ";
 dataxs += "\n <td><xsl:value-of select='due_date'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "lending.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function lending_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Book lending \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Member id}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Book no}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Issue date}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Due date}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "lending.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function lending_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "lending.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function lending_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Member id, ";
 datacs += "Book no, ";
 datacs += "Issue date, ";
 datacs += "Due date, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "lending.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function lending_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "lending.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function lending_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(lending_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "lending.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function lending_importfile(typ)
{
 }

//--FUNC----sp21---------
function lending_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:lending_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:lending_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:lending_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:lending_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:lending_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:lending_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:if(lending_SEL.length >0) cg.member_id=lending_SEL;lending_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function lending_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+lending_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function lending ()
{
 if (passcheck(1)==1) return  ; 
 lending_HEADING="";

 lending_header ();
 lending_navi();

 lending_search ();
 lending_footer ();
}
//--FUNC----sp24---------
function lending_work(txtv,tvalv,stypv,heading)

 {
 lending_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 lending_TXT=document.getElementById("tx").value ;
 lending_STYP =document.getElementById("styp").value*1 ;
 lending_ANDOR =document.getElementById("andor").value*1 ;
 lending_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 lending_TXT2=document.getElementById("tx2").value ;
 lending_STYP2 =document.getElementById("styp2").value*1 ;
 lending_SEL=document.getElementById("sel").value ;
 lending_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 lending_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) lending_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) lending_NM +=snos ;

 lending_navi();

 lending_search ();
 lending_footer ();
 }

//--FUNC----sp25---------
function lending_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_lending==0) {
 load_data("lending.zjo","lending");
 load_data("lending.json","lending");
 load_data_del("lending_del.json","lending");
LOAD_lending=1;
 }
 lending_NM1=lending_NM;
 
 clear();
 lending_navi();

 cg=lending_cg;
 where ="";
 if (lending_SEL.length)
    {
   sel_search ("member_id", lending_SEL,"lending",1);
    }
 if (lending_SEL_RULE.length)
    {
   sel_search ("", lending_SEL_RULE,"lending",1);
    }
 if (lending_TXT.length)
    {
      if (lending_CATEGORY== "NIL");

 else if (lending_CATEGORY == "id")
 where_int ( "id",  lending_TXT, lending_STYP,"lending");
 else if (lending_CATEGORY == "member_id")
 where_int ( "member_id",  lending_TXT, lending_STYP,"lending");
 else if (lending_CATEGORY == "book_no")
 where_int ( "book_no",  lending_TXT, lending_STYP,"lending");
 else if (lending_CATEGORY == "issue_date")
 where_date ( "issue_date",  lending_TXT, lending_STYP,"lending");
 else if (lending_CATEGORY == "due_date")
 where_date ( "due_date",  lending_TXT, lending_STYP,"lending");
  else  where=" " ;
}
 if (lending_TXT2.length)
    {
 if (lending_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (lending_CATEGORY2== "NIL");

 else if (lending_CATEGORY2 == "id")
 where2_int ( "id",   lending_TXT2, lending_STYP2,"lending",lending_ANDOR);
 else if (lending_CATEGORY2 == "member_id")
 where2_int ( "member_id",   lending_TXT2, lending_STYP2,"lending",lending_ANDOR);
 else if (lending_CATEGORY2 == "book_no")
 where2_int ( "book_no",   lending_TXT2, lending_STYP2,"lending",lending_ANDOR);
 else if (lending_CATEGORY2 == "issue_date")
 where2_date ( "issue_date",   lending_TXT2, lending_STYP2,"lending",lending_ANDOR);
 else if (lending_CATEGORY2 == "due_date")
 where2_date ( "due_date",   lending_TXT2, lending_STYP2,"lending",lending_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM lending a  WHERE 1=1 "+where+where2 );
 table_head=lending_table_head ;
  dbget(SQL,where,"lending") ;
  lending_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , member_id , book_no , %s , %s FROM lending a  WHERE 1=1 "+  where + where2 +lending_SORT+" "+lending_SORT_ORD+ " LIMIT "+lending_NROWS+" OFFSET  "+lending_NM );
 if (DISPCOL==1) {
 display_start=lending_start_colms ;
 display_rows=lending_colms ;
 display_end=lending_end_colms ;
 } else  {
 display_start=lending_start_rows ;
 display_rows=lending_rows ;
 display_end=lending_end_rows ;
 } 
  dbselect(SQL,where,lending_SORT,lending_NROWS,lending_NM,"lending") ;

 lending_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function lending_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;lending_SORT=\" ORDER BY member_id\" ;sorting(\"member_id\",\"lending\") ; lending_work();' >Member id</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;lending_SORT=\" ORDER BY book_no\" ;sorting(\"book_no\",\"lending\") ; lending_work();' >Book no</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;lending_SORT=\" ORDER BY issue_date\" ;sorting(\"issue_date\",\"lending\") ; lending_work();' >Issue date</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;lending_SORT=\" ORDER BY due_date\" ;sorting(\"due_date\",\"lending\") ; lending_work();' >Due date</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function lending_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function lending_rows(cg)
 {
  ir++ ;
  lending_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:lending_edit(\""+cg.id+"\");'>"+lending_NM1+". </a></div>");

var res=dbgetname("members","A",cg.id);
var nam="";
if(res)
nam =", <b>" + res.B +"</b>" ;

 printf("<div class=cell>" + cg.member_id +nam+ "</div>");

 res=dbgetname("book_data","A",cg.book_no);


 res=dbgetname("book_details","A",res.B);
 nam="";
if(res)
nam =", <b>" + res.B +"</b>" ;

 printf("<div class=cell>" + cg.book_no +nam+ "</div>");
 printf("<div class=cell>" + cg.issue_date + "</div>");
 printf("<div class=cell>" + cg.due_date + "</div>");

 


printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+lending_NM1+'\",'
 datap +="\""+cg.member_id+"\"";datap += ',';
 datap +="\""+cg.book_no+"\"";datap += ',';
 datap +="\""+cg.issue_date+"\"";datap += ',';
 datap +="\""+cg.due_date+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+lending_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.member_id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.book_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.issue_date) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.due_date) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<lending_entry>";
datax+="<sl_no>"+lending_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<member_id>"+cg.member_id +"</member_id>";
datax+="<book_no>"+cg.book_no +"</book_no>";
datax+="<issue_date>"+cg.issue_date +"</issue_date>";
datax+="<due_date>"+cg.due_date +"</due_date>";
datax+="</lending_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.member_id +"\"";
datac+=",";
datac+="\""+cg.book_no +"\"";
datac+=",";
datac+="\""+cg.issue_date +"\"";
datac+=",";
datac+="\""+cg.due_date +"\"";
datat+="\n";
datat+=""+cg.member_id +"";
datat+=",";
datat+=""+cg.book_no +"";
datat+=",";
datat+=""+cg.issue_date +"";
datat+=",";
datat+=""+cg.due_date +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.member_id) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.book_no) +"\"";
dataj+=",";
dataj+="\"D\":\""+date2julian(cg.issue_date) +"\"";
dataj+=",";
dataj+="\"E\":\""+date2julian(cg.due_date) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function lending_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function lending_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function lending_colms(cg)
 {
  ir++ ;
  lending_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:lending_edit(\""+cg.id+"\");'>"+lending_NM1+". </a><br>");
 printf(" " + cg.id + "<br>");
 printf(" " + cg.member_id + "<br>");
 printf(" " + cg.book_no + "<br>");
 printf(" " + cg.issue_date + "<br>");
 printf(" " + cg.due_date + "<br>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+lending_NM1+'\",'
 datap +="\""+cg.member_id+"\"";datap += ',';
 datap +="\""+cg.book_no+"\"";datap += ',';
 datap +="\""+cg.issue_date+"\"";datap += ',';
 datap +="\""+cg.due_date+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+lending_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.member_id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.book_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.issue_date) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.due_date) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<lending_entry>";
datax+="<sl_no>"+lending_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<member_id>"+cg.member_id +"</member_id>";
datax+="<book_no>"+cg.book_no +"</book_no>";
datax+="<issue_date>"+cg.issue_date +"</issue_date>";
datax+="<due_date>"+cg.due_date +"</due_date>";
datax+="</lending_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.member_id +"\"";
datac+=",";
datac+="\""+cg.book_no +"\"";
datac+=",";
datac+="\""+cg.issue_date +"\"";
datac+=",";
datac+="\""+cg.due_date +"\"";
datat+="\n";
datat+=""+cg.member_id +"";
datat+=",";
datat+=""+cg.book_no +"";
datat+=",";
datat+=""+cg.issue_date +"";
datat+=",";
datat+=""+cg.due_date +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.member_id) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.book_no) +"\"";
dataj+=",";
dataj+="\"D\":\""+date2julian(cg.issue_date) +"\"";
dataj+=",";
dataj+="\"E\":\""+date2julian(cg.due_date) +"\"";
dataj+="}\n";
 }
//--FUNC----sp32---------
function lending_header()
 {
 var key=lending_keys;
 var titl=lending_titl;

clear();

printf ( "<center><h3>lending</h3></center>");
printf ( "<table id=t6  class='rt' width=100%%>");
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
printf ( "<br><button type=button  onclick='lending_NM=0;lending_work();'><font size=+2>Search</font></button> ");
printf ( " <input type=text value='' name=sel size=10 id=sel>");
printf ( " <input type=hidden  value='' name=sel_rule size=10 id=sel_rule>");
printf ( " <input  type=button  class=btn onClick='javascript:if(lending_SEL.length >0) cg.member_id=lending_SEL;lending_new();'  value='New Entry' >");
printf ( "  <input type=button class=btn onClick='javascript:hide_adv();'  value='More Options' >");
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
printf ( "</td></tr></table>");
 refresh ("heading");
 hide_adv ();
 }

//----------------------------
