fetch("https://api.myjson.com/bins/ebwqx")
    .then(response => response.json())
    .then(json => console.log(json));