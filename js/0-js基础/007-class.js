class Person {
    constructor() {

    }
    sayName() {
        console.log('person')
    }
    age = 'zhangsan'
}
console.log(Person.prototype)
person1 = new Person()
console.log('person1', person1)
