//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// classification_view() -- sp1
// classification_end_view() -- sp2
// classification_get_data() -- sp3
// classification_new() -- sp4
// classification_insert() -- sp5
// classification_view_result() -- sp6
// classification_edit() -- sp7
// classification_end_edit() -- sp8
// classification_start_edit() -- sp9
// classification_update() -- sp10
// classification_delete() -- sp11
// classification_navi() -- sp12
// classification_pdfview() -- sp13
// classification_xmlview() -- sp14
// classification_rtfview() -- sp16
// classification_txtview() -- sp17
// classification_csvview() -- sp18
// classification_jsonview() -- sp19
// classification_importfile() -- sp20
// classification_footer() -- sp21
// classification_table_head() -- sp22
// classification() -- sp23
// classification_work() -- sp24
// classification_search() -- sp25
// classification_start_rows() -- sp26
// classification_end_rows() -- sp27
// classification_rows() -- sp28
// classification_start_colms() -- sp29
// classification_end_colms() -- sp30
// classification_colms() -- sp31
// classification_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var classificationi="";
var class_no_keys=["cl_code","cl_name","sub_name","call_code"];
var class_no_typ=["varchar(20)","varchar(100)","varchar(50)","varchar(30)"];
var class_no_titl=["Cl code","Cl name","Sub name","Call code"];
var class_no_j={"cl_code":"A","cl_name":"B","sub_name":"C","call_code":"D"};
var class_no_init={"A":"","B":"","C":"","D":"","*":""};
//-----------------------
var navi="", header="" , classification_table="";
var classification_HEADING="";
 var classification_NM1=0,classification_NM=0, classification_NO_OF_ROWS=0,class_no_data;
 var classification_TXT="",classification_TXT2="", classification_SORT="",classification_CATEGORY2="",classification_ANDOR=0,classification_STYP2=0;
 var classification_SEL="",classification_SEL_RULE="", classification_SORT_ORD="",classification_CATEGORY="",classification_STYP=0;
 var classification_DATE_FROM="01/01/1000",classification_DATE_TO="01/01/3000", classification_NROWS=20;
 var class_no_data, class_no_arr=[],class_no_del_arr=[],class_no_obj2;
var class_no_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"*\":\"\"}";
var classification_na ={
 search:"Search"
, cl_code:"Cl code" 
, cl_name:"Cl name" 
, sub_name:"Sub name" 
, call_code:"Call code" 
};
var classification_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, cl_code:"" 
, cl_name:"" 
, sub_name:"" 
, call_code:"" 
};
//--FUNC----sp1----------
function classification_view(edit)
 {
 na=classification_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.cl_code ) ;
input(na.cl_code,"cl_code",7,cg.cl_code ) ;
input(na.cl_name,"cl_name",70,cg.cl_name ) ;
input(na.sub_name,"sub_name",70,cg.sub_name ) ;
input(na.call_code,"call_code",70,cg.call_code ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function classification_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function classification_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function classification_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.cl_code=json_cvt(getvlu("cl_code")) ;  
 cg.cl_name=json_cvt(getvlu("cl_name")) ;  
 cg.sub_name=json_cvt(getvlu("sub_name")) ;  
 cg.call_code=json_cvt(getvlu("call_code")) ;  
 }
//--FUNC----sp4----------
function classification_new()

 {
// ------------------------------
 clear();
  cg.cl_code=""; 
  cg.cl_name=""; 
  cg.sub_name=""; 
  cg.call_code=""; 
printf ("<form  method='POST' action='classification' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='classification_insert();' ><b>INSERT</b></button>");
 classification_view(1);
 printf("<button name='action' value='insert' type='button' onclick='classification_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function classification_insert() {
if( passcheck(2)==1) return ; 
 classification_get_data(); 
var uid=db_uid("class_no");
 JSO="{\"A\":\""+cg.cl_code+"\",\"B\":\""+cg.cl_name+"\",\"C\":\""+cg.sub_name+"\",\"D\":\""+cg.call_code+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO class_no ( cl_code , cl_name , sub_name , call_code ) VALUES (  '"+cg.cl_code+"' , '"+cg.cl_name+"' , '"+cg.sub_name+"' , '"+cg.call_code+"' );" );  
 dbdo(SQL,JSO,'class_no','cl_code',cg.cl_code,'insert');   
 classification_view_result() ;
 
 }
//--FUNC----sp6----------
function classification_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='classification_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function classification_edit(param) {
 clear(); 
 cg=classification_cg;
 var arr=param.split(","); 
if(arr[0]) cg.cl_code=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"classification_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.cl_code , a.cl_name , a.sub_name , a.call_code FROM  class_no  a   WHERE    cl_code ='"+ cg.cl_code +"'  ;"  );
 start_view_data=classification_start_edit ;
 view_data=classification_view ;
 end_view_data=classification_end_edit ;
 dbdata(SQL,"class_no","cl_code",cg.cl_code) ;
 } 

//--FUNC----sp8----------
function classification_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='classification_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='classification_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function classification_start_edit()
{
 printf("<form method='POST' action='classification_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='classification_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='classification_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function classification_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.cl_code=arr[0];
 classification_get_data();
var uid=db_uid("class_no");
 JSO="{\"A\":\""+cg.cl_code+"\",\"B\":\""+cg.cl_name+"\",\"C\":\""+cg.sub_name+"\",\"D\":\""+cg.call_code+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE class_no  SET  cl_code = '"+cg.cl_code+"' ,  cl_name = '"+cg.cl_name+"' ,  sub_name = '"+cg.sub_name+"' ,  call_code = '"+cg.call_code+"'  WHERE cl_code='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'class_no','cl_code','"+IDX+"','update');"; 
eval(wherej);
 classification_view_result() ;
 }
//--FUNC----sp11---------
function classification_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.cl_code=arr[0];
 classification_get_data();
 var IDX=sprintf(IDX,"cg.cl_code" ) ;
 JSO="{\"A\":\""+cg.cl_code+"\",,\"B\":\""+cg.cl_name+"\",,\"C\":\""+cg.sub_name+"\",,\"D\":\""+cg.call_code+"\"}";
SQL=sprintf(SQL,"DELETE FROM class_no WHERE  cl_code ='"+ cg.cl_code +"'    " ) ;
 dbdo(SQL,JSO,'class_no','cl_code',cg.cl_code,'delete');   
 classification_view_result() ;
 }
//--FUNC----sp12---------
function classification_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='classification_NM +=classification_NROWS;if(classification_NM > COUNT) classification_NM=COUNT; classification_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='classification_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='classification_NM =0; classification_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='classification_NM -=classification_NROWS;if(classification_NM < 0) classification_NM=0;  classification_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='classification_NM +=classification_NROWS;if(classification_NM > COUNT) classification_NM=COUNT; classification_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function classification_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Cl code\"";
 datapdf += ",";
 datapdf += "\"Cl name\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("classification.pdf");
 
}

//--FUNC----sp14---------
function classification_xmlview ()
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
 dataxs += "\n <h2>classification</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Cl code</th> ";
 dataxs += "\n <th>Cl name</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/class_no_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='cl_code'/></td> ";
 dataxs += "\n <td><xsl:value-of select='cl_name'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "class_no.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function classification_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Book Classification \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Cl code}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Cl name}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "classification.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function classification_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "classification.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function classification_csvview ()
{
 var datacs="" ;
 datacs += "Cl code, ";
 datacs += "Cl name, ";
 datacs += "Sub name, ";
 datacs += "Call code, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "class_no.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function classification_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "class_no.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function classification_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(class_no_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "class_no.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function classification_importfile(typ)
{
 }

//--FUNC----sp21---------
function classification_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:classification_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:classification_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:classification_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:classification_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:classification_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:classification_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:if(classification_SEL.length >0) cg.cl_code=classification_SEL;classification_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function classification_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+classification_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function classification ()
{
 if (passcheck(1)==1) return  ; 
 classification_HEADING="";

 classification_header ();
 classification_navi();

 classification_search ();
 classification_footer ();
}
//--FUNC----sp24---------
function classification_work(txtv,tvalv,stypv,heading)

 {
 classification_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 classification_TXT=document.getElementById("tx").value ;
 classification_STYP =document.getElementById("styp").value*1 ;
 classification_ANDOR =document.getElementById("andor").value*1 ;
 classification_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 classification_TXT2=document.getElementById("tx2").value ;
 classification_STYP2 =document.getElementById("styp2").value*1 ;
 classification_SEL=document.getElementById("sel").value ;
 classification_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 classification_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) classification_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) classification_NM +=snos ;

 classification_navi();

 classification_search ();
 classification_footer ();
 }

//--FUNC----sp25---------
function classification_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_class_no==0) {
 load_data("class_no.zjo","class_no");
 load_data("class_no.json","class_no");
 load_data_del("class_no_del.json","class_no");
LOAD_class_no=1;
 }
 classification_NM1=classification_NM;
 
 clear();
 classification_navi();

 cg=classification_cg;
 where ="";
 if (classification_SEL.length)
    {
   sel_search ("cl_code", classification_SEL,"class_no",1);
    }
 if (classification_SEL_RULE.length)
    {
   sel_search ("", classification_SEL_RULE,"class_no",1);
    }
 if (classification_TXT.length)
    {
      if (classification_CATEGORY== "NIL");

 else if (classification_CATEGORY == "cl_code")
 where_char ( "cl_code",   classification_TXT, classification_STYP,"class_no");
 else if (classification_CATEGORY == "cl_name")
 where_char ( "cl_name",   classification_TXT, classification_STYP,"class_no");
 else if (classification_CATEGORY == "sub_name")
 where_char ( "sub_name",   classification_TXT, classification_STYP,"class_no");
 else if (classification_CATEGORY == "call_code")
 where_char ( "call_code",   classification_TXT, classification_STYP,"class_no");
  else  where=" " ;
}
 if (classification_TXT2.length)
    {
 if (classification_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (classification_CATEGORY2== "NIL");

 else if (classification_CATEGORY2 == "cl_code")
 where2_char ( "cl_code",  classification_TXT2, classification_STYP2,"class_no",classification_ANDOR);
 else if (classification_CATEGORY2 == "cl_name")
 where2_char ( "cl_name",  classification_TXT2, classification_STYP2,"class_no",classification_ANDOR);
 else if (classification_CATEGORY2 == "sub_name")
 where2_char ( "sub_name",  classification_TXT2, classification_STYP2,"class_no",classification_ANDOR);
 else if (classification_CATEGORY2 == "call_code")
 where2_char ( "call_code",  classification_TXT2, classification_STYP2,"class_no",classification_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM class_no a  WHERE 1=1 "+where+where2 );
 table_head=classification_table_head ;
  dbget(SQL,where,"class_no") ;
  classification_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  cl_code , cl_name , sub_name , call_code FROM class_no a  WHERE 1=1 "+  where + where2 +classification_SORT+" "+classification_SORT_ORD+ " LIMIT "+classification_NROWS+" OFFSET  "+classification_NM );
 if (DISPCOL==1) {
 display_start=classification_start_colms ;
 display_rows=classification_colms ;
 display_end=classification_end_colms ;
 } else  {
 display_start=classification_start_rows ;
 display_rows=classification_rows ;
 display_end=classification_end_rows ;
 } 
  dbselect(SQL,where,classification_SORT,classification_NROWS,classification_NM,"class_no") ;

 classification_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function classification_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;classification_SORT=\" ORDER BY cl_code\" ;sorting(\"cl_code\",\"class_no\") ; classification_work();' >Cl code</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;classification_SORT=\" ORDER BY cl_name\" ;sorting(\"cl_name\",\"class_no\") ; classification_work();' >Cl name</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function classification_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function classification_rows(cg)
 {
  ir++ ;
  classification_NM1++;
 var nnn= classification_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:classification_edit(\""+cg.cl_code+"\");'>"+classification_NM1+". </a></div>");
 printf("<div class=cell><a href='javascript:DISPCOL=1;classification_NROWS=1;classification_NM="+nnn+"; classification_search();'>" + decodeh(cg.cl_code) + "</a></div>");
 printf("<div class=cell>" + decodeh(cg.cl_name) + "</div>");
 show_link("books",cg.cl_code,"books");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+classification_NM1+'\",'
 datap +="\""+decodep(cg.cl_code)+"\"";datap += ',';
 datap +="\""+decodep(cg.cl_name)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+classification_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.cl_code) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.cl_name) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<class_no_entry>";
datax+="<sl_no>"+classification_NM1 +"</sl_no>";
datax+="<cl_code>"+cg.cl_code +"</cl_code>";
datax+="<cl_name>"+cg.cl_name +"</cl_name>";
datax+="<sub_name>"+cg.sub_name +"</sub_name>";
datax+="<call_code>"+cg.call_code +"</call_code>";
datax+="</class_no_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.cl_code +"\"";
datac+=",";
datac+="\""+cg.cl_name +"\"";
datac+=",";
datac+="\""+cg.sub_name +"\"";
datac+=",";
datac+="\""+cg.call_code +"\"";
datat+="\n";
datat+=""+cg.cl_code +"";
datat+=",";
datat+=""+cg.cl_name +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.cl_code) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.cl_name) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.sub_name) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.call_code) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function classification_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function classification_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function classification_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= classification_na;
 classification_start_colms();
  ir++ ;
  classification_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:classification_edit(\""+cg.cl_code+"\");'>"+classification_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Cl code</div><div class=cell>" + decodeh(cg.cl_code) + "</div></div>");
 printf("<div  class=row ><div class=cell>Cl name</div><div class=cell>" + decodeh(cg.cl_name) + "</div></div>");
 printf("<div  class=row ><div class=cell>Sub name</div><div class=cell>" + decodeh(cg.sub_name) + "</div></div>");
 printf("<div  class=row ><div class=cell>Call code</div><div class=cell>" + decodeh(cg.call_code) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Cl code\",\""+decodep(cg.cl_code)+"\"]";datap += ',';
 datap +="[\"Cl name\",\""+decodep(cg.cl_name)+"\"]";datap += ',';
 datap +="[\"Sub name\",\""+decodep(cg.sub_name)+"\"]";datap += ',';
 datap +="[\"Call code\",\""+decodep(cg.call_code)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar+="\n{\\pard\\intbl\\ql { "+classification_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.cl_code) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.cl_name) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<class_no_entry>";
datax+="<sl_no>"+classification_NM1 +"</sl_no>";
datax+="<cl_code>"+cg.cl_code +"</cl_code>";
datax+="<cl_name>"+cg.cl_name +"</cl_name>";
datax+="<sub_name>"+cg.sub_name +"</sub_name>";
datax+="<call_code>"+cg.call_code +"</call_code>";
datax+="</class_no_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.cl_code +"\"";
datac+=",";
datac+="\""+cg.cl_name +"\"";
datac+=",";
datac+="\""+cg.sub_name +"\"";
datac+=",";
datac+="\""+cg.call_code +"\"";
datat+="\n";
datat+=""+cg.cl_code +"";
datat+=",";
datat+=""+cg.cl_name +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.cl_code) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.cl_name) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.sub_name) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.call_code) +"\"";
dataj+="}\n";
 classification_end_colms();
 }
//--FUNC----sp32---------
function classification_header()
 {
 var key=class_no_keys;
 var titl=class_no_titl;

clear();

printf ( "<center><h2>Book Classification</h2></center>");
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
printf ( "<button type=button  onclick='classification_NM=0;classification_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( " *  <a href='javascript:if(classification_SEL.length >0) cg.cl_code=classification_SEL;classification_new();' > New Entry </a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------
