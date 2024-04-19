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
                $existing_user = query("SELECT * FROM user WHERE username='$username'");
                if(!$existing_user){
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

    function login($data){
        global $conn;
        $username = $data['username'];
        $password = $data['password'];

        $result = mysqli_query($conn,"SELECT * FROM user WHERE Username = '$username'");

        if(mysqli_num_rows($result) == 0){
            echo "<script>
                     alert('Username tidak ditemukan pastikan ada memasukan username dengan benar');
                  </script>";
        } else {
            $row = mysqli_fetch_assoc($result);

            if (password_verify($password,$row["password"])) {
                header("Location: todoList.php");
            } else {
                echo "<script>
                     alert('Password salah');
                  </script>";
            }
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