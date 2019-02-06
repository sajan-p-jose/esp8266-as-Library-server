//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:19/09/2018
// books_view() -- sp1
// books_end_view() -- sp2
// books_get_data() -- sp3
// books_new() -- sp4
// books_insert() -- sp5
// books_view_result() -- sp6
// books_edit() -- sp7
// books_end_edit() -- sp8
// books_start_edit() -- sp9
// books_update() -- sp10
// books_delete() -- sp11
// books_navi() -- sp12
// books_pdfview() -- sp13
// books_xmlview() -- sp14
// books_rtfview() -- sp16
// books_txtview() -- sp17
// books_csvview() -- sp18
// books_jsonview() -- sp19
// books_importfile() -- sp20
// books_footer() -- sp21
// books_table_head() -- sp22
// books() -- sp23
// books_work() -- sp24
// books_search() -- sp25
// books_start_rows() -- sp26
// books_end_rows() -- sp27
// books_rows() -- sp28
// books_start_colms() -- sp29
// books_end_colms() -- sp30
// books_colms() -- sp31
// books_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var booksi="";
var book_details_keys=["call_no","title","author","year_published","isbn","pubid","notes","subject","title_mal","place_of_publication","translator","copyright_year","pages","indexed","bibliography","foot_note","issn","series"];
var book_details_typ=["varchar(50)","varchar(1000)","varchar(500)","int2","varchar(50)","varchar(200)","varchar(1000)","varchar(50)","varchar(150)","varchar(200)","varchar(200)","int2","int2","int2","int2","int2","varchar(30)","varchar(100)"];
var book_details_titl=["Call no","Title","Author","Year published","Isbn","Pubid","Notes","Subject","Title mal","Place of publication","Translator","Copyright year","Pages","Indexed","Bibliography","Foot note","Issn","Series"];
var book_details_j={"call_no":"A","title":"B","author":"C","year_published":"D","isbn":"E","pubid":"F","notes":"G","subject":"H","title_mal":"I","place_of_publication":"J","translator":"K","copyright_year":"L","pages":"M","indexed":"N","bibliography":"O","foot_note":"P","issn":"Q","series":"R"};
var book_details_init={"A":"","B":"","C":"","D":"0","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"0","M":"0","N":"0","O":"0","P":"0","Q":"","R":"","*":""};
//-----------------------
var navi="", header="" , books_table="";
var books_HEADING="Books";
 var books_NM1=0,books_NM=0, books_NO_OF_ROWS=0,book_details_data;
 var books_TXT="",books_TXT2="", books_SORT="",books_CATEGORY2="",books_ANDOR=0,books_STYP2=0;
 var books_SEL="",books_SEL_RULE="", books_SORT_ORD="",books_CATEGORY="",books_STYP=0;
 var books_DATE_FROM="01/01/1000",books_DATE_TO="01/01/3000", books_NROWS=20;
 var book_details_data, book_details_arr=[],book_details_del_arr=[],book_details_obj2;
var book_details_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"I\":\"\",\"J\":\"\",\"K\":\"\",\"L\":\"\",\"M\":\"\",\"N\":\"\",\"O\":\"\",\"P\":\"\",\"Q\":\"\",\"R\":\"\",\"*\":\"\"}";
var books_na ={
 search:"Search"
, call_no:"Call no" 
, title:"Title" 
, author:"Author" 
, year_published:"Year published" 
, isbn:"Isbn" 
, pubid:"Pubid" 
, notes:"Notes" 
, subject:"Subject" 
, title_mal:"Title mal" 
, place_of_publication:"Place of publication" 
, translator:"Translator" 
, copyright_year:"Copyright year" 
, pages:"Pages" 
, indexed:"Indexed" 
, bibliography:"Bibliography" 
, foot_note:"Foot note" 
, issn:"Issn" 
, series:"Series" 
};
var books_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, call_no:"" 
, title:"" 
, author:"" 
, year_published:"" 
, isbn:"" 
, pubid:"" 
, notes:"" 
, subject:"" 
, title_mal:"" 
, place_of_publication:"" 
, translator:"" 
, copyright_year:"" 
, pages:"" 
, indexed:"" 
, bibliography:"" 
, foot_note:"" 
, issn:"" 
, series:"" 
};
//--FUNC----sp1----------
function books_view(edit)
 {
 na=books_na;
printf("<br>Book entry in two sections, <br> 1.Entry of title, aurhor etc. (This window) and <br> 2. Enter accession no (Serial No) etc. (after inserting this )");
printf("<table class=entry  width=100% >") ;

printf("<tr><td colspan=5>Call No (Classification No) =subject code + space + First three letters of Author + hyphen+ One letter from  Title ( Eg: 200 SIV-K ), + space+ Volume No </td><tr>");
input("","dummy",0,cg.call_no ) ;
input(na.call_no,"call_no",30,cg.call_no ) ;
input(na.title,"title",71,cg.title ) ;
input(na.author,"author",71,cg.author ) ;
input(na.year_published,"year_published",7,cg.year_published ) ;
input(na.isbn,"isbn",70,cg.isbn ) ;
input(na.pubid,"pubid",70,cg.pubid ) ;
input(na.notes,"notes",70,cg.notes ) ;
input(na.subject,"subject",71,cg.subject ) ;
input(na.title_mal,"title_mal",70,cg.title_mal ) ;
input(na.place_of_publication,"place_of_publication",71,cg.place_of_publication ) ;
input(na.translator,"translator",71,cg.translator ) ;
input(na.copyright_year,"copyright_year",7,cg.copyright_year ) ;
input(na.pages,"pages",7,cg.pages ) ;
input(na.indexed,"indexed",1,cg.indexed ) ;
input(na.bibliography,"bibliography",1,cg.bibliography ) ;
input(na.foot_note,"foot_note",1,cg.foot_note ) ;
input(na.issn,"issn",70,cg.issn ) ;
input(na.series,"series",70,cg.series ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function books_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function books_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function books_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.call_no=json_cvt(getvlu("call_no")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.author=json_cvt(getvlu("author")) ;  
 cg.year_published=json_cvt(getvlu("year_published")) ;  
 cg.isbn=json_cvt(getvlu("isbn")) ;  
 cg.pubid=json_cvt(getvlu("pubid")) ;  
 cg.notes=json_cvt(getvlu("notes")) ;  
 cg.subject=json_cvt(getvlu("subject")) ;  
 cg.title_mal=json_cvt(getvlu("title_mal")) ;  
 cg.place_of_publication=json_cvt(getvlu("place_of_publication")) ;  
 cg.translator=json_cvt(getvlu("translator")) ;  
 cg.copyright_year=json_cvt(getvlu("copyright_year")) ;  
 cg.pages=json_cvt(getvlu("pages")) ;  
 cg.indexed=json_cvt(getvlu("indexed")) ;  
 cg.bibliography=json_cvt(getvlu("bibliography")) ;  
 cg.foot_note=json_cvt(getvlu("foot_note")) ;  
 cg.issn=json_cvt(getvlu("issn")) ;  
 cg.series=json_cvt(getvlu("series")) ;  
 }
//--FUNC----sp4----------
function books_new()

 {
// ------------------------------
 clear();
  cg.call_no=""; 
  cg.title=""; 
  cg.author=""; 
  cg.year_published="0" ;
  cg.isbn=""; 
  cg.pubid=""; 
  cg.notes=""; 
  cg.subject=""; 
  cg.title_mal=""; 
  cg.place_of_publication=""; 
  cg.translator=""; 
  cg.copyright_year="0" ;
  cg.pages="0" ;
  cg.indexed="n" ;
  cg.bibliography="n" ;
  cg.foot_note="n" ;
  cg.issn=""; 
  cg.series=""; 
 form_title("books") ;
printf ("<form  method='POST' action='books' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='books_insert();' ><b>INSERT</b></button>");
 books_view(1);
 printf("<button name='action' value='insert' type='button' onclick='books_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function books_insert() {
if( passcheck(2)==1) return ; 
 books_get_data(); 

var uid=db_uid("book_details");
//,\"*\":\""+uid+"\" |,"*":""

 JSO="{\"A\":\""+cg.call_no+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.author+"\",\"D\":\""+cg.year_published+"\",\"E\":\""+cg.isbn+"\",\"F\":\""+cg.pubid+"\",\"G\":\""+cg.notes+"\",\"H\":\""+cg.subject+"\",\"I\":\""+cg.title_mal+"\",\"J\":\""+cg.place_of_publication+"\",\"K\":\""+cg.translator+"\",\"L\":\""+cg.copyright_year+"\",\"M\":\""+cg.pages+"\",\"N\":\""+cg.indexed+"\",\"O\":\""+cg.bibliography+"\",\"P\":\""+cg.foot_note+"\",\"Q\":\""+cg.issn+"\",\"R\":\""+cg.series+"\",\"*\":\""+uid+"\"}";

  SQL=sprintf_enc (SQL," INSERT INTO book_details ( call_no , title , author , year_published , isbn , pubid , notes , subject , title_mal , place_of_publication , translator , copyright_year , pages , indexed , bibliography , foot_note , issn , series ) VALUES (  '"+cg.call_no+"' , '"+cg.title+"' , '"+cg.author+"' , '"+cg.year_published+"' , '"+cg.isbn+"' , '"+cg.pubid+"' , '"+cg.notes+"' , '"+cg.subject+"' , '"+cg.title_mal+"' , '"+cg.place_of_publication+"' , '"+cg.translator+"' , '"+cg.copyright_year+"' , '"+cg.pages+"' , '"+cg.indexed+"' , '"+cg.bibliography+"' , '"+cg.foot_note+"' , '"+cg.issn+"' , '"+cg.series+"' );" );  
printf("j"+JSO);


dbdo(SQL,JSO,'book_details','call_no',cg.call_no,'insert');   


books_view_result() ;
 
 }
//--FUNC----sp6----------
function books_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
book_data_SEL=cg.call_no ;

 printf (" <div ><a href='#' onclick='book_data_new();'><font size=+1>New Book - Accession. No.(Serial No.) Entry </font> </a>  ");


 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='books_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function books_edit(param) {
 clear(); 
 cg=books_cg;
 var arr=param.split(","); 
if(arr[0]) cg.call_no=arr[0];
SQL=sprintf(SQL,"SELECT  a.call_no , a.title , a.author , a.year_published , a.isbn , a.pubid , a.notes , a.subject , a.title_mal , a.place_of_publication , a.translator , a.copyright_year , a.pages , a.indexed , a.bibliography , a.foot_note , a.issn , a.series FROM  book_details  a   WHERE    call_no ='"+ cg.call_no +"'  ;"  );
 start_view_data=books_start_edit ;
 view_data=books_view ;
 end_view_data=books_end_edit ;
 dbdata(SQL,"book_details","call_no",cg.call_no) ;
 } 

//--FUNC----sp8----------
function books_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='books_update(\""+cg.call_no+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='books_delete(\""+cg.call_no+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function books_start_edit()
{
 form_title("books") ;
 printf("<form method='POST' action='books_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='books_update(\""+cg.call_no+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='books_delete(\""+cg.call_no+"\");' ><b>Delete</b></button>");

book_data_SEL=cg.call_no ;
 printf ("  * <a href='#' onclick='book_data_new();'><font size=+0>New Book - Acc. No. Entry </font> </a>");
 } 
//--FUNC----sp10---------
function books_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.call_no=arr[0];
 books_get_data();

var uid=db_uid("book_details");
//,\"*\":\""+uid+"\"

 JSO="{\"A\":\""+cg.call_no+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.author+"\",\"D\":\""+cg.year_published+"\",\"E\":\""+cg.isbn+"\",\"F\":\""+cg.pubid+"\",\"G\":\""+cg.notes+"\",\"H\":\""+cg.subject+"\",\"I\":\""+cg.title_mal+"\",\"J\":\""+cg.place_of_publication+"\",\"K\":\""+cg.translator+"\",\"L\":\""+cg.copyright_year+"\",\"M\":\""+cg.pages+"\",\"N\":\""+cg.indexed+"\",\"O\":\""+cg.bibliography+"\",\"P\":\""+cg.foot_note+"\",\"Q\":\""+cg.issn+"\",\"R\":\""+cg.series+"\",\"*\":\""+uid+"\"}";
 SQL= sprintf_enc(SQL,"  UPDATE book_details  SET  call_no = '"+cg.call_no+"' ,  title = '"+cg.title+"' ,  author = '"+cg.author+"' ,  year_published = '"+cg.year_published+"' ,  isbn = '"+cg.isbn+"' ,  pubid = '"+cg.pubid+"' ,  notes = '"+cg.notes+"' ,  subject = '"+cg.subject+"' ,  title_mal = '"+cg.title_mal+"' ,  place_of_publication = '"+cg.place_of_publication+"' ,  translator = '"+cg.translator+"' ,  copyright_year = '"+cg.copyright_year+"' ,  pages = '"+cg.pages+"' ,  indexed = '"+cg.indexed+"' ,  bibliography = '"+cg.bibliography+"' ,  foot_note = '"+cg.foot_note+"' ,  issn = '"+cg.issn+"' ,  series = '"+cg.series+"'  WHERE call_no='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'book_details','call_no','"+IDX+"','update');"; 
eval(wherej);
 books_view_result() ;
 }
//--FUNC----sp11---------
function books_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.call_no=arr[0];
 books_get_data();
 var IDX=sprintf(IDX,"cg.call_no" ) ;
 JSO="{\"A\":\""+cg.call_no+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.author+"\",,\"D\":\""+cg.year_published+"\",,\"E\":\""+cg.isbn+"\",,\"F\":\""+cg.pubid+"\",,\"G\":\""+cg.notes+"\",,\"H\":\""+cg.subject+"\",,\"I\":\""+cg.title_mal+"\",,\"J\":\""+cg.place_of_publication+"\",,\"K\":\""+cg.translator+"\",,\"L\":\""+cg.copyright_year+"\",,\"M\":\""+cg.pages+"\",,\"N\":\""+cg.indexed+"\",,\"O\":\""+cg.bibliography+"\",,\"P\":\""+cg.foot_note+"\",,\"Q\":\""+cg.issn+"\",,\"R\":\""+cg.series+"\"}";
SQL=sprintf(SQL,"DELETE FROM book_details WHERE  call_no ='"+ cg.call_no +"'    " ) ;
 dbdo(SQL,JSO,'book_details','call_no',cg.call_no,'delete');   
 books_view_result() ;
 }
//--FUNC----sp12---------
function books_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='books_NM +=books_NROWS;if(books_NM > COUNT) books_NM=COUNT; books_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='books_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='books_NM =0; books_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='books_NM -=books_NROWS;if(books_NM < 0) books_NM=0;  books_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='books_NM +=books_NROWS;if(books_NM > COUNT) books_NM=COUNT; books_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function books_pdfview ()
{
var  datapdf ="";
 datapdf += "[\"No.\",";
 datapdf += "\"Call no\"";
 datapdf += ",";
 datapdf += "\"Title\"";
datapdf += ",";
 datapdf += "\"Author\"";
 datapdf += "], ";
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("books.pdf");
 
}

//--FUNC----sp14---------
function books_xmlview ()
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
 dataxs += "\n <h2>books</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Call no</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n <th>Author</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/book_details_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='call_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n <td><xsl:value-of select='author'/></td> ";

 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "book_details.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function books_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Books \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx10000";

datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Call no}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Author}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "books.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function books_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "books.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function books_csvview ()
{
 var datacs="" ;
 datacs += "Call no, ";
 datacs += "Title, ";
 datacs += "Author, ";
 datacs += "Year published, ";
 datacs += "Isbn, ";
 datacs += "Pubid, ";
 datacs += "Notes, ";
 datacs += "Subject, ";
 datacs += "Title mal, ";
 datacs += "Place of publication, ";
 datacs += "Translator, ";
 datacs += "Copyright year, ";
 datacs += "Pages, ";
 datacs += "Indexed, ";
 datacs += "Bibliography, ";
 datacs += "Foot note, ";
 datacs += "Issn, ";
 datacs += "Series, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "book_details.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function books_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "book_details.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function books_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(book_details_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "book_details.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function books_importfile(typ)
{
 }

//--FUNC----sp21---------
function books_footer()
 {
clear();

printf ( "<div class=row> <div class=celln><a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln> <a href='javascript:if(books_SEL.length >0) cg.call_no=books_SEL;books_new();' >New Entry</a></div>");
printf ( "</div><div class=row>  <div class=celln> <a href='javascript:books_xmlview();' download >XML</a></div>");
printf ( " <div class=celln> <a href='javascript:books_rtfview();' >DOC</a></div>");

printf ( " <div class=celln> <a href='javascript:books_csvview();' download >CSV</a></div>");
printf ( " <div class=celln> <a href='javascript:books_pdfview();' >PDF</a></div>");


printf ( " <div class=celln> <a href='javascript:books_jsonview();' download >Json</a></div>");
printf ( " <div class=celln> <a href='javascript:books_txtview();' >TXT</a></div>");
printf ( " </div>");

//printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function books_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+books_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function books ()
{
 if (passcheck(1)==1) return  ; 
 books_HEADING="";

 books_header ();
 books_navi();

 books_search ();
 books_footer ();
}
//--FUNC----sp24---------
function books_work(txtv,tvalv,stypv,heading)

 {
 books_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 books_TXT=document.getElementById("tx").value ;
 books_STYP =document.getElementById("styp").value*1 ;
 books_ANDOR =document.getElementById("andor").value*1 ;
 books_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 books_TXT2=document.getElementById("tx2").value ;
 books_STYP2 =document.getElementById("styp2").value*1 ;
 books_SEL=document.getElementById("sel").value ;
 books_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 books_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) books_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) books_NM +=snos ;

 books_navi();

 books_search ();
 books_footer ();
 }

//--FUNC----sp25---------
function books_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_book_details==0) {
 load_data("book_details.zjo","book_details");
 load_data("book_details.json","book_details");
 load_data_del("book_details_del.json","book_details");
LOAD_book_details=1;
 }
 books_NM1=books_NM;
 
 clear();
 books_navi();

 cg=books_cg;
 where ="";
 if (books_SEL.length)
    {
   sel_search ("call_no", books_SEL,"book_details",1);
    }
 if (books_SEL_RULE.length)
    {
   sel_search ("", books_SEL_RULE,"book_details",1);
    }
 if (books_TXT.length)
    {
      if (books_CATEGORY== "NIL");

 else if (books_CATEGORY == "call_no")
 where_char ( "call_no",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "title")
 where_char ( "title",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "author")
 where_char ( "author",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "year_published")
 where_char ( "year_published",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "isbn")
 where_char ( "isbn",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "pubid")
 where_char ( "pubid",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "notes")
 where_char ( "notes",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "subject")
 where_char ( "subject",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "title_mal")
 where_char ( "title_mal",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "place_of_publication")
 where_char ( "place_of_publication",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "translator")
 where_char ( "translator",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "copyright_year")
 where_char ( "copyright_year",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "pages")
 where_char ( "pages",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "indexed")
 where_char ( "indexed",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "bibliography")
 where_char ( "bibliography",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "foot_note")
 where_char ( "foot_note",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "issn")
 where_char ( "issn",   books_TXT, books_STYP,"book_details");
 else if (books_CATEGORY == "series")
 where_char ( "series",   books_TXT, books_STYP,"book_details");
  else  where=" " ;
}
 if (books_TXT2.length)
    {
 if (books_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (books_CATEGORY2== "NIL");

 else if (books_CATEGORY2 == "call_no")
 where2_char ( "call_no",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "title")
 where2_char ( "title",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "author")
 where2_char ( "author",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "year_published")
 where2_char ( "year_published",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "isbn")
 where2_char ( "isbn",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "pubid")
 where2_char ( "pubid",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "notes")
 where2_char ( "notes",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "subject")
 where2_char ( "subject",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "title_mal")
 where2_char ( "title_mal",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "place_of_publication")
 where2_char ( "place_of_publication",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "translator")
 where2_char ( "translator",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "copyright_year")
 where2_char ( "copyright_year",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "pages")
 where2_char ( "pages",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "indexed")
 where2_char ( "indexed",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "bibliography")
 where2_char ( "bibliography",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "foot_note")
 where2_char ( "foot_note",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "issn")
 where2_char ( "issn",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
 else if (books_CATEGORY2 == "series")
 where2_char ( "series",  books_TXT2, books_STYP2,"book_details",books_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM book_details a  WHERE 1=1 "+where+where2 );
 table_head=books_table_head ;
  dbget(SQL,where,"book_details") ;
  books_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  call_no , title , author , year_published , isbn , pubid , notes , subject , title_mal , place_of_publication , translator , copyright_year , pages , indexed , bibliography , foot_note , issn , series FROM book_details a  WHERE 1=1 "+  where + where2 +books_SORT+" "+books_SORT_ORD+ " LIMIT "+books_NROWS+" OFFSET  "+books_NM );
 if (DISPCOL==1) {
 display_start=books_start_colms ;
 display_rows=books_colms ;
 display_end=books_end_colms ;
 } else  {
 display_start=books_start_rows ;
 display_rows=books_rows ;
 display_end=books_end_rows ;
 } 
  dbselect(SQL,where,books_SORT,books_NROWS,books_NM,"book_details") ;

 books_footer ();
// d3.selectAll("#rows,b,font").style("opacity","0").transition().style("opacity", "1").duration(500);


 }
// ---------------------
//--FUNC----sp26---------
function books_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell >Sort: <a href='#' onclick='NM=0;books_SORT=\" ORDER BY call_no\" ;sorting(\"call_no\",\"book_details\") ; books_work();' >call_no</a> * ");
 printf ("<a href='#' onclick='NM=0;books_SORT=\" ORDER BY title\" ;sorting(\"title\",\"book_details\") ; books_search();' >title</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function books_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function books_rows(cg)
 {
  ir++ ;
  books_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:books_edit(\""+cg.call_no+"\");'>"+books_NM1+". </a></div>");
// printf("<div class=cell><b>" + cg.call_no + "</b><br>");
 //printf("" + cg.title + "</div>");

display_book(cg.title,cg.author,cg.call_no,cg.year_published,cg.pubid);

 show_link("book_data",cg.call_no,"Status");


printf("</div>");
 
 if(ir >1) datap  +=',';
 datap +='[\"'+books_NM1+'\",'
 datap +="\""+cg.call_no+"\"";
datap += ',';
 datap +="\""+cg.title+"\"";
datap += ',';
 datap +="\""+cg.author+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx10000";
datar+="\n{\\pard\\intbl\\ql { "+books_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.call_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}"; 

datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.author) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<book_details_entry>";
datax+="<sl_no>"+books_NM1 +"</sl_no>";
datax+="<call_no>"+cg.call_no +"</call_no>";
datax+="<title>"+cg.title +"</title>";
datax+="<author>"+cg.author +"</author>";
datax+="<year_published>"+cg.year_published +"</year_published>";
datax+="<isbn>"+cg.isbn +"</isbn>";
datax+="<pubid>"+cg.pubid +"</pubid>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="<subject>"+cg.subject +"</subject>";
datax+="<title_mal>"+cg.title_mal +"</title_mal>";
datax+="<place_of_publication>"+cg.place_of_publication +"</place_of_publication>";
datax+="<translator>"+cg.translator +"</translator>";
datax+="<copyright_year>"+cg.copyright_year +"</copyright_year>";
datax+="<pages>"+cg.pages +"</pages>";
datax+="<indexed>"+cg.indexed +"</indexed>";
datax+="<bibliography>"+cg.bibliography +"</bibliography>";
datax+="<foot_note>"+cg.foot_note +"</foot_note>";
datax+="<issn>"+cg.issn +"</issn>";
datax+="<series>"+cg.series +"</series>";
datax+="</book_details_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.call_no +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.author +"\"";
datac+=",";
datac+="\""+cg.year_published +"\"";
datac+=",";
datac+="\""+cg.isbn +"\"";
datac+=",";
datac+="\""+cg.pubid +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datac+=",";
datac+="\""+cg.subject +"\"";
datac+=",";
datac+="\""+cg.title_mal +"\"";
datac+=",";
datac+="\""+cg.place_of_publication +"\"";
datac+=",";
datac+="\""+cg.translator +"\"";
datac+=",";
datac+="\""+cg.copyright_year +"\"";
datac+=",";
datac+="\""+cg.pages +"\"";
datac+=",";
datac+="\""+cg.indexed +"\"";
datac+=",";
datac+="\""+cg.bibliography +"\"";
datac+=",";
datac+="\""+cg.foot_note +"\"";
datac+=",";
datac+="\""+cg.issn +"\"";
datac+=",";
datac+="\""+cg.series +"\"";
datat+="\n";
datat+=""+cg.call_no +"";
datat+=",";
datat+=""+cg.title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.call_no) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.author) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.year_published) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.isbn) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.pubid) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.notes) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.subject) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.title_mal) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.place_of_publication) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.translator) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.copyright_year) +"\"";
dataj+=",";
dataj+="\"M\":\""+json_cvt(cg.pages) +"\"";
dataj+=",";
dataj+="\"N\":\""+json_cvt(cg.indexed) +"\"";
dataj+=",";
dataj+="\"O\":\""+json_cvt(cg.bibliography) +"\"";
dataj+=",";
dataj+="\"P\":\""+json_cvt(cg.foot_note) +"\"";
dataj+=",";
dataj+="\"Q\":\""+json_cvt(cg.issn) +"\"";
dataj+=",";
dataj+="\"R\":\""+json_cvt(cg.series) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function books_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function books_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function books_colms(cg)
 {
  ir++ ;
  books_NM1++;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:books_edit(\""+cg.call_no+"\");'>"+books_NM1+". </a><br>");
 printf(" " + cg.call_no + "<br>");
 printf(" " + cg.title + "<br>");
 printf(" " + cg.author + "<br>");
 printf(" " + cg.year_published + "<br>");
 printf(" " + cg.isbn + "<br>");
 printf(" " + cg.pubid + "<br>");
 printf(" " + cg.notes + "<br>");
 printf(" " + cg.subject + "<br>");
 printf(" " + cg.title_mal + "<br>");
 printf(" " + cg.place_of_publication + "<br>");
 printf(" " + cg.translator + "<br>");
 printf(" " + cg.copyright_year + "<br>");
 printf(" " + cg.pages + "<br>");
 printf(" " + cg.indexed + "<br>");
 printf(" " + cg.bibliography + "<br>");
 printf(" " + cg.foot_note + "<br>");
 printf(" " + cg.issn + "<br>");
 printf(" " + cg.series + "<br>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+books_NM1+'\",'
 datap +="\""+cg.call_no+"\"";datap += ',';
 datap +="\""+cg.title+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";

datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx10000";

datar+="\n{\\pard\\intbl\\ql { "+books_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.call_no) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<book_details_entry>";
datax+="<sl_no>"+books_NM1 +"</sl_no>";
datax+="<call_no>"+cg.call_no +"</call_no>";
datax+="<title>"+cg.title +"</title>";
datax+="<author>"+cg.author +"</author>";
datax+="<year_published>"+cg.year_published +"</year_published>";
datax+="<isbn>"+cg.isbn +"</isbn>";
datax+="<pubid>"+cg.pubid +"</pubid>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="<subject>"+cg.subject +"</subject>";
datax+="<title_mal>"+cg.title_mal +"</title_mal>";
datax+="<place_of_publication>"+cg.place_of_publication +"</place_of_publication>";
datax+="<translator>"+cg.translator +"</translator>";
datax+="<copyright_year>"+cg.copyright_year +"</copyright_year>";
datax+="<pages>"+cg.pages +"</pages>";
datax+="<indexed>"+cg.indexed +"</indexed>";
datax+="<bibliography>"+cg.bibliography +"</bibliography>";
datax+="<foot_note>"+cg.foot_note +"</foot_note>";
datax+="<issn>"+cg.issn +"</issn>";
datax+="<series>"+cg.series +"</series>";
datax+="</book_details_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.call_no +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.author +"\"";
datac+=",";
datac+="\""+cg.year_published +"\"";
datac+=",";
datac+="\""+cg.isbn +"\"";
datac+=",";
datac+="\""+cg.pubid +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datac+=",";
datac+="\""+cg.subject +"\"";
datac+=",";
datac+="\""+cg.title_mal +"\"";
datac+=",";
datac+="\""+cg.place_of_publication +"\"";
datac+=",";
datac+="\""+cg.translator +"\"";
datac+=",";
datac+="\""+cg.copyright_year +"\"";
datac+=",";
datac+="\""+cg.pages +"\"";
datac+=",";
datac+="\""+cg.indexed +"\"";
datac+=",";
datac+="\""+cg.bibliography +"\"";
datac+=",";
datac+="\""+cg.foot_note +"\"";
datac+=",";
datac+="\""+cg.issn +"\"";
datac+=",";
datac+="\""+cg.series +"\"";
datat+="\n";
datat+=""+cg.call_no +"";
datat+=",";
datat+=""+cg.title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.call_no) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.author) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.year_published) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.isbn) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.pubid) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.notes) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.subject) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.title_mal) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.place_of_publication) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.translator) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.copyright_year) +"\"";
dataj+=",";
dataj+="\"M\":\""+json_cvt(cg.pages) +"\"";
dataj+=",";
dataj+="\"N\":\""+json_cvt(cg.indexed) +"\"";
dataj+=",";
dataj+="\"O\":\""+json_cvt(cg.bibliography) +"\"";
dataj+=",";
dataj+="\"P\":\""+json_cvt(cg.foot_note) +"\"";
dataj+=",";
dataj+="\"Q\":\""+json_cvt(cg.issn) +"\"";
dataj+=",";
dataj+="\"R\":\""+json_cvt(cg.series) +"\"";
dataj+="}\n";
 }
//--FUNC----sp32---------
function books_header()
 {
 var key=book_details_keys;
 var titl=book_details_titl;

clear();

printf ( "<center><h2>Books</h2></center>");
printf ( "<div id=serh> <table id=t6  class='rt' width=100%%>");
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

printf ( "  <a href='javascript:hide_adv();' > More Options</a >");
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
printf ( "</td></tr></table> </div>");
printf ( "<button type=button  onclick='books_NM=0;books_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");

printf ( " * <a href='javascript:if(books_SEL.length >0) cg.call_no=books_SEL;books_new();'  >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }
//-------------------
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

classification
 show_link("books",cg.cl_code, "Books");
*/

//----------------------------
