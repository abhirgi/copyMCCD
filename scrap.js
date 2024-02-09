var myTable=document.getElementById("userTbl")


let data=[];
let headers=[];
myTable.querySelectorAll('thead th').forEach(header =>{headers.push(header.textContent.trim());});
myTable.querySelectorAll('tbody tr').forEach(row=>{let rowData={};row.querySelectorAll('td').forEach((cell,index)=>{rowData[headers[index]]=cell.textContent.trim();});data.push(rowData);});

