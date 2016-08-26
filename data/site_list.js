db.getCollection("sites").ensureIndex({
  "_id": NumberInt(1)
},[

]);

    db.getCollection("sites").insert({
        "sitename": "HEB Brownsville 2",
        "sitedescription": "Boca Chica H‑E‑B",
        "sitenumber": "Corporate #489",
        "address": "2250 BOCA CHICA",
        "city": "Brownsville",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000119"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Brownsville 3",
        "sitedescription": "Boca Chica and Central Blvd H‑E‑B",
        "sitenumber": "Corporate #263",
        "address": "1628 CENTRAL BLVD",
        "city": "Brownsville",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Black",
        "unitserial": "000121"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Brownsville 4",
        "sitedescription": "Southmost and 30th H‑E‑B",
        "sitenumber": "Corporate #332",
        "address": "2950 SOUTHMOST ROAD",
        "city": "Brownsville",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000207"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Brownsville 5",
        "sitedescription": "Paredes and Torres H‑E‑B",
        "sitenumber": "Corporate #446",
        "address": "2155 PAREDES LINE RD",
        "city": "Brownsville",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000215"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Edinburg 2",
        "sitedescription": "Edinburg H‑E‑B",
        "sitenumber": "Corporate #431",
        "address": "2700 W FREDDY GONZALES",
        "city": "Edinburg",
        "serviced": 0,
        "unittype": "golf cart",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Harlingen 2",
        "sitedescription": "83 and Lincoln H‑E‑B",
        "sitenumber": "Corporate #291",
        "address": "613 S EXPWY 83",
        "city": "Harlingen",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000191"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB McAllen 1",
        "sitedescription": "Pecan and Ware H‑E‑B",
        "sitenumber": "Corporate #334",
        "address": "3601 PECAN",
        "city": "McAllen",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000130"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB McAllen 3",
        "sitedescription": "South 2nd Street H‑E‑B",
        "sitenumber": "Corporate #702",
        "address": "200 US EXPRESSWAY 83",
        "city": "McAllen",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000196"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB McAllen 4",
        "sitedescription": "N 10th and Fern H‑E‑B",
        "sitenumber": "Corporate #212",
        "address": "3200 N. 10TH STREET",
        "city": "McAllen",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000197"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Mission 2",
        "sitedescription": "Conway and Griffin Pkwy",
        "sitenumber": "Corporate #571",
        "address": "200 EAST GRIFFIN",
        "city": "Mission",
        "serviced": 0,
        "unittype": "golf cart",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Mission 3",
        "sitedescription": "Mission H‑E‑B Plus!",
        "sitenumber": "Corporate #94",
        "address": "2409 EAST EXPRESSWAY 83",
        "city": "Mission",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000126"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Palmhurst",
        "sitedescription": "Palmhurst H‑E‑B",
        "sitenumber": "Corporate #674",
        "address": "120 E. MILE 3RD",
        "city": "Palmhurst",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000102"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Palmview",
        "sitedescription": "Palmview H‑E‑B",
        "sitenumber": "Corporate #448",
        "address": "6010 W EXPRESSWAY 83",
        "city": "Palmview",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000190"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Pharr",
        "sitedescription": "Pharr H‑E‑B Plus!",
        "sitenumber": "Corporate #642",
        "address": "1300 SOUTH CAGE BLVD.",
        "city": "Pharr",
        "serviced": 1,
        "unittype": "48V",
        "unitcolor": "Black",
        "unitserial": "000198"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Rio Grande City",
        "sitedescription": "Rio Grande City H‑E‑B",
        "sitenumber": "Corporate #13",
        "address": "4031 EAST HWY 83",
        "city": "Rio Grande City",
        "serviced": 0,
        "unittype": "golf cart",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB San Juan",
        "sitedescription": "San Juan H‑E‑B Plus!",
        "sitenumber": "Corporate #38",
        "address": "901 WEST EXPRESSWAY 83",
        "city": "San Juan",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000124"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Weslaco 1",
        "sitedescription": "83 and N Texas H‑E‑B",
        "sitenumber": "Corporate #231",
        "address": "1004 N. TEXAS",
        "city": "Weslaco",
        "serviced": 1,
        "unittype": "36V",
        "unitcolor": "Yellow",
        "unitserial": "000101"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Weslaco 2",
        "sitedescription": "83 and Westgate H‑E‑B",
        "sitenumber": "Corporate #485",
        "address": "310 N. WESTGATE DRIVE",
        "city": "Weslaco",
        "serviced": 0,
        "unittype": "golf cart",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Alamo",
        "sitedescription": "Alamo H‑E‑B",
        "sitenumber": "Corporate #421",
        "address": "1211 EAST FRONTAGE RD.",
        "city": "Alamo",
        "serviced": 1,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Brownsville 1",
        "sitedescription": "Elizabeth and 9th Street H‑E‑B",
        "sitenumber": "Corporate #1",
        "address": "924 SE ELIZABETH",
        "city": "Brownsville",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Donna",
        "sitedescription": "Donna H‑E‑B",
        "sitenumber": "Corporate #9",
        "address": "813 MILLER",
        "city": "Donna",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Edinburg 1",
        "sitedescription": "Closner and Baker H‑E‑B",
        "sitenumber": "Corporate #172",
        "address": "1212 S CLOSNER",
        "city": "Edinburg",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Elsa",
        "sitedescription": "Elsa H‑E‑B",
        "sitenumber": "Corporate #677",
        "address": "512 E. EDINBURG AVE.",
        "city": "Elsa",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Falfurrias",
        "sitedescription": "Falfurrias H‑E‑B",
        "sitenumber": "Corporate #200",
        "address": "700 S SAINT MARYS ST",
        "city": "Falfurrias",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Harlingen 3",
        "sitedescription": "Morgan and Grimes H‑E‑B",
        "sitenumber": "Corporate #168",
        "address": "1103 MORGAN",
        "city": "Harlingen",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Harlingen 4",
        "sitedescription": "Southland and 12th St H‑E‑B",
        "sitenumber": "Corporate #136",
        "address": "1213 S. COMMERCE",
        "city": "Harlingen",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB McAllen 2",
        "sitedescription": "10th and Trenton H‑E‑B",
        "sitenumber": "Corporate #590",
        "address": "901 TRENTON RD",
        "city": "McAllen",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Mercedes",
        "sitedescription": "Mercedes H‑E‑B",
        "sitenumber": "Corporate #370",
        "address": "209 N. TEXAS",
        "city": "Mercedes",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Mission 1",
        "sitedescription": "Conway and 9th St H‑E‑B",
        "sitenumber": "Corporate #226",
        "address": "820 S. CONWAY",
        "city": "Mission",
        "serviced": 1,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Port Isabel",
        "sitedescription": "Port Isabel H‑E‑B",
        "sitenumber": "Corporate #383",
        "address": "1679 HIGHWAY 100",
        "city": "Port Isabel",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB Raymondville",
        "sitedescription": "Raymondville H‑E‑B",
        "sitenumber": "Corporate #429",
        "address": "405 W. HILDALGO",
        "city": "Raymondville",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });
    db.getCollection("sites").insert({
        "sitename": "HEB San Benito",
        "sitedescription": "San Benito H‑E‑B",
        "sitenumber": "Corporate #626",
        "address": "1095 WEST BUSINESS 77",
        "city": "San Benito",
        "serviced": 0,
        "unittype": "x",
        "unitcolor": "x",
        "unitserial": "x"
    });