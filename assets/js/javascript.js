window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const comment = params.get('inputComment');
    const specialistName = params.get('inputSpecialistName');
    const address1 = params.get('inputAddress');
    const address2 = params.get('inputAddress2');
    const state = params.get('inputState');
    const zip = params.get('inputZip');
    const clientObservation = params.get('flexCheckDefault2');

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-comment').innerHTML = comment;
    document.getElementById('result-specialistName').innerHTML = specialistName;
    if (document.getElementById('comment-specialistName') != null){
        document.getElementById('comment-specialistName').innerHTML = specialistName;
    }
    document.getElementById('result-address1').innerHTML = address1;
    document.getElementById('result-address2').innerHTML = address2;
    document.getElementById('result-state').innerHTML = state;
    document.getElementById('result-zip').innerHTML = zip;

    if (clientObservation == 'display'){
        $('.clientObservation').show();
    }

})




