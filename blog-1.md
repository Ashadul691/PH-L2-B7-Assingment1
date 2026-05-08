# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects? 

# OOP : The Four Pillars That Keep Large Codebases From Falling Apart

When building large-scale applications, having all your code in one massive file is a nightmare. Object-Oriented Programming (OOP) gives us a way to structure our code using real-world concepts.

TypeScript supercharges OOP by adding strict rules to its four main pillars are:

---

## 1. Encapsulation (Hiding Data)

 Encapculation means keeping a class's internal data safe from outside inteference . We use modifiers lik `private` ,`protected` so that others can't break out logic.

Imagine a `BankAccount`. If the balance is public, anyone can do `account.balance = 1000000`. 

```ts
class BankAccount {
  // 'private' means balance cannot be changed directly from outside
  private balance: number = 0;

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  public getBalance() {
    return this.balance;
  }
}
```

---

## 2. Inheritance (Reusing Code )

If multiple classes share the same properties, we can create a **parent** class and have **child** classes inherit from it using the `extends` keyword.(inherent parent to child)

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
    // Inherited
    // If no new properties are added, we can leave it empty
}

class Teacher extends Person {
    subject: string; // MUST declare new properties here first

    constructor(name: string, age: number, subject: string, address: string) { 
        super(name, age, address); // Sends data to the parent class
        this.subject = subject;
    } 
}
```


---

## 3. Polymorphism (Many Forms)

 Different objects respond to the same call in their own way. Your calling code doesn't care which specific type it is.It lets you write a single function that works with multiple object types, as long as they share a parent .


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

makeAnimalSpeak(new Dog()); // Outputs: Woof!
makeAnimalSpeak(new Cat()); // Outputs: Meow!
```
---

## 4. Abstraction (Reduce: Hide the Complexity, Show the Interface)

Abstraction hides complex background details and only shows what is strictly necessary to the user. We often use interface or abstract class to define the **rules** of what a class should do, without worrying about how it does it.
Like a drive doesn't need to know car engine each functionality or inner mechanism , he just need to know how to drive . 

```ts
interface Logger {
  log(message: string): void;
}

// The app doesn't care how we log, just that we have a log() method.
class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
```

---

## How They Work Together

These four pillars aren't isolated techniques  they are  stack:

```
Abstraction   → defines the contract (what)
Encapsulation → protects the internals (how, hidden)
Inheritance   → shares common logic (reuse)
Polymorphism  → flexible behavior at runtime (swap)

```


---


# OOP is  writing code that's easier to change.

- **Encapsulation** stops bugs from spreading
- **Inheritance** stops you from repeating yourself
- **Polymorphism** stops you from writing `if/else` chains for every type
- **Abstraction** stops you from depending on implementation details
