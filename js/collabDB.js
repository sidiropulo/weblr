var Database_Name = 'Collab_Table_DB';    
var Version = 1.0;    
var Text_Description = 'Collab us';    
var Database_Size = 2 * 1024 * 1024;    
var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);    
dbObj.transaction(function (tx) {    
    tx.executeSql('CREATE TABLE IF NOT EXISTS Collab_Table(Name, Phone, Email, Message)');  
});    

const insertButton = document.querySelector('#btnInsert');
insertButton.addEventListener('click', ()=>{
    var name = document.getElementById("tbName").value;    
    var phone = document.getElementById("tbPhone").value;  
    var email = document.getElementById("tbEmail").value;  
    var message = document.getElementById("tbMessage").value;   

    dbObj.transaction(function (tx) {    
        tx.executeSql('insert into Collab_Table(Phone, Email, Message, Name) values(' + phone + ',"' + email + '","' + message + '","' + name + '")');    
    }); 

    console.log(`${name}, ${phone}, ${email}, ${message}`);
});  

dbObj.transaction(function (tx) {    
    tx.executeSql('SELECT * FROM Collab_Table', [], function (tx, results) {    
        var len = results.rows.length, i;    
        var str = '';    
        for (i = 0; i < len; i++) {    
        str += "<tr class=body__row>";    
        str += "<td>" + results.rows.item(i).Name + "</td>";    
        str += "<td>" + results.rows.item(i).Phone + "</td>";    
        str += "<td>" + results.rows.item(i).Email + "</td>";   
        str += "<td>" + results.rows.item(i).Message + "</td>"; 
        str += "</tr>";    
        document.getElementById("tblGrid").innerHTML += str;    
        str = '';    
        }    
    }, null);    
});

function onSearch() {
    const key = 'a9jWZWAGcI4zxh3ItQmIGN9h9nhkjMTl';
    const query = document.getElementById('gif__search').value;
    const search__container = document.querySelector('.search__container');

    try {
        if (query == '') {
            throw new Error('Field is empty!');
        }
    } catch(error) {
        console.log(error);
    }

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=3&offset=0&rating=g&lang=en`)
    .then(response => {
        {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Address is unavailable :((( ');
        }
    })
    .then(gif => {
        for(let i = 0; i < gif.data.length; i++) {
            var div = document.createElement('div');
            div.className = "pictures";
            div.innerHTML = `<img src='${gif.data[i].images.fixed_height.url}' />`;
            search__container.append(div);
        }
    })
    .catch(error => alert(error))
    .finally(console.log(`Work's done`));
}