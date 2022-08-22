import { question, questionNewPassword } from "readline-sync";
import { User } from './user'

// Menu
function generateUserMenu(): void {
    console.log("USER MENU")
    console.log("1. Create a user")
    console.log("2 Update a user")
    console.log("3. Delete a user")
let whatWouldYouLikeToDo = +question("Which option?")

switch (whatWouldYouLikeToDo) {
    case 1:
        createUserInformation()
        break;
    
    case 2:
        updateUserInformation()
        break;

    case 3:
        deleteUserInfromation()
        break;

    default:
        break;
}
}
    

// // User creation form 
function createUserInformation (): User {
    var answerName = question("What is your first name:");

    var answerUsername = question("Please create a username: ");

    var answerAge = question("How old are you?: ");

    var answerEmail = question("What is your email address: ")

    var answerPhone = question("What is your phone number: ")

    var answerPassword = question("Please set a password: ")

    var answerpfp = question("Would you like to set a profile picture?")

    var answerbgpic = question("Would you like to set a background picture?")

    let me = new User (answerName, answerUsername, +answerAge, answerEmail, answerPhone, answerPassword, answerpfp, answerbgpic);

    return me
}

var newUser = createUserInformation()

newUser.display() 
var confirm = question("Is all the information correct? Y/N");
if (confirm === 'N') {
    newUser = createUserInformation()
} else {
    console.log("Thank you")
}


// function to Update user information 

function updateUserInformation (
): void {
    console.log("What user would you like to update?")
    // select a user ?

    console.log("What would you like to update?")
    console.log("1. Name")
    console.log("2. Username")
    console.log("3.Age")
    console.log("4.Email")
    console.log("5.Phone number")
    console.log("6. Password")
    console.log("7.Profile picture")
    console.log("8. Backgroud picture")
    let whatWouldYouLikeToUpdate = +question("Select a numbered option")

    switch (whatWouldYouLikeToUpdate) {
        case 1:
            var updatedName = question("What would you like to change your name to?: ")
            break;
        
        case 2:
            var updatedUsername = question("What would you like to change your username to?: ")
            break;

        case 3:
            var updatedAge = question("What would you like to change your age to?: ")
            break; 

        case 4:
            var updatedEmail = question("What would you like change your email to?: ")
            break;

        case 5: 
            var updatedPhone = question("What would you like to change your phone number to?: ")
            break;

        case 6:
            var updatedPassword = question("What would you like to change your password to?: ")
            break;

        case 7:
            var updatedPFP = question("What would you like to change your Profile Picture to?: ")
            break;

        case 8: 
            var updatedBGPIC= question("What would you like to change your Background Picture to?: ")
            break;
    
        default:
            break;

    }
}   

// function to delete user information 

function deleteUserInfromation (
): void  {
    console.log("What user would you like to delete: ")

    
}


console.log(generateUserMenu())


