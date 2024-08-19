$(document).ready(function (){

    //getAllData();

    // ------------------ save student ------------------
    $('#student-submit').click(function (){

        event.preventDefault(); // button ekata thiyena default action eka prevent karanava

        let id = $('#txtId').val();
        let name = $('#txtName').val();
        let email = $('#txtEmail').val();
        let city = $('#txtCity').val();
        let level = $('#txtLevel').val();

        // For testing
        console.log(id,name,email,city,level);

        // Create an javascript object
        const student = {
            id: id,
            name: name,
            email: email,
            city: city,
            level: level
        };

        // For testing
        console.log("JS Object : " + student);

        // Create JSON
        // convert js object to JSON object
        const jsonStudent = JSON.stringify(student);
        console.log("JSON Object : " + jsonStudent);


        // ---------- Save the data with Ajax ----------

        /*

            // 1st step - Create a XMLHttpRequest type object
            const http = new XMLHttpRequest();


            // 2nd step - XMLHttpRequest type request ekata monada venne kiyala balanava
            http.onreadystatechange = () => { // this is the call back function

                //check state
                if(http.readyState === 4){ // check whether request finished and response is ready
                    if (http.status === 201) { // check whether "OK"
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
        */


        // ---------- Ajax with JQuery ----------


        $.ajax({
            url: "http://localhost:8082/student",
            type: "POST",
            data: jsonStudent,
            headers: { "Content-Type": "application/json" },
            success : function (results) {
                console.log(results)
                alert('Student saved successfully...')
            },
            error : function (error) {
                console.log(error)
                alert('Student not saved...')
            }
        });
    });



    // ------------------ update student ------------------
    $('#student-update').click(function (){

        let id = ($('#txtId').val());
        let name = $('#txtName').val();
        let email = $('#txtEmail').val();
        let city = $('#txtCity').val();
        let level = $('#txtLevel').val();

        // For testing
        console.log(id,name,email,city,level);

        // Create an javascript object
        const student = {
            id: id,
            name: name,
            email: email,
            city: city,
            level: level
        };

        // For testing
        console.log("JS Object : " + student);

        // Create JSON
        // convert js object to JSON object
        const jsonStudent = JSON.stringify(student);
        console.log("JSON Object : " + jsonStudent);


        // ------------------- Ajax with JQuery -------------------

        $.ajax({
            url: `http://localhost:8082/student`,
            type: "PUT",
            data: jsonStudent,
            headers: { "Content-Type" : "application/json" },
            success : function (results) {
                console.log(results)
                alert('Student updated successfully...')
            },
            error : function (error) {
                console.log(error)
                alert('Student not updated...')
            }
        });
    });



    // ------------------ delete student ------------------
    $('#student-delete').click(function (){

        let id = ($('#txtId').val());
        let name = $('#txtName').val();
        let email = $('#txtEmail').val();
        let city = $('#txtCity').val();
        let level = $('#txtLevel').val();

        // For testing
        console.log(id,name,email,city,level);

        // Create an javascript object
        const student = {
            id: id,
            name: name,
            email: email,
            city: city,
            level: level
        };

        // For testing
        console.log("JS Object : " + student);

        // Create JSON
        // convert js object to JSON object
        const jsonStudent = JSON.stringify(student);
        console.log("JSON Object : " + jsonStudent);

        // Ajax with JQuery

        $.ajax({
            url: `http://localhost:8082/student`,
            type: "DELETE",
            data: jsonStudent,
            headers: { "Content-Type" : "application/json" },
            success : function (results) {
                console.log(results)
                alert('Student deleted successfully...')
            },
            error : function (error) {
                console.log(error)
                alert('Student not deleted...')
            }
        });
    });



    // ------------------ gat all students ------------------
    function getAllData() {

        $.ajax({
            url : "http://localhost:8082/student",   // request eka yanna one thana
            type: "GET", // request eka mona vageda - type eka
            success : function (results) {
                console.log(results)
                alert('Get All Data Successfully...')

                // Clear the existing table body
                $('student-table-body').empty();

                // Iterate over the results and append rows to the table
                results.forEach(function(student) {
                    let row = `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.city}</td>
                        <td>${student.level}</td>
                    </tr>
                `;
                    $('student-table-body').append(row);
                });
            },
            error : function (error) {
                console.log(error)
                alert('Not Get All Data...')
            }
        })
    }

});

