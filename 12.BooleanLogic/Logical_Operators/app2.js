// const password = prompt('Enter your password:')

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid Password!')
// } else {
//     console.log('Incorrect format for password.')
// }



// 0-5 free
// 5-10 10
// 10-65 20
// 65+ free

// const age = 0;

// if(age >= 0 && age < 5 || age >= 65) {
//     console.log('FREE TICKET enjoy')
// } else if(age >= 5 && age < 10) {
//     console.log('10 bucks right away')
// } else if(age >= 10 && age < 65) {
//     console.log('20 bucks right away')
// } else {
//     console.log('Invalid age.')
// }


/// Precendency ->> 1. &  2. ||

// NOT Operator >>

// const firstName = prompt('enter your first name')
// if(!firstName){
//     firstName = prompt('TRY AGAIN FOR GOD SAKES!!') 
// }

const age = 64;

if(!(age >= 0 && age < 5 || age >= 65)) {
    console.log('YOU ARE NOT A BABY OR A SENIOR, SO YOU DONT GET FREE TICKET')
}