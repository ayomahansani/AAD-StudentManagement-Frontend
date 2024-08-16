
$('#btnSave').on('click', () => {

    event.preventDefault(); // button ekata thiyena default action eka prevent karanava

    let name = $('#txtName').val();
    let city = $('#txtCity').val();
    let email = $('#txtEmail').val();
    let level = $('#txtLevel').val();

    // For testing
    console.log(name);
    console.log(city);
    console.log(email);
    console.log(level);

    // Create an javascript object
    const student = {
        name: name,
        city: city,
        email: email,
        level: level
    };

    // For testing
    console.log("JS Object : " + student);

    // Create JSON
    const jsonStudent = JSON.stringify(student);
    console.log("JSON Object : " + jsonStudent);


    // Save the data with Ajax


    // 1st step - Create a XMLHttpRequest type object
    const http = new XMLHttpRequest();


    // 2nd step - XMLHttpRequest type request ekata monada venne kiyala balanava
    http.onreadystatechange = () => { // this is the call back function

        //check state
        if(http.readyState === 4){ // check whether request finished and response is ready
            if (http.status === 200) { // check whether "OK"
                alert('Student added successfully');
                var jsonTypeResponse = JSON.stringify(http.responseText); // backend eken ena response text eka JSON object ekakata convert karanava
                console.log(jsonTypeResponse);
            } else {
                alert('Failed to add student');
                console.error("status code : " + http.status)
                console.error("ready state : " + http.readyState)
            }
            console.log(http.responseText);
        } else {
            console.error('Process stage' +    http.readyState);
        }
    }

    // 3rd step - oya yawanna one POST request ekak
    http.open("POST", 'http://localhost:8082/student', true); // methana port eka ape backend eka run vena port eka

    // 4th step - request eke header ekata danne monada kiyala
    http.setRequestHeader('Content-type', 'application/json');

    // 5th step - send request
    http.send(jsonStudent);

});