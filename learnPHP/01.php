<!DOCTYPE html> 
<html> 
<body> 

<h1>My first PHP page</h1> 

<?php 
echo "Hello World!"; 
?> 

<br>
<?php 
$url_query = $_SERVER["QUERY_STRING"];

echo $url_query;
?> 

<br>

欢迎 <?php echo $_GET["fname"]; ?>!<br>
你的年龄是 <?php echo $_GET["age"]; ?>  岁。
<br>
作者是 <?php echo $_GET["author"]; ?>  。
<br>
name是 <?php 
$nameUrl = $_GET['name'];
echo $nameUrl;
$nameUrl = utf8_decode($nameUrl);
echo $nameUrl; ?>  。

</body> 
</html>