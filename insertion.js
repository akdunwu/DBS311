// Mongo DB shell commands

const fnames = ["Gael", "Johan", "Karter", "Miles", "German", "Omar", "Rylan", "Rylee", "Lucian", 
"Maximillian", "Reid", "Nash", "Lucas", "Bronson", "Case", "Salvatore", "Brendon", "Philip", 
"Elliott", "Ulises", "Malcolm", "Deandre", "Kash", "Greyson", "Rodrigo", "Kelsie", "Lauryn", 
"Kaylyn", "Katelyn", "Sofia", "Micaela", "Maya", "Kallie", "Milagros", "Lyric", "Yareli", 
"Nyasia", "Eliza", "Stephanie", "Melody", "Bethany", "Joslyn", "Krista", "Rosa", "Essence", 
"Amelia", "Alissa", "Jazmin", "Maliyah", "Marlene"];

const lnames = ["Christian", "Perez", "Logan", "Evans", "Gilbert", "Shields", "Carroll", 
"Stanley", "Fowler", "Romero", "Garza", "Escobar", "Swanson", "Long", "Potts", "Ashley", "Travis", 
"Haney", "Everett", "Marks", "Fields", "Harris", "Mccall", "Velazquez", "Kerr", "Harper", "Price", 
"Mills", "Webster", "Mercado", "Nielsen", "Bolton", "Watson", "Mcclure", "Rhodes", "Hansen", 
"Gould", "Oliver", "Barnes", "Mathis", "Wall", "Short", "Richard", "Gallegos", "Hopkins", "Cline", 
"Rush", "Juarez", "Griffin", "Richmond"];

const hnames = ["Rocket", "Darby", "Kane", "Tyler", "Beau", "Whiz", "Solomon", "Savannah", 
"Gunther", "Willie", "Tux", "Wilson", "Popcorn", "Tucker", "Greta", "Fluffy", "Whispy", "Jazmie", 
"Baxter", "Tinky", "Bruiser", "Morgan", "Rin Tin Tin", "Tori", "Scooter", "Frankie", "Skinny", 
"Tiggy", "Kurly", "Charmer", "Chi Chi", "Pablo", "Sparky", "Chubbs", "Twiggy", "Snoopy", "Amie", 
"Purdy", "Chocolate", "Edsel", "Eddy", "Parker", "Chivas", "Abigail", "Jojo", "Barkley", "Lincoln", 
"Stinky", "Homer", "Beauty"];
 
const colours = ["Brown", "Black", "Gold", "Orange", "White", "Silver", "Chestnut", "Palomino", 
"Bay", "Dapple Grey", "Cream", "Red", "Sorrel", "Buckskin", "Dun", "Pinto", "Roan", "Spotted"];

const streets = ["Merchant Avenue", "Pine Route", "Art Lane", "Gravel Avenue", "Valley Street", 
"Ivory Boulevard", "Chapel Way", "Amber Lane", "Starlight Way", "Ironwood Avenue", "Ebon Row", 
"Gray Avenue", "Dew Avenue", "Moon Way", "Bellow Boulevard", "Feathers Street", "Archer Street", 
"Juniper Lane", "Brewer Passage", "Broad Street", "Ember Street", "Senna Street", "Farmer Street", 
"Legend Avenue", "Beaver Street", "Noble Street", "Lily Street", "Highland Avenue", "Gem Route", 
"Pioneer Row", "Greenfield Street", "Globe Avenue", "Autumn Avenue", "Arctic Street", 
"Spruce Lane", "Feathers Avenue", "Phoenix Lane", "Heritage Avenue", "Bard Street", "Aviation Way", 
"Station Way", "Apollo Lane", "Earl Way", "Great Avenue", "Kingwood Street", "Ocean Avenue", 
"Lavender Street", "Boulder Way", "Oak Lane", "Crystal Lane", "Judge Avenue", "Earl Way", 
"Elm Row", "Bliss Boulevard", "Barley Lane", "Saffron Route", "Brook Lane", "Union Row", 
"Pinnacle Lane", "Little Passage"]

const cities = ["Krepool", "Crehmery", "Chodvine", "Selding", "Praxving", "Vlury", "Crille", 
"Garc", "Arkgan", "Oksey", "Rarough", "Obohrora", "Ustralwood", "Plagend", "Fastin", "Bleles", 
"Zlans", "Qrario", "Olisginia", "Amsall", "Tagan", "Graby", "Beufsas", "Zhirith", "Tripmond", 
"Vlont", "Ogora", "Kego", "Adagow", "Ulset"];

const provinces = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YK"];

const mails = ["@email.com", "@gmail.com", "@outlook.com", "@yahoo.com", "@pidgeon.com", 
"@runner.com", "@horses.com", "@seneca.ca"];

const paymentMethods = ["Cash", "Credit", "Debit", "Cheque"];

const target_num_horses = 50;
const target_num_customers = 100;
const target_num_rentals = 150;

let db = connect('mongodb://localhost/dbs311_a2');

db.horses.insertMany(
	[
		{
			name: "Shadow",
			colour: "Black",
			height: 60,
			speed: 7,
			dateborn: new Date("2007-03-27"),
			standard_priceperhour: 29.99
		},
		{
			name: "Apples",
			colour: "Orange",
			height: 55,
			speed: 6,
			dateborn: new Date("2012-06-12"),
			standard_priceperhour: 27.99
		},

		{
			name: "Midnight",
			colour: "Black",
			height: 58,
			speed: 6,
			dateborn: new Date("2006-08-11"),
			standard_priceperhour: 28.79
		},
		{ 
			name: "Thunder", 
			colour: "Black", 
			height: 64, 
			speed: 9, 
			dateborn: new Date("2015-06-15"), 
			standard_priceperhour: 59.99 
		},
		{ 
			name: "Daisy", 
			colour: "White", 
			height: 58, 
			speed: 6, 
			dateborn: new Date("2017-08-30"), 
			standard_priceperhour: 29.99 
		},
		{ 
			name: "Storm", 
			colour: "Brown", 
			height: 66, 
			speed: 8, 
			dateborn: new Date("2014-05-10"), 
			standard_priceperhour: 54.99 
		},
		{ 
			name: "Bella", 
			colour: "Chestnut", 
			height: 61, 
			speed: 5, 
			dateborn: new Date("2016-11-23"), 
			standard_priceperhour: 25.99 
		},
		{ 
			name: "Spirit", 
			colour: "Palomino", 
			height: 65, 
			speed: 10, 
			dateborn: new Date("2013-03-01"), 
			standard_priceperhour: 69.99 
		},
		{ 
			name: "Flicka", 
			colour: "Bay", 
			height: 60, 
			speed: 6, 
			dateborn: new Date("2017-02-14"), 
			standard_priceperhour: 29.99 
		},
		{ 
			name: "Star", 
			colour: "Dapple Grey", 
			height: 59, 
			speed: 4, 
			dateborn: new Date("2019-04-08"), 
			standard_priceperhour: 19.99 
		},
		{ 
			name: "Whisper", 
			colour: "Cream", 
			height: 62, 
			speed: 5, 
			dateborn: new Date("2020-01-01"), 
			standard_priceperhour: 15.95 
		}
	]
);

db.customers.insertMany(
	[
		{
			fname: "John",
			lname: "Smith",
			email: "john.smith@email.com",
			phonenum: "555-123-4567",
			address: {
				street: "Road St.",
				number: 77,
				postal_code: "A1B 2C3",
				apartment: 12,
				city: "Toronto",
				province: "ON",
				country: "CA"
			},
			DoB: new Date("1998-11-03")
		},
		{
			fname: "Jane",
			lname: "Doe",
			email: "jane.doe@gmail.com",
			phonenum: "555-765-4321",
			address: {
				street: "Street Rd.",
				number: 33,
				postal_code: "12345",
				// apartment is optional
				city: "Huston",
				state: "TX", // state instead of province
				country: "US"
			},
			DoB: new Date("1995-05-15")
			// DoB really isn't neccecary
		},
		{ 
			fname: "Alice", 
			lname: "Walker", 
			email: "alice@gmail.com", 
			phonenum: "123-456-7890", 
			address: 
			{ 
				street: "123 Maple St", 
				city: "Horseville", 
				province: "ON", 
				postal_code: "H0R1S3" 
			}, 
			DoB: new Date("1990-03-10") 
		},
		{ 
			fname: "Bob", 
			lname: "Smith", 
			email: "bob@gmail.com", 
			phonenum: "987-654-3210", 
			address: 
			{ 
				street: "456 Oak St", 
				city: "Rider City", 
				province: "BC", 
				postal_code: "R1D3RC" 
			}, 
			DoB: new Date("1985-11-02") 
		},
		{ 
			fname: "Carol", 
			lname: "Jones", 
			email: "carol@gmail.com", 
			phonenum: "234-567-8901", 
			address: 
			{ 
				street: "789 Pine St", 
				city: "Gallop Town", 
				province: "AB", 
				postal_code: "G0P1AB" 
			}, 
			DoB: new Date("1992-06-20") 
		},
		{ 
			fname: "David", 
			lname: "Brown", 
			email: "david@gmail.com", 
			phonenum: "345-678-9012", 
			address: 
			{ 
				street: "321 Birch St", 
				city: "Stable City", 
				province: "MB", 
				postal_code: "S7B1MB" 
			}, 
			DoB: new Date("1988-12-15") 
		},
		{ 
			fname: "Ella", 
			lname: "White", 
			email: "ella@gmail.com", 
			phonenum: "456-789-0123", 
			address: 
			{ 
				street: "654 Cedar St", 
				city: "Equine Bay", 
				province: "NS", 
				postal_code: "E1Q1NS" 
			}, 
			DoB: new Date("1995-04-18") 
		},
		{ 
			fname: "Frank", 
			lname: "Taylor", 
			email: "frank@gmail.com", 
			phonenum: "567-890-1234", 
			address: 
			{ 
				street: "987 Spruce St", 
				city: "Neighsville", 
				province: "NB", 
				postal_code: "N3I1NB" 
			}, 
			DoB: new Date("1991-09-25") 
		},
		{ 
			fname: "Grace", 
			lname: "Hall", 
			email: "grace@gmail.com", 
			phonenum: "678-901-2345", 
			address: 
			{ street: "213 Elm St", 
				city: "Hoofington", 
				province: "SK", 
				postal_code: "H2F1SK" 
			}, 
			DoB: new Date("1994-07-07") 
		},
		{ 
			fname: "Henry", 
			lname: "King", 
			email: "henry@gmail.com", 
			phonenum: "789-012-3456", 
			address: 
			{ 
				street: "132 Willow St", 
				city: "Colt City", 
				province: "QC", 
				postal_code: "C1T1QC" 
			}, 
			DoB: new Date("1989-10-30") 
		},
		{ 
			fname: "Ivy", 
			lname: "Green", 
			email: "ivy@gmail.com", 
			phonenum: "890-123-4567", 
			address: 
			{ 
				street: "876 Ash St", 
				city: "Jockey Ville", 
				province: "PE", 
				postal_code: "J0K1PE" 
			}, 
			DoB: new Date("1996-05-11") 
		},
		{ 
			fname: "Jack", 
			lname: "Black", 
			email: "jack@gmail.com", 
			phonenum: "901-234-5678", 
			address: 
			{ 
				street: "543 Fir St", 
				city: "Canter Creek", 
				province: "NL", 
				postal_code: "C4N1NL" 
			}, 
			DoB: new Date("1993-01-21") 
		}
	]
);

db.rentals.insertMany(
	[
		{
			horsename: "Shadow",
			contactEmail: "john.smith@email.com",
			// so long as there's at least one contact, both aren't really neccecary
			date_rented: new Date("2024-08-12T08:32:00Z"),
			date_expected: new Date("2024-08-12T15:32:00Z"),
			date_returned: new Date("2024-08-12T13:12:57Z"),
			price_charged: 237.22,
			payment_method: "Credit"
		},
		{
			horsename: "Apples",
			phonenum: "555-765-4321",
			date_rented: new Date("2024-07-15T09:29:00Z"),
			date_expected: new Date("2024-07-15T16:29:00Z"),
			date_returned: new Date("2024-07-15T15:53:12Z"),
			price_charged: 221.40,
			payment_method: "Cash"
		},
		{ 
			horsename: "Thunder", 
			contactEmail: "alice@example.com", 
			contactPhonenum: "123-456-7890", 
			date_rented: new Date("2024-03-01"), 
			date_expected: new Date("2024-03-01"), 
			date_returned: new Date("2024-03-01"), 
			price_charged: 60, 
			payment_method: "Credit" 
		},
		{ 
			horsename: "Storm", 
			contactEmail: "bob@example.com", 
			contactPhonenum: "987-654-3210", 
			date_rented: new Date("2024-03-02"), 
			date_expected: new Date("2024-03-02"), 
			date_returned: new Date("2024-03-02"), 
			price_charged: 65, 
			payment_method: "debit" 
		},
		{ 
			horsename: "Bella", 
			contactEmail: "carol@example.com", 
			contactPhonenum: "234-567-8901", 
			date_rented: new Date("2024-03-03"), 
			date_expected: new Date("2024-03-03"), 
			date_returned: new Date("2024-03-03"), 
			price_charged: 52, 
			payment_method: "cash" 
		},
		{ 
			horsename: "Flicka", 
			contactEmail: "david@example.com", 
			contactPhonenum: "345-678-9012", 
			date_rented: new Date("2024-03-04"), 
			date_expected: new Date("2024-03-04"), 
			date_returned: new Date("2024-03-04"), 
			price_charged: 53, 
			payment_method: "credit" 
		},
		{ 
			horsename: "Daisy", 
			contactEmail: "ella@example.com", 
			contactPhonenum: "456-789-0123", 
			date_rented: new Date("2024-03-05"), 
			date_expected: new Date("2024-03-05"), 
			date_returned: new Date("2024-03-05"), 
			price_charged: 50, 
			payment_method: "credit" 
		},
		{ 
			horsename: "Midnight", 
			contactEmail: "frank@example.com", 
			contactPhonenum: "567-890-1234", 
			date_rented: new Date("2024-03-06"), 
			date_expected: new Date("2024-03-06"), 
			date_returned: new Date("2024-03-06"), 
			price_charged: 58, 
			payment_method: "cash" 
		},
		{ 
			horsename: "Star", 
			contactEmail: "grace@example.com", 
			contactPhonenum: "678-901-2345", 
			date_rented: new Date("2024-03-07"), 
			date_expected: new Date("2024-03-07"), 
			date_returned: new Date("2024-03-07"), 
			price_charged: 45, 
			payment_method: "credit" 
		},
		{ 
			horsename: "Whisper", 
			contactEmail: "henry@example.com", 
			contactPhonenum: "789-012-3456", 
			date_rented: new Date("2024-03-08"), 
			date_expected: new Date("2024-03-08"), 
			date_returned: new Date("2024-03-08"), 
			price_charged: 49, 
			payment_method: "credit" 
		},
		{ 
			horsename: "Shadow", 
			contactEmail: "ivy@example.com", 
			contactPhonenum: "890-123-4567", 
			date_rented: new Date("2024-03-09"), 
			date_expected: new Date("2024-03-09"), 
			date_returned: new Date("2024-03-09"), 
			price_charged: 55, 
			payment_method: "debit" 
		},
		{ 
			horsename: "Spirit", 
			contactEmail: "jack@example.com", 
			contactPhonenum: "901-234-5678", 
			date_rented: new Date("2024-03-10"), 
			date_expected: new Date("2024-03-10"), 
			date_returned: new Date("2024-03-10"), 
			price_charged: 70, 
			payment_method: "cash" 
		}
	]
);


try {
	function rand() { // rand the way it was meant to be
		return Math.floor(4294967295 * Math.random());
	}
	
	let horse_array = [];
	let cust_array = [];
	let rental_array = [];
	
	
	for (let i = 0; i < target_num_horses; i++) {
		let tmp_speed = rand() % 10;
		let tmp_year = ((rand() % 15) + 2002); // 2002-2017
		let	tmp_month = ((rand() % 12) + 1);
		let tmp_day = ((rand() % 28) + 1);
		let dateborn = new Date(tmp_year, tmp_month, tmp_day);

		horse_array.push(
			{
				name : hnames[rand() % hnames.length],
				colour : colours[rand() % colours.length],
				height : (rand() % 40) + 40,
				speed : tmp_speed,
				dateborn : dateborn,	// shows as UTC, but that's fine
				standard_priceperhour : tmp_speed * 12.1 + (rand() % 5)
			}
		);
	}
	
	for (let i = 0; i < target_num_customers; i++) {
		let tmp_fname = fnames[rand() % fnames.length];
		let tmp_lname = lnames[rand() % lnames.length];
		let tmp_email = tmp_fname[0] + "." + tmp_lname + mails[rand() % mails.length];
		let tmp_phonenum = ((rand() % 899) + 100) + "-" + 
											 ((rand() % 899) + 100) + "-" +
											 ((rand() % 8999) + 1000);

		let tmp_year = (rand() % 60) + 1970; // 1970-2030
		let tmp_month = (rand() % 12) + 1;	// 1-12
		let tmp_day = (rand() % 28) + 1;	// 1-28
		let tmp_dob = new Date(tmp_year, tmp_month, tmp_day); // shows as UTC, but that's fine

		cust_array.push(
			{
				fname : tmp_fname,
				lname : tmp_lname,
				email : tmp_email,
				phonenum : tmp_phonenum,
				address : 
					{
						street : ((rand() % 1000) + 1) + streets[rand() % streets.length],
						city : cities[rand() % cities.length],
						province : rand() % 2 == 0 ? "ON" : provinces[rand() % provinces.length]
						// no postal code
					},
				DoB : tmp_dob // shows as UTC, but that's fine
			}
		);

	}

	for (let i = 0; i < target_num_rentals; i++) {
		let horse = horse_array[rand() % horse_array.length];
		let cust = cust_array[rand() % cust_array.length];
		let time_rented_for = rand() % 8; // hours
		let time_out = time_rented_for * (Math.random() + 0.5);
		let tmp_price_charged = time_rented_for > time_out ? 
			time_rented_for * horse.standard_priceperhour : 
			time_out * 1.2 * horse.standard_priceperhour;

			let tmp_year = (rand() % 15) + 2010;
            let tmp_month = (rand() % 12) + 1;
            let tmp_day = (rand() % 28) + 1;
            let tmp_hour = (rand() % 7) + 8; // 8am to 4pm locally. In Mongo Compass/Atlas, this will display as UTC time.
            let tmp_minute = (rand() % 60); 
            let tmp_second = (rand() % 60);

            let date_rented = new Date(tmp_year,tmp_month,tmp_day,tmp_hour,tmp_minute,tmp_second);
            let date_expected = new Date(date_rented.getTime() + time_rented_for * 60 * 60 * 1000);
            let date_returned = new Date(date_rented.getTime() + time_out * 60 * 60 * 1000);

		rental_array.push(
			{
				horsename : horse.name,
				contactEmail : cust.email,
				contactPhonenum : cust.phonenum,
				price_charged : tmp_price_charged,
				payment_method : paymentMethods[rand() % paymentMethods.length],
				date_rented : date_rented,
				date_expected : date_expected,
				date_returned : date_returned
				
			}
		);
		
	}
	

	db.horses.insertMany(horse_array);
	db.customers.insertMany(cust_array);
	db.rentals.insertMany(rental_array);

} catch (error) {
	console.log(error);
}





