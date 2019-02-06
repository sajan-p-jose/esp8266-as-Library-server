//--------p65------------------- 
var TITLE="My Library";
 read_setup() ;
 function index_page() {
 clear_all();
 clear();
 heading_box();
printf ( "<h1 id=title >"+TITLE+"</h1>");
printf ( "<p id=address ></p>");
printf ( "<div id='book_tile'>");
printf ( " <table border=0 padding=5 cellpadding=5 cellspacing=5 align=center ><tr>");
printf ( "");
printf ( "<td class=til id=t_1  align=center >");

printf ( "<a href='javascript:books();' ><svg width='70' height='40' class=icon id=img1>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Books</a></td>");

printf ( "<td class=til id=t_2  align=center >");

printf ( "<a href='javascript:periodicals();' ><svg width='70' height='40' class=icon id=img2>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Periodicals</a></td>");

printf ( "<td class=til id=t_3  align=center >");

printf ( "<a href='javascript:classification();' ><svg width='70' height='40' class=icon id=img3>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Book Classification</a></td>");
printf ( "</tr><tr>");
printf ( "<td class=til id=t_4  align=center >");

printf ( "<a href='javascript:introduction();' ><svg width='70' height='40' class=icon id=img4>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Introduction</a></td>");

printf ( "<td class=til id=t_5  align=center >");

printf ( "<a href='javascript:cd_dvd();' ><svg width='70' height='40' class=icon id=img5>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>CD/DVD</a></td>");

printf ( "<td class=til id=t_6  align=center >");

printf ( "<a href='javascript:shelf();' ><svg width='70' height='40' class=icon id=img6>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Shelf list</a></td>");
printf ( "</tr><tr>");
printf ( "<td class=til id=t_7  align=center >");

printf ( "<a href='javascript:book_data();' ><svg width='70' height='40' class=icon id=img7>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>List Of books</a></td>");

printf ( "<td class=til id=t_8  align=center >");

printf ( "<a href='javascript:members();' ><svg width='70' height='40' class=icon id=img8>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Members</a></td>");

printf ( "<td class=til id=t_9  align=center >");

printf ( "<a href='javascript:lending();' ><svg width='70' height='40' class=icon id=img9>   <circle cx='35' cy='20' r='15' stroke='gray' stroke-width='1' fill-opacity='0.1'> </svg><br>Book lending</a></td>");

 printf ( "<tr>");
 printf ( "</tr></table>");
 printf ( "</div>");
 status_box();
 msg_box();
 refresh("rows");
runperiodically(onepi,5000);
// onepi() ;

 }
