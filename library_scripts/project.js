
var PROJECT_NAME="LIBRARY";
var DATABASE_NAME="my_lib";
var PROJECT_ID ="my_lib";


//mode: alasql,client,sqlite,jsonq,arrq
var PROJECT_MODE="jsonq";
var rows;
var books_arr=[];

if(PROJECT_MODE=='jsonq'){
    //JSON QUERY
loadScript("json_query", function(){ });
loadScript("jsonq_work", function(){ });
}


loadScript("ucsv", function(){});
loadScript("crc32", function(){});
loadScript("deflate", function(){});
loadScript("from-xml", function(){});
loadScript("gzip", function(){});
loadScript("filesaver", function(){});


loadScript("import_xml", function(){});
loadScript("setup", function(){});
loadScript("guide", function(){});

if(PROJECT_MODE=='client'){
    //JSON QUERY
       loadScript("sql_work_serv", function(){});
}

//ALASQL
if(PROJECT_MODE=='alasql'){
    loadScript("alasql", function(){
        loadScript("alasql_server", function(){
  load_init_data("init_data.sql");
 });
    });
}

else if(PROJECT_MODE=='sqlite'){
    //SQLITE CLIENT SIDE
loadScript("worker.sql", function(){});
loadScript("sqlite_worker", function(){});
}
else if(PROJECT_MODE=='arrq'){
    // QUERY
loadScript("query", function(){});
loadScript("arr_query_work",function(){});
}    
//COMMON
function load_pdf()
{
    loadScript("pdfmake", function(){});
    loadScript("vfs_fonts", function(){});
}
//SCRIPTS
