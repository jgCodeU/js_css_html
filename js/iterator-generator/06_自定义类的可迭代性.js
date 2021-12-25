
//案例：创建一个教室类，创建出来的对象都是可迭代对象
class Classroom {
    constructor(adress, name, students) {
        this.adress = adress
        this.name = name
        this.students = students
    }

    entry(newStudent) {
        this.students.push(newStudent)
    }

    //要使创建出来的对象可迭代，对象必须有迭代器
    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if(index < this.students.length) {
                    return { value: this.students[index++], done: false }
                } else {
                    return { value: undefined, done: true }
                }
            },
            // 监听迭代器提前终止
            return: () => {
                console.log('迭代器提前终止了')
                return { value: undefined, done: false }
            }
        }
    }
    
}

const classroom = new Classroom('3楼', '计算机教室', ['zhangsan', 'lisi', 'wangwu'])
console.log(classroom.students)
console.log(classroom)
classroom.entry('danny')
console.log(classroom.students)
for(item of classroom) {
    console.log(item)
    // 迭代器提前终止
    if(item === 'wangwu'){
        break
    }
}







