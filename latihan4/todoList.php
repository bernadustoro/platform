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
                <input type="text" placeholder="Teks todo">
                <button class="tambah"> Tambah</button>
            </div>
            <?php 
            $a=1;
            while ($a <= 10):?>
            <div class="show-todo">
                <input type="text" placeholder="Teks todo" readonly>
                <button class="tambah">Selesai</button>
                <button class="tambah">Hapus</button>
            </div>
            <?php 
            $a++;
            endwhile;?>
        </div>
    </form>
</body>
</html>