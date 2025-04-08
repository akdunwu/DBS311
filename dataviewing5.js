let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
try {
    // Step 1: Aggregate rental counts by horse name
let popularHorses = db.rentals.aggregate([
    {
      $group: {
        _id: "$horsename",
        rental_count: { $sum: 1 }
      }
    },
    {
      $sort: { rental_count: -1 } // descending
    }
  ]).toArray();
  
  // Step 2: Print results
  print("\nMost Popular Horses by Rental Count:");
  popularHorses.forEach(h => {
    print(h._id + " : " + h.rental_count + " rentals");
  });
  
} catch (error) {
    console.log(error);
}