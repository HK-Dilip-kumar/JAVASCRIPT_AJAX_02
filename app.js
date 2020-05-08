//1d array access
document.getElementById('button1').addEventListener('click',loadEmployee);
//2 d array access
document.getElementById('button2').addEventListener('click',loadEmployees);

function loadEmployee(){
    //1. create the object 
       const xhr= new XMLHttpRequest();
       
    //2. open the connection
    xhr.open('GET','employee.json',true)

    //3.execute the function
    xhr.onload=function(){
          if(this.status=== 200){
               const employee =JSON.parse(this.responseText);
               document.getElementById('employee').innerHTML=`<p>${employee.id}</p><br>
                                                            <p>${employee.name}</p><br>
                                                            <p>${employee.company}</p><br>
                                                            <p>${employee.job}</p><br>`;
          }}
     //4. send the request
     xhr.send();
}

function loadEmployees(){
     //1.create the object request
     const xhr=new XMLHttpRequest();

     //2 
     xhr.open('GET','employees.json',true);

     xhr.onload=function(){
          if(this.status===200){

               const employee=JSON.parse(this.responseText);

               let output='';
               employee.forEach(function(employee){
                    output+=`<p>${employee.id}</p><br>
                              <p>${employee.name}</p><br>
                              <p>${employee.company}</p><br>
                              <p>${employee.job}</p><br>`;
               })

          document.getElementById('employees').innerHTML=output;
          
          }
     }

     xhr.send();
}


