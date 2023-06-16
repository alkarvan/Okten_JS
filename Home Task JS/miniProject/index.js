let tegForm = document.createElement('form');

async function requestUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
    for (let responseElement of response) {
        let tegDiv = document.createElement('div');
        let tegP = document.createElement('p');
        tegP.innerHTML = `User info:  *id: <b>${responseElement.id}</b>  *name: <b>${responseElement.name}</b>`;
        let tegButton = document.createElement('button');
        let tegA = document.createElement('a');
        tegA.innerHTML = `detail information`;
        tegA.setAttribute('href', 'user-details.html');
        tegA.setAttribute('target', '_blank')
        tegA.addEventListener('click', function () {
            localStorage.setItem('userID', JSON.stringify(responseElement.id));
        })
        tegButton.appendChild(tegA);
        tegDiv.appendChild(tegP);
        tegDiv.appendChild(tegButton);
        tegForm.appendChild(tegDiv);
    }
    document.body.appendChild(tegForm)
    return response;
}

requestUsers().then(value => {
    `Ok`
});