
var fo=document.getElementById("my-form");
var ite=document.getElementById("items");// accesing the id to add

fo.addEventListener("submit",additem);
function additem(e){
    e.preventDefault();
    var ne=document.getElementById("name").value;
    var de=document.getElementById("email").value;
    let inobj={
        username: document.getElementById("name").value,
        useremail: document.getElementById("email").value,
    };
    let newi=JSON.stringify(inobj);
    localStorage.setItem(de,newi)
    

    //creating the list
    var li=document.createElement("li") //creating list item to show
    li.className="item";//giving the class name
    li.appendChild(document.createTextNode(ne)); //items is created with the omput value but where we have to add it then-->
    li.appendChild(document.createTextNode(de));
    ite.appendChild(li);//addimg the list to  item tag

    //craeting the delete button
    var but=document.createElement("button")
    but.className="btn btn-danger btn-sm float-right delete"
    but.appendChild(document.createTextNode("DELETE"));
    li.appendChild(but);
    ite.appendChild(li);


    //creating edit
    var edi=document.createElement("button")
    edi.className="btn btn-danger btn-sm float-right delete"
    edi.appendChild(document.createTextNode("EDIT"));
    li.appendChild(edi);
    ite.appendChild(li);


    //editing 

    ite.addEventListener("click",removeitem);
    function removeitem(e){
        if(e.target.classList.contains('delete')){
            
            var li=e.target.parentElement;
            document.getElementById("name").value=inobj.username
            document.getElementById("email").value=inobj.useremail
            console.log(inobj.useremail)
            ite.removeChild(li);
            localStorage.removeItem(de)
                
            }
        }
    }


    //localStorage.setItem("Name",ne);
    //localStorage.setItem("Email",de);
    //console.log(localStorage.getItem("Name"));
    //console.log(localStorage.getItem("Email"));


//remove item