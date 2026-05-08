# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects? 

When you're building big applications, putting all the code in one huge file would be a disaster. 
Object-Oriented Programming (OOP) offers a method of organizing your code based on things from the actual world.
TypeScript improves OOP with some firm rules, and it's built on four main ideas (Abstraction ,Encapsulation,Inheritance,Polimorphirsm). 

## Encapsulation (Hiding data):
 Encapsulation is about protecting a class’s data from being messed with by things outside of it.
  You’d use private or protected to do this and stop other parts of the program from breaking your internal workings. 
  So, think of a BankAccount. If the balance was public, anyone could simply write account.balance = 1000000 and change it.

```ts

class BankAccount {

 // 'private' means you can't change the balance directly from elsewhere

 private balance: number = 100000;

 public deposit(amount: number) {

 if (amount > 0) this.balance += amount;

 }

 public getBalance() {

 return this.balance;

 

}

```
## Inheritance(Reusing code):
 Inheritance or reusing code. If multiple classes have characteristics in common, you can design a 'parent' class and use the extends keyword to have 'child' classes 
 get those characteristics (the parent qualities are passed to the child). For example:

```ts

class Person { 

 name: string;

 age: number;

 address: string;

 constructor(name: string, age: number, address: string) {

 this.name = name;

 this.age = age;

 this.address = address;

 }

}

class Student extends Person { 

 // Already has the attributes of Person

 // If you don't add any new attributes, you can just leave it like this

}

class Teacher extends Person {

 subject: string; // You must* declare new attributes here first

 constructor(name: string, age: number, subject: string, address: string) { 

 super(name, age, address); // Passes the data to the parent class

 this.subject = subject;

 } 

}
```
## Polymorphism (Many forms):
Polymorphism or 'many forms', means different objects will react to the same instruction in a way that's specific to themselves. 
The code that's giving the instruction doesn't need to know exactly what kind of object it's dealing with. Because of this, 
you can create one function that will work with lots of different kinds of objects, as long as they all come from the same 'parent' type. 
For example, we have an Animal class with a 'speak' method that just makes 'some sound'. A Dog class inherits from Animal and changes the 'speak' method to say 'Woof!', 
and a Cat class does the same, saying 'Meow!'. Then a function called makeAnimalSpeak, which accepts any Animal, will correctly make a dog woof and a cat meow.

```ts
class Animal {
  speak() { console.log("Some sound"); }
}

class Dog extends Animal {
  speak() { console.log("Woof!"); } 

class Cat extends Animal {
  speak() { console.log("Meow!"); }
}

// This function works for ANY animal
function makeAnimalSpeak(animal: Animal) {
  animal.speak(); 
}

makeAnimalSpeak(new Dog()); 
makeAnimalSpeak(new Cat()); 
```


## Abstraction(Hide complex part, show essential part):

Abstraction is about hiding complications and only presenting the essential parts to the person using something. 
We frequently use an interface or abstract class to set out what a class should do, but not how it should do it. 
Think of driving a car. You don't need to understand all the inner workings of the engine, each of its functions or mechanisms, you simply need to know how to drive.

Here's an example: the Logger interface says something needs to have a log method for showing a message. The application itself doesn't need to know how the logging happens, only that a message can be logged. The ConsoleLogger class implements the Logger interface and logs to the console.

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
```

## In a real project:

- An abstract PaymentProcessor (Abstraction)
- Each processor encapsulating its API key and credentials (Encapsulation)
- Processors extending a shared base with validation logic (Inheritance)
- A checkout service calling .processPayment() without knowing which processor it is (Polymorphism)


These four principles – abstraction, encapsulation, inheritance and polymorphism – aren't used in isolation, they build on each other. 
**Abstraction** defines what something does, **encapsulation** protects how it does it (keeping it hidden), **inheritance** allows sharing of common parts, 
and **polymorphism** allows for flexible behaviour when the code is actually running (it allows swapping). 

```Ultimately, object-oriented programming is about creating code which is simpler to adapt. 
Encapsulation prevents errors from spreading through your program, 
inheritance avoids repeating yourself, 
polymorphism removes the need for long strings of `if / else` statements to deal with each type of object, 
and abstraction stops your code from being too dependent on the specifics of how things are done. ```


