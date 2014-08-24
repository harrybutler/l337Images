<?php
$base64 = $_POST['base64textarea'];
$base10 = base_convert($base64, 64, 10);
?>
<html>
<head>
<script src="toimagefinal.js"></script>
</head>
<body>
<h1>Image</h1>
    <textarea id="base64textarea" placeholder="Base64 will appear here" cols="50" rows="15"></textarea><br />
<button onclick="base64_to_base10()">Click me</button>
<div id="someBox"></div>
</body>
</html>

