window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const comment = params.get('inputComment');
    const specialistName = params.get('inputSpecialistName');
    const address1 = params.get('inputAddress');
    const address2 = params.get('inputAddress2');
    const state = params.get('inputState');
    const zip = params.get('inputZip');

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-comment').innerHTML = comment;
    document.getElementById('result-specialistName').innerHTML = specialistName;
    document.getElementById('result-address1').innerHTML = address1;
    document.getElementById('result-address2').innerHTML = address2;
    document.getElementById('result-state').innerHTML = state;
    document.getElementById('result-zip').innerHTML = zip;

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