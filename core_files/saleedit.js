var xHRObject = false;
if (window.XMLHttpRequest)
{
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}
//the function will receive respone from php and display to htm page
function getData13()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
	var spantag = document.getElementById("output");
	spantag.innerHTML += xHRObject.responseText;
	}
}
//the function will collect all the data and put to server to process
function saleedit() 
{
	var itID  = document.getElementById("itName").value;
	var itQuan  = document.getElementById("itQuan").value;
	var sPrice  = document.getElementById("sPrice").value;
	xHRObject.open("GET", "saleedit.php?&saleid=" +  encodeURIComponent(saleid)+ "&itID=" + encodeURIComponent(itID)+ "&itQuan=" + encodeURIComponent(itQuan)+"&sPrice=" + encodeURIComponent(sPrice)+ "&sid=" + encodeURIComponent("1") + "&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData13;
	xHRObject.send(null);
	for (i=1; i < x; i++)
	{
		a =  i+1;
		b = "itName"+a;
		c = "itQuan"+a;
		d = "sPrice"+a;
		var itID  = document.getElementById(b).value;
		var itQuan  = document.getElementById(c).value;
		var sPrice  = document.getElementById(d).value;
		xHRObject.open("GET", "saleedit.php?&saleid=" +  encodeURIComponent(saleid)+ "&itID=" + encodeURIComponent(itID)+ "&itQuan=" + encodeURIComponent(itQuan)+"&sPrice=" + encodeURIComponent(sPrice)+ "&sid=" + encodeURIComponent("0") +"&value=" + Number(new Date), false);
		xHRObject.onreadystatechange = getData13;
		xHRObject.send(null);
	}
	
}
var x = 1;

//the function will receive respone from php and display to htm page
function getData1()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
		if (x==1)
		{
			var spantag = document.getElementById("itName");
			spantag.innerHTML = xHRObject.responseText;
		}
		else
		{
			var id = "itName" + x;
			var spantag = document.getElementById(id);
			spantag.innerHTML = xHRObject.responseText;
		}
	}
}

//the function will collect all the data and put to server to process
function addrecord1() 
{
		xHRObject.open("GET", "addrecord1.php?&value=" + Number(new Date), false);
		xHRObject.onreadystatechange = getData1;
		xHRObject.send(null);
}


//the function will receive respone from php and display to htm page
var saleid;


//the function will collect all the data and put to server to process
function getsaleid() 
{
	saleid = sessionStorage.saleid;
	var spantag = document.getElementById("saleid");
	spantag.innerHTML = sessionStorage.saleid;
}
