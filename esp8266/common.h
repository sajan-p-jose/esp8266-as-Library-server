
//esp8266-12
//#define AP_SSID       "JioFi3_2FD86F"
//#define AP_PASSWORD   "june2016"
//#define SOFT_AP_SSID       "PLAYESP"
//#define SOFT_AP_PASSWORD   "pass1234"

//esp8266-01

#define AP_SSID       "JioFi3_2FD86F"
#define AP_PASSWORD   "june2016"

#define SOFT_AP_PASSWORD   "pass1234"

char  SOFT_AP_SSID[30]=  "library.info";
int sound=0;
int READONLY=0;

extern spiffs fs ;

spiffs_file fd =-1;
struct netconn *CONN ;
//---------------------------------------
char * decode_url(char *p);

void wifi_handle_event_cb(System_Event_t *evt);
//---------------------------------------
void wifi_handle_event_cb(System_Event_t *evt)
{
  //printf("event %x\n", evt->event_id);

    switch (evt->event_id) {
        case EVENT_STAMODE_CONNECTED:
            printf("connect to ssid %s, channel %d\n", evt->event_info.connected.ssid,
                    evt->event_info.connected.channel);
            break;
        case EVENT_STAMODE_DISCONNECTED:
            printf("disconnect from ssid %s, reason %d\n", evt->event_info.disconnected.ssid,
                    evt->event_info.disconnected.reason);

            break;
        case EVENT_STAMODE_AUTHMODE_CHANGE:
            printf("mode: %d -> %d\n", evt->event_info.auth_change.old_mode, evt->event_info.auth_change.new_mode);
            break;
        case EVENT_STAMODE_GOT_IP:
            printf("ip:" IPSTR ",mask:" IPSTR ",gw:" IPSTR, IP2STR(&evt->event_info.got_ip.ip),
                    IP2STR(&evt->event_info.got_ip.mask), IP2STR(&evt->event_info.got_ip.gw));
            printf("\n");
            break;
        case EVENT_SOFTAPMODE_STACONNECTED:
            printf("station: " MACSTR "join, AID = %d\n", MAC2STR(evt->event_info.sta_connected.mac),
                    evt->event_info.sta_connected.aid);
            break;
        case EVENT_SOFTAPMODE_STADISCONNECTED:
            printf("station: " MACSTR "leave, AID = %d\n", MAC2STR(evt->event_info.sta_disconnected.mac),
                    evt->event_info.sta_disconnected.aid);

            break;
    case 8:
      //printf("PROBE : ");
            
      break;

        default:
            break;
    }
}



void conn_ip_init(void);
void conn_ip_init(void)
{

  char  STATION_IF= 0x00;
  struct ip_info ipinfo;

    wifi_set_event_handler_cb(wifi_handle_event_cb);
    wifi_set_opmode(STATION_MODE);

    struct station_config config;
    memset(&config, 0, sizeof(config)); 

    sprintf(config.ssid, AP_SSID);
    sprintf(config.password, AP_PASSWORD);

    wifi_station_set_config(&config);
    wifi_station_dhcpc_stop();

  if(wifi_get_ip_info(STATION_IF, &ipinfo))
    {
      IP4_ADDR(&ipinfo.ip, 192, 168, 225, 100);
      IP4_ADDR(&ipinfo.gw, 192, 168, 225, 1);
      IP4_ADDR(&ipinfo.netmask, 255, 255, 255, 0);

      if(!wifi_set_ip_info(STATION_IF, &ipinfo))
	{
	  printf("CTRL not set IP config!\r\n");
	} else {
	printf(" IP: " IPSTR "\n", IP2STR(&ipinfo.ip));
      }
    }
 
  wifi_station_connect();
}





void conn_ap_init(void);
void conn_ap_init(void)
{
    wifi_set_event_handler_cb(wifi_handle_event_cb);
    wifi_set_opmode(STATION_MODE);

    struct station_config config;
    memset(&config, 0, sizeof(config)); 

    strcpy(config.ssid, AP_SSID);
    sytcpy(config.password, AP_PASSWORD);

    wifi_station_set_config(&config);
 

   if(!wifi_station_dhcpc_status()){
        printf("DHCP is not started. Starting it...\n");
        if(!wifi_station_dhcpc_start()){
            printf("DHCP start failed!\n");
	}
    }
   printf("\nDHCP started!\n");
    wifi_station_connect();
}


void soft_ap_init(char * ap);
void soft_ap_init(char * ap)
{

  char password[33];
  char macaddr[10];
  int ch=0;
 strncpy(SOFT_AP_SSID,ap,30) ;
  wifi_set_event_handler_cb(wifi_handle_event_cb);
//  wifi_set_phy_mode(PHY_MODE_11G);
  wifi_set_opmode(SOFTAP_MODE);
 
      // wifi_set_sleep_type(NONE_SLEEP_T);
      // wifi_get_macaddr(SOFTAP_IF, macaddr);
      // wifi_wps_enable(WPS_TYPE_PBC);
 

  struct softap_config *config = (struct softap_config *) zalloc(sizeof(struct softap_config)); // initialization
    wifi_softap_get_config(config); // Get soft-AP config first.
    strcpy(config->ssid, SOFT_AP_SSID) ;
    // sprintf(config->password, SOFT_AP_PASSWORD);
    //  config->authmode = AUTH_WPA_WPA2_PSK;
    //  config->authmode = AUTH_WPA_PSK;
    config->authmode = AUTH_OPEN;
    //config->authmode = AUTH_WEP;
    //config->authmode = AUTH_MAX;
    // config->authmode = AUTH_WPA2_PSK;

    config->ssid_len = 0; // or its actual SSID length
    config->max_connection = 4;
    wifi_softap_set_config(config); // Set ESP8266 soft-AP config
    free(config);

    
    
    struct station_info * station = wifi_softap_get_station_info();
    while (station) {
      //   printf("bssid : MACSTR, ip : IPSTR/n", MAC2STR(station->bssid), IP2STR(&station->ip));
        station = STAILQ_NEXT(station, next);
    }
    wifi_softap_free_station_info(); 
    wifi_softap_dhcps_stop(); // disable soft-AP DHCP server
    struct ip_info info;
    IP4_ADDR(&info.ip, 192, 168, 5, 1); // set IP
    IP4_ADDR(&info.gw, 192, 168, 5, 1); // set gateway

    IP4_ADDR(&info.netmask, 255, 255, 255, 0); // set netmask
    wifi_set_ip_info(SOFTAP_IF, &info);

    struct dhcps_lease dhcp_lease;
    IP4_ADDR(&dhcp_lease.start_ip, 192, 168, 5, 100);
    IP4_ADDR(&dhcp_lease.end_ip, 192, 168, 5, 200);
    wifi_softap_set_dhcps_lease(&dhcp_lease);
    wifi_softap_dhcps_start(); // enable soft-AP DHCP server
	
}






/******************************************************************************
 * FunctionName : user_rf_cal_sector_set
 * Description  : SDK just reversed 4 sectors, used for rf init data and paramters.
 *                We add this function to force users to set rf cal sector, since
 *                we don't know which sector is free in user's application.
 *                sector map for last several sectors : ABCCC
 *                A : rf cal
 *                B : rf init data
 *                C : sdk parameters
 * Parameters   : none
 * Returns      : rf cal sector
*******************************************************************************/
uint32
user_rf_cal_sector_set (void)
{
  flash_size_map size_map = system_get_flash_size_map ();
  uint32 rf_cal_sec = 0;

  switch (size_map)
    {
    case FLASH_SIZE_4M_MAP_256_256:
      rf_cal_sec = 128 - 5;
      break;

    case FLASH_SIZE_8M_MAP_512_512:
      rf_cal_sec = 256 - 5;
      break;

    case FLASH_SIZE_16M_MAP_512_512:
    case FLASH_SIZE_16M_MAP_1024_1024:
      rf_cal_sec = 512 - 5;
      break;

    case FLASH_SIZE_32M_MAP_512_512:
    case FLASH_SIZE_32M_MAP_1024_1024:
      rf_cal_sec = 1024 - 5;
      break;

    default:
      rf_cal_sec = 0;
      break;
    }

  return rf_cal_sec;
}


//-------------------------------------------------
/* **** SPRINTF_ENC ****  */
char *
sprintf_enc (char *buff, char *fmt, ...)
{
  va_list ap;
  int i,cnt=0;
  double f;
  char c, *buf = buff, *p, *ar, num[50];
  va_start (ap, fmt);

  for (p = fmt; *p; p++)
    {
      if (*p != '%')
	{
	  *buf = *p;
	  buf++;cnt++; if(cnt>5090){*buf='\0'; return buff ;}
	  continue;
	}
      else if (*(p + 1) == 's')
	{
	  p++;
	  ar = va_arg (ap, char *);
	  while ((c = *ar++))
	    {
	      switch (c)
		{
		case '\'':
		  *buf = '#';
		  *++buf = '3';
		  *++buf = '9';
		  *++buf = ';';
		  break;
		case '&':
		  *buf = '#';
		  *++buf = '3';
		  *++buf = '8';
		  *++buf = ';';
		  break;
		case '\"':
		  *buf = '#';
		  *++buf = '3';
		  *++buf = '4';
		  *++buf = ';';
		  break;
		case '\\':
		  *buf = '#';
		  *++buf = '9';
		  *++buf = '2';
		  *++buf = ';';
		  break;
		case '<':
		  *buf = '#';
		  *++buf = '6';
		  *++buf = '0';
		  *++buf = ';';
		  break;
		case '>':
		  *buf = '#';
		  *++buf = '6';
		  *++buf = '2';
		  *++buf = ';';
		  break;
		default:
		  *buf = c;
		  break;
		}
	      buf++;
	    }
	}
      else if (*(p + 1) == 'd')
	{
	  p++;
	  i = va_arg (ap, int);
	  sprintf (num, "%d", i);
	  ar = num;
	  while ((c = *ar++))
	    {
	      *buf = c;
	      buf++;
	    }
	}
      else if (*(p + 1) == 'f')
	{
	  p++;
	  f = va_arg (ap, double);
	  sprintf (num, "%f", f);
	  ar = num;
	  while ((c = *ar++))
	    {
	      *buf = c;
	      buf++;
	    }
	}

      else if (*(p + 1) == '%')
	{
	  p++;
	  *buf = *p;
	  buf++;
	  continue;
	}
    }
  *buf = '\0';

  va_end (ap);
  return buff;
}

//-----------------------------
int
hex(int digit) {
  switch(digit) {

  case '0': case '1': case '2': case '3': case '4':
  case '5': case '6': case '7': case '8': case '9':
    return digit - '0';

  case 'A': case 'B': case 'C': case 'D': case 'E': case 'F':
    return 10 + digit - 'A';

  case 'a': case 'b': case 'c': case 'd': case 'e': case 'f':
    return 10 + digit - 'a';

  default:
    return -1;
  }
}

//----------------------------
char *
decode_url(char *p) {
  char *out;
  int i, k, L, R;

  if (p == 0) {
    return 0;
  }
  out = (char *) os_malloc(strlen(p) + 1);
  for (i = k = 0; p[i] != 0; i++) {
    switch(p[i]) {

    case '+':
      out[k++] = ' ';
      continue;

    case '%':
      if ((L = hex(p[i + 1])) >= 0 &&
	  (R = hex(p[i + 2])) >= 0)
	{
	  out[k++] = (L << 4) + R;
	  i += 2;
	  continue;
	}
      break;
    }
    out[k++] = p[i];
  }
  out[k] = 0;
  return out;
}
//--------------------------------------
void memcpy_P(void * dst, const void * src, const unsigned int len)
{
  uint32_t       * _dst = (      uint32_t *)dst;
  const uint32_t * _src = (const uint32_t *)src;
  const uint32_t * _end = _src + (len >> 2);

  while(_src != _end)
    *_dst++ = *_src++;  

  const uint32_t rem = len & 0x3;
  if (!rem)
    return;

  const uint32_t mask = 0xFFFFFFFF << ((4 - rem) << 3);
  *_dst = (*_dst & ~mask) | (*_src & mask);
}
//------------------------------
void
LEDBlinkTask (void *pvParameters)
{
  while (1)
    {
    
      GPIO_OUTPUT_SET (2, 0);
      if(sound==1)
	{
	  GPIO_OUTPUT_SET (5, 1);
	}
      vTaskDelay (100 / portTICK_RATE_MS);

      GPIO_OUTPUT_SET (2, 1);
      GPIO_OUTPUT_SET (5, 0);
      sound=0;
      vTaskDelay (2000 / portTICK_RATE_MS);
   
      //---------------------------------------
    }
}
//-----------------------------------
void
soundTask (void *pvParameters)
{
  while (1)
    {
  
      if(sound==1)
	{
	  GPIO_OUTPUT_SET (5, 1);
	  vTaskDelay (30 / portTICK_RATE_MS);
	  GPIO_OUTPUT_SET (5, 0);
	  vTaskDelay (30/ portTICK_RATE_MS);
	  sound=0;
	}


    }
}
//--------------------------------
