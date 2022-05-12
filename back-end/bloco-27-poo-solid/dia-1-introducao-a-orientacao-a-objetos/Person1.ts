class Person1 {
  name: string; // attributes
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() { // methods
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p11 = new Person1('Maria', 171, 58); // creating an instance of the class Person | Object
const p12 = new Person1('João', 175, 66);
console.log(p11.name, p11.height, p11.weight);
console.log(p12.name, p12.height, p12.weight);
p11.sleep();
p12.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/