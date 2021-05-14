'use strict';

//JavaScript is synchronous.
//Execute the code block by orger after hoisting.
//hoisting: var, function declaration



//Callback Hell example

class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'yurim' && password === '123') ||
                    (id === 'coder' && password === '123')
                ){
                    resolve(id);
                }else{
                    reject(new Error('Not Found'));
                }
            },2000)
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'yurim'){
                    resolve({name:'yurim', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert( `Hello ${user.name}, you have a ${user.role} role` ))
.catch(console.log);