let userID = JSON.parse(localStorage.getItem('userID')) || 0;
fetch('https://jsonplaceholder.typicode.com/users?id=' + userID)
    .then((res) => res.json())
    .then((user) => {

        const block = document.getElementsByClassName('box')[0];
        const div1 = document.createElement('div');
        recursiveBuild(user, div1);
        block.appendChild(div1);

        const button = document.createElement('button');
        button.innerHTML = `<b>post of current user</b>`;
        button.addEventListener('click', function () {
            fetch('https://jsonplaceholder.typicode.com/users/' + userID + '/posts')
                .then((res) => res.json())
                .then((post) => {
                    const blockPostTitle = document.getElementsByClassName('boxPosts')[0];
                    const divPost1 = document.createElement('div');
                    for (const postKey in post) {
                        const divPostX = document.createElement('div');
                        const tegA = document.createElement('a');
                        if (postKey < 5) {
                            tegA.innerHTML = `${post[postKey].title}`;
                            tegA.setAttribute('href', 'post-details.html');
                            tegA.setAttribute('target', '_blank')
                            tegA.addEventListener('click', function () {
                                localStorage.setItem('postID', JSON.stringify(post[postKey].id));
                            })
                            divPostX.appendChild(tegA);
                            divPost1.appendChild(divPostX);
                        }
                    }
                    blockPostTitle.appendChild(divPost1);
                    const divPost2 = document.createElement('div');
                    for (const postKey in post) {
                        const divPostX = document.createElement('div');
                        const tegA = document.createElement('a');
                        if (postKey > 4) {
                            tegA.innerHTML = `${post[postKey].title}`;
                            tegA.setAttribute('href', 'post-details.html');
                            tegA.setAttribute('target', '_blank')
                            tegA.addEventListener('click', function () {
                                localStorage.setItem('postID', JSON.stringify(post[postKey].id));
                            })
                            divPostX.appendChild(tegA);
                            divPost2.appendChild(divPostX);
                        }
                    }
                    blockPostTitle.appendChild(divPost2);
                })
        }, {once: true})
        block.appendChild(button);
    });

function divCreator(key, value, parent) {
    const div2 = document.createElement('div');
    div2.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(div2);
}

function blockBuilder(key, object, parent) {

    const span = document.createElement('span');
    const p = document.createElement('p');
    if (key === '0') {
        span.innerHTML = `<b>Details information:</b>`;
    } else {
        span.innerHTML = `<b>${key}:</b>`;
    }
    parent.appendChild(span);
    span.appendChild(p);
    recursiveBuild(object, p);
}

function recursiveBuild(object, parent) {
    for (const key in object) {
        if (typeof object[key] === 'object') {
            blockBuilder(key, object[key], parent)
        } else {
            divCreator(key, object[key], parent)
        }
    }
}