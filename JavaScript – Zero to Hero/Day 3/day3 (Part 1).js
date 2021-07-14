console.log("Day 3: Assigned Task (Part 1)")

console.log("\n- Print Fizz(3), Buzz(5) & FizzBuzz(15) using Modulus(%)")

for(i=1; i<=100; i++)
{
  if(i%15==0)
    console.log("Fizz Buzz")
  else if(i%3==0)
    console.log("Fuzz")
  else if(i%5==0)
    console.log("Buzz")
  else
    console.log(i)
}