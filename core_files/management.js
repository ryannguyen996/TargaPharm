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
function getData2()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
	var spantag = document.getElementById("output1");
	spantag.innerHTML = xHRObject.responseText;
	}
}
//the function will collect all the data and put to server to process
function csv() 
{
	var year = document.getElementById("year").value;
	if(year != null && year != "")
	{
	var a = "csv.php?&action=".concat(encodeURIComponent(year));
	document.location.href = a;
	}
	else 
	{
		var spantag = document.getElementById("output1");
		spantag.innerHTML = "</br>Pleaese select a year";
	}
}

function csvMonth() 
{
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	if(year != null && year != "" && month != null && month != "")
	{
	var a = "csvMonth.php?&action=".concat(encodeURIComponent(year));
	var b = a.concat("&month=").concat(encodeURIComponent(month));
	document.location.href = b;
	}
	else 
	{
		var spantag = document.getElementById("output1");
		spantag.innerHTML = "</br>Pleaese select a year and a month";
	}
}

function csvWeek() 
{
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var week = document.getElementById("week").value;
	if(year != null && year != "" && month != null && month != "" && week != null && week != "")
	{
	var a = "csvWeek.php?&year=".concat(encodeURIComponent(year));
	var b = a.concat("&month=").concat(encodeURIComponent(month));
	var c = b.concat("&week=").concat(encodeURIComponent(week));
	document.location.href = c;
	}
	else 
	{
		var spantag = document.getElementById("output1");
		spantag.innerHTML = "</br>Pleaese select a year and a month";
	}
}

function selectyear()
{
	var yearselect = '<select id="year"><option value="">Please select a year</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option></select><input type="button" onclick="csv();" value ="Download"></input><div id="output1"></div>';
	var spantag = document.getElementById("output");
	spantag.innerHTML = yearselect;
}

function selectmonth()
{
	var monthselect = '<select id="month"><option value="">Please select a month</option><option value="01">Jan</option><option value="02">Feb</option><option value="03">Mar</option><option value="04">Apr</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">Aug</option><option value="09">Sept</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select><select id="year"><option value="">Please select a year</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option></select><input type="button" onclick="csvMonth();" value ="Generate CSV"></input><div id="output1"></div>';
	var spantag = document.getElementById("output");
	spantag.innerHTML = monthselect;
}

function getData3()
{
	//alert(xHRObject.responseText);
	if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
	{
	var spantag = document.getElementById("output");
	spantag.innerHTML = xHRObject.responseText;
	}
}

function lowstock() 
{
	xHRObject.open("GET", "lowstock.php?&action=" + encodeURIComponent(0)+ "&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData3;
    xHRObject.send(null);
}


function popularbutton()
{
	var spantag = document.getElementById("output");
	spantag.innerHTML = "<button type='button' onclick='popular(1);'>Sale Quantity</button>    <button type='button' onclick='popular(2);'>Sale Times</button></br></br>";
}

function popular(num)
{
	xHRObject.open("GET", "popularitem.php?&action=" + encodeURIComponent(num)+ "&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData3;
    xHRObject.send(null);
}

function selectweek()
{
	var weekselect = '<select id="week"><option value="">Please select a week</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><select id="month"><option value="">Please select a month</option><option value="01">Jan</option><option value="02">Feb</option><option value="03">Mar</option><option value="04">Apr</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">Aug</option><option value="09">Sept</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select><select id="year"><option value="">Please select a year</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option></select><input type="button" onclick="csvWeek();" value ="Generate CSV"></input><div id="output1"></div>';
	var spantag = document.getElementById("output");
	spantag.innerHTML = weekselect;
}

function addacc()
{
	var spantag = document.getElementById("output");
	spantag.innerHTML = '<p>New staff account:</p><label for="id"><span id="txt">Username<span class="redonly">*</span></span><input type="txt" name="id" id="id" size="15"/></label></br></br><label for="pw"><span id="txt">Password<span class="redonly">*</span></span><input type="password" name="pw" id="pw" size="15"/></label>&nbsp;&nbsp;<img src="theicon" onmouseover="mouseoverPass();" onmouseout="mouseoutPass();" /></br></br><button type="button" onclick="addacc1()">Create</button><div id="output1"></div>';
}

function addacc1() 
{
	var id = document.getElementById("id").value;
	var pw = document.getElementById("pw").value;
	if(id != null && id != "" && pw != null && pw != "")
	{
		var form = document.getElementById("1");
		form.reset();
		xHRObject.open("GET", "addacc.php?&id=" + encodeURIComponent(id)+ "&pw=" + encodeURIComponent(pw)+ "&value=" + Number(new Date), false);
		xHRObject.onreadystatechange = getData2;
		xHRObject.send(null);
	}
	else 
	{
		var spantag = document.getElementById("output1");
		spantag.innerHTML = "</br>Please enter Username and Password";
	}
}

function addadacc()
{
	var spantag = document.getElementById("output");
	spantag.innerHTML = '<p>New admin account:</p><label for="id"><span id="txt">Username<span class="redonly">*</span></span><input type="txt" name="id" id="id" size="15"/></label></br></br><label for="pw"><span id="txt">Password<span class="redonly">*</span></span><input type="password" name="pw" id="pw" size="15"/></label>&nbsp;&nbsp;<img src="theicon" onmouseover="mouseoverPass();" onmouseout="mouseoutPass();" /></br></br><button type="button" onclick="addadacc1()">Create</button><div id="output1"></div>';
}

function addadacc1() 
{
	var id = document.getElementById("id").value;
	var pw = document.getElementById("pw").value;
	if(id != null && id != "" && pw != null && pw != "")
	{
		var form = document.getElementById("1");
		form.reset();
		xHRObject.open("GET", "addadacc.php?&id=" + encodeURIComponent(id)+ "&pw=" + encodeURIComponent(pw)+ "&value=" + Number(new Date), false);
		xHRObject.onreadystatechange = getData2;
		xHRObject.send(null);
	}
	else 
	{
		var spantag = document.getElementById("output1");
		spantag.innerHTML = "</br>Please enter Username and Password";
	}
}


function mouseoverPass(obj) {
  var obj = document.getElementById('pw');
  obj.type = "text";
}
function mouseoutPass(obj) {
  var obj = document.getElementById('pw');
  obj.type = "password";
}

function log() 
{
	xHRObject.open("GET", "log.php?&value=" + Number(new Date), false);
	xHRObject.onreadystatechange = getData3;
    xHRObject.send(null);
}