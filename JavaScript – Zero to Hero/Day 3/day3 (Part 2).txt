console.log("Day 3: Assigned Task (Part 2)")

console.log("\n- Print Fizz(3), Buzz(5) & FizzBuzz(15) without using Modulus(%)")

n3=0
n5=0

for(i=1; i<=100; i++)
{
  s=""
  n3++
  n5++
  
  if(n3==3)
  {
    s+="Fizz"
    n3=0
  }
  
  if(n5==5)
  {
    s+="Buzz"
    n5=0
  }
  
  if(s=="")
    console.log(i)
    
  else
    console.log(s)
}