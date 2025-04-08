let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
try {
    // Connect to the local database
  
    // Perform aggregation with $lookup and $group
    let result = db.rentals.aggregate([
      {
        $lookup: {
          from: "horses",
          localField: "horsename",
          foreignField: "name",
          as: "horse_info"
        }
      },
      { $unwind: "$horse_info" },
      {
        $group: {
          _id: "$horse_info.colour",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 3 }
    ]).toArray();
  
    // Output results
    if (result.length === 0) {
      print("No rental data found.\n");
    } else {
      print("Top 3 Most Popular Horse Colours:\n");
      result.forEach(r => {
        printjson({ Colour: r._id, Rentals: r.count });
      });
    }
  
  } catch (err) {
    print("\nError during aggregation:");
    console.log(err);
  }
  