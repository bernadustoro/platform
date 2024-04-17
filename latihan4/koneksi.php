<?php 
    $conn = mysqli_connect('localhost','root','','platform');
    
    function tambahAkun($data){
        global $conn;
        $username = $data['nama'];
        $password1 = $data['password1'];
        $password2 = $data['password2'];

        if($username != null && ($password1 != null || $password2 != null)){
            if($password1 != $password2){
                echo'<script> alert("password beda");</script>';
            } else {
                $existing_user = query("SELECT * FROM user WHERE username='$username'");
                if(!$existing_user){
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

    function tambahTodo($data){
        global $conn;
        $text = $data['todo'];

        $query = "INSERT INTO todo VALUES('','$text','')";

        mysqli_query($conn,$query);
        
    }

    function query($query){
        global $conn;
        $hasil = mysqli_query($conn,$query);
        $datas = [];
        while ($row = mysqli_fetch_assoc($hasil)){
            $datas[] = $row;
        }
        return $datas;
    }
?>