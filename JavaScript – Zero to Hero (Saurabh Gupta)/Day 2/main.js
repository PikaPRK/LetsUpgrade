// Printing Array with 5 Names in Reverse
console.log("• Reverse Array:");
let a=["Naruto", "Sasuke", "Sakura", "Kakashi", "Hashirama", "Madara"];

for(let i=a.length-1; i>=0; i--)
{
    console.log(a[i]);
}

console.log("");

// Print No. Divisible by 5 (1 to 50)
console.log("• Divisible by 5:");

for(i=1; i<=50; i++)
{
    if(i%5==0)
    {
        console.log(i);
    }
}