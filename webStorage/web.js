function myfunc(){
        if(typeof(Storage) != undefined){
                var name = document.getElementById("txt").value; //john
                sessionStorage.setItem("First_Name", name); //key, value
                var pass = document.getElementById("pass").value;
                sessionStorage.setItem("password", pass); 
                var s_name = sessionStorage.getItem("First_Name");
                var s_pass = sessionStorage.getItem("password");
                alert("Name: "+s_name+  " password: "  +s_pass);   
        }
}