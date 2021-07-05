


//___________________________search section ________________________________//




let BloodType=document.getElementById('SearchBloodType'),
 City=document.getElementById('SearchCity'),
 BtnSearch=document.querySelector('.saerchButton'),
 TableBody=document.querySelector('.TableBody'),
 result=document.querySelector('.result'),
 table=document.querySelector('.table'),
 GetBlood=document.getElementById('GetBlood'),
 SearchSection=document.getElementById('SearchSection'),
 close=document.getElementById('close');


 GetBlood.addEventListener('click',function(){
  SearchSection.classList.remove('d-none')
 })
 close.addEventListener('click',function(){
  SearchSection.classList.add('d-none')
 })

 let SearchArray = [];
 if ( localStorage.getItem("getBlood") == null){
    SearchArray  = [];
   }
   else{
    SearchArray  = JSON.parse(localStorage.getItem("getBlood"));
   }




 BtnSearch.addEventListener('click',function(){                 //Search Function
  
        let Trs='';
        for(let i=0;i<SearchArray .length;i++){
            if(SearchArray [i].loca==City.value 
            && SearchArray [i].getBlood==BloodType.value){
              table.classList.remove('d-none');           
              
                            Trs +=` <tr>                                                  
                                    <td>${SearchArray [i].firstName} ${SearchArray [i].lastName}</td>
                                    <td>${SearchArray [i].email}</td>
                                    <td>${SearchArray [i].mobile}</td>
                                </tr>` 
                            TableBody.innerHTML=Trs; 
                            result.innerHTML="" ; 
              } else{
                
                // TableBody.innerHTML='';
                table.classList.add('d-none');
                result.innerHTML="Sorry, It's Not Avilable" ;  
                }
              
               
            }
            BloodType.value='';
            City.value='';

            });




  

  

  