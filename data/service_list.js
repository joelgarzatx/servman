/** services indexes **/
db.getCollection("services").ensureIndex({
  "_id": NumberInt(1)
},[

]);

/** services records **/

db.getCollection("services").insert({
        "servicecode": "C14",
        "servicedescription": "12V LIGHT CONVERTER, install",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "7",
        "servicedescription": "ARM EXTENSION, replace",
        "servicenote": "includes removing fairing",
        "servicetime": 0.6
    });
db.getCollection("services").insert({
        "servicecode": "C08",
        "servicedescription": "BATTERY CHARGER, repair cable",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "C03",
        "servicedescription": "BATTERY, lock tumbler replace",
        "servicenote": "custom",
        "servicetime": 0.25
    });
db.getCollection("services").insert({
        "servicecode": "c18",
        "servicedescription": "BATTERY, remove battery without key/broken key in tumbler",
        "servicetime": 1.5
    });
db.getCollection("services").insert({
        "servicecode": "C02",
        "servicedescription": "BATTERY, replace battery cap",
        "servicenote": "custom",
        "servicetime": 0.25
    });
db.getCollection("services").insert({
        "servicecode": "23",
        "servicedescription": "BATTERY, replace power connector or plate",
        "servicenote": "includes removing fairing",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "C11",
        "servicedescription": "BATTERY, replace/repair battery charging port",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "C04",
        "servicedescription": "BOTTLE CAGE, remove/install",
        "servicenote": "custom",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "14",
        "servicedescription": "BRAKE CABLE, replace per side",
        "servicenote": "includes adjusting brake",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "C01",
        "servicedescription": "BRAKE CABLE, re-route",
        "servicenote": "custom",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "C15",
        "servicedescription": "BRAKE CABLE, reseat in channel",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "12",
        "servicedescription": "BRAKE CALIPER, replace",
        "servicenote": "includes adjusting brake",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "C13",
        "servicedescription": "BRAKE CALIPERS, clean and adjust per side",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "15",
        "servicedescription": "BRAKE LEVER, replace per side",
        "servicetime": 0.15
    });
db.getCollection("services").insert({
        "servicecode": "13",
        "servicedescription": "BRAKE PADS, disc replace per side",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "2",
        "servicedescription": "BRAKES, adjust both sides",
        "servicenote": "both sides",
        "servicetime": 0.25
    });
db.getCollection("services").insert({
        "servicecode": "W01",
        "servicedescription": "BUMPER, install",
        "servicenote": "warranty",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "C16",
        "servicedescription": "CLEANING - ADDITIONAL",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "22",
        "servicedescription": "CONTROLLER, replace",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "DE1",
        "servicedescription": "DELIVER/REPAIR EQUIPMENT ON-SITE, < 10 MILES",
        "servicetime": 0.5
    });
db.getCollection("services").insert({
        "servicecode": "DE0",
        "servicedescription": "DELIVER/REPAIR EQUIPMENT ON-SITE, > 10 MILES < 20 MILES",
        "servicetime": 0.75
    });
db.getCollection("services").insert({
        "servicecode": "DE2",
        "servicedescription": "DELIVER/REPAIR EQUIPMENT ON-SITE, > 20 MILES < 30 MILES",
        "servicetime": 1
    });
db.getCollection("services").insert({
        "servicecode": "24",
        "servicedescription": "ELECTRIC DIAGNOSTICS",
        "servicenote": "using spare known good parts",
        "servicetime": 0.25
    });
db.getCollection("services").insert({
        "servicecode": "C05",
        "servicedescription": "FAIRING BOLT, install",
        "servicetime": 0.05
    });
db.getCollection("services").insert({
        "servicecode": "29",
        "servicedescription": "FAIRING, replace",
        "servicetime": 0.15
    });
db.getCollection("services").insert({
        "servicecode": "10",
        "servicedescription": "FOLDING MECHANISM, d/a per side",
        "servicenote": "alum or steel frame",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "16",
        "servicedescription": "FRONT STRUCTURE, replace",
        "servicetime": 0.8
    });
db.getCollection("services").insert({
        "servicecode": "C12",
        "servicedescription": "GREASE FOLDING MECHANISM",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "1",
        "servicedescription": "HEADSET, adjust",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "9",
        "servicedescription": "HEADSET, replace",
        "servicenote": "includes removing fairing",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "C06",
        "servicedescription": "KEYS, order replacement",
        "servicetime": 0
    });
db.getCollection("services").insert({
        "servicecode": "W02",
        "servicedescription": "KICKSTAND, install",
        "servicenote": "warranty",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "28",
        "servicedescription": "LCD display - removal/instalation",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "11",
        "servicedescription": "MAIN AXLE, adjust and grease",
        "servicenote": "includes removing fairing",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "8",
        "servicedescription": "MAIN AXLE, replace",
        "servicenote": "includes removing fairing",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "C04",
        "servicedescription": "MIRROR, remove/install",
        "servicenote": "custom",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "19",
        "servicedescription": "MOTOR CLUTCH, replace",
        "servicenote": "only for 2013 and older",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "C07",
        "servicedescription": "MOTOR LUGS, replace/torque",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "20",
        "servicedescription": "MOTOR, replace",
        "servicenote": "0.2h - new 2014",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "ORD",
        "servicedescription": "ORDER PARTS",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "18",
        "servicedescription": "OVERALL CLEAN AND LUBE, cambering and folding mechanism",
        "servicetime": 1
    });
db.getCollection("services").insert({
        "servicecode": "C05",
        "servicedescription": "PAN BOLT, install",
        "servicenote": "custom",
        "servicetime": 0
    });
db.getCollection("services").insert({
        "servicecode": "c19",
        "servicedescription": "PATCH REPAIR, sugru patch",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "c17",
        "servicedescription": "PATROL LIGHT, remove old and install new kit/fairing",
        "servicenote": "includes removing fairing",
        "servicetime": 1
    });
db.getCollection("services").insert({
        "servicecode": "C10",
        "servicedescription": "PATROL LIGHTS, replace/repair light plug",
        "servicetime": 0.5
    });
db.getCollection("services").insert({
        "servicecode": "25",
        "servicedescription": "PATROL LIGHTS, complete removal/installation",
        "servicetime": 0.5
    });
db.getCollection("services").insert({
        "servicecode": "26",
        "servicedescription": "PATROL LIGHTS, replace/repair battery plug",
        "servicenote": "per plug",
        "servicetime": 0.12
    });
db.getCollection("services").insert({
        "servicecode": "27",
        "servicedescription": "PATROL LIGHTS, replace/repair charger power cord",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "PE0",
        "servicedescription": "PICKUP EQUIPMENT ON-SITE, < 10 MILES",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "PE1",
        "servicedescription": "PICKUP EQUIPMENT ON-SITE, > 10 MILES < 20 MILES",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "PE2",
        "servicedescription": "PICKUP EQUIPMENT ON-SITE, > 20 MILES < 30 MILES",
        "servicetime": 0.6
    });
db.getCollection("services").insert({
        "servicecode": "17",
        "servicedescription": "PUSH PIN STEM POST, retrieve/replace",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "30",
        "servicedescription": "SKIRT, replace",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "21",
        "servicedescription": "THROTTLE, replace",
        "servicenote": "includes removing fairing",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "4",
        "servicedescription": "TIRE/TUBE, replace motor",
        "servicetime": 0.4
    });
db.getCollection("services").insert({
        "servicecode": "3",
        "servicedescription": "TIRE/TUBE, replace rear",
        "servicetime": 0.3
    });
db.getCollection("services").insert({
        "servicecode": "C09",
        "servicedescription": "TIRES, BRING AIR TO PRESSURE",
        "servicetime": 0.1
    });
db.getCollection("services").insert({
        "servicecode": "5",
        "servicedescription": "WHEEL/WHEEL BEARING, replace",
        "servicetime": 0.2
    });
db.getCollection("services").insert({
        "servicecode": "6",
        "servicedescription": "YOKE, replace",
        "servicenote": "includes removing fairing",
        "servicetime": 0.6
    });
