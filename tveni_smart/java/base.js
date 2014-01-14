//------------------------
window.onerror = null;
var tooltip_attr_name = "tooltip";
var tooltip_blank_text = "ჭირდება ინტერნეტი. გაიხსნება ახალ ფანჯარაში";
var tooltip_newline_entity = "";
window.onload = function(e){
  if (document.createElement) tooltip.d();
}
tooltip = {
  t: document.createElement("DIV"),
  c: null,
  g: false,
  m: function(e){
    if (tooltip.g){
      oCanvas = document.getElementsByTagName(
      (document.compatMode && document.compatMode == "CSS1Compat") ? "HTML" : "BODY"
      )[0];
      x = window.event ? event.clientX + oCanvas.scrollLeft : e.pageX;
      y = window.event ? event.clientY + oCanvas.scrollTop : e.pageY;
      tooltip.a(x, y);
    }
  },
  d: function(){
    tooltip.t.setAttribute("id", "bb5");
    document.body.appendChild(tooltip.t);
    a = (document.all) ? document.all : document.getElementsByTagName("*");
    aLength = a.length;
    for (var i = 0; i < aLength; i++){
      tooltip_title = a[i].getAttribute("title");
      tooltip_alt = a[i].getAttribute("alt");
      tooltip_blank = a[i].getAttribute("target") && a[i].getAttribute("target") == "_blank" && tooltip_blank_text;
      if (tooltip_title || tooltip_blank){
        a[i].setAttribute(tooltip_attr_name, tooltip_blank ? (tooltip_title ? tooltip_title + " " + tooltip_blank_text : tooltip_blank_text) : tooltip_title);
        if (a[i].getAttribute(tooltip_attr_name)){
          a[i].removeAttribute("title");
          if (tooltip_alt && a[i].complete) a[i].removeAttribute("alt");
          tooltip.l(a[i], "mouseover", tooltip.s);
          tooltip.l(a[i], "mouseout", tooltip.h);
        }
      }else if (tooltip_alt && a[i].complete){
        a[i].setAttribute(tooltip_attr_name, tooltip_alt);
        if (a[i].getAttribute(tooltip_attr_name)){
          a[i].removeAttribute("alt");
          tooltip.l(a[i], "mouseover", tooltip.s);
          tooltip.l(a[i], "mouseout", tooltip.h);
        }
      }
      if (!a[i].getAttribute(tooltip_attr_name) && tooltip_blank){
      }
    }
    document.onmousemove = tooltip.m;
    window.onscroll = tooltip.h;
    tooltip.a(-99, -99);
  },
  s: function(e){
    d = (window.event) ? window.event.srcElement : e.currentTarget;
    if (!d.getAttribute(tooltip_attr_name)) return;
    s = d.getAttribute(tooltip_attr_name);
    if (tooltip_newline_entity){
      s = s.replace(/\&/g,"&amp;");
      s = s.replace(/\</g,"&lt;");
      s = s.replace(/\>/g,"&gt;");
      s = s.replace(/ /g, "<br />");
      tooltip.t.innerHTML = s;
    }else{
      if (tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
      tooltip.t.appendChild(document.createTextNode(s));
    }
    tooltip.c = setTimeout("tooltip.t.style.visibility = 'visible';", 500);
    tooltip.g = true;
  },
  h: function(e){
    tooltip.t.style.visibility = "hidden";
    if (!tooltip_newline_entity && tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
    clearTimeout(tooltip.c);
    tooltip.g = false;
    tooltip.a(-99, -99);
  },
  l: function(o, e, a){
    if (o.addEventListener) o.addEventListener(e, a, false);
    else if (o.attachEvent) o.attachEvent("on" + e, a);
      else return null;
  },
  a: function(x, y){
    oCanvas = document.getElementsByTagName(
    (document.compatMode && document.compatMode == "CSS1Compat") ? "HTML" : "BODY"
    )[0];
    w_width = window.innerWidth ? window.innerWidth + window.pageXOffset : oCanvas.clientWidth + oCanvas.scrollLeft;
    w_height = window.innerHeight ? window.innerHeight + window.pageYOffset : oCanvas.clientHeight + oCanvas.scrollTop;
    t_width = window.event ? tooltip.t.clientWidth : tooltip.t.offsetWidth;
    t_height = window.event ? tooltip.t.clientHeight : tooltip.t.offsetHeight;
    t_extra_width = 7;
    t_extra_height = 5;
    tooltip.t.style.left = x + 12 + "px";
    tooltip.t.style.top = y + 5 + "px";
    while (x + t_width + t_extra_width > w_width){
      --x;
      tooltip.t.style.left = x + "px";
      t_width = window.event ? tooltip.t.clientWidth : tooltip.t.offsetWidth;
    }
    while (y + t_height + t_extra_height > w_height){
      --y;
      tooltip.t.style.top = y + "px";
      t_height = window.event ? tooltip.t.clientHeight : tooltip.t.offsetHeight;
    }
  }
}
//----------------
function form_onsubmit()
{
var easter_date=new Date(2000,3,3);
easter_date_old=new Date();
y="";
numb=0;
mon=new Array("იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი");

y=parseInt(form_easter.T1.value);
numb=((19*(y%19)+16)%30)+(2*(y%4)+4*(y%7)+6*((19*(y%19)+16)%30))%7;
easter_date.setDate(easter_date.getDate()+numb);
form_easter.st_new.value=(y>=1901)?"ახალი სტილით "+easter_date.getDate().toString()+" "+mon[easter_date.getMonth().toString()]:"";
easter_date_old=easter_date;
easter_date_old.setDate(easter_date.getDate()-13);
form_easter.st_old.value=(y>=1901)?"ძველი სტილით "+easter_date_old.getDate().toString()+" "+mon[easter_date_old.getMonth().toString()]:"";
if (y>=2201) {
form_easter.st_old.value=("თარიღი არ გამოითვლება");
form_easter.st_new.value=("ჩაწერეთ 1901-დან 2200-მდე");	 
} 
if (y<=1900) {
form_easter.st_old.value=("თარიღი არ გამოითვლება");
form_easter.st_new.value=("ჩაწერეთ 1901-დან 2200-მდე");
} 
}
//-------
