// service.js
$(document).ready(function () {
    setTableData();

});


function setTableData() {

    
    // URL of the raw data.json file in the GitHub repository
    const url = 'https://raw.githubusercontent.com/abhirgi/Census/main/data.json';

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
        <td>${item['S.No.']}</td>
        <td>${item['MCCD Code']}</td>
        <td>${item['Disease']}</td>
        <td>${item['Category (Sub Group)']}</td>
        <td>${item['Major Group']}</td>
    `;
                tableBody.appendChild(row);
            });







            new DataTable('#myDataTable', {
                initComplete: function () {
                    this.api()
                        .columns()
                        .every(function () {
                            let column = this;
                            let title = column.footer().textContent;

                            // Create input element
                            let input = document.createElement('input');
                            input.placeholder = title;
                            column.footer().replaceChildren(input);

                            // Event listener for user input
                            input.addEventListener('keyup', () => {
                                if (column.search() !== this.value) {
                                    column.search(input.value).draw();
                                }
                            });
                        });
                }
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });




}
