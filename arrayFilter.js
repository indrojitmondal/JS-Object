const ages = [32, 33, 16, 40];
const ckAges=ages.filter(checkAdult);
// 2nd way
const ck2Ages=ages.filter(age => age>=18);
function checkAdult(age)
{
    return age >=18;
}
console.log(ckAges);
console.log(ck2Ages);
