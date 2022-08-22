// Create a user

// Update users' details

// Remove a user

export interface IUser {
    name: string;
    username: string ; 
    pfp: any ; 
}


export class User implements IUser {
    //field
    name: string; // undefined
    username:string;
    age: number;
    email: string;
    phone: string;
    password: string;
    pfp: any;
    bgpic: any

    //constructor
    constructor(name: string, username:string, age:number, email:string, phone:string, password:string, pfp: any, bgpic:any) {
        this.name = name;
        this.username =username;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.pfp = pfp;
        this.bgpic= bgpic;
    }

    //function
    update (name: string, username:string, age:number, email:string, phone:string, password:string, pfp: any, bgpic:any) {
        this.name = name;
        this.username =username;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.pfp = pfp;
        this.bgpic= bgpic;
    }

    display(): void {
        console.log("Name: " + this.name);
        console.log("Username " + this.username)
        console.log("Age: " + this.age)
        console.log("Email: " + this.email)
        console.log("Phone number: " + this.phone)
        console.log("Password " + this.password)
        console.log(this.pfp)
        console.log(this.bgpic)
    }
}
                                                        // 07530343
// let me = new User('Zahra','zazzyk', 21, 'cool@gmail.com', "07530343548",'secret123', 'cool pic of my cat', 'cool pic of the sky')

// console.log(me)

// what if i have multiple users in my class and i want to read every one. how do i call that ?
// ask about the phone number isssue 

export class SuperAdminUser extends User {
    specialField: number;

    constructor(name: string, username:string, age:number, email:string, phone:string, password:string, pfp: any, bgpic:any) {
        super(name, username, age, email, phone, password, pfp, bgpic);
        this.specialField = 0;
    }
}
