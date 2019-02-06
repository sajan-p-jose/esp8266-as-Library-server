

#include <stdarg.h>
#include "esp_common.h"
#include "espconn.h"
#include "gpio.h"
#include "uart.h"


#include "lwipopts.h"
#include "lwip/api.h"
#include "lwip/sockets.h"
#include "lwip/err.h"
#include "lwip/sys.h"
#include "lwip/netdb.h"
#include "lwip/dns.h"


#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/queue.h"
#include "spi_interface.h"
#include "base64.h"
#include "espressif/esp_wps.h"
#include "espressif/esp_wifi.h"
#include "espressif/esp_spiffs.h"

#include "fcntl.h"
#include "unistd.h"
#include "spiffs.h"


#define SPIFFS_CFG_PHYS_SZ  3506176
#define SPIFFS_CFG_PHYS_ERASE_SZ 4096
#define SPIFFS_CFG_PHYS_ADDR  0x70000
#define SPIFFS_CFG_LOG_PAGE_SZ  128
#define SPIFFS_CFG_LOG_BLOCK_SZ 32768

#define WEB_SERVER "192.168.5.1"
#define WEB_PORT 80
#define SERVER_PORT 80
#define MAX_CONN 25
#include "common.h"


static const char http_html_hdr[] = "HTTP/1.1 200 OK\r\nContent-type: text/html\r\n\r\n";
 char http_index_html[] =""; 

char BUFF[1200]="";
char MSG[1000]="";
char TITLE[100]="CCOMS",ADDRESS[100]="",USER[20]="",PASS[20]="",WIFI_PASS[20]="",AP[20]="ccom",IPNO[20]="192.168.5.1";
char SECURITY[10]="0",SIGNAL[10]="80",ID2[10]="0",UID[10]="";
int themeset=0;
//---------


//-------------------------------------
const struct addrinfo hints =
  {
    .ai_family = AF_INET,
    .ai_socktype = SOCK_DGRAM,
  };
struct addrinfo *res=NULL;
//------------------------------------


//s32_t esp_spiffs_init_rx (struct esp_spiffs_config *config);

//---------------------------------------
void addto_file(char *name, char * data,char * ext, struct netconn *client);
void addto_file_bin(char *name, char * data,char * ext, struct netconn *client);
void new_file(char *name,char * ext, struct netconn *client);
void display_file(char *name, char *type,int zip, struct netconn *client);

void display_file_htm(char *name, char *type,int zip, struct netconn *client);

void write_setup (char *file, char *buf, struct netconn *client);
void read_setup (char *file,int disp, struct netconn *client);
void read_msg (char *file, struct netconn *client);
void write_msg (char *file, char *msg, struct netconn *client);
int display (char * ddata, int len, struct netconn *client);
void read_setup_start (void);
//---------------------------------------
void beep (int delay)
{
  // Delay and turn on
      // 5 for esp12  2 for esp 2
      GPIO_OUTPUT_SET (5, 1);
      vTaskDelay (delay / portTICK_RATE_MS);
      GPIO_OUTPUT_SET (5, 0);

      vTaskDelay (delay/ portTICK_RATE_MS);
}
//---------------------------------------
void switch_on (char *name,char *par,int on)
{

      GPIO_OUTPUT_SET (4, on);
  
}
//---------------------------------------

//================
void do_work(char * data,struct netconn *client, u16_t  buflen )
{
char file[50]="",title[50]="",name[50]="",ext[15]="",opr[15]="" ;
char **ap, *inputstring,*arr[4]={ NULL, NULL, NULL,NULL };
char *par  = "" ;

//---------------------------------------
      inputstring = data ;
      for (ap = arr; (*ap = strsep (&inputstring, " ")) != NULL;)
        if (**ap != '\0')
          if (++ap >= &arr[2])
            break;
       
      if(arr[1]) 
         {strncpy(title,arr[1],50);
           par=arr[1];}
//---------------------------------------
   arr[0]=NULL; arr[1]=NULL;
   inputstring = par ;
      for (ap = arr; (*ap = strsep (&inputstring, "?")) != NULL;)
        if (**ap != '\0')
          if (++ap >= &arr[2])
            break;
      if(arr[0]){ strncpy(file,arr[0],50);}
      if(arr[1]){par=arr[1] ; }
      strncpy(title,file,50); 
 //---------------------------------------
      /*
	if (!strncmp (opr, "POST", 4))
	{
	inputstring = title ;
	arr[0]=NULL; arr[1]=NULL;
      
	for (ap = arr; (*ap = strsep (&inputstring, "\r\n\r\n")) != NULL;)
	if (**ap != '\0')
	if (++ap >= &arr[3])
	break;
	if(arr[0]){ strncpy(name,arr[0],30);}
	if(arr[1]) par=arr[1] ;
	}
      */
        
//---------------------------------------
      if (!strncmp (file, "/generate_",10)) strcpy(file,"/index.html");
      if (!strncmp (file, "/success",8)) strcpy(file,"/index.html");
      if (!strcmp (file, "/")) strcpy(file,"/index.html");
      strncpy(title,file,50); 
//----------------------------------  
      if(strlen(file)>1)
        {
          inputstring = title ;
          arr[0]=NULL; arr[1]=NULL;arr[2]=NULL;
      
          for (ap = arr; (*ap = strsep (&inputstring, ".")) != NULL;)
            if (**ap != '\0')
              if (++ap >= &arr[2])
                break;
if(arr[0]){ strncpy(name,arr[0],30);}
          if(arr[1]) snprintf(ext,10,".%s",arr[1]) ;
          else {strcpy(ext,"");} 
       
        }
 
printf("\nFILE:%s  NAME:%s Ext:%s\n",file,name,ext);
//--------------------------------- 
 
	 if (!strcmp (ext, ".adds"))
	    {
	      addto_file(name,par,"sql",client);
	  
	    }
	  else if (!strcmp (ext, ".addj"))
	    {
	      addto_file(name,par,"json",client);
	  
	    }
//---------------------------------------
	  else if (!strcmp (ext, ".beep"))
	    {
	      beep(100);
	    }
//---------------------------------------
	  else if (!strcmp (ext, ".swon"))
	    {
	      switch_on(name,par,1);
	    }
//---------------------------------------
	  else if (!strcmp (ext, ".swoff"))
	    {
	      switch_on(name,par,0);
	    }
//---------------------------------------
      else if (!strcmp (ext, ".newj"))
	    {
	      addto_file_bin(name,par,"json",client);
	  
	    }    
    else if (!strcmp (ext, ".znewj"))
	    {
	      addto_file_bin(name,par,"zjo",client);
	  
	    }    
 else if (!strcmp (ext, ".znews"))
	    {
	      addto_file_bin(name,par,"zjs",client);
	    }    
else if (!strcmp (ext, ".newjs"))
	    {
	      addto_file_bin(name,par,"js",client);
	    }   
else if (!strcmp (ext, ".newsvg"))
	    {
	      addto_file_bin(name,par,"svg",client);
	    }    
else if (!strcmp (ext, ".newhtm"))
	    {
	      addto_file_bin(name,par,"html",client);
	    }   
else if (!strcmp (ext, ".newtxt"))
	    {
	      addto_file_bin(name,par,"txt",client);
	    }  

//---------------------------------------
	  else if (!strcmp (ext, ".starts"))
	    {
	      new_file(name,"sql",client);
	    }
  else if (!strcmp (ext, ".starttxt"))
	    {
	      new_file(name,"txt",client);
	    }

	  else if (!strcmp (ext, ".startj"))
	    {
	      new_file(name,"json",client);
	    } 
	  else if (!strcmp (ext, ".startz"))
	    {
	      new_file(name,"zjo",client);
	    } 
	
	  else if (!strcmp (ext, ".start_js"))
	    {
	      new_file(name,"js",client);
	    } 
	  else if (!strcmp (ext, ".startsv"))
	    {
	      new_file(name,"svg",client);
	    } 
  else if (!strcmp (ext, ".startjp"))
	    {
	      new_file(name,"jpg",client);
	    } 
  else if (!strcmp (ext, ".startpng"))
	    {
	      new_file(name,"png",client);
	    } 
  else if (!strcmp (ext, ".startht"))
	    {
	      new_file(name,"html",client);
	    } 
//---------------------------------------
      else if (!strncmp (ext, ".html",5))
	    {
	      display_file_htm(file,"text/html",0,client);
	  
	    }
	  else if (!strcmp (ext, ".css"))
	    {
	    display_file(file,"text/css",1,client);
	    }
	  else if (!strcmp (ext, ".json"))
	    {
	      display_file(file,"text/plain",0,client);
	  
	    }
	  else if (!strcmp (ext, ".zjo"))
	    {
	      display_file(file,"text/plain",1,client);
	    }
	  else if (!strcmp (ext, ".svg"))
	    {
	      display_file(file,"image/svg+xml",1,client);
	    }
  else if (!strcmp (ext, ".png"))
	    {
	      display_file(file,"image/png",1,client);
	    }
  else if (!strcmp (ext, ".jpg"))
	    {
	      display_file(file,"image/jpg",1,client);
	    }
else if (!strcmp (ext, ".mp3"))
	    {
	      display_file(file,"audio/mp3",1,client);
	    }
	  else if (!strcmp (ext, ".zsl"))
	    {
	      display_file(file,"text/plain",1,client);
	    }

	 
	  else if (!strcmp (ext, ".sql"))
	    {
	      display_file(file,"text/plain",0,client);
	    }
      else if (!strcmp (ext, ".zjs"))
	    {
	      display_file(file,"text/js",1,client);	  
	    }
          
	  else if (!strcmp (ext, ".txt"))
	    {
	      display_file(file,"text/plain",0,client);
	  
	    }    
	  else if (!strcmp (ext, ".js"))
	    {
	      display_file(file,"text/js",1,client);
	    }
//---------------------------------------
	  else if (!strcmp (ext, ".msgr"))
	    {
	      read_msg(name,client);
	    }
	  else if (!strcmp (ext, ".msgw"))
	    {
	      write_msg(name,par,client);
	    }
	  else if (!strcmp (ext, ".setr"))
	    {
	      read_setup(name,0,client);
	    }
	  else if (!strcmp (ext, ".setth"))
	    {
	      themeset=1;
	    }
	  else if (!strcmp (ext, ".setw"))
	    {
	      write_setup(name,par,client);
	    }
	  else {   }
}
//---------------------------------------
void display_head (char *ftype, int zip, struct netconn *client)
{
     if(zip==1)
	{

      if(!strcmp(ftype,"text/plain"))
  snprintf (BUFF, 200, "HTTP/1.1 200 OK\r\n"
"Content-type: %s\r\n"
"cache-control:public,max-age=1\r\n"
"Content-Encoding: gzip\r\n\r\n",ftype);
      else 
 snprintf (BUFF, 200, "HTTP/1.1 200 OK\r\n"
"Content-type: %s\r\n"
"cache-control:public,max-age=31536000\r\n"
 "Content-Encoding: gzip\r\n\r\n",ftype);
	  
	}   
      else
	{
	  snprintf (BUFF, 200,
		    "HTTP/1.1 200 OK\r\n"
		    "Content-type: %s\r\n\r\n",ftype);
	  
	}
      netconn_write (client, BUFF, strlen (BUFF), NETCONN_NOCOPY);

}
//---------------------------------------
void display_error(char * msg, struct netconn *client)
{
   snprintf (BUFF, 200,
		"HTTP/1.1 200 OK\r\n"
		"Content-type: text/html\r\n\r\n"
		" %s ",msg);
	  
	
      netconn_write (client, BUFF, strlen (BUFF), NETCONN_NOCOPY);

}
//---------------------------------------
void read_msg (char *file, struct netconn *client)
{
int len=0 ;
static int act=0;
  act++;
  uint32_t freem = system_get_free_heap_size();
//---------------------------------------
len = strlen(MSG) ;
display_head("text/plain",0,client) ;

u32_t total=0,used=0 ;
char warn[15]="*Disk Full*";


 SPIFFS_info( &fs , &total, &used);
 uint32_t time = system_get_time();
if( (total - used) > 1000 ) strcpy(warn,"");
 snprintf(BUFF,1200,"{\"NO\":\"%d\" ,\"TIME\":\"%d\",\"MEM\":\"%dKB\" ,\"DISK\": \"%dKB\" ,\"USED\":\"%dKB\" , \"WARN\":\"%s\",\"MSG\":\"%s\" }",act,time/10000, freem/1000,total/1000,used/1000,warn,MSG);

 display(BUFF,strlen(BUFF),client) ;


}
//---------------------------------------
void write_msg (char *file, char *msg, struct netconn *client)
{
char *dbuff=NULL;
  dbuff=malloc(2000);
  if(dbuff==NULL) return ;
  strcpy(dbuff,"");
  base64_decode(dbuff ,msg,strlen(msg));
  strncpy(MSG,dbuff,1000) ;
  display_head("text/plain",0,client) ;
  free(dbuff);
  beep(400);
}
//---------------------------------------
//---------------p11------------------------
void read_setup (char *file,int disp, struct netconn *client)
{
int len=0 ;
s32_t  bw=0 ;
char fname[20]="/spass.txt";
char *dbuff=NULL;
  dbuff=malloc(1000);
  if(dbuff==NULL) return ;
strcpy(dbuff,"");
//---------------------------------------

 fd = SPIFFS_open (&fs, fname, SPIFFS_RDWR, 0);

  if (fd >= 0)
  {

    bw = SPIFFS_read (&fs, fd,  dbuff, 1000);
      printf("\n 0.pass reading %d",bw);
   if (bw > 0)
	{ 
        dbuff[bw]='\0';
        strncpy(UID,dbuff,4);
        sprintf(UID,"%d",(atoi(UID)*2)-1);
    }
        SPIFFS_close (&fs, fd);
        fd=-1;
    }
  else
    {
      sprintf(UID,"sajan");
    }
   


//---------------------------------------
sprintf (fname,"/setup.txt");
 fd = SPIFFS_open (&fs, fname, SPIFFS_RDWR, 0);

  if (fd >= 0)
    {
display_head("text/plain",0,client) ;
    bw = SPIFFS_read (&fs, fd,  dbuff, 1000);
      printf("\n 1.reading %d",bw);
	  if (bw > 0)
	    { 
dbuff[bw]='\0';
 //---------------------------------------

char **ap, *inputstring,*arr[15]={ NULL, NULL,NULL,NULL,NULL,NULL, NULL,NULL,NULL, NULL,NULL ,NULL};

      inputstring = dbuff ;
     for (ap = arr; (*ap = strsep (&inputstring, ";")) != NULL;)
            if (**ap != '\0')
              if (++ap >= &arr[10])
                break;
//-----------p12----------------------------
 if(arr[0])  strncpy(TITLE,arr[0],100);
 if(arr[1])  strncpy(ADDRESS,arr[1],100);
 if(arr[2])  strncpy(USER,arr[2],20);
 if(arr[3])  strncpy(PASS,arr[3],20);
 if(arr[4])  strncpy(WIFI_PASS,arr[4],20);
 if(arr[5])  strncpy(AP,arr[5],20);
 if(arr[6])  strncpy(IPNO,arr[6],20);
 if(arr[7])  strncpy(SECURITY,arr[7],10);
 if(arr[8])  strncpy(SIGNAL,arr[8],10);
 if(arr[9])  strncpy(ID2,arr[9],10);

snprintf(dbuff,1000,"{\"A\":\"%s\",\"B\":\"%s\",\"C\":\"%s\",\"D\":\"%s\",\"E\":\"%s\",\"F\":\"%s\",\"G\":\"%s\",\"H\":\"%s\",\"I\":\"%s\",\"J\":\"%s\",\"K\":\"%s\"}",TITLE,ADDRESS,USER,PASS,WIFI_PASS,AP,IPNO,SECURITY,SIGNAL,ID2,UID);

display(dbuff,strlen(dbuff),client); 
}
  SPIFFS_close (&fs, fd);
      fd=-1;
    }
  else
    {
      printf("\n 2.error reading %s",fname);
    }




    free(dbuff);
}
//---------------------------------------
void read_setup_start (void)
{
int len=0 ;
s32_t  bw=0 ;

char fname[20]="/spass.txt";
//---------------------------------------
//---------------------------------------

 fd = SPIFFS_open (&fs, fname, SPIFFS_RDWR, 0);

  if (fd >= 0)
  {

    bw = SPIFFS_read (&fs, fd,  BUFF, 1000);
      printf("\n 0.pass reading %d",bw);
   if (bw > 0)
	{ 
        BUFF[bw]='\0';
        strncpy(UID,BUFF,5);
        sprintf(UID,"%d",(atoi(UID)*2)-1);
    }
        SPIFFS_close (&fs, fd);
        fd=-1;
    }
  else
    {
      sprintf(UID,"sajan");
    }
   


//---------------------------------------
sprintf (fname,"/setup.txt");
 fd = SPIFFS_open (&fs, fname, SPIFFS_RDWR, 0);

  if (fd >= 0)
    {

    bw = SPIFFS_read (&fs, fd,  BUFF, 500);
      printf("\n 1.reading %d",bw);
	  if (bw > 0)
	    { 
BUFF[bw]='\0'; 
 //---------------------p77------------------

char **ap, *inputstring,*arr[15]={ NULL, NULL,NULL,NULL,NULL,NULL, NULL,NULL,NULL ,NULL,NULL};

      inputstring = BUFF ;
     for (ap = arr; (*ap = strsep (&inputstring, ";")) != NULL;)
            if (**ap != '\0')
              if (++ap >= &arr[10])
                break;
//-----------p12----------------------------
 if(arr[0])  strncpy(TITLE,arr[0],100);
 if(arr[1])  strncpy(ADDRESS,arr[1],100);
 if(arr[2])  strncpy(USER,arr[2],20);
 if(arr[3])  strncpy(PASS,arr[3],20);
 if(arr[4])  strncpy(WIFI_PASS,arr[4],20);
 if(arr[5])  strncpy(AP,arr[5],20);
 if(arr[6])  strncpy(IPNO,arr[6],20);
 if(arr[7])  strncpy(SECURITY,arr[7],10);
 if(arr[8])  strncpy(SIGNAL,arr[8],10);
 if(arr[9])  strncpy(ID2,arr[9],10);
}
  SPIFFS_close (&fs, fd);
      fd=-1;
    }
  else
    {
      printf("\n 2.error reading %s",fname);
    }
}
//---------------------------------------
void write_setup (char *file, char *buf, struct netconn *client)
{
 int len=0;  
char filename[50]="";

  len=strlen(buf) ;
  snprintf(filename,40,"%s.txt",file);
  printf("New file %s ",filename); 

  SPIFFS_remove(&fs, filename);
  fd = SPIFFS_creat(&fs, filename,  0);
  if(fd>=0) SPIFFS_close (&fs, fd);
  fd=-1;

  fd = SPIFFS_open (&fs, filename, SPIFFS_RDWR, 0);
  if(fd>=0)
    {

len=base64_decode(BUFF ,buf,strlen(buf));
      printf("TXT: %s",BUFF); 


if (SPIFFS_write(&fs, fd, (u8_t *)BUFF, len) < 0)
		{
        printf("\n%i\n", SPIFFS_errno(&fs));
		}


     SPIFFS_close (&fs, fd);
     fd=-1;
    }

display_head("text/plain",0,client) ;
}
//---------------------------------------
int display (char * ddata, int len, struct netconn *client)
{
err_t  er;
int wrt=0;
er= netconn_write_partly (client, ddata, len, NETCONN_NOCOPY,&wrt);
if(er==ERR_OK) return 0;
else  {
printf ("\nNet error w:%d ",wrt) ;
 return 1;
}

}
//---------------------------------------
void display_file(char *fname, char *ftype,int zip, struct netconn *client)
{
s32_t  bw=0 ;
int st=0;
char *dbuf=NULL ;
dbuf= malloc(528);
  if(dbuf==NULL) return ;
//---------------------------------------
fd=SPIFFS_open (&fs, fname,SPIFFS_RDONLY, 0);
 if (fd >= 0)
    {
     display_head(ftype,zip,client) ;

   do
	   {
   bw = SPIFFS_read (&fs, fd,  dbuf, 512);
	  if (bw > 0)
         {
          dbuf[bw]='\0';
          printf("\n Send data ");
          st=display(dbuf,bw,client) ; 
          printf(" Bytes %d",bw);
         }
	   }
      while (bw > 0 && st==0 );

      SPIFFS_close (&fs, fd);
       fd=-1;
      printf("\n 3. Sending done %s",fname);
    }
  else
      {
       display_error("NOT FOUND",client);
       printf("\n 4.read error %s",fname);
      }
     free(dbuf);

}
//-----------------------------
//---------------------------------------
void display_file_htm(char *fname, char *ftype,int zip, struct netconn *client)
{
s32_t  bw=0 ;
int st=0;
char *dbuf=NULL ;
static int themeno=0;
char *theme[]={"andi","bus","ccom","dark","easel","gar","gil","grl","hert","ith","koi","mit","note","pro","rain","sts","sur","vint"," "," "};
dbuf= malloc(528);
  if(dbuf==NULL) return ;
//---------------------------------------
fd=SPIFFS_open (&fs, fname, SPIFFS_RDONLY, 0);
 if (fd >= 0)
    {
     display_head(ftype,zip,client) ;
snprintf(dbuf,500,"<html><head><title>C-Com Software</title><meta name='Programmer' content='Sajan P Jose, KERALA, INDIA,Web: www.ccoms.info' ><meta name='e-mail' content='sajan.p.jose@gmail.com,sajan@ccoms.info' ><meta name='license' content='GNU'><LINK rel=stylesheet href='%s.css' type='text/css'>  ",theme[themeno]);
        display(dbuf,strlen(dbuf),client) ; 
if(themeset ==0) 
{
themeno++ ; if(themeno >17) themeno=0 ;
}

     do
	   {
   bw = SPIFFS_read (&fs, fd,  dbuf, 512);
	  if (bw > 0)
         {
          dbuf[bw]='\0';
          printf("\n Send data ");
          st=display(dbuf,bw,client) ; 
          printf(" Bytes %d",bw);
         }
	   }
      while (bw > 0 && st==0 );

      SPIFFS_close (&fs, fd);
       fd=-1;
      printf("\n 3. Sending done %s",fname);
    }
  else
      {
       display_error("NOT FOUND",client);
       printf("\n 4.read error %s",fname);
      }
     free(dbuf);

}
//-----------------------------
//-----------------------------
void new_file (char *name,char * ext,struct netconn *client)
{
  char filename[50]="";
  snprintf(filename,40,"%s.%s",name,ext);
  printf("\nNew file %s ",filename); 
 beep(10);
  SPIFFS_remove(&fs, filename);
  fd = SPIFFS_creat(&fs, filename,  0);
  if(fd>=0) SPIFFS_close (&fs, fd);
  fd=-1;


  snprintf (BUFF, 150,
            "HTTP/1.1 200 OK\r\n"
            "Content-type: text/html\r\n\r\n %s CREATED\n",filename);
  netconn_write (client, BUFF, strlen (BUFF), NETCONN_COPY);
 beep(10);
}
//---------------------------------


void addto_file(char *name, char * data,char * ext, struct netconn *client)
{
 char **ap, *inputstring,*arr[4]={ NULL, NULL, NULL,NULL };
char filename[50]="",*par=NULL;
int fd=-1,add=-1 ,len=0;
printf("\n adding %d bytes data ",strlen(data) );
  if(data==NULL || strlen(data) > 1024) return ;

 char *buf= malloc (2048);
  if(buf==NULL) return ;
  sprintf(buf,""); 
  sprintf(filename,"%s.%s",name,ext);

  if(strlen(data)>1)
    {

printf("\n adding data");

    par=data;
   len=base64_decode(buf ,par,strlen(par));
	  printf("TXT: %s",buf);  

     fd = SPIFFS_open (&fs, filename, SPIFFS_RDWR, 0); //SPIFFS_CREAT|
     printf("\n%s %d",filename, fd);

if(fd >=0) add=1 ; else add=0 ;

//--------------------------------------- 
    // new file
if(!add)
   {

      SPIFFS_remove(&fs, filename);
        fd = SPIFFS_creat(&fs, filename,  0);
          printf ("\nCreated %d",fd);
	  if(fd >0)   SPIFFS_close (&fs, fd);
      fd=-1;


	    fd = SPIFFS_open (&fs, filename, SPIFFS_APPEND, 0);
	  if(fd>=0)
	 {
  if (SPIFFS_write(&fs, fd, (u8_t *)buf, len) < 0)
		{
        printf("\n%i\n", SPIFFS_errno(&fs));
		}
	      SPIFFS_close (&fs, fd);
          fd=-1;
      }

    }
//---------------------------------------
      else //file existing
        {
   //       SPIFFS_lseek(&fs, fd, 0, SPIFFS_SEEK_END);

  if (SPIFFS_write(&fs, fd, ",", 1 ) < 0)
       {
       printf("\nerrno %i\n", SPIFFS_errno(&fs));
       }
  if (SPIFFS_write(&fs, fd, (u8_t *)buf, len) < 0)
            {
              printf("\nerrno %i\n", SPIFFS_errno(&fs));
            }
          if (SPIFFS_write(&fs, fd, "\n", 1 ) < 0)
            {
              printf("\nerrno %i\n", SPIFFS_errno(&fs));
            }
	  SPIFFS_close (&fs, fd);
       fd=-1;
 printf ("\nWriting to :%s\n", filename);
        }

//---------------------------------------

    snprintf (BUFF, 200,
                "HTTP/1.1 200 OK\r\n"
                "Content-type: text/html\r\n\r\nDONE\n");
      netconn_write (client, BUFF, strlen (BUFF), NETCONN_COPY);
 beep(10);
    }
        free(buf);
}

//----------------------------------- 

//---------------------------------
void addto_file_bin (char *name, char * data,char * ext, struct netconn *client)
{
 
char filename[50]="",*par=NULL,err[20]="ok";
int add=-1 ,len=0,dlen=0;
dlen=strlen(data);
printf("\n adding %d bytes data ",dlen );
  if(data==NULL || strlen(data) > 1024) return ;

 char *buf= malloc (2048);
   if(buf==NULL) return ;
  sprintf(filename,"%s.%s",name,ext);

  if(strlen(data)>1)
    {

printf("\n adding data");

    par=data;
   len=base64_decode(buf ,par,strlen(par));
	//  printf("TXT: %s",buf);  

     fd = SPIFFS_open (&fs, filename, SPIFFS_APPEND|SPIFFS_WRONLY, 0); //SPIFFS_CREAT|
     printf("\n%s %d",filename, fd);

if(fd >=0) add=1 ; else add=0 ;


	  if(fd >0)  
//---------------------------------------
        {
  //        SPIFFS_lseek(&fs, fd, 0, SPIFFS_SEEK_END);
         
  if (SPIFFS_write(&fs, fd, (u8_t *)buf, len) < 1)
            {
              snprintf(err,20,"\nerrno %i\n", SPIFFS_errno(&fs));
            }
      else strcpy(err,"ok");

	  SPIFFS_close (&fs, fd);
      fd=-1;
 printf ("\nWriting to :%s\n", filename);
        }

//---------------------------------------

uint32_t total=0,used=0;
SPIFFS_info (&fs,&total,&used);
    snprintf (BUFF, 200,
                "HTTP/1.1 200 OK\r\n"
                "Content-type: text/html\r\n\r\nDONE: %d bytes %d used stat:%s, added: %d\n",total,used,err,dlen);
                
//  vTaskDelay (30 / portTICK_RATE_MS);
      netconn_write (client, BUFF, strlen (BUFF), NETCONN_COPY);
 beep(10);
    }
        free(buf);
}
//----------------------------------- 

//-----------------------------
char gbuf[500]="";
/** Serve one HTTP connection accepted in the http thread */
static void
http_server_netconn_serve(struct netconn *conn)
{
  struct netbuf *inbuf;
  char *buf=NULL;
  u16_t buflen=0;
  err_t err;
//---------------------------------------
//conn->send_timeout = 5000;
conn->recv_timeout = 5000;
printf(".");
  err = netconn_recv(conn, &inbuf);
  
  if (err == ERR_OK)  
 {
  netbuf_data(inbuf, (void**)&buf, &buflen);
if(buflen >500) buflen=500;
 // gbuf=malloc(buflen+100);
 // if(gbuf==NULL) return ;
  memcpy(gbuf,buf,buflen); 
  gbuf[buflen]='\0';
  netbuf_delete(inbuf);
//---------------------------------------
   if (buflen>=5 && buflen <1024  &&
        gbuf[0]=='G' &&
        gbuf[1]=='E' &&
        gbuf[2]=='T' &&
        gbuf[3]==' ' &&
        gbuf[4]=='/' )
     {
        printf("*");
        do_work(gbuf,conn,buflen);
     }
      //  free(gbuf);
   }
}
//---------------------------------------
/** The main function, never returns! */
static void
http_server_netconn_thread(void *arg)
{
  struct netconn *conn, *newconn;
  err_t err;
  LWIP_UNUSED_ARG(arg);
  
  /* Create a new TCP connection handle */
  /* Bind to port 80 (HTTP) with default IP address */
#if LWIP_IPV6
  conn = netconn_new(NETCONN_TCP_IPV6);
  netconn_bind(conn, IP_ADDR_ANY, 80);
#else /* LWIP_IPV6 */
  conn = netconn_new(NETCONN_TCP);
  netconn_bind(conn, IP_ADDR_ANY, 80);
#endif /* LWIP_IPV6 */
//---------------------------------------
 if (conn == NULL)        
   { 
    printf ("Connection error 0 -%d",err);
    system_restart();
   }
  
  /* Put the connection into LISTEN state */
  netconn_listen(conn);

  while(1) 
 {
    err = netconn_accept(conn, &newconn);
    if (err == ERR_OK) 
      {

        http_server_netconn_serve(newconn);
        netconn_close(newconn);
        netconn_delete(newconn);
      }
   else
   //  vTaskDelay (50 / portTICK_RATE_MS);
    printf("\n LOOP Err");
    newconn=NULL;
 }
 
  netconn_close(conn);
  netconn_delete(conn);
  printf ("Connection error exit -%d",err);
  vTaskDelay (150 / portTICK_RATE_MS);
  system_restart();
}

//-----------------------------
void user_init (void)
{
  uart_init_new ();
  uart_div_modify (0, UART_CLK_FREQ / 115200);
  system_phy_set_max_tpw (90);
  system_update_cpu_freq(160);
  int uid  = system_get_chip_id();
  printf ("\nStarting SDK.%s Uid:%d \n",     system_get_sdk_version (),uid);
 //--------------------------------
  struct esp_spiffs_config config;
  config.phys_size = SPIFFS_CFG_PHYS_SZ ;	
  config.phys_addr = SPIFFS_CFG_PHYS_ADDR;	
  config.phys_erase_block = SPIFFS_CFG_PHYS_ERASE_SZ;
  config.log_block_size = SPIFFS_CFG_LOG_BLOCK_SZ;
  config.log_page_size = SPIFFS_CFG_LOG_PAGE_SZ;
  config.fd_buf_size = 4096;
  config.cache_buf_size = 4096;

  int xx = 0;
  xx = esp_spiffs_init (&config);
  printf ("Spiffs Init status=  %d\n", xx);
  read_setup_start ();

printf("\n%s",TITLE);
printf("\nAP:%s",AP);
printf("\nID2:%s",ID2);
printf("\nU:%s",UID);
printf("\nP:%s",PASS);
//---------------------------------------
  PIN_FUNC_SELECT (GPIO_PIN_REG_4, FUNC_GPIO4);
 PIN_FUNC_SELECT (GPIO_PIN_REG_5, FUNC_GPIO5);
   PIN_FUNC_SELECT (GPIO_PIN_REG_2, FUNC_GPIO2);
  PIN_FUNC_SELECT (GPIO_PIN_REG_14, FUNC_GPIO14);
  PIN_FUNC_SELECT (GPIO_PIN_REG_13, FUNC_GPIO13);
  PIN_FUNC_SELECT (GPIO_PIN_REG_12, FUNC_GPIO12);

  GPIO_OUTPUT_SET (14, 0);
  GPIO_OUTPUT_SET (13, 0);
  GPIO_OUTPUT_SET (12, 0);
  GPIO_OUTPUT_SET (4, 0);
  GPIO_OUTPUT_SET (5, 0);
  GPIO_OUTPUT_SET (2, 0);
  
  // conn_ip_init();  
  soft_ap_init (AP);
  beep(100);   
  beep(100);   
  xTaskCreate (&http_server_netconn_thread,  (signed char *) "http_server", 512, NULL, 2, NULL);
  xTaskCreate (&LEDBlinkTask, (signed char *) "Blink", 256, NULL, 5, NULL);

  captdnsInit ();
  uint32_t freem = system_get_free_heap_size();
  //   uint32_t time = system_get_time();
  printf("\nFree Mem=%d \n Ver:X10",freem);
      
}
//----------------end-----------------------


