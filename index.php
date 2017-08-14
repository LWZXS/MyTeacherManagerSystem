<?php
    header('content-type:text/html;charset=utf-8');
    //根据地址栏输入显示对应的网页  
    
    $path = "";
    

    //判断属性$_SERVER["PATH_INFO"]是否存在
    if(array_key_exists("PATH_INFO",$_SERVER)){
        //存在
        //$_SERVER["PATH_INFO"]获取地址栏index.php后面的内容
        $pathStr = $_SERVER["PATH_INFO"];
    
        //先将字符串$pathStr截取：
        $pathStr = substr($pathStr,1);
    
        //将字符串的内容根据/来分割，保存称为数组
        $pathArr = explode('/',$pathStr);
        
        //判断数组元素的个数
        if(count($pathArr) == 3){
            $path = $pathStr;
        }else if(count($pathArr) == 2 || count($pathArr) == 1){
            $path = "views/dashborder/".$pathArr[count($pathArr) - 1];
        }else{
            echo 'The URL is invalid';
        }    
    }else{
        //不存在
        $path = 'views/dashborder/index';
    }
    $path = $path . '.html';
    include $path;
    // echo $path;

?>