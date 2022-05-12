class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  conetctedTo: string;

  constructor(b: string, s: number, r: number, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn(): void {
    console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}`);
  }
}

const tv1 = new Tv('Samsung', 32, 1920, ['HDMI', 'Ethernet', 'Wifi']);

console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);
