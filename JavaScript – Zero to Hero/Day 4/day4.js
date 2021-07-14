console.log("Day 4: Assigned Task")

console.log("\n- Find Palindromes in a Sentence")

s= "my mom and dad are super awesome"
word=""

for(p of s)
{
  if(p != " ")
    word+=p
  else
  {
    rev=word.split("").reverse().join("")
    if(rev == word)
      console.log(word)
    word=""
  }
}