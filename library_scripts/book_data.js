//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:17/11/2018
// book_data_view() -- sp1
// book_data_end_view() -- sp2
// book_data_get_data() -- sp3
// book_data_new() -- sp4
// book_data_insert() -- sp5
// book_data_view_result() -- sp6
// book_data_edit() -- sp7
// book_data_end_edit() -- sp8
// book_data_start_edit() -- sp9
// book_data_update() -- sp10
// book_data_delete() -- sp11
// book_data_navi() -- sp12
// book_data_pdfview() -- sp13
// book_data_xmlview() -- sp14
// book_data_rtfview() -- sp16
// book_data_txtview() -- sp17
// book_data_csvview() -- sp18
// book_data_jsonview() -- sp19
// book_data_importfile() -- sp20
// book_data_footer() -- sp21
// book_data_table_head() -- sp22
// book_data() -- sp23
// book_data_work() -- sp24
// book_data_search() -- sp25
// book_data_start_rows() -- sp26
// book_data_end_rows() -- sp27
// book_data_rows() -- sp28
// book_data_start_colms() -- sp29
// book_data_end_colms() -- sp30
// book_data_colms() -- sp31
// book_data_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var book_datai="";
var book_data_keys=["accession_no","call_no","reference","notes","price","edition_year","cover_type","date_purchased","supplier","currency","shelf_row","media"];
var book_data_typ=["int4","varchar(20)","int2","varchar(200)","float4","int2","varchar(20)","date","varchar(40)","varchar(20)","int4","varchar(50)"];
var book_data_titl=["Accession no","Call no","Reference","Notes","Price","Edition year","Cover type","Date purchased","Supplier","Currency","Shelf row","Media"];
var book_data_j={"accession_no":"A","call_no":"B","reference":"C","notes":"D","price":"E","edition_year":"F","cover_type":"G","date_purchased":"H","supplier":"I","currency":"J","shelf_row":"K","media":"L"};
var book_data_init={"A":"0","B":"","C":"0","D":"","E":"0","F":"0","G":"","H":"01/01/1000","I":"","J":"","K":"0","L":"","*":""};
//-----------------------
var navi="", header="" , book_data_table="";
var book_data_HEADING="";
 var book_data_NM1=0,book_data_NM=0, book_data_NO_OF_ROWS=0,book_data_data;
 var book_data_TXT="",book_data_TXT2="", book_data_SORT="",book_data_CATEGORY2="",book_data_ANDOR=0,book_data_STYP2=0;
 var book_data_SEL="",book_data_SEL_RULE="", book_data_SORT_ORD="",book_data_CATEGORY="",book_data_STYP=0;
 var book_data_DATE_FROM="01/01/1000",book_data_DATE_TO="01/01/3000", book_data_NROWS=20;
 var book_data_data, book_data_arr=[],book_data_del_arr=[],book_data_obj2;
var book_data_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"I\":\"\",\"J\":\"\",\"K\":\"\",\"L\":\"\",\"*\":\"\"}";
var book_data_na ={
 search:"Search"
, accession_no:"Accession no" 
, call_no:"Call no" 
, reference:"Reference" 
, notes:"Notes" 
, price:"Price" 
, edition_year:"Edition year" 
, cover_type:"Cover type" 
, date_purchased:"Date purchased" 
, supplier:"Supplier" 
, currency:"Currency" 
, shelf_row:"Shelf row" 
, media:"Media" 
};
var book_data_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, accession_no:"" 
, call_no:"" 
, reference:"" 
, notes:"" 
, price:"" 
, edition_year:"" 
, cover_type:"" 
, date_purchased:""+TODAY 
, supplier:"" 
, currency:"" 
, shelf_row:"" 
, media:"" 
};
//--FUNC----sp1----------
function book_data_view(edit)
 {
 na=book_data_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.accession_no ) ;
input(na.accession_no,"accession_no",7,cg.accession_no ) ;
input(na.call_no,"call_no",70,cg.call_no ) ;
input(na.reference,"reference",7,cg.reference ) ;
input(na.notes,"notes",70,cg.notes ) ;
input(na.price,"price",7,cg.price ) ;
input(na.edition_year,"edition_year",7,cg.edition_year ) ;
input(na.cover_type,"cover_type",70,cg.cover_type ) ;
input(na.date_purchased,"date_purchased",10,cg.date_purchased ) ;
input(na.supplier,"supplier",70,cg.supplier ) ;
input(na.currency,"currency",70,cg.currency ) ;
input(na.shelf_row,"shelf_row",7,cg.shelf_row ) ;
input(na.media,"media",70,cg.media ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function book_data_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function book_data_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function book_data_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.accession_no=json_cvt(getvlu("accession_no")) ;  
 cg.call_no=json_cvt(getvlu("call_no")) ;  
 cg.reference=json_cvt(getvlu("reference")) ;  
 cg.notes=json_cvt(getvlu("notes")) ;  
 cg.price=json_cvt(getvlu("price")) ;  
 cg.edition_year=json_cvt(getvlu("edition_year")) ;  
 cg.cover_type=json_cvt(getvlu("cover_type")) ;  
 cg.date_purchased=getdate("date_purchased") ;  
 cg.supplier=json_cvt(getvlu("supplier")) ;  
 cg.currency=json_cvt(getvlu("currency")) ;  
 cg.shelf_row=json_cvt(getvlu("shelf_row")) ;  
 cg.media=json_cvt(getvlu("media")) ;  
 }
//--FUNC----sp4----------
function book_data_new()

 {
// ------------------------------
 clear();
  cg.accession_no="0" ;
  cg.call_no=book_data_SEL; 
  cg.reference="0" ;
  cg.notes=""; 
  cg.price=""; 
  cg.edition_year="0" ;
  cg.cover_type=""; 
  cg.date_purchased=TODAY ;
  cg.supplier=""; 
  cg.currency=""; 
  cg.shelf_row="0" ;
  cg.media=""; 
 form_title("book_data") ;
printf ("<form  method='POST' action='book_data' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='book_data_insert();' ><b>INSERT</b></button>");
 cg.accession_no  =db_new_id("book_data","book_data","accession_no") ;
 book_data_view(1);
 printf("<button name='action' value='insert' type='button' onclick='book_data_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function book_data_insert() {
if( passcheck(2)==1) return ; 
 book_data_get_data(); 
var uid=db_uid("book_data");
 JSO="{\"A\":\""+cg.accession_no+"\",\"B\":\""+cg.call_no+"\",\"C\":\""+cg.reference+"\",\"D\":\""+cg.notes+"\",\"E\":\""+cg.price+"\",\"F\":\""+cg.edition_year+"\",\"G\":\""+cg.cover_type+"\",\"H\":\""+cg.date_purchased+"\",\"I\":\""+cg.supplier+"\",\"J\":\""+cg.currency+"\",\"K\":\""+cg.shelf_row+"\",\"L\":\""+cg.media+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO book_data ( accession_no , call_no , reference , notes , price , edition_year , cover_type , date_purchased , supplier , currency , shelf_row , media ) VALUES (  "+atoi(cg.accession_no)+" , '"+cg.call_no+"' , '"+cg.reference+"' , '"+cg.notes+"' , "+atof(cg.price)+" , '"+cg.edition_year+"' , '"+cg.cover_type+"' , '"+cg.date_purchased+"' , '"+cg.supplier+"' , '"+cg.currency+"' , "+atoi(cg.shelf_row)+" , '"+cg.media+"' );" );  
 dbdo(SQL,JSO,'book_data','accession_no',cg.accession_no,'insert');   
 book_data_view_result() ;
 
 }
//--FUNC----sp6----------
function book_data_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='book_data_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function book_data_edit(param) {
 clear(); 
 cg=book_data_cg;
 var arr=param.split(","); 
if(arr[0]) cg.accession_no=arr[0];
SQL=sprintf(SQL,"SELECT  a.accession_no , a.call_no , a.reference , a.notes , a.price , a.edition_year , a.cover_type , %s , a.supplier , a.currency , a.shelf_row , a.media FROM  book_data  a   WHERE    accession_no ='"+ cg.accession_no +"'  ;"  );
 start_view_data=book_data_start_edit ;
 view_data=book_data_view ;
 end_view_data=book_data_end_edit ;
 dbdata(SQL,"book_data","accession_no",cg.accession_no) ;
 } 

//--FUNC----sp8----------
function book_data_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='book_data_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='book_data_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function book_data_start_edit()
{
 form_title("book_data") ;
 printf("<form method='POST' action='book_data_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='book_data_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='book_data_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function book_data_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.accession_no=arr[0];
 book_data_get_data();
var uid=db_uid("book_data");
 JSO="{\"A\":\""+cg.accession_no+"\",\"B\":\""+cg.call_no+"\",\"C\":\""+cg.reference+"\",\"D\":\""+cg.notes+"\",\"E\":\""+cg.price+"\",\"F\":\""+cg.edition_year+"\",\"G\":\""+cg.cover_type+"\",\"H\":\""+cg.date_purchased+"\",\"I\":\""+cg.supplier+"\",\"J\":\""+cg.currency+"\",\"K\":\""+cg.shelf_row+"\",\"L\":\""+cg.media+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE book_data  SET  accession_no = '"+cg.accession_no+"' ,  call_no = '"+cg.call_no+"' ,  reference = '"+cg.reference+"' ,  notes = '"+cg.notes+"' ,  price = '"+cg.price+"' ,  edition_year = '"+cg.edition_year+"' ,  cover_type = '"+cg.cover_type+"' ,  date_purchased = '"+cg.date_purchased+"' ,  supplier = '"+cg.supplier+"' ,  currency = '"+cg.currency+"' ,  shelf_row = '"+cg.shelf_row+"' ,  media = '"+cg.media+"'  WHERE accession_no='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'book_data','accession_no','"+IDX+"','update');"; 
eval(wherej);
 book_data_view_result() ;
 }
//--FUNC----sp11---------
function book_data_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.accession_no=arr[0];
 book_data_get_data();
 var IDX=sprintf(IDX,"cg.accession_no" ) ;
 JSO="{\"A\":\""+cg.accession_no+"\",,\"B\":\""+cg.call_no+"\",,\"C\":\""+cg.reference+"\",,\"D\":\""+cg.notes+"\",,\"E\":\""+cg.price+"\",,\"F\":\""+cg.edition_year+"\",,\"G\":\""+cg.cover_type+"\",,\"H\":\""+cg.date_purchased+"\",,\"I\":\""+cg.supplier+"\",,\"J\":\""+cg.currency+"\",,\"K\":\""+cg.shelf_row+"\",,\"L\":\""+cg.media+"\"}";
SQL=sprintf(SQL,"DELETE FROM book_data WHERE  accession_no ='"+ cg.accession_no +"'    " ) ;
 dbdo(SQL,JSO,'book_data','accession_no',cg.accession_no,'delete');   
 book_data_view_result() ;
 }
//--FUNC----sp12---------
function book_data_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='book_data_NM +=book_data_NROWS;if(book_data_NM > COUNT) book_data_NM=COUNT; book_data_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='book_data_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='book_data_NM =0; book_data_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='book_data_NM -=book_data_NROWS;if(book_data_NM < 0) book_data_NM=0;  book_data_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='book_data_NM +=book_data_NROWS;if(book_data_NM > COUNT) book_data_NM=COUNT; book_data_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function book_data_pdfview ()
{

var  datapdf ="";
 datapdf += "[\"No.\",";
 datapdf += "\"Call No.,Accession No.\"";
// datapdf += ",";
// datapdf += "\"Call no\"";
 datapdf += ",";
 datapdf += "\"Title";
 datapdf += ",";
 datapdf += " Author\"";
 datapdf += "], ";


load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("book_data.pdf");
 
}

//--FUNC----sp14---------
function book_data_xmlview ()
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
 dataxs += "\n <h2>book_data</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Accession no</th> ";
 dataxs += "\n <th>Call no</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/book_data_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='accession_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='call_no'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "book_data.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function book_data_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 List Of books \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Accession no}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Call no}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "book_data.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function book_data_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "book_data.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function book_data_csvview ()
{
 var datacs="" ;
 datacs += "Accession no, ";
 datacs += "Call no, ";
 datacs += "Reference, ";
 datacs += "Notes, ";
 datacs += "Price, ";
 datacs += "Edition year, ";
 datacs += "Cover type, ";
 datacs += "Date purchased, ";
 datacs += "Supplier, ";
 datacs += "Currency, ";
 datacs += "Shelf row, ";
 datacs += "Media, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "book_data.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function book_data_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "book_data.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function book_data_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(book_data_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "book_data.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function book_data_importfile(typ)
{
 }

//--FUNC----sp21---------
function book_data_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:book_data_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:book_data_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:book_data_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:book_data_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:book_data_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:book_data_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:if(book_data_SEL.length >0) cg.call_no=book_data_SEL;book_data_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function book_data_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+book_data_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function book_data ()
{
 if (passcheck(1)==1) return  ; 
 book_data_HEADING="";

 book_data_header ();
 book_data_navi();

 book_data_search ();
 book_data_footer ();
}
//--FUNC----sp24---------
function book_data_work(txtv,tvalv,stypv,heading)

 {
 book_data_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 book_data_TXT=document.getElementById("tx").value ;
 book_data_STYP =document.getElementById("styp").value*1 ;
 book_data_ANDOR =document.getElementById("andor").value*1 ;
 book_data_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 book_data_TXT2=document.getElementById("tx2").value ;
 book_data_STYP2 =document.getElementById("styp2").value*1 ;
 book_data_SEL=document.getElementById("sel").value ;
 book_data_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 book_data_DATE_FROM=document.getElementById("date_from").value ;
 book_data_DATE_TO=document.getElementById("date_to").value ;
 book_data_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) book_data_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) book_data_NM +=snos ;

 book_data_navi();

 book_data_search ();
 book_data_footer ();
 }

//--FUNC----sp25---------
function book_data_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_book_data==0) {
 load_data("book_data.zjo","book_data");
 load_data("book_data.json","book_data");
 load_data_del("book_data_del.json","book_data");
LOAD_book_data=1;
 }
 book_data_NM1=book_data_NM;
 
 clear();
 book_data_navi();

 cg=book_data_cg;
 where ="";
 if (book_data_DATE_FROM.length)
    {
   date_search (book_data_DATE_FROM, book_data_DATE_TO,"date_purchased","book_data");
    }
 if (book_data_SEL.length)
    {
   sel_search ("call_no", book_data_SEL,"book_data",1);
    }
 if (book_data_SEL_RULE.length)
    {
   sel_search ("", book_data_SEL_RULE,"book_data",1);
    }
 if (book_data_TXT.length)
    {
      if (book_data_CATEGORY== "NIL");

 else if (book_data_CATEGORY == "accession_no")
 where_int ( "accession_no",  book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "call_no")
 where_char ( "call_no",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "reference")
 where_char ( "reference",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "notes")
 where_char ( "notes",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "price")
 where_char ( "price",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "edition_year")
 where_char ( "edition_year",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "cover_type")
 where_char ( "cover_type",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "date_purchased")
 where_date ( "date_purchased",  book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "supplier")
 where_char ( "supplier",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "currency")
 where_char ( "currency",   book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "shelf_row")
 where_int ( "shelf_row",  book_data_TXT, book_data_STYP,"book_data");
 else if (book_data_CATEGORY == "media")
 where_char ( "media",   book_data_TXT, book_data_STYP,"book_data");
  else  where=" " ;
}
 if (book_data_TXT2.length)
    {
 if (book_data_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (book_data_CATEGORY2== "NIL");

 else if (book_data_CATEGORY2 == "accession_no")
 where2_int ( "accession_no",   book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "call_no")
 where2_char ( "call_no",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "reference")
 where2_char ( "reference",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "notes")
 where2_char ( "notes",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "price")
 where2_char ( "price",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "edition_year")
 where2_char ( "edition_year",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "cover_type")
 where2_char ( "cover_type",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "date_purchased")
 where2_date ( "date_purchased",   book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "supplier")
 where2_char ( "supplier",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "currency")
 where2_char ( "currency",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "shelf_row")
 where2_int ( "shelf_row",   book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
 else if (book_data_CATEGORY2 == "media")
 where2_char ( "media",  book_data_TXT2, book_data_STYP2,"book_data",book_data_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM book_data a  WHERE 1=1 "+where+where2 );
 table_head=book_data_table_head ;
  dbget(SQL,where,"book_data") ;
  book_data_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  accession_no , call_no , reference , notes , price , edition_year , cover_type , %s , supplier , currency , shelf_row , media FROM book_data a  WHERE 1=1 "+  where + where2 +book_data_SORT+" "+book_data_SORT_ORD+ " LIMIT "+book_data_NROWS+" OFFSET  "+book_data_NM );
 if (DISPCOL==1) {
 display_start=book_data_start_colms ;
 display_rows=book_data_colms ;
 display_end=book_data_end_colms ;
 } else  {
 display_start=book_data_start_rows ;
 display_rows=book_data_rows ;
 display_end=book_data_end_rows ;
 } 
  dbselect(SQL,where,book_data_SORT,book_data_NROWS,book_data_NM,"book_data") ;

 book_data_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function book_data_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell >Sort: <a href='#' onclick='NM=0;book_data_SORT=\" ORDER BY accession_no\" ;sorting(\"accession_no\",\"book_data\") ; book_data_work();' >accession_no</a> * ");
 printf ("<a href='#' onclick='NM=0;book_data_SORT=\" ORDER BY call_no\" ;sorting(\"call_no\",\"book_data\") ; book_data_search();' >call_no</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function book_data_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function book_data_rows(cg)
 {
  ir++ ;
  book_data_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:book_data_edit(\""+cg.accession_no+"\");'>"+book_data_NM1+". </a></div>");
 printf("<div class=cell><b>" + cg.accession_no + "</b>");
 printf("  Class No." + cg.call_no + "<br>");

 
 var res=dbgetname("book_details","A",cg.call_no);
if(res)
printf("<b>" + res.B +"</b><br><i>Author:</i>"+res.C + "");

 printf("</div></div>");
 
 if(ir >1) datap +=',';
 datap +='[{\"qr\":\"'+cg.accession_no+'\",\"fit\":\"59\"},'
 datap +="{\"text\":\""+cg.call_no+"";
datap += '\\n';
 datap +=""+cg.accession_no+"\",\"fontSize\":\"18\",\"margin\":[5,5,5,5]}";

datap += ',';
 datap +="\""+res.B+"";

datap += '\\n';
 datap +=""+res.C+"\"";
 datap +=']';

 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+book_data_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.accession_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.call_no) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<book_data_entry>";
datax+="<sl_no>"+book_data_NM1 +"</sl_no>";
datax+="<accession_no>"+cg.accession_no +"</accession_no>";
datax+="<call_no>"+cg.call_no +"</call_no>";
datax+="<reference>"+cg.reference +"</reference>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="<price>"+cg.price +"</price>";
datax+="<edition_year>"+cg.edition_year +"</edition_year>";
datax+="<cover_type>"+cg.cover_type +"</cover_type>";
datax+="<date_purchased>"+cg.date_purchased +"</date_purchased>";
datax+="<supplier>"+cg.supplier +"</supplier>";
datax+="<currency>"+cg.currency +"</currency>";
datax+="<shelf_row>"+cg.shelf_row +"</shelf_row>";
datax+="<media>"+cg.media +"</media>";
datax+="</book_data_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.accession_no +"\"";
datac+=",";
datac+="\""+cg.call_no +"\"";
datac+=",";
datac+="\""+cg.reference +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datac+=",";
datac+="\""+cg.price +"\"";
datac+=",";
datac+="\""+cg.edition_year +"\"";
datac+=",";
datac+="\""+cg.cover_type +"\"";
datac+=",";
datac+="\""+cg.date_purchased +"\"";
datac+=",";
datac+="\""+cg.supplier +"\"";
datac+=",";
datac+="\""+cg.currency +"\"";
datac+=",";
datac+="\""+cg.shelf_row +"\"";
datac+=",";
datac+="\""+cg.media +"\"";
datat+="\n";
datat+=""+cg.accession_no +"";
datat+=",";
datat+=""+cg.call_no +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.accession_no) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.call_no) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.reference) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.notes) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.price) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.edition_year) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.cover_type) +"\"";
dataj+=",";
dataj+="\"H\":\""+date2julian(cg.date_purchased) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.supplier) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.currency) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.shelf_row) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.media) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function book_data_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function book_data_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function book_data_colms(cg)
 {
  ir++ ;
  book_data_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:book_data_edit(\""+cg.accession_no+"\");'>"+book_data_NM1+". </a><br>");
 printf(" " + cg.accession_no + "<br>");
 printf(" " + cg.call_no + "<br>");
 printf(" " + cg.reference + "<br>");
 printf(" " + cg.notes + "<br>");
 printf(" " + cg.price + "<br>");
 printf(" " + cg.edition_year + "<br>");
 printf(" " + cg.cover_type + "<br>");
 printf(" " + cg.date_purchased + "<br>");
 printf(" " + cg.supplier + "<br>");
 printf(" " + cg.currency + "<br>");
 printf(" " + cg.shelf_row + "<br>");
 printf(" " + cg.media + "<br>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+book_data_NM1+'\",'
 datap +="\""+cg.accession_no+"\"";datap += ',';
 datap +="\""+cg.call_no+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+book_data_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.accession_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.call_no) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<book_data_entry>";
datax+="<sl_no>"+book_data_NM1 +"</sl_no>";
datax+="<accession_no>"+cg.accession_no +"</accession_no>";
datax+="<call_no>"+cg.call_no +"</call_no>";
datax+="<reference>"+cg.reference +"</reference>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="<price>"+cg.price +"</price>";
datax+="<edition_year>"+cg.edition_year +"</edition_year>";
datax+="<cover_type>"+cg.cover_type +"</cover_type>";
datax+="<date_purchased>"+cg.date_purchased +"</date_purchased>";
datax+="<supplier>"+cg.supplier +"</supplier>";
datax+="<currency>"+cg.currency +"</currency>";
datax+="<shelf_row>"+cg.shelf_row +"</shelf_row>";
datax+="<media>"+cg.media +"</media>";
datax+="</book_data_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.accession_no +"\"";
datac+=",";
datac+="\""+cg.call_no +"\"";
datac+=",";
datac+="\""+cg.reference +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datac+=",";
datac+="\""+cg.price +"\"";
datac+=",";
datac+="\""+cg.edition_year +"\"";
datac+=",";
datac+="\""+cg.cover_type +"\"";
datac+=",";
datac+="\""+cg.date_purchased +"\"";
datac+=",";
datac+="\""+cg.supplier +"\"";
datac+=",";
datac+="\""+cg.currency +"\"";
datac+=",";
datac+="\""+cg.shelf_row +"\"";
datac+=",";
datac+="\""+cg.media +"\"";
datat+="\n";
datat+=""+cg.accession_no +"";
datat+=",";
datat+=""+cg.call_no +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.accession_no) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.call_no) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.reference) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.notes) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.price) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.edition_year) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.cover_type) +"\"";
dataj+=",";
dataj+="\"H\":\""+date2julian(cg.date_purchased) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.supplier) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.currency) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.shelf_row) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.media) +"\"";
dataj+="}\n";
 }
//--FUNC----sp32---------
function book_data_header()
 {
 var key=book_data_keys;
 var titl=book_data_titl;

clear();

printf ( "<center><h2>Books List</h2></center>");
printf ( "<div id=serh><table id=t6  class='rt' width=100%%>");
printf ( " ");
printf ( "<tr><td >Date <br>From<input type=text  value='' name=date_from size=7 id=date_from  class=datepicker >");
printf ( "To<input type=text  value='' name=date_to size=7 id=date_to  class=datepicker></td></tr>");
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


printf ( "  <a  href='javascript:hide_adv();'  > More Options </a>");
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

printf ( "<button type=button  onclick='book_data_NM=0;book_data_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");

printf ( " * <a href='javascript:if(book_data_SEL.length >0) cg.call_no=book_data_SEL;book_data_new();'>  New Entry </a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------
