var idkey = localStorage.getItem("idkey");

var output = $(".sectionUserInfoContainer");
var request = $.ajax({
    url: " http://localhost:3333/api/candidates/" + idkey,
    method: "GET",
    dataType: "json"

});

request.done(function (response) {
    console.log(response);
    var CandidateName = response.name;
    var CandidateEmail = response.email;
    var CandidateBirthday = response.birthday;
    var CandidateEducation = response.education;
    var Candidateimage;
    if (!response.avatar) {
        Candidateimage = "http://via.placeholder.com/150x150"
    } else {
        Candidateimage = response.avatar
    }
    output.append(`

<div class="col-4">
        <img src="` + Candidateimage + `">
</div>`);
    output.append(`
    <div class="col-4 ">
           <h4>Name:</h4>
          ` + CandidateName +
        `<h4> Email: </h4>` + CandidateEmail +
        `</div>`);
    output.append(`
    <div class = "col-sm-4">
    <h4> Date of Birth: </h4> ` + CandidateBirthday +
        `<h4> Education </h4>` + CandidateEducation +
        `</div>`);

});
// fetching reports

var reportsRequest = $.ajax({
    url: "http://localhost:3333/api/reports/",
    method: "GET",
    dataType: "json"
});
reportsRequest.done(function (response) {
    var candidatesInfoArray = [];
    for (var i = 0; i < response.length; i++) {
        var reportData = response[i];
        if (idkey == reportData.candidateId) {
            // proveravamo da li su podaci istog tipa
            var candidatesInfo = reportData;
            candidatesInfoArray.push(candidatesInfo);
            console.log(candidatesInfo);

            // prodji kroz niz i uzmi izvestaj po najnovijem datumu
        }

    }
    if (candidatesInfoArray.length == 0) {
        var noReport = "<p>There are no available reports for this specific candidate</p>";
        var table = $(".table-maker");
        table.after(noReport);
    };

tableMaker(candidatesInfoArray);

});

function tableMaker(candidatesInfoArray) {

    for (var i = 0; i < candidatesInfoArray.length; i++) {

        $(".table-maker").append($("<tr>")
            .append($("<td>")
                .text(candidatesInfoArray[i].companyName)
            )
            .append($("<td>")
              .text(candidatesInfoArray[i].interviewDate)
           )
           .append($("<td>")
               .text(candidatesInfoArray[i].status)
        )
        .append($("<td>")
        .html("<i data-toggle='modal' data-target='#myModal' class='fa fa-eye' aria-hidden='true'></i>")
    )
        );
       




    }

}














