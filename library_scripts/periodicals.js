//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// periodicals_view() -- sp1
// periodicals_end_view() -- sp2
// periodicals_get_data() -- sp3
// periodicals_new() -- sp4
// periodicals_insert() -- sp5
// periodicals_view_result() -- sp6
// periodicals_edit() -- sp7
// periodicals_end_edit() -- sp8
// periodicals_start_edit() -- sp9
// periodicals_update() -- sp10
// periodicals_delete() -- sp11
// periodicals_navi() -- sp12
// periodicals_pdfview() -- sp13
// periodicals_xmlview() -- sp14
// periodicals_rtfview() -- sp16
// periodicals_txtview() -- sp17
// periodicals_csvview() -- sp18
// periodicals_jsonview() -- sp19
// periodicals_importfile() -- sp20
// periodicals_footer() -- sp21
// periodicals_table_head() -- sp22
// periodicals() -- sp23
// periodicals_work() -- sp24
// periodicals_search() -- sp25
// periodicals_start_rows() -- sp26
// periodicals_end_rows() -- sp27
// periodicals_rows() -- sp28
// periodicals_start_colms() -- sp29
// periodicals_end_colms() -- sp30
// periodicals_colms() -- sp31
// periodicals_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var periodicalsi="";
var periodical_data_keys=["per_code","title","chief_editor","language_code","pub_code","sub_code","periodicity","issn","annual_index","style_of_treatment","articles_indexed","new_vol_begins","mode_of_aqusition","agent_code","exchange_for","class_no","vol_begins","note","is_foreign","last_modificatio","malayalam_title"];
var periodical_data_typ=["int4","varchar(200)","varchar(150)","varchar(150)","varchar(150)","varchar(100)","varchar(50)","varchar(50)","int2","int2","int2","varchar(50)","varchar(150)","varchar(150)","varchar(150)","varchar(50)","varchar(100)","varchar(200)","int2","date","varchar(100)"];
var periodical_data_titl=["Per code","Title","Chief editor","Language code","Pub code","Sub code","Periodicity","Issn","Annual index","Style of treatment","Articles indexed","New vol begins","Mode of aqusition","Agent code","Exchange for","Class no","Vol begins","Note","Is foreign","Last modificatio","Malayalam title"];
var periodical_data_j={"per_code":"A","title":"B","chief_editor":"C","language_code":"D","pub_code":"E","sub_code":"F","periodicity":"G","issn":"H","annual_index":"I","style_of_treatment":"J","articles_indexed":"K","new_vol_begins":"L","mode_of_aqusition":"M","agent_code":"N","exchange_for":"O","class_no":"P","vol_begins":"Q","note":"R","is_foreign":"S","last_modificatio":"T","malayalam_title":"U"};
var periodical_data_init={"A":"0","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"0","J":"0","K":"0","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"0","T":"01/01/1000","U":"","*":""};
//-----------------------
var navi="", header="" , periodicals_table="";
var periodicals_HEADING="";
 var periodicals_NM1=0,periodicals_NM=0, periodicals_NO_OF_ROWS=0,periodical_data_data;
 var periodicals_TXT="",periodicals_TXT2="", periodicals_SORT="",periodicals_CATEGORY2="",periodicals_ANDOR=0,periodicals_STYP2=0;
 var periodicals_SEL="",periodicals_SEL_RULE="", periodicals_SORT_ORD="",periodicals_CATEGORY="",periodicals_STYP=0;
 var periodicals_DATE_FROM="01/01/1000",periodicals_DATE_TO="01/01/3000", periodicals_NROWS=20;
 var periodical_data_data, periodical_data_arr=[],periodical_data_del_arr=[],periodical_data_obj2;
var periodical_data_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"F\":\"\",\"G\":\"\",\"H\":\"\",\"I\":\"\",\"J\":\"\",\"K\":\"\",\"L\":\"\",\"M\":\"\",\"N\":\"\",\"O\":\"\",\"P\":\"\",\"Q\":\"\",\"R\":\"\",\"S\":\"\",\"T\":\"\",\"U\":\"\",\"*\":\"\"}";
var periodicals_na ={
 search:"Search"
, per_code:"Per code" 
, title:"Title" 
, chief_editor:"Chief editor" 
, language_code:"Language code" 
, pub_code:"Pub code" 
, sub_code:"Sub code" 
, periodicity:"Periodicity" 
, issn:"Issn" 
, annual_index:"Annual index" 
, style_of_treatment:"Style of treatment" 
, articles_indexed:"Articles indexed" 
, new_vol_begins:"New vol begins" 
, mode_of_aqusition:"Mode of aqusition" 
, agent_code:"Agent code" 
, exchange_for:"Exchange for" 
, class_no:"Class no" 
, vol_begins:"Vol begins" 
, note:"Note" 
, is_foreign:"Is foreign" 
, last_modificatio:"Last modificatio" 
, malayalam_title:"Malayalam title" 
};
var periodicals_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, per_code:"" 
, title:"" 
, chief_editor:"" 
, language_code:"" 
, pub_code:"" 
, sub_code:"" 
, periodicity:"" 
, issn:"" 
, annual_index:"" 
, style_of_treatment:"" 
, articles_indexed:"" 
, new_vol_begins:"" 
, mode_of_aqusition:"" 
, agent_code:"" 
, exchange_for:"" 
, class_no:"" 
, vol_begins:"" 
, note:"" 
, is_foreign:"" 
, last_modificatio:""+TODAY 
, malayalam_title:"" 
};
//--FUNC----sp1----------
function periodicals_view(edit)
 {
 na=periodicals_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.per_code ) ;
input(na.per_code,"per_code",7,cg.per_code ) ;
input(na.title,"title",70,cg.title ) ;
input(na.chief_editor,"chief_editor",70,cg.chief_editor ) ;
input(na.language_code,"language_code",70,cg.language_code ) ;
input(na.pub_code,"pub_code",70,cg.pub_code ) ;
input(na.sub_code,"sub_code",70,cg.sub_code ) ;
input(na.periodicity,"periodicity",70,cg.periodicity ) ;
input(na.issn,"issn",70,cg.issn ) ;
input(na.annual_index,"annual_index",7,cg.annual_index ) ;
input(na.style_of_treatment,"style_of_treatment",7,cg.style_of_treatment ) ;
input(na.articles_indexed,"articles_indexed",7,cg.articles_indexed ) ;
input(na.new_vol_begins,"new_vol_begins",70,cg.new_vol_begins ) ;
input(na.mode_of_aqusition,"mode_of_aqusition",70,cg.mode_of_aqusition ) ;
input(na.agent_code,"agent_code",70,cg.agent_code ) ;
input(na.exchange_for,"exchange_for",70,cg.exchange_for ) ;
input(na.class_no,"class_no",70,cg.class_no ) ;
input(na.vol_begins,"vol_begins",70,cg.vol_begins ) ;
input(na.note,"note",70,cg.note ) ;
input(na.is_foreign,"is_foreign",7,cg.is_foreign ) ;
input(na.last_modificatio,"last_modificatio",10,cg.last_modificatio ) ;
input(na.malayalam_title,"malayalam_title",70,cg.malayalam_title ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function periodicals_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function periodicals_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function periodicals_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.per_code=json_cvt(getvlu("per_code")) ;  
 cg.title=json_cvt(getvlu("title")) ;  
 cg.chief_editor=json_cvt(getvlu("chief_editor")) ;  
 cg.language_code=json_cvt(getvlu("language_code")) ;  
 cg.pub_code=json_cvt(getvlu("pub_code")) ;  
 cg.sub_code=json_cvt(getvlu("sub_code")) ;  
 cg.periodicity=json_cvt(getvlu("periodicity")) ;  
 cg.issn=json_cvt(getvlu("issn")) ;  
 cg.annual_index=json_cvt(getvlu("annual_index")) ;  
 cg.style_of_treatment=json_cvt(getvlu("style_of_treatment")) ;  
 cg.articles_indexed=json_cvt(getvlu("articles_indexed")) ;  
 cg.new_vol_begins=json_cvt(getvlu("new_vol_begins")) ;  
 cg.mode_of_aqusition=json_cvt(getvlu("mode_of_aqusition")) ;  
 cg.agent_code=json_cvt(getvlu("agent_code")) ;  
 cg.exchange_for=json_cvt(getvlu("exchange_for")) ;  
 cg.class_no=json_cvt(getvlu("class_no")) ;  
 cg.vol_begins=json_cvt(getvlu("vol_begins")) ;  
 cg.note=json_cvt(getvlu("note")) ;  
 cg.is_foreign=json_cvt(getvlu("is_foreign")) ;  
 cg.last_modificatio=getdate("last_modificatio") ;  
 cg.malayalam_title=json_cvt(getvlu("malayalam_title")) ;  
 }
//--FUNC----sp4----------
function periodicals_new()

 {
// ------------------------------
 clear();
  cg.per_code="0" ;
  cg.title=""; 
  cg.chief_editor=""; 
  cg.language_code=""; 
  cg.pub_code=""; 
  cg.sub_code=""; 
  cg.periodicity=""; 
  cg.issn=""; 
  cg.annual_index="0" ;
  cg.style_of_treatment="0" ;
  cg.articles_indexed="0" ;
  cg.new_vol_begins=""; 
  cg.mode_of_aqusition=""; 
  cg.agent_code=""; 
  cg.exchange_for=""; 
  cg.class_no=""; 
  cg.vol_begins=""; 
  cg.note=""; 
  cg.is_foreign="0" ;
  cg.last_modificatio=TODAY ;
  cg.malayalam_title=""; 
printf ("<form  method='POST' action='periodicals' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='periodicals_insert();' ><b>INSERT</b></button>");
 cg.per_code  =db_new_id("periodical_data","periodical_data","per_code") ;
 periodicals_view(1);
 printf("<button name='action' value='insert' type='button' onclick='periodicals_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function periodicals_insert() {
if( passcheck(2)==1) return ; 
 periodicals_get_data(); 
var uid=db_uid("periodical_data");
 JSO="{\"A\":\""+cg.per_code+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.chief_editor+"\",\"D\":\""+cg.language_code+"\",\"E\":\""+cg.pub_code+"\",\"F\":\""+cg.sub_code+"\",\"G\":\""+cg.periodicity+"\",\"H\":\""+cg.issn+"\",\"I\":\""+cg.annual_index+"\",\"J\":\""+cg.style_of_treatment+"\",\"K\":\""+cg.articles_indexed+"\",\"L\":\""+cg.new_vol_begins+"\",\"M\":\""+cg.mode_of_aqusition+"\",\"N\":\""+cg.agent_code+"\",\"O\":\""+cg.exchange_for+"\",\"P\":\""+cg.class_no+"\",\"Q\":\""+cg.vol_begins+"\",\"R\":\""+cg.note+"\",\"S\":\""+cg.is_foreign+"\",\"T\":\""+cg.last_modificatio+"\",\"U\":\""+cg.malayalam_title+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO periodical_data ( per_code , title , chief_editor , language_code , pub_code , sub_code , periodicity , issn , annual_index , style_of_treatment , articles_indexed , new_vol_begins , mode_of_aqusition , agent_code , exchange_for , class_no , vol_begins , note , is_foreign , last_modificatio , malayalam_title ) VALUES (  "+atoi(cg.per_code)+" , '"+cg.title+"' , '"+cg.chief_editor+"' , '"+cg.language_code+"' , '"+cg.pub_code+"' , '"+cg.sub_code+"' , '"+cg.periodicity+"' , '"+cg.issn+"' , '"+cg.annual_index+"' , '"+cg.style_of_treatment+"' , '"+cg.articles_indexed+"' , '"+cg.new_vol_begins+"' , '"+cg.mode_of_aqusition+"' , '"+cg.agent_code+"' , '"+cg.exchange_for+"' , '"+cg.class_no+"' , '"+cg.vol_begins+"' , '"+cg.note+"' , '"+cg.is_foreign+"' , '"+cg.last_modificatio+"' , '"+cg.malayalam_title+"' );" );  
 dbdo(SQL,JSO,'periodical_data','per_code',cg.per_code,'insert');   
 periodicals_view_result() ;
 
 }
//--FUNC----sp6----------
function periodicals_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='periodicals_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function periodicals_edit(param) {
 clear(); 
 cg=periodicals_cg;
 var arr=param.split(","); 
if(arr[0]) cg.per_code=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"periodicals_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.per_code , a.title , a.chief_editor , a.language_code , a.pub_code , a.sub_code , a.periodicity , a.issn , a.annual_index , a.style_of_treatment , a.articles_indexed , a.new_vol_begins , a.mode_of_aqusition , a.agent_code , a.exchange_for , a.class_no , a.vol_begins , a.note , a.is_foreign , %s , a.malayalam_title FROM  periodical_data  a   WHERE    per_code ='"+ cg.per_code +"'  ;"  );
 start_view_data=periodicals_start_edit ;
 view_data=periodicals_view ;
 end_view_data=periodicals_end_edit ;
 dbdata(SQL,"periodical_data","per_code",cg.per_code) ;
 } 

//--FUNC----sp8----------
function periodicals_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='periodicals_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='periodicals_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function periodicals_start_edit()
{
 printf("<form method='POST' action='periodicals_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='periodicals_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='periodicals_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function periodicals_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.per_code=arr[0];
 periodicals_get_data();
var uid=db_uid("periodical_data");
 JSO="{\"A\":\""+cg.per_code+"\",\"B\":\""+cg.title+"\",\"C\":\""+cg.chief_editor+"\",\"D\":\""+cg.language_code+"\",\"E\":\""+cg.pub_code+"\",\"F\":\""+cg.sub_code+"\",\"G\":\""+cg.periodicity+"\",\"H\":\""+cg.issn+"\",\"I\":\""+cg.annual_index+"\",\"J\":\""+cg.style_of_treatment+"\",\"K\":\""+cg.articles_indexed+"\",\"L\":\""+cg.new_vol_begins+"\",\"M\":\""+cg.mode_of_aqusition+"\",\"N\":\""+cg.agent_code+"\",\"O\":\""+cg.exchange_for+"\",\"P\":\""+cg.class_no+"\",\"Q\":\""+cg.vol_begins+"\",\"R\":\""+cg.note+"\",\"S\":\""+cg.is_foreign+"\",\"T\":\""+cg.last_modificatio+"\",\"U\":\""+cg.malayalam_title+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE periodical_data  SET  per_code = '"+cg.per_code+"' ,  title = '"+cg.title+"' ,  chief_editor = '"+cg.chief_editor+"' ,  language_code = '"+cg.language_code+"' ,  pub_code = '"+cg.pub_code+"' ,  sub_code = '"+cg.sub_code+"' ,  periodicity = '"+cg.periodicity+"' ,  issn = '"+cg.issn+"' ,  annual_index = '"+cg.annual_index+"' ,  style_of_treatment = '"+cg.style_of_treatment+"' ,  articles_indexed = '"+cg.articles_indexed+"' ,  new_vol_begins = '"+cg.new_vol_begins+"' ,  mode_of_aqusition = '"+cg.mode_of_aqusition+"' ,  agent_code = '"+cg.agent_code+"' ,  exchange_for = '"+cg.exchange_for+"' ,  class_no = '"+cg.class_no+"' ,  vol_begins = '"+cg.vol_begins+"' ,  note = '"+cg.note+"' ,  is_foreign = '"+cg.is_foreign+"' ,  last_modificatio = '"+cg.last_modificatio+"' ,  malayalam_title = '"+cg.malayalam_title+"'  WHERE per_code='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'periodical_data','per_code','"+IDX+"','update');"; 
eval(wherej);
 periodicals_view_result() ;
 }
//--FUNC----sp11---------
function periodicals_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.per_code=arr[0];
 periodicals_get_data();
 var IDX=sprintf(IDX,"cg.per_code" ) ;
 JSO="{\"A\":\""+cg.per_code+"\",,\"B\":\""+cg.title+"\",,\"C\":\""+cg.chief_editor+"\",,\"D\":\""+cg.language_code+"\",,\"E\":\""+cg.pub_code+"\",,\"F\":\""+cg.sub_code+"\",,\"G\":\""+cg.periodicity+"\",,\"H\":\""+cg.issn+"\",,\"I\":\""+cg.annual_index+"\",,\"J\":\""+cg.style_of_treatment+"\",,\"K\":\""+cg.articles_indexed+"\",,\"L\":\""+cg.new_vol_begins+"\",,\"M\":\""+cg.mode_of_aqusition+"\",,\"N\":\""+cg.agent_code+"\",,\"O\":\""+cg.exchange_for+"\",,\"P\":\""+cg.class_no+"\",,\"Q\":\""+cg.vol_begins+"\",,\"R\":\""+cg.note+"\",,\"S\":\""+cg.is_foreign+"\",,\"T\":\""+cg.last_modificatio+"\",,\"U\":\""+cg.malayalam_title+"\"}";
SQL=sprintf(SQL,"DELETE FROM periodical_data WHERE  per_code ='"+ cg.per_code +"'    " ) ;
 dbdo(SQL,JSO,'periodical_data','per_code',cg.per_code,'delete');   
 periodicals_view_result() ;
 }
//--FUNC----sp12---------
function periodicals_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='periodicals_NM +=periodicals_NROWS;if(periodicals_NM > COUNT) periodicals_NM=COUNT; periodicals_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='periodicals_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='periodicals_NM =0; periodicals_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='periodicals_NM -=periodicals_NROWS;if(periodicals_NM < 0) periodicals_NM=0;  periodicals_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='periodicals_NM +=periodicals_NROWS;if(periodicals_NM > COUNT) periodicals_NM=COUNT; periodicals_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function periodicals_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Per code\"";
 datapdf += ",";
 datapdf += "\"Title\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("periodicals.pdf");
 
}

//--FUNC----sp14---------
function periodicals_xmlview ()
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
 dataxs += "\n <h2>periodicals</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Per code</th> ";
 dataxs += "\n <th>Title</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/periodical_data_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='per_code'/></td> ";
 dataxs += "\n <td><xsl:value-of select='title'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "periodical_data.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function periodicals_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Periodicals \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Per code}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Title}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "periodicals.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function periodicals_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "periodicals.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function periodicals_csvview ()
{
 var datacs="" ;
 datacs += "Per code, ";
 datacs += "Title, ";
 datacs += "Chief editor, ";
 datacs += "Language code, ";
 datacs += "Pub code, ";
 datacs += "Sub code, ";
 datacs += "Periodicity, ";
 datacs += "Issn, ";
 datacs += "Annual index, ";
 datacs += "Style of treatment, ";
 datacs += "Articles indexed, ";
 datacs += "New vol begins, ";
 datacs += "Mode of aqusition, ";
 datacs += "Agent code, ";
 datacs += "Exchange for, ";
 datacs += "Class no, ";
 datacs += "Vol begins, ";
 datacs += "Note, ";
 datacs += "Is foreign, ";
 datacs += "Last modificatio, ";
 datacs += "Malayalam title, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "periodical_data.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function periodicals_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "periodical_data.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function periodicals_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(periodical_data_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "periodical_data.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function periodicals_importfile(typ)
{
 }

//--FUNC----sp21---------
function periodicals_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:periodicals_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:periodicals_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:periodicals_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:periodicals_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:periodicals_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:periodicals_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:periodicals_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function periodicals_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+periodicals_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function periodicals ()
{
 if (passcheck(1)==1) return  ; 
 periodicals_HEADING="";

 periodicals_header ();
 periodicals_navi();

 periodicals_search ();
 periodicals_footer ();
}
//--FUNC----sp24---------
function periodicals_work(txtv,tvalv,stypv,heading)

 {
 periodicals_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 periodicals_TXT=document.getElementById("tx").value ;
 periodicals_STYP =document.getElementById("styp").value*1 ;
 periodicals_ANDOR =document.getElementById("andor").value*1 ;
 periodicals_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 periodicals_TXT2=document.getElementById("tx2").value ;
 periodicals_STYP2 =document.getElementById("styp2").value*1 ;
 periodicals_SEL=document.getElementById("sel").value ;
 periodicals_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 periodicals_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) periodicals_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) periodicals_NM +=snos ;

 periodicals_navi();

 periodicals_search ();
 periodicals_footer ();
 }

//--FUNC----sp25---------
function periodicals_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_periodical_data==0) {
 load_data("periodical_data.zjo","periodical_data");
 load_data("periodical_data.json","periodical_data");
 load_data_del("periodical_data_del.json","periodical_data");
LOAD_periodical_data=1;
 }
 periodicals_NM1=periodicals_NM;
 
 clear();
 periodicals_navi();

 cg=periodicals_cg;
 where ="";
 if (periodicals_SEL.length)
    {
   sel_search ("", periodicals_SEL,"periodical_data",1);
    }
 if (periodicals_SEL_RULE.length)
    {
   sel_search ("", periodicals_SEL_RULE,"periodical_data",1);
    }
 if (periodicals_TXT.length)
    {
      if (periodicals_CATEGORY== "NIL");

 else if (periodicals_CATEGORY == "per_code")
 where_int ( "per_code",  periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "title")
 where_char ( "title",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "chief_editor")
 where_char ( "chief_editor",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "language_code")
 where_char ( "language_code",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "pub_code")
 where_char ( "pub_code",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "sub_code")
 where_char ( "sub_code",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "periodicity")
 where_char ( "periodicity",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "issn")
 where_char ( "issn",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "annual_index")
 where_char ( "annual_index",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "style_of_treatment")
 where_char ( "style_of_treatment",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "articles_indexed")
 where_char ( "articles_indexed",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "new_vol_begins")
 where_char ( "new_vol_begins",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "mode_of_aqusition")
 where_char ( "mode_of_aqusition",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "agent_code")
 where_char ( "agent_code",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "exchange_for")
 where_char ( "exchange_for",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "class_no")
 where_char ( "class_no",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "vol_begins")
 where_char ( "vol_begins",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "note")
 where_char ( "note",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "is_foreign")
 where_char ( "is_foreign",   periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "last_modificatio")
 where_date ( "last_modificatio",  periodicals_TXT, periodicals_STYP,"periodical_data");
 else if (periodicals_CATEGORY == "malayalam_title")
 where_char ( "malayalam_title",   periodicals_TXT, periodicals_STYP,"periodical_data");
  else  where=" " ;
}
 if (periodicals_TXT2.length)
    {
 if (periodicals_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (periodicals_CATEGORY2== "NIL");

 else if (periodicals_CATEGORY2 == "per_code")
 where2_int ( "per_code",   periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "title")
 where2_char ( "title",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "chief_editor")
 where2_char ( "chief_editor",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "language_code")
 where2_char ( "language_code",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "pub_code")
 where2_char ( "pub_code",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "sub_code")
 where2_char ( "sub_code",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "periodicity")
 where2_char ( "periodicity",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "issn")
 where2_char ( "issn",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "annual_index")
 where2_char ( "annual_index",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "style_of_treatment")
 where2_char ( "style_of_treatment",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "articles_indexed")
 where2_char ( "articles_indexed",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "new_vol_begins")
 where2_char ( "new_vol_begins",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "mode_of_aqusition")
 where2_char ( "mode_of_aqusition",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "agent_code")
 where2_char ( "agent_code",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "exchange_for")
 where2_char ( "exchange_for",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "class_no")
 where2_char ( "class_no",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "vol_begins")
 where2_char ( "vol_begins",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "note")
 where2_char ( "note",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "is_foreign")
 where2_char ( "is_foreign",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "last_modificatio")
 where2_date ( "last_modificatio",   periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
 else if (periodicals_CATEGORY2 == "malayalam_title")
 where2_char ( "malayalam_title",  periodicals_TXT2, periodicals_STYP2,"periodical_data",periodicals_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM periodical_data a  WHERE 1=1 "+where+where2 );
 table_head=periodicals_table_head ;
  dbget(SQL,where,"periodical_data") ;
  periodicals_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  per_code , title , chief_editor , language_code , pub_code , sub_code , periodicity , issn , annual_index , style_of_treatment , articles_indexed , new_vol_begins , mode_of_aqusition , agent_code , exchange_for , class_no , vol_begins , note , is_foreign , %s , malayalam_title FROM periodical_data a  WHERE 1=1 "+  where + where2 +periodicals_SORT+" "+periodicals_SORT_ORD+ " LIMIT "+periodicals_NROWS+" OFFSET  "+periodicals_NM );
 if (DISPCOL==1) {
 display_start=periodicals_start_colms ;
 display_rows=periodicals_colms ;
 display_end=periodicals_end_colms ;
 } else  {
 display_start=periodicals_start_rows ;
 display_rows=periodicals_rows ;
 display_end=periodicals_end_rows ;
 } 
  dbselect(SQL,where,periodicals_SORT,periodicals_NROWS,periodicals_NM,"periodical_data") ;

 periodicals_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function periodicals_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;periodicals_SORT=\" ORDER BY per_code\" ;sorting(\"per_code\",\"periodical_data\") ; periodicals_work();' >Per code</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;periodicals_SORT=\" ORDER BY title\" ;sorting(\"title\",\"periodical_data\") ; periodicals_work();' >Title</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function periodicals_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function periodicals_rows(cg)
 {
  ir++ ;
  periodicals_NM1++;
 var nnn= periodicals_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:periodicals_edit(\""+cg.per_code+"\");'>"+periodicals_NM1+". </a></div>");
 printf("<div class=cell><a href='javascript:DISPCOL=1;periodicals_NROWS=1;periodicals_NM="+nnn+"; periodicals_search();'>" + decodeh(cg.per_code) + "</a></div>");
 printf("<div class=cell>" + decodeh(cg.title) + "</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+periodicals_NM1+'\",'
 datap +="\""+decodep(cg.per_code)+"\"";datap += ',';
 datap +="\""+decodep(cg.title)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+periodicals_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.per_code) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<periodical_data_entry>";
datax+="<sl_no>"+periodicals_NM1 +"</sl_no>";
datax+="<per_code>"+cg.per_code +"</per_code>";
datax+="<title>"+cg.title +"</title>";
datax+="<chief_editor>"+cg.chief_editor +"</chief_editor>";
datax+="<language_code>"+cg.language_code +"</language_code>";
datax+="<pub_code>"+cg.pub_code +"</pub_code>";
datax+="<sub_code>"+cg.sub_code +"</sub_code>";
datax+="<periodicity>"+cg.periodicity +"</periodicity>";
datax+="<issn>"+cg.issn +"</issn>";
datax+="<annual_index>"+cg.annual_index +"</annual_index>";
datax+="<style_of_treatment>"+cg.style_of_treatment +"</style_of_treatment>";
datax+="<articles_indexed>"+cg.articles_indexed +"</articles_indexed>";
datax+="<new_vol_begins>"+cg.new_vol_begins +"</new_vol_begins>";
datax+="<mode_of_aqusition>"+cg.mode_of_aqusition +"</mode_of_aqusition>";
datax+="<agent_code>"+cg.agent_code +"</agent_code>";
datax+="<exchange_for>"+cg.exchange_for +"</exchange_for>";
datax+="<class_no>"+cg.class_no +"</class_no>";
datax+="<vol_begins>"+cg.vol_begins +"</vol_begins>";
datax+="<note>"+cg.note +"</note>";
datax+="<is_foreign>"+cg.is_foreign +"</is_foreign>";
datax+="<last_modificatio>"+cg.last_modificatio +"</last_modificatio>";
datax+="<malayalam_title>"+cg.malayalam_title +"</malayalam_title>";
datax+="</periodical_data_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.per_code +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.chief_editor +"\"";
datac+=",";
datac+="\""+cg.language_code +"\"";
datac+=",";
datac+="\""+cg.pub_code +"\"";
datac+=",";
datac+="\""+cg.sub_code +"\"";
datac+=",";
datac+="\""+cg.periodicity +"\"";
datac+=",";
datac+="\""+cg.issn +"\"";
datac+=",";
datac+="\""+cg.annual_index +"\"";
datac+=",";
datac+="\""+cg.style_of_treatment +"\"";
datac+=",";
datac+="\""+cg.articles_indexed +"\"";
datac+=",";
datac+="\""+cg.new_vol_begins +"\"";
datac+=",";
datac+="\""+cg.mode_of_aqusition +"\"";
datac+=",";
datac+="\""+cg.agent_code +"\"";
datac+=",";
datac+="\""+cg.exchange_for +"\"";
datac+=",";
datac+="\""+cg.class_no +"\"";
datac+=",";
datac+="\""+cg.vol_begins +"\"";
datac+=",";
datac+="\""+cg.note +"\"";
datac+=",";
datac+="\""+cg.is_foreign +"\"";
datac+=",";
datac+="\""+cg.last_modificatio +"\"";
datac+=",";
datac+="\""+cg.malayalam_title +"\"";
datat+="\n";
datat+=""+cg.per_code +"";
datat+=",";
datat+=""+cg.title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.per_code) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.chief_editor) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.language_code) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.pub_code) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.sub_code) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.periodicity) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.issn) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.annual_index) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.style_of_treatment) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.articles_indexed) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.new_vol_begins) +"\"";
dataj+=",";
dataj+="\"M\":\""+json_cvt(cg.mode_of_aqusition) +"\"";
dataj+=",";
dataj+="\"N\":\""+json_cvt(cg.agent_code) +"\"";
dataj+=",";
dataj+="\"O\":\""+json_cvt(cg.exchange_for) +"\"";
dataj+=",";
dataj+="\"P\":\""+json_cvt(cg.class_no) +"\"";
dataj+=",";
dataj+="\"Q\":\""+json_cvt(cg.vol_begins) +"\"";
dataj+=",";
dataj+="\"R\":\""+json_cvt(cg.note) +"\"";
dataj+=",";
dataj+="\"S\":\""+json_cvt(cg.is_foreign) +"\"";
dataj+=",";
dataj+="\"T\":\""+date2julian(cg.last_modificatio) +"\"";
dataj+=",";
dataj+="\"U\":\""+json_cvt(cg.malayalam_title) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function periodicals_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function periodicals_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function periodicals_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= periodicals_na;
 periodicals_start_colms();
  ir++ ;
  periodicals_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:periodicals_edit(\""+cg.per_code+"\");'>"+periodicals_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Per code</div><div class=cell>" + decodeh(cg.per_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Title</div><div class=cell>" + decodeh(cg.title) + "</div></div>");
 printf("<div  class=row ><div class=cell>Chief editor</div><div class=cell>" + decodeh(cg.chief_editor) + "</div></div>");
 printf("<div  class=row ><div class=cell>Language code</div><div class=cell>" + decodeh(cg.language_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Pub code</div><div class=cell>" + decodeh(cg.pub_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Sub code</div><div class=cell>" + decodeh(cg.sub_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Periodicity</div><div class=cell>" + decodeh(cg.periodicity) + "</div></div>");
 printf("<div  class=row ><div class=cell>Issn</div><div class=cell>" + decodeh(cg.issn) + "</div></div>");
 printf("<div  class=row ><div class=cell>Annual index</div><div class=cell>" + decodeh(cg.annual_index) + "</div></div>");
 printf("<div  class=row ><div class=cell>Style of treatment</div><div class=cell>" + decodeh(cg.style_of_treatment) + "</div></div>");
 printf("<div  class=row ><div class=cell>Articles indexed</div><div class=cell>" + decodeh(cg.articles_indexed) + "</div></div>");
 printf("<div  class=row ><div class=cell>New vol begins</div><div class=cell>" + decodeh(cg.new_vol_begins) + "</div></div>");
 printf("<div  class=row ><div class=cell>Mode of aqusition</div><div class=cell>" + decodeh(cg.mode_of_aqusition) + "</div></div>");
 printf("<div  class=row ><div class=cell>Agent code</div><div class=cell>" + decodeh(cg.agent_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Exchange for</div><div class=cell>" + decodeh(cg.exchange_for) + "</div></div>");
 printf("<div  class=row ><div class=cell>Class no</div><div class=cell>" + decodeh(cg.class_no) + "</div></div>");
 printf("<div  class=row ><div class=cell>Vol begins</div><div class=cell>" + decodeh(cg.vol_begins) + "</div></div>");
 printf("<div  class=row ><div class=cell>Note</div><div class=cell>" + decodeh(cg.note) + "</div></div>");
 printf("<div  class=row ><div class=cell>Is foreign</div><div class=cell>" + decodeh(cg.is_foreign) + "</div></div>");
 printf("<div  class=row ><div class=cell>Last modificatio</div><div class=cell>" + decodeh(cg.last_modificatio) + "</div></div>");
 printf("<div  class=row ><div class=cell>Malayalam title</div><div class=cell>" + decodeh(cg.malayalam_title) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Per code\",\""+decodep(cg.per_code)+"\"]";datap += ',';
 datap +="[\"Title\",\""+decodep(cg.title)+"\"]";datap += ',';
 datap +="[\"Chief editor\",\""+decodep(cg.chief_editor)+"\"]";datap += ',';
 datap +="[\"Language code\",\""+decodep(cg.language_code)+"\"]";datap += ',';
 datap +="[\"Pub code\",\""+decodep(cg.pub_code)+"\"]";datap += ',';
 datap +="[\"Sub code\",\""+decodep(cg.sub_code)+"\"]";datap += ',';
 datap +="[\"Periodicity\",\""+decodep(cg.periodicity)+"\"]";datap += ',';
 datap +="[\"Issn\",\""+decodep(cg.issn)+"\"]";datap += ',';
 datap +="[\"Annual index\",\""+decodep(cg.annual_index)+"\"]";datap += ',';
 datap +="[\"Style of treatment\",\""+decodep(cg.style_of_treatment)+"\"]";datap += ',';
 datap +="[\"Articles indexed\",\""+decodep(cg.articles_indexed)+"\"]";datap += ',';
 datap +="[\"New vol begins\",\""+decodep(cg.new_vol_begins)+"\"]";datap += ',';
 datap +="[\"Mode of aqusition\",\""+decodep(cg.mode_of_aqusition)+"\"]";datap += ',';
 datap +="[\"Agent code\",\""+decodep(cg.agent_code)+"\"]";datap += ',';
 datap +="[\"Exchange for\",\""+decodep(cg.exchange_for)+"\"]";datap += ',';
 datap +="[\"Class no\",\""+decodep(cg.class_no)+"\"]";datap += ',';
 datap +="[\"Vol begins\",\""+decodep(cg.vol_begins)+"\"]";datap += ',';
 datap +="[\"Note\",\""+decodep(cg.note)+"\"]";datap += ',';
 datap +="[\"Is foreign\",\""+decodep(cg.is_foreign)+"\"]";datap += ',';
 datap +="[\"Last modificatio\",\""+decodep(cg.last_modificatio)+"\"]";datap += ',';
 datap +="[\"Malayalam title\",\""+decodep(cg.malayalam_title)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+periodicals_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.per_code) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.title) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<periodical_data_entry>";
datax+="<sl_no>"+periodicals_NM1 +"</sl_no>";
datax+="<per_code>"+cg.per_code +"</per_code>";
datax+="<title>"+cg.title +"</title>";
datax+="<chief_editor>"+cg.chief_editor +"</chief_editor>";
datax+="<language_code>"+cg.language_code +"</language_code>";
datax+="<pub_code>"+cg.pub_code +"</pub_code>";
datax+="<sub_code>"+cg.sub_code +"</sub_code>";
datax+="<periodicity>"+cg.periodicity +"</periodicity>";
datax+="<issn>"+cg.issn +"</issn>";
datax+="<annual_index>"+cg.annual_index +"</annual_index>";
datax+="<style_of_treatment>"+cg.style_of_treatment +"</style_of_treatment>";
datax+="<articles_indexed>"+cg.articles_indexed +"</articles_indexed>";
datax+="<new_vol_begins>"+cg.new_vol_begins +"</new_vol_begins>";
datax+="<mode_of_aqusition>"+cg.mode_of_aqusition +"</mode_of_aqusition>";
datax+="<agent_code>"+cg.agent_code +"</agent_code>";
datax+="<exchange_for>"+cg.exchange_for +"</exchange_for>";
datax+="<class_no>"+cg.class_no +"</class_no>";
datax+="<vol_begins>"+cg.vol_begins +"</vol_begins>";
datax+="<note>"+cg.note +"</note>";
datax+="<is_foreign>"+cg.is_foreign +"</is_foreign>";
datax+="<last_modificatio>"+cg.last_modificatio +"</last_modificatio>";
datax+="<malayalam_title>"+cg.malayalam_title +"</malayalam_title>";
datax+="</periodical_data_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.per_code +"\"";
datac+=",";
datac+="\""+cg.title +"\"";
datac+=",";
datac+="\""+cg.chief_editor +"\"";
datac+=",";
datac+="\""+cg.language_code +"\"";
datac+=",";
datac+="\""+cg.pub_code +"\"";
datac+=",";
datac+="\""+cg.sub_code +"\"";
datac+=",";
datac+="\""+cg.periodicity +"\"";
datac+=",";
datac+="\""+cg.issn +"\"";
datac+=",";
datac+="\""+cg.annual_index +"\"";
datac+=",";
datac+="\""+cg.style_of_treatment +"\"";
datac+=",";
datac+="\""+cg.articles_indexed +"\"";
datac+=",";
datac+="\""+cg.new_vol_begins +"\"";
datac+=",";
datac+="\""+cg.mode_of_aqusition +"\"";
datac+=",";
datac+="\""+cg.agent_code +"\"";
datac+=",";
datac+="\""+cg.exchange_for +"\"";
datac+=",";
datac+="\""+cg.class_no +"\"";
datac+=",";
datac+="\""+cg.vol_begins +"\"";
datac+=",";
datac+="\""+cg.note +"\"";
datac+=",";
datac+="\""+cg.is_foreign +"\"";
datac+=",";
datac+="\""+cg.last_modificatio +"\"";
datac+=",";
datac+="\""+cg.malayalam_title +"\"";
datat+="\n";
datat+=""+cg.per_code +"";
datat+=",";
datat+=""+cg.title +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.per_code) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.title) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.chief_editor) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.language_code) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.pub_code) +"\"";
dataj+=",";
dataj+="\"F\":\""+json_cvt(cg.sub_code) +"\"";
dataj+=",";
dataj+="\"G\":\""+json_cvt(cg.periodicity) +"\"";
dataj+=",";
dataj+="\"H\":\""+json_cvt(cg.issn) +"\"";
dataj+=",";
dataj+="\"I\":\""+json_cvt(cg.annual_index) +"\"";
dataj+=",";
dataj+="\"J\":\""+json_cvt(cg.style_of_treatment) +"\"";
dataj+=",";
dataj+="\"K\":\""+json_cvt(cg.articles_indexed) +"\"";
dataj+=",";
dataj+="\"L\":\""+json_cvt(cg.new_vol_begins) +"\"";
dataj+=",";
dataj+="\"M\":\""+json_cvt(cg.mode_of_aqusition) +"\"";
dataj+=",";
dataj+="\"N\":\""+json_cvt(cg.agent_code) +"\"";
dataj+=",";
dataj+="\"O\":\""+json_cvt(cg.exchange_for) +"\"";
dataj+=",";
dataj+="\"P\":\""+json_cvt(cg.class_no) +"\"";
dataj+=",";
dataj+="\"Q\":\""+json_cvt(cg.vol_begins) +"\"";
dataj+=",";
dataj+="\"R\":\""+json_cvt(cg.note) +"\"";
dataj+=",";
dataj+="\"S\":\""+json_cvt(cg.is_foreign) +"\"";
dataj+=",";
dataj+="\"T\":\""+date2julian(cg.last_modificatio) +"\"";
dataj+=",";
dataj+="\"U\":\""+json_cvt(cg.malayalam_title) +"\"";
dataj+="}\n";
 periodicals_end_colms();
 }
//--FUNC----sp32---------
function periodicals_header()
 {
 var key=periodical_data_keys;
 var titl=periodical_data_titl;

clear();

printf ( "<center><h2>Periodicals</h2></center>");
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
printf ( "<button type=button  onclick='periodicals_NM=0;periodicals_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:periodicals_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------