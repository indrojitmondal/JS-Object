const products =[
    {id: 1, name:'xiami phone night', price:19000},
    {id: 2, name:'asus vivobook', price:50000},
    {id: 3, name:'samsung iphone night', price:29000},
    
]

function productsSearch(products, search)
{
    const matched =[];
    for (const product of products) {

        if(product.name.includes(search)){
            matched.push(product);
        }
        
    }
    return matched;
}
const output =productsSearch(products,'phone');
console.log(output);



