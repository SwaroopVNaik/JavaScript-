let employee = [{eid: 101, ename: 'svn', esal: 65000000},
    {eid : 102, ename : 'aravind', esal :65000000 }
]

function create_Employee(emp, callback){
    setTimeout(()=>{
        employee.push(emp)
        callback(); // callback representing get employee
    }, 4000)
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

create_Employee({eid: 103, ename: 'samsung', esal: 1000000000}, get_Employee)

// get_Employee()

// achiveing async using callback, promise, (async and await)
// callback => passing function as a argument