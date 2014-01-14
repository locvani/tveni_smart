  var now = new Date();
  var mName = now.getMonth() + 1;
  var dName = now.getDay() + 1;
  var dayNr = ((now.getDate()<10) ? "" : "")
			  + now.getDate();
	if(dName==1) Day = "კვირაა";
	if(dName==2) Day = "ორშაბათია";
	if(dName==3) Day = "სამშაბათია";
	if(dName==4) Day = "ოთხშაბათია";
	if(dName==5) Day = "ხუთშაბათია";
	if(dName==6) Day = "პარასკევია";
	if(dName==7) Day = "შაბათია";

	if(mName==1) Month="იანვარი";
	if(mName==2) Month="თებერვალი";
	if(mName==3) Month="მარტი";
	if(mName==4) Month="აპრილი";
	if(mName==5) Month="მაისი";
	if(mName==6) Month="ივნისი";
	if(mName==7) Month="ივლისი";
	if(mName==8) Month="აგვისტო";
	if(mName==9) Month="სექტემბერი";
	if(mName==10) Month="ოქტომბერი";
	if(mName==11) Month="ნოემბერი";
	if(mName==12) Month="დეკემბერი";
  var dataceichac =("დღეს " + Day+ "," + " ახალი სტილით " + dayNr + " " + Month + ".");
  document.open();
  document.write(dataceichac);
