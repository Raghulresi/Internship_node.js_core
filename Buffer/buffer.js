const buf = Buffer.from("Hello");//creates a buffer from a string, array, or another buffer.
console.log(buf);

console.log(buf.toString());

const buf1 = Buffer.alloc(5); // creates a buffer of a fixed size.
console.log(buf1);

const buf2 = Buffer.allocUnsafe(5); //creates a buffer without initializing memory.
console.log(buf2);

const buf3 = Buffer.alloc(10);
buf3.write("Hello"); //writes data into a buffer.
console.log(buf3.toString());

const source = Buffer.from("Hello");
const target = Buffer.alloc(5);
source.copy(target); //copies data from one buffer to another buffer
console.log(target.toString());

const buf4 = Buffer.from("Hello Node");
const part = buf4.slice(0,5); //creates a new buffer from a selected portion of another buffer.
console.log(part.toString());

const b1 = Buffer.from("ABC");
const b2 = Buffer.from("ABC");
console.log(Buffer.compare(b1,b2)); // 0 ,-1, 1 will be retruned based on context

const a1 = Buffer.from("Hello");
const a2 = Buffer.from("Hello");
console.log(a1.equals(a2)); //checks whether two buffers have the same content.

const c1 = Buffer.from("Hello ");
const c2 = Buffer.from("Node");
const c3 = Buffer.concat([c1,c2]); //combines multiple buffers into a single buffer.
console.log(c3.toString());