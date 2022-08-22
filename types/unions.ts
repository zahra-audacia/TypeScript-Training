class BookSearchModel {
    //field
    name: string;
    author: string;
    publisher: string | null;
    yearPublished: string ;
    hasEBook: boolean;
    price: number | null;
    refrences: string | null;

    //constructor
    constructor (name: string, author: string, publisher: string | null, yearPublished: string, hasEBook: boolean, price:number|null, refrences:string |null ) {
        this.name = name ;
        this.author = author;
        this.publisher = publisher;
        this.yearPublished = yearPublished;
        this.hasEBook = hasEBook;
        this.price = price;
        this.refrences = refrences;
    }

    //function
    display(): void {
        console.log([this.name, this.author, this.publisher, this.yearPublished, this.hasEBook, this.price, this.refrences])
    }

}

let harryPotter1 = new BookSearchModel("Harry Potter and the Philosopher's Stone", "J.K Rowling", "Bloomsbury", "1997-06-29", true, 7.99, null )

console.log(harryPotter1)
