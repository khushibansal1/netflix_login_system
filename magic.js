function store(){

    var n1 = document.getElementById('name');
    var name = document.getElementById('username');
    var pw = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{

        localStorage.setItem('username', name.value);
        localStorage.setItem('password', pw.value);
        alert('Your account has been created');


    //     var users = JSON.parse(localStorage.getItem('user')) || [];
    // var userData = [
    // {Username:document.getElementById("username").value},
    // {Password:document.getElementById("password").value},
    // ];
    // users.push(userData);
    // localStorage.setItem('user', JSON.stringify(users));
    // alert('account created');
    }
    localStorage.setItem('name',n1.value);
}



//checking
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('usern');
    var userPw = document.getElementById('pass');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}

// function getname()
// {
//     var name1=localStorage.getItem('name');
//     return getname;
// }


const users = [localStorage.getItem('name')];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
    }else{
        alert('username already exist');
    }
})


userIcons();
