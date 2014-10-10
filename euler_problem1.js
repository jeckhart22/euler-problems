var go = true;
var m3 = [];
var m5 =[];
var holder3 = 0;
var holder5 = 0;
var counter = 1;
while(go)
{
    holder3 = (3 * counter);
    if( holder3 < 1000 )
    {
        m3.push(holder3);
        counter++;
    }
    else
    {
        go = false;
    }
}

go = true;
counter = 1;
while(go)
{
    holder5 = (5 * counter);
    if( holder5 < 1000 )
    {
        m5.push(holder5);
        counter++;
    }
    else
    {
        go = false;
    }
}

var total = 0;
for(var i = 0; i < m3.length; i++)
{
    total += m3[i];
}

for(var i = 0; i < m5.length; i++)
{
    total += m5[i];
}

console.log(total);
