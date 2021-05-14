'use strict';



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class UserStorage{
    
    async loginUser(id, password){
        await delay(1000);
        if(
            (id === 'yurim' && password === '123') ||
            (id === 'coder' && password === '123')
        ){
            return(id);
        }else{
            throw(new Error('Not Found'));
        }
    }

    async getRoles(user){
        await delay(1000);
        if (user === 'yurim'){
            return({name:'yurim', role:'admin'});
        }else{
            throw(new Error('no access'));
        }
        
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function findUserRole(){
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role :)`);
}

findUserRole().then();