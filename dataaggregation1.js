let db = connect('mongodb://localhost/dbs311_a2');

// code here
// remember to wrap in a try catch block!
// script.js
try {  
    // Run aggregation on horses collection
    let report = db.horses.aggregate([
      {
        $group: {
          _id: "$speed",
          average_price_per_hour: { $avg: "$standard_priceperhour" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 } // ascending order by speed
      }
    ]).toArray();
  
    if (report.length === 0) {
      print("\n No horses found in database.");
    } else {
      print("\n Average Price Per Hour by Horse Speed:\n");
  
      // Print table-style result
      report.forEach(r => {
        printjson({
          Speed: r._id,
          "Avg Price ($/hr)": r.average_price_per_hour.toFixed(2),
          "Horse Count": r.count
        });
      });
    }
  
  } catch (err) {
    print("\n Error during aggregation:");
    console.log(err);
  }
  
