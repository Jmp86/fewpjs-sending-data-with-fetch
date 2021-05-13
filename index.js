function submitData (name, email) {
 return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
        .then(function(response) {
            return response.json();
    })
        .then(function(object) {
            console.log(object);
            appendId(object.id)
    })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            appendId(error.message)
    });
}
const bodyTag = document.querySelector('body')

function appendId(id) {
    const divTag = document.createElement('div')
    divTag.innerHTML = id
    bodyTag.appendChild(divTag)
}