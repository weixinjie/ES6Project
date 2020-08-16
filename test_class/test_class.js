class Shape {
  constructor(x, y) {
    console.log('');
    this.x = x;
    this.y = y;
  }

  toString() {
    console.log(`这里是 Shape ${this.x} ${this.y}`);
  }

  static testForStaticFunction() {
    console.log(`这里是静态函数 testForStaticFunction`);
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y); // 子类必须调用 super 才能初始化当前的实例，此时才能调用 this 否则会报错
    this.radius = radius;
  }

  toString() {
    // super.toString();
    console.log(`这里是 Circle ${this.radius}`);
  }
}

let shape = new Shape(1, 3);
shape.toString();

let circle = new Circle(3,1,10);
circle.toString();

console.log(Object.getPrototypeOf(shape));
