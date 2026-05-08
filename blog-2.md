## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

##  Generics<T>: Dynamicly handle Type(dynamicly generalized ). By using generics we can use same function for different type. Write Once, Use Anywhere.

## What is  Generic?
A Generic is a placeholder for a type. Instead of writing a function for `string` or `number`, you write it once and let TypeScript figure out the type when it's actually used.

```ts
function getString(element: string[]): string {
  return element[0];
}
const name = getString(["Ashadul","Rafi","Ashraful"]);
```
Now think , for number type 
```ts
function getNumber(elemet: number[]): number {
  return element[0];
}
  
const score = getNumber([10, 20, 300]);
```
for string and number type we almost write same code just change paramete type and return type .if we can handle it dynamicly we don't need to write the same function twice .  here comes gneric . which handle type dynamicly. 
```ts
function get<T>(element : T[]): T {
  return element[0];
}

const score = get([10, 20, 300]);
const name =  get(["Ashadul","Rafi","Ashraful"]);
```
Instead of generics if we use type `any` then it will destroy typescript type cheacking completely , which create bugs in future .

---

## A RealWorld Example: API Response Wrapper

```ts
interface UserResponse {
  data: User;
  error: string | null;
  loading: boolean;
}

interface ProductResponse {
  data: Product;
  error: string | null;
  loading: boolean;
}
```
here ,UserResponse and ProductResponse have  same key but different type .so write it twice ,which creates messy ,repeated code multiple time.
we can write it once with generics.
 

```ts
interface ApiResponse<T> {
  data: T;
  error: string | null;
  loading: boolean;
}

const userRes: ApiResponse<User> = fetchUser(1);
const productRes: ApiResponse<Product> = fetchProduct(42);
```


---

## Generic Constraints: When We Need "Some" Structure

When  we want a type that has at least certain properties (object). That's where `extends` comes in. By using  Constraints we fixed some strict rule, in object which data must be included .

```ts
interface Student { id: number; name: string;  semester: string; dateOfBirth: string};

const addStudent = <T extends Student>(studentData: T) => {
  return {
    institute : "IIUC",
    ...studentData,
  };
};

const student1 = {
  id: 26,
  name: "Ashadul",
  semester:"7th  ,
  dateOfBirth:"30 sep 2002",
};

const student2 = {
  id: 23,
  name: "Jami",
  semester:"7th ,
};

```

---

## The `keyof` Trick: Safe Property Access

One of the most powerful uses of Generics is combined with `keyof`. It lets you write functions that access object properties safely.

```ts

const getCountryProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const Bangladesh = {
    gdp: "450 Billion",
    people: "Muslim"
};

const SaudiArabia = {
    gdp: "1.238 trillion",
    people: "Muslim",
    population: 35
};


const gdpResult = getCountryProperty(SaudiArabia, "gdp");

console.log(gdpResult); 
```


---

## Why This Matters
Without Generics :
We need to write same kind of function multiple time just for each type, bugs caught at runtime , if we use `any` instead of generics we wil lose type safety . Hard to refactor.


With  Generics:
One function for all types . Reuseable code .Errors caught at compile time .Change once, works everywhere.

---
