let Array = [85,98,64,54,89,67,3,11,44];


Array.push(99,32);


let J = Array.pop();
console.log(J); 
console.log(Array); 


let Z = Array.shift();
console.log(Z); 
console.log(Array); 



Array.unshift("Jathin", "Suresh","Suri");
console.log(Array);


let a = [9,14,,25,35,48,54];
let b = [4,18,38,38,42,44,57];
let c = [5,15,25,35,45,55];

let d = a.concat(b, c);
console.log(d);


let e = [74, 45, 14, 48, 78, 63, 96, 13];
let f = e.slice(1, 6);
console.log(f);


let g = e.splice(1, 2, "Hai", "Hello", "hru");
console.log(g);
console.log(e);

let h = [74, 45, 78, 63, 96, 13, 14, 48];
console.log(h.indexOf(63));

let i = [7, 78, 63, 74, 96, 13,4, 45, 14, 48];
console.log(i.lastIndexOf(74));

console.log(i.includes("Jathin"));
console.log(i.includes(74));

let j = ["car", "Truk", "omni", "van"];
console.log(j.join(","));
console.log(typeof j.join(","));

let k = [74, 45, 14, 48, 78, 63, 74, 96, 13];
console.log(k.reverse());


let l = ["car", "Truk", "omni", "van","bus"];
console.log(l.sort());

let m = [48, 78, 63, 74, 96, 74, 45, 14,  13, 6, 9, 5];
console.log(m.sort(sortingArray));

function sortingArray(a, b) {
  // 1) < 0  ... a comes first
  // 2) 0 ... nothing will change
  //3) > 0  ... b comes first

  return b - a;
  // 6 - 9 = -3

  // 6,9
}

// map () ;

let n = [48, 78, 63, 74, 96, 74, 45, ];

let C = n.map((num) => {
  return num + 2;
});

console.log(C);

//filter () ;

let o = [714,  13, 6, 9, 5, 63, 74, 96, 13, 6, 9, 5];

console.log(o.filter((num) => num % 2 === 0));

//reduce () ;
console.log(o.reduce((a, b) => a + b));

// every() ;

let p = [78, 63, 96, 13,74, 45, 14, 48];
console.log(p.every((num) => num % 2 === 0)); // flase

// some() ;

let q = [15,22,24,127,564,254,4747];
console.log(q.some((num) => num % 2 === 0)); // true



// forEach()

let r = [1,2,8,7,9,6,4,3];
r.forEach(s => console.log(s + 2))
 