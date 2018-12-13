/**
 * Created by Administrator on 2017/8/16.
 */

var People = function (name,age) {

    this.name = name;

    this.age = age;

}

var Student = function (name,age) {

    People.call(this,name,age);
}

People.prototype.sayName = function () {

    console.log(this.name + this.age);
};

Student.prototype = new People();

var stduent = new Student('wangbo',28);

//stduent.sayName();

module.exports = stduent;
