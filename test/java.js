<!DOCTYPE html>

<html>

<head>

<title>サンプル</title>

<script>

window.onload = function() {

 setInterval(function() {

  var dd = new Date();

  document.getElementById("T1").innerHTML = dd.toLocaleString();

 }, 1000);

}

</script>

</head>

<body>

<div id="T1"></div>

</body>

</html>