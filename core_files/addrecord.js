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
function addRecord() 
{
	var itID  = document.getElementById("itName").value;
	var itQuan  = document.getElementById("itQuan").value;
	var sPrice  = document.getElementById("sPrice").value;
	xHRObject.open("GET", "addrecord.php?&saleid=" +  encodeURIComponent(saleid)+ "&itID=" + encodeURIComponent(itID)+ "&itQuan=" + encodeURIComponent(itQuan)+"&sPrice=" + encodeURIComponent(sPrice)+ "&sid=" + encodeURIComponent("1") + "&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData13;
	xHRObject.send(null);
	for (i=1; i < x; i++)
	{
		var itID  = document.getElementById(b).value;
		if (itID != null && itID != "")
		{
			a =  i+1;
			b = "itName"+a;
			c = "itQuan"+a;
			d = "sPrice"+a;
			var itQuan  = document.getElementById(c).value;
			var sPrice  = document.getElementById(d).value;
			xHRObject.open("GET", "addrecord.php?&saleid=" +  encodeURIComponent(saleid)+ "&itID=" + encodeURIComponent(itID)+ "&itQuan=" + encodeURIComponent(itQuan)+"&sPrice=" + encodeURIComponent(sPrice)+ "&sid=" + encodeURIComponent("0") +"&value=" + Number(new Date), false);
			xHRObject.onreadystatechange = getData13;
			xHRObject.send(null);
		}
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

function getData2()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
	saleid = xHRObject.responseText;
	var spantag = document.getElementById("saleid");
	spantag.innerHTML = xHRObject.responseText;
	}
}

//the function will collect all the data and put to server to process
function addrecord2() 
{
	xHRObject.open("GET", "addrecord2.php?&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData2;
    xHRObject.send(null);
}

function getData3()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
		if (item==1)
		{
			var spantag = document.getElementById("sPrice");
			spantag.value = xHRObject.responseText;
		}
		else
		{
			var id1 = "sPrice" + item; 
			var spantag = document.getElementById(id1);
			spantag.value = xHRObject.responseText;
		}
	}
}

var item;

function checkPrice(itemID, item1)
{
	if(itemID != null && itemID != "")
	{
		item = item1;
		xHRObject.open("GET", "checkPrice.php?&itemID=" + encodeURIComponent(itemID) +"&value=" + Number(new Date), false);
		xHRObject.onreadystatechange = getData3;
		xHRObject.send(null);
	}
}

var total=0;
function calculation()
{
	for (y=1;y<=x;y++)
	{
		if (y == 1)
		{
			var h = document.getElementById("itQuan").value;
			var n = document.getElementById("sPrice").value;
			if (h != null && h != "" && n != null && n != "" )
			{
				total = h*n;
			}
		}
		else
		{
			var id1 = "sPrice" +y; 
			var id2 = "itQuan" +y; 
			if (typeof document.getElementById(id1).value !== 'undefined' && typeof document.getElementById(id2).value !== 'undefined')
			{
				var h = document.getElementById(id1).value;
				var n = document.getElementById(id2).value;
				if (id1 != null && id1 != "" && id2 != null && id2 != "" )
				{
					total = total + (h*n);
				}
			}
		}
	}
	var spantag = document.getElementById("Total");
	spantag.innerHTML = total;
}
