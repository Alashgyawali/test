let arr=[
    {
        name:"alash",
        address:"chitwan",
    },
    {
        name:"narayan",
        address:"butwan",
    },
    {
        name:"Dipson",
        address:"Ithari"
    },
    {
        name:"anoj",
        address:"jhapa"
    }

];
let table = document.querySelector("table");
for(let i=0;i<arr.length;i++){
    table.innerHTML += `
        <tr>
            <td>${arr[i].name}</td>
            <td>${arr[i].address}</td>
        </tr>
    `
    
}
