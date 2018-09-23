let shoppingCart = ["Name: Mari Jaine", "Items Purchased: ", "Js for the dummy of dummies: $34.99", "How to read dummies book: $22.86"]

for (let i = 0; i < shoppingCart.length; i++) 
{
    //prints each item of the shoppingCart array
    console.log(shoppingCart[i]);
}
    var purchase = [{ value: 34.99}, { value: 22.86}],
        sum = purchase.reduce(function (s, a) 
        {
            return s + a.value;
        }, 0);
//prints total purchase with the total of cost
console.log("Total Purchase: $", +sum);
