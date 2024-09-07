const phones=[
    {name:'Samsung', price:20000, camera:'12mp', color: 'white'},
    {name:'Oppo', price:22000, camera:'12mp', color: 'white'},
    {name:'Vivo', price:18000, camera:'12mp', color: 'white'},
    {name:'Iphone', price:100000, camera:'12mp', color: 'white'}
]

function phoneOfMinPrices(phones)
{
    let min= phones[0];
    for (const phone of phones) {
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}
const minPricePhone= phoneOfMinPrices(phones);
console.log(minPricePhone);