let postID = JSON.parse(localStorage.getItem('postID')) || 0;
// https://jsonplaceholder.typicode.com/posts/POST_ID
fetch('https://jsonplaceholder.typicode.com/posts/' + postID)
    .then((res) => res.json())
    .then((post) => {
        const block = document.getElementsByClassName('boxPost')[0];
        const div = document.createElement('div');
        recursiveBuild(post, div);
        block.appendChild(div);
    })

// Write all comments of post
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments
fetch('https://jsonplaceholder.typicode.com/posts/' + postID + '/comments')
    .then((res) => res.json())
    .then((comments) => {
        console.log(typeof comments, comments)
        const block = document.getElementsByClassName('boxComments')[0];
        const div = document.createElement('div');
        recursiveBuild(comments, div);
        block.appendChild(div);
    })

function divCreator(key, value, parent) {
    const div2 = document.createElement('div');
    div2.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(div2);
}

function blockBuilder(key, object, parent) {

    const span = document.createElement('span');
    const p = document.createElement('p');
    span.innerHTML = `<b>${key}:</b>`;
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