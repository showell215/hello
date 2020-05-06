
fetch('/hello')
    .then(response => response.text())
    .then(data => {
        console.log(data)
        // for example, put the data into an element on the page
        document.querySelector('#data').appendChild(document.createTextNode(data));
    })

