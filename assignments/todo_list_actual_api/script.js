function mainwork()
{
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    return response.json();
}).then((actual_data)=>{
    var completed = [];
    var incompleted = [];
    for(var i = 0; i<actual_data.length; i++)
    {
        if(actual_data[i]["completed"] === true)
        {
            completed.push(actual_data[i])
        }
        else
        {
            incompleted.push(actual_data[i]);
        }
    }
    for(var i =0; i<completed.length; i++)
    {
        let userId = completed[i]['userId'];
        let id = completed[i]['id'];
        let title = completed[i]['title'];
        let iscompleted = completed[i]['completed'];
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td1.textContent = userId;
        td2.textContent = id;
        td3.textContent = title;
        td4.textContent = iscompleted;
        tr.append(td1,td2,td3,td4);
        let parent = document.getElementById('completed');
        parent.append(tr);
    }
    for(var i =0; i<incompleted.length; i++)
    {
        let userId = incompleted[i]['userId'];
        let id = incompleted[i]['id'];
        let title = incompleted[i]['title'];
        let iscompleted = incompleted[i]['completed'];
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td1.textContent = userId;
        td2.textContent = id;
        td3.textContent = title;
        td4.textContent = iscompleted;
        tr.append(td1,td2,td3,td4);
        let parent = document.getElementById('incompleted');
        parent.append(tr);
    }
}).catch((error)=>{
    console.log(error);
});
}


mainwork()
function iscompleted()
{
    let tag1 = document.getElementById('completed');
    let tag2 = document.getElementById('incompleted');
    tag2.style.display = 'none';
    tag1.style.display = 'block';
}
function notcompleted()
{
    let tag1 = document.getElementById('completed');
    let tag2 = document.getElementById('incompleted');
    tag1.style.display = 'none';
    tag2.style.display = 'block';
}
