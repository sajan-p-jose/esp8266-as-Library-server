//---------JsonQuery-----
var cg ,res ,len;
var where,wherej;
//---------------------------------
function load_data(file,table) {
    tic(); 

    //console.log(file);
    toc(table+" database loading.. " );
    wherej =table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
    eval(wherej);
    wherej =table+"_data = JsonQuery("+table+"_obj2); ";
    eval(wherej);


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    if(this.responseText.substr(0, 1) =="{")
		{   
		    wherej ="var ad=\"\" ; if("+table+"_obj.length >1)  ad= \",\" ; else ad=\"\" ;";
		    eval(wherej); 
		    wherej =table+"_obj += ad + this.responseText ;";
		    eval(wherej);
		    
		    wherej =table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
		    eval(wherej);

		    wherej =table+"_data = JsonQuery("+table+"_obj2); ";
		    eval(wherej);
		}
	}
    };

    xhttp.open("GET", file, true);
    xhttp.send();
    toc(table+" database loaded " );
}
//---------------------------------------
//---------------------------------
function load_data_del(file,table) {
    tic(); 
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

	    wherej =table+"_del_arr =JSON.parse(\"[\"+this.responseText+\"]\") ;";
	    eval(wherej);
	    //---------------------------------------
	    wherej="var len="+table+"_del_arr.length;";
	    eval(wherej);


	    for (var ii =0 ; ii <len ; ii++)
		{ 

		    wherej="var val="+table+"_del_arr["+ii+"] ;";
		    eval(wherej);
		    console.log(val);  

		    wherej="res="+table+"_data.find('*','"+val+"');";
		    eval(wherej);
		    for (var key in res){ res[key]='';}
    
		}



	    //--------------------------------------- 
	}
    };
    xhttp.open("GET", file, true);
    xhttp.send();
    toc(file+" del_arr loaded " );
}


//---------------------------------------
function init_cg (cgin,cg) {
 
    for (var pos in cgin){
	var value= cgin[pos] ;
	cg[cgin[pos]]=value ;
     
    }
}
//-----------------------=----=----------=
function convert_cg(cg,keyp,cgin,type) {
  
         
    var counter = 0;
    for (var pos in cgin){
	var value= cg[pos] ;
	if(value){
	    if(type[counter] =="date") 
		value = julian2date(value)  ;

            delete cg[pos];
            cg[keyp[counter]] = value;  
	}
	else  cg[keyp[counter]] = cgin[pos];  
	counter++;
    }   
}
//-------=-----------------------------
function dbselect(sql,where,sort,nrows,nm,file)
{


    if(where.length <1) where="";
    console.log(where);
    tic(); 
    display_start();

    var rowj= function (cgd) {
	cg=JSON.parse(JSON.stringify(cgd)) ;
 
	wherej="convert_cg(cg,"+file+"_keys,"+file+"_init,"+file+"_typ);";  
	eval(wherej); 
	display_rows(cg);
    };

    if(where.length)
	wherej="res="+file+"_data.where({"+where+"}).limit(nrows).offset(nm).exec("+rowj+");";
    else
	wherej="res="+file+"_data.where({'A.$ne':''}).limit(nrows).offset(nm).exec("+rowj+");";
    eval(wherej);
    
    //  for (var key in res){ }
    display_end();
    toc("query done");    
}
//---------======-----==-=======
function dbget(sql,where,file)
{
  
    var wherej="res="+file+"_data.where({'A.$ne':'',"+where+"}).count;";
    //console.log(wherej);
    eval(wherej);

    COUNT=res*1;
    if(where.length)
	wherej="res="+file+"_data.where({"+where+",'A.$eq':'0'}).count;";
    else
	wherej="res="+file+"_data.where({'A.$eq':'0'}).count;";
 
    eval(wherej);

    COUNT -=res*1;
    table_head(); 
    
}
//-----------------
function dbgetname(file,fld,txt)
{
    var where  = "\""+fld+".$eq\":'"+txt+"'" ; 
    var wherej="res="+file+"_data.where({'A.$ne':'',"+where+"}).first;";
    //console.log(wherej);
    eval(wherej);
    return res ;
    
}

//-----------------
function db_uid (file)
{
    var wherej="res="+file+"_data.where().count;";
    //console.log(wherej);
    eval(wherej);
    return res+1;
}
//-----------------

//---------------------------------------
function db_new_id (file,table,id_name)
{

    var wherej="res="+file+"_data.where().count;";
    //console.log(wherej);
    eval(wherej);


    return res+1;
}
//-----------------
function dbdata (sql,file,id_name,id)
{
    start_view_data();

    var wherej= "var field="+file+"_j[id_name] ;";
    eval(wherej);
    var  where  = "'"+field+"','"+id+"'" ;
    var wherej="res="+file+"_data.find("+where+");";
    console.log(wherej);
    eval(wherej);
  
    cg=JSON.parse(JSON.stringify(res)) ;
    wherej="convert_cg(cg,"+file+"_keys,"+file+"_init,"+file+"_typ);"; 
    eval(wherej);
    view_data(cg);
    end_view_data();

}
//----=---------===------------------------
function dbset ()
{
    wherej="var len="+table+"_arr.length;";
    eval(wherej);
    for (var ii =0 ; ii <len ; ii++)
	{ 
	    wherej="res="+table+"_data.find('*','"+del_arr[ii]+"')";
	    // console.log(wherej);
	    eval(wherej);
	    for (var key in res){ res[key]='';}
	    //  res.Z=1;
	    //    console.log(res.Z+"*"+res.A);
	}

}


//---=--_--------=-=====---=--
function dbdo (sql,json_data,table,id_name,id,act)
{

    tic(); 
    var wherej= "del_arr="+table+"_arr" ;
    eval(wherej);
    var wherej= "var field="+table+"_j[id_name] ;";
    eval(wherej);

    var  where  = "'"+field+"','"+id+"'" ; 
    var wherej="res="+table+"_data.find("+where+");";
    eval(wherej);
 
 
    //---------------------------------------
    if(act=='delete')
	{
	    var uid =res['*'] ;
	    wherej=table+"_del_arr.push(uid);";
	    eval(wherej);
	    console.log("uid "+uid);
	    for (var key in res){ res[key]='';}

	    var cvt= ",\""+uid+"\"" ;
	    i=0;
	    save_data(table+"_del",cvt,"newj",20);
	}
    //---------------------------------------
    else if(act=='insert')
	{
	    wherej=table+"_obj +=\",\"+json_data ;";
	    eval(wherej);
	    console.log(json_data);
	    var cvt=","+json_data ;
	    i=0;
	    save_data(table,cvt,"newj");

	    wherej=table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
	    eval(wherej);

	    wherej=table+"_data = JsonQuery("+table+"_obj2); ";
	    eval(wherej);

	    //---------------------------------------
	    wherej="var len="+table+"_del_arr.length;";
	    eval(wherej);
	    console.log("del len:"+len);  

	    for (var ii =0 ; ii <len ; ii++)
		{ 
		    wherej="var val="+table+"_del_arr["+ii+"] ;";
		    eval(wherej);
		    console.log("\n del val:"+val);  

		    wherej="res="+table+"_data.find('*','"+val+"');";
		    eval(wherej);

		    for (var key in res){ res[key]='';}
        
		}
	}
    //---------------------------------------
    else if(act=='update')
	{
	    var uid =res['*'] ;
	    var cvt= ",\""+uid+"\"" ;
	    i=0;
	    save_data(table+"_del",cvt,"newj",20);

	    cvt= ","+json_data ;
	    i=0;
	    save_data(table,cvt,"newj",cvt.length);

	    wherej=table+"_obj +=\",\"+json_data ;";
	    eval(wherej);

	    wherej=table+"_obj2=JSON.parse(\"[\"+"+table+"_obj+\"]\");";
	    eval(wherej);
	    wherej=table+"_data = JsonQuery("+table+"_obj2); ";
	    eval(wherej);

	    wherej=table+"_del_arr.push(uid);";
	    eval(wherej);

	    wherej="var len="+table+"_del_arr.length;";
	    eval(wherej);
	    console.log(len);  

	    for (var ii =0 ; ii <len ; ii++)
		{ 

		    wherej="var val="+table+"_del_arr["+ii+"] ;";
		    eval(wherej);
		    console.log(val);  

		    wherej="res="+table+"_data.find('*','"+val+"');";
		    eval(wherej);
		    for (var key in res){ res[key]='';}
    
		}
	}

    toc("Updated"); 
}
//------------------------------------------------
function where_char (field,txt,cond,file)
{
    if(where.length>1)  where  += ",";
    wherej="var fld="+file+"_j[\""+field+"\"] ;";
    eval(wherej);

    if(cond==1)
        where  += "\""+fld+".$li\":/^"+txt+"/i" ;
    else if (cond==2)
        where  += "\""+fld+".$li\":/"+txt+"/i" ;
    else if(cond==3)
        where  += "\""+fld+".$bt\":["+txt+"]" ;
    else if (cond==4)
        where  += "\""+fld+".$gt\":'"+txt+"'" ;
    else if(cond==5)
        where  += "\""+fld+".$eq\":'"+txt+"'" ;
    else if (cond==6)
        where  += "\""+fld+".$lt\":'"+txt+"'" ;
    else if (cond==7)
        where  += "\""+fld+".$in\":'"+txt+"'" ;
    else if (cond==8)
        where  += "\""+fld+".$ni\":'"+txt+"'" ;
    else if (cond==9)
        where  += "\""+fld+".$ne\":'"+txt+"'" ;


}
//-------------------------------------------------
function where_int (field,txt,cond,file)
{

    where_char (field,txt,cond,file);

 
}
//-------------------------------------------------

function where_bool (field,txt,cond,file)
{
    where_char (field,txt,cond,file);

  
}
//-------------------------------------------------
function where_date (field,txt,cond,file)
{
    var dt=txt.split(",");
    var dat2="";
    var dat=date2julian(dt[0]);
    if(dt[1].length >0) 
	{ dat2=date2julian(dt[1]);
	    dat +=","+dat2 ; }

    where_char (field,dat,cond,file);

}
//------------------------------------------------
function where2_char (field,txt,cond,file)
{

    wherej="var fld="+file+"_j[\""+field+"\"] ;";
    eval(wherej);
    //  where  += ",";
    if(where.length>1)  where  += ",";
    if(cond==1)
        where  += "\""+fld+".$li\":/^"+txt+"/i" ;
    else if (cond==2)
        where  += "\""+fld+".$li\":/"+txt+"/i" ;
    else if(cond==3)
        where  += "\""+fld+".$bt\":["+txt+"]" ;
    else if (cond==4)
        where  += "\""+fld+".$gt\":'"+txt+"'" ;
    else if(cond==5)
        where  += "\""+fld+".$eq\":'"+txt+"'" ;
    else if (cond==6)
        where  += "\""+fld+".$lt\":'"+txt+"'" ;
    else if (cond==7)
        where  += "\""+fld+".$in\":'"+txt+"'" ;
    else if (cond==8)
        where  += "\""+fld+".$ni\":'"+txt+"'" ;
    else if (cond==9)
        where  += "\""+fld+".$ne\":'"+txt+"'" ;


    console.log(where); 
}
//-------------------------------------------------
function where2_int (field,txt,cond,file)
{

    where2_char (field,txt,cond,file);
    
}
//-------------------------------------------------
function where2_bool (field,txt,cond,file)
{
    where2_char (field,txt,cond,file);
   
}
//-------------------------------------------------
function where2_date (field,txt,cond,file)
{

    var dt=txt.split(",");
    var dat2="";
    var dat=date2julian(dt[0]);
    if(dt[1].length >0) 
	{ dat2=date2julian(dt[1]);
	    dat +=","+dat2 ; }

    // var dat=date2julian(txt);
    where2_char (field,dat,cond,file);  
}
//---------------------------------------

function  date_search(date_from ,date_to,str,file)
{

    var from=date2julian(date_from);
    var   to=date2julian(date_to);

    wherej="var fld="+file+"_j[\""+str+"\"] ;";
    eval(wherej);
    if(where.length>1) where  += ",";

    where  += "\""+fld+".$bt\":["+from+","+to+"]" ; 
    //else   where ="";
    //console.log(where);
}
//-----------------------------------------

function  sel_search(str,txt ,file,type)
{
    if(txt.length <1) return ;
    wherej="var fld="+file+"_j[\""+str+"\"] ;";
    eval(wherej);
    console.log(wherej); 
    if(where.length>1)  where  += ",";
if(type==1)
  where  += "\""+fld+".$li\":/^"+txt+"/i" ;
else if(type==5)
  where  += "\""+fld+".$eq\":'"+txt+"'" ;

}
//-----------------------------------------
function  date_search2(date_from ,date_to,str,file)
{
    var from=date2julian(date_from);
    var   to=date2julian(date_to);

    wherej="var fld="+file+"_j[\""+str+"\"] ;";
    eval(wherej);
    where  += ",";
    where  += "\""+str+".$bt\":["+from+","+to+"]" ;
  
    console.log(where); 

}
//-----------------------------------------
var wheres ;
function sorting (field,file,typ)
{
    wherej="var fld="+file+"_j[\""+field+"\"] ;";
    eval(wherej);
    wheres  = "\""+fld+"\":'asc'" ;

    if(typ==1)
	wherej=file+"_data="+file+"_data.ordernum({"+wheres+"}).toJQ();";
    else
	wherej=file+"_data="+file+"_data.order({"+wheres+"}).toJQ();";
    eval(wherej);
    //    console.log(wherej);
}
//----------------------------------------



