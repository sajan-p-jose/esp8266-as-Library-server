//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// cd_dvd_view() -- sp1
// cd_dvd_end_view() -- sp2
// cd_dvd_get_data() -- sp3
// cd_dvd_new() -- sp4
// cd_dvd_insert() -- sp5
// cd_dvd_view_result() -- sp6
// cd_dvd_edit() -- sp7
// cd_dvd_end_edit() -- sp8
// cd_dvd_start_edit() -- sp9
// cd_dvd_update() -- sp10
// cd_dvd_delete() -- sp11
// cd_dvd_navi() -- sp12
// cd_dvd_pdfview() -- sp13
// cd_dvd_xmlview() -- sp14
// cd_dvd_rtfview() -- sp16
// cd_dvd_txtview() -- sp17
// cd_dvd_csvview() -- sp18
// cd_dvd_jsonview() -- sp19
// cd_dvd_importfile() -- sp20
// cd_dvd_footer() -- sp21
// cd_dvd_table_head() -- sp22
// cd_dvd() -- sp23
// cd_dvd_work() -- sp24
// cd_dvd_search() -- sp25
// cd_dvd_start_rows() -- sp26
// cd_dvd_end_rows() -- sp27
// cd_dvd_rows() -- sp28
// cd_dvd_start_colms() -- sp29
// cd_dvd_end_colms() -- sp30
// cd_dvd_colms() -- sp31
// cd_dvd_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var cd_dvdi="";
var cdrom_details_keys=["id","title","author","publisher","class_no","reference","tower_no","entry_date"];
var cdrom_details_typ=["integer","character varying(150)","character varying(150)","character varying(150)","character varying(50)","character varying(200)","integer","date"];
var cdrom_details_titl=["Id","Title","Author","Publisher","Class no","Reference","Tower no","Entry date"];
var cdrom_details_j={"id":"A","title":"B","author":"C","publisher":"D","class_no":"E","reference":"F","tower_no":"G","entry_date":"H"};
var cdrom_details_init={"A":"0","B":"","C":"","D":"","E":"","F":"","G":"0","H":"01/01/1000","*":""};
//-----------------------
var navi="", header="" , cd_dvd_table="";
var cd_dvd_HEADING="";
 var cd_dvd_NM1=0,cd_dvd_NM=0, cd_dvd_NO_OF_ROWS=0,cdrom_details_data;
 var cd_dvd_TXT="",cd_dvd_TXT2="", cd_dvd_SORT="",cd_dvd_CATEGORY2="",cd_dvd_ANDOR=0,cd_dvd_STYP2=0;
 var cd_dvd_SEL="",cd_dvd_SEL_RULE="", cd_dvd_SORT_ORD="",cd_dvd_CATEGORY="",cd_dvd_STYP=0;
 var cd_dvd_DATE_FROM="01/01/1000",cd_dvd_DATE_TO="01/01/3000", cd_dvd_NROWS=20;
 var cdrom_details_data, cdrom_details_arr=[],cdrom_details_del_arr=[],cdrom_details_obj2;
var cdrom_details_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"*\":\"\"}";
var cd_dvd_na ={
 search:"Search"
, id:"Id" 
, title:"Title" 
, author:"Author" 
, publisher:"Publisher" 
, class_no:"Class no" 
, reference:"Reference" 
, tower_no:"Tower no" 
, entry_date:"Entry date" 
};
var cd_dvd_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, title:"" 
, author:"" 
, publisher:"" 
, class_no:"" 
, reference:"" 
, tower_no:"" 
, entry_date:""+TODAY 
};
//--FUNC----sp1----------
function cd_dvd_view(edit)
 {
 na=cd_dvd_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
 if(edit==1) input("","id",0,cg.id ) ;
 else  input(na.id,"id",7,cg.id ) ;
input(na.title,"title",70,cg.title ) ;
input(na.author,"author",70,cg.author ) ;
input(na.publisher,"publisher",70,cg.publisher ) ;
input(na.class_no,"class_no",70,cg.class_no ) ;
input(na.reference,"reference",70,cg.reference ) ;
input(na.tower_no,"tower_no",7,cg.tower_no ) ;
input(na.entry_date,"entry_date",10,cg.entry_date ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function cd_dvd_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function cd_dvd_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function cd_dvd_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.author=json_cvt(getvlu("author")) ;  
 cg.publisher=json_cvt(getvlu("publisher")) ;  
 cg.class_no=json_cvt(getvlu("class_no")) ;  
 cg.reference=json_cvt(getvlu("reference")) ;  
 cg.tower_no=json_cvt(getvlu("tower_no")) ;  
 cg.entry_date=getdate("entry_date") ;  
 }
//--FUNC----sp4----------
function cd_dvd_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.title=""; 
  cg.author=""; 
  cg.publisher=""; 
  cg.class_no=""; 
  cg.reference=""; 
  cg.tower_no="0" ;
  cg.entry_date=TODAY ;
printf ("<form  method='POST' action='cd_dvd' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='cd_dvd_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("cdrom_details","cdrom_details","id") ;
 cd_dvd_view(1);
 printf("<button name='action' value='insert' type='button' onclick='cd_dvd_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function cd_dvd_insert() {
if( passcheck(2)==1) return ; 
 cd_dvd_get_data(); 
var uid=db_uid("cdrom_details");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.author+"\",\"D\":\""+cg.publisher+"\",\"E\":\""+cg.class_no+"\",\"F\":\""+cg.reference+"\",\"G\":\""+cg.tower_no+"\",\"H\":\""+cg.entry_date+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO cdrom_details ( id , title , author , publisher , class_no , reference , tower_no , entry_date ) VALUES (  '"+cg.id+"' , '"+cg.title+"' , '"+cg.author+"' , '"+cg.publisher+"' , '"+cg.class_no+"' , '"+cg.reference+"' , '"+cg.tower_no+"' , '"+cg.entry_date+"' );" );  
 dbdo(SQL,JSO,'cdrom_details','id',cg.id,'insert');   
 cd_dvd_view_result() ;
 
 }
//--FUNC----sp6----------
function cd_dvd_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='cd_dvd_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function cd_dvd_edit(param) {
 clear(); 
 cg=cd_dvd_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"cd_dvd_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.id , a.title , a.author , a.publisher , a.class_no , a.reference , a.tower_no , %s FROM  cdrom_details  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=cd_dvd_start_edit ;
 view_data=cd_dvd_view ;
 end_view_data=cd_dvd_end_edit ;
 dbdata(SQL,"cdrom_details","id",cg.id) ;
 } 

//--FUNC----sp8----------
function cd_dvd_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='cd_dvd_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='cd_dvd_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function cd_dvd_start_edit()
{
 printf("<form method='POST' action='cd_dvd_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='cd_dvd_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='cd_dvd_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function cd_dvd_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 cd_dvd_get_data();
var uid=db_uid("cdrom_details");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.author+"\",\"D\":\""+cg.publisher+"\",\"E\":\""+cg.class_no+"\",\"F\":\""+cg.reference+"\",\"G\":\""+cg.tower_no+"\",\"H\":\""+cg.entry_date+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE cdrom_details  SET  id = '"+cg.id+"' ,  title = '"+cg.title+"' ,  author = '"+cg.author+"' ,  publisher = '"+cg.publisher+"' ,  class_no = '"+cg.class_no+"' ,  reference = '"+cg.reference+"' ,  tower_no = '"+cg.tower_no+"' ,  entry_date = '"+cg.entry_date+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'cdrom_details','id','"+IDX+"','update');"; 
eval(wherej);
 cd_dvd_view_result() ;
 }
//--FUNC----sp11---------
function cd_dvd_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 cd_dvd_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.author+"\",,\"D\":\""+cg.publisher+"\",,\"E\":\""+cg.class_no+"\",,\"F\":\""+cg.reference+"\",,\"G\":\""+cg.tower_no+"\",,\"H\":\""+cg.entry_date+"\"}";
SQL=sprintf(SQL,"DELETE FROM cdrom_details WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'cdrom_details','id',cg.id,'delete');   
 cd_dvd_view_result() ;
 }
//--FUNC----sp12---------
function cd_dvd_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='cd_dvd_NM +=cd_dvd_NROWS;if(cd_dvd_NM > COUNT) cd_dvd_NM=COUNT; cd_dvd_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='cd_dvd_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='cd_dvd_NM =0; cd_dvd_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='cd_dvd_NM -=cd_dvd_NROWS;if(cd_dvd_NM < 0) cd_dvd_NM=0;  cd_dvd_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='cd_dvd_NM +=cd_dvd_NROWS;if(cd_dvd_NM > COUNT) cd_dvd_NM=COUNT; cd_dvd_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function cd_dvd_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Id\"";
 datapdf += ",";
 datapdf += "\"Title\"";
 datapdf += ",";
 datapdf += "\"Author\"";
 datapdf += ",";
 datapdf += "\"Class no\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("cd_dvd.pdf");
 
}

//--FUNC----sp14---------
function cd_dvd_xmlview ()
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
 dataxs += "\n <h2>cd_dvd</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Id</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n <th>Author</th> ";
 dataxs += "\n <th>Class no</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/cdrom_details_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='id'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n <td><xsl:value-of select='author'/></td> ";
 dataxs += "\n <td><xsl:value-of select='class_no'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "cdrom_details.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function cd_dvd_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 CD/DVD \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Id}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Author}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Class no}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "cd_dvd.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function cd_dvd_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "cd_dvd.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function cd_dvd_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Title, ";
 datacs += "Author, ";
 datacs += "Publisher, ";
 datacs += "Class no, ";
 datacs += "Reference, ";
 datacs += "Tower no, ";
 datacs += "Entry date, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "cdrom_details.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function cd_dvd_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "cdrom_details.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function cd_dvd_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(cdrom_details_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "cdrom_details.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function cd_dvd_importfile(typ)
{
 }

//--FUNC----sp21---------
function cd_dvd_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:cd_dvd_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:cd_dvd_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:cd_dvd_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:cd_dvd_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:cd_dvd_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:cd_dvd_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:cd_dvd_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function cd_dvd_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+cd_dvd_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function cd_dvd ()
{
 if (passcheck(1)==1) return  ; 
 cd_dvd_HEADING="";

 cd_dvd_header ();
 cd_dvd_navi();

 cd_dvd_search ();
 cd_dvd_footer ();
}
//--FUNC----sp24---------
function cd_dvd_work(txtv,tvalv,stypv,heading)

 {
 cd_dvd_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 cd_dvd_TXT=document.getElementById("tx").value ;
 cd_dvd_STYP =document.getElementById("styp").value*1 ;
 cd_dvd_ANDOR =document.getElementById("andor").value*1 ;
 cd_dvd_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 cd_dvd_TXT2=document.getElementById("tx2").value ;
 cd_dvd_STYP2 =document.getElementById("styp2").value*1 ;
 cd_dvd_SEL=document.getElementById("sel").value ;
 cd_dvd_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 cd_dvd_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) cd_dvd_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) cd_dvd_NM +=snos ;

 cd_dvd_navi();

 cd_dvd_search ();
 cd_dvd_footer ();
 }

//--FUNC----sp25---------
function cd_dvd_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_cdrom_details==0) {
 load_data("cdrom_details.zjo","cdrom_details");
 load_data("cdrom_details.json","cdrom_details");
 load_data_del("cdrom_details_del.json","cdrom_details");
LOAD_cdrom_details=1;
 }
 cd_dvd_NM1=cd_dvd_NM;
 
 clear();
 cd_dvd_navi();

 cg=cd_dvd_cg;
 where ="";
 if (cd_dvd_SEL.length)
    {
   sel_search ("", cd_dvd_SEL,"cdrom_details",1);
    }
 if (cd_dvd_SEL_RULE.length)
    {
   sel_search ("", cd_dvd_SEL_RULE,"cdrom_details",1);
    }
 if (cd_dvd_TXT.length)
    {
      if (cd_dvd_CATEGORY== "NIL");

 else if (cd_dvd_CATEGORY == "id")
 where_char ( "id",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "title")
 where_char ( "title",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "author")
 where_char ( "author",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "publisher")
 where_char ( "publisher",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "class_no")
 where_char ( "class_no",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "reference")
 where_char ( "reference",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "tower_no")
 where_char ( "tower_no",   cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
 else if (cd_dvd_CATEGORY == "entry_date")
 where_date ( "entry_date",  cd_dvd_TXT, cd_dvd_STYP,"cdrom_details");
  else  where=" " ;
}
 if (cd_dvd_TXT2.length)
    {
 if (cd_dvd_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (cd_dvd_CATEGORY2== "NIL");

 else if (cd_dvd_CATEGORY2 == "id")
 where2_char ( "id",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "title")
 where2_char ( "title",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "author")
 where2_char ( "author",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "publisher")
 where2_char ( "publisher",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "class_no")
 where2_char ( "class_no",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "reference")
 where2_char ( "reference",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "tower_no")
 where2_char ( "tower_no",  cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
 else if (cd_dvd_CATEGORY2 == "entry_date")
 where2_date ( "entry_date",   cd_dvd_TXT2, cd_dvd_STYP2,"cdrom_details",cd_dvd_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM cdrom_details a  WHERE 1=1 "+where+where2 );
 table_head=cd_dvd_table_head ;
  dbget(SQL,where,"cdrom_details") ;
  cd_dvd_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , title , author , publisher , class_no , reference , tower_no , %s FROM cdrom_details a  WHERE 1=1 "+  where + where2 +cd_dvd_SORT+" "+cd_dvd_SORT_ORD+ " LIMIT "+cd_dvd_NROWS+" OFFSET  "+cd_dvd_NM );
 if (DISPCOL==1) {
 display_start=cd_dvd_start_colms ;
 display_rows=cd_dvd_colms ;
 display_end=cd_dvd_end_colms ;
 } else  {
 display_start=cd_dvd_start_rows ;
 display_rows=cd_dvd_rows ;
 display_end=cd_dvd_end_rows ;
 } 
  dbselect(SQL,where,cd_dvd_SORT,cd_dvd_NROWS,cd_dvd_NM,"cdrom_details") ;

 cd_dvd_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function cd_dvd_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;cd_dvd_SORT=\" ORDER BY id\" ;sorting(\"id\",\"cdrom_details\") ; cd_dvd_work();' >Id</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;cd_dvd_SORT=\" ORDER BY title\" ;sorting(\"title\",\"cdrom_details\") ; cd_dvd_work();' >Title</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;cd_dvd_SORT=\" ORDER BY author\" ;sorting(\"author\",\"cdrom_details\") ; cd_dvd_work();' >Author</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;cd_dvd_SORT=\" ORDER BY class_no\" ;sorting(\"class_no\",\"cdrom_details\") ; cd_dvd_work();' >Class no</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function cd_dvd_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function cd_dvd_rows(cg)
 {
  ir++ ;
  cd_dvd_NM1++;
 var nnn= cd_dvd_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:cd_dvd_edit(\""+cg.id+"\");'>"+cd_dvd_NM1+". </a></div>");
 printf("<div class=cell><a href='javascript:DISPCOL=1;cd_dvd_NROWS=1;cd_dvd_NM="+nnn+"; cd_dvd_search();'>" + decodeh(cg.id) + "</a></div>");
 printf("<div class=cell>" + decodeh(cg.title) + "</div>");
 printf("<div class=cell>" + decodeh(cg.author) + "</div>");
 printf("<div class=cell>" + decodeh(cg.class_no) + "</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+cd_dvd_NM1+'\",'
 datap +="\""+decodep(cg.id)+"\"";datap += ',';
 datap +="\""+decodep(cg.title)+"\"";datap += ',';
 datap +="\""+decodep(cg.author)+"\"";datap += ',';
 datap +="\""+decodep(cg.class_no)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+cd_dvd_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.author) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.class_no) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<cdrom_details_entry>";
datax+="<sl_no>"+cd_dvd_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<author>"+cg.author +"</author>";
datax+="<publisher>"+cg.publisher +"</publisher>";
datax+="<class_no>"+cg.class_no +"</class_no>";
datax+="<reference>"+cg.reference +"</reference>";
datax+="<tower_no>"+cg.tower_no +"</tower_no>";
datax+="<entry_date>"+cg.entry_date +"</entry_date>";
datax+="</cdrom_details_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.author +"\"";
datac+=",";
datac+="\""+cg.publisher +"\"";
datac+=",";
datac+="\""+cg.class_no +"\"";
datac+=",";
datac+="\""+cg.reference +"\"";
datac+=",";
datac+="\""+cg.tower_no +"\"";
datac+=",";
datac+="\""+cg.entry_date +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.author +"";
datat+=",";
datat+=""+cg.class_no +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.author) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.publisher) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.class_no) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.reference) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.tower_no) +"\"";
dataj+=",";
dataj+="\"H\":\""+date2julian(cg.entry_date) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function cd_dvd_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function cd_dvd_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function cd_dvd_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= cd_dvd_na;
 cd_dvd_start_colms();
  ir++ ;
  cd_dvd_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:cd_dvd_edit(\""+cg.id+"\");'>"+cd_dvd_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Id</div><div class=cell>" + decodeh(cg.id) + "</div></div>");
 printf("<div  class=row ><div class=cell>Title</div><div class=cell>" + decodeh(cg.title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Author</div><div class=cell>" + decodeh(cg.author) + "</div></div>");
 printf("<div  class=row ><div class=cell>Publisher</div><div class=cell>" + decodeh(cg.publisher) + "</div></div>");
 printf("<div  class=row ><div class=cell>Class no</div><div class=cell>" + decodeh(cg.class_no) + "</div></div>");
 printf("<div  class=row ><div class=cell>Reference</div><div class=cell>" + decodeh(cg.reference) + "</div></div>");
 printf("<div  class=row ><div class=cell>Tower no</div><div class=cell>" + decodeh(cg.tower_no) + "</div></div>");
 printf("<div  class=row ><div class=cell>Entry date</div><div class=cell>" + decodeh(cg.entry_date) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Id\",\""+decodep(cg.id)+"\"]";datap += ',';
 datap +="[\"Title\",\""+decodep(cg.title)+"\"]";datap += ',';
 datap +="[\"Author\",\""+decodep(cg.author)+"\"]";datap += ',';
 datap +="[\"Publisher\",\""+decodep(cg.publisher)+"\"]";datap += ',';
 datap +="[\"Class no\",\""+decodep(cg.class_no)+"\"]";datap += ',';
 datap +="[\"Reference\",\""+decodep(cg.reference)+"\"]";datap += ',';
 datap +="[\"Tower no\",\""+decodep(cg.tower_no)+"\"]";datap += ',';
 datap +="[\"Entry date\",\""+decodep(cg.entry_date)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx8000";
datar+="\n{\\pard\\intbl\\ql { "+cd_dvd_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.author) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.class_no) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<cdrom_details_entry>";
datax+="<sl_no>"+cd_dvd_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<title>"+cg.title +"</title>";
datax+="<author>"+cg.author +"</author>";
datax+="<publisher>"+cg.publisher +"</publisher>";
datax+="<class_no>"+cg.class_no +"</class_no>";
datax+="<reference>"+cg.reference +"</reference>";
datax+="<tower_no>"+cg.tower_no +"</tower_no>";
datax+="<entry_date>"+cg.entry_date +"</entry_date>";
datax+="</cdrom_details_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.author +"\"";
datac+=",";
datac+="\""+cg.publisher +"\"";
datac+=",";
datac+="\""+cg.class_no +"\"";
datac+=",";
datac+="\""+cg.reference +"\"";
datac+=",";
datac+="\""+cg.tower_no +"\"";
datac+=",";
datac+="\""+cg.entry_date +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.title +"";
datat+=",";
datat+=""+cg.author +"";
datat+=",";
datat+=""+cg.class_no +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.author) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.publisher) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.class_no) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.reference) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.tower_no) +"\"";
dataj+=",";
dataj+="\"H\":\""+date2julian(cg.entry_date) +"\"";
dataj+="}\n";
 cd_dvd_end_colms();
 }
//--FUNC----sp32---------
function cd_dvd_header()
 {
 var key=cdrom_details_keys;
 var titl=cdrom_details_titl;

clear();

printf ( "<center><h2>CD/DVD</h2></center>");
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
printf ( "<button type=button  onclick='cd_dvd_NM=0;cd_dvd_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:cd_dvd_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------