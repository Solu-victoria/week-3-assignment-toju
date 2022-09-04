const randUser = async() =>{
    let Data = await fetch("https://randomuser.me/api")
     let convertedData = await Data.json();
     let output = convertedData.results;
     let result = output.map( Display => `<img src = "${Display.picture.large}"  ${Display.name.title}  ${Display.name.first} ${Display.name.last}`)
     return document.body.innerHTML = result.join("")
}
randUser();



