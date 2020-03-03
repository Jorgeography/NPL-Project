function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
   //Client.checkForName(formText)

   const postData = async (url, postData) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const data = await result.json();
    return data;
  };


    // api fetch? 
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/api')
    
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
