<?php 
    require 'koneksi.php';
    $error ='';
    if (isset($_POST['tambah'])){
        if (!empty($_POST['todo'])){
            tambahTodo($_POST);
            header("Location: todoList.php");
            exit();
        } else {
            echo "<script> 
                  alert('data harus diisi');
                  </script>";
        }
    }

    $text = query("SELECT todolist FROM todo");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="todo.css">
</head>
<body>
    <form action="" method="post">
        <div class="container">
            <div class="tambah-todo">
                <input type="text" name="todo" placeholder="Teks todo">
                <button class="tambah" name="tambah"> Tambah</button>
            </div>
            <?php foreach ($text as $isi):?>
            <div class="show-todo">
                <input type="text" value="<?php echo $isi['todolist']; ?>" readonly>
                <button class="tambah">Selesai</button>
                <button class="tambah">Hapus</button>
            </div>
            <?php endforeach;?>
        </div>
    </form>
</body>
</html>