console.log("Day 2: Assigned Task (Part 3)")

console.log("\n- Print '*' Full-Pyramid")

z=5
for (i=1; i<=5; i++)
{
    a = ""
    for (j=1; j<=z; j++)
      a = a + " "
    
    b = ""
    for (k=1; k<=i; k++)
        b = b + "* "
        
    console.log(a+b)
    z=z-1
}