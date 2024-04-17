<?php 
    $conn = mysqli_connect('localhost','root','','platform');
    
    function tambahUser($data){
        
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
        mysqli_close($conn);
        return $datas;
    }
?>