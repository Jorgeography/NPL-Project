function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

   if(names.includes(inputText)) {
       return true;
    //    alert("Welcome, Captain!")
    }
}

export { checkForName }
