function  calculateAge(){
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value)-1;
    const year = parseInt(document.getElementById('year').value);

    const dateofBirth = new Date(year , month , day);
    const  today = new Date();

    let ageYear = today.getFullYear()- dateofBirth.getFullYear();
    let ageMonth = today.getMonth() - dateofBirth.getMonth();
    let ageDay = today.getDate()-dateofBirth.getDate();

    if(ageDay < 0 ){
        ageMonth--;
        ageDay += new Date ( today.getFullYear() , today.getMonth() , 0).getDate;
    }
     
    if(ageMonth < 0){
        ageYear--;
        ageMonth += 12;
    }

    document.getElementById('result').innerHTML= `You are ${ageDay} days , ${ageMonth} months and ${ageYear} years old .`;
}