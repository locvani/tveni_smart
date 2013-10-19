//-------
function HomeButton()
{
    	var bbbb=new Date();
		var to=bbbb.getTimezoneOffset()/60;
		var to=to*60*60*1000;

var today=new Date();
tm=today.getMonth()+1;
tdb=today.getDate();
tyb=today.getYear();
tyb=tyb-Math.floor(tyb/100)*100+2000;
utc=Date.UTC(tyb,tm-1,tdb);
utc=utc-1123200000+to;
utc+=60*60*1000;// zafxulis dro?
od=new Date(utc);
oldm=od.getMonth()+1;
oldd=od.getDate();
var months=new Array("ian","teb","mar","apr","mai","ivn","ivl","agv","seq","oqt","noe","dek");
location.href=(oldd+months[oldm-1]+".html");
}
//-----------