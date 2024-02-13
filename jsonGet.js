
const jsonData = [
 {
  "S.No.": 1,
  "Code": "R10",
  "MCCD Description": "Abdominal and pelvic pain"
 },
 {
  "S.No.": 2,
  "Code": "R03",
  "MCCD Description": "Abnormal blood-pressure reading, without diagnosis"
 },
 {
  "S.No.": 3,
  "Code": "R83",
  "MCCD Description": "Abnormal findings in cerebrospinal fluid"
 },
 {
  "S.No.": 4,
  "Code": "R85",
  "MCCD Description": "Abnormal findings in specimens from digestive organs and abdominal cavity"
 },
 {
  "S.No.": 5,
  "Code": "R87",
  "MCCD Description": "Abnormal findings in specimens from female genital organs"
 },
 {
  "S.No.": 6,
  "Code": "R86",
  "MCCD Description": "Abnormal findings in specimens from male genital organs"
 },
 {
  "S.No.": 7,
  "Code": "R89",
  "MCCD Description": "Abnormal findings in specimens from other organs, systems and tissues"
 },
 {
  "S.No.": 8,
  "Code": "R84",
  "MCCD Description": "Abnormal findings in specimens from respiratory organs and thorax"
 },
 {
  "S.No.": 9,
  "Code": "O28",
  "MCCD Description": "Abnormal findings on antenatal screening of mother"
 },
 {
  "S.No.": 10,
  "Code": "R92",
  "MCCD Description": "Abnormal findings on diagnostic imaging of breast"
 },
 {
  "S.No.": 11,
  "Code": "R90",
  "MCCD Description": "Abnormal findings on diagnostic imaging of central nervous system"
 },
 {
  "S.No.": 12,
  "Code": "R91",
  "MCCD Description": "Abnormal findings on diagnostic imaging of lung"
 },
 {
  "S.No.": 13,
  "Code": "R93",
  "MCCD Description": "Abnormal findings on diagnostic imaging of other body structures"
 },
 {
  "S.No.": 14,
  "Code": "R25",
  "MCCD Description": "Abnormal involuntary movements"
 },
 {
  "S.No.": 15,
  "Code": "R94",
  "MCCD Description": "Abnormal results of function studies"
 },
 {
  "S.No.": 16,
  "Code": "R74",
  "MCCD Description": "Abnormal serum enzyme levels"
 },
 {
  "S.No.": 17,
  "Code": "R06",
  "MCCD Description": "Abnormalities of breathing"
 },
 {
  "S.No.": 18,
  "Code": "O62",
  "MCCD Description": "Abnormalities of forces of labour"
 },
 {
  "S.No.": 19,
  "Code": "R26",
  "MCCD Description": "Abnormalities of gait and mobility"
 },
 {
  "S.No.": 20,
  "Code": "R00",
  "MCCD Description": "Abnormalities of heart beat"
 },
 {
  "S.No.": 21,
  "Code": "R71",
  "MCCD Description": "Abnormality of red blood cells"
 },
 {
  "S.No.": 22,
  "Code": "R72",
  "MCCD Description": "Abnormality of white blood cells, not elsewhere classified"
 },
 {
  "S.No.": 23,
  "Code": "K61",
  "MCCD Description": "Abscess of anal and rectal regions"
 },
 {
  "S.No.": 24,
  "Code": "J85",
  "MCCD Description": "Abscess of lung and mediastinum"
 },
 {
  "S.No.": 25,
  "Code": "N91",
  "MCCD Description": "Absent, scanty and rare menstruation"
 },
 {
  "S.No.": 26,
  "Code": "F55",
  "MCCD Description": "Abuse of non-dependence-producing substances"
 },
 {
  "S.No.": 27,
  "Code": "L83",
  "MCCD Description": "Acanthosis nigricans"
 },
 {
  "S.No.": 28,
  "Code": "V93",
  "MCCD Description": "Accident on board watercraft without accident to watercraft, not causing drowning and submersion"
 },
 {
  "S.No.": 29,
  "Code": "V96",
  "MCCD Description": "Accident to nonpowered aircraft causing injury to occupant"
 },
 {
  "S.No.": 30,
  "Code": "V95",
  "MCCD Description": "Accident to powered aircraft causing injury to occupant"
 },
 {
  "S.No.": 31,
  "Code": "V90",
  "MCCD Description": "Accident to watercraft causing drowning and submersion"
 },
 {
  "S.No.": 32,
  "Code": "V91",
  "MCCD Description": "Accident to watercraft causing other injury"
 },
 {
  "S.No.": 33,
  "Code": "W65-W74",
  "MCCD Description": "Accidental drowning and submersion"
 },
 {
  "S.No.": 34,
  "Code": "W00-W19",
  "MCCD Description": "Accidental Falls"
 },
 {
  "S.No.": 35,
  "Code": "X45",
  "MCCD Description": "Accidental poisoning by and exposure to alcohol"
 },
 {
  "S.No.": 36,
  "Code": "X41",
  "MCCD Description": "Accidental poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and psych"
 },
 {
  "S.No.": 37,
  "Code": "X42",
  "MCCD Description": "Accidental poisoning by and exposure to narcotics and psychodysleptics [hallucinogens], not elsewher"
 },
 {
  "S.No.": 38,
  "Code": "X40",
  "MCCD Description": "Accidental poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics"
 },
 {
  "S.No.": 39,
  "Code": "X40-X49",
  "MCCD Description": "Accidental poisoning by and exposure to noxious substances"
 },
 {
  "S.No.": 40,
  "Code": "X46",
  "MCCD Description": "Accidental poisoning by and exposure to organic solvents and halogenated hydrocarbons and their vapo"
 },
 {
  "S.No.": 41,
  "Code": "X49",
  "MCCD Description": "Accidental poisoning by and exposure to other and unspecified chemicals and noxious substances"
 },
 {
  "S.No.": 42,
  "Code": "X44",
  "MCCD Description": "Accidental poisoning by and exposure to other and unspecified drugs, medicaments and biological subs"
 },
 {
  "S.No.": 43,
  "Code": "X43",
  "MCCD Description": "Accidental poisoning by and exposure to other drugs acting on the autonomic nervous system"
 },
 {
  "S.No.": 44,
  "Code": "X47",
  "MCCD Description": "Accidental poisoning by and exposure to other gases and vapours"
 },
 {
  "S.No.": 45,
  "Code": "X48",
  "MCCD Description": "Accidental poisoning by and exposure to pesticides"
 },
 {
  "S.No.": 46,
  "Code": "W75",
  "MCCD Description": "Accidental suffocation and strangulation in bed"
 },
 {
  "S.No.": 47,
  "Code": "W32-W34",
  "MCCD Description": "Accidents caused by firearm missile"
 },
 {
  "S.No.": 48,
  "Code": "W24-W31",
  "MCCD Description": "Accidents caused by machinery, and by cutting & piercing instruments"
 },
 {
  "S.No.": 49,
  "Code": "L70",
  "MCCD Description": "Acne"
 },
 {
  "S.No.": 50,
  "Code": "M20",
  "MCCD Description": "Acquired deformities of fingers and toes"
 },
 {
  "S.No.": 51,
  "Code": "D59",
  "MCCD Description": "Acquired haemolytic anaemia"
 },
 {
  "S.No.": 52,
  "Code": "D60",
  "MCCD Description": "Acquired pure red cell aplasia [erythroblastopenia]"
 },
 {
  "S.No.": 53,
  "Code": "A42",
  "MCCD Description": "Actinomycosis"
 },
 {
  "S.No.": 54,
  "Code": "I33",
  "MCCD Description": "Acute and subacute endocarditis"
 },
 {
  "S.No.": 55,
  "Code": "F23",
  "MCCD Description": "Acute and transient psychotic disorders"
 },
 {
  "S.No.": 56,
  "Code": "K35",
  "MCCD Description": "Acute appendicitis"
 },
 {
  "S.No.": 57,
  "Code": "J21",
  "MCCD Description": "Acute bronchiolitis"
 },
 {
  "S.No.": 58,
  "Code": "J20",
  "MCCD Description": "Acute bronchitis"
 },
 {
  "S.No.": 59,
  "Code": "J20-J21",
  "MCCD Description": "Acute bronchitis and acute bronchiolitis"
 },
 {
  "S.No.": 60,
  "Code": "B15",
  "MCCD Description": "Acute hepatitis A"
 },
 {
  "S.No.": 61,
  "Code": "B16",
  "MCCD Description": "Acute Hepatitis B"
 },
 {
  "S.No.": 62,
  "Code": "J04",
  "MCCD Description": "Acute laryngitis and tracheitis"
 },
 {
  "S.No.": 63,
  "Code": "L04",
  "MCCD Description": "Acute lymphadenitis"
 },
 {
  "S.No.": 64,
  "Code": "I21-I22",
  "MCCD Description": "Acute myocardial infarction"
 },
 {
  "S.No.": 65,
  "Code": "I21",
  "MCCD Description": "Acute myocardial infarction"
 },
 {
  "S.No.": 66,
  "Code": "I40",
  "MCCD Description": "Acute myocarditis"
 },
 {
  "S.No.": 67,
  "Code": "J00",
  "MCCD Description": "Acute nasopharyngitis [common cold]"
 },
 {
  "S.No.": 68,
  "Code": "N00",
  "MCCD Description": "Acute nephritic syndrome"
 },
 {
  "S.No.": 69,
  "Code": "J05",
  "MCCD Description": "Acute obstructive laryngitis [croup] and epiglottitis"
 },
 {
  "S.No.": 70,
  "Code": "K85",
  "MCCD Description": "Acute pancreatitis"
 },
 {
  "S.No.": 71,
  "Code": "I30",
  "MCCD Description": "Acute pericarditis"
 },
 {
  "S.No.": 72,
  "Code": "J02",
  "MCCD Description": "Acute pharyngitis"
 },
 {
  "S.No.": 73,
  "Code": "J02-J03",
  "MCCD Description": "Acute pharyngitis and acute tonsillitis"
 },
 {
  "S.No.": 74,
  "Code": "A80",
  "MCCD Description": "Acute poliomyelitis"
 },
 {
  "S.No.": 75,
  "Code": "D62",
  "MCCD Description": "Acute posthaemorrhagic anaemia"
 },
 {
  "S.No.": 76,
  "Code": "N17",
  "MCCD Description": "Acute renal failure"
 },
 {
  "S.No.": 77,
  "Code": "I00-I02",
  "MCCD Description": "Acute rheumatic fever"
 },
 {
  "S.No.": 78,
  "Code": "J01",
  "MCCD Description": "Acute sinusitis"
 },
 {
  "S.No.": 79,
  "Code": "J03",
  "MCCD Description": "Acute tonsillitis"
 },
 {
  "S.No.": 80,
  "Code": "N10",
  "MCCD Description": "Acute tubulo-interstitial nephritis"
 },
 {
  "S.No.": 81,
  "Code": "J06",
  "MCCD Description": "Acute upper respiratory infections of multiple and unspecified sites"
 },
 {
  "S.No.": 82,
  "Code": "E25",
  "MCCD Description": "Adrenogenital disorders"
 },
 {
  "S.No.": 83,
  "Code": "M83",
  "MCCD Description": "Adult osteomalacia"
 },
 {
  "S.No.": 84,
  "Code": "J80",
  "MCCD Description": "Adult respiratory distress syndrome"
 },
 {
  "S.No.": 85,
  "Code": "T78",
  "MCCD Description": "Adverse effects, not elsewhere classified"
 },
 {
  "S.No.": 86,
  "Code": "B56",
  "MCCD Description": "African trypanosomiasis"
 },
 {
  "S.No.": 87,
  "Code": "Y55",
  "MCCD Description": "Agents primarily acting on smooth and skeletal muscles and the respiratory system"
 },
 {
  "S.No.": 88,
  "Code": "Y44",
  "MCCD Description": "Agents primarily affecting blood constituents"
 },
 {
  "S.No.": 89,
  "Code": "Y52",
  "MCCD Description": "Agents primarily affecting the cardiovascular system"
 },
 {
  "S.No.": 90,
  "Code": "Y53",
  "MCCD Description": "Agents primarily affecting the gastrointestinal system"
 },
 {
  "S.No.": 91,
  "Code": "Y54",
  "MCCD Description": "Agents primarily affecting water-balance and mineral and uric acid metabolism"
 },
 {
  "S.No.": 92,
  "Code": "D70",
  "MCCD Description": "Agranulocytosis"
 },
 {
  "S.No.": 93,
  "Code": "V95-V97",
  "MCCD Description": "Air & Space transport accidents"
 },
 {
  "S.No.": 94,
  "Code": "J66",
  "MCCD Description": "Airway disease due to specific organic dust"
 },
 {
  "S.No.": 95,
  "Code": "K70",
  "MCCD Description": "Alcoholic liver disease"
 },
 {
  "S.No.": 96,
  "Code": "B35-B49,B76, B85-B99",
  "MCCD Description": "All other  infectious & parasitic diseases and late effects of infectious & parasitic diseases"
 },
 {
  "S.No.": 97,
  "Code": "R00-R09,R11-R17,R19-R39,R41-R49,R51-R53,R58-R99",
  "MCCD Description": "All other  symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified"
 },
 {
  "S.No.": 98,
  "Code": "W20-W23,W35-W64, W75-W99,X10-X19,X28-X31, X33-X39 & X50-X59",
  "MCCD Description": "All other accidents including late effects"
 },
 {
  "S.No.": 99,
  "Code": "D10-D24 & D26-D36",
  "MCCD Description": "All other benign neoplasms"
 },
 {
  "S.No.": 100,
  "Code": "P00-P04,P08,P29-P54,P56-P57,P60-P96",
  "MCCD Description": "All other conditions originating in the perinatal period"
 },
 {
  "S.No.": 101,
  "Code": "Q00-Q04,Q06-Q18,Q30-Q34 & Q38-Q99",
  "MCCD Description": "All other congenital malformations, deformations and chromosomal abnormalities, not elsewhere classi"
 },
 {
  "S.No.": 102,
  "Code": "D65-D76",
  "MCCD Description": "All other diseases of blood and blood-forming organs"
 },
 {
  "S.No.": 103,
  "Code": "N60-N64 & N71-N99",
  "MCCD Description": "All other diseases of female genital organs"
 },
 {
  "S.No.": 104,
  "Code": "N41-N50",
  "MCCD Description": "All other diseases of male genital organs"
 },
 {
  "S.No.": 105,
  "Code": "I83-I99",
  "MCCD Description": "All other diseases of the circulatory system"
 },
 {
  "S.No.": 106,
  "Code": "M00-M02, M15-M85,M87-M99",
  "MCCD Description": "All other diseases of the musculoskeletal system and connective tissue"
 },
 {
  "S.No.": 107,
  "Code": "G10-G25,G31,G35-G37,G43-G98",
  "MCCD Description": "All other diseases of the nervous system"
 },
 {
  "S.No.": 108,
  "Code": "K20-K22,K28,K30-K31,K50-K55,K57-K63,K66,K82-K83 & K90-K92",
  "MCCD Description": "All other diseases of the other parts of digestive system"
 },
 {
  "S.No.": 109,
  "Code": "J60-J86,J92-J98",
  "MCCD Description": "All other diseases of the respiratory system"
 },
 {
  "S.No.": 110,
  "Code": "L10-L98",
  "MCCD Description": "All other diseases of the skin and subcutaneous tissue"
 },
 {
  "S.No.": 111,
  "Code": "J30-J39",
  "MCCD Description": "All other diseases of upper respiratory tract"
 },
 {
  "S.No.": 112,
  "Code": "N30-N39",
  "MCCD Description": "All other diseases of urinary system"
 },
 {
  "S.No.": 113,
  "Code": "E15-E34 & E65-E89",
  "MCCD Description": "All other endocrine  and  metabolic diseases"
 },
 {
  "S.No.": 114,
  "Code": "I10, I12-I15",
  "MCCD Description": "All other hypertensive diseases"
 },
 {
  "S.No.": 115,
  "Code": "I20 & I23-I25",
  "MCCD Description": "All other ischaemic heart diseases"
 },
 {
  "S.No.": 116,
  "Code": "F01-F09,F30-F99",
  "MCCD Description": "All other mental and behavioural disorders"
 },
 {
  "S.No.": 117,
  "Code": "E50-E64",
  "MCCD Description": "All other nutritional deficiencies"
 },
 {
  "S.No.": 118,
  "Code": "O95-O97",
  "MCCD Description": "All other obstetric conditions, not elsewhere classified"
 },
 {
  "S.No.": 119,
  "Code": "V09-V09,V19-V19,V29-V29,V39-V39,V49-V49,V59-V59,V69-V69",
  "MCCD Description": "All other transport accidents "
 },
 {
  "S.No.": 120,
  "Code": "A21-A28,A31-A32,A38, A42-A49",
  "MCCD Description": "All other types of bacterial diseases"
 },
 {
  "S.No.": 121,
  "Code": "B55-B64",
  "MCCD Description": "All other types of protozoal diseases"
 },
 {
  "S.No.": 122,
  "Code": "A70-A74,A81,A87-A89,A95,B00-B02,B04,B06-B09 & B25-B34",
  "MCCD Description": "All other types of viral diseases"
 },
 {
  "S.No.": 123,
  "Code": "L23",
  "MCCD Description": "Allergic contact dermatitis"
 },
 {
  "S.No.": 124,
  "Code": "L63",
  "MCCD Description": "Alopecia areata"
 },
 {
  "S.No.": 125,
  "Code": "G30",
  "MCCD Description": "Alzheimer's disease"
 },
 {
  "S.No.": 126,
  "Code": "A06",
  "MCCD Description": "Amoebiasis"
 },
 {
  "S.No.": 127,
  "Code": "E85",
  "MCCD Description": "Amyloidosis"
 },
 {
  "S.No.": 128,
  "Code": "D55",
  "MCCD Description": "Anaemia due to enzyme disorders"
 },
 {
  "S.No.": 129,
  "Code": "D63",
  "MCCD Description": "Anaemia in chronic diseases classified elsewhere"
 },
 {
  "S.No.": 130,
  "Code": "Y70",
  "MCCD Description": "Anaesthesiology devices associated with adverse incidents"
 },
 {
  "S.No.": 131,
  "Code": "Y48",
  "MCCD Description": "Anaesthetics and therapeutic gases"
 },
 {
  "S.No.": 132,
  "Code": "Y45",
  "MCCD Description": "Analgesics, antipyretics and anti-inflammatory drugs"
 },
 {
  "S.No.": 133,
  "Code": "L64",
  "MCCD Description": "Androgenic alopecia"
 },
 {
  "S.No.": 134,
  "Code": "Q00",
  "MCCD Description": "Anencephaly and similar malformations"
 },
 {
  "S.No.": 135,
  "Code": "I20",
  "MCCD Description": "Angina pectoris"
 },
 {
  "S.No.": 136,
  "Code": "M45",
  "MCCD Description": "Ankylosing spondylitis"
 },
 {
  "S.No.": 137,
  "Code": "A60",
  "MCCD Description": "Anogenital herpesviral [herpes simplex] infection"
 },
 {
  "S.No.": 138,
  "Code": "Q11",
  "MCCD Description": "Anophthalmos, microphthalmos and macrophthalmos"
 },
 {
  "S.No.": 139,
  "Code": "O46",
  "MCCD Description": "Antepartum haemorrhage, not elsewhere classified"
 },
 {
  "S.No.": 140,
  "Code": "A22",
  "MCCD Description": "Anthrax"
 },
 {
  "S.No.": 141,
  "Code": "Y46",
  "MCCD Description": "Antiepileptics and antiparkinsonism drugs"
 },
 {
  "S.No.": 142,
  "Code": "R34",
  "MCCD Description": "Anuria and oliguria"
 },
 {
  "S.No.": 143,
  "Code": "I71",
  "MCCD Description": "Aortic aneurysm and dissection"
 },
 {
  "S.No.": 144,
  "Code": "L75",
  "MCCD Description": "Apocrine sweat disorders"
 },
 {
  "S.No.": 145,
  "Code": "A96",
  "MCCD Description": "Arenaviral haemorrhagic fever"
 },
 {
  "S.No.": 146,
  "Code": "I74",
  "MCCD Description": "Arterial embolism and thrombosis"
 },
 {
  "S.No.": 147,
  "Code": "M18",
  "MCCD Description": "Arthrosis of first carpometacarpal joint"
 },
 {
  "S.No.": 148,
  "Code": "B77",
  "MCCD Description": "Ascariasis"
 },
 {
  "S.No.": 149,
  "Code": "R18",
  "MCCD Description": "Ascites"
 },
 {
  "S.No.": 150,
  "Code": "E54",
  "MCCD Description": "Ascorbic acid deficiency"
 },
 {
  "S.No.": 151,
  "Code": "B44",
  "MCCD Description": "Aspergillosis"
 },
 {
  "S.No.": 152,
  "Code": "T71",
  "MCCD Description": "Asphyxiation"
 },
 {
  "S.No.": 153,
  "Code": "X85-Y09",
  "MCCD Description": "Assault  Homicide"
 },
 {
  "S.No.": 154,
  "Code": "Y00",
  "MCCD Description": "Assault by blunt object"
 },
 {
  "S.No.": 155,
  "Code": "Y04",
  "MCCD Description": "Assault by bodily force"
 },
 {
  "S.No.": 156,
  "Code": "X86",
  "MCCD Description": "Assault by corrosive substance"
 },
 {
  "S.No.": 157,
  "Code": "Y03",
  "MCCD Description": "Assault by crashing of motor vehicle"
 },
 {
  "S.No.": 158,
  "Code": "X92",
  "MCCD Description": "Assault by drowning and submersion"
 },
 {
  "S.No.": 159,
  "Code": "X85",
  "MCCD Description": "Assault by drugs, medicaments and biological substances"
 },
 {
  "S.No.": 160,
  "Code": "X96",
  "MCCD Description": "Assault by explosive material"
 },
 {
  "S.No.": 161,
  "Code": "X88",
  "MCCD Description": "Assault by gases and vapours"
 },
 {
  "S.No.": 162,
  "Code": "X93",
  "MCCD Description": "Assault by handgun discharge"
 },
 {
  "S.No.": 163,
  "Code": "X91",
  "MCCD Description": "Assault by hanging, strangulation and suffocation"
 },
 {
  "S.No.": 164,
  "Code": "X95",
  "MCCD Description": "Assault by other and unspecified firearm discharge"
 },
 {
  "S.No.": 165,
  "Code": "X89",
  "MCCD Description": "Assault by other specified chemicals and noxious substances"
 },
 {
  "S.No.": 166,
  "Code": "Y08",
  "MCCD Description": "Assault by other specified means"
 },
 {
  "S.No.": 167,
  "Code": "X87",
  "MCCD Description": "Assault by pesticides"
 },
 {
  "S.No.": 168,
  "Code": "Y01",
  "MCCD Description": "Assault by pushing from high place"
 },
 {
  "S.No.": 169,
  "Code": "Y02",
  "MCCD Description": "Assault by pushing or placing victim before moving object"
 },
 {
  "S.No.": 170,
  "Code": "X94",
  "MCCD Description": "Assault by rifle, shotgun and larger firearm discharge"
 },
 {
  "S.No.": 171,
  "Code": "X99",
  "MCCD Description": "Assault by sharp object"
 },
 {
  "S.No.": 172,
  "Code": "X97",
  "MCCD Description": "Assault by smoke, fire and flames"
 },
 {
  "S.No.": 173,
  "Code": "X98",
  "MCCD Description": "Assault by steam, hot vapours and hot objects"
 },
 {
  "S.No.": 174,
  "Code": "X90",
  "MCCD Description": "Assault by unspecified chemical or noxious substance"
 },
 {
  "S.No.": 175,
  "Code": "Y09",
  "MCCD Description": "Assault by unspecified means"
 },
 {
  "S.No.": 176,
  "Code": "J45-J46",
  "MCCD Description": "Asthma"
 },
 {
  "S.No.": 177,
  "Code": "J45",
  "MCCD Description": "Asthma"
 },
 {
  "S.No.": 178,
  "Code": "I70",
  "MCCD Description": "Atherosclerosis"
 },
 {
  "S.No.": 179,
  "Code": "L20",
  "MCCD Description": "Atopic dermatitis"
 },
 {
  "S.No.": 180,
  "Code": "I48",
  "MCCD Description": "Atrial fibrillation and flutter"
 },
 {
  "S.No.": 181,
  "Code": "I44",
  "MCCD Description": "Atrioventricular and left bundle-branch block"
 },
 {
  "S.No.": 182,
  "Code": "L90",
  "MCCD Description": "Atrophic disorders of skin"
 },
 {
  "S.No.": 183,
  "Code": "A81",
  "MCCD Description": "Atypical virus infections of central nervous system"
 },
 {
  "S.No.": 184,
  "Code": "A49",
  "MCCD Description": "Bacterial infection of unspecified site"
 },
 {
  "S.No.": 185,
  "Code": "G00",
  "MCCD Description": "Bacterial meningitis, not elsewhere classified"
 },
 {
  "S.No.": 186,
  "Code": "J15",
  "MCCD Description": "Bacterial pneumonia, not elsewhere classified"
 },
 {
  "S.No.": 187,
  "Code": "P36",
  "MCCD Description": "Bacterial sepsis of newborn"
 },
 {
  "S.No.": 188,
  "Code": "Y58",
  "MCCD Description": "Bacterial vaccines"
 },
 {
  "S.No.": 189,
  "Code": "Q95",
  "MCCD Description": "Balanced rearrangements and structural markers, not elsewhere classified"
 },
 {
  "S.No.": 190,
  "Code": "A44",
  "MCCD Description": "Bartonellosis"
 },
 {
  "S.No.": 191,
  "Code": "D17",
  "MCCD Description": "Benign lipomatous neoplasm"
 },
 {
  "S.No.": 192,
  "Code": "N60",
  "MCCD Description": "Benign mammary dysplasia"
 },
 {
  "S.No.": 193,
  "Code": "D16",
  "MCCD Description": "Benign neoplasm of bone and articular cartilage"
 },
 {
  "S.No.": 194,
  "Code": "D33",
  "MCCD Description": "Benign neoplasm of brain and other parts of central nervous system"
 },
 {
  "S.No.": 195,
  "Code": "D24",
  "MCCD Description": "Benign neoplasm of breast"
 },
 {
  "S.No.": 196,
  "Code": "D12",
  "MCCD Description": "Benign neoplasm of colon, rectum, anus and anal canal"
 },
 {
  "S.No.": 197,
  "Code": "D31",
  "MCCD Description": "Benign neoplasm of eye and adnexa"
 },
 {
  "S.No.": 198,
  "Code": "D11",
  "MCCD Description": "Benign neoplasm of major salivary glands"
 },
 {
  "S.No.": 199,
  "Code": "D29",
  "MCCD Description": "Benign neoplasm of male genital organs"
 },
 {
  "S.No.": 200,
  "Code": "D32",
  "MCCD Description": "Benign neoplasm of meninges"
 },
 {
  "S.No.": 201,
  "Code": "D19",
  "MCCD Description": "Benign neoplasm of mesothelial tissue"
 },
 {
  "S.No.": 202,
  "Code": "D14",
  "MCCD Description": "Benign neoplasm of middle ear and respiratory system"
 },
 {
  "S.No.": 203,
  "Code": "D10",
  "MCCD Description": "Benign neoplasm of mouth and pharynx"
 },
 {
  "S.No.": 204,
  "Code": "D13",
  "MCCD Description": "Benign neoplasm of other and ill-defined parts of digestive system"
 },
 {
  "S.No.": 205,
  "Code": "D35",
  "MCCD Description": "Benign neoplasm of other and unspecified endocrine glands"
 },
 {
  "S.No.": 206,
  "Code": "D28",
  "MCCD Description": "Benign neoplasm of other and unspecified female genital organs"
 },
 {
  "S.No.": 207,
  "Code": "D15",
  "MCCD Description": "Benign neoplasm of other and unspecified intrathoracic organs"
 },
 {
  "S.No.": 208,
  "Code": "D36",
  "MCCD Description": "Benign neoplasm of other and unspecified sites"
 },
 {
  "S.No.": 209,
  "Code": "D27",
  "MCCD Description": "Benign neoplasm of ovary"
 },
 {
  "S.No.": 210,
  "Code": "D20",
  "MCCD Description": "Benign neoplasm of soft tissue of retroperitoneum and peritoneum"
 },
 {
  "S.No.": 211,
  "Code": "D34",
  "MCCD Description": "Benign neoplasm of thyroid gland"
 },
 {
  "S.No.": 212,
  "Code": "D30",
  "MCCD Description": "Benign neoplasm of urinary organs"
 },
 {
  "S.No.": 213,
  "Code": "M99",
  "MCCD Description": "Biomechanical lesions, not elsewhere classified"
 },
 {
  "S.No.": 214,
  "Code": "F31",
  "MCCD Description": "Bipolar affective disorder"
 },
 {
  "S.No.": 215,
  "Code": "P21",
  "MCCD Description": "Birth asphyxia"
 },
 {
  "S.No.": 216,
  "Code": "P14",
  "MCCD Description": "Birth injury to peripheral nervous system"
 },
 {
  "S.No.": 217,
  "Code": "P12",
  "MCCD Description": "Birth injury to scalp"
 },
 {
  "S.No.": 218,
  "Code": "P13",
  "MCCD Description": "Birth injury to skeleton"
 },
 {
  "S.No.": 219,
  "Code": "P10-P15",
  "MCCD Description": "Birth trauma"
 },
 {
  "S.No.": 220,
  "Code": "X20-X27",
  "MCCD Description": "Bites of snakes & other venomous animals"
 },
 {
  "S.No.": 221,
  "Code": "W53",
  "MCCD Description": "Bitten by rat"
 },
 {
  "S.No.": 222,
  "Code": "W59",
  "MCCD Description": "Bitten or crushed by other reptiles"
 },
 {
  "S.No.": 223,
  "Code": "W58",
  "MCCD Description": "Bitten or struck by crocodile or alligator"
 },
 {
  "S.No.": 224,
  "Code": "W54",
  "MCCD Description": "Bitten or struck by dog"
 },
 {
  "S.No.": 225,
  "Code": "W55",
  "MCCD Description": "Bitten or struck by other mammals"
 },
 {
  "S.No.": 226,
  "Code": "W57",
  "MCCD Description": "Bitten or stung by nonvenomous insect and other nonvenomous arthropods"
 },
 {
  "S.No.": 227,
  "Code": "N33",
  "MCCD Description": "Bladder disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 228,
  "Code": "B40",
  "MCCD Description": "Blastomycosis"
 },
 {
  "S.No.": 229,
  "Code": "H54",
  "MCCD Description": "Blindness and low vision"
 },
 {
  "S.No.": 230,
  "Code": "J47",
  "MCCD Description": "Bronchiectasis"
 },
 {
  "S.No.": 231,
  "Code": "J40-J43",
  "MCCD Description": "Bronchitis, chronic and unspecified, emphysema"
 },
 {
  "S.No.": 232,
  "Code": "J40",
  "MCCD Description": "Bronchitis, not specified as acute or chronic"
 },
 {
  "S.No.": 233,
  "Code": "A23",
  "MCCD Description": "Brucellosis"
 },
 {
  "S.No.": 234,
  "Code": "L14",
  "MCCD Description": "Bullous disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 235,
  "Code": "T26",
  "MCCD Description": "Burn and corrosion confined to eye and adnexa"
 },
 {
  "S.No.": 236,
  "Code": "T25",
  "MCCD Description": "Burn and corrosion of ankle and foot"
 },
 {
  "S.No.": 237,
  "Code": "T20",
  "MCCD Description": "Burn and corrosion of head and neck"
 },
 {
  "S.No.": 238,
  "Code": "T24",
  "MCCD Description": "Burn and corrosion of hip and lower limb, except ankle and foot"
 },
 {
  "S.No.": 239,
  "Code": "T28",
  "MCCD Description": "Burn and corrosion of other internal organs"
 },
 {
  "S.No.": 240,
  "Code": "T27",
  "MCCD Description": "Burn and corrosion of respiratory tract"
 },
 {
  "S.No.": 241,
  "Code": "T22",
  "MCCD Description": "Burn and corrosion of shoulder and upper limb, except wrist and hand"
 },
 {
  "S.No.": 242,
  "Code": "T21",
  "MCCD Description": "Burn and corrosion of trunk"
 },
 {
  "S.No.": 243,
  "Code": "T23",
  "MCCD Description": "Burn and corrosion of wrist and hand"
 },
 {
  "S.No.": 244,
  "Code": "T30",
  "MCCD Description": "Burn and corrosion, body region unspecified"
 },
 {
  "S.No.": 245,
  "Code": "T20-T32",
  "MCCD Description": "Burns and Corrosions"
 },
 {
  "S.No.": 246,
  "Code": "T29",
  "MCCD Description": "Burns and corrosions of multiple body regions"
 },
 {
  "S.No.": 247,
  "Code": "T31",
  "MCCD Description": "Burns classified according to extent of body surface involved"
 },
 {
  "S.No.": 248,
  "Code": "V79.8",
  "MCCD Description": "Bus occupant [any] injured in other specified transport accidents"
 },
 {
  "S.No.": 249,
  "Code": "V79.3",
  "MCCD Description": "Bus occupant [any] injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 250,
  "Code": "V79.9",
  "MCCD Description": "Bus occupant [any] injured in unspecified traffic accident"
 },
 {
  "S.No.": 251,
  "Code": "V73",
  "MCCD Description": "Bus occupant injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 252,
  "Code": "V77",
  "MCCD Description": "Bus occupant injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 253,
  "Code": "V74",
  "MCCD Description": "Bus occupant injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 254,
  "Code": "V76",
  "MCCD Description": "Bus occupant injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 255,
  "Code": "V71",
  "MCCD Description": "Bus occupant injured in collision with pedal cycle"
 },
 {
  "S.No.": 256,
  "Code": "V70",
  "MCCD Description": "Bus occupant injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 257,
  "Code": "V75",
  "MCCD Description": "Bus occupant injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 258,
  "Code": "V72",
  "MCCD Description": "Bus occupant injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 259,
  "Code": "V78",
  "MCCD Description": "Bus occupant injured in noncollision transport accident"
 },
 {
  "S.No.": 260,
  "Code": "R64",
  "MCCD Description": "Cachexia"
 },
 {
  "S.No.": 261,
  "Code": "M61",
  "MCCD Description": "Calcification and ossification of muscle"
 },
 {
  "S.No.": 262,
  "Code": "N20",
  "MCCD Description": "Calculus of kidney and ureter"
 },
 {
  "S.No.": 263,
  "Code": "N21",
  "MCCD Description": "Calculus of lower urinary tract"
 },
 {
  "S.No.": 264,
  "Code": "N22",
  "MCCD Description": "Calculus of urinary tract in diseases classified elsewhere"
 },
 {
  "S.No.": 265,
  "Code": "B37",
  "MCCD Description": "Candidiasis"
 },
 {
  "S.No.": 266,
  "Code": "V49.8",
  "MCCD Description": "Car occupant [any] injured in other specified transport accidents"
 },
 {
  "S.No.": 267,
  "Code": "V49.3",
  "MCCD Description": "Car occupant [any] injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 268,
  "Code": "V49.9",
  "MCCD Description": "Car occupant [any] injured in unspecified traffic accident"
 },
 {
  "S.No.": 269,
  "Code": "V43",
  "MCCD Description": "Car occupant injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 270,
  "Code": "V47",
  "MCCD Description": "Car occupant injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 271,
  "Code": "V44",
  "MCCD Description": "Car occupant injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 272,
  "Code": "V46",
  "MCCD Description": "Car occupant injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 273,
  "Code": "V41",
  "MCCD Description": "Car occupant injured in collision with pedal cycle"
 },
 {
  "S.No.": 274,
  "Code": "V40",
  "MCCD Description": "Car occupant injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 275,
  "Code": "V45",
  "MCCD Description": "Car occupant injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 276,
  "Code": "V42",
  "MCCD Description": "Car occupant injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 277,
  "Code": "V48",
  "MCCD Description": "Car occupant injured in noncollision transport accident"
 },
 {
  "S.No.": 278,
  "Code": "D00-D09",
  "MCCD Description": "Carcinoma in situ "
 },
 {
  "S.No.": 279,
  "Code": "D05",
  "MCCD Description": "Carcinoma in situ of breast"
 },
 {
  "S.No.": 280,
  "Code": "D06",
  "MCCD Description": "Carcinoma in situ of cervix uteri"
 },
 {
  "S.No.": 281,
  "Code": "D02",
  "MCCD Description": "Carcinoma in situ of middle ear and respiratory system"
 },
 {
  "S.No.": 282,
  "Code": "D00",
  "MCCD Description": "Carcinoma in situ of oral cavity, oesophagus and stomach"
 },
 {
  "S.No.": 283,
  "Code": "D01",
  "MCCD Description": "Carcinoma in situ of other and unspecified digestive organs"
 },
 {
  "S.No.": 284,
  "Code": "D07",
  "MCCD Description": "Carcinoma in situ of other and unspecified genital organs"
 },
 {
  "S.No.": 285,
  "Code": "D09",
  "MCCD Description": "Carcinoma in situ of other and unspecified sites"
 },
 {
  "S.No.": 286,
  "Code": "D04",
  "MCCD Description": "Carcinoma in situ of skin"
 },
 {
  "S.No.": 287,
  "Code": "I46",
  "MCCD Description": "Cardiac arrest"
 },
 {
  "S.No.": 288,
  "Code": "R01",
  "MCCD Description": "Cardiac murmurs and other cardiac sounds"
 },
 {
  "S.No.": 289,
  "Code": "I42",
  "MCCD Description": "Cardiomyopathy"
 },
 {
  "S.No.": 290,
  "Code": "I43",
  "MCCD Description": "Cardiomyopathy in diseases classified elsewhere"
 },
 {
  "S.No.": 291,
  "Code": "Y71",
  "MCCD Description": "Cardiovascular devices associated with adverse incidents"
 },
 {
  "S.No.": 292,
  "Code": "P29",
  "MCCD Description": "Cardiovascular disorders originating in the perinatal period"
 },
 {
  "S.No.": 293,
  "Code": "H28",
  "MCCD Description": "Cataract and other disorders of lens in diseases classified elsewhere"
 },
 {
  "S.No.": 294,
  "Code": "W23",
  "MCCD Description": "Caught, crushed, jammed or pinched in or between objects"
 },
 {
  "S.No.": 295,
  "Code": "L03",
  "MCCD Description": "Cellulitis"
 },
 {
  "S.No.": 296,
  "Code": "Y50",
  "MCCD Description": "Central nervous system stimulants, not elsewhere classified"
 },
 {
  "S.No.": 297,
  "Code": "I63",
  "MCCD Description": "Cerebral infarction"
 },
 {
  "S.No.": 298,
  "Code": "I60-I69",
  "MCCD Description": "Cerebrovascular diseases"
 },
 {
  "S.No.": 299,
  "Code": "I68",
  "MCCD Description": "Cerebrovascular disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 300,
  "Code": "I23",
  "MCCD Description": "Certain current complications following acute myocardial infarction"
 },
 {
  "S.No.": 301,
  "Code": "D76",
  "MCCD Description": "Certain diseases involving lymphoreticular tissue and reticulohistiocytic system"
 },
 {
  "S.No.": 302,
  "Code": "D80-D89",
  "MCCD Description": "Certain disorders involving the immune mechanism"
 },
 {
  "S.No.": 303,
  "Code": "T79",
  "MCCD Description": "Certain early complications of trauma, not elsewhere classified"
 },
 {
  "S.No.": 304,
  "Code": "M50",
  "MCCD Description": "Cervical disc disorders"
 },
 {
  "S.No.": 305,
  "Code": "B57",
  "MCCD Description": "Chagas disease"
 },
 {
  "S.No.": 306,
  "Code": "A57",
  "MCCD Description": "Chancroid"
 },
 {
  "S.No.": 307,
  "Code": "A70",
  "MCCD Description": "Chlamydia psittaci infection"
 },
 {
  "S.No.": 308,
  "Code": "A55",
  "MCCD Description": "Chlamydial lymphogranuloma (venereum)"
 },
 {
  "S.No.": 309,
  "Code": "K81",
  "MCCD Description": "Cholecystitis"
 },
 {
  "S.No.": 310,
  "Code": "K80",
  "MCCD Description": "Cholelithiasis"
 },
 {
  "S.No.": 311,
  "Code": "K80-K81",
  "MCCD Description": "Cholelithiasis and cholecystitis"
 },
 {
  "S.No.": 312,
  "Code": "A00",
  "MCCD Description": "Cholera"
 },
 {
  "S.No.": 313,
  "Code": "H71",
  "MCCD Description": "Cholesteatoma of middle ear"
 },
 {
  "S.No.": 314,
  "Code": "H32",
  "MCCD Description": "Chorioretinal disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 315,
  "Code": "H30",
  "MCCD Description": "Chorioretinal inflammation"
 },
 {
  "S.No.": 316,
  "Code": "B43",
  "MCCD Description": "Chromomycosis and phaeomycotic abscess"
 },
 {
  "S.No.": 317,
  "Code": "J35",
  "MCCD Description": "Chronic diseases of tonsils and adenoids"
 },
 {
  "S.No.": 318,
  "Code": "K73",
  "MCCD Description": "Chronic hepatitis, not elsewhere classified"
 },
 {
  "S.No.": 319,
  "Code": "I25",
  "MCCD Description": "Chronic ischaemic heart disease"
 },
 {
  "S.No.": 320,
  "Code": "J37",
  "MCCD Description": "Chronic laryngitis and laryngotracheitis"
 },
 {
  "S.No.": 321,
  "Code": "N03",
  "MCCD Description": "Chronic nephritic syndrome"
 },
 {
  "S.No.": 322,
  "Code": "N18",
  "MCCD Description": "Chronic renal failure"
 },
 {
  "S.No.": 323,
  "Code": "P27",
  "MCCD Description": "Chronic respiratory disease originating in the perinatal period"
 },
 {
  "S.No.": 324,
  "Code": "I05-I09",
  "MCCD Description": "Chronic rheumatic heart diseases"
 },
 {
  "S.No.": 325,
  "Code": "J31",
  "MCCD Description": "Chronic rhinitis, nasopharyngitis and pharyngitis"
 },
 {
  "S.No.": 326,
  "Code": "J32",
  "MCCD Description": "Chronic sinusitis"
 },
 {
  "S.No.": 327,
  "Code": "N11",
  "MCCD Description": "Chronic tubulo-interstitial nephritis"
 },
 {
  "S.No.": 328,
  "Code": "B18",
  "MCCD Description": "Chronic viral hepatitis"
 },
 {
  "S.No.": 329,
  "Code": "L66",
  "MCCD Description": "Cicatricial alopecia [scarring hair loss]"
 },
 {
  "S.No.": 330,
  "Code": "Q36",
  "MCCD Description": "Cleft lip"
 },
 {
  "S.No.": 331,
  "Code": "Q35-Q37",
  "MCCD Description": "Cleft lip and cleft palate"
 },
 {
  "S.No.": 332,
  "Code": "Q35",
  "MCCD Description": "Cleft palate"
 },
 {
  "S.No.": 333,
  "Code": "Q37",
  "MCCD Description": "Cleft palate with cleft lip"
 },
 {
  "S.No.": 334,
  "Code": "J60",
  "MCCD Description": "Coalworkers pneumoconiosis"
 },
 {
  "S.No.": 335,
  "Code": "B38",
  "MCCD Description": "Coccidioidomycosis"
 },
 {
  "S.No.": 336,
  "Code": "D81",
  "MCCD Description": "Combined immunodeficiencies"
 },
 {
  "S.No.": 337,
  "Code": "D83",
  "MCCD Description": "Common variable immunodeficiency"
 },
 {
  "S.No.": 338,
  "Code": "I51",
  "MCCD Description": "Complications and ill-defined descriptions of heart disease"
 },
 {
  "S.No.": 339,
  "Code": "N98",
  "MCCD Description": "Complications associated with artificial fertilization"
 },
 {
  "S.No.": 340,
  "Code": "O08",
  "MCCD Description": "Complications following abortion and ectopic and molar pregnancy"
 },
 {
  "S.No.": 341,
  "Code": "T80",
  "MCCD Description": "Complications following infusion, transfusion and therapeutic injection"
 },
 {
  "S.No.": 342,
  "Code": "O74",
  "MCCD Description": "Complications of anaesthesia during labour and delivery"
 },
 {
  "S.No.": 343,
  "Code": "O29",
  "MCCD Description": "Complications of anaesthesia during pregnancy"
 },
 {
  "S.No.": 344,
  "Code": "O89",
  "MCCD Description": "Complications of anaesthesia during the puerperium"
 },
 {
  "S.No.": 345,
  "Code": "T82",
  "MCCD Description": "Complications of cardiac and vascular prosthetic devices, implants and grafts"
 },
 {
  "S.No.": 346,
  "Code": "T83",
  "MCCD Description": "Complications of genitourinary prosthetic devices, implants and grafts"
 },
 {
  "S.No.": 347,
  "Code": "T84",
  "MCCD Description": "Complications of internal orthopaedic prosthetic devices, implants and grafts"
 },
 {
  "S.No.": 348,
  "Code": "T85",
  "MCCD Description": "Complications of other internal prosthetic devices, implants and grafts"
 },
 {
  "S.No.": 349,
  "Code": "T81",
  "MCCD Description": "Complications of procedures, not elsewhere classified"
 },
 {
  "S.No.": 350,
  "Code": "T80-T88",
  "MCCD Description": "Complications of Surgical and Medical care, not elsewhere classified"
 },
 {
  "S.No.": 351,
  "Code": "O90",
  "MCCD Description": "Complications of the puerperium, not elsewhere classified"
 },
 {
  "S.No.": 352,
  "Code": "T87",
  "MCCD Description": "Complications peculiar to reattachment and amputation"
 },
 {
  "S.No.": 353,
  "Code": "O85-O92",
  "MCCD Description": "Complications pre-dominantly related to the puerperium"
 },
 {
  "S.No.": 354,
  "Code": "O31",
  "MCCD Description": "Complications specific to multiple gestation"
 },
 {
  "S.No.": 355,
  "Code": "F91",
  "MCCD Description": "Conduct disorders"
 },
 {
  "S.No.": 356,
  "Code": "H90",
  "MCCD Description": "Conductive and sensorineural hearing loss"
 },
 {
  "S.No.": 357,
  "Code": "W81",
  "MCCD Description": "Confined to or trapped in a low-oxygen environment"
 },
 {
  "S.No.": 358,
  "Code": "Q42",
  "MCCD Description": "Congenital absence, atresia and stenosis of large intestine"
 },
 {
  "S.No.": 359,
  "Code": "Q41",
  "MCCD Description": "Congenital absence, atresia and stenosis of small intestine"
 },
 {
  "S.No.": 360,
  "Code": "Q66",
  "MCCD Description": "Congenital deformities of feet"
 },
 {
  "S.No.": 361,
  "Code": "Q65",
  "MCCD Description": "Congenital deformities of hip"
 },
 {
  "S.No.": 362,
  "Code": "Q03",
  "MCCD Description": "Congenital hydrocephalus"
 },
 {
  "S.No.": 363,
  "Code": "Q80",
  "MCCD Description": "Congenital ichthyosis"
 },
 {
  "S.No.": 364,
  "Code": "E00",
  "MCCD Description": "Congenital iodine-deficiency syndrome"
 },
 {
  "S.No.": 365,
  "Code": "Q12",
  "MCCD Description": "Congenital lens malformations"
 },
 {
  "S.No.": 366,
  "Code": "Q86",
  "MCCD Description": "Congenital malformation syndromes due to known exogenous causes, not elsewhere classified"
 },
 {
  "S.No.": 367,
  "Code": "Q13",
  "MCCD Description": "Congenital malformations of anterior segment of eye"
 },
 {
  "S.No.": 368,
  "Code": "Q23",
  "MCCD Description": "Congenital malformations of aortic and mitral valves"
 },
 {
  "S.No.": 369,
  "Code": "Q83",
  "MCCD Description": "Congenital malformations of breast"
 },
 {
  "S.No.": 370,
  "Code": "Q20",
  "MCCD Description": "Congenital malformations of cardiac chambers and connections"
 },
 {
  "S.No.": 371,
  "Code": "Q21",
  "MCCD Description": "Congenital malformations of cardiac septa"
 },
 {
  "S.No.": 372,
  "Code": "Q16",
  "MCCD Description": "Congenital malformations of ear causing impairment of hearing"
 },
 {
  "S.No.": 373,
  "Code": "Q10",
  "MCCD Description": "Congenital malformations of eyelid, lacrimal apparatus and orbit"
 },
 {
  "S.No.": 374,
  "Code": "Q44",
  "MCCD Description": "Congenital malformations of gallbladder, bile ducts and liver"
 },
 {
  "S.No.": 375,
  "Code": "Q25",
  "MCCD Description": "Congenital malformations of great arteries"
 },
 {
  "S.No.": 376,
  "Code": "Q26",
  "MCCD Description": "Congenital malformations of great veins"
 },
 {
  "S.No.": 377,
  "Code": "Q31",
  "MCCD Description": "Congenital malformations of larynx"
 },
 {
  "S.No.": 378,
  "Code": "Q33",
  "MCCD Description": "Congenital malformations of lung"
 },
 {
  "S.No.": 379,
  "Code": "Q30",
  "MCCD Description": "Congenital malformations of nose"
 },
 {
  "S.No.": 380,
  "Code": "Q39",
  "MCCD Description": "Congenital malformations of oesophagus"
 },
 {
  "S.No.": 381,
  "Code": "Q50",
  "MCCD Description": "Congenital malformations of ovaries, fallopian tubes and broad ligaments"
 },
 {
  "S.No.": 382,
  "Code": "Q14",
  "MCCD Description": "Congenital malformations of posterior segment of eye"
 },
 {
  "S.No.": 383,
  "Code": "Q22",
  "MCCD Description": "Congenital malformations of pulmonary and tricuspid valves"
 },
 {
  "S.No.": 384,
  "Code": "Q76",
  "MCCD Description": "Congenital malformations of spine and bony thorax"
 },
 {
  "S.No.": 385,
  "Code": "Q20-Q28",
  "MCCD Description": "Congenital malformations of the circulatory system"
 },
 {
  "S.No.": 386,
  "Code": "Q79",
  "MCCD Description": "Congenital malformations of the musculoskeletal system, not elsewhere classified"
 },
 {
  "S.No.": 387,
  "Code": "Q32",
  "MCCD Description": "Congenital malformations of trachea and bronchus"
 },
 {
  "S.No.": 388,
  "Code": "Q51",
  "MCCD Description": "Congenital malformations of uterus and cervix"
 },
 {
  "S.No.": 389,
  "Code": "Q67",
  "MCCD Description": "Congenital musculoskeletal deformities of head, face, spine and chest"
 },
 {
  "S.No.": 390,
  "Code": "Q62",
  "MCCD Description": "Congenital obstructive defects of renal pelvis and congenital malformations of ureter"
 },
 {
  "S.No.": 391,
  "Code": "P23",
  "MCCD Description": "Congenital pneumonia"
 },
 {
  "S.No.": 392,
  "Code": "A50",
  "MCCD Description": "Congenital syphilis"
 },
 {
  "S.No.": 393,
  "Code": "P35",
  "MCCD Description": "Congenital viral diseases"
 },
 {
  "S.No.": 394,
  "Code": "H10",
  "MCCD Description": "Conjunctivitis"
 },
 {
  "S.No.": 395,
  "Code": "W30",
  "MCCD Description": "Contact with agricultural machinery"
 },
 {
  "S.No.": 396,
  "Code": "Y29",
  "MCCD Description": "Contact with blunt object, undetermined intent"
 },
 {
  "S.No.": 397,
  "Code": "X24",
  "MCCD Description": "Contact with centipedes and venomous millipedes (tropical)"
 },
 {
  "S.No.": 398,
  "Code": "Y25",
  "MCCD Description": "Contact with explosive material, undetermined intent"
 },
 {
  "S.No.": 399,
  "Code": "X23",
  "MCCD Description": "Contact with hornets, wasps and bees"
 },
 {
  "S.No.": 400,
  "Code": "X14",
  "MCCD Description": "Contact with hot air and gases"
 },
 {
  "S.No.": 401,
  "Code": "X10",
  "MCCD Description": "Contact with hot drinks, food, fats and cooking oils"
 },
 {
  "S.No.": 402,
  "Code": "X17",
  "MCCD Description": "Contact with hot engines, machinery and tools"
 },
 {
  "S.No.": 403,
  "Code": "X16",
  "MCCD Description": "Contact with hot heating appliances, radiators and pipes"
 },
 {
  "S.No.": 404,
  "Code": "X15",
  "MCCD Description": "Contact with hot household appliances"
 },
 {
  "S.No.": 405,
  "Code": "X11",
  "MCCD Description": "Contact with hot tap-water"
 },
 {
  "S.No.": 406,
  "Code": "W26",
  "MCCD Description": "Contact with knife, sword or dagger"
 },
 {
  "S.No.": 407,
  "Code": "W24",
  "MCCD Description": "Contact with lifting and transmission devices, not elsewhere classified"
 },
 {
  "S.No.": 408,
  "Code": "W56",
  "MCCD Description": "Contact with marine animal"
 },
 {
  "S.No.": 409,
  "Code": "W27",
  "MCCD Description": "Contact with nonpowered hand tool"
 },
 {
  "S.No.": 410,
  "Code": "X19",
  "MCCD Description": "Contact with other and unspecified heat and hot substances"
 },
 {
  "S.No.": 411,
  "Code": "W31",
  "MCCD Description": "Contact with other and unspecified machinery"
 },
 {
  "S.No.": 412,
  "Code": "X12",
  "MCCD Description": "Contact with other hot fluids"
 },
 {
  "S.No.": 413,
  "Code": "X18",
  "MCCD Description": "Contact with other hot metals"
 },
 {
  "S.No.": 414,
  "Code": "W29",
  "MCCD Description": "Contact with other powered hand tools and household machinery"
 },
 {
  "S.No.": 415,
  "Code": "X27",
  "MCCD Description": "Contact with other specified venomous animals"
 },
 {
  "S.No.": 416,
  "Code": "X25",
  "MCCD Description": "Contact with other specified venomous arthropods"
 },
 {
  "S.No.": 417,
  "Code": "X28",
  "MCCD Description": "Contact with other specified venomous plants"
 },
 {
  "S.No.": 418,
  "Code": "W60",
  "MCCD Description": "Contact with plant thorns and spines and sharp leaves"
 },
 {
  "S.No.": 419,
  "Code": "W28",
  "MCCD Description": "Contact with powered lawnmower"
 },
 {
  "S.No.": 420,
  "Code": "X22",
  "MCCD Description": "Contact with scorpions"
 },
 {
  "S.No.": 421,
  "Code": "W25",
  "MCCD Description": "Contact with sharp glass"
 },
 {
  "S.No.": 422,
  "Code": "Y28",
  "MCCD Description": "Contact with sharp object, undetermined intent"
 },
 {
  "S.No.": 423,
  "Code": "X13",
  "MCCD Description": "Contact with steam and hot vapours"
 },
 {
  "S.No.": 424,
  "Code": "Y27",
  "MCCD Description": "Contact with steam, hot vapours and hot objects, undetermined intent"
 },
 {
  "S.No.": 425,
  "Code": "X29",
  "MCCD Description": "Contact with unspecified venomous animal or plant"
 },
 {
  "S.No.": 426,
  "Code": "X26",
  "MCCD Description": "Contact with venomous marine animals and plants"
 },
 {
  "S.No.": 427,
  "Code": "X20",
  "MCCD Description": "Contact with venomous snakes and lizards"
 },
 {
  "S.No.": 428,
  "Code": "X21",
  "MCCD Description": "Contact with venomous spiders"
 },
 {
  "S.No.": 429,
  "Code": "Y64",
  "MCCD Description": "Contaminated medical or biological substances"
 },
 {
  "S.No.": 430,
  "Code": "P90",
  "MCCD Description": "Convulsions of newborn"
 },
 {
  "S.No.": 431,
  "Code": "R56",
  "MCCD Description": "Convulsions, not elsewhere classified "
 },
 {
  "S.No.": 432,
  "Code": "H17",
  "MCCD Description": "Corneal scars and opacities"
 },
 {
  "S.No.": 433,
  "Code": "L84",
  "MCCD Description": "Corns and callosities"
 },
 {
  "S.No.": 434,
  "Code": "T32",
  "MCCD Description": "Corrosions classified according to extent of body surface involved"
 },
 {
  "S.No.": 435,
  "Code": "R05",
  "MCCD Description": "Cough"
 },
 {
  "S.No.": 436,
  "Code": "U07.1",
  "MCCD Description": "COVID-19 Virus Identified"
 },
 {
  "S.No.": 437,
  "Code": "U07.2",
  "MCCD Description": "COVID-19 Virus not identified"
 },
 {
  "S.No.": 438,
  "Code": "M16",
  "MCCD Description": "Coxarthrosis [arthrosis of hip]"
 },
 {
  "S.No.": 439,
  "Code": "G53",
  "MCCD Description": "Cranial nerve disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 440,
  "Code": "Y32",
  "MCCD Description": "Crashing of motor vehicle, undetermined intent"
 },
 {
  "S.No.": 441,
  "Code": "K50",
  "MCCD Description": "Crohns disease [regional enteritis]"
 },
 {
  "S.No.": 442,
  "Code": "W52",
  "MCCD Description": "Crushed, pushed or stepped on by crowd or human stampede"
 },
 {
  "S.No.": 443,
  "Code": "S07-S08,S17-S18,S28,S38,S47",
  "MCCD Description": "Crushing injuries and traumatic amputations of specified and multiple body regions"
 },
 {
  "S.No.": 444,
  "Code": "T04",
  "MCCD Description": "Crushing injuries involving multiple body regions"
 },
 {
  "S.No.": 445,
  "Code": "S38",
  "MCCD Description": "Crushing injury and traumatic amputation of part of abdomen, lower back and pelvis"
 },
 {
  "S.No.": 446,
  "Code": "S97",
  "MCCD Description": "Crushing injury of ankle and foot"
 },
 {
  "S.No.": 447,
  "Code": "S57",
  "MCCD Description": "Crushing injury of forearm"
 },
 {
  "S.No.": 448,
  "Code": "S07",
  "MCCD Description": "Crushing injury of head"
 },
 {
  "S.No.": 449,
  "Code": "S77",
  "MCCD Description": "Crushing injury of hip and thigh"
 },
 {
  "S.No.": 450,
  "Code": "S87",
  "MCCD Description": "Crushing injury of lower leg"
 },
 {
  "S.No.": 451,
  "Code": "S17",
  "MCCD Description": "Crushing injury of neck"
 },
 {
  "S.No.": 452,
  "Code": "S47",
  "MCCD Description": "Crushing injury of shoulder and upper arm"
 },
 {
  "S.No.": 453,
  "Code": "S28",
  "MCCD Description": "Crushing injury of thorax and traumatic amputation of part of thorax"
 },
 {
  "S.No.": 454,
  "Code": "S67",
  "MCCD Description": "Crushing injury of wrist and hand"
 },
 {
  "S.No.": 455,
  "Code": "B45",
  "MCCD Description": "Cryptococcosis"
 },
 {
  "S.No.": 456,
  "Code": "E24",
  "MCCD Description": "Cushings syndrome"
 },
 {
  "S.No.": 457,
  "Code": "L02",
  "MCCD Description": "Cutaneous abscess, furuncle and carbuncle"
 },
 {
  "S.No.": 458,
  "Code": "E84",
  "MCCD Description": "Cystic fibrosis"
 },
 {
  "S.No.": 459,
  "Code": "Q61",
  "MCCD Description": "Cystic kidney disease"
 },
 {
  "S.No.": 460,
  "Code": "B69",
  "MCCD Description": "Cysticercosis"
 },
 {
  "S.No.": 461,
  "Code": "N30",
  "MCCD Description": "Cystitis"
 },
 {
  "S.No.": 462,
  "Code": "K09",
  "MCCD Description": "Cysts of oral region, not elsewhere classified"
 },
 {
  "S.No.": 463,
  "Code": "B25",
  "MCCD Description": "Cytomegaloviral disease"
 },
 {
  "S.No.": 464,
  "Code": "O96",
  "MCCD Description": "Death from any obstetric cause occurring more than 42 days but less than one year after delivery"
 },
 {
  "S.No.": 465,
  "Code": "O97",
  "MCCD Description": "Death from sequelae of direct obstetric causes"
 },
 {
  "S.No.": 466,
  "Code": "L89",
  "MCCD Description": "Decubitus ulcer"
 },
 {
  "S.No.": 467,
  "Code": "E53",
  "MCCD Description": "Deficiency of other B group vitamins"
 },
 {
  "S.No.": 468,
  "Code": "E61",
  "MCCD Description": "Deficiency of other nutrient elements"
 },
 {
  "S.No.": 469,
  "Code": "F05",
  "MCCD Description": "Delirium, not induced by alcohol and other psychoactive substances"
 },
 {
  "S.No.": 470,
  "Code": "F02",
  "MCCD Description": "Dementia in other diseases classified elsewhere"
 },
 {
  "S.No.": 471,
  "Code": "A90",
  "MCCD Description": "Dengue fever"
 },
 {
  "S.No.": 472,
  "Code": "A91",
  "MCCD Description": "Dengue haemorrhagic fever"
 },
 {
  "S.No.": 473,
  "Code": "K02",
  "MCCD Description": "Dental caries"
 },
 {
  "S.No.": 474,
  "Code": "K07",
  "MCCD Description": "Dentofacial anomalies [including malocclusion]"
 },
 {
  "S.No.": 475,
  "Code": "F32",
  "MCCD Description": "Depressive episode"
 },
 {
  "S.No.": 476,
  "Code": "L27",
  "MCCD Description": "Dermatitis due to substances taken internally"
 },
 {
  "S.No.": 477,
  "Code": "B35",
  "MCCD Description": "Dermatophytosis"
 },
 {
  "S.No.": 478,
  "Code": "M33",
  "MCCD Description": "Dermatopolymyositis"
 },
 {
  "S.No.": 479,
  "Code": "E10-E14",
  "MCCD Description": "Diabetes mellitus"
 },
 {
  "S.No.": 480,
  "Code": "O24",
  "MCCD Description": "Diabetes mellitus in pregnancy"
 },
 {
  "S.No.": 481,
  "Code": "L22",
  "MCCD Description": "Diaper [napkin] dermatitis"
 },
 {
  "S.No.": 482,
  "Code": "K44",
  "MCCD Description": "Diaphragmatic hernia"
 },
 {
  "S.No.": 483,
  "Code": "A09",
  "MCCD Description": "Diarrhoea and gastroenteritis of presumed infectious origin"
 },
 {
  "S.No.": 484,
  "Code": "E58",
  "MCCD Description": "Dietary calcium deficiency"
 },
 {
  "S.No.": 485,
  "Code": "E59",
  "MCCD Description": "Dietary selenium deficiency"
 },
 {
  "S.No.": 486,
  "Code": "E60",
  "MCCD Description": "Dietary zinc deficiency"
 },
 {
  "S.No.": 487,
  "Code": "C83",
  "MCCD Description": "Diffuse non-Hodgkins lymphoma"
 },
 {
  "S.No.": 488,
  "Code": "A36",
  "MCCD Description": "Diphtheria"
 },
 {
  "S.No.": 489,
  "Code": "B70",
  "MCCD Description": "Diphyllobothriasis and sparganosis"
 },
 {
  "S.No.": 490,
  "Code": "M01",
  "MCCD Description": "Direct infections of joint in infectious and parasitic diseases classified elsewhere"
 },
 {
  "S.No.": 491,
  "Code": "W34",
  "MCCD Description": "Discharge from other and unspecified firearms"
 },
 {
  "S.No.": 492,
  "Code": "W39",
  "MCCD Description": "Discharge of firework"
 },
 {
  "S.No.": 493,
  "Code": "H00-H59",
  "MCCD Description": "Disease of the eye and adnexa"
 },
 {
  "S.No.": 494,
  "Code": "K35-K38",
  "MCCD Description": "Diseases of appendix"
 },
 {
  "S.No.": 495,
  "Code": "N75",
  "MCCD Description": "Diseases of Bartholins gland"
 },
 {
  "S.No.": 496,
  "Code": "I78",
  "MCCD Description": "Diseases of capillaries"
 },
 {
  "S.No.": 497,
  "Code": "K00-K14",
  "MCCD Description": "Diseases of oral cavity, salivary glands and jaws"
 },
 {
  "S.No.": 498,
  "Code": "K04",
  "MCCD Description": "Diseases of pulp and periapical tissues"
 },
 {
  "S.No.": 499,
  "Code": "K11",
  "MCCD Description": "Diseases of salivary glands"
 },
 {
  "S.No.": 500,
  "Code": "D73",
  "MCCD Description": "Diseases of spleen"
 },
 {
  "S.No.": 501,
  "Code": "H60-H93",
  "MCCD Description": "Diseases of the ear and mastoid process"
 },
 {
  "S.No.": 502,
  "Code": "K70-K76",
  "MCCD Description": "Diseases of the liver"
 },
 {
  "S.No.": 503,
  "Code": "E32",
  "MCCD Description": "Diseases of thymus"
 },
 {
  "S.No.": 504,
  "Code": "K14",
  "MCCD Description": "Diseases of tongue"
 },
 {
  "S.No.": 505,
  "Code": "J38",
  "MCCD Description": "Diseases of vocal cords and larynx, not elsewhere classified"
 },
 {
  "S.No.": 506,
  "Code": "S73",
  "MCCD Description": "Dislocation, sprain and strain of joint and ligaments of hip"
 },
 {
  "S.No.": 507,
  "Code": "S93",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments at ankle and foot level"
 },
 {
  "S.No.": 508,
  "Code": "S13",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments at neck level"
 },
 {
  "S.No.": 509,
  "Code": "S63",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments at wrist and hand level"
 },
 {
  "S.No.": 510,
  "Code": "S53",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of elbow"
 },
 {
  "S.No.": 511,
  "Code": "S03",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of head"
 },
 {
  "S.No.": 512,
  "Code": "S83",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of knee"
 },
 {
  "S.No.": 513,
  "Code": "S33",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of lumbar spine and pelvis"
 },
 {
  "S.No.": 514,
  "Code": "S43",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of shoulder girdle"
 },
 {
  "S.No.": 515,
  "Code": "S23",
  "MCCD Description": "Dislocation, sprain and strain of joints and ligaments of thorax"
 },
 {
  "S.No.": 516,
  "Code": "T03",
  "MCCD Description": "Dislocations, sprains and strains involving multiple body regions"
 },
 {
  "S.No.": 517,
  "Code": "S03,S13,S23,S33,S43,S53,S63,S73,S83,S93,T03",
  "MCCD Description": "Dislocations, sprains and strains of specified and multiple body regions"
 },
 {
  "S.No.": 518,
  "Code": "E70",
  "MCCD Description": "Disorders of aromatic amino-acid metabolism"
 },
 {
  "S.No.": 519,
  "Code": "G90",
  "MCCD Description": "Disorders of autonomic nervous system"
 },
 {
  "S.No.": 520,
  "Code": "E71",
  "MCCD Description": "Disorders of branched-chain amino-acid metabolism and fatty-acid metabolism"
 },
 {
  "S.No.": 521,
  "Code": "H13",
  "MCCD Description": "Disorders of conjunctiva in diseases classified elsewhere"
 },
 {
  "S.No.": 522,
  "Code": "M84",
  "MCCD Description": "Disorders of continuity of bone"
 },
 {
  "S.No.": 523,
  "Code": "H62",
  "MCCD Description": "Disorders of external ear in diseases classified elsewhere"
 },
 {
  "S.No.": 524,
  "Code": "H03",
  "MCCD Description": "Disorders of eyelid in diseases classified elsewhere"
 },
 {
  "S.No.": 525,
  "Code": "H44",
  "MCCD Description": "Disorders of globe"
 },
 {
  "S.No.": 526,
  "Code": "E77",
  "MCCD Description": "Disorders of glycoprotein metabolism"
 },
 {
  "S.No.": 527,
  "Code": "E76",
  "MCCD Description": "Disorders of glycosaminoglycan metabolism"
 },
 {
  "S.No.": 528,
  "Code": "H22",
  "MCCD Description": "Disorders of iris and ciliary body in diseases classified elsewhere"
 },
 {
  "S.No.": 529,
  "Code": "H04",
  "MCCD Description": "Disorders of lacrimal system"
 },
 {
  "S.No.": 530,
  "Code": "H06",
  "MCCD Description": "Disorders of lacrimal system and orbit in diseases classified elsewhere"
 },
 {
  "S.No.": 531,
  "Code": "E78",
  "MCCD Description": "Disorders of lipoprotein metabolism and other lipidaemias"
 },
 {
  "S.No.": 532,
  "Code": "E83",
  "MCCD Description": "Disorders of mineral metabolism"
 },
 {
  "S.No.": 533,
  "Code": "M63",
  "MCCD Description": "Disorders of muscle in diseases classified elsewhere"
 },
 {
  "S.No.": 534,
  "Code": "P94",
  "MCCD Description": "Disorders of muscle tone of newborn"
 },
 {
  "S.No.": 535,
  "Code": "G73",
  "MCCD Description": "Disorders of myoneural junction and muscle in diseases classified elsewhere"
 },
 {
  "S.No.": 536,
  "Code": "H48",
  "MCCD Description": "Disorders of optic [2nd] nerve and visual pathways in diseases classified elsewhere"
 },
 {
  "S.No.": 537,
  "Code": "H05",
  "MCCD Description": "Disorders of orbit"
 },
 {
  "S.No.": 538,
  "Code": "G52",
  "MCCD Description": "Disorders of other cranial nerves"
 },
 {
  "S.No.": 539,
  "Code": "M22",
  "MCCD Description": "Disorders of patella"
 },
 {
  "S.No.": 540,
  "Code": "E80",
  "MCCD Description": "Disorders of porphyrin and bilirubin metabolism"
 },
 {
  "S.No.": 541,
  "Code": "E30",
  "MCCD Description": "Disorders of puberty, not elsewhere classified"
 },
 {
  "S.No.": 542,
  "Code": "E79",
  "MCCD Description": "Disorders of purine and pyrimidine metabolism"
 },
 {
  "S.No.": 543,
  "Code": "H52",
  "MCCD Description": "Disorders of refraction and accommodation"
 },
 {
  "S.No.": 544,
  "Code": "H15",
  "MCCD Description": "Disorders of sclera"
 },
 {
  "S.No.": 545,
  "Code": "H19",
  "MCCD Description": "Disorders of sclera and cornea in diseases classified elsewhere"
 },
 {
  "S.No.": 546,
  "Code": "F65",
  "MCCD Description": "Disorders of sexual preference"
 },
 {
  "S.No.": 547,
  "Code": "F94",
  "MCCD Description": "Disorders of social functioning with onset specific to childhood and adolescence"
 },
 {
  "S.No.": 548,
  "Code": "E75",
  "MCCD Description": "Disorders of sphingolipid metabolism and other lipid storage disorders"
 },
 {
  "S.No.": 549,
  "Code": "M68",
  "MCCD Description": "Disorders of synovium and tendon in diseases classified elsewhere"
 },
 {
  "S.No.": 550,
  "Code": "K85-K86",
  "MCCD Description": "Disorders of the pancreas"
 },
 {
  "S.No.": 551,
  "Code": "E00-E07",
  "MCCD Description": "Disorders of thyroid gland"
 },
 {
  "S.No.": 552,
  "Code": "K00",
  "MCCD Description": "Disorders of tooth development and eruption"
 },
 {
  "S.No.": 553,
  "Code": "G50",
  "MCCD Description": "Disorders of trigeminal nerve"
 },
 {
  "S.No.": 554,
  "Code": "H81",
  "MCCD Description": "Disorders of vestibular function"
 },
 {
  "S.No.": 555,
  "Code": "H43",
  "MCCD Description": "Disorders of vitreous body"
 },
 {
  "S.No.": 556,
  "Code": "H45",
  "MCCD Description": "Disorders of vitreous body and globe in diseases classified elsewhere"
 },
 {
  "S.No.": 557,
  "Code": "P08",
  "MCCD Description": "Disorders related to long gestation and high birth weight"
 },
 {
  "S.No.": 558,
  "Code": "P07",
  "MCCD Description": "Disorders related to short gestation and low birth weight, not elsewhere classified"
 },
 {
  "S.No.": 559,
  "Code": "N25",
  "MCCD Description": "Disorders resulting from impaired renal tubular function"
 },
 {
  "S.No.": 560,
  "Code": "D65",
  "MCCD Description": "Disseminated intravascular coagulation [defibrination syndrome]"
 },
 {
  "S.No.": 561,
  "Code": "P60",
  "MCCD Description": "Disseminated intravascular coagulation of fetus and newborn"
 },
 {
  "S.No.": 562,
  "Code": "F44",
  "MCCD Description": "Dissociative [conversion] disorders"
 },
 {
  "S.No.": 563,
  "Code": "R20",
  "MCCD Description": "Disturbances of skin sensation"
 },
 {
  "S.No.": 564,
  "Code": "R43",
  "MCCD Description": "Disturbances of smell and taste"
 },
 {
  "S.No.": 565,
  "Code": "K57",
  "MCCD Description": "Diverticular disease of intestine"
 },
 {
  "S.No.": 566,
  "Code": "W16",
  "MCCD Description": "Diving or jumping into water causing injury other than drowning or submersion"
 },
 {
  "S.No.": 567,
  "Code": "R42",
  "MCCD Description": "Dizziness and giddiness"
 },
 {
  "S.No.": 568,
  "Code": "M54",
  "MCCD Description": "Dorsalgia"
 },
 {
  "S.No.": 569,
  "Code": "Q90",
  "MCCD Description": "Downs syndrome"
 },
 {
  "S.No.": 570,
  "Code": "B72",
  "MCCD Description": "Dracunculiasis"
 },
 {
  "S.No.": 571,
  "Code": "V19.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 572,
  "Code": "V29.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 573,
  "Code": "V39.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 574,
  "Code": "V49.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 575,
  "Code": "V59.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 576,
  "Code": "V69.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 577,
  "Code": "V79.0",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 578,
  "Code": "V19.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 579,
  "Code": "V29.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 580,
  "Code": "V39.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 581,
  "Code": "V49.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 582,
  "Code": "V59.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 583,
  "Code": "V69.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 584,
  "Code": "V79.4",
  "MCCD Description": "Driver injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 585,
  "Code": "W66",
  "MCCD Description": "Drowning and submersion following fall into bath-tub"
 },
 {
  "S.No.": 586,
  "Code": "W70",
  "MCCD Description": "Drowning and submersion following fall into natural water"
 },
 {
  "S.No.": 587,
  "Code": "W68",
  "MCCD Description": "Drowning and submersion following fall into swimming-pool"
 },
 {
  "S.No.": 588,
  "Code": "W65",
  "MCCD Description": "Drowning and submersion while in bath-tub"
 },
 {
  "S.No.": 589,
  "Code": "W69",
  "MCCD Description": "Drowning and submersion while in natural water"
 },
 {
  "S.No.": 590,
  "Code": "W67",
  "MCCD Description": "Drowning and submersion while in swimming-pool"
 },
 {
  "S.No.": 591,
  "Code": "Y21",
  "MCCD Description": "Drowning and submersion, undetermined intent"
 },
 {
  "S.No.": 592,
  "Code": "N14",
  "MCCD Description": "Drug- and heavy-metal-induced tubulo-interstitial and tubular conditions"
 },
 {
  "S.No.": 593,
  "Code": "Y51",
  "MCCD Description": "Drugs primarily affecting the autonomic nervous system"
 },
 {
  "S.No.": 594,
  "Code": "Y40-Y59",
  "MCCD Description": "Drugs,medicaments and biological substances causing adverse effects in therapeutic use"
 },
 {
  "S.No.": 595,
  "Code": "K26",
  "MCCD Description": "Duodenal ulcer"
 },
 {
  "S.No.": 596,
  "Code": "R48",
  "MCCD Description": "Dyslexia and other symbolic dysfunctions, not elsewhere classified"
 },
 {
  "S.No.": 597,
  "Code": "K30",
  "MCCD Description": "Dyspepsia"
 },
 {
  "S.No.": 598,
  "Code": "R13",
  "MCCD Description": "Dysphagia"
 },
 {
  "S.No.": 599,
  "Code": "N87",
  "MCCD Description": "Dysplasia of cervix uteri"
 },
 {
  "S.No.": 600,
  "Code": "G24",
  "MCCD Description": "Dystonia"
 },
 {
  "S.No.": 601,
  "Code": "A51",
  "MCCD Description": "Early syphilis"
 },
 {
  "S.No.": 602,
  "Code": "F50",
  "MCCD Description": "Eating disorders"
 },
 {
  "S.No.": 603,
  "Code": "L74",
  "MCCD Description": "Eccrine sweat disorders"
 },
 {
  "S.No.": 604,
  "Code": "B67",
  "MCCD Description": "Echinococcosis"
 },
 {
  "S.No.": 605,
  "Code": "O15",
  "MCCD Description": "Eclampsia"
 },
 {
  "S.No.": 606,
  "Code": "O00",
  "MCCD Description": "Ectopic pregnancy"
 },
 {
  "S.No.": 607,
  "Code": "Q91",
  "MCCD Description": "Edwards syndrome and Pataus syndrome"
 },
 {
  "S.No.": 608,
  "Code": "T70",
  "MCCD Description": "Effects of air pressure and water pressure"
 },
 {
  "S.No.": 609,
  "Code": "T15-T19",
  "MCCD Description": "Effects of foreign body entering through natural orifice"
 },
 {
  "S.No.": 610,
  "Code": "T67",
  "MCCD Description": "Effects of heat and light"
 },
 {
  "S.No.": 611,
  "Code": "T73",
  "MCCD Description": "Effects of other deprivation"
 },
 {
  "S.No.": 612,
  "Code": "T75",
  "MCCD Description": "Effects of other external causes"
 },
 {
  "S.No.": 613,
  "Code": "R73",
  "MCCD Description": "Elevated blood glucose level"
 },
 {
  "S.No.": 614,
  "Code": "R70",
  "MCCD Description": "Elevated erythrocyte sedimentation rate and abnormality of plasma viscosity"
 },
 {
  "S.No.": 615,
  "Code": "K01",
  "MCCD Description": "Embedded and impacted teeth"
 },
 {
  "S.No.": 616,
  "Code": "F93",
  "MCCD Description": "Emotional disorders with onset specific to childhood"
 },
 {
  "S.No.": 617,
  "Code": "J43",
  "MCCD Description": "Emphysema"
 },
 {
  "S.No.": 618,
  "Code": "G04",
  "MCCD Description": "Encephalitis,myelitis and encephalomyelitis"
 },
 {
  "S.No.": 619,
  "Code": "Q01",
  "MCCD Description": "Encephalocele"
 },
 {
  "S.No.": 620,
  "Code": "I39",
  "MCCD Description": "Endocarditis and heart valve disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 621,
  "Code": "I38",
  "MCCD Description": "Endocarditis, valve unspecified"
 },
 {
  "S.No.": 622,
  "Code": "N80",
  "MCCD Description": "Endometriosis"
 },
 {
  "S.No.": 623,
  "Code": "F62",
  "MCCD Description": "Enduring personality changes, not attributable to brain damage and disease"
 },
 {
  "S.No.": 624,
  "Code": "R59",
  "MCCD Description": "Enlarged lymph nodes"
 },
 {
  "S.No.": 625,
  "Code": "B80",
  "MCCD Description": "Enterobiasis"
 },
 {
  "S.No.": 626,
  "Code": "M76",
  "MCCD Description": "Enthesopathies of lower limb, excluding foot"
 },
 {
  "S.No.": 627,
  "Code": "Q81",
  "MCCD Description": "Epidermolysis bullosa"
 },
 {
  "S.No.": 628,
  "Code": "G40-G41",
  "MCCD Description": "Epilepsy"
 },
 {
  "S.No.": 629,
  "Code": "G40",
  "MCCD Description": "Epilepsy"
 },
 {
  "S.No.": 630,
  "Code": "N86",
  "MCCD Description": "Erosion and ectropion of cervix uteri"
 },
 {
  "S.No.": 631,
  "Code": "A46",
  "MCCD Description": "Erysipelas"
 },
 {
  "S.No.": 632,
  "Code": "A26",
  "MCCD Description": "Erysipeloid"
 },
 {
  "S.No.": 633,
  "Code": "L54",
  "MCCD Description": "Erythema in diseases classified elsewhere"
 },
 {
  "S.No.": 634,
  "Code": "L51",
  "MCCD Description": "Erythema multiforme"
 },
 {
  "S.No.": 635,
  "Code": "L52",
  "MCCD Description": "Erythema nodosum"
 },
 {
  "S.No.": 636,
  "Code": "I10",
  "MCCD Description": "Essential (primary) hypertension"
 },
 {
  "S.No.": 637,
  "Code": "H68",
  "MCCD Description": "Eustachian salpingitis and obstruction"
 },
 {
  "S.No.": 638,
  "Code": "Y10-Y34",
  "MCCD Description": "Event of undetermined intent"
 },
 {
  "S.No.": 639,
  "Code": "O21",
  "MCCD Description": "Excessive vomiting in pregnancy"
 },
 {
  "S.No.": 640,
  "Code": "N92",
  "MCCD Description": "Excessive, frequent and irregular menstruation"
 },
 {
  "S.No.": 641,
  "Code": "L26",
  "MCCD Description": "Exfoliative dermatitis"
 },
 {
  "S.No.": 642,
  "Code": "W35",
  "MCCD Description": "Explosion and rupture of boiler"
 },
 {
  "S.No.": 643,
  "Code": "W36",
  "MCCD Description": "Explosion and rupture of gas cylinder"
 },
 {
  "S.No.": 644,
  "Code": "W38",
  "MCCD Description": "Explosion and rupture of other specified pressurized devices"
 },
 {
  "S.No.": 645,
  "Code": "W37",
  "MCCD Description": "Explosion and rupture of pressurized tyre, pipe or hose"
 },
 {
  "S.No.": 646,
  "Code": "W40",
  "MCCD Description": "Explosion of other materials"
 },
 {
  "S.No.": 647,
  "Code": "X02",
  "MCCD Description": "Exposure to controlled fire in building or structure"
 },
 {
  "S.No.": 648,
  "Code": "X03",
  "MCCD Description": "Exposure to controlled fire, not in building or structure"
 },
 {
  "S.No.": 649,
  "Code": "W85",
  "MCCD Description": "Exposure to electric transmission lines"
 },
 {
  "S.No.": 650,
  "Code": "W93",
  "MCCD Description": "Exposure to excessive cold of man-made origin"
 },
 {
  "S.No.": 651,
  "Code": "W92",
  "MCCD Description": "Exposure to excessive heat of man-made origin"
 },
 {
  "S.No.": 652,
  "Code": "X31",
  "MCCD Description": "Exposure to excessive natural cold"
 },
 {
  "S.No.": 653,
  "Code": "X30",
  "MCCD Description": "Exposure to excessive natural heat"
 },
 {
  "S.No.": 654,
  "Code": "W94",
  "MCCD Description": "Exposure to high and low air pressure and changes in air pressure"
 },
 {
  "S.No.": 655,
  "Code": "W41",
  "MCCD Description": "Exposure to high-pressure jet"
 },
 {
  "S.No.": 656,
  "Code": "X04",
  "MCCD Description": "Exposure to ignition of highly flammable material"
 },
 {
  "S.No.": 657,
  "Code": "X05",
  "MCCD Description": "Exposure to ignition or melting of nightwear"
 },
 {
  "S.No.": 658,
  "Code": "X06",
  "MCCD Description": "Exposure to ignition or melting of other clothing and apparel"
 },
 {
  "S.No.": 659,
  "Code": "W88",
  "MCCD Description": "Exposure to ionizing radiation"
 },
 {
  "S.No.": 660,
  "Code": "W89",
  "MCCD Description": "Exposure to man-made visible and ultraviolet light"
 },
 {
  "S.No.": 661,
  "Code": "W42",
  "MCCD Description": "Exposure to noise"
 },
 {
  "S.No.": 662,
  "Code": "W64",
  "MCCD Description": "Exposure to other and unspecified animate mechanical forces"
 },
 {
  "S.No.": 663,
  "Code": "X39",
  "MCCD Description": "Exposure to other and unspecified forces of nature"
 },
 {
  "S.No.": 664,
  "Code": "W49",
  "MCCD Description": "Exposure to other and unspecified inanimate mechanical forces"
 },
 {
  "S.No.": 665,
  "Code": "W99",
  "MCCD Description": "Exposure to other and unspecified man-made environmental factors"
 },
 {
  "S.No.": 666,
  "Code": "W90",
  "MCCD Description": "Exposure to other nonionizing radiation"
 },
 {
  "S.No.": 667,
  "Code": "W86",
  "MCCD Description": "Exposure to other specified electric current"
 },
 {
  "S.No.": 668,
  "Code": "X58",
  "MCCD Description": "Exposure to other specified factors"
 },
 {
  "S.No.": 669,
  "Code": "X08",
  "MCCD Description": "Exposure to other specified smoke, fire and flames"
 },
 {
  "S.No.": 670,
  "Code": "X00-X09",
  "MCCD Description": "Exposure to smoke, fire and flames"
 },
 {
  "S.No.": 671,
  "Code": "Y26",
  "MCCD Description": "Exposure to smoke, fire and flames, undetermined intent"
 },
 {
  "S.No.": 672,
  "Code": "X00",
  "MCCD Description": "Exposure to uncontrolled fire in building or structure"
 },
 {
  "S.No.": 673,
  "Code": "X01",
  "MCCD Description": "Exposure to uncontrolled fire, not in building or structure"
 },
 {
  "S.No.": 674,
  "Code": "W87",
  "MCCD Description": "Exposure to unspecified electric current"
 },
 {
  "S.No.": 675,
  "Code": "X59",
  "MCCD Description": "Exposure to unspecified factor"
 },
 {
  "S.No.": 676,
  "Code": "X09",
  "MCCD Description": "Exposure to unspecified smoke, fire and flames"
 },
 {
  "S.No.": 677,
  "Code": "W91",
  "MCCD Description": "Exposure to unspecified type of radiation"
 },
 {
  "S.No.": 678,
  "Code": "W43",
  "MCCD Description": "Exposure to vibration"
 },
 {
  "S.No.": 679,
  "Code": "G51",
  "MCCD Description": "Facial nerve disorders"
 },
 {
  "S.No.": 680,
  "Code": "R15",
  "MCCD Description": "Faecal incontinence"
 },
 {
  "S.No.": 681,
  "Code": "O07",
  "MCCD Description": "Failed attempted abortion"
 },
 {
  "S.No.": 682,
  "Code": "O61",
  "MCCD Description": "Failed induction of labour"
 },
 {
  "S.No.": 683,
  "Code": "T86",
  "MCCD Description": "Failure and rejection of transplanted organs and tissues"
 },
 {
  "S.No.": 684,
  "Code": "Y63",
  "MCCD Description": "Failure in dosage during surgical and medical care"
 },
 {
  "S.No.": 685,
  "Code": "Y62",
  "MCCD Description": "Failure of sterile precautions during surgical and medical care"
 },
 {
  "S.No.": 686,
  "Code": "W15",
  "MCCD Description": "Fall from cliff"
 },
 {
  "S.No.": 687,
  "Code": "W14",
  "MCCD Description": "Fall from tree"
 },
 {
  "S.No.": 688,
  "Code": "W13",
  "MCCD Description": "Fall from, out of or through building or structure"
 },
 {
  "S.No.": 689,
  "Code": "W06",
  "MCCD Description": "Fall involving bed"
 },
 {
  "S.No.": 690,
  "Code": "W07",
  "MCCD Description": "Fall involving chair"
 },
 {
  "S.No.": 691,
  "Code": "W02",
  "MCCD Description": "Fall involving ice-skates, skis, roller-skates or skateboards"
 },
 {
  "S.No.": 692,
  "Code": "W08",
  "MCCD Description": "Fall involving other furniture"
 },
 {
  "S.No.": 693,
  "Code": "W09",
  "MCCD Description": "Fall involving playground equipment"
 },
 {
  "S.No.": 694,
  "Code": "W05",
  "MCCD Description": "Fall involving wheelchair"
 },
 {
  "S.No.": 695,
  "Code": "W11",
  "MCCD Description": "Fall on and from ladder"
 },
 {
  "S.No.": 696,
  "Code": "W12",
  "MCCD Description": "Fall on and from scaffolding"
 },
 {
  "S.No.": 697,
  "Code": "W10",
  "MCCD Description": "Fall on and from stairs and steps"
 },
 {
  "S.No.": 698,
  "Code": "W01",
  "MCCD Description": "Fall on same level from slipping, tripping and stumbling"
 },
 {
  "S.No.": 699,
  "Code": "W00",
  "MCCD Description": "Fall on same level involving ice and snow"
 },
 {
  "S.No.": 700,
  "Code": "W04",
  "MCCD Description": "Fall while being carried or supported by other persons"
 },
 {
  "S.No.": 701,
  "Code": "Y30",
  "MCCD Description": "Falling, jumping or pushed from a high place, undetermined intent"
 },
 {
  "S.No.": 702,
  "Code": "Y31",
  "MCCD Description": "Falling, lying or running before or into moving object, undetermined intent"
 },
 {
  "S.No.": 703,
  "Code": "O47",
  "MCCD Description": "False labour"
 },
 {
  "S.No.": 704,
  "Code": "P92",
  "MCCD Description": "Feeding problems of newborn"
 },
 {
  "S.No.": 705,
  "Code": "N81",
  "MCCD Description": "Female genital prolapse"
 },
 {
  "S.No.": 706,
  "Code": "N97",
  "MCCD Description": "Female infertility"
 },
 {
  "S.No.": 707,
  "Code": "N74",
  "MCCD Description": "Female pelvic inflammatory disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 708,
  "Code": "K41",
  "MCCD Description": "Femoral hernia"
 },
 {
  "S.No.": 709,
  "Code": "P50",
  "MCCD Description": "Fetal blood loss"
 },
 {
  "S.No.": 710,
  "Code": "P95",
  "MCCD Description": "Fetal death of unspecified cause"
 },
 {
  "S.No.": 711,
  "Code": "P02",
  "MCCD Description": "Fetus and newborn affected by complications of placenta, cord and membranes"
 },
 {
  "S.No.": 712,
  "Code": "P01",
  "MCCD Description": "Fetus and newborn affected by maternal complications of pregnancy"
 },
 {
  "S.No.": 713,
  "Code": "P00",
  "MCCD Description": "Fetus and newborn affected by maternal conditions that may be unrelated to present pregnancy"
 },
 {
  "S.No.": 714,
  "Code": "P04",
  "MCCD Description": "Fetus and newborn affected by noxious influences transmitted via placenta or breast milk"
 },
 {
  "S.No.": 715,
  "Code": "P03",
  "MCCD Description": "Fetus and newborn affected by other complications of labour and delivery"
 },
 {
  "S.No.": 716,
  "Code": "R50",
  "MCCD Description": "Fever of unknown origin"
 },
 {
  "S.No.": 717,
  "Code": "M72",
  "MCCD Description": "Fibroblastic disorders"
 },
 {
  "S.No.": 718,
  "Code": "K74",
  "MCCD Description": "Fibrosis and cirrhosis of liver"
 },
 {
  "S.No.": 719,
  "Code": "B74",
  "MCCD Description": "Filariasis"
 },
 {
  "S.No.": 720,
  "Code": "R78",
  "MCCD Description": "Findings of drugs and other substances, not normally found in blood"
 },
 {
  "S.No.": 721,
  "Code": "K60",
  "MCCD Description": "Fissure and fistula of anal and rectal regions"
 },
 {
  "S.No.": 722,
  "Code": "N82",
  "MCCD Description": "Fistulae involving female genital tract"
 },
 {
  "S.No.": 723,
  "Code": "R14",
  "MCCD Description": "Flatulence and related conditions"
 },
 {
  "S.No.": 724,
  "Code": "D52",
  "MCCD Description": "Folate deficiency anaemia"
 },
 {
  "S.No.": 725,
  "Code": "C82",
  "MCCD Description": "Follicular [nodular] non-Hodgkins lymphoma"
 },
 {
  "S.No.": 726,
  "Code": "L72",
  "MCCD Description": "Follicular cysts of skin and subcutaneous tissue"
 },
 {
  "S.No.": 727,
  "Code": "A02, A05",
  "MCCD Description": "Food poisoning"
 },
 {
  "S.No.": 728,
  "Code": "W44",
  "MCCD Description": "Foreign body entering into or through eye or natural orifice"
 },
 {
  "S.No.": 729,
  "Code": "T18",
  "MCCD Description": "Foreign body in alimentary tract"
 },
 {
  "S.No.": 730,
  "Code": "T16",
  "MCCD Description": "Foreign body in ear"
 },
 {
  "S.No.": 731,
  "Code": "T19",
  "MCCD Description": "Foreign body in genitourinary tract"
 },
 {
  "S.No.": 732,
  "Code": "T17",
  "MCCD Description": "Foreign body in respiratory tract"
 },
 {
  "S.No.": 733,
  "Code": "T15",
  "MCCD Description": "Foreign body on external eye"
 },
 {
  "S.No.": 734,
  "Code": "W45",
  "MCCD Description": "Foreign body or object entering through skin"
 },
 {
  "S.No.": 735,
  "Code": "Y61",
  "MCCD Description": "Foreign object accidentally left in body during surgical and medical care"
 },
 {
  "S.No.": 736,
  "Code": "S62",
  "MCCD Description": "Fracture at wrist and hand level"
 },
 {
  "S.No.": 737,
  "Code": "S72",
  "MCCD Description": "Fracture of femur"
 },
 {
  "S.No.": 738,
  "Code": "S92",
  "MCCD Description": "Fracture of foot, except ankle"
 },
 {
  "S.No.": 739,
  "Code": "S52",
  "MCCD Description": "Fracture of forearm"
 },
 {
  "S.No.": 740,
  "Code": "S82",
  "MCCD Description": "Fracture of lower leg, including ankle"
 },
 {
  "S.No.": 741,
  "Code": "T12",
  "MCCD Description": "Fracture of lower limb, level unspecified"
 },
 {
  "S.No.": 742,
  "Code": "S32",
  "MCCD Description": "Fracture of lumbar spine and pelvis"
 },
 {
  "S.No.": 743,
  "Code": "S12",
  "MCCD Description": "Fracture of neck"
 },
 {
  "S.No.": 744,
  "Code": "S12,S22,S32 & T08",
  "MCCD Description": "Fracture of neck, thorax or pelvis"
 },
 {
  "S.No.": 745,
  "Code": "S22",
  "MCCD Description": "Fracture of rib(s), sternum and thoracic spine"
 },
 {
  "S.No.": 746,
  "Code": "S42",
  "MCCD Description": "Fracture of shoulder and upper arm"
 },
 {
  "S.No.": 747,
  "Code": "S02",
  "MCCD Description": "Fracture of skull and facial bones"
 },
 {
  "S.No.": 748,
  "Code": "T08",
  "MCCD Description": "Fracture of spine, level unspecified"
 },
 {
  "S.No.": 749,
  "Code": "S42,S52,S62 & T10",
  "MCCD Description": "Fracture of upper limb"
 },
 {
  "S.No.": 750,
  "Code": "T10",
  "MCCD Description": "Fracture of upper limb, level unspecified"
 },
 {
  "S.No.": 751,
  "Code": "T02",
  "MCCD Description": "Fractures involving multiple body regions and of unspecified body region"
 },
 {
  "S.No.": 752,
  "Code": "S72,S82,S92 & T12",
  "MCCD Description": "Fractures of lower limb"
 },
 {
  "S.No.": 753,
  "Code": "T35",
  "MCCD Description": "Frostbite involving multiple body regions and unspecified frostbite"
 },
 {
  "S.No.": 754,
  "Code": "T34",
  "MCCD Description": "Frostbite with tissue necrosis"
 },
 {
  "S.No.": 755,
  "Code": "D71",
  "MCCD Description": "Functional disorders of polymorphonuclear neutrophils"
 },
 {
  "S.No.": 756,
  "Code": "R02",
  "MCCD Description": "Gangrene, not elsewhere classified"
 },
 {
  "S.No.": 757,
  "Code": "K25-K27",
  "MCCD Description": "Gastric and duodenal ulcer"
 },
 {
  "S.No.": 758,
  "Code": "K25",
  "MCCD Description": "Gastric ulcer"
 },
 {
  "S.No.": 759,
  "Code": "K29",
  "MCCD Description": "Gastritis and duodenitis"
 },
 {
  "S.No.": 760,
  "Code": "Y73",
  "MCCD Description": "Gastroenterology and urology devices associated with adverse incidents"
 },
 {
  "S.No.": 761,
  "Code": "K28",
  "MCCD Description": "Gastrojejunal ulcer"
 },
 {
  "S.No.": 762,
  "Code": "K21",
  "MCCD Description": "Gastro-oesophageal reflux disease"
 },
 {
  "S.No.": 763,
  "Code": "F64",
  "MCCD Description": "Gender identity disorders"
 },
 {
  "S.No.": 764,
  "Code": "Y81",
  "MCCD Description": "General- and plastic-surgery devices associated with adverse incidents"
 },
 {
  "S.No.": 765,
  "Code": "Y74",
  "MCCD Description": "General hospital and personal-use devices associated with adverse incidents"
 },
 {
  "S.No.": 766,
  "Code": "O14",
  "MCCD Description": "Gestational [pregnancy-induced] hypertension with significant proteinuria"
 },
 {
  "S.No.": 767,
  "Code": "O13",
  "MCCD Description": "Gestational [pregnancy-induced] hypertension without significant proteinuria"
 },
 {
  "S.No.": 768,
  "Code": "O12",
  "MCCD Description": "Gestational [pregnancy-induced] oedema and proteinuria without hypertension"
 },
 {
  "S.No.": 769,
  "Code": "K05",
  "MCCD Description": "Gingivitis and periodontal diseases"
 },
 {
  "S.No.": 770,
  "Code": "A24",
  "MCCD Description": "Glanders and melioidosis"
 },
 {
  "S.No.": 771,
  "Code": "H40",
  "MCCD Description": "Glaucoma"
 },
 {
  "S.No.": 772,
  "Code": "H42",
  "MCCD Description": "Glaucoma in diseases classified elsewhere"
 },
 {
  "S.No.": 773,
  "Code": "N00-N07",
  "MCCD Description": "Glomerular diseases (including Nephritic Synodrome)"
 },
 {
  "S.No.": 774,
  "Code": "R81",
  "MCCD Description": "Glycosuria"
 },
 {
  "S.No.": 775,
  "Code": "M17",
  "MCCD Description": "Gonarthrosis [arthrosis of knee]"
 },
 {
  "S.No.": 776,
  "Code": "A54",
  "MCCD Description": "Gonococcal infection"
 },
 {
  "S.No.": 777,
  "Code": "M10",
  "MCCD Description": "Gout"
 },
 {
  "S.No.": 778,
  "Code": "A58",
  "MCCD Description": "Granuloma inguinale"
 },
 {
  "S.No.": 779,
  "Code": "L92",
  "MCCD Description": "Granulomatous disorders of skin and subcutaneous tissue"
 },
 {
  "S.No.": 780,
  "Code": "F63",
  "MCCD Description": "Habit and impulse disorders"
 },
 {
  "S.No.": 781,
  "Code": "N96",
  "MCCD Description": "Habitual aborter"
 },
 {
  "S.No.": 782,
  "Code": "D18",
  "MCCD Description": "Haemangioma and lymphangioma, any site"
 },
 {
  "S.No.": 783,
  "Code": "P55",
  "MCCD Description": "Haemolytic disease of fetus and new-born"
 },
 {
  "S.No.": 784,
  "Code": "P53",
  "MCCD Description": "Haemorragic disease of fetus and newborn"
 },
 {
  "S.No.": 785,
  "Code": "R04",
  "MCCD Description": "Haemorrhage from respiratory passages"
 },
 {
  "S.No.": 786,
  "Code": "O20",
  "MCCD Description": "Haemorrhage in early pregnancy"
 },
 {
  "S.No.": 787,
  "Code": "R58",
  "MCCD Description": "Haemorrhage, not elsewhere classified"
 },
 {
  "S.No.": 788,
  "Code": "I84",
  "MCCD Description": "Haemorrhoids"
 },
 {
  "S.No.": 789,
  "Code": "L67",
  "MCCD Description": "Hair colour and hair shaft abnormalities"
 },
 {
  "S.No.": 790,
  "Code": "W32",
  "MCCD Description": "Handgun discharge"
 },
 {
  "S.No.": 791,
  "Code": "Y22",
  "MCCD Description": "Handgun discharge, undetermined intent"
 },
 {
  "S.No.": 792,
  "Code": "Y20",
  "MCCD Description": "Hanging, strangulation and suffocation, undetermined intent"
 },
 {
  "S.No.": 793,
  "Code": "R51",
  "MCCD Description": "Headache"
 },
 {
  "S.No.": 794,
  "Code": "I50",
  "MCCD Description": "Heart failure"
 },
 {
  "S.No.": 795,
  "Code": "R12",
  "MCCD Description": "Heartburn"
 },
 {
  "S.No.": 796,
  "Code": "G81",
  "MCCD Description": "Hemiplegia"
 },
 {
  "S.No.": 797,
  "Code": "K72",
  "MCCD Description": "Hepatic failure, not elsewhere classified"
 },
 {
  "S.No.": 798,
  "Code": "R16",
  "MCCD Description": "Hepatomegaly and splenomegaly, not elsewhere classified"
 },
 {
  "S.No.": 799,
  "Code": "G60",
  "MCCD Description": "Hereditary and idiopathic neuropathy"
 },
 {
  "S.No.": 800,
  "Code": "G11",
  "MCCD Description": "Hereditary ataxia"
 },
 {
  "S.No.": 801,
  "Code": "D67",
  "MCCD Description": "Hereditary factor IX deficiency"
 },
 {
  "S.No.": 802,
  "Code": "D66",
  "MCCD Description": "Hereditary factor VIII deficiency"
 },
 {
  "S.No.": 803,
  "Code": "N07",
  "MCCD Description": "Hereditary nephropathy, not elsewhere classified"
 },
 {
  "S.No.": 804,
  "Code": "K40-K46",
  "MCCD Description": "Hernia"
 },
 {
  "S.No.": 805,
  "Code": "B00",
  "MCCD Description": "Herpesviral [herpes simplex] infections"
 },
 {
  "S.No.": 806,
  "Code": "B39",
  "MCCD Description": "Histoplasmosis"
 },
 {
  "S.No.": 807,
  "Code": "W50",
  "MCCD Description": "Hit, struck, kicked, twisted, bitten or scratched by another person"
 },
 {
  "S.No.": 808,
  "Code": "C81",
  "MCCD Description": "Hodgkin's disease"
 },
 {
  "S.No.": 809,
  "Code": "B76",
  "MCCD Description": "Hookworm diseases"
 },
 {
  "S.No.": 810,
  "Code": "H00",
  "MCCD Description": "Hordeolum and chalazion"
 },
 {
  "S.No.": 811,
  "Code": "Y42",
  "MCCD Description": "Hormones and their synthetic substitutes and antagonists, not elsewhere classified"
 },
 {
  "S.No.": 812,
  "Code": "B20-B24",
  "MCCD Description": "Human immunodeficiency virus [HIV] disease "
 },
 {
  "S.No.": 813,
  "Code": "B20",
  "MCCD Description": "Human immunodeficiency virus [HIV] disease resulting in infectious and parasitic diseases"
 },
 {
  "S.No.": 814,
  "Code": "B21",
  "MCCD Description": "Human immunodeficiency virus [HIV] disease resulting in malignant neoplasms"
 },
 {
  "S.No.": 815,
  "Code": "B23",
  "MCCD Description": "Human immunodeficiency virus [HIV] disease resulting in other conditions"
 },
 {
  "S.No.": 816,
  "Code": "B22",
  "MCCD Description": "Human immunodeficiency virus [HIV] disease resulting in other specified diseases"
 },
 {
  "S.No.": 817,
  "Code": "G10",
  "MCCD Description": "Huntingtons disease"
 },
 {
  "S.No.": 818,
  "Code": "O01",
  "MCCD Description": "Hydatidiform mole"
 },
 {
  "S.No.": 819,
  "Code": "N43",
  "MCCD Description": "Hydrocele and spermatocele"
 },
 {
  "S.No.": 820,
  "Code": "G91",
  "MCCD Description": "Hydrocephalus"
 },
 {
  "S.No.": 821,
  "Code": "P56",
  "MCCD Description": "Hydrops fetalis due to haemolytic disease"
 },
 {
  "S.No.": 822,
  "Code": "E26",
  "MCCD Description": "Hyperaldosteronism"
 },
 {
  "S.No.": 823,
  "Code": "E22",
  "MCCD Description": "Hyperfunction of pituitary gland"
 },
 {
  "S.No.": 824,
  "Code": "R61",
  "MCCD Description": "Hyperhidrosis"
 },
 {
  "S.No.": 825,
  "Code": "F90",
  "MCCD Description": "Hyperkinetic disorders"
 },
 {
  "S.No.": 826,
  "Code": "E21",
  "MCCD Description": "Hyperparathyroidism and other disorders of parathyroid gland"
 },
 {
  "S.No.": 827,
  "Code": "N40",
  "MCCD Description": "Hyperplasia of prostate"
 },
 {
  "S.No.": 828,
  "Code": "J67",
  "MCCD Description": "Hypersensitivity pneumonitis due to organic dust"
 },
 {
  "S.No.": 829,
  "Code": "I13",
  "MCCD Description": "Hypertensive heart and renal disease"
 },
 {
  "S.No.": 830,
  "Code": "I11",
  "MCCD Description": "Hypertensive heart diseases"
 },
 {
  "S.No.": 831,
  "Code": "I12",
  "MCCD Description": "Hypertensive renal disease"
 },
 {
  "S.No.": 832,
  "Code": "L68",
  "MCCD Description": "Hypertrichosis"
 },
 {
  "S.No.": 833,
  "Code": "L91",
  "MCCD Description": "Hypertrophic disorders of skin"
 },
 {
  "S.No.": 834,
  "Code": "N62",
  "MCCD Description": "Hypertrophy of breast"
 },
 {
  "S.No.": 835,
  "Code": "E23",
  "MCCD Description": "Hypofunction and other disorders of pituitary gland"
 },
 {
  "S.No.": 836,
  "Code": "E20",
  "MCCD Description": "Hypoparathyroidism"
 },
 {
  "S.No.": 837,
  "Code": "Q54",
  "MCCD Description": "Hypospadias"
 },
 {
  "S.No.": 838,
  "Code": "I95",
  "MCCD Description": "Hypotension"
 },
 {
  "S.No.": 839,
  "Code": "T68",
  "MCCD Description": "Hypothermia"
 },
 {
  "S.No.": 840,
  "Code": "P80",
  "MCCD Description": "Hypothermia of newborn"
 },
 {
  "S.No.": 841,
  "Code": "P20-P28",
  "MCCD Description": "Hypoxia, birth asphyxia and other respiratory conditions"
 },
 {
  "S.No.": 842,
  "Code": "D82",
  "MCCD Description": "Immunodeficiency associated with other major defects"
 },
 {
  "S.No.": 843,
  "Code": "D80",
  "MCCD Description": "Immunodeficiency with predominantly antibody defects"
 },
 {
  "S.No.": 844,
  "Code": "L01",
  "MCCD Description": "Impetigo"
 },
 {
  "S.No.": 845,
  "Code": "Q56",
  "MCCD Description": "Indeterminate sex and pseudohermaphroditism"
 },
 {
  "S.No.": 846,
  "Code": "O98-O99",
  "MCCD Description": "Indirect obstetric deaths"
 },
 {
  "S.No.": 847,
  "Code": "F24",
  "MCCD Description": "Induced delusional disorder"
 },
 {
  "S.No.": 848,
  "Code": "G80",
  "MCCD Description": "Infantile cerebral palsy"
 },
 {
  "S.No.": 849,
  "Code": "A31",
  "MCCD Description": "Infection due to other mycobacteria"
 },
 {
  "S.No.": 850,
  "Code": "O91",
  "MCCD Description": "Infections of breast associated with childbirth"
 },
 {
  "S.No.": 851,
  "Code": "O23",
  "MCCD Description": "Infections of genitourinary tract in pregnancy"
 },
 {
  "S.No.": 852,
  "Code": "L00-L08",
  "MCCD Description": "Infections of the skin and subcutaneous tissue"
 },
 {
  "S.No.": 853,
  "Code": "B27",
  "MCCD Description": "Infectious mononucleosis"
 },
 {
  "S.No.": 854,
  "Code": "N72",
  "MCCD Description": "Inflammatory disease of cervix uteri"
 },
 {
  "S.No.": 855,
  "Code": "N71",
  "MCCD Description": "Inflammatory disease of uterus, except cervix"
 },
 {
  "S.No.": 856,
  "Code": "N41",
  "MCCD Description": "Inflammatory diseases of prostate"
 },
 {
  "S.No.": 857,
  "Code": "N61",
  "MCCD Description": "Inflammatory disorders of breast"
 },
 {
  "S.No.": 858,
  "Code": "N49",
  "MCCD Description": "Inflammatory disorders of male genital organs, not elsewhere classified"
 },
 {
  "S.No.": 859,
  "Code": "G61",
  "MCCD Description": "Inflammatory polyneuropathy"
 },
 {
  "S.No.": 860,
  "Code": "J10-J11",
  "MCCD Description": "Influenza"
 },
 {
  "S.No.": 861,
  "Code": "J10",
  "MCCD Description": "Influenza due to identified influenza virus"
 },
 {
  "S.No.": 862,
  "Code": "J11",
  "MCCD Description": "Influenza, virus not identified"
 },
 {
  "S.No.": 863,
  "Code": "K40",
  "MCCD Description": "Inguinal hernia"
 },
 {
  "S.No.": 864,
  "Code": "W79",
  "MCCD Description": "Inhalation and ingestion of food causing obstruction of respiratory tract"
 },
 {
  "S.No.": 865,
  "Code": "W80",
  "MCCD Description": "Inhalation and ingestion of other objects causing obstruction of respiratory tract"
 },
 {
  "S.No.": 866,
  "Code": "W78",
  "MCCD Description": "Inhalation of gastric contents"
 },
 {
  "S.No.": 867,
  "Code": "S35",
  "MCCD Description": "Injury of blood vessels at abdomen, lower back and pelvis level"
 },
 {
  "S.No.": 868,
  "Code": "S95",
  "MCCD Description": "Injury of blood vessels at ankle and foot level"
 },
 {
  "S.No.": 869,
  "Code": "S55",
  "MCCD Description": "Injury of blood vessels at forearm level"
 },
 {
  "S.No.": 870,
  "Code": "S75",
  "MCCD Description": "Injury of blood vessels at hip and thigh level"
 },
 {
  "S.No.": 871,
  "Code": "S85",
  "MCCD Description": "Injury of blood vessels at lower leg level"
 },
 {
  "S.No.": 872,
  "Code": "S15",
  "MCCD Description": "Injury of blood vessels at neck level"
 },
 {
  "S.No.": 873,
  "Code": "S45",
  "MCCD Description": "Injury of blood vessels at shoulder and upper arm level"
 },
 {
  "S.No.": 874,
  "Code": "S65",
  "MCCD Description": "Injury of blood vessels at wrist and hand level"
 },
 {
  "S.No.": 875,
  "Code": "S25",
  "MCCD Description": "Injury of blood vessels of thorax"
 },
 {
  "S.No.": 876,
  "Code": "S04",
  "MCCD Description": "Injury of cranial nerves"
 },
 {
  "S.No.": 877,
  "Code": "S05",
  "MCCD Description": "Injury of eye and orbit"
 },
 {
  "S.No.": 878,
  "Code": "S26",
  "MCCD Description": "Injury of heart"
 },
 {
  "S.No.": 879,
  "Code": "S36",
  "MCCD Description": "Injury of intra-abdominal organs"
 },
 {
  "S.No.": 880,
  "Code": "S96",
  "MCCD Description": "Injury of muscle and tendon at ankle and foot level"
 },
 {
  "S.No.": 881,
  "Code": "S56",
  "MCCD Description": "Injury of muscle and tendon at forearm level"
 },
 {
  "S.No.": 882,
  "Code": "S76",
  "MCCD Description": "Injury of muscle and tendon at hip and thigh level"
 },
 {
  "S.No.": 883,
  "Code": "S86",
  "MCCD Description": "Injury of muscle and tendon at lower leg level"
 },
 {
  "S.No.": 884,
  "Code": "S16",
  "MCCD Description": "Injury of muscle and tendon at neck level"
 },
 {
  "S.No.": 885,
  "Code": "S46",
  "MCCD Description": "Injury of muscle and tendon at shoulder and upper arm level"
 },
 {
  "S.No.": 886,
  "Code": "S66",
  "MCCD Description": "Injury of muscle and tendon at wrist and hand level"
 },
 {
  "S.No.": 887,
  "Code": "S34",
  "MCCD Description": "Injury of nerves and lumbar spinal cord at abdomen, lower back and pelvis level"
 },
 {
  "S.No.": 888,
  "Code": "S14",
  "MCCD Description": "Injury of nerves and spinal cord at neck level"
 },
 {
  "S.No.": 889,
  "Code": "S24",
  "MCCD Description": "Injury of nerves and spinal cord at thorax level"
 },
 {
  "S.No.": 890,
  "Code": "S94",
  "MCCD Description": "Injury of nerves at ankle and foot level"
 },
 {
  "S.No.": 891,
  "Code": "S54",
  "MCCD Description": "Injury of nerves at forearm level"
 },
 {
  "S.No.": 892,
  "Code": "S74",
  "MCCD Description": "Injury of nerves at hip and thigh level"
 },
 {
  "S.No.": 893,
  "Code": "S84",
  "MCCD Description": "Injury of nerves at lower leg level"
 },
 {
  "S.No.": 894,
  "Code": "S44",
  "MCCD Description": "Injury of nerves at shoulder and upper arm level"
 },
 {
  "S.No.": 895,
  "Code": "S64",
  "MCCD Description": "Injury of nerves at wrist and hand level"
 },
 {
  "S.No.": 896,
  "Code": "S27",
  "MCCD Description": "Injury of other and unspecified intrathoracic organs"
 },
 {
  "S.No.": 897,
  "Code": "T14",
  "MCCD Description": "Injury of unspecified body region"
 },
 {
  "S.No.": 898,
  "Code": "S37",
  "MCCD Description": "Injury of urinary and pelvic organs"
 },
 {
  "S.No.": 899,
  "Code": "E10",
  "MCCD Description": "Insulin-dependent diabetes mellitus"
 },
 {
  "S.No.": 900,
  "Code": "X60-X84",
  "MCCD Description": "Intentional self-harm  Suicide- attempted"
 },
 {
  "S.No.": 901,
  "Code": "X79",
  "MCCD Description": "Intentional self-harm by blunt object"
 },
 {
  "S.No.": 902,
  "Code": "X82",
  "MCCD Description": "Intentional self-harm by crashing of motor vehicle"
 },
 {
  "S.No.": 903,
  "Code": "X71",
  "MCCD Description": "Intentional self-harm by drowning and submersion"
 },
 {
  "S.No.": 904,
  "Code": "X75",
  "MCCD Description": "Intentional self-harm by explosive material"
 },
 {
  "S.No.": 905,
  "Code": "X72",
  "MCCD Description": "Intentional self-harm by handgun discharge"
 },
 {
  "S.No.": 906,
  "Code": "X70",
  "MCCD Description": "Intentional self-harm by hanging, strangulation and suffocation"
 },
 {
  "S.No.": 907,
  "Code": "X80",
  "MCCD Description": "Intentional self-harm by jumping from a high place"
 },
 {
  "S.No.": 908,
  "Code": "X81",
  "MCCD Description": "Intentional self-harm by jumping or lying before moving object"
 },
 {
  "S.No.": 909,
  "Code": "X74",
  "MCCD Description": "Intentional self-harm by other and unspecified firearm discharge"
 },
 {
  "S.No.": 910,
  "Code": "X83",
  "MCCD Description": "Intentional self-harm by other specified means"
 },
 {
  "S.No.": 911,
  "Code": "X73",
  "MCCD Description": "Intentional self-harm by rifle, shotgun and larger firearm discharge"
 },
 {
  "S.No.": 912,
  "Code": "X78",
  "MCCD Description": "Intentional self-harm by sharp object"
 },
 {
  "S.No.": 913,
  "Code": "X76",
  "MCCD Description": "Intentional self-harm by smoke, fire and flames"
 },
 {
  "S.No.": 914,
  "Code": "X77",
  "MCCD Description": "Intentional self-harm by steam, hot vapours and hot objects"
 },
 {
  "S.No.": 915,
  "Code": "X84",
  "MCCD Description": "Intentional self-harm by unspecified means"
 },
 {
  "S.No.": 916,
  "Code": "X65",
  "MCCD Description": "Intentional self-poisoning by and exposure to alcohol"
 },
 {
  "S.No.": 917,
  "Code": "X61",
  "MCCD Description": "Intentional self-poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and"
 },
 {
  "S.No.": 918,
  "Code": "X62",
  "MCCD Description": "Intentional self-poisoning by and exposure to narcotics and psychodysleptics"
 },
 {
  "S.No.": 919,
  "Code": "X60",
  "MCCD Description": "Intentional self-poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics"
 },
 {
  "S.No.": 920,
  "Code": "X66",
  "MCCD Description": "Intentional self-poisoning by and exposure to organic solvents and halogenated hydrocarbons and thei"
 },
 {
  "S.No.": 921,
  "Code": "X69",
  "MCCD Description": "Intentional self-poisoning by and exposure to other and unspecified chemicals and noxious substances"
 },
 {
  "S.No.": 922,
  "Code": "X64",
  "MCCD Description": "Intentional self-poisoning by and exposure to other and unspecified drugs, medicaments and biologica"
 },
 {
  "S.No.": 923,
  "Code": "X63",
  "MCCD Description": "Intentional self-poisoning by and exposure to other drugs acting on the autonomic nervous system"
 },
 {
  "S.No.": 924,
  "Code": "X67",
  "MCCD Description": "Intentional self-poisoning by and exposure to other gases and vapours"
 },
 {
  "S.No.": 925,
  "Code": "X68",
  "MCCD Description": "Intentional self-poisoning by and exposure to pesticides"
 },
 {
  "S.No.": 926,
  "Code": "M23",
  "MCCD Description": "Internal derangement of knee"
 },
 {
  "S.No.": 927,
  "Code": "P25",
  "MCCD Description": "Interstitial emphysema and related conditions originating in the perinatal period"
 },
 {
  "S.No.": 928,
  "Code": "K90",
  "MCCD Description": "Intestinal malabsorption"
 },
 {
  "S.No.": 929,
  "Code": "I61",
  "MCCD Description": "Intracerebral haemorrhage"
 },
 {
  "S.No.": 930,
  "Code": "S04,S06,S14,S24,S26-S27,S34,S36-S37,S44,S54,S64,S74,S84 & S94",
  "MCCD Description": "Intracranial and internal injuries, including nerves"
 },
 {
  "S.No.": 931,
  "Code": "G06",
  "MCCD Description": "Intracranial and intraspinal abscess and granuloma"
 },
 {
  "S.No.": 932,
  "Code": "G08",
  "MCCD Description": "Intracranial and intraspinal phlebitis and thrombophlebitis"
 },
 {
  "S.No.": 933,
  "Code": "S06",
  "MCCD Description": "Intracranial injury"
 },
 {
  "S.No.": 934,
  "Code": "P10",
  "MCCD Description": "Intracranial laceration and haemorrhage due to birth injury"
 },
 {
  "S.No.": 935,
  "Code": "P52",
  "MCCD Description": "Intracranial nontraumatic haemorrhage of fetus and newborn"
 },
 {
  "S.No.": 936,
  "Code": "P20",
  "MCCD Description": "Intrauterine hypoxia"
 },
 {
  "S.No.": 937,
  "Code": "E01",
  "MCCD Description": "Iodine-deficiency-related thyroid disorders and allied conditions"
 },
 {
  "S.No.": 938,
  "Code": "H20",
  "MCCD Description": "Iridocyclitis"
 },
 {
  "S.No.": 939,
  "Code": "D50",
  "MCCD Description": "Iron deficiency anaemia"
 },
 {
  "S.No.": 940,
  "Code": "K58",
  "MCCD Description": "Irritable bowel syndrome"
 },
 {
  "S.No.": 941,
  "Code": "L24",
  "MCCD Description": "Irritant contact dermatitis"
 },
 {
  "S.No.": 942,
  "Code": "R80",
  "MCCD Description": "Isolated proteinuria"
 },
 {
  "S.No.": 943,
  "Code": "N06",
  "MCCD Description": "Isolated proteinuria with specified morphological lesion"
 },
 {
  "S.No.": 944,
  "Code": "A83",
  "MCCD Description": "Japanese encephalitis"
 },
 {
  "S.No.": 945,
  "Code": "M08",
  "MCCD Description": "Juvenile arthritis"
 },
 {
  "S.No.": 946,
  "Code": "M09",
  "MCCD Description": "Juvenile arthritis in diseases classified elsewhere"
 },
 {
  "S.No.": 947,
  "Code": "M91",
  "MCCD Description": "Juvenile osteochondrosis of hip and pelvis"
 },
 {
  "S.No.": 948,
  "Code": "C46",
  "MCCD Description": "Kaposis sarcoma"
 },
 {
  "S.No.": 949,
  "Code": "H16",
  "MCCD Description": "Keratitis"
 },
 {
  "S.No.": 950,
  "Code": "L86",
  "MCCD Description": "Keratoderma in diseases classified elsewhere"
 },
 {
  "S.No.": 951,
  "Code": "P57",
  "MCCD Description": "Kernicterus"
 },
 {
  "S.No.": 952,
  "Code": "E40",
  "MCCD Description": "Kwashiorkor"
 },
 {
  "S.No.": 953,
  "Code": "M40",
  "MCCD Description": "Kyphosis and lordosis"
 },
 {
  "S.No.": 954,
  "Code": "R75",
  "MCCD Description": "Laboratory evidence of human immunodeficiency virus [HIV]"
 },
 {
  "S.No.": 955,
  "Code": "O68",
  "MCCD Description": "Labour and delivery complicated by fetal stress [distress]"
 },
 {
  "S.No.": 956,
  "Code": "O67",
  "MCCD Description": "Labour and delivery complicated by intrapartum haemorrhage, not elsewhere classified"
 },
 {
  "S.No.": 957,
  "Code": "O69",
  "MCCD Description": "Labour and delivery complicated by umbilical cord complications"
 },
 {
  "S.No.": 958,
  "Code": "R62",
  "MCCD Description": "Lack of expected normal physiological development"
 },
 {
  "S.No.": 959,
  "Code": "X53",
  "MCCD Description": "Lack of food"
 },
 {
  "S.No.": 960,
  "Code": "X54",
  "MCCD Description": "Lack of water"
 },
 {
  "S.No.": 961,
  "Code": "E73",
  "MCCD Description": "Lactose intolerance"
 },
 {
  "S.No.": 962,
  "Code": "Y85-Y89",
  "MCCD Description": "Late effects of external causes of morbidity and mortality"
 },
 {
  "S.No.": 963,
  "Code": "T90-T98",
  "MCCD Description": "Late effects of injuries, of poisoning and of other consequences of external causes"
 },
 {
  "S.No.": 964,
  "Code": "A52",
  "MCCD Description": "Late syphilis"
 },
 {
  "S.No.": 965,
  "Code": "Y35",
  "MCCD Description": "Legal intervention"
 },
 {
  "S.No.": 966,
  "Code": "D25",
  "MCCD Description": "Leiomyoma of uterus"
 },
 {
  "S.No.": 967,
  "Code": "B55",
  "MCCD Description": "Leishmaniasis"
 },
 {
  "S.No.": 968,
  "Code": "A30",
  "MCCD Description": "Leprosy"
 },
 {
  "S.No.": 969,
  "Code": "A27",
  "MCCD Description": "Leptospirosis"
 },
 {
  "S.No.": 970,
  "Code": "C91-C95",
  "MCCD Description": "Leukaemia"
 },
 {
  "S.No.": 971,
  "Code": "C95",
  "MCCD Description": "Leukaemia of unspecified cell type"
 },
 {
  "S.No.": 972,
  "Code": "L43",
  "MCCD Description": "Lichen planus"
 },
 {
  "S.No.": 973,
  "Code": "L28",
  "MCCD Description": "Lichen simplex chronicus and prurigo"
 },
 {
  "S.No.": 974,
  "Code": "A32",
  "MCCD Description": "Listeriosis"
 },
 {
  "S.No.": 975,
  "Code": "E65",
  "MCCD Description": "Localized adiposity"
 },
 {
  "S.No.": 976,
  "Code": "R22",
  "MCCD Description": "Localized swelling, mass and lump of skin and subcutaneous tissue"
 },
 {
  "S.No.": 977,
  "Code": "O63",
  "MCCD Description": "Long labour"
 },
 {
  "S.No.": 978,
  "Code": "L93",
  "MCCD Description": "Lupus erythematosus"
 },
 {
  "S.No.": 979,
  "Code": "C91",
  "MCCD Description": "Lymphoid leukaemia"
 },
 {
  "S.No.": 980,
  "Code": "R53",
  "MCCD Description": "Malaise and fatigue"
 },
 {
  "S.No.": 981,
  "Code": "B50-B54",
  "MCCD Description": "Malaria"
 },
 {
  "S.No.": 982,
  "Code": "N46",
  "MCCD Description": "Male infertility"
 },
 {
  "S.No.": 983,
  "Code": "C88",
  "MCCD Description": "Malignant immunoproliferative diseases"
 },
 {
  "S.No.": 984,
  "Code": "C43",
  "MCCD Description": "Malignant melanoma of skin"
 },
 {
  "S.No.": 985,
  "Code": "C50",
  "MCCD Description": "Malignant neoplasm of  breast"
 },
 {
  "S.No.": 986,
  "Code": "C32",
  "MCCD Description": "Malignant neoplasm of  larynx"
 },
 {
  "S.No.": 987,
  "Code": "C31",
  "MCCD Description": "Malignant neoplasm of accessory sinuses"
 },
 {
  "S.No.": 988,
  "Code": "C74",
  "MCCD Description": "Malignant neoplasm of adrenal gland"
 },
 {
  "S.No.": 989,
  "Code": "C21",
  "MCCD Description": "Malignant neoplasm of anus and anal canal"
 },
 {
  "S.No.": 990,
  "Code": "C01",
  "MCCD Description": "Malignant neoplasm of base of tongue"
 },
 {
  "S.No.": 991,
  "Code": "C67",
  "MCCD Description": "Malignant neoplasm of bladder"
 },
 {
  "S.No.": 992,
  "Code": "C40-C41",
  "MCCD Description": "Malignant neoplasm of bone and articular cartilage"
 },
 {
  "S.No.": 993,
  "Code": "C40",
  "MCCD Description": "Malignant neoplasm of bone and articular cartilage of limbs"
 },
 {
  "S.No.": 994,
  "Code": "C41",
  "MCCD Description": "Malignant neoplasm of bone and articular cartilage of other and unspecified sites"
 },
 {
  "S.No.": 995,
  "Code": "C71",
  "MCCD Description": "Malignant neoplasm of brain"
 },
 {
  "S.No.": 996,
  "Code": "C53",
  "MCCD Description": "Malignant neoplasm of cervix uteri"
 },
 {
  "S.No.": 997,
  "Code": "C18",
  "MCCD Description": "Malignant neoplasm of colon"
 },
 {
  "S.No.": 998,
  "Code": "C54",
  "MCCD Description": "Malignant neoplasm of corpus uteri"
 },
 {
  "S.No.": 999,
  "Code": "C69",
  "MCCD Description": "Malignant neoplasm of eye & adnexa"
 },
 {
  "S.No.": 1000,
  "Code": "C04",
  "MCCD Description": "Malignant neoplasm of floor of mouth"
 },
 {
  "S.No.": 1001,
  "Code": "C23",
  "MCCD Description": "Malignant neoplasm of gallbladder"
 },
 {
  "S.No.": 1002,
  "Code": "C03",
  "MCCD Description": "Malignant neoplasm of gum"
 },
 {
  "S.No.": 1003,
  "Code": "C38",
  "MCCD Description": "Malignant neoplasm of heart, mediastinum and pleura"
 },
 {
  "S.No.": 1004,
  "Code": "C13",
  "MCCD Description": "Malignant neoplasm of hypopharynx"
 },
 {
  "S.No.": 1005,
  "Code": "C64",
  "MCCD Description": "Malignant neoplasm of kidney, except renal pelvis"
 },
 {
  "S.No.": 1006,
  "Code": "C00",
  "MCCD Description": "Malignant neoplasm of lip"
 },
 {
  "S.No.": 1007,
  "Code": "C22",
  "MCCD Description": "Malignant neoplasm of liver and intrahepatic bile ducts"
 },
 {
  "S.No.": 1008,
  "Code": "C70",
  "MCCD Description": "Malignant neoplasm of meninges"
 },
 {
  "S.No.": 1009,
  "Code": "C70-C72",
  "MCCD Description": "Malignant neoplasm of meninges, brain and other parts of central nervious system"
 },
 {
  "S.No.": 1010,
  "Code": "C30",
  "MCCD Description": "Malignant neoplasm of nasal cavity and middle ear"
 },
 {
  "S.No.": 1011,
  "Code": "C11",
  "MCCD Description": "Malignant neoplasm of nasopharynx"
 },
 {
  "S.No.": 1012,
  "Code": "C15",
  "MCCD Description": "Malignant neoplasm of oesophagus"
 },
 {
  "S.No.": 1013,
  "Code": "C10",
  "MCCD Description": "Malignant neoplasm of oropharynx"
 },
 {
  "S.No.": 1014,
  "Code": "C26",
  "MCCD Description": "Malignant neoplasm of other and ill-defined digestive organs"
 },
 {
  "S.No.": 1015,
  "Code": "C76",
  "MCCD Description": "Malignant neoplasm of other and ill-defined sites"
 },
 {
  "S.No.": 1016,
  "Code": "C14",
  "MCCD Description": "Malignant neoplasm of other and ill-defined sites in the lip, oral cavity and pharynx"
 },
 {
  "S.No.": 1017,
  "Code": "C39",
  "MCCD Description": "Malignant neoplasm of other and ill-defined sites in the respiratory system and intrathoracic organs"
 },
 {
  "S.No.": 1018,
  "Code": "C57",
  "MCCD Description": "Malignant neoplasm of other and unspecified female genital organs"
 },
 {
  "S.No.": 1019,
  "Code": "C08",
  "MCCD Description": "Malignant neoplasm of other and unspecified major salivary glands"
 },
 {
  "S.No.": 1020,
  "Code": "C63",
  "MCCD Description": "Malignant neoplasm of other and unspecified male genital organs"
 },
 {
  "S.No.": 1021,
  "Code": "C24",
  "MCCD Description": "Malignant neoplasm of other and unspecified parts of biliary tract"
 },
 {
  "S.No.": 1022,
  "Code": "C06",
  "MCCD Description": "Malignant neoplasm of other and unspecified parts of mouth"
 },
 {
  "S.No.": 1023,
  "Code": "C02",
  "MCCD Description": "Malignant neoplasm of other and unspecified parts of tongue"
 },
 {
  "S.No.": 1024,
  "Code": "C54-C55",
  "MCCD Description": "Malignant neoplasm of other and unspecified parts of uterus"
 },
 {
  "S.No.": 1025,
  "Code": "C68",
  "MCCD Description": "Malignant neoplasm of other and unspecified urinary organs"
 },
 {
  "S.No.": 1026,
  "Code": "C49",
  "MCCD Description": "Malignant neoplasm of other connective and soft tissue"
 },
 {
  "S.No.": 1027,
  "Code": "C75",
  "MCCD Description": "Malignant neoplasm of other endocrine glands and related structures"
 },
 {
  "S.No.": 1028,
  "Code": "C73-C80 & C97",
  "MCCD Description": "Malignant neoplasm of other, ill-defined, secondary,unspecified and multiple sites"
 },
 {
  "S.No.": 1029,
  "Code": "C56",
  "MCCD Description": "Malignant neoplasm of ovary"
 },
 {
  "S.No.": 1030,
  "Code": "C05",
  "MCCD Description": "Malignant neoplasm of palate"
 },
 {
  "S.No.": 1031,
  "Code": "C25",
  "MCCD Description": "Malignant neoplasm of pancreas"
 },
 {
  "S.No.": 1032,
  "Code": "C07",
  "MCCD Description": "Malignant neoplasm of parotid gland"
 },
 {
  "S.No.": 1033,
  "Code": "C60",
  "MCCD Description": "Malignant neoplasm of penis"
 },
 {
  "S.No.": 1034,
  "Code": "C47",
  "MCCD Description": "Malignant neoplasm of peripheral nerves and autonomic nervous system"
 },
 {
  "S.No.": 1035,
  "Code": "C12",
  "MCCD Description": "Malignant neoplasm of piriform sinus"
 },
 {
  "S.No.": 1036,
  "Code": "C58",
  "MCCD Description": "Malignant neoplasm of placenta"
 },
 {
  "S.No.": 1037,
  "Code": "C61",
  "MCCD Description": "Malignant neoplasm of prostate"
 },
 {
  "S.No.": 1038,
  "Code": "C19",
  "MCCD Description": "Malignant neoplasm of rectosigmoid junction"
 },
 {
  "S.No.": 1039,
  "Code": "C19-C21",
  "MCCD Description": "Malignant neoplasm of rectosigmoid junction,rectum,anus and anal canal"
 },
 {
  "S.No.": 1040,
  "Code": "C20",
  "MCCD Description": "Malignant neoplasm of rectum"
 },
 {
  "S.No.": 1041,
  "Code": "C65",
  "MCCD Description": "Malignant neoplasm of renal pelvis"
 },
 {
  "S.No.": 1042,
  "Code": "C48",
  "MCCD Description": "Malignant neoplasm of retroperitoneum and peritoneum"
 },
 {
  "S.No.": 1043,
  "Code": "C17",
  "MCCD Description": "Malignant neoplasm of small intestine including duodenum"
 },
 {
  "S.No.": 1044,
  "Code": "C72",
  "MCCD Description": "Malignant neoplasm of spinal cord, cranial nerves and other parts of central nervous system"
 },
 {
  "S.No.": 1045,
  "Code": "C16",
  "MCCD Description": "Malignant neoplasm of stomach"
 },
 {
  "S.No.": 1046,
  "Code": "C62",
  "MCCD Description": "Malignant neoplasm of testis"
 },
 {
  "S.No.": 1047,
  "Code": "C37",
  "MCCD Description": "Malignant neoplasm of thymus"
 },
 {
  "S.No.": 1048,
  "Code": "C73",
  "MCCD Description": "Malignant neoplasm of thyroid gland"
 },
 {
  "S.No.": 1049,
  "Code": "C09",
  "MCCD Description": "Malignant neoplasm of tonsil"
 },
 {
  "S.No.": 1050,
  "Code": "C33-C34",
  "MCCD Description": "Malignant neoplasm of trachea, bronchus and lung"
 },
 {
  "S.No.": 1051,
  "Code": "C66",
  "MCCD Description": "Malignant neoplasm of ureter"
 },
 {
  "S.No.": 1052,
  "Code": "C55",
  "MCCD Description": "Malignant neoplasm of uterus, part unspecified"
 },
 {
  "S.No.": 1053,
  "Code": "C52",
  "MCCD Description": "Malignant neoplasm of vagina"
 },
 {
  "S.No.": 1054,
  "Code": "C51",
  "MCCD Description": "Malignant neoplasm of vulva"
 },
 {
  "S.No.": 1055,
  "Code": "C80",
  "MCCD Description": "Malignant neoplasm without specification of site"
 },
 {
  "S.No.": 1056,
  "Code": "C97",
  "MCCD Description": "Malignant neoplasms of independent (primary) multiple sites"
 },
 {
  "S.No.": 1057,
  "Code": "C00-C14",
  "MCCD Description": "Malignant neoplasms of lip, oral cavity and pharynx"
 },
 {
  "S.No.": 1058,
  "Code": "C45-C49",
  "MCCD Description": "Malignant neoplasms of mesothelial and soft tissue"
 },
 {
  "S.No.": 1059,
  "Code": "O25",
  "MCCD Description": "Malnutrition in pregnancy"
 },
 {
  "S.No.": 1060,
  "Code": "E12",
  "MCCD Description": "Malnutrition-related diabetes mellitus"
 },
 {
  "S.No.": 1061,
  "Code": "T74",
  "MCCD Description": "Maltreatment syndromes"
 },
 {
  "S.No.": 1062,
  "Code": "F30",
  "MCCD Description": "Manic episode"
 },
 {
  "S.No.": 1063,
  "Code": "E42",
  "MCCD Description": "Marasmic kwashiorkor"
 },
 {
  "S.No.": 1064,
  "Code": "H70",
  "MCCD Description": "Mastoiditis and related conditions"
 },
 {
  "S.No.": 1065,
  "Code": "O34",
  "MCCD Description": "Maternal care for known or suspected abnormality of pelvic organs"
 },
 {
  "S.No.": 1066,
  "Code": "O33",
  "MCCD Description": "Maternal care for known or suspected disproportion"
 },
 {
  "S.No.": 1067,
  "Code": "O35",
  "MCCD Description": "Maternal care for known or suspected fetal abnormality and damage"
 },
 {
  "S.No.": 1068,
  "Code": "O32",
  "MCCD Description": "Maternal care for known or suspected malpresentation of fetus"
 },
 {
  "S.No.": 1069,
  "Code": "O26",
  "MCCD Description": "Maternal care for other conditions predominantly related to pregnancy"
 },
 {
  "S.No.": 1070,
  "Code": "O36",
  "MCCD Description": "Maternal care for other known or suspected fetal problems"
 },
 {
  "S.No.": 1071,
  "Code": "O98",
  "MCCD Description": "Maternal infectious and parasitic diseases classifiable elsewhere but complicating pregnancy, childb"
 },
 {
  "S.No.": 1072,
  "Code": "B05",
  "MCCD Description": "Measles"
 },
 {
  "S.No.": 1073,
  "Code": "P75",
  "MCCD Description": "Meconium ileus"
 },
 {
  "S.No.": 1074,
  "Code": "O04",
  "MCCD Description": "Medical abortion"
 },
 {
  "S.No.": 1075,
  "Code": "D22",
  "MCCD Description": "Melanocytic naevi"
 },
 {
  "S.No.": 1076,
  "Code": "D03",
  "MCCD Description": "Melanoma in situ"
 },
 {
  "S.No.": 1077,
  "Code": "G00 & G03",
  "MCCD Description": "Meningitis"
 },
 {
  "S.No.": 1078,
  "Code": "G03",
  "MCCD Description": "Meningitis due to other and unspecified causes"
 },
 {
  "S.No.": 1079,
  "Code": "A39",
  "MCCD Description": "Meningococcal infection"
 },
 {
  "S.No.": 1080,
  "Code": "N95",
  "MCCD Description": "Menopausal and other perimenopausal disorders"
 },
 {
  "S.No.": 1081,
  "Code": "F53",
  "MCCD Description": "Mental and behavioural disorders associated with the puerperium, not elsewhere classified"
 },
 {
  "S.No.": 1082,
  "Code": "F19",
  "MCCD Description": "Mental and behavioural disorders due to multiple drug use and use of other psychoactive substances"
 },
 {
  "S.No.": 1083,
  "Code": "F10-F19",
  "MCCD Description": "Mental and behavioural disorders due to psychoactive substance use"
 },
 {
  "S.No.": 1084,
  "Code": "F10",
  "MCCD Description": "Mental and behavioural disorders due to use of alcohol"
 },
 {
  "S.No.": 1085,
  "Code": "F12",
  "MCCD Description": "Mental and behavioural disorders due to use of cannabinoids"
 },
 {
  "S.No.": 1086,
  "Code": "F14",
  "MCCD Description": "Mental and behavioural disorders due to use of cocaine"
 },
 {
  "S.No.": 1087,
  "Code": "F16",
  "MCCD Description": "Mental and behavioural disorders due to use of hallucinogens"
 },
 {
  "S.No.": 1088,
  "Code": "F11",
  "MCCD Description": "Mental and behavioural disorders due to use of opioids"
 },
 {
  "S.No.": 1089,
  "Code": "F15",
  "MCCD Description": "Mental and behavioural disorders due to use of other stimulants, including caffeine"
 },
 {
  "S.No.": 1090,
  "Code": "F13",
  "MCCD Description": "Mental and behavioural disorders due to use of sedatives or hypnotics"
 },
 {
  "S.No.": 1091,
  "Code": "F17",
  "MCCD Description": "Mental and behavioural disorders due to use of tobacco"
 },
 {
  "S.No.": 1092,
  "Code": "F18",
  "MCCD Description": "Mental and behavioural disorders due to use of volatile solvents"
 },
 {
  "S.No.": 1093,
  "Code": "F99",
  "MCCD Description": "Mental disorder, not otherwise specified"
 },
 {
  "S.No.": 1094,
  "Code": "C45",
  "MCCD Description": "Mesothelioma"
 },
 {
  "S.No.": 1095,
  "Code": "D74",
  "MCCD Description": "Methaemoglobinaemia"
 },
 {
  "S.No.": 1096,
  "Code": "Q02",
  "MCCD Description": "Microcephaly"
 },
 {
  "S.No.": 1097,
  "Code": "G43",
  "MCCD Description": "Migraine"
 },
 {
  "S.No.": 1098,
  "Code": "F70",
  "MCCD Description": "Mild mental retardation"
 },
 {
  "S.No.": 1099,
  "Code": "A19",
  "MCCD Description": "Miliary tuberculosis"
 },
 {
  "S.No.": 1100,
  "Code": "Y60-Y69,Y70-Y82 & Y83-Y84",
  "MCCD Description": "Misadventures during surgical & medical care,adverse incidents in diagnostic and therapeuticuse, abn"
 },
 {
  "S.No.": 1101,
  "Code": "F61",
  "MCCD Description": "Mixed and other personality disorders"
 },
 {
  "S.No.": 1102,
  "Code": "F92",
  "MCCD Description": "Mixed disorders of conduct and emotions"
 },
 {
  "S.No.": 1103,
  "Code": "F83",
  "MCCD Description": "Mixed specific developmental disorders"
 },
 {
  "S.No.": 1104,
  "Code": "F71",
  "MCCD Description": "Moderate mental retardation"
 },
 {
  "S.No.": 1105,
  "Code": "B04",
  "MCCD Description": "Monkeypox"
 },
 {
  "S.No.": 1106,
  "Code": "C93",
  "MCCD Description": "Monocytic leukaemia"
 },
 {
  "S.No.": 1107,
  "Code": "G57",
  "MCCD Description": "Mononeuropathies of lower limb"
 },
 {
  "S.No.": 1108,
  "Code": "G56",
  "MCCD Description": "Mononeuropathies of upper limb"
 },
 {
  "S.No.": 1109,
  "Code": "G59",
  "MCCD Description": "Mononeuropathy in diseases classified elsewhere"
 },
 {
  "S.No.": 1110,
  "Code": "Q93",
  "MCCD Description": "Monosomies and deletions from the autosomes, not elsewhere classified"
 },
 {
  "S.No.": 1111,
  "Code": "V02-V04,V09-V09,V12-V14,V19-V19,V19,V20-V28,V29-V29,V29, V30",
  "MCCD Description": "Motor vehicle traffic accidents"
 },
 {
  "S.No.": 1112,
  "Code": "V29.8",
  "MCCD Description": "Motorcycle rider [any] injured in other specified transport accidents"
 },
 {
  "S.No.": 1113,
  "Code": "V29.3",
  "MCCD Description": "Motorcycle rider [any] injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1114,
  "Code": "V29.9",
  "MCCD Description": "Motorcycle rider [any] injured in unspecified traffic accident"
 },
 {
  "S.No.": 1115,
  "Code": "V23",
  "MCCD Description": "Motorcycle rider injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1116,
  "Code": "V27",
  "MCCD Description": "Motorcycle rider injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 1117,
  "Code": "V24",
  "MCCD Description": "Motorcycle rider injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 1118,
  "Code": "V26",
  "MCCD Description": "Motorcycle rider injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1119,
  "Code": "V21",
  "MCCD Description": "Motorcycle rider injured in collision with pedal cycle"
 },
 {
  "S.No.": 1120,
  "Code": "V20",
  "MCCD Description": "Motorcycle rider injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1121,
  "Code": "V25",
  "MCCD Description": "Motorcycle rider injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1122,
  "Code": "V22",
  "MCCD Description": "Motorcycle rider injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1123,
  "Code": "V28",
  "MCCD Description": "Motorcycle rider injured in noncollision transport accident"
 },
 {
  "S.No.": 1124,
  "Code": "O84",
  "MCCD Description": "Multiple delivery"
 },
 {
  "S.No.": 1125,
  "Code": "O30",
  "MCCD Description": "Multiple gestation"
 },
 {
  "S.No.": 1126,
  "Code": "C90",
  "MCCD Description": "Multiple myeloma and malignant plasma cell neoplasms"
 },
 {
  "S.No.": 1127,
  "Code": "G35",
  "MCCD Description": "Multiple sclerosis"
 },
 {
  "S.No.": 1128,
  "Code": "I08",
  "MCCD Description": "Multiple valve diseases"
 },
 {
  "S.No.": 1129,
  "Code": "B26",
  "MCCD Description": "Mumps"
 },
 {
  "S.No.": 1130,
  "Code": "G70",
  "MCCD Description": "Myasthenia gravis and other myoneural disorders"
 },
 {
  "S.No.": 1131,
  "Code": "B47",
  "MCCD Description": "Mycetoma"
 },
 {
  "S.No.": 1132,
  "Code": "D46",
  "MCCD Description": "Myelodysplastic syndromes"
 },
 {
  "S.No.": 1133,
  "Code": "C92",
  "MCCD Description": "Myeloid leukaemia"
 },
 {
  "S.No.": 1134,
  "Code": "B87",
  "MCCD Description": "Myiasis"
 },
 {
  "S.No.": 1135,
  "Code": "I41",
  "MCCD Description": "Myocarditis in diseases classified elsewhere"
 },
 {
  "S.No.": 1136,
  "Code": "M60",
  "MCCD Description": "Myositis"
 },
 {
  "S.No.": 1137,
  "Code": "L60",
  "MCCD Description": "Nail disorders"
 },
 {
  "S.No.": 1138,
  "Code": "L62",
  "MCCD Description": "Nail disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 1139,
  "Code": "J33",
  "MCCD Description": "Nasal polyp"
 },
 {
  "S.No.": 1140,
  "Code": "R11",
  "MCCD Description": "Nausea and vomiting"
 },
 {
  "S.No.": 1141,
  "Code": "P77",
  "MCCD Description": "Necrotizing enterocolitis of fetus and newborn"
 },
 {
  "S.No.": 1142,
  "Code": "Y06",
  "MCCD Description": "Neglect and abandonment"
 },
 {
  "S.No.": 1143,
  "Code": "P24",
  "MCCD Description": "Neonatal aspiration syndromes"
 },
 {
  "S.No.": 1144,
  "Code": "P58",
  "MCCD Description": "Neonatal jaundice due to other excessive haemolysis"
 },
 {
  "S.No.": 1145,
  "Code": "P59",
  "MCCD Description": "Neonatal jaundice from other and unspecified causes"
 },
 {
  "S.No.": 1146,
  "Code": "A33",
  "MCCD Description": "Neonatal tetanus"
 },
 {
  "S.No.": 1147,
  "Code": "D43",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of brain and central nervous system"
 },
 {
  "S.No.": 1148,
  "Code": "D44",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of endocrine glands"
 },
 {
  "S.No.": 1149,
  "Code": "D39",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of female genital organs"
 },
 {
  "S.No.": 1150,
  "Code": "D40",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of male genital organs"
 },
 {
  "S.No.": 1151,
  "Code": "D42",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of meninges"
 },
 {
  "S.No.": 1152,
  "Code": "D38",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of middle ear and respiratory and intrathoracic organs"
 },
 {
  "S.No.": 1153,
  "Code": "D37",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of oral cavity and digestive organs"
 },
 {
  "S.No.": 1154,
  "Code": "D48",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of other and unspecified sites"
 },
 {
  "S.No.": 1155,
  "Code": "D41",
  "MCCD Description": "Neoplasm of uncertain or unknown behaviour of urinary organs"
 },
 {
  "S.No.": 1156,
  "Code": "N04",
  "MCCD Description": "Nephrotic syndrome"
 },
 {
  "S.No.": 1157,
  "Code": "G55",
  "MCCD Description": "Nerve root and plexus compressions in diseases classified elsewhere"
 },
 {
  "S.No.": 1158,
  "Code": "G54",
  "MCCD Description": "Nerve root and plexus disorders"
 },
 {
  "S.No.": 1159,
  "Code": "Y75",
  "MCCD Description": "Neurological devices associated with adverse incidents"
 },
 {
  "S.No.": 1160,
  "Code": "N31",
  "MCCD Description": "Neuromuscular dysfunction of bladder, not elsewhere classified"
 },
 {
  "S.No.": 1161,
  "Code": "E52",
  "MCCD Description": "Niacin deficiency [pellagra]"
 },
 {
  "S.No.": 1162,
  "Code": "A43",
  "MCCD Description": "Nocardiosis"
 },
 {
  "S.No.": 1163,
  "Code": "Y66",
  "MCCD Description": "Nonadministration of surgical and medical care"
 },
 {
  "S.No.": 1164,
  "Code": "E15",
  "MCCD Description": "Nondiabetic hypoglycaemic coma"
 },
 {
  "S.No.": 1165,
  "Code": "C82-C85",
  "MCCD Description": "Non-Hodgkins lymphoma"
 },
 {
  "S.No.": 1166,
  "Code": "N83",
  "MCCD Description": "Noninflammatory disorders of ovary, fallopian tube and broad ligament"
 },
 {
  "S.No.": 1167,
  "Code": "E11",
  "MCCD Description": "Non-insulin-dependent diabetes mellitus"
 },
 {
  "S.No.": 1168,
  "Code": "F51",
  "MCCD Description": "Nonorganic sleep disorders"
 },
 {
  "S.No.": 1169,
  "Code": "I35",
  "MCCD Description": "Nonrheumatic aortic valve disorders"
 },
 {
  "S.No.": 1170,
  "Code": "I34",
  "MCCD Description": "Nonrheumatic mitral valve disorders"
 },
 {
  "S.No.": 1171,
  "Code": "I36",
  "MCCD Description": "Nonrheumatic tricuspid valve disorders"
 },
 {
  "S.No.": 1172,
  "Code": "I88",
  "MCCD Description": "Nonspecific lymphadenitis"
 },
 {
  "S.No.": 1173,
  "Code": "H65",
  "MCCD Description": "Nonsuppurative otitis media"
 },
 {
  "S.No.": 1174,
  "Code": "A65",
  "MCCD Description": "Nonvenereal syphilis"
 },
 {
  "S.No.": 1175,
  "Code": "E41",
  "MCCD Description": "Nutritional marasmus"
 },
 {
  "S.No.": 1176,
  "Code": "H55",
  "MCCD Description": "Nystagmus and other irregular eye movements"
 },
 {
  "S.No.": 1177,
  "Code": "E66",
  "MCCD Description": "Obesity"
 },
 {
  "S.No.": 1178,
  "Code": "F42",
  "MCCD Description": "Obsessive-compulsive disorder"
 },
 {
  "S.No.": 1179,
  "Code": "Y76",
  "MCCD Description": "Obstetric and gynaecological devices associated with adverse incidents"
 },
 {
  "S.No.": 1180,
  "Code": "O95",
  "MCCD Description": "Obstetric death of unspecified cause"
 },
 {
  "S.No.": 1181,
  "Code": "O88",
  "MCCD Description": "Obstetric embolism"
 },
 {
  "S.No.": 1182,
  "Code": "A34",
  "MCCD Description": "Obstetrical tetanus"
 },
 {
  "S.No.": 1183,
  "Code": "O64-O66",
  "MCCD Description": "Obstructed labour"
 },
 {
  "S.No.": 1184,
  "Code": "O64",
  "MCCD Description": "Obstructed labour due to malposition and malpresentation of fetus"
 },
 {
  "S.No.": 1185,
  "Code": "O65",
  "MCCD Description": "Obstructed labour due to maternal pelvic abnormality"
 },
 {
  "S.No.": 1186,
  "Code": "N13",
  "MCCD Description": "Obstructive and reflux uropathy"
 },
 {
  "S.No.": 1187,
  "Code": "I66",
  "MCCD Description": "Occlusion and stenosis of cerebral arteries, not resulting in cerebral infarction"
 },
 {
  "S.No.": 1188,
  "Code": "I65",
  "MCCD Description": "Occlusion and stenosis of precerebral arteries, not resulting in cerebral infarction"
 },
 {
  "S.No.": 1189,
  "Code": "V69.8",
  "MCCD Description": "Occupant [any] of heavy transport vehicle injured in other specified transport accidents"
 },
 {
  "S.No.": 1190,
  "Code": "V69.3",
  "MCCD Description": "Occupant [any] of heavy transport vehicle injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1191,
  "Code": "V69.9",
  "MCCD Description": "Occupant [any] of heavy transport vehicle injured in unspecified traffic accident"
 },
 {
  "S.No.": 1192,
  "Code": "V59.8",
  "MCCD Description": "Occupant [any] of pick-up truck or van injured in other specified transport accidents"
 },
 {
  "S.No.": 1193,
  "Code": "V59.3",
  "MCCD Description": "Occupant [any] of pick-up truck or van injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1194,
  "Code": "V39.8",
  "MCCD Description": "Occupant [any] of three-wheeled motor vehicle injured in other specified transport accidents"
 },
 {
  "S.No.": 1195,
  "Code": "V39.3",
  "MCCD Description": "Occupant [any] of three-wheeled motor vehicle injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1196,
  "Code": "V39.9",
  "MCCD Description": "Occupant [any] of three-wheeled motor vehicle injured in unspecified traffic accident"
 },
 {
  "S.No.": 1197,
  "Code": "V63",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1198,
  "Code": "V67",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 1199,
  "Code": "V64",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 1200,
  "Code": "V66",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1201,
  "Code": "V61",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with pedal cycle"
 },
 {
  "S.No.": 1202,
  "Code": "V60",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1203,
  "Code": "V65",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1204,
  "Code": "V62",
  "MCCD Description": "Occupant of heavy transport vehicle injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1205,
  "Code": "V68",
  "MCCD Description": "Occupant of heavy transport vehicle injured in noncollision transport accident"
 },
 {
  "S.No.": 1206,
  "Code": "V53",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1207,
  "Code": "V57",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 1208,
  "Code": "V54",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 1209,
  "Code": "V56",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1210,
  "Code": "V51",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with pedal cycle"
 },
 {
  "S.No.": 1211,
  "Code": "V50",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1212,
  "Code": "V55",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1213,
  "Code": "V52",
  "MCCD Description": "Occupant of pick-up truck or van injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1214,
  "Code": "V58",
  "MCCD Description": "Occupant of pick-up truck or van injured in noncollision transport accident"
 },
 {
  "S.No.": 1215,
  "Code": "V81",
  "MCCD Description": "Occupant of railway train or railway vehicle injured in transport accident"
 },
 {
  "S.No.": 1216,
  "Code": "V86",
  "MCCD Description": "Occupant of special all-terrain or other motor vehicle designed primarily for off-road use, injured "
 },
 {
  "S.No.": 1217,
  "Code": "V85",
  "MCCD Description": "Occupant of special construction vehicle injured in transport accident"
 },
 {
  "S.No.": 1218,
  "Code": "V84",
  "MCCD Description": "Occupant of special vehicle mainly used in agriculture injured in transport accident"
 },
 {
  "S.No.": 1219,
  "Code": "V83",
  "MCCD Description": "Occupant of special vehicle mainly used on industrial premises injured in transport accident"
 },
 {
  "S.No.": 1220,
  "Code": "V82.6",
  "MCCD Description": "Occupant of streetcar injured by fall from streetcar"
 },
 {
  "S.No.": 1221,
  "Code": "V82.5",
  "MCCD Description": "Occupant of streetcar injured by fall in streetcar"
 },
 {
  "S.No.": 1222,
  "Code": "V82.0",
  "MCCD Description": "Occupant of streetcar injured in collision with motor vehicle in nontraffic accident"
 },
 {
  "S.No.": 1223,
  "Code": "V82.1",
  "MCCD Description": "Occupant of streetcar injured in collision with motor vehicle in traffic accident"
 },
 {
  "S.No.": 1224,
  "Code": "V82.2",
  "MCCD Description": "Occupant of streetcar injured in collision with or hit by rolling stock"
 },
 {
  "S.No.": 1225,
  "Code": "V82.3",
  "MCCD Description": "Occupant of streetcar injured in collision with other object"
 },
 {
  "S.No.": 1226,
  "Code": "V82.7",
  "MCCD Description": "Occupant of streetcar injured in derailment without antecedent collision"
 },
 {
  "S.No.": 1227,
  "Code": "V82.9",
  "MCCD Description": "Occupant of streetcar injured in unspecified traffic accident"
 },
 {
  "S.No.": 1228,
  "Code": "V33",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1229,
  "Code": "V37",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 1230,
  "Code": "V34",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with heavy transport vehicle"
 },
 {
  "S.No.": 1231,
  "Code": "V36",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1232,
  "Code": "V31",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with pedal cycle"
 },
 {
  "S.No.": 1233,
  "Code": "V30",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1234,
  "Code": "V35",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1235,
  "Code": "V32",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in collision with two- or three-wheeled motor vehicl"
 },
 {
  "S.No.": 1236,
  "Code": "V38",
  "MCCD Description": "Occupant of three-wheeled motor vehicle injured in noncollision transport accident"
 },
 {
  "S.No.": 1237,
  "Code": "R60",
  "MCCD Description": "Oedema, not elsewhere classified"
 },
 {
  "S.No.": 1238,
  "Code": "O10-O16",
  "MCCD Description": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium"
 },
 {
  "S.No.": 1239,
  "Code": "I85",
  "MCCD Description": "Oesophageal varices"
 },
 {
  "S.No.": 1240,
  "Code": "K20",
  "MCCD Description": "Oesophagitis"
 },
 {
  "S.No.": 1241,
  "Code": "P38",
  "MCCD Description": "Omphalitis of newborn with or without mild haemorrhage"
 },
 {
  "S.No.": 1242,
  "Code": "B73",
  "MCCD Description": "Onchocerciasis"
 },
 {
  "S.No.": 1243,
  "Code": "S31",
  "MCCD Description": "Open wound of abdomen, lower back and pelvis"
 },
 {
  "S.No.": 1244,
  "Code": "S91",
  "MCCD Description": "Open wound of ankle and foot"
 },
 {
  "S.No.": 1245,
  "Code": "S51",
  "MCCD Description": "Open wound of forearm"
 },
 {
  "S.No.": 1246,
  "Code": "S01",
  "MCCD Description": "Open wound of head"
 },
 {
  "S.No.": 1247,
  "Code": "S71",
  "MCCD Description": "Open wound of hip and thigh"
 },
 {
  "S.No.": 1248,
  "Code": "S81",
  "MCCD Description": "Open wound of lower leg"
 },
 {
  "S.No.": 1249,
  "Code": "S11",
  "MCCD Description": "Open wound of neck"
 },
 {
  "S.No.": 1250,
  "Code": "S41",
  "MCCD Description": "Open wound of shoulder and upper arm"
 },
 {
  "S.No.": 1251,
  "Code": "S21",
  "MCCD Description": "Open wound of thorax"
 },
 {
  "S.No.": 1252,
  "Code": "S61",
  "MCCD Description": "Open wound of wrist and hand"
 },
 {
  "S.No.": 1253,
  "Code": "T01",
  "MCCD Description": "Open wounds involving multiple body regions"
 },
 {
  "S.No.": 1254,
  "Code": "Y36",
  "MCCD Description": "Operations of war"
 },
 {
  "S.No.": 1255,
  "Code": "Y77",
  "MCCD Description": "Ophthalmic devices associated with adverse incidents"
 },
 {
  "S.No.": 1256,
  "Code": "H46",
  "MCCD Description": "Optic neuritis"
 },
 {
  "S.No.": 1257,
  "Code": "N45",
  "MCCD Description": "Orchitis and epididymitis"
 },
 {
  "S.No.": 1258,
  "Code": "F04",
  "MCCD Description": "Organic amnesic syndrome, not induced by alcohol and other psychoactive substances"
 },
 {
  "S.No.": 1259,
  "Code": "Y79",
  "MCCD Description": "Orthopaedic devices associated with adverse incidents"
 },
 {
  "S.No.": 1260,
  "Code": "Q77",
  "MCCD Description": "Osteochondrodysplasia with defects of growth of tubular bones and spine"
 },
 {
  "S.No.": 1261,
  "Code": "M86",
  "MCCD Description": "Osteomyelitis"
 },
 {
  "S.No.": 1262,
  "Code": "M87",
  "MCCD Description": "Osteonecrosis"
 },
 {
  "S.No.": 1263,
  "Code": "M90",
  "MCCD Description": "Osteopathies in diseases classified elsewhere"
 },
 {
  "S.No.": 1264,
  "Code": "M82",
  "MCCD Description": "Osteoporosis in diseases classified elsewhere"
 },
 {
  "S.No.": 1265,
  "Code": "M80",
  "MCCD Description": "Osteoporosis with pathological fracture"
 },
 {
  "S.No.": 1266,
  "Code": "M81",
  "MCCD Description": "Osteoporosis without pathological fracture"
 },
 {
  "S.No.": 1267,
  "Code": "H92",
  "MCCD Description": "Otalgia and effusion of ear"
 },
 {
  "S.No.": 1268,
  "Code": "C30-C31, C37-C39",
  "MCCD Description": "Other  malignant neoplasm of  respiratory and intrathoracic organs"
 },
 {
  "S.No.": 1269,
  "Code": "C51-C52,C57",
  "MCCD Description": "Other  malignant neoplasms of female genital organs"
 },
 {
  "S.No.": 1270,
  "Code": "P58-P59",
  "MCCD Description": "Other  perinatal jaundice"
 },
 {
  "S.No.": 1271,
  "Code": "K45",
  "MCCD Description": "Other abdominal hernia"
 },
 {
  "S.No.": 1272,
  "Code": "R82",
  "MCCD Description": "Other abnormal findings in urine"
 },
 {
  "S.No.": 1273,
  "Code": "R79",
  "MCCD Description": "Other abnormal findings of blood chemistry"
 },
 {
  "S.No.": 1274,
  "Code": "R76",
  "MCCD Description": "Other abnormal immunological findings in serum"
 },
 {
  "S.No.": 1275,
  "Code": "O02",
  "MCCD Description": "Other abnormal products of conception"
 },
 {
  "S.No.": 1276,
  "Code": "N93",
  "MCCD Description": "Other abnormal uterine and vaginal bleeding"
 },
 {
  "S.No.": 1277,
  "Code": "R77",
  "MCCD Description": "Other abnormalities of plasma proteins"
 },
 {
  "S.No.": 1278,
  "Code": "O05",
  "MCCD Description": "Other abortion"
 },
 {
  "S.No.": 1279,
  "Code": "L11",
  "MCCD Description": "Other acantholytic disorders"
 },
 {
  "S.No.": 1280,
  "Code": "W76",
  "MCCD Description": "Other accidental hanging and strangulation"
 },
 {
  "S.No.": 1281,
  "Code": "M21",
  "MCCD Description": "Other acquired deformities of limbs"
 },
 {
  "S.No.": 1282,
  "Code": "M95",
  "MCCD Description": "Other acquired deformities of musculoskeletal system and connective tissue"
 },
 {
  "S.No.": 1283,
  "Code": "G36",
  "MCCD Description": "Other acute disseminated demyelination"
 },
 {
  "S.No.": 1284,
  "Code": "I24",
  "MCCD Description": "Other acute ischaemic heart diseases"
 },
 {
  "S.No.": 1285,
  "Code": "L56",
  "MCCD Description": "Other acute skin changes due to ultraviolet radiation"
 },
 {
  "S.No.": 1286,
  "Code": "J00-J01 & J05-J06",
  "MCCD Description": "Other acute upper respiratory infections"
 },
 {
  "S.No.": 1287,
  "Code": "B17",
  "MCCD Description": "Other acute viral hepatitis"
 },
 {
  "S.No.": 1288,
  "Code": "D50-D55,D57-D64",
  "MCCD Description": "Other anaemias"
 },
 {
  "S.No.": 1289,
  "Code": "D64",
  "MCCD Description": "Other anaemias"
 },
 {
  "S.No.": 1290,
  "Code": "S79",
  "MCCD Description": "Other and specified injuries of hip and thigh"
 },
 {
  "S.No.": 1291,
  "Code": "D37-D48",
  "MCCD Description": "Other and unspecified  neoplasm"
 },
 {
  "S.No.": 1292,
  "Code": "I99",
  "MCCD Description": "Other and unspecified disorders of circulatory system"
 },
 {
  "S.No.": 1293,
  "Code": "Y57",
  "MCCD Description": "Other and unspecified drugs and medicaments"
 },
 {
  "S.No.": 1294,
  "Code": "T33-T35,T66-T79",
  "MCCD Description": "Other and unspecified effects of external causes and certain early complications of trauma"
 },
 {
  "S.No.": 1295,
  "Code": "Y24",
  "MCCD Description": "Other and unspecified firearm discharge, undetermined intent"
 },
 {
  "S.No.": 1296,
  "Code": "B99",
  "MCCD Description": "Other and unspecified infectious diseases"
 },
 {
  "S.No.": 1297,
  "Code": "S39",
  "MCCD Description": "Other and unspecified injuries of abdomen, lower back and pelvis"
 },
 {
  "S.No.": 1298,
  "Code": "S99",
  "MCCD Description": "Other and unspecified injuries of ankle and foot"
 },
 {
  "S.No.": 1299,
  "Code": "S59",
  "MCCD Description": "Other and unspecified injuries of forearm"
 },
 {
  "S.No.": 1300,
  "Code": "S09",
  "MCCD Description": "Other and unspecified injuries of head"
 },
 {
  "S.No.": 1301,
  "Code": "S89",
  "MCCD Description": "Other and unspecified injuries of lower leg"
 },
 {
  "S.No.": 1302,
  "Code": "S19",
  "MCCD Description": "Other and unspecified injuries of neck"
 },
 {
  "S.No.": 1303,
  "Code": "S49",
  "MCCD Description": "Other and unspecified injuries of shoulder and upper arm"
 },
 {
  "S.No.": 1304,
  "Code": "S29",
  "MCCD Description": "Other and unspecified injuries of thorax"
 },
 {
  "S.No.": 1305,
  "Code": "S69",
  "MCCD Description": "Other and unspecified injuries of wrist and hand"
 },
 {
  "S.No.": 1306,
  "Code": "C96",
  "MCCD Description": "Other and unspecified malignant neoplasms of lymphoid, haematopoietic and related tissue"
 },
 {
  "S.No.": 1307,
  "Code": "Y82",
  "MCCD Description": "Other and unspecified medical devices associated with adverse incidents"
 },
 {
  "S.No.": 1308,
  "Code": "A53",
  "MCCD Description": "Other and unspecified syphilis"
 },
 {
  "S.No.": 1309,
  "Code": "C85",
  "MCCD Description": "Other and unspecified types of non-Hodgkins lymphoma"
 },
 {
  "S.No.": 1310,
  "Code": "Y59",
  "MCCD Description": "Other and unspecified vaccines and biological substances"
 },
 {
  "S.No.": 1311,
  "Code": "V94",
  "MCCD Description": "Other and unspecified water transport accidents"
 },
 {
  "S.No.": 1312,
  "Code": "I72",
  "MCCD Description": "Other aneurysm"
 },
 {
  "S.No.": 1313,
  "Code": "F41",
  "MCCD Description": "Other anxiety disorders"
 },
 {
  "S.No.": 1314,
  "Code": "D61",
  "MCCD Description": "Other aplastic anaemias"
 },
 {
  "S.No.": 1315,
  "Code": "K36",
  "MCCD Description": "Other appendicitis"
 },
 {
  "S.No.": 1316,
  "Code": "M13",
  "MCCD Description": "Other arthritis"
 },
 {
  "S.No.": 1317,
  "Code": "A91-A94, A96-A99",
  "MCCD Description": "Other arthropod-borne viral fevers and viral haemorrhagic fevers"
 },
 {
  "S.No.": 1318,
  "Code": "A93",
  "MCCD Description": "Other arthropod-borne viral fevers, not elsewhere classified"
 },
 {
  "S.No.": 1319,
  "Code": "M19",
  "MCCD Description": "Other arthrosis"
 },
 {
  "S.No.": 1320,
  "Code": "O83",
  "MCCD Description": "Other assisted single delivery"
 },
 {
  "S.No.": 1321,
  "Code": "B96",
  "MCCD Description": "Other bacterial agents as the cause of diseases classified to other chapters"
 },
 {
  "S.No.": 1322,
  "Code": "A48",
  "MCCD Description": "Other bacterial diseases, not elsewhere classified"
 },
 {
  "S.No.": 1323,
  "Code": "A05",
  "MCCD Description": "Other bacterial foodborne intoxications"
 },
 {
  "S.No.": 1324,
  "Code": "A04",
  "MCCD Description": "Other bacterial intestinal infections"
 },
 {
  "S.No.": 1325,
  "Code": "F98",
  "MCCD Description": "Other behavioural and emotional disorders with onset usually occurring in childhood and adolescence"
 },
 {
  "S.No.": 1326,
  "Code": "D21",
  "MCCD Description": "Other benign neoplasms of connective and other soft tissue"
 },
 {
  "S.No.": 1327,
  "Code": "D23",
  "MCCD Description": "Other benign neoplasms of skin"
 },
 {
  "S.No.": 1328,
  "Code": "D26",
  "MCCD Description": "Other benign neoplasms of uterus"
 },
 {
  "S.No.": 1329,
  "Code": "P15",
  "MCCD Description": "Other birth injuries"
 },
 {
  "S.No.": 1330,
  "Code": "P11",
  "MCCD Description": "Other birth injuries to central nervous system"
 },
 {
  "S.No.": 1331,
  "Code": "L13",
  "MCCD Description": "Other bullous disorders"
 },
 {
  "S.No.": 1332,
  "Code": "M71",
  "MCCD Description": "Other bursopathies"
 },
 {
  "S.No.": 1333,
  "Code": "I49",
  "MCCD Description": "Other cardiac arrhythmias"
 },
 {
  "S.No.": 1334,
  "Code": "H26",
  "MCCD Description": "Other cataract"
 },
 {
  "S.No.": 1335,
  "Code": "I67",
  "MCCD Description": "Other cerebrovascular diseases"
 },
 {
  "S.No.": 1336,
  "Code": "B71",
  "MCCD Description": "Other cestode infections"
 },
 {
  "S.No.": 1337,
  "Code": "Q99",
  "MCCD Description": "Other chromosome abnormalities, not elsewhere classified"
 },
 {
  "S.No.": 1338,
  "Code": "J44",
  "MCCD Description": "Other chronic obstructive pulmonary disease"
 },
 {
  "S.No.": 1339,
  "Code": "D68",
  "MCCD Description": "Other coagulation defects"
 },
 {
  "S.No.": 1340,
  "Code": "O75",
  "MCCD Description": "Other complications of labour and delivery, not elsewhere classified"
 },
 {
  "S.No.": 1341,
  "Code": "O20-O22,O24-O63 & O67-O84",
  "MCCD Description": "Other complications of pregnancy and delivery"
 },
 {
  "S.No.": 1342,
  "Code": "T88",
  "MCCD Description": "Other complications of surgical and medical care, not elsewhere classified"
 },
 {
  "S.No.": 1343,
  "Code": "P83",
  "MCCD Description": "Other conditions of integument specific to fetus and newborn"
 },
 {
  "S.No.": 1344,
  "Code": "P96",
  "MCCD Description": "Other conditions originating in the perinatal period"
 },
 {
  "S.No.": 1345,
  "Code": "I45",
  "MCCD Description": "Other conduction disorders"
 },
 {
  "S.No.": 1346,
  "Code": "Q04",
  "MCCD Description": "Other congenital malformations of brain"
 },
 {
  "S.No.": 1347,
  "Code": "Q28",
  "MCCD Description": "Other congenital malformations of circulatory system"
 },
 {
  "S.No.": 1348,
  "Code": "Q45",
  "MCCD Description": "Other congenital malformations of digestive system"
 },
 {
  "S.No.": 1349,
  "Code": "Q17",
  "MCCD Description": "Other congenital malformations of ear"
 },
 {
  "S.No.": 1350,
  "Code": "Q15",
  "MCCD Description": "Other congenital malformations of eye"
 },
 {
  "S.No.": 1351,
  "Code": "Q18",
  "MCCD Description": "Other congenital malformations of face and neck"
 },
 {
  "S.No.": 1352,
  "Code": "Q52",
  "MCCD Description": "Other congenital malformations of female genitalia"
 },
 {
  "S.No.": 1353,
  "Code": "Q24",
  "MCCD Description": "Other congenital malformations of heart"
 },
 {
  "S.No.": 1354,
  "Code": "Q84",
  "MCCD Description": "Other congenital malformations of integument"
 },
 {
  "S.No.": 1355,
  "Code": "Q43",
  "MCCD Description": "Other congenital malformations of intestine"
 },
 {
  "S.No.": 1356,
  "Code": "Q63",
  "MCCD Description": "Other congenital malformations of kidney"
 },
 {
  "S.No.": 1357,
  "Code": "Q74",
  "MCCD Description": "Other congenital malformations of limb(s)"
 },
 {
  "S.No.": 1358,
  "Code": "Q55",
  "MCCD Description": "Other congenital malformations of male genital organs"
 },
 {
  "S.No.": 1359,
  "Code": "Q07",
  "MCCD Description": "Other congenital malformations of nervous system"
 },
 {
  "S.No.": 1360,
  "Code": "Q27",
  "MCCD Description": "Other congenital malformations of peripheral vascular system"
 },
 {
  "S.No.": 1361,
  "Code": "Q34",
  "MCCD Description": "Other congenital malformations of respiratory system"
 },
 {
  "S.No.": 1362,
  "Code": "Q82",
  "MCCD Description": "Other congenital malformations of skin"
 },
 {
  "S.No.": 1363,
  "Code": "Q75",
  "MCCD Description": "Other congenital malformations of skull and face bones"
 },
 {
  "S.No.": 1364,
  "Code": "Q06",
  "MCCD Description": "Other congenital malformations of spinal cord"
 },
 {
  "S.No.": 1365,
  "Code": "Q38",
  "MCCD Description": "Other congenital malformations of tongue, mouth and pharynx"
 },
 {
  "S.No.": 1366,
  "Code": "Q40",
  "MCCD Description": "Other congenital malformations of upper alimentary tract"
 },
 {
  "S.No.": 1367,
  "Code": "Q64",
  "MCCD Description": "Other congenital malformations of urinary system"
 },
 {
  "S.No.": 1368,
  "Code": "Q89",
  "MCCD Description": "Other congenital malformations, not elsewhere classified"
 },
 {
  "S.No.": 1369,
  "Code": "Q68",
  "MCCD Description": "Other congenital musculoskeletal deformities"
 },
 {
  "S.No.": 1370,
  "Code": "P37",
  "MCCD Description": "Other congential infectious and parasitic diseases"
 },
 {
  "S.No.": 1371,
  "Code": "M11",
  "MCCD Description": "Other crystal arthropathies"
 },
 {
  "S.No.": 1372,
  "Code": "M43",
  "MCCD Description": "Other deforming dorsopathies"
 },
 {
  "S.No.": 1373,
  "Code": "G23",
  "MCCD Description": "Other degenerative diseases of basal ganglia"
 },
 {
  "S.No.": 1374,
  "Code": "G31",
  "MCCD Description": "Other degenetative diseases of nervous system, not elsewhere classified"
 },
 {
  "S.No.": 1375,
  "Code": "G37",
  "MCCD Description": "Other demyelinating diseases of central nervous system"
 },
 {
  "S.No.": 1376,
  "Code": "L30",
  "MCCD Description": "Other dermatitis"
 },
 {
  "S.No.": 1377,
  "Code": "A74",
  "MCCD Description": "Other diseases caused by chlamydiae"
 },
 {
  "S.No.": 1378,
  "Code": "K62",
  "MCCD Description": "Other diseases of anus and rectum"
 },
 {
  "S.No.": 1379,
  "Code": "K38",
  "MCCD Description": "Other diseases of appendix"
 },
 {
  "S.No.": 1380,
  "Code": "I71-I73 & I77-I78",
  "MCCD Description": "Other diseases of arteries, arterioles &  capillaries"
 },
 {
  "S.No.": 1381,
  "Code": "K83",
  "MCCD Description": "Other diseases of biliary tract"
 },
 {
  "S.No.": 1382,
  "Code": "D75",
  "MCCD Description": "Other diseases of blood and blood-forming organs"
 },
 {
  "S.No.": 1383,
  "Code": "K92",
  "MCCD Description": "Other diseases of digestive system"
 },
 {
  "S.No.": 1384,
  "Code": "K82",
  "MCCD Description": "Other diseases of gallbladder"
 },
 {
  "S.No.": 1385,
  "Code": "K03",
  "MCCD Description": "Other diseases of hard tissues of teeth"
 },
 {
  "S.No.": 1386,
  "Code": "H83",
  "MCCD Description": "Other diseases of inner ear"
 },
 {
  "S.No.": 1387,
  "Code": "K63",
  "MCCD Description": "Other diseases of intestine"
 },
 {
  "S.No.": 1388,
  "Code": "K10",
  "MCCD Description": "Other diseases of jaws"
 },
 {
  "S.No.": 1389,
  "Code": "K13",
  "MCCD Description": "Other diseases of lip and oral mucosa"
 },
 {
  "S.No.": 1390,
  "Code": "K76",
  "MCCD Description": "Other diseases of liver"
 },
 {
  "S.No.": 1391,
  "Code": "K22",
  "MCCD Description": "Other diseases of oesophagus"
 },
 {
  "S.No.": 1392,
  "Code": "K86",
  "MCCD Description": "Other diseases of pancreas"
 },
 {
  "S.No.": 1393,
  "Code": "I31",
  "MCCD Description": "Other diseases of pericardium"
 },
 {
  "S.No.": 1394,
  "Code": "I28",
  "MCCD Description": "Other diseases of pulmonary vessels"
 },
 {
  "S.No.": 1395,
  "Code": "G95",
  "MCCD Description": "Other diseases of spinal cord"
 },
 {
  "S.No.": 1396,
  "Code": "K31",
  "MCCD Description": "Other diseases of stomach and duodenum"
 },
 {
  "S.No.": 1397,
  "Code": "J39",
  "MCCD Description": "Other diseases of upper respiratory tract"
 },
 {
  "S.No.": 1398,
  "Code": "D89",
  "MCCD Description": "Other disorders involving the immune mechanism, not elsewhere classified"
 },
 {
  "S.No.": 1399,
  "Code": "E27",
  "MCCD Description": "Other disorders of adrenal gland"
 },
 {
  "S.No.": 1400,
  "Code": "F68",
  "MCCD Description": "Other disorders of adult personality and behaviour"
 },
 {
  "S.No.": 1401,
  "Code": "E72",
  "MCCD Description": "Other disorders of amino-acid metabolism"
 },
 {
  "S.No.": 1402,
  "Code": "O41",
  "MCCD Description": "Other disorders of amniotic fluid and membranes"
 },
 {
  "S.No.": 1403,
  "Code": "I77",
  "MCCD Description": "Other disorders of arteries and arterioles"
 },
 {
  "S.No.": 1404,
  "Code": "H51",
  "MCCD Description": "Other disorders of binocular movement"
 },
 {
  "S.No.": 1405,
  "Code": "N32",
  "MCCD Description": "Other disorders of bladder"
 },
 {
  "S.No.": 1406,
  "Code": "M89",
  "MCCD Description": "Other disorders of bone"
 },
 {
  "S.No.": 1407,
  "Code": "M85",
  "MCCD Description": "Other disorders of bone density and structure"
 },
 {
  "S.No.": 1408,
  "Code": "G93",
  "MCCD Description": "Other disorders of brain"
 },
 {
  "S.No.": 1409,
  "Code": "G94",
  "MCCD Description": "Other disorders of brain in diseases classified elsewhere"
 },
 {
  "S.No.": 1410,
  "Code": "N64",
  "MCCD Description": "Other disorders of breast"
 },
 {
  "S.No.": 1411,
  "Code": "O92",
  "MCCD Description": "Other disorders of breast and lactation associated with childbirth"
 },
 {
  "S.No.": 1412,
  "Code": "E74",
  "MCCD Description": "Other disorders of carbohydrate metabolism"
 },
 {
  "S.No.": 1413,
  "Code": "M94",
  "MCCD Description": "Other disorders of cartilage"
 },
 {
  "S.No.": 1414,
  "Code": "G96",
  "MCCD Description": "Other disorders of central nervous system"
 },
 {
  "S.No.": 1415,
  "Code": "H31",
  "MCCD Description": "Other disorders of choroid"
 },
 {
  "S.No.": 1416,
  "Code": "I98",
  "MCCD Description": "Other disorders of circulatory system in diseases classified elsewhere"
 },
 {
  "S.No.": 1417,
  "Code": "H11",
  "MCCD Description": "Other disorders of conjunctiva"
 },
 {
  "S.No.": 1418,
  "Code": "H18",
  "MCCD Description": "Other disorders of cornea"
 },
 {
  "S.No.": 1419,
  "Code": "H93",
  "MCCD Description": "Other disorders of ear, not elsewhere classified"
 },
 {
  "S.No.": 1420,
  "Code": "H69",
  "MCCD Description": "Other disorders of Eustachian tube"
 },
 {
  "S.No.": 1421,
  "Code": "H61",
  "MCCD Description": "Other disorders of external ear"
 },
 {
  "S.No.": 1422,
  "Code": "H57",
  "MCCD Description": "Other disorders of eye and adnexa"
 },
 {
  "S.No.": 1423,
  "Code": "H58",
  "MCCD Description": "Other disorders of eye and adnexa in diseases classified elsewhere"
 },
 {
  "S.No.": 1424,
  "Code": "H02",
  "MCCD Description": "Other disorders of eyelid"
 },
 {
  "S.No.": 1425,
  "Code": "E87",
  "MCCD Description": "Other disorders of fluid, electrolyte and acid-base balance"
 },
 {
  "S.No.": 1426,
  "Code": "K06",
  "MCCD Description": "Other disorders of gingiva and edentulous alveolar ridge"
 },
 {
  "S.No.": 1427,
  "Code": "H21",
  "MCCD Description": "Other disorders of iris and ciliary body"
 },
 {
  "S.No.": 1428,
  "Code": "N25-N28",
  "MCCD Description": "Other disorders of kidney and ureter"
 },
 {
  "S.No.": 1429,
  "Code": "N28",
  "MCCD Description": "Other disorders of kidney and ureter, not elsewhere classified"
 },
 {
  "S.No.": 1430,
  "Code": "H27",
  "MCCD Description": "Other disorders of lens"
 },
 {
  "S.No.": 1431,
  "Code": "N50",
  "MCCD Description": "Other disorders of male genital organs"
 },
 {
  "S.No.": 1432,
  "Code": "H74",
  "MCCD Description": "Other disorders of middle ear and mastoid"
 },
 {
  "S.No.": 1433,
  "Code": "H75",
  "MCCD Description": "Other disorders of middle ear and mastoid in diseases classified elsewhere"
 },
 {
  "S.No.": 1434,
  "Code": "M62",
  "MCCD Description": "Other disorders of muscle"
 },
 {
  "S.No.": 1435,
  "Code": "G98",
  "MCCD Description": "Other disorders of nervous system, not elsewhere classified"
 },
 {
  "S.No.": 1436,
  "Code": "J34",
  "MCCD Description": "Other disorders of nose and nasal sinuses"
 },
 {
  "S.No.": 1437,
  "Code": "H47",
  "MCCD Description": "Other disorders of optic [2nd] nerve and visual pathways"
 },
 {
  "S.No.": 1438,
  "Code": "E16",
  "MCCD Description": "Other disorders of pancreatic internal secretion"
 },
 {
  "S.No.": 1439,
  "Code": "N48",
  "MCCD Description": "Other disorders of penis"
 },
 {
  "S.No.": 1440,
  "Code": "G64",
  "MCCD Description": "Other disorders of peripheral nervous system"
 },
 {
  "S.No.": 1441,
  "Code": "K66",
  "MCCD Description": "Other disorders of peritoneum"
 },
 {
  "S.No.": 1442,
  "Code": "L81",
  "MCCD Description": "Other disorders of pigmentation"
 },
 {
  "S.No.": 1443,
  "Code": "N42",
  "MCCD Description": "Other disorders of prostate"
 },
 {
  "S.No.": 1444,
  "Code": "F88",
  "MCCD Description": "Other disorders of psychological development"
 },
 {
  "S.No.": 1445,
  "Code": "L59",
  "MCCD Description": "Other disorders of skin and subcutaneous tissue related to radiation"
 },
 {
  "S.No.": 1446,
  "Code": "L98",
  "MCCD Description": "Other disorders of skin and subcutaneous tissue, not elsewhere classified"
 },
 {
  "S.No.": 1447,
  "Code": "M67",
  "MCCD Description": "Other disorders of synovium and tendon"
 },
 {
  "S.No.": 1448,
  "Code": "K08",
  "MCCD Description": "Other disorders of teeth and supporting structures"
 },
 {
  "S.No.": 1449,
  "Code": "E07",
  "MCCD Description": "Other disorders of thyroid"
 },
 {
  "S.No.": 1450,
  "Code": "H73",
  "MCCD Description": "Other disorders of tympanic membrane"
 },
 {
  "S.No.": 1451,
  "Code": "N36",
  "MCCD Description": "Other disorders of urethra"
 },
 {
  "S.No.": 1452,
  "Code": "N39",
  "MCCD Description": "Other disorders of urinary system"
 },
 {
  "S.No.": 1453,
  "Code": "I87",
  "MCCD Description": "Other disorders of veins"
 },
 {
  "S.No.": 1454,
  "Code": "D72",
  "MCCD Description": "Other disorders of white blood cells"
 },
 {
  "S.No.": 1455,
  "Code": "P91",
  "MCCD Description": "Other disturbances of cerebral status of newborn"
 },
 {
  "S.No.": 1456,
  "Code": "P81",
  "MCCD Description": "Other disturbances of temperature regulation of newborn"
 },
 {
  "S.No.": 1457,
  "Code": "M53",
  "MCCD Description": "Other dorsopathies, not elsewhere classified"
 },
 {
  "S.No.": 1458,
  "Code": "T69",
  "MCCD Description": "Other effects of reduced temperature"
 },
 {
  "S.No.": 1459,
  "Code": "E34",
  "MCCD Description": "Other endocrine disorders"
 },
 {
  "S.No.": 1460,
  "Code": "M77",
  "MCCD Description": "Other enthesopathies"
 },
 {
  "S.No.": 1461,
  "Code": "L85",
  "MCCD Description": "Other epidermal thickening"
 },
 {
  "S.No.": 1462,
  "Code": "L53",
  "MCCD Description": "Other erythematous conditions"
 },
 {
  "S.No.": 1463,
  "Code": "G25",
  "MCCD Description": "Other extrapyramidal and movement disorders"
 },
 {
  "S.No.": 1464,
  "Code": "W17",
  "MCCD Description": "Other fall from one level to another"
 },
 {
  "S.No.": 1465,
  "Code": "W18",
  "MCCD Description": "Other fall on same level"
 },
 {
  "S.No.": 1466,
  "Code": "W03",
  "MCCD Description": "Other fall on same level due to collision with, or pushing by, another person"
 },
 {
  "S.No.": 1467,
  "Code": "N73",
  "MCCD Description": "Other female pelvic inflammatory diseases"
 },
 {
  "S.No.": 1468,
  "Code": "B66",
  "MCCD Description": "Other fluke infections"
 },
 {
  "S.No.": 1469,
  "Code": "L73",
  "MCCD Description": "Other follicular disorders"
 },
 {
  "S.No.": 1470,
  "Code": "I30-I51",
  "MCCD Description": "Other forms of heart diseases"
 },
 {
  "S.No.": 1471,
  "Code": "K59",
  "MCCD Description": "Other functional intestinal disorders"
 },
 {
  "S.No.": 1472,
  "Code": "R68",
  "MCCD Description": "Other general symptoms and signs"
 },
 {
  "S.No.": 1473,
  "Code": "G44",
  "MCCD Description": "Other headache syndromes"
 },
 {
  "S.No.": 1474,
  "Code": "H91",
  "MCCD Description": "Other hearing loss"
 },
 {
  "S.No.": 1475,
  "Code": "B83",
  "MCCD Description": "Other helminthiases"
 },
 {
  "S.No.": 1476,
  "Code": "B65-B73,B75,B77-B83",
  "MCCD Description": "Other helminthiasis"
 },
 {
  "S.No.": 1477,
  "Code": "D58",
  "MCCD Description": "Other hereditary haemolytic anaemias"
 },
 {
  "S.No.": 1478,
  "Code": "E67",
  "MCCD Description": "Other hyperalimentation"
 },
 {
  "S.No.": 1479,
  "Code": "E03",
  "MCCD Description": "Other hypothyroidism"
 },
 {
  "S.No.": 1480,
  "Code": "R99",
  "MCCD Description": "Other ill-defined and unspecified causes of mortality"
 },
 {
  "S.No.": 1481,
  "Code": "D84",
  "MCCD Description": "Other immunodeficiencies"
 },
 {
  "S.No.": 1482,
  "Code": "P39",
  "MCCD Description": "Other infections specific to the perinatal period"
 },
 {
  "S.No.": 1483,
  "Code": "B88",
  "MCCD Description": "Other infestations"
 },
 {
  "S.No.": 1484,
  "Code": "H01",
  "MCCD Description": "Other inflammation of eyelid"
 },
 {
  "S.No.": 1485,
  "Code": "N76",
  "MCCD Description": "Other inflammation of vagina and vulva"
 },
 {
  "S.No.": 1486,
  "Code": "G06,G08-G09",
  "MCCD Description": "Other inflammatory diseases of the central nervous system"
 },
 {
  "S.No.": 1487,
  "Code": "K75",
  "MCCD Description": "Other inflammatory liver diseases"
 },
 {
  "S.No.": 1488,
  "Code": "M46",
  "MCCD Description": "Other inflammatory spondylopathies"
 },
 {
  "S.No.": 1489,
  "Code": "T06",
  "MCCD Description": "Other injuries involving multiple body regions, not elsewhere classified"
 },
 {
  "S.No.": 1490,
  "Code": "T13",
  "MCCD Description": "Other injuries of lower limb, level unspecified"
 },
 {
  "S.No.": 1491,
  "Code": "S00-S01,S05,S09-S11,S15-S16,S19-S21,S25,S29",
  "MCCD Description": "Other injuries of specified,unspecified and multiple body regions"
 },
 {
  "S.No.": 1492,
  "Code": "T09",
  "MCCD Description": "Other injuries of spine and trunk, level unspecified"
 },
 {
  "S.No.": 1493,
  "Code": "T11",
  "MCCD Description": "Other injuries of upper limb, level unspecified"
 },
 {
  "S.No.": 1494,
  "Code": "J84",
  "MCCD Description": "Other interstitial pulmonary diseases"
 },
 {
  "S.No.": 1495,
  "Code": "M51",
  "MCCD Description": "Other intervertebral disc disorders"
 },
 {
  "S.No.": 1496,
  "Code": "B81",
  "MCCD Description": "Other intestinal helminthiases, not elsewhere classified"
 },
 {
  "S.No.": 1497,
  "Code": "A04,A07-A08",
  "MCCD Description": "Other intestinal infectious diseases"
 },
 {
  "S.No.": 1498,
  "Code": "P76",
  "MCCD Description": "Other intestinal obstruction of newborn"
 },
 {
  "S.No.": 1499,
  "Code": "M25",
  "MCCD Description": "Other joint disorders, not elsewhere classified"
 },
 {
  "S.No.": 1500,
  "Code": "M92",
  "MCCD Description": "Other juvenile osteochondrosis"
 },
 {
  "S.No.": 1501,
  "Code": "R27",
  "MCCD Description": "Other lack of coordination"
 },
 {
  "S.No.": 1502,
  "Code": "C94",
  "MCCD Description": "Other leukaemias of specified cell type"
 },
 {
  "S.No.": 1503,
  "Code": "L08",
  "MCCD Description": "Other local infections of skin and subcutaneous tissue"
 },
 {
  "S.No.": 1504,
  "Code": "L94",
  "MCCD Description": "Other localized connective tissue disorders"
 },
 {
  "S.No.": 1505,
  "Code": "J22, J44 & J47",
  "MCCD Description": "Other lower respiratory disorders"
 },
 {
  "S.No.": 1506,
  "Code": "C44",
  "MCCD Description": "Other malignant neoplasms of  skin"
 },
 {
  "S.No.": 1507,
  "Code": "C23-C24,C26",
  "MCCD Description": "Other malignant neoplasms of digestive organs"
 },
 {
  "S.No.": 1508,
  "Code": "C88 & C96",
  "MCCD Description": "Other malignant neoplasms of lymphoid,haematopoietic and related tissue"
 },
 {
  "S.No.": 1509,
  "Code": "C60,C62-C63",
  "MCCD Description": "Other malignant neoplasms of male genital organs"
 },
 {
  "S.No.": 1510,
  "Code": "C64-C66,C68",
  "MCCD Description": "Other malignant neoplasms of urinary tract"
 },
 {
  "S.No.": 1511,
  "Code": "Y07",
  "MCCD Description": "Other maltreatment syndromes"
 },
 {
  "S.No.": 1512,
  "Code": "O99",
  "MCCD Description": "Other maternal diseases classifiable elsewhere but complicating pregnancy, childbirth and the puerpe"
 },
 {
  "S.No.": 1513,
  "Code": "Y84",
  "MCCD Description": "Other medical procedures as the cause of abnormal reaction of the patient, or of later complication,"
 },
 {
  "S.No.": 1514,
  "Code": "F06",
  "MCCD Description": "Other mental disorders due to brain damage and dysfunction and to physical disease"
 },
 {
  "S.No.": 1515,
  "Code": "F78",
  "MCCD Description": "Other mental retardation"
 },
 {
  "S.No.": 1516,
  "Code": "E88",
  "MCCD Description": "Other metabolic disorders"
 },
 {
  "S.No.": 1517,
  "Code": "Y65",
  "MCCD Description": "Other misadventures during surgical and medical care"
 },
 {
  "S.No.": 1518,
  "Code": "G58",
  "MCCD Description": "Other mononeuropathies"
 },
 {
  "S.No.": 1519,
  "Code": "F38",
  "MCCD Description": "Other mood [affective] disorders"
 },
 {
  "S.No.": 1520,
  "Code": "A92",
  "MCCD Description": "Other mosquito-borne viral fevers"
 },
 {
  "S.No.": 1521,
  "Code": "B48",
  "MCCD Description": "Other mycoses, not elsewhere classified"
 },
 {
  "S.No.": 1522,
  "Code": "G72",
  "MCCD Description": "Other myopathies"
 },
 {
  "S.No.": 1523,
  "Code": "M31",
  "MCCD Description": "Other necrotizing vasculopathies"
 },
 {
  "S.No.": 1524,
  "Code": "P54",
  "MCCD Description": "Other neonatal haemorrhages"
 },
 {
  "S.No.": 1525,
  "Code": "D47",
  "MCCD Description": "Other neoplasms of uncertain or unknown behaviour of lymphoid, haematopoietic and related tissue"
 },
 {
  "S.No.": 1526,
  "Code": "F48",
  "MCCD Description": "Other neurotic disorders"
 },
 {
  "S.No.": 1527,
  "Code": "I89",
  "MCCD Description": "Other noninfective disorders of lymphatic vessels and lymph nodes"
 },
 {
  "S.No.": 1528,
  "Code": "K52",
  "MCCD Description": "Other noninfective gastroenteritis and colitis"
 },
 {
  "S.No.": 1529,
  "Code": "N88",
  "MCCD Description": "Other noninflammatory disorders of cervix uteri"
 },
 {
  "S.No.": 1530,
  "Code": "N85",
  "MCCD Description": "Other noninflammatory disorders of uterus, except cervix"
 },
 {
  "S.No.": 1531,
  "Code": "N89",
  "MCCD Description": "Other noninflammatory disorders of vagina"
 },
 {
  "S.No.": 1532,
  "Code": "N90",
  "MCCD Description": "Other noninflammatory disorders of vulva and perineum"
 },
 {
  "S.No.": 1533,
  "Code": "F28",
  "MCCD Description": "Other nonorganic psychotic disorders"
 },
 {
  "S.No.": 1534,
  "Code": "L65",
  "MCCD Description": "Other nonscarring hair loss"
 },
 {
  "S.No.": 1535,
  "Code": "E04",
  "MCCD Description": "Other nontoxic goitre"
 },
 {
  "S.No.": 1536,
  "Code": "I62",
  "MCCD Description": "Other nontraumatic intracranial haemorrhage"
 },
 {
  "S.No.": 1537,
  "Code": "D53",
  "MCCD Description": "Other nutritional anaemias"
 },
 {
  "S.No.": 1538,
  "Code": "E63",
  "MCCD Description": "Other nutritional deficiencies"
 },
 {
  "S.No.": 1539,
  "Code": "O71",
  "MCCD Description": "Other obstetric trauma"
 },
 {
  "S.No.": 1540,
  "Code": "O66",
  "MCCD Description": "Other obstructed labour"
 },
 {
  "S.No.": 1541,
  "Code": "Q78",
  "MCCD Description": "Other osteochondrodysplasias"
 },
 {
  "S.No.": 1542,
  "Code": "M93",
  "MCCD Description": "Other osteochondropathies"
 },
 {
  "S.No.": 1543,
  "Code": "L44",
  "MCCD Description": "Other papulosquamous disorders"
 },
 {
  "S.No.": 1544,
  "Code": "G83",
  "MCCD Description": "Other paralytic syndromes"
 },
 {
  "S.No.": 1545,
  "Code": "B53",
  "MCCD Description": "Other parasitologically confirmed malaria"
 },
 {
  "S.No.": 1546,
  "Code": "P78",
  "MCCD Description": "Other perinatal digestive system disorders"
 },
 {
  "S.No.": 1547,
  "Code": "P61",
  "MCCD Description": "Other perinatal haematological disorders"
 },
 {
  "S.No.": 1548,
  "Code": "I73",
  "MCCD Description": "Other peripheral vascular diseases"
 },
 {
  "S.No.": 1549,
  "Code": "J94",
  "MCCD Description": "Other pleural conditions"
 },
 {
  "S.No.": 1550,
  "Code": "G62",
  "MCCD Description": "Other polyneuropathies"
 },
 {
  "S.No.": 1551,
  "Code": "A63",
  "MCCD Description": "Other predominantly sexually transmitted diseases, not elsewhere classified"
 },
 {
  "S.No.": 1552,
  "Code": "O00-O02 & O05-O08",
  "MCCD Description": "Other pregnancies with abortive outcome"
 },
 {
  "S.No.": 1553,
  "Code": "E42-E46",
  "MCCD Description": "Other protein-energy malnutrition"
 },
 {
  "S.No.": 1554,
  "Code": "B60",
  "MCCD Description": "Other protozoal diseases, not elsewhere classified"
 },
 {
  "S.No.": 1555,
  "Code": "A07",
  "MCCD Description": "Other protozoal intestinal diseases"
 },
 {
  "S.No.": 1556,
  "Code": "O86",
  "MCCD Description": "Other puerperal infections"
 },
 {
  "S.No.": 1557,
  "Code": "I27",
  "MCCD Description": "Other pulmonary heart diseases"
 },
 {
  "S.No.": 1558,
  "Code": "N15",
  "MCCD Description": "Other renal tubulo-interstitial diseases"
 },
 {
  "S.No.": 1559,
  "Code": "P28",
  "MCCD Description": "Other respiratory conditions originating in the perinatal period"
 },
 {
  "S.No.": 1560,
  "Code": "J98",
  "MCCD Description": "Other respiratory disorders"
 },
 {
  "S.No.": 1561,
  "Code": "H35",
  "MCCD Description": "Other retinal disorders"
 },
 {
  "S.No.": 1562,
  "Code": "I09",
  "MCCD Description": "Other rheumatic heart diseases"
 },
 {
  "S.No.": 1563,
  "Code": "M06",
  "MCCD Description": "Other rheumatoid arthritis"
 },
 {
  "S.No.": 1564,
  "Code": "A79",
  "MCCD Description": "Other rickettsioses"
 },
 {
  "S.No.": 1565,
  "Code": "V01,V06,V09,V10-V11,V16-V18,V19,V29,V39,V49,V59,V69,V79",
  "MCCD Description": "Other road vehicle accidents"
 },
 {
  "S.No.": 1566,
  "Code": "A02",
  "MCCD Description": "Other salmonella infections"
 },
 {
  "S.No.": 1567,
  "Code": "A41",
  "MCCD Description": "Other septicaemia"
 },
 {
  "S.No.": 1568,
  "Code": "Q97",
  "MCCD Description": "Other sex chromosome abnormalities, female phenotype, not elsewhere classified"
 },
 {
  "S.No.": 1569,
  "Code": "Q98",
  "MCCD Description": "Other sex chromosome abnormalities, male phenotype, not elsewhere classified"
 },
 {
  "S.No.": 1570,
  "Code": "A56",
  "MCCD Description": "Other sexually transmitted chlamydial diseases"
 },
 {
  "S.No.": 1571,
  "Code": "R23",
  "MCCD Description": "Other skin changes"
 },
 {
  "S.No.": 1572,
  "Code": "M79",
  "MCCD Description": "Other soft tissue disorders, not elsewhere classified"
 },
 {
  "S.No.": 1573,
  "Code": "M12",
  "MCCD Description": "Other specific arthropathies"
 },
 {
  "S.No.": 1574,
  "Code": "M24",
  "MCCD Description": "Other specific joint derangements"
 },
 {
  "S.No.": 1575,
  "Code": "V97",
  "MCCD Description": "Other specified air transport accidents"
 },
 {
  "S.No.": 1576,
  "Code": "Q87",
  "MCCD Description": "Other specified congenital malformation syndromes affecting multiple systems"
 },
 {
  "S.No.": 1577,
  "Code": "E13",
  "MCCD Description": "Other specified diabetes mellitus"
 },
 {
  "S.No.": 1578,
  "Code": "W73",
  "MCCD Description": "Other specified drowning and submersion"
 },
 {
  "S.No.": 1579,
  "Code": "Y33",
  "MCCD Description": "Other specified events, undetermined intent"
 },
 {
  "S.No.": 1580,
  "Code": "W83",
  "MCCD Description": "Other specified threats to breathing"
 },
 {
  "S.No.": 1581,
  "Code": "V98",
  "MCCD Description": "Other specified transport accidents"
 },
 {
  "S.No.": 1582,
  "Code": "A65-A69 & A75-A79",
  "MCCD Description": "Other spirochaetal diseases and Rickettsioses"
 },
 {
  "S.No.": 1583,
  "Code": "A69",
  "MCCD Description": "Other spirochaetal infections"
 },
 {
  "S.No.": 1584,
  "Code": "M48",
  "MCCD Description": "Other spondylopathies"
 },
 {
  "S.No.": 1585,
  "Code": "H50",
  "MCCD Description": "Other strabismus"
 },
 {
  "S.No.": 1586,
  "Code": "R96",
  "MCCD Description": "Other sudden death, cause unknown"
 },
 {
  "S.No.": 1587,
  "Code": "B36",
  "MCCD Description": "Other superficial mycoses"
 },
 {
  "S.No.": 1588,
  "Code": "R41",
  "MCCD Description": "Other symptoms and signs involving cognitive functions and awareness"
 },
 {
  "S.No.": 1589,
  "Code": "R44",
  "MCCD Description": "Other symptoms and signs involving general sensations and perceptions"
 },
 {
  "S.No.": 1590,
  "Code": "R09",
  "MCCD Description": "Other symptoms and signs involving the circulatory and respiratory systems"
 },
 {
  "S.No.": 1591,
  "Code": "R19",
  "MCCD Description": "Other symptoms and signs involving the digestive system and abdomen"
 },
 {
  "S.No.": 1592,
  "Code": "R29",
  "MCCD Description": "Other symptoms and signs involving the nervous and musculoskeletal systems"
 },
 {
  "S.No.": 1593,
  "Code": "R39",
  "MCCD Description": "Other symptoms and signs involving the urinary system"
 },
 {
  "S.No.": 1594,
  "Code": "Y41",
  "MCCD Description": "Other systemic anti-infectives and antiparasitics"
 },
 {
  "S.No.": 1595,
  "Code": "M35",
  "MCCD Description": "Other systemic involvement of connective tissue"
 },
 {
  "S.No.": 1596,
  "Code": "A34-A35",
  "MCCD Description": "Other tetanus"
 },
 {
  "S.No.": 1597,
  "Code": "A35",
  "MCCD Description": "Other tetanus"
 },
 {
  "S.No.": 1598,
  "Code": "P74",
  "MCCD Description": "Other transitory neonatal electrolyte and metabolic disturbances"
 },
 {
  "S.No.": 1599,
  "Code": "P72",
  "MCCD Description": "Other transitory neonatal endocrine disorders"
 },
 {
  "S.No.": 1600,
  "Code": "Q92",
  "MCCD Description": "Other trisomies and partial trisomies of the autosomes, not elsewhere classified"
 },
 {
  "S.No.": 1601,
  "Code": "A54-A64",
  "MCCD Description": "Other types of infections with a predominantly  sexual mode of transmission"
 },
 {
  "S.No.": 1602,
  "Code": "I82",
  "MCCD Description": "Other venous embolism and thrombosis"
 },
 {
  "S.No.": 1603,
  "Code": "B33",
  "MCCD Description": "Other viral diseases, not elsewhere classified"
 },
 {
  "S.No.": 1604,
  "Code": "A83-A83,A84-A86",
  "MCCD Description": "Other viral encephalitis"
 },
 {
  "S.No.": 1605,
  "Code": "A85",
  "MCCD Description": "Other viral encephalitis, not elsewhere classified"
 },
 {
  "S.No.": 1606,
  "Code": "A98",
  "MCCD Description": "Other viral haemorrhagic fevers, not elsewhere classified"
 },
 {
  "S.No.": 1607,
  "Code": "B15, B17-B19",
  "MCCD Description": "Other viral hepatitis"
 },
 {
  "S.No.": 1608,
  "Code": "B08",
  "MCCD Description": "Other viral infections characterized by skin and mucous membrane lesions, not elsewhere classified"
 },
 {
  "S.No.": 1609,
  "Code": "A88",
  "MCCD Description": "Other viral infections of central nervous system, not elsewhere classified"
 },
 {
  "S.No.": 1610,
  "Code": "E56",
  "MCCD Description": "Other vitamin deficiencies"
 },
 {
  "S.No.": 1611,
  "Code": "A28",
  "MCCD Description": "Other zoonotic bacterial diseases, not elsewhere classified"
 },
 {
  "S.No.": 1612,
  "Code": "H60",
  "MCCD Description": "Otitis externa"
 },
 {
  "S.No.": 1613,
  "Code": "H67",
  "MCCD Description": "Otitis media in diseases classified elsewhere"
 },
 {
  "S.No.": 1614,
  "Code": "Y72",
  "MCCD Description": "Otorhinolaryngological devices associated with adverse incidents"
 },
 {
  "S.No.": 1615,
  "Code": "H80",
  "MCCD Description": "Otosclerosis"
 },
 {
  "S.No.": 1616,
  "Code": "E28",
  "MCCD Description": "Ovarian dysfunction"
 },
 {
  "S.No.": 1617,
  "Code": "X50",
  "MCCD Description": "Overexertion and strenuous or repetitive movements"
 },
 {
  "S.No.": 1618,
  "Code": "M88",
  "MCCD Description": "Pagets disease of bone [osteitis deformans]"
 },
 {
  "S.No.": 1619,
  "Code": "N94",
  "MCCD Description": "Pain and other conditions associated with female genital organs and menstrual cycle"
 },
 {
  "S.No.": 1620,
  "Code": "R30",
  "MCCD Description": "Pain associated with micturition"
 },
 {
  "S.No.": 1621,
  "Code": "R07",
  "MCCD Description": "Pain in throat and chest"
 },
 {
  "S.No.": 1622,
  "Code": "R52",
  "MCCD Description": "Pain, not elsewhere classified"
 },
 {
  "S.No.": 1623,
  "Code": "L45",
  "MCCD Description": "Papulosquamous disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 1624,
  "Code": "B41",
  "MCCD Description": "Paracoccidioidomycosis"
 },
 {
  "S.No.": 1625,
  "Code": "K56",
  "MCCD Description": "Paralytic ileus and intestinal obstruction without hernia"
 },
 {
  "S.No.": 1626,
  "Code": "H49",
  "MCCD Description": "Paralytic strabismus"
 },
 {
  "S.No.": 1627,
  "Code": "G82",
  "MCCD Description": "Paraplegia and tetraplegia"
 },
 {
  "S.No.": 1628,
  "Code": "L41",
  "MCCD Description": "Parapsoriasis"
 },
 {
  "S.No.": 1629,
  "Code": "G22",
  "MCCD Description": "Parkinsonism in diseases classified elsewhere"
 },
 {
  "S.No.": 1630,
  "Code": "G20",
  "MCCD Description": "Parkinsons disease"
 },
 {
  "S.No.": 1631,
  "Code": "I47",
  "MCCD Description": "Paroxysmal tachycardia"
 },
 {
  "S.No.": 1632,
  "Code": "V19.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1633,
  "Code": "V29.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1634,
  "Code": "V39.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1635,
  "Code": "V49.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1636,
  "Code": "V59.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1637,
  "Code": "V69.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1638,
  "Code": "V79.1",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in nontraffic accident"
 },
 {
  "S.No.": 1639,
  "Code": "V19.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1640,
  "Code": "V29.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1641,
  "Code": "V39.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1642,
  "Code": "V49.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1643,
  "Code": "V59.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1644,
  "Code": "V69.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1645,
  "Code": "V79.5",
  "MCCD Description": "Passenger injured in collision with other and unspecified motor vehicles in traffic accident"
 },
 {
  "S.No.": 1646,
  "Code": "V19.8",
  "MCCD Description": "Pedal cyclist [any] injured in other specified transport accidents"
 },
 {
  "S.No.": 1647,
  "Code": "V19.3",
  "MCCD Description": "Pedal cyclist [any] injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1648,
  "Code": "V19.9",
  "MCCD Description": "Pedal cyclist [any] injured in unspecified traffic accident"
 },
 {
  "S.No.": 1649,
  "Code": "V13",
  "MCCD Description": "Pedal cyclist injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1650,
  "Code": "V17",
  "MCCD Description": "Pedal cyclist injured in collision with fixed or Stationary object."
 },
 {
  "S.No.": 1651,
  "Code": "V14",
  "MCCD Description": "Pedal cyclist injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 1652,
  "Code": "V16",
  "MCCD Description": "Pedal cyclist injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1653,
  "Code": "V11",
  "MCCD Description": "Pedal cyclist injured in collision with other pedal cycle"
 },
 {
  "S.No.": 1654,
  "Code": "V10",
  "MCCD Description": "Pedal cyclist injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1655,
  "Code": "V15",
  "MCCD Description": "Pedal cyclist injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1656,
  "Code": "V12",
  "MCCD Description": "Pedal cyclist injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1657,
  "Code": "V18",
  "MCCD Description": "Pedal cyclist injured in noncollision transport accident"
 },
 {
  "S.No.": 1658,
  "Code": "V03",
  "MCCD Description": "Pedestrian injured in collision with car, pick-up truck or van"
 },
 {
  "S.No.": 1659,
  "Code": "V04",
  "MCCD Description": "Pedestrian injured in collision with heavy transport vehicle or bus"
 },
 {
  "S.No.": 1660,
  "Code": "V06",
  "MCCD Description": "Pedestrian injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1661,
  "Code": "V01",
  "MCCD Description": "Pedestrian injured in collision with pedal cycle"
 },
 {
  "S.No.": 1662,
  "Code": "V05",
  "MCCD Description": "Pedestrian injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1663,
  "Code": "V02",
  "MCCD Description": "Pedestrian injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1664,
  "Code": "V09.0",
  "MCCD Description": "Pedestrian injured in nontraffic accident involving other and unspecified motor vehicles"
 },
 {
  "S.No.": 1665,
  "Code": "V09.2",
  "MCCD Description": "Pedestrian injured in traffic accident involving other and unspecified motor vehicles"
 },
 {
  "S.No.": 1666,
  "Code": "V09.1",
  "MCCD Description": "Pedestrian injured in unspecified nontraffic accident"
 },
 {
  "S.No.": 1667,
  "Code": "V09.3",
  "MCCD Description": "Pedestrian injured in unspecified traffic accident"
 },
 {
  "S.No.": 1668,
  "Code": "V09.9",
  "MCCD Description": "Pedestrian injured in unspecified transport accident"
 },
 {
  "S.No.": 1669,
  "Code": "B85",
  "MCCD Description": "Pediculosis and phthiriasis"
 },
 {
  "S.No.": 1670,
  "Code": "L12",
  "MCCD Description": "Pemphigoid"
 },
 {
  "S.No.": 1671,
  "Code": "L10",
  "MCCD Description": "Pemphigus"
 },
 {
  "S.No.": 1672,
  "Code": "K27",
  "MCCD Description": "Peptic ulcer, site unspecified"
 },
 {
  "S.No.": 1673,
  "Code": "H72",
  "MCCD Description": "Perforation of tympanic membrane"
 },
 {
  "S.No.": 1674,
  "Code": "I32",
  "MCCD Description": "Pericarditis in diseases classified elsewhere"
 },
 {
  "S.No.": 1675,
  "Code": "O70",
  "MCCD Description": "Perineal laceration during delivery"
 },
 {
  "S.No.": 1676,
  "Code": "C84",
  "MCCD Description": "Peripheral and cutaneous T-cell lymphomas"
 },
 {
  "S.No.": 1677,
  "Code": "K65",
  "MCCD Description": "Peritonitis"
 },
 {
  "S.No.": 1678,
  "Code": "J36",
  "MCCD Description": "Peritonsillar abscess"
 },
 {
  "S.No.": 1679,
  "Code": "F22",
  "MCCD Description": "Persistent delusional disorders"
 },
 {
  "S.No.": 1680,
  "Code": "F34",
  "MCCD Description": "Persistent mood [affective] disorders"
 },
 {
  "S.No.": 1681,
  "Code": "V87.3",
  "MCCD Description": "Person injured in collision between car and bus (traffic)"
 },
 {
  "S.No.": 1682,
  "Code": "V88.3",
  "MCCD Description": "Person injured in collision between car and bus, nontraffic"
 },
 {
  "S.No.": 1683,
  "Code": "V87.4",
  "MCCD Description": "Person injured in collision between car and heavy transport vehicle (traffic)"
 },
 {
  "S.No.": 1684,
  "Code": "V88.4",
  "MCCD Description": "Person injured in collision between car and heavy transport vehicle, nontraffic"
 },
 {
  "S.No.": 1685,
  "Code": "V87.2",
  "MCCD Description": "Person injured in collision between car and pick-up truck or van (traffic)"
 },
 {
  "S.No.": 1686,
  "Code": "V88.2",
  "MCCD Description": "Person injured in collision between car and pick-up truck or van, nontraffic"
 },
 {
  "S.No.": 1687,
  "Code": "V87.0",
  "MCCD Description": "Person injured in collision between car and two- or three-wheeled motor vehicle (traffic)"
 },
 {
  "S.No.": 1688,
  "Code": "V88.0",
  "MCCD Description": "Person injured in collision between car and two- or three-wheeled motor vehicle, nontraffic"
 },
 {
  "S.No.": 1689,
  "Code": "V87.5",
  "MCCD Description": "Person injured in collision between heavy transport vehicle and bus (traffic)"
 },
 {
  "S.No.": 1690,
  "Code": "V88.5",
  "MCCD Description": "Person injured in collision between heavy transport vehicle and bus, nontraffic"
 },
 {
  "S.No.": 1691,
  "Code": "V87.1",
  "MCCD Description": "Person injured in collision between other motor vehicle and two- or three-wheeled motor vehicle (tra"
 },
 {
  "S.No.": 1692,
  "Code": "V88.1",
  "MCCD Description": "Person injured in collision between other motor vehicle and two- or three-wheeled motor vehicle, non"
 },
 {
  "S.No.": 1693,
  "Code": "V87.7",
  "MCCD Description": "Person injured in collision between other specified motor vehicles (traffic)"
 },
 {
  "S.No.": 1694,
  "Code": "V88.7",
  "MCCD Description": "Person injured in collision between other specified motor vehicles, nontraffic"
 },
 {
  "S.No.": 1695,
  "Code": "V87.6",
  "MCCD Description": "Person injured in collision between railway train or railway vehicle and car (traffic)"
 },
 {
  "S.No.": 1696,
  "Code": "V88.6",
  "MCCD Description": "Person injured in collision between railway train or railway vehicle and car, nontraffic"
 },
 {
  "S.No.": 1697,
  "Code": "V87.9",
  "MCCD Description": "Person injured in other specified (collision) (noncollision) transport accidents involving nonmotor "
 },
 {
  "S.No.": 1698,
  "Code": "V88.9",
  "MCCD Description": "Person injured in other specified (collision) (noncollision) transport accidents involving nonmotor "
 },
 {
  "S.No.": 1699,
  "Code": "V87.8",
  "MCCD Description": "Person injured in other specified noncollision transport accidents involving motor vehicle (traffic)"
 },
 {
  "S.No.": 1700,
  "Code": "V88.8",
  "MCCD Description": "Person injured in other specified noncollision transport accidents involving motor vehicle, nontraff"
 },
 {
  "S.No.": 1701,
  "Code": "V89.0",
  "MCCD Description": "Person injured in unspecified motor-vehicle accident, nontraffic"
 },
 {
  "S.No.": 1702,
  "Code": "V89.2",
  "MCCD Description": "Person injured in unspecified motor-vehicle accident, traffic"
 },
 {
  "S.No.": 1703,
  "Code": "V89.1",
  "MCCD Description": "Person injured in unspecified nonmotor-vehicle accident, nontraffic"
 },
 {
  "S.No.": 1704,
  "Code": "V89.3",
  "MCCD Description": "Person injured in unspecified nonmotor-vehicle accident, traffic"
 },
 {
  "S.No.": 1705,
  "Code": "V89.9",
  "MCCD Description": "Person injured in unspecified vehicle accident"
 },
 {
  "S.No.": 1706,
  "Code": "V82.4",
  "MCCD Description": "Person injured while boarding or alighting from streetcar"
 },
 {
  "S.No.": 1707,
  "Code": "F07",
  "MCCD Description": "Personality and behavioural disorders due to brain disease, damage and dysfunction"
 },
 {
  "S.No.": 1708,
  "Code": "F84",
  "MCCD Description": "Pervasive developmental disorders"
 },
 {
  "S.No.": 1709,
  "Code": "Q85",
  "MCCD Description": "Phakomatoses, not elsewhere classified"
 },
 {
  "S.No.": 1710,
  "Code": "I80",
  "MCCD Description": "Phlebitis and thrombophlebitis"
 },
 {
  "S.No.": 1711,
  "Code": "I80-I82",
  "MCCD Description": "Phlebitis, thrombophlebitis, venous embolism and thrombosis"
 },
 {
  "S.No.": 1712,
  "Code": "F40",
  "MCCD Description": "Phobic anxiety disorders"
 },
 {
  "S.No.": 1713,
  "Code": "Y80",
  "MCCD Description": "Physical medicine devices associated with adverse incidents"
 },
 {
  "S.No.": 1714,
  "Code": "L05",
  "MCCD Description": "Pilonidal cyst"
 },
 {
  "S.No.": 1715,
  "Code": "A67",
  "MCCD Description": "Pinta [carate]"
 },
 {
  "S.No.": 1716,
  "Code": "L42",
  "MCCD Description": "Pityriasis rosea"
 },
 {
  "S.No.": 1717,
  "Code": "O44",
  "MCCD Description": "Placenta praevia"
 },
 {
  "S.No.": 1718,
  "Code": "O43",
  "MCCD Description": "Placental disorders"
 },
 {
  "S.No.": 1719,
  "Code": "A20",
  "MCCD Description": "Plague"
 },
 {
  "S.No.": 1720,
  "Code": "B50",
  "MCCD Description": "Plasmodium falciparum malaria"
 },
 {
  "S.No.": 1721,
  "Code": "B52",
  "MCCD Description": "Plasmodium malariae malaria"
 },
 {
  "S.No.": 1722,
  "Code": "B51",
  "MCCD Description": "Plasmodium vivax malaria"
 },
 {
  "S.No.": 1723,
  "Code": "J92",
  "MCCD Description": "Pleural plaque"
 },
 {
  "S.No.": 1724,
  "Code": "J90",
  "MCCD Description": "Pleurisy"
 },
 {
  "S.No.": 1725,
  "Code": "J65",
  "MCCD Description": "Pneumoconiosis associated with tuberculosis"
 },
 {
  "S.No.": 1726,
  "Code": "J61",
  "MCCD Description": "Pneumoconiosis due to asbestos and other mineral fibres"
 },
 {
  "S.No.": 1727,
  "Code": "J62",
  "MCCD Description": "Pneumoconiosis due to dust containing silica"
 },
 {
  "S.No.": 1728,
  "Code": "J63",
  "MCCD Description": "Pneumoconiosis due to other inorganic dusts"
 },
 {
  "S.No.": 1729,
  "Code": "B59",
  "MCCD Description": "Pneumocystosis"
 },
 {
  "S.No.": 1730,
  "Code": "J12-J18",
  "MCCD Description": "Pneumonia"
 },
 {
  "S.No.": 1731,
  "Code": "J14",
  "MCCD Description": "Pneumonia due to Haemophilus influenzae"
 },
 {
  "S.No.": 1732,
  "Code": "J16",
  "MCCD Description": "Pneumonia due to other infectious organisms, not elsewhere classified"
 },
 {
  "S.No.": 1733,
  "Code": "J13",
  "MCCD Description": "Pneumonia due to Streptococcus pneumoniae"
 },
 {
  "S.No.": 1734,
  "Code": "J17",
  "MCCD Description": "Pneumonia in diseases classified elsewhere"
 },
 {
  "S.No.": 1735,
  "Code": "J18",
  "MCCD Description": "Pneumonia, organism unspecified"
 },
 {
  "S.No.": 1736,
  "Code": "J69",
  "MCCD Description": "Pneumonitis due to solids and liquids"
 },
 {
  "S.No.": 1737,
  "Code": "J93",
  "MCCD Description": "Pneumothorax"
 },
 {
  "S.No.": 1738,
  "Code": "T48",
  "MCCD Description": "Poisoning by agents primarily acting on smooth and skeletal muscles and the respiratory system"
 },
 {
  "S.No.": 1739,
  "Code": "T46",
  "MCCD Description": "Poisoning by agents primarily affecting the cardiovascular system"
 },
 {
  "S.No.": 1740,
  "Code": "T47",
  "MCCD Description": "Poisoning by agents primarily affecting the gastrointestinal system"
 },
 {
  "S.No.": 1741,
  "Code": "T41",
  "MCCD Description": "Poisoning by anaesthetics and therapeutic gases"
 },
 {
  "S.No.": 1742,
  "Code": "Y15",
  "MCCD Description": "Poisoning by and exposure to alcohol, undetermined intent"
 },
 {
  "S.No.": 1743,
  "Code": "Y11",
  "MCCD Description": "Poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and psychotropic dru"
 },
 {
  "S.No.": 1744,
  "Code": "Y12",
  "MCCD Description": "Poisoning by and exposure to narcotics and psychodysleptics [hallucinogens], not elsewhere classifie"
 },
 {
  "S.No.": 1745,
  "Code": "Y10",
  "MCCD Description": "Poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics, undetermined int"
 },
 {
  "S.No.": 1746,
  "Code": "Y16",
  "MCCD Description": "Poisoning by and exposure to organic solvents and halogenated hydrocarbons and their vapours, undete"
 },
 {
  "S.No.": 1747,
  "Code": "Y19",
  "MCCD Description": "Poisoning by and exposure to other and unspecified chemicals and noxious substances, undetermined in"
 },
 {
  "S.No.": 1748,
  "Code": "Y14",
  "MCCD Description": "Poisoning by and exposure to other and unspecified drugs, medicaments and biological substances, und"
 },
 {
  "S.No.": 1749,
  "Code": "Y13",
  "MCCD Description": "Poisoning by and exposure to other drugs acting on the autonomic nervous system, undetermined intent"
 },
 {
  "S.No.": 1750,
  "Code": "Y17",
  "MCCD Description": "Poisoning by and exposure to other gases and vapours, undetermined intent"
 },
 {
  "S.No.": 1751,
  "Code": "Y18",
  "MCCD Description": "Poisoning by and exposure to pesticides, undetermined intent"
 },
 {
  "S.No.": 1752,
  "Code": "T42",
  "MCCD Description": "Poisoning by antiepileptic, sedative-hypnotic and antiparkinsonism drugs"
 },
 {
  "S.No.": 1753,
  "Code": "T50",
  "MCCD Description": "Poisoning by diuretics and other and unspecified drugs, medicaments and biological substances"
 },
 {
  "S.No.": 1754,
  "Code": "T44",
  "MCCD Description": "Poisoning by drugs primarily affecting the autonomic nervous system"
 },
 {
  "S.No.": 1755,
  "Code": "T38",
  "MCCD Description": "Poisoning by harmones and their synthetic substitutes and antagonist, not elsewhere classified"
 },
 {
  "S.No.": 1756,
  "Code": "T40",
  "MCCD Description": "Poisoning by narcotics and psychodysleptics [hallucinogens]"
 },
 {
  "S.No.": 1757,
  "Code": "T39",
  "MCCD Description": "Poisoning by nonopioid analgesics, antipyretics and antirheumatics"
 },
 {
  "S.No.": 1758,
  "Code": "T37",
  "MCCD Description": "Poisoning by other systemic anti-infectives and antiparasitics"
 },
 {
  "S.No.": 1759,
  "Code": "T45",
  "MCCD Description": "Poisoning by primarily systemic and haematological agents, not elsewhere classified"
 },
 {
  "S.No.": 1760,
  "Code": "T43",
  "MCCD Description": "Poisoning by psychotropic drugs, not elsewhere classified"
 },
 {
  "S.No.": 1761,
  "Code": "T36",
  "MCCD Description": "Poisoning by systemic antibiotics"
 },
 {
  "S.No.": 1762,
  "Code": "T49",
  "MCCD Description": "Poisoning by topical agents primarily affecting skin and mucous membrane and by ophthalmological, ot"
 },
 {
  "S.No.": 1763,
  "Code": "T36-T50 & T51-T65",
  "MCCD Description": "Poisonings by drugs & biological substances and Toxic effects of substances chiefly nonmedicinal as "
 },
 {
  "S.No.": 1764,
  "Code": "M30",
  "MCCD Description": "Polyarteritis nodosa and related conditions"
 },
 {
  "S.No.": 1765,
  "Code": "M15",
  "MCCD Description": "Polyarthrosis"
 },
 {
  "S.No.": 1766,
  "Code": "D45",
  "MCCD Description": "Polycythaemia vera"
 },
 {
  "S.No.": 1767,
  "Code": "Q69",
  "MCCD Description": "Polydactyly"
 },
 {
  "S.No.": 1768,
  "Code": "E31",
  "MCCD Description": "Polyglandular dysfunction"
 },
 {
  "S.No.": 1769,
  "Code": "O40",
  "MCCD Description": "Polyhydramnios"
 },
 {
  "S.No.": 1770,
  "Code": "G63",
  "MCCD Description": "Polyneuropathy in diseases classified elsewhere"
 },
 {
  "S.No.": 1771,
  "Code": "N84",
  "MCCD Description": "Polyp of female genital tract"
 },
 {
  "S.No.": 1772,
  "Code": "R35",
  "MCCD Description": "Polyuria"
 },
 {
  "S.No.": 1773,
  "Code": "I81",
  "MCCD Description": "Portal vein thrombosis"
 },
 {
  "S.No.": 1774,
  "Code": "O72",
  "MCCD Description": "Postpartum haemorrhage"
 },
 {
  "S.No.": 1775,
  "Code": "I97",
  "MCCD Description": "Postprocedural disorders of circulatory system, not elsewhere classified"
 },
 {
  "S.No.": 1776,
  "Code": "K91",
  "MCCD Description": "Postprocedural disorders of digestive system, not elsewhere classified"
 },
 {
  "S.No.": 1777,
  "Code": "H59",
  "MCCD Description": "Postprocedural disorders of eye and adnexa, not elsewhere classified"
 },
 {
  "S.No.": 1778,
  "Code": "N99",
  "MCCD Description": "Postprocedural disorders of genitourinary system, not elsewhere classified"
 },
 {
  "S.No.": 1779,
  "Code": "G97",
  "MCCD Description": "Postprocedural disorders of nervous system, not elsewhere classified"
 },
 {
  "S.No.": 1780,
  "Code": "E89",
  "MCCD Description": "Postprocedural endocrine and metabolic disorders, not elsewhere classified"
 },
 {
  "S.No.": 1781,
  "Code": "M96",
  "MCCD Description": "Postprocedural musculoskeletal disorders, not elsewhere classified"
 },
 {
  "S.No.": 1782,
  "Code": "J95",
  "MCCD Description": "Postprocedural respiratory disorders, not elsewhere classified"
 },
 {
  "S.No.": 1783,
  "Code": "O10",
  "MCCD Description": "Pre-existing hypertension complicating pregnancy, childbirth and the puerperium"
 },
 {
  "S.No.": 1784,
  "Code": "O11",
  "MCCD Description": "Pre-existing hypertensive disorder with superimposed proteinuria"
 },
 {
  "S.No.": 1785,
  "Code": "O42",
  "MCCD Description": "Premature rupture of membranes"
 },
 {
  "S.No.": 1786,
  "Code": "O45",
  "MCCD Description": "Premature separation of placenta [abruptio placentae]"
 },
 {
  "S.No.": 1787,
  "Code": "O60",
  "MCCD Description": "Preterm delivery"
 },
 {
  "S.No.": 1788,
  "Code": "Y43",
  "MCCD Description": "Primarily systemic agents"
 },
 {
  "S.No.": 1789,
  "Code": "G71",
  "MCCD Description": "Primary disorders of muscles"
 },
 {
  "S.No.": 1790,
  "Code": "F73",
  "MCCD Description": "Profound mental retardation"
 },
 {
  "S.No.": 1791,
  "Code": "O48",
  "MCCD Description": "Prolonged pregnancy"
 },
 {
  "S.No.": 1792,
  "Code": "X52",
  "MCCD Description": "Prolonged stay in weightless environment"
 },
 {
  "S.No.": 1793,
  "Code": "E44",
  "MCCD Description": "Protein-energy malnutrition of moderate and mild degree"
 },
 {
  "S.No.": 1794,
  "Code": "L29",
  "MCCD Description": "Pruritus"
 },
 {
  "S.No.": 1795,
  "Code": "L40",
  "MCCD Description": "Psoriasis"
 },
 {
  "S.No.": 1796,
  "Code": "M07",
  "MCCD Description": "Psoriatic and enteropathic arthropathies"
 },
 {
  "S.No.": 1797,
  "Code": "F66",
  "MCCD Description": "Psychological and behavioural disorders associated with sexual development and orientation"
 },
 {
  "S.No.": 1798,
  "Code": "F54",
  "MCCD Description": "Psychological and behavioural factors associated with disorders or diseases classified elsewhere"
 },
 {
  "S.No.": 1799,
  "Code": "Y49",
  "MCCD Description": "Psychotropic drugs, not elsewhere classified"
 },
 {
  "S.No.": 1800,
  "Code": "O85",
  "MCCD Description": "Puerperal sepsis"
 },
 {
  "S.No.": 1801,
  "Code": "I26",
  "MCCD Description": "Pulmonary embolism"
 },
 {
  "S.No.": 1802,
  "Code": "J82",
  "MCCD Description": "Pulmonary eosinophilia, not elsewhere classified"
 },
 {
  "S.No.": 1803,
  "Code": "P26",
  "MCCD Description": "Pulmonary haemorrhage originating in the perinatal period"
 },
 {
  "S.No.": 1804,
  "Code": "I26-I28",
  "MCCD Description": "Pulmonary heart disease and diseases of pulmonary  circulation"
 },
 {
  "S.No.": 1805,
  "Code": "J81",
  "MCCD Description": "Pulmonary oedema"
 },
 {
  "S.No.": 1806,
  "Code": "I37",
  "MCCD Description": "Pulmonary valve disorders"
 },
 {
  "S.No.": 1807,
  "Code": "D69",
  "MCCD Description": "Purpura and other haemorrhagic conditions"
 },
 {
  "S.No.": 1808,
  "Code": "L88",
  "MCCD Description": "Pyoderma gangrenosum"
 },
 {
  "S.No.": 1809,
  "Code": "M00",
  "MCCD Description": "Pyogenic arthritis"
 },
 {
  "S.No.": 1810,
  "Code": "J86",
  "MCCD Description": "Pyothorax"
 },
 {
  "S.No.": 1811,
  "Code": "A78",
  "MCCD Description": "Q fever"
 },
 {
  "S.No.": 1812,
  "Code": "A82",
  "MCCD Description": "Rabies"
 },
 {
  "S.No.": 1813,
  "Code": "L58",
  "MCCD Description": "Radiodermatitis"
 },
 {
  "S.No.": 1814,
  "Code": "Y78",
  "MCCD Description": "Radiological devices associated with adverse incidents"
 },
 {
  "S.No.": 1815,
  "Code": "V05,V15,V80,V81, V82, V87 & V88",
  "MCCD Description": "Railway accidents"
 },
 {
  "S.No.": 1816,
  "Code": "N01",
  "MCCD Description": "Rapidly progressive nephritic syndrome"
 },
 {
  "S.No.": 1817,
  "Code": "R21",
  "MCCD Description": "Rash and other nonspecific skin eruption"
 },
 {
  "S.No.": 1818,
  "Code": "A25",
  "MCCD Description": "Rat-bite fevers"
 },
 {
  "S.No.": 1819,
  "Code": "F43",
  "MCCD Description": "Reaction to severe stress, and adjustment disorders"
 },
 {
  "S.No.": 1820,
  "Code": "P93",
  "MCCD Description": "Reactions and intoxications due to drugs administered to fetus and newborn"
 },
 {
  "S.No.": 1821,
  "Code": "M02",
  "MCCD Description": "Reactive arthropathies"
 },
 {
  "S.No.": 1822,
  "Code": "N02",
  "MCCD Description": "Recurrent and persistent haematuria"
 },
 {
  "S.No.": 1823,
  "Code": "F33",
  "MCCD Description": "Recurrent depressive disorder"
 },
 {
  "S.No.": 1824,
  "Code": "Q72",
  "MCCD Description": "Reduction defects of lower limb"
 },
 {
  "S.No.": 1825,
  "Code": "Q73",
  "MCCD Description": "Reduction defects of unspecified limb"
 },
 {
  "S.No.": 1826,
  "Code": "Q71",
  "MCCD Description": "Reduction defects of upper limb"
 },
 {
  "S.No.": 1827,
  "Code": "N47",
  "MCCD Description": "Redundant prepuce, phimosis and paraphimosis"
 },
 {
  "S.No.": 1828,
  "Code": "A68",
  "MCCD Description": "Relapsing fevers"
 },
 {
  "S.No.": 1829,
  "Code": "Q60",
  "MCCD Description": "Renal agenesis and other reduction defects of kidney"
 },
 {
  "S.No.": 1830,
  "Code": "N17-N19",
  "MCCD Description": "Renal failure"
 },
 {
  "S.No.": 1831,
  "Code": "N10-N15",
  "MCCD Description": "Renal tubulo-interstitial diseases"
 },
 {
  "S.No.": 1832,
  "Code": "J68",
  "MCCD Description": "Respiratory conditions due to inhalation of chemicals, gases, fumes and vapours"
 },
 {
  "S.No.": 1833,
  "Code": "J70",
  "MCCD Description": "Respiratory conditions due to other external agents"
 },
 {
  "S.No.": 1834,
  "Code": "P22",
  "MCCD Description": "Respiratory distress of newborn"
 },
 {
  "S.No.": 1835,
  "Code": "J96",
  "MCCD Description": "Respiratory failure, not elsewhere classified"
 },
 {
  "S.No.": 1836,
  "Code": "A15-A16",
  "MCCD Description": "Respiratory tuberculosis"
 },
 {
  "S.No.": 1837,
  "Code": "A15",
  "MCCD Description": "Respiratory tuberculosis, bacteriologically and histologically confirmed"
 },
 {
  "S.No.": 1838,
  "Code": "A16",
  "MCCD Description": "Respiratory tuberculosis, not confirmed bacteriologically or histologically"
 },
 {
  "S.No.": 1839,
  "Code": "O73",
  "MCCD Description": "Retained placenta and membranes, without haemorrhage"
 },
 {
  "S.No.": 1840,
  "Code": "E45",
  "MCCD Description": "Retarded development following protein-energy malnutrition"
 },
 {
  "S.No.": 1841,
  "Code": "R33",
  "MCCD Description": "Retention of urine"
 },
 {
  "S.No.": 1842,
  "Code": "H33",
  "MCCD Description": "Retinal detachments and breaks"
 },
 {
  "S.No.": 1843,
  "Code": "H36",
  "MCCD Description": "Retinal disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 1844,
  "Code": "H34",
  "MCCD Description": "Retinal vascular occlusions"
 },
 {
  "S.No.": 1845,
  "Code": "I06",
  "MCCD Description": "Rheumatic aortic valve diseases"
 },
 {
  "S.No.": 1846,
  "Code": "I02",
  "MCCD Description": "Rheumatic chorea"
 },
 {
  "S.No.": 1847,
  "Code": "I01",
  "MCCD Description": "Rheumatic fever with heart involvement"
 },
 {
  "S.No.": 1848,
  "Code": "I00",
  "MCCD Description": "Rheumatic fever without mention of heart involvement"
 },
 {
  "S.No.": 1849,
  "Code": "I05",
  "MCCD Description": "Rheumatic mitral valve diseases"
 },
 {
  "S.No.": 1850,
  "Code": "I07",
  "MCCD Description": "Rheumatic tricuspid valve diseases"
 },
 {
  "S.No.": 1851,
  "Code": "M05-M13",
  "MCCD Description": "Rheumatoid arthritis and other inflammatory polyarthropathies"
 },
 {
  "S.No.": 1852,
  "Code": "V80.0",
  "MCCD Description": "Rider or occupant injured by fall from or being thrown from animal or animal-drawn vehicle in noncol"
 },
 {
  "S.No.": 1853,
  "Code": "V80.4",
  "MCCD Description": "Rider or occupant injured in collision with car, pick-up truck, van, heavy transport vehicle or bus"
 },
 {
  "S.No.": 1854,
  "Code": "V80.8",
  "MCCD Description": "Rider or occupant injured in collision with fixed or stationary object"
 },
 {
  "S.No.": 1855,
  "Code": "V80.7",
  "MCCD Description": "Rider or occupant injured in collision with other nonmotor vehicle"
 },
 {
  "S.No.": 1856,
  "Code": "V80.5",
  "MCCD Description": "Rider or occupant injured in collision with other specified motor vehicle"
 },
 {
  "S.No.": 1857,
  "Code": "V80.2",
  "MCCD Description": "Rider or occupant injured in collision with pedal cycle"
 },
 {
  "S.No.": 1858,
  "Code": "V80.1",
  "MCCD Description": "Rider or occupant injured in collision with pedestrian or animal"
 },
 {
  "S.No.": 1859,
  "Code": "V80.6",
  "MCCD Description": "Rider or occupant injured in collision with railway train or railway vehicle"
 },
 {
  "S.No.": 1860,
  "Code": "V80.3",
  "MCCD Description": "Rider or occupant injured in collision with two- or three-wheeled motor vehicle"
 },
 {
  "S.No.": 1861,
  "Code": "V80.9",
  "MCCD Description": "Rider or occupant injured in other and unspecified transport accidents"
 },
 {
  "S.No.": 1862,
  "Code": "W33",
  "MCCD Description": "Rifle, shotgun and larger firearm discharge"
 },
 {
  "S.No.": 1863,
  "Code": "Y23",
  "MCCD Description": "Rifle, shotgun and larger firearm discharge, undetermined intent"
 },
 {
  "S.No.": 1864,
  "Code": "L71",
  "MCCD Description": "Rosacea"
 },
 {
  "S.No.": 1865,
  "Code": "B06",
  "MCCD Description": "Rubella [German measles]"
 },
 {
  "S.No.": 1866,
  "Code": "N70",
  "MCCD Description": "Salpingitis and oophoritis"
 },
 {
  "S.No.": 1867,
  "Code": "D86",
  "MCCD Description": "Sarcoidosis"
 },
 {
  "S.No.": 1868,
  "Code": "B86",
  "MCCD Description": "Scabies"
 },
 {
  "S.No.": 1869,
  "Code": "A38",
  "MCCD Description": "Scarlet fever"
 },
 {
  "S.No.": 1870,
  "Code": "B65",
  "MCCD Description": "Schistosomiasis [bilharziasis]"
 },
 {
  "S.No.": 1871,
  "Code": "F25",
  "MCCD Description": "Schizoaffective disorders"
 },
 {
  "S.No.": 1872,
  "Code": "F20",
  "MCCD Description": "Schizophrenia"
 },
 {
  "S.No.": 1873,
  "Code": "F20-F29",
  "MCCD Description": "Schizophrenia, schizotypal & delusional  disorders"
 },
 {
  "S.No.": 1874,
  "Code": "F21",
  "MCCD Description": "Schizotypal disorder"
 },
 {
  "S.No.": 1875,
  "Code": "M41",
  "MCCD Description": "Scoliosis"
 },
 {
  "S.No.": 1876,
  "Code": "L21",
  "MCCD Description": "Seborrhoeic dermatitis"
 },
 {
  "S.No.": 1877,
  "Code": "L82",
  "MCCD Description": "Seborrhoeic keratosis"
 },
 {
  "S.No.": 1878,
  "Code": "C77",
  "MCCD Description": "Secondary and unspecified malignant neoplasm of lymph nodes"
 },
 {
  "S.No.": 1879,
  "Code": "I15",
  "MCCD Description": "Secondary hypertension"
 },
 {
  "S.No.": 1880,
  "Code": "C79",
  "MCCD Description": "Secondary malignant neoplasm of other and unspecified sites"
 },
 {
  "S.No.": 1881,
  "Code": "C78",
  "MCCD Description": "Secondary malignant neoplasm of respiratory and digestive organs"
 },
 {
  "S.No.": 1882,
  "Code": "G21",
  "MCCD Description": "Secondary parkinsonism"
 },
 {
  "S.No.": 1883,
  "Code": "Y47",
  "MCCD Description": "Sedatives, hypnotics and antianxiety drugs"
 },
 {
  "S.No.": 1884,
  "Code": "H25",
  "MCCD Description": "Senile cataract"
 },
 {
  "S.No.": 1885,
  "Code": "R54",
  "MCCD Description": "Senility"
 },
 {
  "S.No.": 1886,
  "Code": "A40-A41",
  "MCCD Description": "Septicaemia"
 },
 {
  "S.No.": 1887,
  "Code": "T95",
  "MCCD Description": "Sequelae of burns, corrosions and frostbite"
 },
 {
  "S.No.": 1888,
  "Code": "I69",
  "MCCD Description": "Sequelae of cerebrovascular disease"
 },
 {
  "S.No.": 1889,
  "Code": "E68",
  "MCCD Description": "Sequelae of hyperalimentation"
 },
 {
  "S.No.": 1890,
  "Code": "G09",
  "MCCD Description": "Sequelae of inflammatory diseases of central nervous system"
 },
 {
  "S.No.": 1891,
  "Code": "T94",
  "MCCD Description": "Sequelae of injuries involving multiple and unspecified body regions"
 },
 {
  "S.No.": 1892,
  "Code": "T90",
  "MCCD Description": "Sequelae of injuries of head"
 },
 {
  "S.No.": 1893,
  "Code": "T93",
  "MCCD Description": "Sequelae of injuries of lower limb"
 },
 {
  "S.No.": 1894,
  "Code": "T91",
  "MCCD Description": "Sequelae of injuries of neck and trunk"
 },
 {
  "S.No.": 1895,
  "Code": "T92",
  "MCCD Description": "Sequelae of injuries of upper limb"
 },
 {
  "S.No.": 1896,
  "Code": "Y87",
  "MCCD Description": "Sequelae of intentional self-harm, assault and events of undetermined intent"
 },
 {
  "S.No.": 1897,
  "Code": "B92",
  "MCCD Description": "Sequelae of leprosy"
 },
 {
  "S.No.": 1898,
  "Code": "E64",
  "MCCD Description": "Sequelae of malnutrition and other nutritional deficiencies"
 },
 {
  "S.No.": 1899,
  "Code": "Y86",
  "MCCD Description": "Sequelae of other accidents"
 },
 {
  "S.No.": 1900,
  "Code": "T98",
  "MCCD Description": "Sequelae of other and unspecified effects of external causes"
 },
 {
  "S.No.": 1901,
  "Code": "B94",
  "MCCD Description": "Sequelae of other and unspecified infectious and parasitic diseases"
 },
 {
  "S.No.": 1902,
  "Code": "Y89",
  "MCCD Description": "Sequelae of other external causes"
 },
 {
  "S.No.": 1903,
  "Code": "T96",
  "MCCD Description": "Sequelae of poisoning by drugs, medicaments and biological substances"
 },
 {
  "S.No.": 1904,
  "Code": "B91",
  "MCCD Description": "Sequelae of poliomyelitis"
 },
 {
  "S.No.": 1905,
  "Code": "T97",
  "MCCD Description": "Sequelae of toxic effects of substances chiefly nonmedicinal as to source"
 },
 {
  "S.No.": 1906,
  "Code": "Y85",
  "MCCD Description": "Sequelae of transport accidents"
 },
 {
  "S.No.": 1907,
  "Code": "B90",
  "MCCD Description": "Sequelae of tuberculosis"
 },
 {
  "S.No.": 1908,
  "Code": "Y88",
  "MCCD Description": "Sequelae with surgical and medical care as external cause"
 },
 {
  "S.No.": 1909,
  "Code": "M05",
  "MCCD Description": "Seropositive rheumatoid arthritis"
 },
 {
  "S.No.": 1910,
  "Code": "F72",
  "MCCD Description": "Severe mental retardation"
 },
 {
  "S.No.": 1911,
  "Code": "Y05",
  "MCCD Description": "Sexual assault by bodily force"
 },
 {
  "S.No.": 1912,
  "Code": "F52",
  "MCCD Description": "Sexual dysfunction, not caused by organic disorder or disease"
 },
 {
  "S.No.": 1913,
  "Code": "A03",
  "MCCD Description": "Shigellosis"
 },
 {
  "S.No.": 1914,
  "Code": "R57",
  "MCCD Description": "Shock, not elsewhere classified"
 },
 {
  "S.No.": 1915,
  "Code": "M75",
  "MCCD Description": "Shoulder lesions"
 },
 {
  "S.No.": 1916,
  "Code": "D57",
  "MCCD Description": "Sickle-cell disorders"
 },
 {
  "S.No.": 1917,
  "Code": "J41",
  "MCCD Description": "Simple and mucopurulent chronic bronchitis"
 },
 {
  "S.No.": 1918,
  "Code": "O82",
  "MCCD Description": "Single delivery by caesarean section"
 },
 {
  "S.No.": 1919,
  "Code": "O81",
  "MCCD Description": "Single delivery by forceps and vacuum extractor"
 },
 {
  "S.No.": 1920,
  "Code": "O80",
  "MCCD Description": "Single spontaneous delivery"
 },
 {
  "S.No.": 1921,
  "Code": "L57",
  "MCCD Description": "Skin changes due to chronic exposure to nonionizing radiation"
 },
 {
  "S.No.": 1922,
  "Code": "G47",
  "MCCD Description": "Sleep disorders"
 },
 {
  "S.No.": 1923,
  "Code": "P05",
  "MCCD Description": "Slow fetal growth and fetal malnutrition"
 },
 {
  "S.No.": 1924,
  "Code": "P05-P07",
  "MCCD Description": "Slow fetal growth, fetal malnutrition and immaturity"
 },
 {
  "S.No.": 1925,
  "Code": "N27",
  "MCCD Description": "Small kidney of unknown cause"
 },
 {
  "S.No.": 1926,
  "Code": "B03",
  "MCCD Description": "Smallpox"
 },
 {
  "S.No.": 1927,
  "Code": "M73",
  "MCCD Description": "Soft tissue disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 1928,
  "Code": "M70",
  "MCCD Description": "Soft tissue disorders related to use, overuse and pressure"
 },
 {
  "S.No.": 1929,
  "Code": "F45",
  "MCCD Description": "Somatoform disorders"
 },
 {
  "S.No.": 1930,
  "Code": "R40",
  "MCCD Description": "Somnolence, stupor and coma"
 },
 {
  "S.No.": 1931,
  "Code": "F82",
  "MCCD Description": "Specific developmental disorder of motor function"
 },
 {
  "S.No.": 1932,
  "Code": "F81",
  "MCCD Description": "Specific developmental disorders of scholastic skills"
 },
 {
  "S.No.": 1933,
  "Code": "F80",
  "MCCD Description": "Specific developmental disorders of speech and language"
 },
 {
  "S.No.": 1934,
  "Code": "F60",
  "MCCD Description": "Specific personality disorders"
 },
 {
  "S.No.": 1935,
  "Code": "R47",
  "MCCD Description": "Speech disturbances, not elsewhere classified"
 },
 {
  "S.No.": 1936,
  "Code": "Q05",
  "MCCD Description": "Spina bifida"
 },
 {
  "S.No.": 1937,
  "Code": "G12",
  "MCCD Description": "Spinal muscular atrophy and related syndromes"
 },
 {
  "S.No.": 1938,
  "Code": "M42",
  "MCCD Description": "Spinal osteochondrosis"
 },
 {
  "S.No.": 1939,
  "Code": "M49",
  "MCCD Description": "Spondylopathies in diseases classified elsewhere"
 },
 {
  "S.No.": 1940,
  "Code": "M47",
  "MCCD Description": "Spondylosis"
 },
 {
  "S.No.": 1941,
  "Code": "O03",
  "MCCD Description": "Spontaneous abortion"
 },
 {
  "S.No.": 1942,
  "Code": "M66",
  "MCCD Description": "Spontaneous rupture of synovium and tendon"
 },
 {
  "S.No.": 1943,
  "Code": "B42",
  "MCCD Description": "Sporotrichosis"
 },
 {
  "S.No.": 1944,
  "Code": "A77",
  "MCCD Description": "Spotted fever [tick-borne rickettsioses]"
 },
 {
  "S.No.": 1945,
  "Code": "L00",
  "MCCD Description": "Staphylococcal scalded skin syndrome"
 },
 {
  "S.No.": 1946,
  "Code": "J46",
  "MCCD Description": "Status asthmaticus"
 },
 {
  "S.No.": 1947,
  "Code": "G41",
  "MCCD Description": "Status epilepticus"
 },
 {
  "S.No.": 1948,
  "Code": "K12",
  "MCCD Description": "Stomatitis and related lesions"
 },
 {
  "S.No.": 1949,
  "Code": "A40",
  "MCCD Description": "Streptococcal septicaemia"
 },
 {
  "S.No.": 1950,
  "Code": "B95",
  "MCCD Description": "Streptococcus and staphylococcus as the cause of diseases classified to other chapters"
 },
 {
  "S.No.": 1951,
  "Code": "W51",
  "MCCD Description": "Striking against or bumped into by another person"
 },
 {
  "S.No.": 1952,
  "Code": "W22",
  "MCCD Description": "Striking against or struck by other objects"
 },
 {
  "S.No.": 1953,
  "Code": "W21",
  "MCCD Description": "Striking against or struck by sports equipment"
 },
 {
  "S.No.": 1954,
  "Code": "I64",
  "MCCD Description": "Stroke, not specified as haemorrhage or infarction"
 },
 {
  "S.No.": 1955,
  "Code": "B78",
  "MCCD Description": "Strongyloidiasis"
 },
 {
  "S.No.": 1956,
  "Code": "W20",
  "MCCD Description": "Struck by thrown, projected or falling object"
 },
 {
  "S.No.": 1957,
  "Code": "I60",
  "MCCD Description": "Subarachnoid haemorrhage"
 },
 {
  "S.No.": 1958,
  "Code": "E02",
  "MCCD Description": "Subclinical iodine-deficiency hypothyroidism"
 },
 {
  "S.No.": 1959,
  "Code": "I22",
  "MCCD Description": "Subsequent myocardial infarction"
 },
 {
  "S.No.": 1960,
  "Code": "R95",
  "MCCD Description": "Sudden infant death syndrome"
 },
 {
  "S.No.": 1961,
  "Code": "X32",
  "MCCD Description": "Sun stroke"
 },
 {
  "S.No.": 1962,
  "Code": "L55",
  "MCCD Description": "Sunburn"
 },
 {
  "S.No.": 1963,
  "Code": "T33",
  "MCCD Description": "Superficial frostbite"
 },
 {
  "S.No.": 1964,
  "Code": "T00",
  "MCCD Description": "Superficial injuries involving multiple body regions"
 },
 {
  "S.No.": 1965,
  "Code": "S30",
  "MCCD Description": "Superficial injury of abdomen, lower back and pelvis"
 },
 {
  "S.No.": 1966,
  "Code": "S90",
  "MCCD Description": "Superficial injury of ankle and foot"
 },
 {
  "S.No.": 1967,
  "Code": "S50",
  "MCCD Description": "Superficial injury of forearm"
 },
 {
  "S.No.": 1968,
  "Code": "S00",
  "MCCD Description": "Superficial injury of head"
 },
 {
  "S.No.": 1969,
  "Code": "S70",
  "MCCD Description": "Superficial injury of hip and thigh"
 },
 {
  "S.No.": 1970,
  "Code": "S80",
  "MCCD Description": "Superficial injury of lower leg"
 },
 {
  "S.No.": 1971,
  "Code": "S10",
  "MCCD Description": "Superficial injury of neck"
 },
 {
  "S.No.": 1972,
  "Code": "S40",
  "MCCD Description": "Superficial injury of shoulder and upper arm"
 },
 {
  "S.No.": 1973,
  "Code": "S20",
  "MCCD Description": "Superficial injury of thorax"
 },
 {
  "S.No.": 1974,
  "Code": "S60",
  "MCCD Description": "Superficial injury of wrist and hand"
 },
 {
  "S.No.": 1975,
  "Code": "H66",
  "MCCD Description": "Suppurative and unspecified otitis media"
 },
 {
  "S.No.": 1976,
  "Code": "Y83",
  "MCCD Description": "Surgical operation and other surgical procedures as the cause of abnormal reaction of the patient, o"
 },
 {
  "S.No.": 1977,
  "Code": "R63",
  "MCCD Description": "Symptoms and signs concerning food and fluid intake"
 },
 {
  "S.No.": 1978,
  "Code": "R46",
  "MCCD Description": "Symptoms and signs involving appearance and behaviour"
 },
 {
  "S.No.": 1979,
  "Code": "R45",
  "MCCD Description": "Symptoms and signs involving emotional state"
 },
 {
  "S.No.": 1980,
  "Code": "R55",
  "MCCD Description": "Syncope and collapse"
 },
 {
  "S.No.": 1981,
  "Code": "Q70",
  "MCCD Description": "Syndactyly"
 },
 {
  "S.No.": 1982,
  "Code": "M65",
  "MCCD Description": "Synovitis and tenosynovitis"
 },
 {
  "S.No.": 1983,
  "Code": "A50-A53",
  "MCCD Description": "Syphilis "
 },
 {
  "S.No.": 1984,
  "Code": "Y40",
  "MCCD Description": "Systemic antibiotics"
 },
 {
  "S.No.": 1985,
  "Code": "G13",
  "MCCD Description": "Systemic atrophies primarily affecting central nervous system in diseases classified elsewhere"
 },
 {
  "S.No.": 1986,
  "Code": "M36",
  "MCCD Description": "Systemic disorders of connective tissue in diseases classified elsewhere"
 },
 {
  "S.No.": 1987,
  "Code": "M32",
  "MCCD Description": "Systemic lupus erythematosus"
 },
 {
  "S.No.": 1988,
  "Code": "M34",
  "MCCD Description": "Systemic sclerosis"
 },
 {
  "S.No.": 1989,
  "Code": "B68",
  "MCCD Description": "Taeniasis"
 },
 {
  "S.No.": 1990,
  "Code": "E29",
  "MCCD Description": "Testicular dysfunction"
 },
 {
  "S.No.": 1991,
  "Code": "D56",
  "MCCD Description": "Thalassaemia"
 },
 {
  "S.No.": 1992,
  "Code": "E51",
  "MCCD Description": "Thiamine deficiency"
 },
 {
  "S.No.": 1993,
  "Code": "W77",
  "MCCD Description": "Threat to breathing due to cave-in, falling earth and other substances"
 },
 {
  "S.No.": 1994,
  "Code": "E06",
  "MCCD Description": "Thyroiditis"
 },
 {
  "S.No.": 1995,
  "Code": "E05",
  "MCCD Description": "Thyrotoxicosis [hyperthyroidism]"
 },
 {
  "S.No.": 1996,
  "Code": "F95",
  "MCCD Description": "Tic disorders"
 },
 {
  "S.No.": 1997,
  "Code": "A84",
  "MCCD Description": "Tick-borne viral encephalitis"
 },
 {
  "S.No.": 1998,
  "Code": "Y56",
  "MCCD Description": "Topical agents primarily affecting skin and mucous membrane and ophthalmological, otorhinolaryngolog"
 },
 {
  "S.No.": 1999,
  "Code": "N44",
  "MCCD Description": "Torsion of testis"
 },
 {
  "S.No.": 2000,
  "Code": "T64",
  "MCCD Description": "Toxic effect of aflatoxin and other mycotoxin food contaminants"
 },
 {
  "S.No.": 2001,
  "Code": "T51",
  "MCCD Description": "Toxic effect of alcohol"
 },
 {
  "S.No.": 2002,
  "Code": "T58",
  "MCCD Description": "Toxic effect of carbon monoxide"
 },
 {
  "S.No.": 2003,
  "Code": "T63",
  "MCCD Description": "Toxic effect of contact with venomous animals"
 },
 {
  "S.No.": 2004,
  "Code": "T54",
  "MCCD Description": "Toxic effect of corrosive substances"
 },
 {
  "S.No.": 2005,
  "Code": "T53",
  "MCCD Description": "Toxic effect of halogen derivatives of aliphatic and aromatic hydrocarbons"
 },
 {
  "S.No.": 2006,
  "Code": "T56",
  "MCCD Description": "Toxic effect of metals"
 },
 {
  "S.No.": 2007,
  "Code": "T61",
  "MCCD Description": "Toxic effect of noxious substances eaten as seafood"
 },
 {
  "S.No.": 2008,
  "Code": "T52",
  "MCCD Description": "Toxic effect of organic solvents"
 },
 {
  "S.No.": 2009,
  "Code": "T65",
  "MCCD Description": "Toxic effect of other and unspecified substances"
 },
 {
  "S.No.": 2010,
  "Code": "T59",
  "MCCD Description": "Toxic effect of other gases, fumes and vapours"
 },
 {
  "S.No.": 2011,
  "Code": "T57",
  "MCCD Description": "Toxic effect of other inorganic substances"
 },
 {
  "S.No.": 2012,
  "Code": "T62",
  "MCCD Description": "Toxic effect of other noxious substances eaten as food"
 },
 {
  "S.No.": 2013,
  "Code": "T60",
  "MCCD Description": "Toxic effect of pesticides"
 },
 {
  "S.No.": 2014,
  "Code": "T55",
  "MCCD Description": "Toxic effect of soaps and detergents"
 },
 {
  "S.No.": 2015,
  "Code": "G92",
  "MCCD Description": "Toxic encephalopathy"
 },
 {
  "S.No.": 2016,
  "Code": "K71",
  "MCCD Description": "Toxic liver disease"
 },
 {
  "S.No.": 2017,
  "Code": "B58",
  "MCCD Description": "Toxoplasmosis"
 },
 {
  "S.No.": 2018,
  "Code": "A71",
  "MCCD Description": "Trachoma"
 },
 {
  "S.No.": 2019,
  "Code": "L87",
  "MCCD Description": "Transepidermal elimination disorders"
 },
 {
  "S.No.": 2020,
  "Code": "G45",
  "MCCD Description": "Transient cerebral ischaemic attacks and related syndromes"
 },
 {
  "S.No.": 2021,
  "Code": "P70",
  "MCCD Description": "Transitory disorders of carbohydrate metabolism specific to fetus and newborn"
 },
 {
  "S.No.": 2022,
  "Code": "P71",
  "MCCD Description": "Transitory neonatal disorders of calcium and magnesium metabolism"
 },
 {
  "S.No.": 2023,
  "Code": "S18",
  "MCCD Description": "Traumatic amputation at neck level"
 },
 {
  "S.No.": 2024,
  "Code": "S98",
  "MCCD Description": "Traumatic amputation of ankle and foot"
 },
 {
  "S.No.": 2025,
  "Code": "S58",
  "MCCD Description": "Traumatic amputation of forearm"
 },
 {
  "S.No.": 2026,
  "Code": "S78",
  "MCCD Description": "Traumatic amputation of hip and thigh"
 },
 {
  "S.No.": 2027,
  "Code": "S88",
  "MCCD Description": "Traumatic amputation of lower leg"
 },
 {
  "S.No.": 2028,
  "Code": "S08",
  "MCCD Description": "Traumatic amputation of part of head"
 },
 {
  "S.No.": 2029,
  "Code": "S48",
  "MCCD Description": "Traumatic amputation of shoulder and upper arm"
 },
 {
  "S.No.": 2030,
  "Code": "S68",
  "MCCD Description": "Traumatic amputation of wrist and hand"
 },
 {
  "S.No.": 2031,
  "Code": "T05",
  "MCCD Description": "Traumatic amputations involving multiple body regions"
 },
 {
  "S.No.": 2032,
  "Code": "X51",
  "MCCD Description": "Travel and motion"
 },
 {
  "S.No.": 2033,
  "Code": "B75",
  "MCCD Description": "Trichinellosis"
 },
 {
  "S.No.": 2034,
  "Code": "A59",
  "MCCD Description": "Trichomoniasis"
 },
 {
  "S.No.": 2035,
  "Code": "B79",
  "MCCD Description": "Trichuriasis"
 },
 {
  "S.No.": 2036,
  "Code": "A18-A19",
  "MCCD Description": "Tuberculosis of  other organs & miliary tuberculosis"
 },
 {
  "S.No.": 2037,
  "Code": "A17",
  "MCCD Description": "Tuberculosis of nervous system"
 },
 {
  "S.No.": 2038,
  "Code": "A18",
  "MCCD Description": "Tuberculosis of other organs"
 },
 {
  "S.No.": 2039,
  "Code": "N12",
  "MCCD Description": "Tubulo-interstitial nephritis, not specified as acute or chronic"
 },
 {
  "S.No.": 2040,
  "Code": "A21",
  "MCCD Description": "Tularaemia"
 },
 {
  "S.No.": 2041,
  "Code": "Q96",
  "MCCD Description": "Turners syndrome"
 },
 {
  "S.No.": 2042,
  "Code": "A01",
  "MCCD Description": "Typhoid fever and paratyphoid fevers"
 },
 {
  "S.No.": 2043,
  "Code": "A75",
  "MCCD Description": "Typhus fever"
 },
 {
  "S.No.": 2044,
  "Code": "L97",
  "MCCD Description": "Ulcer of lower limb, not elsewhere classified"
 },
 {
  "S.No.": 2045,
  "Code": "K51",
  "MCCD Description": "Ulcerative colitis"
 },
 {
  "S.No.": 2046,
  "Code": "P51",
  "MCCD Description": "Umbilical haemorrhage of new born"
 },
 {
  "S.No.": 2047,
  "Code": "K42",
  "MCCD Description": "Umbilical hernia"
 },
 {
  "S.No.": 2048,
  "Code": "R98",
  "MCCD Description": "Unattended death"
 },
 {
  "S.No.": 2049,
  "Code": "Q53",
  "MCCD Description": "Undescended testicle"
 },
 {
  "S.No.": 2050,
  "Code": "Y60",
  "MCCD Description": "Unintentional cut, puncture, perforation or haemorrhage during surgical and medical care"
 },
 {
  "S.No.": 2051,
  "Code": "R69",
  "MCCD Description": "Unknown and unspecified causes of morbidity"
 },
 {
  "S.No.": 2052,
  "Code": "K46",
  "MCCD Description": "Unspecified abdominal hernia"
 },
 {
  "S.No.": 2053,
  "Code": "O06",
  "MCCD Description": "Unspecified abortion"
 },
 {
  "S.No.": 2054,
  "Code": "J22",
  "MCCD Description": "Unspecified acute lower respiratory infection"
 },
 {
  "S.No.": 2055,
  "Code": "K37",
  "MCCD Description": "Unspecified appendicitis"
 },
 {
  "S.No.": 2056,
  "Code": "A94",
  "MCCD Description": "Unspecified arthropod-borne viral fever"
 },
 {
  "S.No.": 2057,
  "Code": "F59",
  "MCCD Description": "Unspecified behavioural syndromes associated with physiological disturbances and physical factors"
 },
 {
  "S.No.": 2058,
  "Code": "V79.2",
  "MCCD Description": "Unspecified bus occupant injured in collision with other and unspecified motor vehicles in nontraffi"
 },
 {
  "S.No.": 2059,
  "Code": "V79.6",
  "MCCD Description": "Unspecified bus occupant injured in collision with other and unspecified motor vehicles in traffic a"
 },
 {
  "S.No.": 2060,
  "Code": "V49.2",
  "MCCD Description": "Unspecified car occupant injured in collision with other and unspecified motor vehicles in nontraffi"
 },
 {
  "S.No.": 2061,
  "Code": "V49.6",
  "MCCD Description": "Unspecified car occupant injured in collision with other and unspecified motor vehicles in traffic a"
 },
 {
  "S.No.": 2062,
  "Code": "J42",
  "MCCD Description": "Unspecified chronic bronchitis"
 },
 {
  "S.No.": 2063,
  "Code": "L25",
  "MCCD Description": "Unspecified contact dermatitis"
 },
 {
  "S.No.": 2064,
  "Code": "N26",
  "MCCD Description": "Unspecified contracted kidney"
 },
 {
  "S.No.": 2065,
  "Code": "F03",
  "MCCD Description": "Unspecified dementia"
 },
 {
  "S.No.": 2066,
  "Code": "E14",
  "MCCD Description": "Unspecified diabetes mellitus"
 },
 {
  "S.No.": 2067,
  "Code": "F69",
  "MCCD Description": "Unspecified disorder of adult personality and behaviour"
 },
 {
  "S.No.": 2068,
  "Code": "F89",
  "MCCD Description": "Unspecified disorder of psychological development"
 },
 {
  "S.No.": 2069,
  "Code": "W74",
  "MCCD Description": "Unspecified drowning and submersion"
 },
 {
  "S.No.": 2070,
  "Code": "T66",
  "MCCD Description": "Unspecified effects of radiation"
 },
 {
  "S.No.": 2071,
  "Code": "Y34",
  "MCCD Description": "Unspecified event, undetermined intent"
 },
 {
  "S.No.": 2072,
  "Code": "W19",
  "MCCD Description": "Unspecified fall"
 },
 {
  "S.No.": 2073,
  "Code": "R31",
  "MCCD Description": "Unspecified haematuria"
 },
 {
  "S.No.": 2074,
  "Code": "B24",
  "MCCD Description": "Unspecified human immunodeficiency virus [HIV] disease"
 },
 {
  "S.No.": 2075,
  "Code": "B82",
  "MCCD Description": "Unspecified intestinal parasitism"
 },
 {
  "S.No.": 2076,
  "Code": "R17",
  "MCCD Description": "Unspecified jaundice"
 },
 {
  "S.No.": 2077,
  "Code": "N63",
  "MCCD Description": "Unspecified lump in breast"
 },
 {
  "S.No.": 2078,
  "Code": "B54",
  "MCCD Description": "Unspecified malaria"
 },
 {
  "S.No.": 2079,
  "Code": "O16",
  "MCCD Description": "Unspecified maternal hypertension"
 },
 {
  "S.No.": 2080,
  "Code": "F79",
  "MCCD Description": "Unspecified mental retardation"
 },
 {
  "S.No.": 2081,
  "Code": "Y69",
  "MCCD Description": "Unspecified misadventure during surgical and medical care"
 },
 {
  "S.No.": 2082,
  "Code": "F39",
  "MCCD Description": "Unspecified mood [affective] disorder"
 },
 {
  "S.No.": 2083,
  "Code": "V29.2",
  "MCCD Description": "Unspecified motorcycle rider injured in collision with other and unspecified motor vehicles in nontr"
 },
 {
  "S.No.": 2084,
  "Code": "V29.6",
  "MCCD Description": "Unspecified motorcycle rider injured in collision with other and unspecified motor vehicles in traff"
 },
 {
  "S.No.": 2085,
  "Code": "T07",
  "MCCD Description": "Unspecified multiple injuries"
 },
 {
  "S.No.": 2086,
  "Code": "B49",
  "MCCD Description": "Unspecified mycosis"
 },
 {
  "S.No.": 2087,
  "Code": "N05",
  "MCCD Description": "Unspecified nephritic syndrome"
 },
 {
  "S.No.": 2088,
  "Code": "F29",
  "MCCD Description": "Unspecified nonorganic psychosis"
 },
 {
  "S.No.": 2089,
  "Code": "V69.2",
  "MCCD Description": "Unspecified occupant of heavy transport vehicle injured in collision with other and unspecified moto"
 },
 {
  "S.No.": 2090,
  "Code": "V69.6",
  "MCCD Description": "Unspecified occupant of heavy transport vehicle injured in collision with other and unspecified moto"
 },
 {
  "S.No.": 2091,
  "Code": "V59.2",
  "MCCD Description": "Unspecified occupant of pick-up truck or van injured in collision with other and unspecified motor v"
 },
 {
  "S.No.": 2092,
  "Code": "V59.6",
  "MCCD Description": "Unspecified occupant of pick-up truck or van injured in collision with other and unspecified motor v"
 },
 {
  "S.No.": 2093,
  "Code": "V39.2",
  "MCCD Description": "Unspecified occupant of three-wheeled motor vehicle injured in collision with other and unspecified "
 },
 {
  "S.No.": 2094,
  "Code": "V39.6",
  "MCCD Description": "Unspecified occupant of three-wheeled motor vehicle injured in collision with other and unspecified "
 },
 {
  "S.No.": 2095,
  "Code": "F09",
  "MCCD Description": "Unspecified organic or symptomatic mental disorder"
 },
 {
  "S.No.": 2096,
  "Code": "B89",
  "MCCD Description": "Unspecified parasitic disease"
 },
 {
  "S.No.": 2097,
  "Code": "V19.2",
  "MCCD Description": "Unspecified pedal cyclist injured in collision with other and unspecified motor vehicles in nontraff"
 },
 {
  "S.No.": 2098,
  "Code": "V19.6",
  "MCCD Description": "Unspecified pedal cyclist injured in collision with other and unspecified motor vehicles in traffic "
 },
 {
  "S.No.": 2099,
  "Code": "J64",
  "MCCD Description": "Unspecified pneumoconiosis"
 },
 {
  "S.No.": 2100,
  "Code": "X57",
  "MCCD Description": "Unspecified privation"
 },
 {
  "S.No.": 2101,
  "Code": "E46",
  "MCCD Description": "Unspecified protein-energy malnutrition"
 },
 {
  "S.No.": 2102,
  "Code": "B64",
  "MCCD Description": "Unspecified protozoal disease"
 },
 {
  "S.No.": 2103,
  "Code": "N23",
  "MCCD Description": "Unspecified renal colic"
 },
 {
  "S.No.": 2104,
  "Code": "N19",
  "MCCD Description": "Unspecified renal failure"
 },
 {
  "S.No.": 2105,
  "Code": "E43",
  "MCCD Description": "Unspecified severe protein-energy malnutrition"
 },
 {
  "S.No.": 2106,
  "Code": "A64",
  "MCCD Description": "Unspecified sexually transmitted disease"
 },
 {
  "S.No.": 2107,
  "Code": "W84",
  "MCCD Description": "Unspecified threat to breathing"
 },
 {
  "S.No.": 2108,
  "Code": "V99",
  "MCCD Description": "Unspecified transport accident"
 },
 {
  "S.No.": 2109,
  "Code": "R32",
  "MCCD Description": "Unspecified urinary incontinence"
 },
 {
  "S.No.": 2110,
  "Code": "A86",
  "MCCD Description": "Unspecified viral encephalitis"
 },
 {
  "S.No.": 2111,
  "Code": "A99",
  "MCCD Description": "Unspecified viral haemorrhagic fever"
 },
 {
  "S.No.": 2112,
  "Code": "B19",
  "MCCD Description": "Unspecified viral hepatitis"
 },
 {
  "S.No.": 2113,
  "Code": "B09",
  "MCCD Description": "Unspecified viral infection characterized by skin and mucous membrane lesions"
 },
 {
  "S.No.": 2114,
  "Code": "A89",
  "MCCD Description": "Unspecified viral infection of central nervous system"
 },
 {
  "S.No.": 2115,
  "Code": "R36",
  "MCCD Description": "Urethral discharge"
 },
 {
  "S.No.": 2116,
  "Code": "N37",
  "MCCD Description": "Urethral disorders in diseases classified elsewhere"
 },
 {
  "S.No.": 2117,
  "Code": "N35",
  "MCCD Description": "Urethral stricture"
 },
 {
  "S.No.": 2118,
  "Code": "N34",
  "MCCD Description": "Urethritis and urethral syndrome"
 },
 {
  "S.No.": 2119,
  "Code": "N20-N23",
  "MCCD Description": "Urolithiasis"
 },
 {
  "S.No.": 2120,
  "Code": "L50",
  "MCCD Description": "Urticaria"
 },
 {
  "S.No.": 2121,
  "Code": "B01",
  "MCCD Description": "Varicella [chickenpox]"
 },
 {
  "S.No.": 2122,
  "Code": "I83",
  "MCCD Description": "Varicose veins of lower extremities"
 },
 {
  "S.No.": 2123,
  "Code": "I86",
  "MCCD Description": "Varicose veins of other sites"
 },
 {
  "S.No.": 2124,
  "Code": "F01",
  "MCCD Description": "Vascular dementia"
 },
 {
  "S.No.": 2125,
  "Code": "K55",
  "MCCD Description": "Vascular disorders of intestine"
 },
 {
  "S.No.": 2126,
  "Code": "G46",
  "MCCD Description": "Vascular syndromes of brain in cerebrovascular diseases"
 },
 {
  "S.No.": 2127,
  "Code": "L95",
  "MCCD Description": "Vasculitis limited to skin, not elsewhere classified"
 },
 {
  "S.No.": 2128,
  "Code": "J30",
  "MCCD Description": "Vasomotor and allergic rhinitis"
 },
 {
  "S.No.": 2129,
  "Code": "O22",
  "MCCD Description": "Venous complications in pregnancy"
 },
 {
  "S.No.": 2130,
  "Code": "O87",
  "MCCD Description": "Venous complications in the puerperium"
 },
 {
  "S.No.": 2131,
  "Code": "K43",
  "MCCD Description": "Ventral hernia"
 },
 {
  "S.No.": 2132,
  "Code": "H82",
  "MCCD Description": "Vertiginous syndromes in diseases classified elsewhere"
 },
 {
  "S.No.": 2133,
  "Code": "X36",
  "MCCD Description": "Victim of avalanche, landslide and other earth movements"
 },
 {
  "S.No.": 2134,
  "Code": "X37",
  "MCCD Description": "Victim of cataclysmic storm"
 },
 {
  "S.No.": 2135,
  "Code": "X34",
  "MCCD Description": "Victim of earthquake"
 },
 {
  "S.No.": 2136,
  "Code": "X38",
  "MCCD Description": "Victim of flood"
 },
 {
  "S.No.": 2137,
  "Code": "X33",
  "MCCD Description": "Victim of lightning"
 },
 {
  "S.No.": 2138,
  "Code": "X35",
  "MCCD Description": "Victim of volcanic eruption"
 },
 {
  "S.No.": 2139,
  "Code": "B97",
  "MCCD Description": "Viral agents as the cause of diseases classified to other chapters"
 },
 {
  "S.No.": 2140,
  "Code": "A08",
  "MCCD Description": "Viral and other specified intestinal infections"
 },
 {
  "S.No.": 2141,
  "Code": "B30",
  "MCCD Description": "Viral conjunctivitis"
 },
 {
  "S.No.": 2142,
  "Code": "B34",
  "MCCD Description": "Viral infection of unspecified site"
 },
 {
  "S.No.": 2143,
  "Code": "A87",
  "MCCD Description": "Viral meningitis"
 },
 {
  "S.No.": 2144,
  "Code": "J12",
  "MCCD Description": "Viral pneumonia, not elsewhere classified"
 },
 {
  "S.No.": 2145,
  "Code": "B07",
  "MCCD Description": "Viral warts"
 },
 {
  "S.No.": 2146,
  "Code": "H53",
  "MCCD Description": "Visual disturbances"
 },
 {
  "S.No.": 2147,
  "Code": "E50",
  "MCCD Description": "Vitamin A deficiency"
 },
 {
  "S.No.": 2148,
  "Code": "D51",
  "MCCD Description": "Vitamin B12 deficiency anaemia"
 },
 {
  "S.No.": 2149,
  "Code": "E55",
  "MCCD Description": "Vitamin D deficiency"
 },
 {
  "S.No.": 2150,
  "Code": "L80",
  "MCCD Description": "Vitiligo"
 },
 {
  "S.No.": 2151,
  "Code": "R49",
  "MCCD Description": "Voice disturbances"
 },
 {
  "S.No.": 2152,
  "Code": "E86",
  "MCCD Description": "Volume depletion"
 },
 {
  "S.No.": 2153,
  "Code": "N77",
  "MCCD Description": "Vulvovaginal ulceration and inflammation in diseases classified elsewhere"
 },
 {
  "S.No.": 2154,
  "Code": "V90-V94",
  "MCCD Description": "Water transport accident"
 },
 {
  "S.No.": 2155,
  "Code": "V92",
  "MCCD Description": "Water-transport-related drowning and submersion without accident to watercraft"
 },
 {
  "S.No.": 2156,
  "Code": "A37",
  "MCCD Description": "Whooping cough"
 },
 {
  "S.No.": 2157,
  "Code": "A66",
  "MCCD Description": "Yaws"
 },
 {
  "S.No.": 2158,
  "Code": "A95",
  "MCCD Description": "Yellow fever"
 },
 {
  "S.No.": 2159,
  "Code": "B02",
  "MCCD Description": "Zoster [herpes zoster]"
 },
 {
  "S.No.": 2160,
  "Code": "B46",
  "MCCD Description": "Zygomycosis"
 }
];

export default jsonData;
