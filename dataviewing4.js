let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
try {
    let targetEmail = "john.smith@email.com";

    // Step 1: Find all rentals matching the customer email
    let rentals = db.rentals.find(
    { contactEmail: targetEmail },
    { price_charged: 1, _id: 0 }
    ).toArray();

    // Step 2: Sum all price_charged values
    let total = 0;
    rentals.forEach(r => {
    total += r.price_charged;
    });

    // Step 3: Print result
    print("\nCustomer Email: " + targetEmail);
    print("\nTotal Rental Fees Collected: $" + total.toFixed(2));
} catch (error) {
    console.log(error);
}

