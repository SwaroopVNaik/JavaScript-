let employee = [{eid: 101, ename: 'svn', esal: 65000000},
    {eid : 102, ename : 'aravind', esal :65000000 }
]

let create_Employee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let flag = true; 
            employee.push(emp)
            flag ? resolve('data inserted') : reject ("data failed")
        }, 4000)
    })
}

function get_Employee(){
    setTimeout(() => {
        let rows = '';
        for(let emp of employee){
            rows = rows + `<tr>  
                                <td> ${emp.eid}</td>
                                <td> ${emp.ename}</td>
                                <td> ${emp.esal}</td>
                            </tr>`
        }

        document.getElementById('tdata').innerHTML = rows

    }, 2000)
}

let execute = async () => {
    await create_Employee({eid: 103, ename : 'SVN', esal : 650000})
    get_Employee();
}

execute();

// create_Employee({eid : 103, ename : "SVN", Esal : 550000})
// .then((response) => {
//     console.log(Response);
//     get_Employee();
//    })
// .catch((err) => {
//     console.log(err);
// }) 

// when any function is returning promise we can then only use .then and .catch/async and await