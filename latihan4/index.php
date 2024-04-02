<?php 
    $conn = mysqli_connect('localhost','root','','platform');
    $result = mysqli_query($conn, "SELECT * FROM user");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php while ($rows= mysqli_fetch_assoc($result)):?>
        <p><?php echo $rows["username"];?></p>
    <?php endwhile;?>
</body>

</html>