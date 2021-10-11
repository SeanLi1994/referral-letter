// function save(){
//     var letterText = document.getElementById("letterText").value;
//     return letterText;
//   }

window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const comment = params.get('comment');
    // const surname = params.get('surname');

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-comment').innerHTML = comment;
    // document.getElementById('result-surname').innerHTML = surname;

})

// var formType = $("input[type='radio']:checked").val();
// if (formType == "form1"){
//     window.location.replace("/form1.html");
// }
// else if (formType == "form2"){
//     window.location.replace("/form2");
// }
// else{
//     layer.alert("not yet");
// }

// var formType = $("input[type='radio']:checked").val();
// if (formType == "form1"){
//     loginform.action="/letter1";
// }
// else if (formType == "form2"){
//     loginform.action="/letter2";
// }
// else{
//     layer.alert("not yet");
// }
