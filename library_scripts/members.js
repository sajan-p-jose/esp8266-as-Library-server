//Script writer:Sajan P Jose,Kerala,INDIA E-mail: sajan.p.jose@gmail.com,Web site:www.ccoms.info Date:27/01/2019
// members_view() -- sp1
// members_end_view() -- sp2
// members_get_data() -- sp3
// members_new() -- sp4
// members_insert() -- sp5
// members_view_result() -- sp6
// members_edit() -- sp7
// members_end_edit() -- sp8
// members_start_edit() -- sp9
// members_update() -- sp10
// members_delete() -- sp11
// members_navi() -- sp12
// members_pdfview() -- sp13
// members_xmlview() -- sp14
// members_rtfview() -- sp16
// members_txtview() -- sp17
// members_csvview() -- sp18
// members_jsonview() -- sp19
// members_importfile() -- sp20
// members_footer() -- sp21
// members_table_head() -- sp22
// members() -- sp23
// members_work() -- sp24
// members_search() -- sp25
// members_start_rows() -- sp26
// members_end_rows() -- sp27
// members_rows() -- sp28
// members_start_colms() -- sp29
// members_end_colms() -- sp30
// members_colms() -- sp31
// members_header() -- sp32
var start=0 ,end=20,len=0,nos=20,ar=0,startno=0; 
var arr=[];
var len=0;
var membersi="";
var members_keys=["id","name","phone","address","notes"];
var members_typ=["int","varchar (300)","varchar (300)","varchar (300)","varchar (300)"];
var members_titl=["Id","Name","Phone","Address","Notes"];
var members_j={"id":"A","name":"B","phone":"C","address":"D","notes":"E"};
var members_init={"A":"0","B":"","C":"","D":"","E":"","*":""};
//-----------------------
var navi="", header="" , members_table="";
var members_HEADING="";
 var members_NM1=0,members_NM=0, members_NO_OF_ROWS=0,members_data;
 var members_TXT="",members_TXT2="", members_SORT="",members_CATEGORY2="",members_ANDOR=0,members_STYP2=0;
 var members_SEL="",members_SEL_RULE="", members_SORT_ORD="",members_CATEGORY="",members_STYP=0;
 var members_DATE_FROM="01/01/1000",members_DATE_TO="01/01/3000", members_NROWS=20;
 var members_data, members_arr=[],members_del_arr=[],members_obj2;
var members_obj="{\"A\":\"\",\"B\":\"\",\"C\":\"\",\"D\":\"\",\"E\":\"\",\"*\":\"\"}";
var members_na ={
 search:"Search"
, id:"Id" 
, name:"Name" 
, phone:"Phone" 
, address:"Address" 
, notes:"Notes" 
};
var members_cg ={
 sel:""
 ,dummy:""
 ,sel_rule:""
 ,id:""
 ,date_from:""
 ,date_to:""
, id:"" 
, name:"" 
, phone:"" 
, address:"" 
, notes:"" 
};
//--FUNC----sp1----------
function members_view(edit)
 {
 na=members_na;
printf("<table class=entry  width=100% >") ;
input("","dummy",0,cg.id ) ;
input(na.id,"id",7,cg.id ) ;
input(na.name,"name",70,cg.name ) ;
input(na.phone,"phone",70,cg.phone ) ;
input(na.address,"address",70,cg.address ) ;
input(na.notes,"notes",70,cg.notes ) ;
printf ("</table>");
}

//--FUNC----sp1a----------
//-------------------------------------
function members_start_view()
{
}
//-------------------------------------
//--FUNC----sp2----------
function members_end_view()
{
refresh("rows");
}
//-------------------------------------
//--FUNC----sp3----------
function members_get_data()
 {
 cg.dummy=getvlu("dummy") ;  
 cg.id=json_cvt(getvlu("id")) ;  
 cg.name=json_cvt(getvlu("name")) ;  
 cg.phone=json_cvt(getvlu("phone")) ;  
 cg.address=json_cvt(getvlu("address")) ;  
 cg.notes=json_cvt(getvlu("notes")) ;  
 }
//--FUNC----sp4----------
function members_new()

 {
// ------------------------------
 clear();
  cg.id="0" ;
  cg.name=""; 
  cg.phone=""; 
  cg.address=""; 
  cg.notes=""; 
printf ("<form  method='POST' action='members' name='form1' >") ;
 printf("<button name='action' value='insert' type='button' onclick='members_insert();' ><b>INSERT</b></button>");
 cg.id  =db_new_id("members","members","id") ;
 members_view(1);
 printf("<button name='action' value='insert' type='button' onclick='members_insert();' ><b>INSERT</b></button>");
 printf("</form>");
 refresh("rows");
 
 }
//--FUNC----sp5----------
function members_insert() {
if( passcheck(2)==1) return ; 
 members_get_data(); 
var uid=db_uid("members");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.name+"\",\"C\":\""+cg.phone+"\",\"D\":\""+cg.address+"\",\"E\":\""+cg.notes+"\",\"*\":\""+uid+"\" }";
  SQL=sprintf_enc (SQL," INSERT INTO members ( id , name , phone , address , notes ) VALUES (  "+atoi(cg.id)+" , '"+cg.name+"' , '"+cg.phone+"' , '"+cg.address+"' , '"+cg.notes+"' );" );  
 dbdo(SQL,JSO,'members','id',cg.id,'insert');   
 members_view_result() ;
 
 }
//--FUNC----sp6----------
function members_view_result()
{
 clear();
 refresh("titles");
 refresh("navi1");
 refresh("navi2");
 printf (RESULT);
 printf (" <div ><a href='#' onclick='index_page();'><font size=+2>Index </font> </a>");
 printf (" * <a href='#' onclick='members_work();'><font size=+2> Home </font> </a></div>");
 
 refresh("rows");
}
//-------------------------------------
//--FUNC----sp7----------
function members_edit(param) {
 clear(); 
 cg=members_cg;
 var arr=param.split(","); 
if(arr[0]) cg.id=arr[0];
 printf( "<center>");
 printf("<a href='javascript:save_photo(\"members_"+cg.id+".jpg\");'  >Select image</a></center>");
SQL=sprintf(SQL,"SELECT  a.id , a.name , a.phone , a.address , a.notes FROM  members  a   WHERE    id ='"+ cg.id +"'  ;"  );
 start_view_data=members_start_edit ;
 view_data=members_view ;
 end_view_data=members_end_edit ;
 dbdata(SQL,"members","id",cg.id) ;
 } 

//--FUNC----sp8----------
function members_end_edit()
 {
 printf("<button  name='action'  value='update'  type='button' onclick='members_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button  name='action'  value='delete'  type='button' onclick='members_delete(\""+cg.id+"\");' ><b>Delete</b></button>");
 printf("</form>");
 refresh("rows");
 } 

//--FUNC----sp9----------
function members_start_edit()
{
 printf("<form method='POST' action='members_update' name='form1' >"); 
 printf("<button name='action' value='update' type='button' onclick='members_update(\""+cg.id+"\");' ><b>Update</b> . </button>");
 printf("<button name='action' value='delete' type='button' onclick='members_delete(\""+cg.id+"\");' ><b>Delete</b></button>");

 } 
//--FUNC----sp10---------
function members_update(param)
 {
if( passcheck(3)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 members_get_data();
var uid=db_uid("members");
 JSO="{\"A\":\""+cg.id+"\",\"B\":\""+cg.name+"\",\"C\":\""+cg.phone+"\",\"D\":\""+cg.address+"\",\"E\":\""+cg.notes+"\",\"*\":\""+uid+"\" }";
 SQL= sprintf_enc(SQL,"  UPDATE members  SET  id = '"+cg.id+"' ,  name = '"+cg.name+"' ,  phone = '"+cg.phone+"' ,  address = '"+cg.address+"' ,  notes = '"+cg.notes+"'  WHERE id='"+cg.dummy+"' ;" ); 
 var IDX=sprintf(IDX, cg.dummy ) ;
wherej="dbdo(SQL,JSO,'members','id','"+IDX+"','update');"; 
eval(wherej);
 members_view_result() ;
 }
//--FUNC----sp11---------
function members_delete(param)
 {
if(!confirm("Delete ")) return ;
 if(passcheck(4)==1) return ; 
 var arr=param.split(","); 
if(arr[0]) cg.id=cg.id=arr[0];
 members_get_data();
 var IDX=sprintf(IDX,"cg.id" ) ;
 JSO="{\"A\":\""+cg.id+"\",,\"B\":\""+cg.name+"\",,\"C\":\""+cg.phone+"\",,\"D\":\""+cg.address+"\",,\"E\":\""+cg.notes+"\"}";
SQL=sprintf(SQL,"DELETE FROM members WHERE  id ='"+ cg.id +"'    " ) ;
 dbdo(SQL,JSO,'members','id',cg.id,'delete');   
 members_view_result() ;
 }
//--FUNC----sp12---------
function members_navi()

 {

clear();

printf ( "<div class=row ><div class=celln><input type=button value=Next class=navi  onclick='members_NM +=members_NROWS;if(members_NM > COUNT) members_NM=COUNT; members_search();' ></div>");
printf ("<div class=celln><input type=button class=navi  value=Index onclick='index_page();' ></div>");
 printf ("<div class=celln><input  class=navi type=button value=Home  onclick='members_search();' ></div>");
 printf ( "<div class=celln><input type=button  class=navi value=First onclick='members_NM =0; members_search();' ></div>");
printf ( "<div class=celln><input type=button value=Back class=navi  onclick='members_NM -=members_NROWS;if(members_NM < 0) members_NM=0;  members_search();' ></div>");
printf ( "<div class=celln><input type=button value=Next class=navi  onclick='members_NM +=members_NROWS;if(members_NM > COUNT) members_NM=COUNT; members_search();' ></div>");
printf ( "</div>");
refresh("navi1") ;

refresh("navi2") ;

 }

//--FUNC----sp13---------
function members_pdfview ()
{
var  datapdf ="";
 if(DISPCOL !=1) { datapdf += "[\"No.\",";
 datapdf += "\"Id\"";
 datapdf += ",";
 datapdf += "\"Name\"";
 datapdf += ",";
 datapdf += "\"Phone\"";
 datapdf += "], ";}
load_pdf();
 msgview("Preparing PDF");
 var dataps='{ "content":  [{"table": {"headerRows":1, "body": ['+datapdf+datap+'] } }] }';
 var docDefinition= JSON.parse(dataps) ;
 pdfMake.createPdf(docDefinition).download("members.pdf");
 
}

//--FUNC----sp14---------
function members_xmlview ()
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
 dataxs += "\n <h2>members</h2> ";
 dataxs += "\n <table > ";
 dataxs += "\n <tr> ";
 dataxs += "\n <th>No.</th> ";
 dataxs += "\n <th>Id</th> ";
 dataxs += "\n <th>Name</th> ";
 dataxs += "\n <th>Phone</th> ";
 dataxs += "\n </tr> ";

 dataxs += "\n <xsl:for-each select='document/members_entry'> ";
 dataxs += "\n <tr> ";
 dataxs += "\n <td><xsl:value-of select='sl_no'/></td> ";
 dataxs += "\n <td><xsl:value-of select='id'/></td> ";
 dataxs += "\n <td><xsl:value-of select='name'/></td> ";
 dataxs += "\n <td><xsl:value-of select='phone'/></td> ";
 dataxs += "\n </tr> ";
 dataxs += "\n </xsl:for-each> ";

 dataxs += "\n </table> ";
 dataxs += "\n </body> ";
 dataxs += "\n </html> ";
 dataxs += "\n</xsl:template> ";
 dataxs += "\n</xsl:stylesheet>";
 dataxs +=datax ;
 dataxs +="\n</document>";
 file_xml = new File([dataxs], "members.xhtml", {type: "text/xml;"});
 saveAs(file_xml);
 
}
//--FUNC----sp16---------
function members_rtfview ()
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
datars += "{\\fs40 \\pard\\plain\\s9\\qc\\sb120\\sa120\\keep\\widctlpar\\f0\\sl240\\slmult1 \\fi0 \\fs40 Members \\fs24 \\par}";
datars += "{\\trowd";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datars += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datars+="\n{\\pard\\intbl\\ql {No.}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Id}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Name}\\cell}";
datars+="\n{\\pard\\intbl\\ql {Phone}\\cell}";
datars+="\\row} ";
 datars +=datar ;
 datars +="\\par }";
 file_rtf = new File([datars], "members.rtf", {type: "text/rtf;"});
 saveAs(file_rtf);
 
}
//--FUNC----sp17---------
function members_txtview ()
{
 var datats="" ;
 datats +=datat ;
 file_txt = new File([datats], "members.txt", {type: "text/plain;"});
 saveAs(file_txt);
 
}
//--FUNC----sp18---------
function members_csvview ()
{
 var datacs="" ;
 datacs += "Id, ";
 datacs += "Name, ";
 datacs += "Phone, ";
 datacs += "Address, ";
 datacs += "Notes, ";
 datacs +="\n" ;
 datacs +=datac ;
 file_csv = new File([datacs], "members.csv", {type: "text/csv;"});
 saveAs(file_csv);
 
}
//--FUNC----sp19---------
function members_jsonview ()
{
 var datajs="" ;
 datajs +=dataj ;
 file_json = new File([datajs], "members.json", {type: "text/json;"});
 saveAs(file_json);
 
}
//--FUNC----sp19b---------
function members_jsonviewzip ()
{
 var datajs="" ;
 datajs +=dataj ;
 var di=stringToByteArray(members_obj);
 var gzip=new Zlib.Gzip(di) ;
 var dataz=gzip.compress();
 file_json_zip = new File([dataz], "members.zjo", {type: "application/gzip;"});
 saveAs(file_json_zip);
 
}
//--FUNC----sp20---------
function members_importfile(typ)
{
 }

//--FUNC----sp21---------
function members_footer()
 {
clear();

printf ( "<div class=row> <div class=celln>  <a href='javascript:members_xmlview();' download >XML</a></div>");
printf ( " <div class=celln>  <a href='javascript:members_rtfview();' >DOC</a></div>");
printf ( " <div class=celln>  <a href='javascript:members_csvview();' download >CSV</a></div>");
printf ( " <div class=celln>  <a href='javascript:members_pdfview();' >PDF</a></div>");

printf ( "  <div class=celln>  <a href='javascript:members_jsonview();' download >Json</a></div>");
printf ( " <div class=celln>  <a href='javascript:members_txtview();' >TXT</a></div>");
printf ( "</div> <div class=row><div class=celln> <a href='javascript:index_page();' > Menu</a></div> ");
printf ( " <div class=celln>  <a href='javascript:members_new();' >New Entry</a></div>");
printf ( "</div>");
refresh("foot"); 

 }

//--FUNC----sp22---------
function members_table_head()
 {
clear(); 
 printf ("<div class=row><div class=cell>"+members_HEADING+"</div>");
 printf("<div class=cell>No of selections="+COUNT+"</div>");
 printf ("</div>");
 refresh("titles"); 
 }
// ------------------------------
//--FUNC----sp23---------
//-----------------------
function members ()
{
 if (passcheck(1)==1) return  ; 
 members_HEADING="";

 members_header ();
 members_navi();

 members_search ();
 members_footer ();
}
//--FUNC----sp24---------
function members_work(txtv,tvalv,stypv,heading)

 {
 members_CATEGORY= document.getElementById("cat")[document.getElementById("cat").selectedIndex].value;
 members_TXT=document.getElementById("tx").value ;
 members_STYP =document.getElementById("styp").value*1 ;
 members_ANDOR =document.getElementById("andor").value*1 ;
 members_CATEGORY2= document.getElementById("cat2")[document.getElementById("cat2").selectedIndex].value;
 members_TXT2=document.getElementById("tx2").value ;
 members_STYP2 =document.getElementById("styp2").value*1 ;
 members_SEL=document.getElementById("sel").value ;
 members_SEL_RULE=document.getElementById("sel_rule").value ;
 if(document.getElementById("dispcol").checked) DISPCOL=1 ;  else DISPCOL=0; 
 members_NROWS =document.getElementById("nos").value*1 ;
 if(DISPCOL==1) members_NROWS=1;
 var snos=document.getElementById("snos").value*1 ;
 if(snos > 0) members_NM +=snos ;

 members_navi();

 members_search ();
 members_footer ();
 }

//--FUNC----sp25---------
function members_search()

 {
 ir=0;datap="";datax="";datar="";datat="";dataj="";datac=""; 
if (LOAD_members==0) {
 load_data("members.zjo","members");
 load_data("members.json","members");
 load_data_del("members_del.json","members");
LOAD_members=1;
 }
 members_NM1=members_NM;
 
 clear();
 members_navi();

 cg=members_cg;
 where ="";
 if (members_SEL.length)
    {
   sel_search ("", members_SEL,"members",1);
    }
 if (members_SEL_RULE.length)
    {
   sel_search ("", members_SEL_RULE,"members",1);
    }
 if (members_TXT.length)
    {
      if (members_CATEGORY== "NIL");

 else if (members_CATEGORY == "id")
 where_int ( "id",  members_TXT, members_STYP,"members");
 else if (members_CATEGORY == "name")
 where_char ( "name",   members_TXT, members_STYP,"members");
 else if (members_CATEGORY == "phone")
 where_char ( "phone",   members_TXT, members_STYP,"members");
 else if (members_CATEGORY == "address")
 where_char ( "address",   members_TXT, members_STYP,"members");
 else if (members_CATEGORY == "notes")
 where_char ( "notes",   members_TXT, members_STYP,"members");
  else  where=" " ;
}
 if (members_TXT2.length)
    {
 if (members_ANDOR == 1)
 where2 =" AND ";
 else 
 where2 =" OR ";
      if (members_CATEGORY2== "NIL");

 else if (members_CATEGORY2 == "id")
 where2_int ( "id",   members_TXT2, members_STYP2,"members",members_ANDOR);
 else if (members_CATEGORY2 == "name")
 where2_char ( "name",  members_TXT2, members_STYP2,"members",members_ANDOR);
 else if (members_CATEGORY2 == "phone")
 where2_char ( "phone",  members_TXT2, members_STYP2,"members",members_ANDOR);
 else if (members_CATEGORY2 == "address")
 where2_char ( "address",  members_TXT2, members_STYP2,"members",members_ANDOR);
 else if (members_CATEGORY2 == "notes")
 where2_char ( "notes",  members_TXT2, members_STYP2,"members",members_ANDOR);
  else  where2=" " ;
}
 var records=0;
 SQL=sprintf(SQL,"SELECT count(*) AS no_of  FROM members a  WHERE 1=1 "+where+where2 );
 table_head=members_table_head ;
  dbget(SQL,where,"members") ;
  members_NO_OF_ROWS = COUNT ;
 SQL=  sprintf (SQL,
	   "SELECT  id , name , phone , address , notes FROM members a  WHERE 1=1 "+  where + where2 +members_SORT+" "+members_SORT_ORD+ " LIMIT "+members_NROWS+" OFFSET  "+members_NM );
 if (DISPCOL==1) {
 display_start=members_start_colms ;
 display_rows=members_colms ;
 display_end=members_end_colms ;
 } else  {
 display_start=members_start_rows ;
 display_rows=members_rows ;
 display_end=members_end_rows ;
 } 
  dbselect(SQL,where,members_SORT,members_NROWS,members_NM,"members") ;

 members_footer ();
 }
// ---------------------
//--FUNC----sp26---------
function members_start_rows()
 {
clear(); 
 printf ("<div class=row><div class=cell></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;members_SORT=\" ORDER BY id\" ;sorting(\"id\",\"members\") ; members_work();' >Id</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;members_SORT=\" ORDER BY name\" ;sorting(\"name\",\"members\") ; members_work();' >Name</a></div>");
 printf ("<div  class=cell ><a href='#' onclick='NM=0;members_SORT=\" ORDER BY phone\" ;sorting(\"phone\",\"members\") ; members_work();' >Phone</a></div>");
 printf ("</div>");
 }
//--FUNC----sp27---------
function members_end_rows()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp28---------
function members_rows(cg)
 {
  ir++ ;
  members_NM1++;
 var nnn= members_NM1-1;
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:members_edit(\""+cg.id+"\");'>"+members_NM1+". </a></div>");
 printf("<div class=cell><a href='javascript:DISPCOL=1;members_NROWS=1;members_NM="+nnn+"; members_search();'>" + decodeh(cg.id) + "</a></div>");
 printf("<div class=cell>" + decodeh(cg.name) + "</div>");
 printf("<div class=cell>" + decodeh(cg.phone) + "</div>");
 show_link("lending",cg.id,"lending");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap +='[\"'+members_NM1+'\",'
 datap +="\""+decodep(cg.id)+"\"";datap += ',';
 datap +="\""+decodep(cg.name)+"\"";datap += ',';
 datap +="\""+decodep(cg.phone)+"\"";
 datap +=']';
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar+="\n{\\pard\\intbl\\ql { "+members_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.name) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.phone) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<members_entry>";
datax+="<sl_no>"+members_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<name>"+cg.name +"</name>";
datax+="<phone>"+cg.phone +"</phone>";
datax+="<address>"+cg.address +"</address>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="</members_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.name +"\"";
datac+=",";
datac+="\""+cg.phone +"\"";
datac+=",";
datac+="\""+cg.address +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.name +"";
datat+=",";
datat+=""+cg.phone +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.name) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.phone) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.address) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.notes) +"\"";
dataj+="}\n";
 }
//--FUNC----sp29---------
function members_start_colms()
 {
clear(); 
 }
//--FUNC----sp30---------
function members_end_colms()
 {
  printf("</div>");
  refresh("rows");
 }
//--FUNC----sp31---------
function members_colms(cg)
 {
 DISPCOL=1;parishioner_NROWS=1;
 na= members_na;
 members_start_colms();
  ir++ ;
  members_NM1++;
 printf( "<div  class=table >");
 printf( "<div  class=row >");
 printf("<div class=cell ><a href='javascript:members_edit(\""+cg.id+"\");'>"+members_NM1+". </a></div></div>");
 printf("<div  class=row ><div class=cell>Id</div><div class=cell>" + decodeh(cg.id) + "</div></div>");
 printf("<div  class=row ><div class=cell>Name</div><div class=cell>" + decodeh(cg.name) + "</div></div>");
 printf("<div  class=row ><div class=cell>Phone</div><div class=cell>" + decodeh(cg.phone) + "</div></div>");
 printf("<div  class=row ><div class=cell>Address</div><div class=cell>" + decodeh(cg.address) + "</div></div>");
 printf("<div  class=row ><div class=cell>Notes</div><div class=cell>" + decodeh(cg.notes) + "</div></div>");
printf("</div>");
printf("</div>");
 
 if(ir >1) datap +=',';
 datap=""; 
 datap +="[\"Id\",\""+decodep(cg.id)+"\"]";datap += ',';
 datap +="[\"Name\",\""+decodep(cg.name)+"\"]";datap += ',';
 datap +="[\"Phone\",\""+decodep(cg.phone)+"\"]";datap += ',';
 datap +="[\"Address\",\""+decodep(cg.address)+"\"]";datap += ',';
 datap +="[\"Notes\",\""+decodep(cg.notes)+"\"]";
 
datar += "{\\trowd";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx500";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx2000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx4000";
datar += "\\clbrdrl\\brdrs\\clbrdrt\\brdrs\\clbrdrb\\brdrdb\\clbrdrr\\brdrs\\cellx6000";
datar+="\n{\\pard\\intbl\\ql { "+members_NM1 +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.id) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.name) +"}\\cell}";
datar+="\n{\\pard\\intbl\\ql { "+utf8esc(cg.phone) +"}\\cell}"; 
datar+="\\row} ";
 
datax+="<members_entry>";
datax+="<sl_no>"+members_NM1 +"</sl_no>";
datax+="<id>"+cg.id +"</id>";
datax+="<name>"+cg.name +"</name>";
datax+="<phone>"+cg.phone +"</phone>";
datax+="<address>"+cg.address +"</address>";
datax+="<notes>"+cg.notes +"</notes>";
datax+="</members_entry>";
 
if(ir>0) datac+="\n";
datac+="\""+cg.id +"\"";
datac+=",";
datac+="\""+cg.name +"\"";
datac+=",";
datac+="\""+cg.phone +"\"";
datac+=",";
datac+="\""+cg.address +"\"";
datac+=",";
datac+="\""+cg.notes +"\"";
datat+="\n";
datat+=""+cg.id +"";
datat+=",";
datat+=""+cg.name +"";
datat+=",";
datat+=""+cg.phone +"";
 if(ir>1)   dataj+=",";
   dataj+="{";
dataj+="\"A\":\""+json_cvt(cg.id) +"\"";
dataj+=",";
dataj+="\"B\":\""+json_cvt(cg.name) +"\"";
dataj+=",";
dataj+="\"C\":\""+json_cvt(cg.phone) +"\"";
dataj+=",";
dataj+="\"D\":\""+json_cvt(cg.address) +"\"";
dataj+=",";
dataj+="\"E\":\""+json_cvt(cg.notes) +"\"";
dataj+="}\n";
 members_end_colms();
 }
//--FUNC----sp32---------
function members_header()
 {
 var key=members_keys;
 var titl=members_titl;

clear();

printf ( "<center><h2>Members</h2></center>");
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
printf ( "<button type=button  onclick='members_NM=0;members_work();'><font size=+2>Search</font></button> ");
printf ( " * <a href='javascript:hide_search();' >Show/Hide Search options</a>");
printf ( "  * <a href='javascript:members_new();' >New Entry</a>");
 refresh ("heading");
 hide_adv ();
 hide_search ();
 }

//----------------------------