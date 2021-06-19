function getTotalPrice(groceries) {
	let total=0;
	groceries.forEach(element =>{
        totalPrice += element.quantity*element.price;
     });
	return total;
}