import jsonData from './ICD_orgi.json';
// service.js
$(document).ready(function () {
    setTableDataFromLocal();

});


function setTableDataFromLocal() {


    // Work with the JSON data
    const tableBody = document.getElementById('tableBody');

    jsonData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item['MCCD Description']}</td>
            <td>${item['Code'].split(',').join(',<br/>')}</td>
        `;
        tableBody.appendChild(row);
    });

    new DataTable('#myDataTable', {
        "initComplete": function (settings, json) {
            $("#myDataTable_filter").parent().siblings()[0].remove();
            $("#myDataTable_filter").css({"text-align":"left", "margin-left":"1px"});
            $("#myDataTable_filter input").css({"width":"40vw"});
        },
        "language": {
            "search": "Search Keyword :", // Change "Your Custom Label Here" to the text you want to use
        },
        responsive: true,
        "paging": false,
        "info": false,
    });
}

function setTableData() {


    // URL of the raw data.json file in the GitHub repository
    //const url = 'https://raw.githubusercontent.com/abhirgi/Census/main/data.json';
    const url = 'https://raw.githubusercontent.com/abhirgi/copyMCCD/main/ICD_orgi.json';

    // Fetching the data.json file
    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(jsonData => {
            // Work with the JSON data

            const tableBody = document.getElementById('tableBody');


            jsonData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
        
        <td>${item['MCCD Description']}</td>
        <td>${item['Code'].split(',').join(',<br/>')}</td>
        
    `;
                tableBody.appendChild(row);
            });

            new DataTable('#myDataTable', {
                "initComplete": function (settings, json) {
                    $("#myDataTable_filter").parent().siblings()[0].remove();
                    $("#myDataTable_filter").css({"text-align":"left", "margin-left":"1px"});
                    $("#myDataTable_filter input").css({"width":"40vw"});
                },

                "language": {
                    "search": "Search Keyword :", // Change "Your Custom Label Here" to the text you want to use
                },
                responsive: true,
                "paging": false,
                "info": false,
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });

}
