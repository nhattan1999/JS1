<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input name="" id="txt-name" class="btn btn-primary" type="text">
    <button id="btn-click" onclick="myFunction()">Hello</button>
</body>
<script language="javascript">
    function myFunction() {
            var name = document.getElementById("txt-name").value;
            alert(name);
        }
</script>
</html>