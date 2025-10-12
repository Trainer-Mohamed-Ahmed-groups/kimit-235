var myRequest = new XMLHttpRequest(),
    output = document.getElementById("output"),
    loading = document.getElementById("loading");

console.log(output);



myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        loading.classList.add("d-none")
        var data = JSON.parse(this.responseText);
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const user = data[index];
            output.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <h6>${user.email}</h6>
                        <p class="card-text">${user.address.street} - ${user.address.city}</p>
                        <a href="/users/?id=${user.id}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
        }
    }
}

myRequest.open("GET", "https://jsonplaceholder.typicode.com/users");

myRequest.send();


// 1 - Not initialized => 0
// 2 - Connection between client and server established => 1
// 3 - Request received by the server => 2
// 4 - Processing request => 3
// 5 - Request finished and response is ready => 4
