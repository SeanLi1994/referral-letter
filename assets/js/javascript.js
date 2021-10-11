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


// var formType = $("input[name='exampleRadios']:checked").val();
// if (formType == "option1"){        
//     loginform.action="letter1.html";
// }

// $('input:radio[name="exampleRadios"]').change(
// function(){
//     if ($(this).is(':checked') && $(this).val() == 'option1') {
//         loginform.action="letter1.html";
//     }
//     else if ($(this).is(':checked') && $(this).val() == 'option2') {
//         loginform.action="letter2.html";
//     }
//     else{
//         window.location = "index.html";
//     }
// });