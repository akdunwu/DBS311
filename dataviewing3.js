let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
try {
    let targetColour = "Black";

    // Step 1: Get horse names with the target colour
    let whiteHorses = db.horses.find(
    { colour: targetColour },
    { name: 1, _id: 0 }
    ).toArray().map(h => h.name);

    // Step 2: Get contact emails from rentals using those horse names
    let matchingRentals = db.rentals.find(
    { horsename: { $in: whiteHorses } },
    { contactEmail: 1, _id: 0 }
    ).toArray().map(r => r.contactEmail);

    // Step 3: Find full customer documents using those emails
    let customers = db.customers.find(
    { email: { $in: matchingRentals } }
    ).toArray();

    // Step 4: Print results as full JSON
    print("\n Customers who rented horses with colour:", targetColour);
    customers.forEach(c => printjson(c));
} catch (error) {
    console.log(error);
}

