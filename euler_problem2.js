var go = true;
var term1 = 1;
var term2 = 2;
var newTerm = 0;
var total = 0;
var fibNum = [];
while(go)
{
    newTerm = term1 + term2;
    if (newTerm < 4000000)
    {
        fibNum.push(newTerm);
        term1 = term2;
        term2 = newTerm;
    }
    else
    {
        go = false;
    }
}

for(var i = 0; i < fibNum.length; i++)
{
    if(fibNum[i] % 2 === 0)
    {
        total += fibNum[i];
    }
}

console.log(total);