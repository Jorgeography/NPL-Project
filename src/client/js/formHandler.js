import {
  checkForUrl
} from './urlChecker';

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
   //Client.checkForName(formText)
   if (!checkForUrl(formText)) {document.getElementById("text").textContent = "Not a valid url."; return; }

const myObject = {url: formText}
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
const resultFromServer = await postData ("/PostURL", myObject);

console.log(resultFromServer);

document.getElementById("text").textContent = `Text: ${resultFromServer.text}`
document.getElementById("polarity").textContent = `Polarity: ${resultFromServer.polarity} ` 
document.getElementById("polarity_confidence").textContent = `Polarity Confidence: ${resultFromServer.polarity_confidence}`
document.getElementById("subjectivity").textContent = `Subjectivity: ${resultFromServer.subjectivity} `
document.getElementById("subjectivity_confidence").textContent = `Subjectivity Confidence: ${resultFromServer.subjectivity_confidence} `


    // api fetch? 
    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8080/api')
    
    //.then(res => res.json())
   //  .then(function(res) {
  //      document.getElementById('results').innerHTML = res.message
   // })
}

export { handleSubmit }
