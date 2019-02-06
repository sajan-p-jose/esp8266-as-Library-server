
var  book_details_obji ="";
var  periodical_data_obji ="";
var  class_no_obji ="";
var  introduction_obji ="";
var  cdrom_details_obji ="";
var  shelf_obji ="";
var  book_data_obji ="";
var  guide_obji ="";
var  members_obji ="";
var  lending_obji ="";
function xmlfile()
{
var data =IMPORT_DATA ;
var dta= fromXML(data);
if(!confirm("Xml file import ")) return ;
tic();
var fld="",nnn=0;
 // book_details

if (dta.document.book_details_entry) {
 book_details_obji ="";
for(var ii=0;ii<dta.document.book_details_entry.length;ii++)
{
if(ii>=1) book_details_obji +="\n,";
book_details_obji +="{";
fld=dta.document.book_details_entry[ii].call_no ;
if(fld) book_details_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  book_details_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.book_details_entry[ii].title ;
if(fld) book_details_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].author ;
if(fld) book_details_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].year_published ;
if(fld) book_details_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].isbn ;
if(fld) book_details_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].pubid ;
if(fld) book_details_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].notes ;
if(fld) book_details_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].subject ;
if(fld) book_details_obji +=",\"H\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].title_mal ;
if(fld) book_details_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].place_of_publication ;
if(fld) book_details_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].translator ;
if(fld) book_details_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].copyright_year ;
if(fld) book_details_obji +=",\"L\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].pages ;
if(fld) book_details_obji +=",\"M\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].indexed ;
if(fld) book_details_obji +=",\"N\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].bibliography ;
if(fld) book_details_obji +=",\"O\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].foot_note ;
if(fld) book_details_obji +=",\"P\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].issn ;
if(fld) book_details_obji +=",\"Q\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_details_entry[ii].series ;
if(fld) book_details_obji +=",\"R\":\""+json_cvt(fld) +"\"";
book_details_obji +="}";
}

 book_details_obj += ","+ book_details_obji;
 wherej = "book_details_obj2=JSON.parse(\"[\"+"+"book_details_obj+\"]\");";
 eval(wherej);
 wherej ="book_details_data = JsonQuery("+"book_details_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // periodical_data

if (dta.document.periodical_data_entry) {
 periodical_data_obji ="";
for(var ii=0;ii<dta.document.periodical_data_entry.length;ii++)
{
if(ii>=1) periodical_data_obji +="\n,";
periodical_data_obji +="{";
fld=dta.document.periodical_data_entry[ii].per_code ;
if(fld) periodical_data_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  periodical_data_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.periodical_data_entry[ii].title ;
if(fld) periodical_data_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].chief_editor ;
if(fld) periodical_data_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].language_code ;
if(fld) periodical_data_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].pub_code ;
if(fld) periodical_data_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].sub_code ;
if(fld) periodical_data_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].periodicity ;
if(fld) periodical_data_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].issn ;
if(fld) periodical_data_obji +=",\"H\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].annual_index ;
if(fld) periodical_data_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].style_of_treatment ;
if(fld) periodical_data_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].articles_indexed ;
if(fld) periodical_data_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].new_vol_begins ;
if(fld) periodical_data_obji +=",\"L\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].mode_of_aqusition ;
if(fld) periodical_data_obji +=",\"M\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].agent_code ;
if(fld) periodical_data_obji +=",\"N\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].exchange_for ;
if(fld) periodical_data_obji +=",\"O\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].class_no ;
if(fld) periodical_data_obji +=",\"P\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].vol_begins ;
if(fld) periodical_data_obji +=",\"Q\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].note ;
if(fld) periodical_data_obji +=",\"R\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].is_foreign ;
if(fld) periodical_data_obji +=",\"S\":\""+json_cvt(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].last_modificatio ;
if(fld) periodical_data_obji +=",\"T\":\""+date2julian(fld) +"\"";
fld=dta.document.periodical_data_entry[ii].malayalam_title ;
if(fld) periodical_data_obji +=",\"U\":\""+json_cvt(fld) +"\"";
periodical_data_obji +="}";
}

 periodical_data_obj += ","+ periodical_data_obji;
 wherej = "periodical_data_obj2=JSON.parse(\"[\"+"+"periodical_data_obj+\"]\");";
 eval(wherej);
 wherej ="periodical_data_data = JsonQuery("+"periodical_data_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // class_no

if (dta.document.class_no_entry) {
 class_no_obji ="";
for(var ii=0;ii<dta.document.class_no_entry.length;ii++)
{
if(ii>=1) class_no_obji +="\n,";
class_no_obji +="{";
fld=dta.document.class_no_entry[ii].cl_code ;
if(fld) class_no_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  class_no_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.class_no_entry[ii].cl_name ;
if(fld) class_no_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.class_no_entry[ii].sub_name ;
if(fld) class_no_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.class_no_entry[ii].call_code ;
if(fld) class_no_obji +=",\"D\":\""+json_cvt(fld) +"\"";
class_no_obji +="}";
}

 class_no_obj += ","+ class_no_obji;
 wherej = "class_no_obj2=JSON.parse(\"[\"+"+"class_no_obj+\"]\");";
 eval(wherej);
 wherej ="class_no_data = JsonQuery("+"class_no_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // introduction

if (dta.document.introduction_entry) {
 introduction_obji ="";
for(var ii=0;ii<dta.document.introduction_entry.length;ii++)
{
if(ii>=1) introduction_obji +="\n,";
introduction_obji +="{";
fld=dta.document.introduction_entry[ii].id ;
if(fld) introduction_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  introduction_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.introduction_entry[ii].title ;
if(fld) introduction_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.introduction_entry[ii].description ;
if(fld) introduction_obji +=",\"C\":\""+json_cvt(fld) +"\"";
introduction_obji +="}";
}

 introduction_obj += ","+ introduction_obji;
 wherej = "introduction_obj2=JSON.parse(\"[\"+"+"introduction_obj+\"]\");";
 eval(wherej);
 wherej ="introduction_data = JsonQuery("+"introduction_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // cdrom_details

if (dta.document.cdrom_details_entry) {
 cdrom_details_obji ="";
for(var ii=0;ii<dta.document.cdrom_details_entry.length;ii++)
{
if(ii>=1) cdrom_details_obji +="\n,";
cdrom_details_obji +="{";
fld=dta.document.cdrom_details_entry[ii].id ;
if(fld) cdrom_details_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  cdrom_details_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.cdrom_details_entry[ii].title ;
if(fld) cdrom_details_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].author ;
if(fld) cdrom_details_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].publisher ;
if(fld) cdrom_details_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].class_no ;
if(fld) cdrom_details_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].reference ;
if(fld) cdrom_details_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].tower_no ;
if(fld) cdrom_details_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=dta.document.cdrom_details_entry[ii].entry_date ;
if(fld) cdrom_details_obji +=",\"H\":\""+date2julian(fld) +"\"";
cdrom_details_obji +="}";
}

 cdrom_details_obj += ","+ cdrom_details_obji;
 wherej = "cdrom_details_obj2=JSON.parse(\"[\"+"+"cdrom_details_obj+\"]\");";
 eval(wherej);
 wherej ="cdrom_details_data = JsonQuery("+"cdrom_details_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // shelf

if (dta.document.shelf_entry) {
 shelf_obji ="";
for(var ii=0;ii<dta.document.shelf_entry.length;ii++)
{
if(ii>=1) shelf_obji +="\n,";
shelf_obji +="{";
fld=dta.document.shelf_entry[ii].id ;
if(fld) shelf_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  shelf_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.shelf_entry[ii].title ;
if(fld) shelf_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.shelf_entry[ii].classification ;
if(fld) shelf_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.shelf_entry[ii].location ;
if(fld) shelf_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.shelf_entry[ii].notes ;
if(fld) shelf_obji +=",\"E\":\""+json_cvt(fld) +"\"";
shelf_obji +="}";
}

 shelf_obj += ","+ shelf_obji;
 wherej = "shelf_obj2=JSON.parse(\"[\"+"+"shelf_obj+\"]\");";
 eval(wherej);
 wherej ="shelf_data = JsonQuery("+"shelf_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // book_data

if (dta.document.book_data_entry) {
 book_data_obji ="";
for(var ii=0;ii<dta.document.book_data_entry.length;ii++)
{
if(ii>=1) book_data_obji +="\n,";
book_data_obji +="{";
fld=dta.document.book_data_entry[ii].accession_no ;
if(fld) book_data_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  book_data_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.book_data_entry[ii].call_no ;
if(fld) book_data_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].reference ;
if(fld) book_data_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].notes ;
if(fld) book_data_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].price ;
if(fld) book_data_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].edition_year ;
if(fld) book_data_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].cover_type ;
if(fld) book_data_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].date_purchased ;
if(fld) book_data_obji +=",\"H\":\""+date2julian(fld) +"\"";
fld=dta.document.book_data_entry[ii].supplier ;
if(fld) book_data_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].currency ;
if(fld) book_data_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].shelf_row ;
if(fld) book_data_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=dta.document.book_data_entry[ii].media ;
if(fld) book_data_obji +=",\"L\":\""+json_cvt(fld) +"\"";
book_data_obji +="}";
}

 book_data_obj += ","+ book_data_obji;
 wherej = "book_data_obj2=JSON.parse(\"[\"+"+"book_data_obj+\"]\");";
 eval(wherej);
 wherej ="book_data_data = JsonQuery("+"book_data_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // guide

if (dta.document.guide_entry) {
 guide_obji ="";
for(var ii=0;ii<dta.document.guide_entry.length;ii++)
{
if(ii>=1) guide_obji +="\n,";
guide_obji +="{";
fld=dta.document.guide_entry[ii].id ;
if(fld) guide_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  guide_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.guide_entry[ii].title ;
if(fld) guide_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].sub_title ;
if(fld) guide_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].content ;
if(fld) guide_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].ref_name ;
if(fld) guide_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].ser_no ;
if(fld) guide_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].chapter ;
if(fld) guide_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=dta.document.guide_entry[ii].project ;
if(fld) guide_obji +=",\"H\":\""+json_cvt(fld) +"\"";
guide_obji +="}";
}

 guide_obj += ","+ guide_obji;
 wherej = "guide_obj2=JSON.parse(\"[\"+"+"guide_obj+\"]\");";
 eval(wherej);
 wherej ="guide_data = JsonQuery("+"guide_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // members

if (dta.document.members_entry) {
 members_obji ="";
for(var ii=0;ii<dta.document.members_entry.length;ii++)
{
if(ii>=1) members_obji +="\n,";
members_obji +="{";
fld=dta.document.members_entry[ii].id ;
if(fld) members_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  members_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.members_entry[ii].name ;
if(fld) members_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.members_entry[ii].phone ;
if(fld) members_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.members_entry[ii].address ;
if(fld) members_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=dta.document.members_entry[ii].notes ;
if(fld) members_obji +=",\"E\":\""+json_cvt(fld) +"\"";
members_obji +="}";
}

 members_obj += ","+ members_obji;
 wherej = "members_obj2=JSON.parse(\"[\"+"+"members_obj+\"]\");";
 eval(wherej);
 wherej ="members_data = JsonQuery("+"members_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

 // lending

if (dta.document.lending_entry) {
 lending_obji ="";
for(var ii=0;ii<dta.document.lending_entry.length;ii++)
{
if(ii>=1) lending_obji +="\n,";
lending_obji +="{";
fld=dta.document.lending_entry[ii].id ;
if(fld) lending_obji +="\"A\":\""+json_cvt(fld) +"\"";
else  lending_obji +="\"A\":\""+ ii +"\"";
fld=dta.document.lending_entry[ii].member_id ;
if(fld) lending_obji +=",\"B\":\""+json_cvt(fld) +"\"";
fld=dta.document.lending_entry[ii].book_no ;
if(fld) lending_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=dta.document.lending_entry[ii].issue_date ;
if(fld) lending_obji +=",\"D\":\""+date2julian(fld) +"\"";
fld=dta.document.lending_entry[ii].due_date ;
if(fld) lending_obji +=",\"E\":\""+date2julian(fld) +"\"";
lending_obji +="}";
}

 lending_obj += ","+ lending_obji;
 wherej = "lending_obj2=JSON.parse(\"[\"+"+"lending_obj+\"]\");";
 eval(wherej);
 wherej ="lending_data = JsonQuery("+"lending_obj2); ";
 eval(wherej);
 nnn+=ii; 
toc(nnn +" added");
}

}

function csvfile()
{
var data =IMPORT_DATA ;
var ARRDATA=CSV.csvToArray(data);
var sel=document.getElementById("saveto").selectedIndex;
var fileinput=document.getElementById("saveto").options[sel].value;
if(!confirm("Import csv file "+fileinput)) return ;
tic();
var fld="";
 // book_details

 if("book_details"==fileinput) { 
 book_details_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) book_details_obji +="\n,";
book_details_obji +="{";
fld=ARRDATA[ii][0];
if(fld) book_details_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) book_details_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) book_details_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) book_details_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) book_details_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][5];
if(fld) book_details_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][6];
if(fld) book_details_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][7];
if(fld) book_details_obji +=",\"H\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][8];
if(fld) book_details_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][9];
if(fld) book_details_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][10];
if(fld) book_details_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][11];
if(fld) book_details_obji +=",\"L\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][12];
if(fld) book_details_obji +=",\"M\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][13];
if(fld) book_details_obji +=",\"N\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][14];
if(fld) book_details_obji +=",\"O\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][15];
if(fld) book_details_obji +=",\"P\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][16];
if(fld) book_details_obji +=",\"Q\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][17];
if(fld) book_details_obji +=",\"R\":\""+json_cvt(fld) +"\"";
book_details_obji +="}";
}

 book_details_obj += ","+ book_details_obji;
 wherej = "book_details_obj2=JSON.parse(\"[\"+"+"book_details_obj+\"]\");";
 eval(wherej);
 wherej ="book_details_data = JsonQuery("+"book_details_obj2); ";
 eval(wherej);
}

 // periodical_data

 if("periodical_data"==fileinput) { 
 periodical_data_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) periodical_data_obji +="\n,";
periodical_data_obji +="{";
fld=ARRDATA[ii][0];
if(fld) periodical_data_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) periodical_data_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) periodical_data_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) periodical_data_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) periodical_data_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][5];
if(fld) periodical_data_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][6];
if(fld) periodical_data_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][7];
if(fld) periodical_data_obji +=",\"H\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][8];
if(fld) periodical_data_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][9];
if(fld) periodical_data_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][10];
if(fld) periodical_data_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][11];
if(fld) periodical_data_obji +=",\"L\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][12];
if(fld) periodical_data_obji +=",\"M\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][13];
if(fld) periodical_data_obji +=",\"N\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][14];
if(fld) periodical_data_obji +=",\"O\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][15];
if(fld) periodical_data_obji +=",\"P\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][16];
if(fld) periodical_data_obji +=",\"Q\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][17];
if(fld) periodical_data_obji +=",\"R\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][18];
if(fld) periodical_data_obji +=",\"S\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][19];
if(fld) periodical_data_obji +=",\"T\":\""+date2julian(fld) +"\"";
fld=ARRDATA[ii][20];
if(fld) periodical_data_obji +=",\"U\":\""+json_cvt(fld) +"\"";
periodical_data_obji +="}";
}

 periodical_data_obj += ","+ periodical_data_obji;
 wherej = "periodical_data_obj2=JSON.parse(\"[\"+"+"periodical_data_obj+\"]\");";
 eval(wherej);
 wherej ="periodical_data_data = JsonQuery("+"periodical_data_obj2); ";
 eval(wherej);
}

 // class_no

 if("class_no"==fileinput) { 
 class_no_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) class_no_obji +="\n,";
class_no_obji +="{";
fld=ARRDATA[ii][0];
if(fld) class_no_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) class_no_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) class_no_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) class_no_obji +=",\"D\":\""+json_cvt(fld) +"\"";
class_no_obji +="}";
}

 class_no_obj += ","+ class_no_obji;
 wherej = "class_no_obj2=JSON.parse(\"[\"+"+"class_no_obj+\"]\");";
 eval(wherej);
 wherej ="class_no_data = JsonQuery("+"class_no_obj2); ";
 eval(wherej);
}

 // introduction

 if("introduction"==fileinput) { 
 introduction_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) introduction_obji +="\n,";
introduction_obji +="{";
fld=ARRDATA[ii][0];
if(fld) introduction_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) introduction_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) introduction_obji +=",\"C\":\""+json_cvt(fld) +"\"";
introduction_obji +="}";
}

 introduction_obj += ","+ introduction_obji;
 wherej = "introduction_obj2=JSON.parse(\"[\"+"+"introduction_obj+\"]\");";
 eval(wherej);
 wherej ="introduction_data = JsonQuery("+"introduction_obj2); ";
 eval(wherej);
}

 // cdrom_details

 if("cdrom_details"==fileinput) { 
 cdrom_details_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) cdrom_details_obji +="\n,";
cdrom_details_obji +="{";
fld=ARRDATA[ii][0];
if(fld) cdrom_details_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) cdrom_details_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) cdrom_details_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) cdrom_details_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) cdrom_details_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][5];
if(fld) cdrom_details_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][6];
if(fld) cdrom_details_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][7];
if(fld) cdrom_details_obji +=",\"H\":\""+date2julian(fld) +"\"";
cdrom_details_obji +="}";
}

 cdrom_details_obj += ","+ cdrom_details_obji;
 wherej = "cdrom_details_obj2=JSON.parse(\"[\"+"+"cdrom_details_obj+\"]\");";
 eval(wherej);
 wherej ="cdrom_details_data = JsonQuery("+"cdrom_details_obj2); ";
 eval(wherej);
}

 // shelf

 if("shelf"==fileinput) { 
 shelf_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) shelf_obji +="\n,";
shelf_obji +="{";
fld=ARRDATA[ii][0];
if(fld) shelf_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) shelf_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) shelf_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) shelf_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) shelf_obji +=",\"E\":\""+json_cvt(fld) +"\"";
shelf_obji +="}";
}

 shelf_obj += ","+ shelf_obji;
 wherej = "shelf_obj2=JSON.parse(\"[\"+"+"shelf_obj+\"]\");";
 eval(wherej);
 wherej ="shelf_data = JsonQuery("+"shelf_obj2); ";
 eval(wherej);
}

 // book_data

 if("book_data"==fileinput) { 
 book_data_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) book_data_obji +="\n,";
book_data_obji +="{";
fld=ARRDATA[ii][0];
if(fld) book_data_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) book_data_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) book_data_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) book_data_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) book_data_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][5];
if(fld) book_data_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][6];
if(fld) book_data_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][7];
if(fld) book_data_obji +=",\"H\":\""+date2julian(fld) +"\"";
fld=ARRDATA[ii][8];
if(fld) book_data_obji +=",\"I\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][9];
if(fld) book_data_obji +=",\"J\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][10];
if(fld) book_data_obji +=",\"K\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][11];
if(fld) book_data_obji +=",\"L\":\""+json_cvt(fld) +"\"";
book_data_obji +="}";
}

 book_data_obj += ","+ book_data_obji;
 wherej = "book_data_obj2=JSON.parse(\"[\"+"+"book_data_obj+\"]\");";
 eval(wherej);
 wherej ="book_data_data = JsonQuery("+"book_data_obj2); ";
 eval(wherej);
}

 // guide

 if("guide"==fileinput) { 
 guide_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) guide_obji +="\n,";
guide_obji +="{";
fld=ARRDATA[ii][0];
if(fld) guide_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) guide_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) guide_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) guide_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) guide_obji +=",\"E\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][5];
if(fld) guide_obji +=",\"F\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][6];
if(fld) guide_obji +=",\"G\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][7];
if(fld) guide_obji +=",\"H\":\""+json_cvt(fld) +"\"";
guide_obji +="}";
}

 guide_obj += ","+ guide_obji;
 wherej = "guide_obj2=JSON.parse(\"[\"+"+"guide_obj+\"]\");";
 eval(wherej);
 wherej ="guide_data = JsonQuery("+"guide_obj2); ";
 eval(wherej);
}

 // members

 if("members"==fileinput) { 
 members_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) members_obji +="\n,";
members_obji +="{";
fld=ARRDATA[ii][0];
if(fld) members_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) members_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) members_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) members_obji +=",\"D\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) members_obji +=",\"E\":\""+json_cvt(fld) +"\"";
members_obji +="}";
}

 members_obj += ","+ members_obji;
 wherej = "members_obj2=JSON.parse(\"[\"+"+"members_obj+\"]\");";
 eval(wherej);
 wherej ="members_data = JsonQuery("+"members_obj2); ";
 eval(wherej);
}

 // lending

 if("lending"==fileinput) { 
 lending_obji ="";
for(var ii=0;ii<ARRDATA.length;ii++)
{
if(ii>=1) lending_obji +="\n,";
lending_obji +="{";
fld=ARRDATA[ii][0];
if(fld) lending_obji +="\"A\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][1];
if(fld) lending_obji +="\"B\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][2];
if(fld) lending_obji +=",\"C\":\""+json_cvt(fld) +"\"";
fld=ARRDATA[ii][3];
if(fld) lending_obji +=",\"D\":\""+date2julian(fld) +"\"";
fld=ARRDATA[ii][4];
if(fld) lending_obji +=",\"E\":\""+date2julian(fld) +"\"";
lending_obji +="}";
}

 lending_obj += ","+ lending_obji;
 wherej = "lending_obj2=JSON.parse(\"[\"+"+"lending_obj+\"]\");";
 eval(wherej);
 wherej ="lending_data = JsonQuery("+"lending_obj2); ";
 eval(wherej);
}

toc(ii+" added");
}

function jsonfilein()
{
var sel=document.getElementById("saveto").selectedIndex;
var fileinput=document.getElementById("saveto").options[sel].value;
if(!confirm("Json file "+fileinput)) return ;
tic();
var data =IMPORT_DATA ;
var fld="",nnn=0;
 // book_details

if (fileinput=="book_details") {
book_details_obji +=data;  
 book_details_obj += ","+ book_details_obji;
 wherej = "book_details_obj2=JSON.parse(\"[\"+"+"book_details_obj+\"]\");";
 eval(wherej);
 wherej ="book_details_data = JsonQuery("+"book_details_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // periodical_data

if (fileinput=="periodical_data") {
periodical_data_obji +=data;  
 periodical_data_obj += ","+ periodical_data_obji;
 wherej = "periodical_data_obj2=JSON.parse(\"[\"+"+"periodical_data_obj+\"]\");";
 eval(wherej);
 wherej ="periodical_data_data = JsonQuery("+"periodical_data_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // class_no

if (fileinput=="class_no") {
class_no_obji +=data;  
 class_no_obj += ","+ class_no_obji;
 wherej = "class_no_obj2=JSON.parse(\"[\"+"+"class_no_obj+\"]\");";
 eval(wherej);
 wherej ="class_no_data = JsonQuery("+"class_no_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // introduction

if (fileinput=="introduction") {
introduction_obji +=data;  
 introduction_obj += ","+ introduction_obji;
 wherej = "introduction_obj2=JSON.parse(\"[\"+"+"introduction_obj+\"]\");";
 eval(wherej);
 wherej ="introduction_data = JsonQuery("+"introduction_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // cdrom_details

if (fileinput=="cdrom_details") {
cdrom_details_obji +=data;  
 cdrom_details_obj += ","+ cdrom_details_obji;
 wherej = "cdrom_details_obj2=JSON.parse(\"[\"+"+"cdrom_details_obj+\"]\");";
 eval(wherej);
 wherej ="cdrom_details_data = JsonQuery("+"cdrom_details_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // shelf

if (fileinput=="shelf") {
shelf_obji +=data;  
 shelf_obj += ","+ shelf_obji;
 wherej = "shelf_obj2=JSON.parse(\"[\"+"+"shelf_obj+\"]\");";
 eval(wherej);
 wherej ="shelf_data = JsonQuery("+"shelf_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // book_data

if (fileinput=="book_data") {
book_data_obji +=data;  
 book_data_obj += ","+ book_data_obji;
 wherej = "book_data_obj2=JSON.parse(\"[\"+"+"book_data_obj+\"]\");";
 eval(wherej);
 wherej ="book_data_data = JsonQuery("+"book_data_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // guide

if (fileinput=="guide") {
guide_obji +=data;  
 guide_obj += ","+ guide_obji;
 wherej = "guide_obj2=JSON.parse(\"[\"+"+"guide_obj+\"]\");";
 eval(wherej);
 wherej ="guide_data = JsonQuery("+"guide_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // members

if (fileinput=="members") {
members_obji +=data;  
 members_obj += ","+ members_obji;
 wherej = "members_obj2=JSON.parse(\"[\"+"+"members_obj+\"]\");";
 eval(wherej);
 wherej ="members_data = JsonQuery("+"members_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

 // lending

if (fileinput=="lending") {
lending_obji +=data;  
 lending_obj += ","+ lending_obji;
 wherej = "lending_obj2=JSON.parse(\"[\"+"+"lending_obj+\"]\");";
 eval(wherej);
 wherej ="lending_data = JsonQuery("+"lending_obj2); ";
 eval(wherej);
 nnn+=ii;
toc(nnn +" added");
}

}

function xml_export()
{
var fileinput="";
if(!confirm("Xml Export ")) return ;
tic();
var fld="";
var xmlall="";
 xmlall  +="<?xml version='1.0' ?>";
 xmlall +="\n<document>";
 // book_details

for(var ii=0;ii<book_details_obj2.length;ii++)
{
if(!book_details_obj2[ii].A.length) continue; 
xmlall +="<book_details_entry>";
fld=book_details_obj2[ii].A ;
if(fld) xmlall +="<call_no>"+fld +"</call_no>";
fld=book_details_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=book_details_obj2[ii].C ;
if(fld) xmlall +="\n<author>"+fld +"</author>";
fld=book_details_obj2[ii].D ;
if(fld) xmlall +="\n<year_published>"+fld +"</year_published>";
fld=book_details_obj2[ii].E ;
if(fld) xmlall +="\n<isbn>"+fld +"</isbn>";
fld=book_details_obj2[ii].F ;
if(fld) xmlall +="\n<pubid>"+fld +"</pubid>";
fld=book_details_obj2[ii].G ;
if(fld) xmlall +="\n<notes>"+fld +"</notes>";
fld=book_details_obj2[ii].H ;
if(fld) xmlall +="\n<subject>"+fld +"</subject>";
fld=book_details_obj2[ii].I ;
if(fld) xmlall +="\n<title_mal>"+fld +"</title_mal>";
fld=book_details_obj2[ii].J ;
if(fld) xmlall +="\n<place_of_publication>"+fld +"</place_of_publication>";
fld=book_details_obj2[ii].K ;
if(fld) xmlall +="\n<translator>"+fld +"</translator>";
fld=book_details_obj2[ii].L ;
if(fld) xmlall +="\n<copyright_year>"+fld +"</copyright_year>";
fld=book_details_obj2[ii].M ;
if(fld) xmlall +="\n<pages>"+fld +"</pages>";
fld=book_details_obj2[ii].N ;
if(fld) xmlall +="\n<indexed>"+fld +"</indexed>";
fld=book_details_obj2[ii].O ;
if(fld) xmlall +="\n<bibliography>"+fld +"</bibliography>";
fld=book_details_obj2[ii].P ;
if(fld) xmlall +="\n<foot_note>"+fld +"</foot_note>";
fld=book_details_obj2[ii].Q ;
if(fld) xmlall +="\n<issn>"+fld +"</issn>";
fld=book_details_obj2[ii].R ;
if(fld) xmlall +="\n<series>"+fld +"</series>";
xmlall +="</book_details_entry>";
}

 // periodical_data

for(var ii=0;ii<periodical_data_obj2.length;ii++)
{
if(!periodical_data_obj2[ii].A.length) continue; 
xmlall +="<periodical_data_entry>";
fld=periodical_data_obj2[ii].A ;
if(fld) xmlall +="<per_code>"+fld +"</per_code>";
fld=periodical_data_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=periodical_data_obj2[ii].C ;
if(fld) xmlall +="\n<chief_editor>"+fld +"</chief_editor>";
fld=periodical_data_obj2[ii].D ;
if(fld) xmlall +="\n<language_code>"+fld +"</language_code>";
fld=periodical_data_obj2[ii].E ;
if(fld) xmlall +="\n<pub_code>"+fld +"</pub_code>";
fld=periodical_data_obj2[ii].F ;
if(fld) xmlall +="\n<sub_code>"+fld +"</sub_code>";
fld=periodical_data_obj2[ii].G ;
if(fld) xmlall +="\n<periodicity>"+fld +"</periodicity>";
fld=periodical_data_obj2[ii].H ;
if(fld) xmlall +="\n<issn>"+fld +"</issn>";
fld=periodical_data_obj2[ii].I ;
if(fld) xmlall +="\n<annual_index>"+fld +"</annual_index>";
fld=periodical_data_obj2[ii].J ;
if(fld) xmlall +="\n<style_of_treatment>"+fld +"</style_of_treatment>";
fld=periodical_data_obj2[ii].K ;
if(fld) xmlall +="\n<articles_indexed>"+fld +"</articles_indexed>";
fld=periodical_data_obj2[ii].L ;
if(fld) xmlall +="\n<new_vol_begins>"+fld +"</new_vol_begins>";
fld=periodical_data_obj2[ii].M ;
if(fld) xmlall +="\n<mode_of_aqusition>"+fld +"</mode_of_aqusition>";
fld=periodical_data_obj2[ii].N ;
if(fld) xmlall +="\n<agent_code>"+fld +"</agent_code>";
fld=periodical_data_obj2[ii].O ;
if(fld) xmlall +="\n<exchange_for>"+fld +"</exchange_for>";
fld=periodical_data_obj2[ii].P ;
if(fld) xmlall +="\n<class_no>"+fld +"</class_no>";
fld=periodical_data_obj2[ii].Q ;
if(fld) xmlall +="\n<vol_begins>"+fld +"</vol_begins>";
fld=periodical_data_obj2[ii].R ;
if(fld) xmlall +="\n<note>"+fld +"</note>";
fld=periodical_data_obj2[ii].S ;
if(fld) xmlall +="\n<is_foreign>"+fld +"</is_foreign>";
fld=periodical_data_obj2[ii].T ;
if(fld) xmlall +="\n<last_modificatio>"+fld +"</last_modificatio>";
fld=periodical_data_obj2[ii].U ;
if(fld) xmlall +="\n<malayalam_title>"+fld +"</malayalam_title>";
xmlall +="</periodical_data_entry>";
}

 // class_no

for(var ii=0;ii<class_no_obj2.length;ii++)
{
if(!class_no_obj2[ii].A.length) continue; 
xmlall +="<class_no_entry>";
fld=class_no_obj2[ii].A ;
if(fld) xmlall +="<cl_code>"+fld +"</cl_code>";
fld=class_no_obj2[ii].B ;
if(fld) xmlall +="\n<cl_name>"+fld +"</cl_name>";
fld=class_no_obj2[ii].C ;
if(fld) xmlall +="\n<sub_name>"+fld +"</sub_name>";
fld=class_no_obj2[ii].D ;
if(fld) xmlall +="\n<call_code>"+fld +"</call_code>";
xmlall +="</class_no_entry>";
}

 // introduction

for(var ii=0;ii<introduction_obj2.length;ii++)
{
if(!introduction_obj2[ii].A.length) continue; 
xmlall +="<introduction_entry>";
fld=introduction_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=introduction_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=introduction_obj2[ii].C ;
if(fld) xmlall +="\n<description>"+fld +"</description>";
xmlall +="</introduction_entry>";
}

 // cdrom_details

for(var ii=0;ii<cdrom_details_obj2.length;ii++)
{
if(!cdrom_details_obj2[ii].A.length) continue; 
xmlall +="<cdrom_details_entry>";
fld=cdrom_details_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=cdrom_details_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=cdrom_details_obj2[ii].C ;
if(fld) xmlall +="\n<author>"+fld +"</author>";
fld=cdrom_details_obj2[ii].D ;
if(fld) xmlall +="\n<publisher>"+fld +"</publisher>";
fld=cdrom_details_obj2[ii].E ;
if(fld) xmlall +="\n<class_no>"+fld +"</class_no>";
fld=cdrom_details_obj2[ii].F ;
if(fld) xmlall +="\n<reference>"+fld +"</reference>";
fld=cdrom_details_obj2[ii].G ;
if(fld) xmlall +="\n<tower_no>"+fld +"</tower_no>";
fld=cdrom_details_obj2[ii].H ;
if(fld) xmlall +="\n<entry_date>"+fld +"</entry_date>";
xmlall +="</cdrom_details_entry>";
}

 // shelf

for(var ii=0;ii<shelf_obj2.length;ii++)
{
if(!shelf_obj2[ii].A.length) continue; 
xmlall +="<shelf_entry>";
fld=shelf_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=shelf_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=shelf_obj2[ii].C ;
if(fld) xmlall +="\n<classification>"+fld +"</classification>";
fld=shelf_obj2[ii].D ;
if(fld) xmlall +="\n<location>"+fld +"</location>";
fld=shelf_obj2[ii].E ;
if(fld) xmlall +="\n<notes>"+fld +"</notes>";
xmlall +="</shelf_entry>";
}

 // book_data

for(var ii=0;ii<book_data_obj2.length;ii++)
{
if(!book_data_obj2[ii].A.length) continue; 
xmlall +="<book_data_entry>";
fld=book_data_obj2[ii].A ;
if(fld) xmlall +="<accession_no>"+fld +"</accession_no>";
fld=book_data_obj2[ii].B ;
if(fld) xmlall +="\n<call_no>"+fld +"</call_no>";
fld=book_data_obj2[ii].C ;
if(fld) xmlall +="\n<reference>"+fld +"</reference>";
fld=book_data_obj2[ii].D ;
if(fld) xmlall +="\n<notes>"+fld +"</notes>";
fld=book_data_obj2[ii].E ;
if(fld) xmlall +="\n<price>"+fld +"</price>";
fld=book_data_obj2[ii].F ;
if(fld) xmlall +="\n<edition_year>"+fld +"</edition_year>";
fld=book_data_obj2[ii].G ;
if(fld) xmlall +="\n<cover_type>"+fld +"</cover_type>";
fld=book_data_obj2[ii].H ;
if(fld) xmlall +="\n<date_purchased>"+fld +"</date_purchased>";
fld=book_data_obj2[ii].I ;
if(fld) xmlall +="\n<supplier>"+fld +"</supplier>";
fld=book_data_obj2[ii].J ;
if(fld) xmlall +="\n<currency>"+fld +"</currency>";
fld=book_data_obj2[ii].K ;
if(fld) xmlall +="\n<shelf_row>"+fld +"</shelf_row>";
fld=book_data_obj2[ii].L ;
if(fld) xmlall +="\n<media>"+fld +"</media>";
xmlall +="</book_data_entry>";
}

 // guide

for(var ii=0;ii<guide_obj2.length;ii++)
{
if(!guide_obj2[ii].A.length) continue; 
xmlall +="<guide_entry>";
fld=guide_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=guide_obj2[ii].B ;
if(fld) xmlall +="\n<title>"+fld +"</title>";
fld=guide_obj2[ii].C ;
if(fld) xmlall +="\n<sub_title>"+fld +"</sub_title>";
fld=guide_obj2[ii].D ;
if(fld) xmlall +="\n<content>"+fld +"</content>";
fld=guide_obj2[ii].E ;
if(fld) xmlall +="\n<ref_name>"+fld +"</ref_name>";
fld=guide_obj2[ii].F ;
if(fld) xmlall +="\n<ser_no>"+fld +"</ser_no>";
fld=guide_obj2[ii].G ;
if(fld) xmlall +="\n<chapter>"+fld +"</chapter>";
fld=guide_obj2[ii].H ;
if(fld) xmlall +="\n<project>"+fld +"</project>";
xmlall +="</guide_entry>";
}

 // members

for(var ii=0;ii<members_obj2.length;ii++)
{
if(!members_obj2[ii].A.length) continue; 
xmlall +="<members_entry>";
fld=members_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=members_obj2[ii].B ;
if(fld) xmlall +="\n<name>"+fld +"</name>";
fld=members_obj2[ii].C ;
if(fld) xmlall +="\n<phone>"+fld +"</phone>";
fld=members_obj2[ii].D ;
if(fld) xmlall +="\n<address>"+fld +"</address>";
fld=members_obj2[ii].E ;
if(fld) xmlall +="\n<notes>"+fld +"</notes>";
xmlall +="</members_entry>";
}

 // lending

for(var ii=0;ii<lending_obj2.length;ii++)
{
if(!lending_obj2[ii].A.length) continue; 
xmlall +="<lending_entry>";
fld=lending_obj2[ii].A ;
if(fld) xmlall +="<id>"+fld +"</id>";
fld=lending_obj2[ii].B ;
if(fld) xmlall +="\n<member_id>"+fld +"</member_id>";
fld=lending_obj2[ii].C ;
if(fld) xmlall +="\n<book_no>"+fld +"</book_no>";
fld=lending_obj2[ii].D ;
if(fld) xmlall +="\n<issue_date>"+fld +"</issue_date>";
fld=lending_obj2[ii].E ;
if(fld) xmlall +="\n<due_date>"+fld +"</due_date>";
xmlall +="</lending_entry>";
}

 xmlall +="\n</document>";
 file_xml = new File([xmlall], "backup.xml", {type: "text/xml;"});
 saveAs(file_xml);
 
tic(iit+" exported");
}

 var tables=[ "book_details", "periodical_data", "class_no", "introduction", "cdrom_details", "shelf", "book_data", "guide", "members", "lending"];
 
 var files=[ "books", "periodicals", "classification", "introduction", "cd_dvd", "shelf", "book_data", "guide", "members", "lending"];
 
 book_details_obj2=JSON.parse(book_details_obj);
 periodical_data_obj2=JSON.parse(periodical_data_obj);
 class_no_obj2=JSON.parse(class_no_obj);
 introduction_obj2=JSON.parse(introduction_obj);
 cdrom_details_obj2=JSON.parse(cdrom_details_obj);
 shelf_obj2=JSON.parse(shelf_obj);
 book_data_obj2=JSON.parse(book_data_obj);
 guide_obj2=JSON.parse(guide_obj);
 members_obj2=JSON.parse(members_obj);
 lending_obj2=JSON.parse(lending_obj);

var LOAD_guide=0;

var LOAD_book_details=1;

var LOAD_periodical_data=1;

var LOAD_class_no=1;

var LOAD_introduction=1;

var LOAD_cdrom_details=1;

var LOAD_shelf=1;

var LOAD_book_data=1;

var LOAD_guide=1;

var LOAD_members=1;

var LOAD_lending=1;
 function data_load_zjo(){
 load_data("book_details.zjo","book_details");
 load_data("periodical_data.zjo","periodical_data");
 load_data("class_no.zjo","class_no");
 load_data("introduction.zjo","introduction");
 load_data("cdrom_details.zjo","cdrom_details");
 load_data("shelf.zjo","shelf");
 load_data("book_data.zjo","book_data");
 load_data("guide.zjo","guide");
 load_data("members.zjo","members");
 load_data("lending.zjo","lending");
 }
 function data_load(){
 load_data("book_details.json","book_details");
 load_data_del("book_details_del.json","book_details");
 load_data("periodical_data.json","periodical_data");
 load_data_del("periodical_data_del.json","periodical_data");
 load_data("class_no.json","class_no");
 load_data_del("class_no_del.json","class_no");
 load_data("introduction.json","introduction");
 load_data_del("introduction_del.json","introduction");
 load_data("cdrom_details.json","cdrom_details");
 load_data_del("cdrom_details_del.json","cdrom_details");
 load_data("shelf.json","shelf");
 load_data_del("shelf_del.json","shelf");
 load_data("book_data.json","book_data");
 load_data_del("book_data_del.json","book_data");
 load_data("guide.json","guide");
 load_data_del("guide_del.json","guide");
 load_data("members.json","members");
 load_data_del("members_del.json","members");
 load_data("lending.json","lending");
 load_data_del("lending_del.json","lending");
 }
 function data_load_andro(){
 load_data_andro("book_details.json","book_details");
 load_data_del_andro("book_details_del.json","book_details");
 load_data_andro("periodical_data.json","periodical_data");
 load_data_del_andro("periodical_data_del.json","periodical_data");
 load_data_andro("class_no.json","class_no");
 load_data_del_andro("class_no_del.json","class_no");
 load_data_andro("introduction.json","introduction");
 load_data_del_andro("introduction_del.json","introduction");
 load_data_andro("cdrom_details.json","cdrom_details");
 load_data_del_andro("cdrom_details_del.json","cdrom_details");
 load_data_andro("shelf.json","shelf");
 load_data_del_andro("shelf_del.json","shelf");
 load_data_andro("book_data.json","book_data");
 load_data_del_andro("book_data_del.json","book_data");
 load_data_andro("guide.json","guide");
 load_data_del_andro("guide_del.json","guide");
 load_data_andro("members.json","members");
 load_data_del_andro("members_del.json","members");
 load_data_andro("lending.json","lending");
 load_data_del_andro("lending_del.json","lending");
 }
for(var ii=0;ii<files.length;ii++)
{
//loadScript(files[ii], function(){});
}
