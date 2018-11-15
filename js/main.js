/*var richard = {
        firstName: "Richard",
        lastName: "Hendrix",
        portrat: "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-richard.png",
        title: "co-founder"
    };
    
var elrich = {
        firstName: "Erlich",
        lastName: "Bachman",
        portrat: "https://camo.githubusercontent.com/b265f12a7878ba663040402329ead36441139043/687474703a2f2f692e696d6775722e636f6d2f7a4c43784930322e706e67",
        title: "co-founder"
    }; 

var bertram = {
        firstName: "Bertram",
        lastName: "Gilfoyle",
        portrat: "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-gilfoyle.png",
        title: "cto"
    };

var jared = {
        firstName: "Jared",
        lastName: "Dunn",
        portrat: "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-jared.png",
        title: "cfo"
    };

var dinesh = {
        firstName: "Dinesh",
        lastName: "Chugtai",
        portrat: "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-dinesh.png",
        title: "cmo"
    };*/

var piedPiperMembers = [];    

function Member(firstName, lastName, portrat, title, array) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.portrat = portrat;
    this.title = title;
    
    array.push(this);
}

new Member("Richard", "Hendrix", "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-richard.png", "co-founder", piedPiperMembers);
new Member("Bertram", "Gilfoyle", "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-gilfoyle.png", "cto", piedPiperMembers);
new Member("Elrich", "Bachman", "https://camo.githubusercontent.com/b265f12a7878ba663040402329ead36441139043/687474703a2f2f692e696d6775722e636f6d2f7a4c43784930322e706e67", "co-founder", piedPiperMembers);
new Member("Jared", "Dunn", "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-jared.png", "cfo", piedPiperMembers);
new Member("Dinesh", "Chugtai", "http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-dinesh.png", "cmo", piedPiperMembers);

Member.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}
Member.prototype.isFounder = function() {
    if (this.title == "co-founder") {
        return true;
    }
    else {
        return false;
    }
}

for (let i = 0; i < piedPiperMembers.length; i++) {
    //Create elements
    var bigDiv = document.createElement("div");
    var memberDiv = document.createElement("div");
    var memberPortratElement = document.createElement("img");
    var memberNameElement = document.createElement("h3");
    var memberTitleElement = document.createElement("h6");
    
    //Append to div
    bigDiv.appendChild(memberDiv);
    memberDiv.appendChild(memberPortratElement);
    memberDiv.appendChild(memberNameElement);
    memberDiv.appendChild(memberTitleElement);
    
    //Insert data
    memberPortratElement.src = piedPiperMembers[i].portrat;
    memberNameElement.textContent = piedPiperMembers[i].getFullName();
    memberTitleElement.textContent = piedPiperMembers[i].title;
    
    //Style
    bigDiv.className = "col-12 col-sm-4 mx-auto p-2";
    memberDiv.className = "mx-auto bg-light text-center"
    memberDiv.style.minHeight = "200px"
    memberPortratElement.setAttribute("style", "width: 50%; margin: 5px auto; object-fit: cover; padding: 7px");
    if (piedPiperMembers[i].isFounder() == true) {
        memberDiv.style.boxShadow = "0 8px 6px -6px grey";
    }
    
    //Display
    document.getElementById("members").appendChild(bigDiv);
}