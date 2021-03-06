/** tests indexes **/
db.getCollection("parts").ensureIndex({
  "_id": NumberInt(1)
},[

]);

/** tests records **/
db.getCollection("parts").insert({
        "partgroup": "FRAME",
        "partcode": "AB-019",
        "partdescription": "ARM BASIC, RH",
        "partprice": 105
    });
db.getCollection("parts").insert({
        "partgroup": "FRAME",
        "partcode": "AB-020",
        "partdescription": "ARM BASIC, LH",
        "partprice": 105
    });
db.getCollection("parts").insert({
        "partgroup": "ACCESSORY",
        "partcode": "ACC-KICK1",
        "partdescription": "Kickstand",
        "partprice": 0
    });
db.getCollection("parts").insert({
        "partgroup": "ACCESSORY",
        "partcode": "ACC-MIRROR",
        "partdescription": "MIRROR",
        "partprice": 9.99
    });
db.getCollection("parts").insert({
        "partgroup": "ACCESSORY",
        "partcode": "ACC-WBCAGE-HB",
        "partdescription": "WATER BOTTLE CAGE",
        "partprice": 9.96
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "ACQ-001",
        "partdescription": "AXLE, Clamp QR",
        "partprice": 1.21
    });
db.getCollection("parts").insert({
        "partgroup": "FRAME",
        "partcode": "ADP-001",
        "partdescription": "ADPATER, FRONT STRUCTURE END",
        "partprice": 2.04
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-BATCON",
        "partdescription": "ALERTE BATTERY, lights rewire battery plug",
        "partprice": 15
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-BATT",
        "partdescription": "ALERTE SPARE BATTERY, patrol lights",
        "partprice": 77
    });
db.getCollection("parts").insert({
        "partgroup": "ACCESSORY",
        "partcode": "AL-CHRG",
        "partdescription": "ALERTE CHARGER 12V",
        "partprice": 57.11
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-LTHOUSB",
        "partdescription": "ALERTE LIGHT BOTTOM, housing",
        "partprice": 18.2
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-LTHOUST",
        "partdescription": "ALERTE LIGHT TOP, housing",
        "partprice": 18.2
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-LTMNT",
        "partdescription": "LIGHT MOUNT, for headlight incl bolt",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-LTPADS",
        "partdescription": "ALERTE LIGHT CONTROL, touch pads",
        "partprice": 17.48
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "AL-POWCON",
        "partdescription": "ALERTE POWER CONNECTOR, patrol lights rewire",
        "partprice": 15
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "AXS-001B",
        "partdescription": "AXLE SET, FOLDING",
        "partprice": 4.8
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "AXS-014",
        "partdescription": "AXLE SET, MAIN",
        "partprice": 17.99
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "AXS-015",
        "partdescription": "AXLE SET, WHEEL",
        "partprice": 12.85
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BAT-003",
        "partdescription": "BATTERY, Li-ion 36V-9Ah",
        "partprice": 544.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BAT-004",
        "partdescription": "BATTERY, Li-ion 48V-11.25Ah",
        "partprice": 792
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BAT-005",
        "partdescription": "BATTERY, Li-ion 36V-4.5Ah",
        "partprice": 379.5
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BCP-001",
        "partdescription": "BRAKE CALIPER SET, DISC RH",
        "partprice": 32.5
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BCP-002",
        "partdescription": "BRAKE CALIPER SET, DISC LH",
        "partprice": 32.5
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BCS-007",
        "partdescription": "BRAKE CABLE SET, PAIR",
        "partprice": 19.2
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "BE-001",
        "partdescription": "BEARING, WHEEL - ABEC 5",
        "partprice": 2.25
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BGE-002",
        "partdescription": "BADGE, HYBRID",
        "partprice": 4.32
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BKT-008",
        "partdescription": "BRACKET, skirt (2 per skirt)",
        "partprice": 3.64
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BL-006",
        "partdescription": "BRAKE LEVER PAIR w/ lock DISC",
        "partprice": 35.05
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BLA-001B",
        "partdescription": "BRAKE LEVER, adjuster",
        "partprice": 2.1
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BRS-002",
        "partdescription": "BRAKE ROTOR SET, DISC",
        "partprice": 18.25
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "BT-001",
        "partdescription": "BOLT, FRONT FORK CLAMP/ CLAMP STEERING AXLE",
        "partprice": 0.32
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-015",
        "partdescription": "BOLT, scissor",
        "partprice": 0.63
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "BT-015",
        "partdescription": "BOLT, REAR WHEEL AXLE",
        "partprice": 0.63
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-016",
        "partdescription": "BOLT, battery rail",
        "partprice": 0.4
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BT-016",
        "partdescription": "BOLT, rear fender",
        "partprice": 0.63
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BT-017",
        "partdescription": "BOLT, BRAKE CALIPER",
        "partprice": 0.7
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "BT-018",
        "partdescription": "BOLT, DISK BRAKE",
        "partprice": 0.63
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "BT-019",
        "partdescription": "BOLT, MAIN AXLE CLAMP",
        "partprice": 0.63
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "BT-020",
        "partdescription": "BOLT, YOKE",
        "partprice": 0.84
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "BT-021",
        "partdescription": "BOLT, FOLDING AXLE",
        "partprice": 0.91
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "BT-022B",
        "partdescription": "BOLT, MAIN AXLE",
        "partprice": 1.33
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-023",
        "partdescription": "Screw, Cap/Controller (4x15x7",
        "partprice": 0.32
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-023A",
        "partdescription": "Screw, Cap/Controller (4x40x7)",
        "partprice": 0.32
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-024",
        "partdescription": "BOLT, PAN",
        "partprice": 1.2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-025",
        "partdescription": "BOLT, BATTERY PLATE",
        "partprice": 0.24
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BT-028",
        "partdescription": "BOLT, fairing (4 bolts per fairing)",
        "partprice": 0.9
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BT-029",
        "partdescription": "BOLT, skirt (4 bolts per skirt)",
        "partprice": 0.5
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "BT-032",
        "partdescription": "BOLT, Front fender",
        "partprice": 0.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "BT-035",
        "partdescription": "SCREW, PAN/CONTROLLER",
        "partprice": 0.24
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "BT-037",
        "partdescription": "Bolt, Front Fork QR (from Dec 2013 on)",
        "partprice": 0.96
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CB-001",
        "partdescription": "BOX, controller",
        "partprice": 25
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CB-002",
        "partdescription": "PAN, controller box",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CB-002B",
        "partdescription": "PAN, controller box (48V from Dec-2013 on)",
        "partprice": 7
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CB-003",
        "partdescription": "CAP, controller box",
        "partprice": 4
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CHG-002",
        "partdescription": "CHARGER, Li-ion 100V-240V 36V-1.5A",
        "partprice": 65
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CHG-003",
        "partdescription": "CHARGER, Li-ion 100V-240V 48V-3.5A",
        "partprice": 130
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CHG-004",
        "partdescription": "CHARGER, Li-ion 100V-240V 48V-2A",
        "partprice": 90
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "CMA-001",
        "partdescription": "CLAMP SET, MAIN AXLE",
        "partprice": 2.88
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CON-001",
        "partdescription": "CONTROLLER, 36V Motor 17A",
        "partprice": 75
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CON-002",
        "partdescription": "CONTROLLER, 48V Motor 22A",
        "partprice": 90
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CON-002B",
        "partdescription": "CONTROLLER, 48V Motor 17A ( from Dec 2013 on)",
        "partprice": 110
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "CON-005",
        "partdescription": "CONTROLLER, 36V Motor 13A",
        "partprice": 75
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "CSS-001",
        "partdescription": "CLAMP SET, STEERING AXLE",
        "partprice": 12.3
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "CUS-001",
        "partdescription": "CUSHION, ARM BRAKE CABLE",
        "partprice": 1.04
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "EL-CNVRT",
        "partdescription": "12V CONVERTER FOR 36V LIGHT KIT",
        "partprice": 55.9
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "EXT-007L",
        "partdescription": "EXTENSION SET, LH ARM",
        "partprice": 42
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "EXT-007R",
        "partdescription": "EXTENSION SET, RH ARM",
        "partprice": 42
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "FAR-001",
        "partdescription": "FAIRING (specify color, no stickers applied)",
        "partprice": 73
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "FBU-001",
        "partdescription": "BUSHING, FOLDING",
        "partprice": 0.56
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "FBU-001",
        "partdescription": "BUSHING, FOLDING",
        "partprice": 0.56
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "FF-004",
        "partdescription": "FENDER, FR",
        "partprice": 13
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "FKB-001",
        "partdescription": "KNOB, FOLDING",
        "partprice": 2.7
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "FKS-009",
        "partdescription": "FORK SET, FR (ALUMINUM)",
        "partprice": 42
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "FKS-011",
        "partdescription": "FORK SET, FR (STEEL)",
        "partprice": 25
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "FKS-012",
        "partdescription": "FORS SET, FR (new quick release 48v came in Dec 2013)",
        "partprice": 48
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "FR-003L",
        "partdescription": "FENDER, RR LH",
        "partprice": 12
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "FR-003R",
        "partdescription": "FENDER, RR RH",
        "partprice": 12
    });
db.getCollection("parts").insert({
        "partgroup": "FRAME",
        "partcode": "FSS-008",
        "partdescription": "FRONT STRUCTURE SET",
        "partprice": 102
    });
db.getCollection("parts").insert({
        "partgroup": "FRAME",
        "partcode": "FTG-001",
        "partdescription": "FITTING, GREASE",
        "partprice": 2.46
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "FTG-001",
        "partdescription": "FITTING, GREASE",
        "partprice": 2.46
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "GT-006",
        "partdescription": "GRIP MAT, PAIR",
        "partprice": 32
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "HAZMAT",
        "partdescription": "HAZMAT FEE, Lithium Ion battery",
        "partprice": 28.5
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "HB-008",
        "partdescription": "HANDLEBAR, GULLWING ALUMINUM",
        "partprice": 48
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "HB-012",
        "partdescription": "HANDLEBAR (STEEL, 36V LITE)",
        "partprice": 32
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "HB-015",
        "partdescription": "HANDLEBAR (narrow 48v came in Dec 2013)",
        "partprice": 32
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "HG-006",
        "partdescription": "HAND GRIP PAIR, THROTTLE T8h",
        "partprice": 14.28
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "HG-007",
        "partdescription": "HAND GRIP PAIR, T8h foam with leather (From Dec 2013 on)",
        "partprice": 24
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "HG-008",
        "partdescription": "GRIP, THROTTLE FOAM (From Dec 2013 on)",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "HMC-001",
        "partdescription": "HOLDER, MOTOR CABLE",
        "partprice": 3.92
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "HS-003",
        "partdescription": "HEAD SET, THREDLESS",
        "partprice": 16
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "INS-001",
        "partdescription": "INSERT, STEEL THREADED FORK/ST CLAMP",
        "partprice": 0.56
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "KEY-001",
        "partdescription": "KEY, Blank Battery (no code)",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "KEY-002",
        "partdescription": "KEY, Copy Battery Key (copy made according to Battery Key code)",
        "partprice": 7.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "LOC-001",
        "partdescription": "LOCK SWITCH, Lithium Ion battery Pon-e 36V/48V",
        "partprice": 34.86
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "LPN-001",
        "partdescription": "LOCK-PIN, folding",
        "partprice": 6
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "LT-KIT01",
        "partdescription": "LIGHT KIT, includes fairing",
        "partprice": 388
    });
db.getCollection("parts").insert({
        "partgroup": "Electric - motor",
        "partcode": "MCS-001",
        "partdescription": "CLUTCH set, motor",
        "partprice": 72
    });
db.getCollection("parts").insert({
        "partgroup": "Electric - motor",
        "partcode": "MGR-001",
        "partdescription": "GEAR, motor planetary",
        "partprice": 7.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MNT-001",
        "partdescription": "LUG NUT, motor axle",
        "partprice": 3.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MNT-002",
        "partdescription": "LUG NUT, motor axle",
        "partprice": 3.5
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MNT-003",
        "partdescription": "NUT, motor axle",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MSP-001",
        "partdescription": "SPACER, motor axle LH",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MSP-002",
        "partdescription": "SPACER, motor axle RH short",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MSP-003",
        "partdescription": "SPACER, motor axle RH long",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MSP-004",
        "partdescription": "SPACER, motor axle RH long",
        "partprice": 3
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MSP-005",
        "partdescription": "SPACER, motor axle LH short",
        "partprice": 3
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MTR-003",
        "partdescription": "MOTOR, 10\" 36V-250W",
        "partprice": 276.92
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MTR-004",
        "partdescription": "MOTOR, 10\" 48V-350W",
        "partprice": 284.72
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MTR-004B",
        "partdescription": "MOTOR, 10\" 48V-350W (from Dec 2013 on)",
        "partprice": 341.4
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MTR-005",
        "partdescription": "MOTOR, 10\" 36V-180W",
        "partprice": 276.92
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "MWA-001",
        "partdescription": "WASHER, motor axle lock",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "NT-002",
        "partdescription": "NUT, M5 NYLOCK RR FENDER CONTR BOX",
        "partprice": 0.08
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "NT-002",
        "partdescription": "NUT, M5 NYLOCK RR FENDER",
        "partprice": 0.1
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "NT-003",
        "partdescription": "NUT, M5 CONTR BOX",
        "partprice": 0.08
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "OR-001",
        "partdescription": "O'RING, HEADSET",
        "partprice": 4.55
    });
db.getCollection("parts").insert({
        "partgroup": "ACCESSORY",
        "partcode": "P-9C173",
        "partdescription": "Bumper",
        "partprice": 0
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "PAD-001",
        "partdescription": "PAD, CUSHION Ø20 X 6t",
        "partprice": 0.5
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "PBS-006",
        "partdescription": "PAD set, BRAKE PAIR",
        "partprice": 10.8
    });
db.getCollection("parts").insert({
        "partgroup": "BRAKE",
        "partcode": "PBS-006-1",
        "partdescription": "PAD , BRAKE SINGLE",
        "partprice": 5.4
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "PCB-001",
        "partdescription": "POWER CONNECTOR, battery",
        "partprice": 3
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "PCB-001B",
        "partdescription": "POWER CONNECTOR, battery (from Dec 2013 on)",
        "partprice": 3
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "PLA-001",
        "partdescription": "PLUG, ARM",
        "partprice": 0.42
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "PLT-001",
        "partdescription": "PLATE, base battery - 36V",
        "partprice": 9.3
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "PLT-002",
        "partdescription": "PLATE, base battery - 48V",
        "partprice": 9.3
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "PP-003",
        "partdescription": "PUSH PIN",
        "partprice": 2.9
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "PQR-001",
        "partdescription": "PLATE, quick release",
        "partprice": 1.68
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "PSP-002",
        "partdescription": "PLUG, stem post guide",
        "partprice": 1.08
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "PSP-003",
        "partdescription": "PLUG, stem post top",
        "partprice": 0.6
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "PUS-005",
        "partdescription": "PU BUSHING SET",
        "partprice": 8.24
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "QRB-001",
        "partdescription": "BUSHING, QR",
        "partprice": 3.48
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "QRS-001",
        "partdescription": "CLAMP SET, QR",
        "partprice": 2.48
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "RAL-001",
        "partdescription": "Rail, battery LI ION 36V/8800mAh/324Wh",
        "partprice": 12
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "RAL-002",
        "partdescription": "Rail, battery LI ION 48V/11250mAh/540Wh",
        "partprice": 16
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "RF-001",
        "partdescription": "REFLECTOR, REAR FENDER REAR",
        "partprice": 1.84
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "RF-002",
        "partdescription": "REFLECTOR, REAR FENDER RIGHT",
        "partprice": 2.72
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "RF-003",
        "partdescription": "REFLECTOR, REAR FENDER LEFT",
        "partprice": 2.72
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "RS-006",
        "partdescription": "RIM SET, 9.5 WHEEL",
        "partprice": 35
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "RSB-001",
        "partdescription": "RUBBER SEAT, BATTERY",
        "partprice": 0.6
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "RTR-001",
        "partdescription": "RETAINING RING , PU BUSHING",
        "partprice": 0.88
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "SA-006",
        "partdescription": "STEERING AXLE",
        "partprice": 33
    });
db.getCollection("parts").insert({
        "partgroup": "SHIPPING",
        "partcode": "SHIPFEE",
        "partdescription": "SHIPPING FEE",
        "partprice": 0
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "SKT-001",
        "partdescription": "SKIRT, LEFT (specify color, no stickers applied)",
        "partprice": 40
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "SKT-002",
        "partdescription": "SKIRT, RIGHT (specify color, no stickers applied)",
        "partprice": 40
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "SLB-001",
        "partdescription": "RUBBER STOPPER, BATTERY LOCK",
        "partprice": 0.6
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "SLC-001",
        "partdescription": "SLEEVE, CLAMP Ø16 x Ø11.8 x 12",
        "partprice": 3.36
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "SM-001",
        "partdescription": "SHIM, MAIN AXLE 04 36V - 48V",
        "partprice": 0.5
    });
db.getCollection("parts").insert({
        "partgroup": "FOLDING",
        "partcode": "SPL-001",
        "partdescription": "SPRING, FOLDING",
        "partprice": 0.48
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "SPS-005",
        "partdescription": "STEM POST SET, STEERING",
        "partprice": 16
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "SQR-001",
        "partdescription": "Seat, Quick Release",
        "partprice": 0.2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "SR-002",
        "partdescription": "SCISSOR, front structure",
        "partprice": 22
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "SRL-001",
        "partdescription": "SPACER, 48V RAIL",
        "partprice": 2.08
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "STK-005",
        "partdescription": "STICKER, warning",
        "partprice": "N/A"
    });
db.getCollection("parts").insert({
        "partgroup": "TRIM",
        "partcode": "STK-007",
        "partdescription": "Stickers, Trikke graphics - set for fairing, skirts",
        "partprice": 40
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "ST-PLUG",
        "partdescription": "HANDLEBAR PLUG",
        "partprice": 0.41
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "STS-001",
        "partdescription": "STEM SET, STEERING",
        "partprice": 32
    });
db.getCollection("parts").insert({
        "partgroup": "CUSTOM",
        "partcode": "SUG-001",
        "partdescription": "SUGRU PATCH",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "SW-013",
        "partdescription": "SPACER, WHEEL AXLE long",
        "partprice": 5.55
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "SW-014",
        "partdescription": "SPACER, WHEEL AXLE short",
        "partprice": 5
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "SW-015",
        "partdescription": "SPACER, WHEEL BEARING",
        "partprice": 0.7
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TB-003",
        "partdescription": "TUBE 8.5\"x 2\"",
        "partprice": 9.5
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TB-004",
        "partdescription": "TUBE 9.5\"x 2.5\"",
        "partprice": 15
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TB-005",
        "partdescription": "TUBE 10\"x 2.5\"",
        "partprice": 18
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TB-006",
        "partdescription": "TUBE 10\"x 2\"",
        "partprice": 13
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "TCO-001",
        "partdescription": "BATTERY, TOP COVER, PON-E 36V/48V",
        "partprice": 50.1
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "THI-001",
        "partdescription": "THIMBLE, battery lock",
        "partprice": 0.64
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TR-003",
        "partdescription": "TIRE 8.5\"x 2\"",
        "partprice": 15
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TR-004",
        "partdescription": "TIRE 10\"x 2\"",
        "partprice": 21
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TR-005",
        "partdescription": "TIRE 10\"x 2.5\"",
        "partprice": 42
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TR-006",
        "partdescription": "TIRE 9.5\"x 2.5\"",
        "partprice": 35
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "TRL-002",
        "partdescription": "THROTTLE SET, speed 36V (no grips, throttle only)",
        "partprice": 28
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "TRL-003",
        "partdescription": "THROTTLE SET, speed48V (no grips, throttle only) up to Dec 2013",
        "partprice": 28
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "TRL-005",
        "partdescription": "THROTTLE SET, speed48V (no grips, throttle only) from Dec 2013 on",
        "partprice": 35
    });
db.getCollection("parts").insert({
        "partgroup": "WHEEL",
        "partcode": "TVC-001",
        "partdescription": "CAP, TIRE VALVE",
        "partprice": 0.2
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "WA-001",
        "partdescription": "WASHER, CLAMP FRONT FORK",
        "partprice": 0.16
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "WA-003",
        "partdescription": "WASHER, PU BUSHING outside",
        "partprice": 0.96
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "WA-004",
        "partdescription": "WASHER, PU BUSHING inside",
        "partprice": 0.96
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "WA-005",
        "partdescription": "WASHER, PU BUSHING retaining",
        "partprice": 0.64
    });
db.getCollection("parts").insert({
        "partgroup": "STEERING",
        "partcode": "WA-006",
        "partdescription": "WASHER, HEADSET",
        "partprice": 0.56
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "WA-008",
        "partdescription": "WASHER, controller motor 36V",
        "partprice": 2
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "WA-009",
        "partdescription": "WASHER, controller box pan",
        "partprice": 0.8
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "WA-012",
        "partdescription": "WASHER, MAIN AXLE CLAMP",
        "partprice": 0.16
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "WIR-002",
        "partdescription": "SPEED SWITCH, With Wire",
        "partprice": 6.5
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "YBU-003",
        "partdescription": "BUSHING, YOKE",
        "partprice": 0.8
    });
db.getCollection("parts").insert({
        "partgroup": "CAMBERING",
        "partcode": "YKS-004",
        "partdescription": "YOKE SET",
        "partprice": 16.88
    });
db.getCollection("parts").insert({
        "partgroup": "ELECTRIC",
        "partcode": "ZCL-001",
        "partdescription": "Z CLAMP, controller motor 48V",
        "partprice": 4
    });
