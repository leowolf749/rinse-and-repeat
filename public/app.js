let users = [
    {
        image:'https://randomuser.me/api/portraits/men/18.jpg',
        name:'Johnson Swanson',
    },
        {
        image:'https://randomuser.me/api/portraits/men/42.jpg',
        name:'Glenn Joffey',
    },
        {
        image:'https://randomuser.me/api/portraits/men/22.jpg',
        name:'Benjamin Ruckmichael',
    },
        {
        image:'https://randomuser.me/api/portraits/men/2.jpg',
        name:'Gredge Hammel',
    },
        {
        image:'https://randomuser.me/api/portraits/men/26.jpg',
        name:'Smitty Clemmonson',
    },
];

let liked = [];

window.addEventListener('load', function() {
    for (let i = 0; i < users.length; i++) {
        showUser(users[i]);
    }

});

function showUser(users) {
    let userList = document.querySelector('#users ul');
    let user = document.createElement('li');
    let userTemplate = document.querySelector('#user-template');

    user.innerHTML = Mustache.render(userTemplate.innerHTML, {
        image: users.image,
        name: users.name,
    });

    let likeButton = user.querySelector('.like');
    likeButton.addEventListener('click', function() {
        console.log('Liked ' + users.name);
        liked.push(users);
        user.classList.add('faded');
    });

    let nopeButton = user.querySelector('.nope');
    nopeButton.addEventListener('click', function() {
        console.log('Nooooooooope ' + users.name);
        user.classList.add('faded');
    });

    
    userList.appendChild(user);

}


