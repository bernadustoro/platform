<?php 
     session_start();
    require'koneksi.php';

    if (isset($_POST['regiss'])) {
        header("Location: register.php");
    } elseif(isset($_POST['loginbtn'])){
        login($_POST);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Login.css">
</head>
<body>
    <form action="" method="post">
        <div class="container">
            <h6> LOGIN </h6>
            <div class="grup">
                <label for="username"> Username </label>
                <input type="text" id="username" name="username" placeholder="Username">
            </div>
            <div class="grup">
                <label for="password"> password </label>
                <input type="text" id="password" name="password" placeholder="password">
            </div>

            <button class="regis" name="regiss">Registrasi</button>
            <button type="submit" class="Loginbtn" name="loginbtn"> Login </button>
        </div>
    </form>
</body>
</html>