<?php 
    $conn = mysqli_connect('localhost','root','','platform');
    function tambahAkun($data){
        global $conn;
        $username = $data['nama'];
        $password1 = mysqli_real_escape_string($conn,$data['password1']);
        $password2 = mysqli_real_escape_string($conn,$data['password2']);

        if($username != null && ($password1 != null || $password2 != null)){
            if($password1 != $password2){
                echo'<script> alert("password beda");</script>';
            } else {
                $existing_user = mysqli_query($conn,"SELECT username FROM user WHERE username='$username'");
                if(mysqli_num_rows($existing_user) == 0){
                    $password1 = password_hash($password1,PASSWORD_DEFAULT);
                    $query ="INSERT INTO user (username, password) VALUES ('$username', '$password1')";
                    mysqli_query($conn,$query);
                    header("Location: login.php");
                    exit();
                } else {
                    echo'<script> alert("username udah dipakai harap ganti");</script>';
                }
            }
        } else {
            echo'<script> alert("semua wajib diisi");</script>';
        }
    }

    

    function tambahTodo($data, $username){
        global $conn;
        $text = mysqli_real_escape_string($conn, $data['todo']);
    
        $user_query = "SELECT id FROM user WHERE username = '$username'";
        $user_result = mysqli_query($conn, $user_query);
        $user_row = mysqli_fetch_assoc($user_result);
        $user_id = $user_row['id'];
    
        $query = "INSERT INTO todo (todolist, status, user_id) 
                  VALUES ('$text', 'onprocess', '$user_id')";
        mysqli_query($conn, $query);
    }
    

    function query($username){
        global $conn;
        $query = "SELECT todo.id_todo, todo.todolist, todo.status 
                  FROM todo 
                  JOIN user ON todo.user_id = user.id 
                  WHERE user.username = '$username'";
        $hasil = mysqli_query($conn, $query);
        $datas = [];
        while ($row = mysqli_fetch_assoc($hasil)){
            $datas[] = $row;
        }
        return $datas;
    }
    
    function hapus($data,$index){
        global $conn;
        $isi = $data['isi'.$index];
        $query = "SELECT status FROM todo WHERE todolist = '$isi'";
        $result = mysqli_query($conn, $query);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            if ($row['status'] == 'onprocess') {
                echo "<script>alert('Data tidak dapat dihapus karena status masih onprocess harap klik selesai dahulu');</script>";
            } else {
                $deleteQuery = "DELETE FROM todo WHERE todolist = '$isi'";
                mysqli_query($conn, $deleteQuery);
                echo "<script>alert('Data berhasil dihapus');</script>";
            }
        } else {
            echo "<script>alert('Terjadi kesalahan dalam mengambil status data');</script>";
        }
    }

    function selesai($data,$index){
        global $conn;
        $isi = $data['isi'.$index];
        $query = "UPDATE todo SET status = 'selesai' WHERE todolist = '$isi'";
        mysqli_query($conn,$query);
        return 'selesai';
    }
?>