// service.js
$(document).ready(function () {
    setTableData();
    new DataTable('#myDataTable', {
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    let column = this;
                    let title = column.footer().textContent;
     
                    // Create input element
                    let input = document.createElement('input');
                    input.placeholder = title;
                    column.footer().replaceChildren(input);
     
                    // Event listener for user input
                    input.addEventListener('keyup', () => {
                        if (column.search() !== this.value) {
                            column.search(input.value).draw();
                        }
                    });
                });
        }
    });
});


function setTableData() {
    
var jsonData = [
    {
        "S.No.": "1",
        "MCCD Code": "A00",
        "Disease": "Cholera",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "2",
        "MCCD Code": "A01",
        "Disease": "Typhoid and paratyphoid fevers",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "3",
        "MCCD Code": "A02",
        "Disease": "Other salmonella infections",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "4",
        "MCCD Code": "A03",
        "Disease": "Shigellosis",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "5",
        "MCCD Code": "A04",
        "Disease": "Other bacterial intestinal infections",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "6",
        "MCCD Code": "A05",
        "Disease": "Other bacterial foodborne intoxications",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "7",
        "MCCD Code": "A06",
        "Disease": "Amoebiasis",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "8",
        "MCCD Code": "A07",
        "Disease": "Other protozoal intestinal diseases",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "9",
        "MCCD Code": "A08",
        "Disease": "Viral and other specified intestinal infections",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "10",
        "MCCD Code": "A09",
        "Disease": "Diarrhoea and gastroenteritis of presumed infectious origin",
        "Category (Sub Group)": "Intestinal infectious diseases (A00-A09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "11",
        "MCCD Code": "A15",
        "Disease": "Respiratory tuberculosis, bacteriologically and histologically confirmed",
        "Category (Sub Group)": "Tuberculosis (A15-A19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "12",
        "MCCD Code": "A16",
        "Disease": "Respiratory tuberculosis, not confirmed bacteriologically or histologically",
        "Category (Sub Group)": "Tuberculosis (A15-A19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "13",
        "MCCD Code": "A17",
        "Disease": "Tuberculosis of nervous system",
        "Category (Sub Group)": "Tuberculosis (A15-A19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "14",
        "MCCD Code": "A18",
        "Disease": "Tuberculosis of other organs",
        "Category (Sub Group)": "Tuberculosis (A15-A19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "15",
        "MCCD Code": "A19",
        "Disease": "Miliary tuberculosis",
        "Category (Sub Group)": "Tuberculosis (A15-A19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "16",
        "MCCD Code": "A20",
        "Disease": "Plague",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "17",
        "MCCD Code": "A21",
        "Disease": "Tularaemia",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "18",
        "MCCD Code": "A22",
        "Disease": "Anthrax",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "19",
        "MCCD Code": "A23",
        "Disease": "Brucellosis",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "20",
        "MCCD Code": "A24",
        "Disease": "Glanders and melioidosis",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "21",
        "MCCD Code": "A25",
        "Disease": "Rat-bite fevers",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "22",
        "MCCD Code": "A26",
        "Disease": "Erysipeloid",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "23",
        "MCCD Code": "A27",
        "Disease": "Leptospirosis",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "24",
        "MCCD Code": "A28",
        "Disease": "Other zoonotic bacterial diseases, not elsewhere classified",
        "Category (Sub Group)": "Certain zoonotic bacterial diseases (A20-A28)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "25",
        "MCCD Code": "A30",
        "Disease": "Leprosy [Hansen's disease]",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "26",
        "MCCD Code": "A31",
        "Disease": "Infection due to other mycobacteria",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "27",
        "MCCD Code": "A32",
        "Disease": "Listeriosis",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "28",
        "MCCD Code": "A33",
        "Disease": "Tetanus neonatorum",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "29",
        "MCCD Code": "A34",
        "Disease": "Obstetrical tetanus",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "30",
        "MCCD Code": "A35",
        "Disease": "Other tetanus",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "31",
        "MCCD Code": "A36",
        "Disease": "Diphtheria",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "32",
        "MCCD Code": "A37",
        "Disease": "Whooping cough",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "33",
        "MCCD Code": "A38",
        "Disease": "Scarlet fever",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "34",
        "MCCD Code": "A39",
        "Disease": "Meningococcal infection",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "35",
        "MCCD Code": "A40",
        "Disease": "Streptococcal septicaemia",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "36",
        "MCCD Code": "A41",
        "Disease": "Other septicaemia",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "37",
        "MCCD Code": "A42",
        "Disease": "Actinomycosis",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "38",
        "MCCD Code": "A43",
        "Disease": "Nocardiosis",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "39",
        "MCCD Code": "A44",
        "Disease": "Bartonellosis",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "40",
        "MCCD Code": "A46",
        "Disease": "Erysipelas",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "41",
        "MCCD Code": "A48",
        "Disease": "Other bacterial diseases, not elsewhere classified",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "42",
        "MCCD Code": "A49",
        "Disease": "Bacterial infection of unspecified site",
        "Category (Sub Group)": "Other bacterial diseases (A30-A49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "43",
        "MCCD Code": "A50",
        "Disease": "Congenital syphilis",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "44",
        "MCCD Code": "A51",
        "Disease": "Early syphilis",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "45",
        "MCCD Code": "A52",
        "Disease": "Late syphilis",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "46",
        "MCCD Code": "A53",
        "Disease": "Other and unspecified syphilis",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "47",
        "MCCD Code": "A54",
        "Disease": "Gonococcal infection",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "48",
        "MCCD Code": "A55",
        "Disease": "Chlamydial lymphogranuloma (venereum)",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "49",
        "MCCD Code": "A56",
        "Disease": "Other sexually transmitted chlamydial diseases",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "50",
        "MCCD Code": "A57",
        "Disease": "Chancroid",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "51",
        "MCCD Code": "A58",
        "Disease": "Granuloma inguinale",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "52",
        "MCCD Code": "A59",
        "Disease": "Trichomoniasis",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "53",
        "MCCD Code": "A60",
        "Disease": "Anogenital herpesviral [herpes simplex] infection",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "54",
        "MCCD Code": "A63",
        "Disease": "Other predominantly sexually transmitted diseases, not elsewhere classified",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "55",
        "MCCD Code": "A64",
        "Disease": "Unspecified sexually transmitted disease",
        "Category (Sub Group)": "Infections with a predominantly sexual mode of transmission (A50-A64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "56",
        "MCCD Code": "A65",
        "Disease": "Nonvenereal syphilis",
        "Category (Sub Group)": "Other spirochaetal diseases (A65-A69)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "57",
        "MCCD Code": "A66",
        "Disease": "Yaws",
        "Category (Sub Group)": "Other spirochaetal diseases (A65-A69)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "58",
        "MCCD Code": "A67",
        "Disease": "Pinta [carate]",
        "Category (Sub Group)": "Other spirochaetal diseases (A65-A69)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "59",
        "MCCD Code": "A68",
        "Disease": "Relapsing fevers",
        "Category (Sub Group)": "Other spirochaetal diseases (A65-A69)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "60",
        "MCCD Code": "A69",
        "Disease": "Other spirochaetal infections",
        "Category (Sub Group)": "Other spirochaetal diseases (A65-A69)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "61",
        "MCCD Code": "A70",
        "Disease": "Chlamydia psittaci infection",
        "Category (Sub Group)": "Other diseases caused by chlamydiae (A70-A74)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "62",
        "MCCD Code": "A71",
        "Disease": "Trachoma",
        "Category (Sub Group)": "Other diseases caused by chlamydiae (A70-A74)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "63",
        "MCCD Code": "A74",
        "Disease": "Other diseases caused by chlamydiae",
        "Category (Sub Group)": "Other diseases caused by chlamydiae (A70-A74)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "64",
        "MCCD Code": "A75",
        "Disease": "Typhus fever",
        "Category (Sub Group)": "Rickettsioses (A75-A79)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "65",
        "MCCD Code": "A77",
        "Disease": "Spotted fever [tick-borne rickettsioses]",
        "Category (Sub Group)": "Rickettsioses (A75-A79)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "66",
        "MCCD Code": "A78",
        "Disease": "Q fever",
        "Category (Sub Group)": "Rickettsioses (A75-A79)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "67",
        "MCCD Code": "A79",
        "Disease": "Other rickettsioses",
        "Category (Sub Group)": "Rickettsioses (A75-A79)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "68",
        "MCCD Code": "A80",
        "Disease": "Acute poliomyelitis",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "69",
        "MCCD Code": "A81",
        "Disease": "Atypical virus infections of central nervous system",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "70",
        "MCCD Code": "A82",
        "Disease": "Rabies",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "71",
        "MCCD Code": "A83",
        "Disease": "Mosquito-borne viral encephalitis",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "72",
        "MCCD Code": "A84",
        "Disease": "Tick-borne viral encephalitis",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "73",
        "MCCD Code": "A85",
        "Disease": "Other viral encephalitis, not elsewhere classified",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "74",
        "MCCD Code": "A86",
        "Disease": "Unspecified viral encephalitis",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "75",
        "MCCD Code": "A87",
        "Disease": "Viral meningitis",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "76",
        "MCCD Code": "A88",
        "Disease": "Other viral infections of central nervous system, not elsewhere classified",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "77",
        "MCCD Code": "A89",
        "Disease": "Unspecified viral infection of central nervous system",
        "Category (Sub Group)": "Viral infections of the central nervous system (A80-A89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "78",
        "MCCD Code": "A90",
        "Disease": "Dengue fever [classical dengue]",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "79",
        "MCCD Code": "A91",
        "Disease": "Dengue haemorrhagic fever",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "80",
        "MCCD Code": "A92",
        "Disease": "Other mosquito-borne viral fevers",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "81",
        "MCCD Code": "A93",
        "Disease": "Other arthropod-borne viral fevers, not elsewhere classified",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "82",
        "MCCD Code": "A94",
        "Disease": "Unspecified arthropod-borne viral fever",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "83",
        "MCCD Code": "A95",
        "Disease": "Yellow fever",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "84",
        "MCCD Code": "A96",
        "Disease": "Arenaviral haemorrhagic fever",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "85",
        "MCCD Code": "A98",
        "Disease": "Other viral haemorrhagic fevers, not elsewhere classified",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "86",
        "MCCD Code": "A99",
        "Disease": "Unspecified viral haemorrhagic fever",
        "Category (Sub Group)": "Arthropod-borne viral fevers and viral haemorrhagic fevers (A90-A99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "87",
        "MCCD Code": "B00",
        "Disease": "Herpesviral [herpes simplex] infections",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "88",
        "MCCD Code": "B01",
        "Disease": "Varicella [chickenpox]",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "89",
        "MCCD Code": "B02",
        "Disease": "Zoster  [herpes  zoster]",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "90",
        "MCCD Code": "B03",
        "Disease": "Smallpox",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "91",
        "MCCD Code": "B04",
        "Disease": "Monkeypox",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "92",
        "MCCD Code": "B05",
        "Disease": "Measles",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "93",
        "MCCD Code": "B06",
        "Disease": "Rubella [German measles]",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "94",
        "MCCD Code": "B07",
        "Disease": "Viral warts",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "95",
        "MCCD Code": "B08",
        "Disease": "Other viral infections characterized by skin and mucous membrane lesions, not elsewhere classified",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "96",
        "MCCD Code": "B09",
        "Disease": "Unspecified viral infection characterized by skin and mucous membrane lesions",
        "Category (Sub Group)": "Viral infections characterized by skin and mucous membrane lesions (B00-B09)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "97",
        "MCCD Code": "B15",
        "Disease": "Acute hepatitis A",
        "Category (Sub Group)": "Viral hepatitis (B15-B19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "98",
        "MCCD Code": "B16",
        "Disease": "Acute hepatitis B",
        "Category (Sub Group)": "Viral hepatitis (B15-B19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "99",
        "MCCD Code": "B17",
        "Disease": "Other acute viral hepatitis",
        "Category (Sub Group)": "Viral hepatitis (B15-B19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "100",
        "MCCD Code": "B18",
        "Disease": "Chronic viral hepatitis",
        "Category (Sub Group)": "Viral hepatitis (B15-B19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "101",
        "MCCD Code": "B19",
        "Disease": "Unspecified viral hepatitis",
        "Category (Sub Group)": "Viral hepatitis (B15-B19)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "102",
        "MCCD Code": "B20",
        "Disease": "Human immunodeficiency virus [HIV] disease result ing in infectious and parasitic diseases",
        "Category (Sub Group)": "Human immunodeficiency virus [HIV] disease (B20-B24)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "103",
        "MCCD Code": "B21",
        "Disease": "Human immunodeficiency virus [HIV] disease resulting in malignant neoplasms",
        "Category (Sub Group)": "Human immunodeficiency virus [HIV] disease (B20-B24)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "104",
        "MCCD Code": "B22",
        "Disease": "Human immunodeficiency virus [HIV] disease resulting in other specified diseases",
        "Category (Sub Group)": "Human immunodeficiency virus [HIV] disease (B20-B24)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "105",
        "MCCD Code": "B23",
        "Disease": "Human immunodeficiency virus [HIV] disease resulting in other con",
        "Category (Sub Group)": "Human immunodeficiency virus [HIV] disease (B20-B24)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "106",
        "MCCD Code": "B24",
        "Disease": "Unspecified human immunodeficiency virus [HIV] disease",
        "Category (Sub Group)": "Human immunodeficiency virus [HIV] disease (B20-B24)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "107",
        "MCCD Code": "B25",
        "Disease": "Cytomegaloviral disease",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "108",
        "MCCD Code": "B26",
        "Disease": "Mumps",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "109",
        "MCCD Code": "B27",
        "Disease": "Infectious mononucleosis",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "110",
        "MCCD Code": "B30",
        "Disease": "Viral conjunctivitis",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "111",
        "MCCD Code": "B33",
        "Disease": "Other viral diseases, not elsewhere classified",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "112",
        "MCCD Code": "B34",
        "Disease": "Viral infection of unspecified site",
        "Category (Sub Group)": "Other viral diseases (B25-B34)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "113",
        "MCCD Code": "B35",
        "Disease": "Dermatophytosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "114",
        "MCCD Code": "B36",
        "Disease": "Other superficial mycoses",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "115",
        "MCCD Code": "B37",
        "Disease": "Candidiasis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "116",
        "MCCD Code": "B38",
        "Disease": "Coccidioidomycosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "117",
        "MCCD Code": "B39",
        "Disease": "Histoplasmosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "118",
        "MCCD Code": "B40",
        "Disease": "Blastomycosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "119",
        "MCCD Code": "B41",
        "Disease": "Paracoccidioidomycosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "120",
        "MCCD Code": "B42",
        "Disease": "Sporotrichosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "121",
        "MCCD Code": "B43",
        "Disease": "Chromomycosis and phaeomycotic abscess",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "122",
        "MCCD Code": "B44",
        "Disease": "Aspergillosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "123",
        "MCCD Code": "B45",
        "Disease": "Cryptococcosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "124",
        "MCCD Code": "B46",
        "Disease": "Zygomycosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "125",
        "MCCD Code": "B47",
        "Disease": "Mycetoma",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "126",
        "MCCD Code": "B48",
        "Disease": "Other mycoses, not elsewhere classified",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "127",
        "MCCD Code": "B49",
        "Disease": "Unspecified mycosis",
        "Category (Sub Group)": "Mycoses (B35-B49)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "128",
        "MCCD Code": "B50",
        "Disease": "Plasmodium falciparum malaria",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "129",
        "MCCD Code": "B51",
        "Disease": "Plasmodium vivax malaria",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "130",
        "MCCD Code": "B52",
        "Disease": "Plasmodium malariae malaria",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "131",
        "MCCD Code": "B53",
        "Disease": "Other parasitologically confirmed malaria",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "132",
        "MCCD Code": "B54",
        "Disease": "Unspecified malaria",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "133",
        "MCCD Code": "B55",
        "Disease": "Leishmaniasis",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "134",
        "MCCD Code": "B56",
        "Disease": "African trypanosomiasis",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "135",
        "MCCD Code": "B57",
        "Disease": "Chagas'  disease",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "136",
        "MCCD Code": "B58",
        "Disease": "Toxoplasmosis",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "137",
        "MCCD Code": "B59",
        "Disease": "Pneumocystosis",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "138",
        "MCCD Code": "B60",
        "Disease": "Other protozoal diseases, not elsewhere classified",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "139",
        "MCCD Code": "B64",
        "Disease": "Unspecified protozoal disease",
        "Category (Sub Group)": "Protozoal diseases (B50-B64)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "140",
        "MCCD Code": "B65",
        "Disease": "Schistosomiasis [bilharziasis]",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "141",
        "MCCD Code": "B66",
        "Disease": "Other fluke infections",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "142",
        "MCCD Code": "B67",
        "Disease": "Echinococcosis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "143",
        "MCCD Code": "B68",
        "Disease": "Taeniasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "144",
        "MCCD Code": "B69",
        "Disease": "Cysticercosis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "145",
        "MCCD Code": "B70",
        "Disease": "Diphyllobothriasis and sparganosis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "146",
        "MCCD Code": "B71",
        "Disease": "Other cestode infections",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "147",
        "MCCD Code": "B72",
        "Disease": "Dracunculiasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "148",
        "MCCD Code": "B73",
        "Disease": "Onchocerciasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "149",
        "MCCD Code": "B74",
        "Disease": "Filariasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "150",
        "MCCD Code": "B75",
        "Disease": "Trichinellosis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "151",
        "MCCD Code": "B76",
        "Disease": "Hookworm diseases",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "152",
        "MCCD Code": "B77",
        "Disease": "Ascariasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "153",
        "MCCD Code": "B78",
        "Disease": "Strongyloidiasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "154",
        "MCCD Code": "B79",
        "Disease": "Trichuriasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "155",
        "MCCD Code": "B80",
        "Disease": "Enterobiasis",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "156",
        "MCCD Code": "B81",
        "Disease": "Other intestinal helminthiases, not elsewhere classified",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "157",
        "MCCD Code": "B82",
        "Disease": "Unspecified intestinal parasitism",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "158",
        "MCCD Code": "B83",
        "Disease": "Other helminthiases",
        "Category (Sub Group)": "Helminthiases (B65-B83)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "159",
        "MCCD Code": "B85",
        "Disease": "Pediculosis and phthiriasis",
        "Category (Sub Group)": "Pediculosis, acariasis and other infestations (B85-B89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "160",
        "MCCD Code": "B86",
        "Disease": "Scabies",
        "Category (Sub Group)": "Pediculosis, acariasis and other infestations (B85-B89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "161",
        "MCCD Code": "B87",
        "Disease": "Myiasis",
        "Category (Sub Group)": "Pediculosis, acariasis and other infestations (B85-B89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "162",
        "MCCD Code": "B88",
        "Disease": "Other infestations",
        "Category (Sub Group)": "Pediculosis, acariasis and other infestations (B85-B89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "163",
        "MCCD Code": "B89",
        "Disease": "Unspecified parasitic disease",
        "Category (Sub Group)": "Pediculosis, acariasis and other infestations (B85-B89)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "164",
        "MCCD Code": "B90",
        "Disease": "Sequelae  of  tuberculosis",
        "Category (Sub Group)": "Sequelaeof infectious and parasitic diseases (B90-B94)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "165",
        "MCCD Code": "B91",
        "Disease": "Sequelae of poliomyelitis",
        "Category (Sub Group)": "Sequelaeof infectious and parasitic diseases (B90-B94)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "166",
        "MCCD Code": "B92",
        "Disease": "Sequelae of leprosy",
        "Category (Sub Group)": "Sequelaeof infectious and parasitic diseases (B90-B94)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "167",
        "MCCD Code": "B94",
        "Disease": "Sequelae of other and unspecified infectious and parasitic diseases",
        "Category (Sub Group)": "Sequelaeof infectious and parasitic diseases (B90-B94)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "168",
        "MCCD Code": "B95",
        "Disease": "Streptococcus and staphylococcus as the cause of diseases classified to other chapters",
        "Category (Sub Group)": "Bacterial, viral and other infectious agents (B95-B97)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "169",
        "MCCD Code": "B96",
        "Disease": "Other bacterial agents as the cause of diseases classified to other chapters",
        "Category (Sub Group)": "Bacterial, viral and other infectious agents (B95-B97)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "170",
        "MCCD Code": "B97",
        "Disease": "Viral agents as the cause of diseases classified to other chapters",
        "Category (Sub Group)": "Bacterial, viral and other infectious agents (B95-B97)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "171",
        "MCCD Code": "B99",
        "Disease": "Other and unspecified infectious diseases",
        "Category (Sub Group)": "Other infectious diseases (B99)",
        "Major Group": "Certain infectious and parasitic diseases (A00-B99)"
    },
    {
        "S.No.": "172",
        "MCCD Code": "C00",
        "Disease": "Malignant neoplasm of lip",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "173",
        "MCCD Code": "C01",
        "Disease": "Malignant neoplasm of base of tongue",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "174",
        "MCCD Code": "C02",
        "Disease": "Malignant neoplasm of other and unspecified parts of tongue",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "175",
        "MCCD Code": "C03",
        "Disease": "Malignant neoplasm of gum",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "176",
        "MCCD Code": "C04",
        "Disease": "Malignant neoplasm of floor of mouth",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "177",
        "MCCD Code": "C05",
        "Disease": "Malignant neoplasm of palate",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "178",
        "MCCD Code": "C06",
        "Disease": "Malignant neoplasm of other and unspecified parts of mouth",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "179",
        "MCCD Code": "C07",
        "Disease": "Malignant neoplasm of parotid gland",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "180",
        "MCCD Code": "C08",
        "Disease": "Malignant neoplasm of other and unspecified major salivary glands",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "181",
        "MCCD Code": "C09",
        "Disease": "Malignant neoplasm of tonsil",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "182",
        "MCCD Code": "C10",
        "Disease": "Malignant neoplasm of oropharynx",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "183",
        "MCCD Code": "C11",
        "Disease": "Malignant neoplasm of nasopharynx",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "184",
        "MCCD Code": "C12",
        "Disease": "Malignant neoplasm of piriform sinus",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "185",
        "MCCD Code": "C13",
        "Disease": "Malignant neoplasm of hypopharynx",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "186",
        "MCCD Code": "C14",
        "Disease": "Malignant neoplasm of other and ill-defined sites in the lip, oral cavity and pharynx",
        "Category (Sub Group)": "Malignant neoplasms of lip, oral cavity and pharynx (C00-C14)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "187",
        "MCCD Code": "C15",
        "Disease": "Malignant neoplasm of oesophagus",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "188",
        "MCCD Code": "C16",
        "Disease": "Malignant neoplasm of stomach",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "189",
        "MCCD Code": "C17",
        "Disease": "Malignant neoplasm of small intestine",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "190",
        "MCCD Code": "C18",
        "Disease": "Malignant neoplasm of colon",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "191",
        "MCCD Code": "C19",
        "Disease": "Malignant neoplasm of rectosigmoid junction",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "192",
        "MCCD Code": "C20",
        "Disease": "Malignant neoplasm of rectum",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "193",
        "MCCD Code": "C21",
        "Disease": "Malignant neoplasm of anus and anal canal",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "194",
        "MCCD Code": "C22",
        "Disease": "Malignant neoplasm of liver and intrahepatic bileducts",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "195",
        "MCCD Code": "C23",
        "Disease": "Malignant neoplasm of gallbladder",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "196",
        "MCCD Code": "C24",
        "Disease": "Malignant neoplasm of other and unspecified parts of biliary tract",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "197",
        "MCCD Code": "C25",
        "Disease": "Malignant neoplasm of pancreas",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "198",
        "MCCD Code": "C26",
        "Disease": "Malignant neoplasm of other and ill-defined digestive organs",
        "Category (Sub Group)": "Malignant neoplasms of digestive organs (C15-C26)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "199",
        "MCCD Code": "C30",
        "Disease": "Malignant neoplasm of nasal cavity and middle ear",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "200",
        "MCCD Code": "C31",
        "Disease": "Malignant neoplasm of accessory sinuses",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "201",
        "MCCD Code": "C32",
        "Disease": "Malignant neoplasm of larynx",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "202",
        "MCCD Code": "C33",
        "Disease": "Malignant neoplasm of trachea",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "203",
        "MCCD Code": "C34",
        "Disease": "Malignant neoplasm of bronchus and lung",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "204",
        "MCCD Code": "C37",
        "Disease": "Malignant neoplasm of thymus",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "205",
        "MCCD Code": "C38",
        "Disease": "Malignant neoplasm of heart, mediastinum and pleura",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "206",
        "MCCD Code": "C39",
        "Disease": "Malignant neoplasm of other and ill-defined sites in the respiratory system and intrathoracic organs",
        "Category (Sub Group)": "Malignant neoplasms of respiratory and intrathoracic organs (C30-C39)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "207",
        "MCCD Code": "C40",
        "Disease": "Malignant neoplasm of bone and articular cartilage of limbs",
        "Category (Sub Group)": "Malignant neoplasms of bone and articular cartilage (C40-C41)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "208",
        "MCCD Code": "C41",
        "Disease": "Malignant neoplasm of bone and articular cartilage of other and unspecified sites",
        "Category (Sub Group)": "Malignant neoplasms of bone and articular cartilage (C40-C41)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "209",
        "MCCD Code": "C43",
        "Disease": "Malignant melanoma of skin",
        "Category (Sub Group)": "Melanoma and other malignant neoplasms of skin (C43-C44)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "210",
        "MCCD Code": "C44",
        "Disease": "Other malignant neoplasms of skin",
        "Category (Sub Group)": "Melanoma and other malignant neoplasms of skin (C43-C44)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "211",
        "MCCD Code": "C45",
        "Disease": "Mesothelioma",
        "Category (Sub Group)": "Malignant neoplasms of mesothelial and soft tissue (C45-C49)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "212",
        "MCCD Code": "C46",
        "Disease": "Kaposi's sarcoma",
        "Category (Sub Group)": "Malignant neoplasms of mesothelial and soft tissue (C45-C49)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "213",
        "MCCD Code": "C47",
        "Disease": "Malignant neoplasm of peripheral nerves and autonomic nervous system",
        "Category (Sub Group)": "Malignant neoplasms of mesothelial and soft tissue (C45-C49)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "214",
        "MCCD Code": "C48",
        "Disease": "Malignant neoplasm of retroperitoneum and peritoneum",
        "Category (Sub Group)": "Malignant neoplasms of mesothelial and soft tissue (C45-C49)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "215",
        "MCCD Code": "C49",
        "Disease": "Malignant neoplasm of other connective and soft tissue",
        "Category (Sub Group)": "Malignant neoplasms of mesothelial and soft tissue (C45-C49)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "216",
        "MCCD Code": "C50",
        "Disease": "Malignant neoplasm of breast",
        "Category (Sub Group)": "Malignant neoplasm of breast (C50)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "217",
        "MCCD Code": "C51",
        "Disease": "Malignant neoplasm of vulva",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "218",
        "MCCD Code": "C52",
        "Disease": "Malignant neoplasm of vagina",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "219",
        "MCCD Code": "C53",
        "Disease": "Malignant neoplasm of cervix uteri",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "220",
        "MCCD Code": "C54",
        "Disease": "Malignant neoplasm of corpus uteri",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "221",
        "MCCD Code": "C55",
        "Disease": "Malignant neoplasm of uterus, part unspecified",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "222",
        "MCCD Code": "C56",
        "Disease": "Malignant neoplasm of ovary",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "223",
        "MCCD Code": "C57",
        "Disease": "Malignant neoplasm of other and unspecified female genital organs",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "224",
        "MCCD Code": "C58",
        "Disease": "Malignant neoplasm of placenta",
        "Category (Sub Group)": "Malignant neoplasms of female genital organs (C51-C58)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "225",
        "MCCD Code": "C60",
        "Disease": "Malignant neoplasm of penis",
        "Category (Sub Group)": "Malignant neoplasms of male genital organs (C60-C63)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "226",
        "MCCD Code": "C61",
        "Disease": "Malignant neoplasm of prostate",
        "Category (Sub Group)": "Malignant neoplasms of male genital organs (C60-C63)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "227",
        "MCCD Code": "C62",
        "Disease": "Malignant neoplasm of testis",
        "Category (Sub Group)": "Malignant neoplasms of male genital organs (C60-C63)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "228",
        "MCCD Code": "C63",
        "Disease": "Malignant neoplasm of other and unspecified male genital organs",
        "Category (Sub Group)": "Malignant neoplasms of male genital organs (C60-C63)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "229",
        "MCCD Code": "C64",
        "Disease": "Malignant neoplasm of kidney, except renal pelvis",
        "Category (Sub Group)": "Malignant neoplasms of urinary tract (C64-C68)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "230",
        "MCCD Code": "C65",
        "Disease": "Malignant neoplasm of renal pelvis",
        "Category (Sub Group)": "Malignant neoplasms of urinary tract (C64-C68)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "231",
        "MCCD Code": "C66",
        "Disease": "Malignant neoplasm of ureter",
        "Category (Sub Group)": "Malignant neoplasms of urinary tract (C64-C68)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "232",
        "MCCD Code": "C67",
        "Disease": "Malignant neoplasm of bladder",
        "Category (Sub Group)": "Malignant neoplasms of urinary tract (C64-C68)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "233",
        "MCCD Code": "C68",
        "Disease": "Malignant neoplasm of other and unspecified urinary organs",
        "Category (Sub Group)": "Malignant neoplasms of urinary tract (C64-C68)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "234",
        "MCCD Code": "C69",
        "Disease": "Malignant neoplasm of eye and adnexa",
        "Category (Sub Group)": "Malignant neoplasms of eye, brain and other parts of central nervous system (C69-C72)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "235",
        "MCCD Code": "C70",
        "Disease": "Malignant neoplasm of meninges",
        "Category (Sub Group)": "Malignant neoplasms of eye, brain and other parts of central nervous system (C69-C72)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "236",
        "MCCD Code": "C71",
        "Disease": "Malignant neoplasm of brain",
        "Category (Sub Group)": "Malignant neoplasms of eye, brain and other parts of central nervous system (C69-C72)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "237",
        "MCCD Code": "C72",
        "Disease": "Malignant neoplasm of spinal cord, cranial nerves and other parts of central nervous system",
        "Category (Sub Group)": "Malignant neoplasms of eye, brain and other parts of central nervous system (C69-C72)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "238",
        "MCCD Code": "C73",
        "Disease": "Malignant neoplasm of thyroid gland",
        "Category (Sub Group)": "Malignant neoplasms of thyroid and other endocrine glands (C73-C75)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "239",
        "MCCD Code": "C74",
        "Disease": "Malignant neoplasm of adrenal gland",
        "Category (Sub Group)": "Malignant neoplasms of thyroid and other endocrine glands (C73-C75)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "240",
        "MCCD Code": "C75",
        "Disease": "Malignant neoplasm of other endocrine glands and related structures",
        "Category (Sub Group)": "Malignant neoplasms of thyroid and other endocrine glands (C73-C75)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "241",
        "MCCD Code": "C76",
        "Disease": "Malignant neoplasm of other and ill-defined sites",
        "Category (Sub Group)": "Malignant neoplasms of ill-defined, secondary and unspecified sites (C76-C80)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "242",
        "MCCD Code": "C77",
        "Disease": "Secondary and unspecified malignant neoplasm of lymph nodes",
        "Category (Sub Group)": "Malignant neoplasms of ill-defined, secondary and unspecified sites (C76-C80)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "243",
        "MCCD Code": "C78",
        "Disease": "Secondary malignant neoplasm of respiratory and digestive organs",
        "Category (Sub Group)": "Malignant neoplasms of ill-defined, secondary and unspecified sites (C76-C80)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "244",
        "MCCD Code": "C79",
        "Disease": "Secondary malignant neoplasm of other sites",
        "Category (Sub Group)": "Malignant neoplasms of ill-defined, secondary and unspecified sites (C76-C80)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "245",
        "MCCD Code": "C80",
        "Disease": "Malignant neoplasm without specification of site",
        "Category (Sub Group)": "Malignant neoplasms of ill-defined, secondary and unspecified sites (C76-C80)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "246",
        "MCCD Code": "C81",
        "Disease": "Hodgkin's disease",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "247",
        "MCCD Code": "C82",
        "Disease": "Follicular [nodular] non-Hodgkin's lymphoma",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "248",
        "MCCD Code": "C83",
        "Disease": "Diffuse non-Hodgkin's lymphoma",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "249",
        "MCCD Code": "C84",
        "Disease": "Peripheral and cutaneous T-cell lymphomas",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "250",
        "MCCD Code": "C85",
        "Disease": "Other and unspecified types of non-Hodgkin's lymphoma",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "251",
        "MCCD Code": "C88",
        "Disease": "Malignant immunoproliferative diseases",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "252",
        "MCCD Code": "C90",
        "Disease": "Multiple myeloma and malignant plasma cell neoplasms",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "253",
        "MCCD Code": "C91",
        "Disease": "Lymphoid leukaemia",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "254",
        "MCCD Code": "C92",
        "Disease": "Myeloid leukaemia",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "255",
        "MCCD Code": "C93",
        "Disease": "Monocytic leukaemia",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "256",
        "MCCD Code": "C94",
        "Disease": "Other leukaemias of specified cell type",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "257",
        "MCCD Code": "C95",
        "Disease": "Leukaemia of unspecified cell type",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "258",
        "MCCD Code": "C96",
        "Disease": "Other and unspecified malignant neoplasms of lymphoid, haematopoietic and related  tissue",
        "Category (Sub Group)": "Malignant neoplasms of lymphoid, haematopoietic and related tissue (C81-C96)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "259",
        "MCCD Code": "C97",
        "Disease": "Malignant neoplasms of independent (primary) multiple sites",
        "Category (Sub Group)": "Malignant neoplasms of independent (primary) multiple sites (C97)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "260",
        "MCCD Code": "D00",
        "Disease": "Carcinoma in situ of oral cavity, oesophagus and stomach",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "261",
        "MCCD Code": "D01",
        "Disease": "Carcinoma in situ of other and unspecified digestive organs",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "262",
        "MCCD Code": "D02",
        "Disease": "Carcinoma in situ of middle ear and respiratory system",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "263",
        "MCCD Code": "D03",
        "Disease": "Melanoma in situ",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "264",
        "MCCD Code": "D04",
        "Disease": "Carcinoma in situ of skin",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "265",
        "MCCD Code": "D05",
        "Disease": "Carcinoma in situ of breast",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "266",
        "MCCD Code": "D06",
        "Disease": "Carcinoma in situ of cervix uteri",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "267",
        "MCCD Code": "D07",
        "Disease": "Carcinoma in situ of other and unspecified genital organs",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "268",
        "MCCD Code": "D09",
        "Disease": "Carcinoma in situ of other and unspecified sites",
        "Category (Sub Group)": "In situ neoplasms (D00-D09)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "269",
        "MCCD Code": "D10",
        "Disease": "Benign neoplasm of mouth and pharynx",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "270",
        "MCCD Code": "D11",
        "Disease": "Benign neoplasm of major salivary glands",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "271",
        "MCCD Code": "D12",
        "Disease": "Benign neoplasm of colon, rectum, anus and anal canal",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "272",
        "MCCD Code": "D13",
        "Disease": "Benign neoplasm of other and ill-defined parts of digestive system",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "273",
        "MCCD Code": "D14",
        "Disease": "Benign neoplasm of middle ear and respiratory system",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "274",
        "MCCD Code": "D15",
        "Disease": "Benign neoplasm of other and unspecified intrathoracic organs",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "275",
        "MCCD Code": "D16",
        "Disease": "Benign neoplasm of bone and articular cartilage",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "276",
        "MCCD Code": "D17",
        "Disease": "Benign lipomatous neoplasm",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "277",
        "MCCD Code": "D18",
        "Disease": "Haemangioma and lymphangioma, any site",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "278",
        "MCCD Code": "D19",
        "Disease": "Benign neoplasm of mesothelial tissue",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "279",
        "MCCD Code": "D20",
        "Disease": "Benign neoplasm of soft tissue of retroperitoneum and peritoneum",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "280",
        "MCCD Code": "D21",
        "Disease": "Other benign neoplasms of connective and other soft tissue",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "281",
        "MCCD Code": "D22",
        "Disease": "Melanocytic naevi",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "282",
        "MCCD Code": "D23",
        "Disease": "Other benign neoplasms of skin",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "283",
        "MCCD Code": "D24",
        "Disease": "Benign neoplasm of breast",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "284",
        "MCCD Code": "D25",
        "Disease": "Leiomyoma of uterus",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "285",
        "MCCD Code": "D26",
        "Disease": "Other benign neoplasms of uterus",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "286",
        "MCCD Code": "D27",
        "Disease": "Benign neoplasm of ovary",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "287",
        "MCCD Code": "D28",
        "Disease": "Benign neoplasm of other and unspecified female genital organs",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "288",
        "MCCD Code": "D29",
        "Disease": "Benign neoplasm of male genital organs",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "289",
        "MCCD Code": "D30",
        "Disease": "Benign neoplasm of urinary organs",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "290",
        "MCCD Code": "D31",
        "Disease": "Benign neoplasm of eye and adnexa",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "291",
        "MCCD Code": "D32",
        "Disease": "Benign neoplasm of meninges",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "292",
        "MCCD Code": "D33",
        "Disease": "Benign neoplasm of brain and other parts of central nervous system",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "293",
        "MCCD Code": "D34",
        "Disease": "Benign neoplasm of thyroid gland",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "294",
        "MCCD Code": "D35",
        "Disease": "Benign neoplasm of other and unspecified endocrine glands",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "295",
        "MCCD Code": "D36",
        "Disease": "Benign neoplasm of other and unspecified sites",
        "Category (Sub Group)": "Benign neoplasms (D10-D36)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "296",
        "MCCD Code": "D37",
        "Disease": "Neoplasm of uncertain or unknown behaviour of oral cavity and digestive organs",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "297",
        "MCCD Code": "D38",
        "Disease": "Neoplasm of uncertain or unknown behaviour of middle ear and respiratory and intrathoracic organs",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "298",
        "MCCD Code": "D39",
        "Disease": "Neoplasm of uncertain or unknown behaviour of female genital organs",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "299",
        "MCCD Code": "D40",
        "Disease": "Neoplasm of uncertain or unknown behaviour of male genital organs",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "300",
        "MCCD Code": "D41",
        "Disease": "Neoplasm of uncertain or unknown behaviour of urinary organs",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "301",
        "MCCD Code": "D42",
        "Disease": "Neoplasm of uncertain or unknown behaviour of meninges",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "302",
        "MCCD Code": "D43",
        "Disease": "Neoplasm of uncertain or unknown behaviour of brain and central nervous system",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "303",
        "MCCD Code": "D44",
        "Disease": "Neoplasm of uncertain or unknown behaviour of endocrine glands",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "304",
        "MCCD Code": "D45",
        "Disease": "Polycythaemia vera",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "305",
        "MCCD Code": "D46",
        "Disease": "Myelodysplastic syndromes",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "306",
        "MCCD Code": "D47",
        "Disease": "Other neoplasms of uncertain or unknown behaviour of lymphoid, haematopoietic and tissue related",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "307",
        "MCCD Code": "D48",
        "Disease": "Neoplasm of uncertain or unknown behaviour of other and unspecified sites",
        "Category (Sub Group)": "Neoplasms of uncertain or unknown behaviour (D37-D48)",
        "Major Group": "Neoplasms (C00-D48)"
    },
    {
        "S.No.": "308",
        "MCCD Code": "D50",
        "Disease": "Iron deficiency anaemia",
        "Category (Sub Group)": "Nutritional anaemias (D50-D53)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "309",
        "MCCD Code": "D51",
        "Disease": "Vitamin B12 deficiency anaemia",
        "Category (Sub Group)": "Nutritional anaemias (D50-D53)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "310",
        "MCCD Code": "D52",
        "Disease": "Folate deficiency anaemia",
        "Category (Sub Group)": "Nutritional anaemias (D50-D53)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "311",
        "MCCD Code": "D53",
        "Disease": "Other nutritional anaemias",
        "Category (Sub Group)": "Nutritional anaemias (D50-D53)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "312",
        "MCCD Code": "D55",
        "Disease": "Anaemia due to enzyme disorders",
        "Category (Sub Group)": "Haemolytic anaemias (D55-D59)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "313",
        "MCCD Code": "D56",
        "Disease": "Thalassaemia",
        "Category (Sub Group)": "Haemolytic anaemias (D55-D59)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "314",
        "MCCD Code": "D57",
        "Disease": "Sickle-cell disorders",
        "Category (Sub Group)": "Haemolytic anaemias (D55-D59)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "315",
        "MCCD Code": "D58",
        "Disease": "Other hereditary haemolytic anaemias",
        "Category (Sub Group)": "Haemolytic anaemias (D55-D59)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "316",
        "MCCD Code": "D59",
        "Disease": "Acquired haemolytic anaemia",
        "Category (Sub Group)": "Haemolytic anaemias (D55-D59)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "317",
        "MCCD Code": "D60",
        "Disease": "Acquired pure red cell aplasia [erythroblastopenia]",
        "Category (Sub Group)": "Aplastic and other anaemias (D60-D64)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "318",
        "MCCD Code": "D61",
        "Disease": "Other aplastic anaemias",
        "Category (Sub Group)": "Aplastic and other anaemias (D60-D64)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "319",
        "MCCD Code": "D62",
        "Disease": "Acute posthaemorrhagic anaemia",
        "Category (Sub Group)": "Aplastic and other anaemias (D60-D64)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "320",
        "MCCD Code": "D63",
        "Disease": "Anaemia in chronic diseases classified elsewhere",
        "Category (Sub Group)": "Aplastic and other anaemias (D60-D64)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "321",
        "MCCD Code": "D64",
        "Disease": "Other anaemias",
        "Category (Sub Group)": "Aplastic and other anaemias (D60-D64)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "322",
        "MCCD Code": "D65",
        "Disease": "Disseminated intravascular coagulation [defibrination syndrome]",
        "Category (Sub Group)": "Coagulation defects, purpura and other haemorrhagic conditions (D65-D69)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "323",
        "MCCD Code": "D66",
        "Disease": "Hereditary factor VIII deficiency",
        "Category (Sub Group)": "Coagulation defects, purpura and other haemorrhagic conditions (D65-D69)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "324",
        "MCCD Code": "D67",
        "Disease": "Hereditary factor IX deficiency",
        "Category (Sub Group)": "Coagulation defects, purpura and other haemorrhagic conditions (D65-D69)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "325",
        "MCCD Code": "D68",
        "Disease": "Other coagulation defects",
        "Category (Sub Group)": "Coagulation defects, purpura and other haemorrhagic conditions (D65-D69)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "326",
        "MCCD Code": "D69",
        "Disease": "Purpura and other haemorrhagic conditions",
        "Category (Sub Group)": "Coagulation defects, purpura and other haemorrhagic conditions (D65-D69)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "327",
        "MCCD Code": "D70",
        "Disease": "Agranulocytosis",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "328",
        "MCCD Code": "D71",
        "Disease": "Functional disorders of polymorphonuclear neutrophils",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "329",
        "MCCD Code": "D72",
        "Disease": "Other disorders of white blood cells",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "330",
        "MCCD Code": "D73",
        "Disease": "Diseases of spleen",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "331",
        "MCCD Code": "D74",
        "Disease": "Methaemoglobinaemia",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "332",
        "MCCD Code": "D75",
        "Disease": "Other diseases of blood and blood-forming organs",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "333",
        "MCCD Code": "D76",
        "Disease": "Certain diseases involving lymphoreticular tissue and reticulohistiocytic system",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "334",
        "MCCD Code": "D77",
        "Disease": "Other disorders of blood and blood-forming organs in diseases classified elsewhere",
        "Category (Sub Group)": "Other diseases of blood and blood-forming organs (D70-D77)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "335",
        "MCCD Code": "D80",
        "Disease": "Immunodeficiency with predominantly antibody defects",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "336",
        "MCCD Code": "D81",
        "Disease": "Combined immunodeficiencies",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "337",
        "MCCD Code": "D82",
        "Disease": "Immunodeficiency associated with other major defects",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "338",
        "MCCD Code": "D83",
        "Disease": "Common variable immunodeficiency",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "339",
        "MCCD Code": "D84",
        "Disease": "Other immunodeficiencies",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "340",
        "MCCD Code": "D86",
        "Disease": "Sarcoidosis",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "341",
        "MCCD Code": "D89",
        "Disease": "Other disorders involving the immune mechanism, not elsewhere classified",
        "Category (Sub Group)": "Certain disorders involving the immune mechanism (D80-D89)",
        "Major Group": "Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)"
    },
    {
        "S.No.": "342",
        "MCCD Code": "E00",
        "Disease": "Congenital iodine-deficiency syndrome",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "343",
        "MCCD Code": "E01",
        "Disease": "Iodine-deficiency-related thyroid disorders and allied conditions",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "344",
        "MCCD Code": "E02",
        "Disease": "Subclinical iodine-deficiency hypothyroidism",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "345",
        "MCCD Code": "E03",
        "Disease": "Other hypothyroidism",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "346",
        "MCCD Code": "E04",
        "Disease": "Other nontoxic goitre",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "347",
        "MCCD Code": "E05",
        "Disease": "Thyrotoxicosis [hyperthyroidism]",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "348",
        "MCCD Code": "E06",
        "Disease": "Thyroiditis",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "349",
        "MCCD Code": "E07",
        "Disease": "Other disorders of thyroid",
        "Category (Sub Group)": "Disorders of thyroid gland (E00-E07)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "350",
        "MCCD Code": "E10",
        "Disease": "Insulin-dependent diabetes mellitus",
        "Category (Sub Group)": "Diabetes mellitus (E10-E14)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "351",
        "MCCD Code": "E11",
        "Disease": "Non-insulin-dependent diabetes mellitus",
        "Category (Sub Group)": "Diabetes mellitus (E10-E14)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "352",
        "MCCD Code": "E12",
        "Disease": "Malnutrition-related diabetes mellitus",
        "Category (Sub Group)": "Diabetes mellitus (E10-E14)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "353",
        "MCCD Code": "E13",
        "Disease": "Other specified diabetes mellitus",
        "Category (Sub Group)": "Diabetes mellitus (E10-E14)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "354",
        "MCCD Code": "E14",
        "Disease": "Unspecified diabetes mellitus",
        "Category (Sub Group)": "Diabetes mellitus (E10-E14)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "355",
        "MCCD Code": "E15",
        "Disease": "Nondiabetic hypoglycaemic coma",
        "Category (Sub Group)": "Other disorders of glucose regulation and pancreatic internal secretion (E15-E16)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "356",
        "MCCD Code": "E16",
        "Disease": "Other disorders of pancreatic internal secretion",
        "Category (Sub Group)": "Other disorders of glucose regulation and pancreatic internal secretion (E15-E16)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "357",
        "MCCD Code": "E20",
        "Disease": "Hypoparathyroidism",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "358",
        "MCCD Code": "E21",
        "Disease": "Hyperparathyroidism and other disorders of parathyroid gland",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "359",
        "MCCD Code": "E22",
        "Disease": "Hyperfunction of pituitary gland",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "360",
        "MCCD Code": "E23",
        "Disease": "Hypofunction and other disorders of pituitary gland",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "361",
        "MCCD Code": "E24",
        "Disease": "Cushing's syndrome",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "362",
        "MCCD Code": "E25",
        "Disease": "Adrenogenital disorders",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "363",
        "MCCD Code": "E26",
        "Disease": "Hyperaldosteronism",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "364",
        "MCCD Code": "E27",
        "Disease": "Other disorders of adrenal gland",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "365",
        "MCCD Code": "E28",
        "Disease": "Ovarian dysfunction",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "366",
        "MCCD Code": "E29",
        "Disease": "Testicular dysfunction",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "367",
        "MCCD Code": "E30",
        "Disease": "Disorders of puberty, not elsewhere classified",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "368",
        "MCCD Code": "E31",
        "Disease": "Polyglandular dysfunction",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "369",
        "MCCD Code": "E32",
        "Disease": "Diseases of thymus",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "370",
        "MCCD Code": "E34",
        "Disease": "Other endocrine disorders",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "371",
        "MCCD Code": "E35",
        "Disease": "Disorders of endocrine glands in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of other endocrine glands (E20-E35)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "372",
        "MCCD Code": "E40",
        "Disease": "Kwashiorkor",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "373",
        "MCCD Code": "E41",
        "Disease": "Nutritional marasmus",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "374",
        "MCCD Code": "E42",
        "Disease": "Marasmic kwashiorkor",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "375",
        "MCCD Code": "E43",
        "Disease": "Unspecified severe protein-energy malnutrition",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "376",
        "MCCD Code": "E44",
        "Disease": "Protein-energy malnutrition of moderate and mild degree",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "377",
        "MCCD Code": "E45",
        "Disease": "Retarded development following protein-energy malnutrition",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "378",
        "MCCD Code": "E46",
        "Disease": "Unspecified protein-energy malnutrition",
        "Category (Sub Group)": "Malnutrition (E40-E46)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "379",
        "MCCD Code": "E50",
        "Disease": "Vitamin A deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "380",
        "MCCD Code": "E51",
        "Disease": "Thiamine deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "381",
        "MCCD Code": "E52",
        "Disease": "Niacin deficiency [pellagra]",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "382",
        "MCCD Code": "E53",
        "Disease": "Deficiency of other B group vitamins",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "383",
        "MCCD Code": "E54",
        "Disease": "Ascorbic acid deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "384",
        "MCCD Code": "E55",
        "Disease": "Vitamin D deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "385",
        "MCCD Code": "E56",
        "Disease": "Other  vitamin  deficiencies",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "386",
        "MCCD Code": "E58",
        "Disease": "Dietary  calcium  deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "387",
        "MCCD Code": "E59",
        "Disease": "Dietary selenium deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "388",
        "MCCD Code": "E60",
        "Disease": "Dietary zinc deficiency",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "389",
        "MCCD Code": "E61",
        "Disease": "Deficiency of other nutrient elements",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "390",
        "MCCD Code": "E63",
        "Disease": "Other nutritional deficiencies",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "391",
        "MCCD Code": "E64",
        "Disease": "Sequelae of malnutrition and other nutritional deficiencies",
        "Category (Sub Group)": "Other nutritional deficiencies (E50-E64)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "392",
        "MCCD Code": "E65",
        "Disease": "Localized adiposity",
        "Category (Sub Group)": "Obesity and other hyperalimentation (E65-E68)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "393",
        "MCCD Code": "E66",
        "Disease": "Obesity",
        "Category (Sub Group)": "Obesity and other hyperalimentation (E65-E68)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "394",
        "MCCD Code": "E67",
        "Disease": "Other hyperalimentation",
        "Category (Sub Group)": "Obesity and other hyperalimentation (E65-E68)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "395",
        "MCCD Code": "E68",
        "Disease": "Sequelae of hyperalimentation",
        "Category (Sub Group)": "Obesity and other hyperalimentation (E65-E68)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "396",
        "MCCD Code": "E70",
        "Disease": "Disorders of aromatic amino-acid metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "397",
        "MCCD Code": "E71",
        "Disease": "Disorders of branched-chain amino-acid metabolism and fatty-acid metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "398",
        "MCCD Code": "E72",
        "Disease": "Other disorders of amino-acid metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "399",
        "MCCD Code": "E73",
        "Disease": "Lactose intolerance",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "400",
        "MCCD Code": "E74",
        "Disease": "Other disorders of carbohydrate metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "401",
        "MCCD Code": "E75",
        "Disease": "Disorders of sphingolipid metabolism and other lipid storage disorders",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "402",
        "MCCD Code": "E76",
        "Disease": "Disorders of glycosaminoglycan metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "403",
        "MCCD Code": "E77",
        "Disease": "Disorders of glycoprotein metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "404",
        "MCCD Code": "E78",
        "Disease": "Disorders of lipoprotein metabolism and other lipidaemias",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "405",
        "MCCD Code": "E79",
        "Disease": "Disorders of purine and pyrimidine metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "406",
        "MCCD Code": "E80",
        "Disease": "Disorders of porphyrin and bilirubin metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "407",
        "MCCD Code": "E83",
        "Disease": "Disorders of mineral metabolism",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "408",
        "MCCD Code": "E84",
        "Disease": "Cystic fibrosis",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "409",
        "MCCD Code": "E85",
        "Disease": "Amyloidosis",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "410",
        "MCCD Code": "E86",
        "Disease": "Volume depletion",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "411",
        "MCCD Code": "E87",
        "Disease": "Other disorders of fluid, electrolyte and acid-base balance",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "412",
        "MCCD Code": "E88",
        "Disease": "Other metabolic disorders",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "413",
        "MCCD Code": "E89",
        "Disease": "Postprocedural endocrine and metabolic disorders, not elsewhere classified",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "414",
        "MCCD Code": "E90",
        "Disease": "Nutritional and metabolic disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Metabolic disorders (E70-E90)",
        "Major Group": "Endocrine, nutritional and metabolic diseases (E00-E90)"
    },
    {
        "S.No.": "415",
        "MCCD Code": "F00",
        "Disease": "Dementia in Alzheimer's disease",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "416",
        "MCCD Code": "F01",
        "Disease": "Vascular dementia",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "417",
        "MCCD Code": "F02",
        "Disease": "Dementia in other diseases classified elsewhere",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "418",
        "MCCD Code": "F03",
        "Disease": "Unspecified dementia",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "419",
        "MCCD Code": "F04",
        "Disease": "Organic amnesic syndrome, not induced by alcohol and other psychoactive substances",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "420",
        "MCCD Code": "F05",
        "Disease": "Delirium, not induced by alcohol and other psychoactive substances",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "421",
        "MCCD Code": "F06",
        "Disease": "Other mental disorders due to brain damage and dysfunction and to physical disease",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "422",
        "MCCD Code": "F07",
        "Disease": "Personality and behavioural disorders due to brain disease, damage and dysfunction",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "423",
        "MCCD Code": "F09",
        "Disease": "Unspecified organic or symptomatic mental disorder",
        "Category (Sub Group)": "Organic, including symptomatic, mental disorders (F00-F09)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "424",
        "MCCD Code": "F10",
        "Disease": "Mental and behavioural disorders due to use of alcohol",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "425",
        "MCCD Code": "F11",
        "Disease": "Mental and behavioural disorders due to use of opioids",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "426",
        "MCCD Code": "F12",
        "Disease": "Mental and behavioural disorders due to use of cannabinoids",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "427",
        "MCCD Code": "F13",
        "Disease": "Mental and behavioural disorders due to use of sedatives or hypnotics",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "428",
        "MCCD Code": "F14",
        "Disease": "Mental and behavioural disorders due to use of cocaine",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "429",
        "MCCD Code": "F15",
        "Disease": "Mental and behavioural disorders due to use of other stimulants, including caffeine",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "430",
        "MCCD Code": "F16",
        "Disease": "Mental and behavioural disorders due to use of hallucinogens",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "431",
        "MCCD Code": "F17",
        "Disease": "Mental and behavioural disorders due to use of tobacco",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "432",
        "MCCD Code": "F18",
        "Disease": "Mental and behavioural disorders due to use of volatile solvents",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "433",
        "MCCD Code": "F19",
        "Disease": "Mental and behavioural disorders due to multiple drug use and use of other psychoactive substances",
        "Category (Sub Group)": "Mental and behavioural disorders due to psychoactive substance use (F10-F19)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "434",
        "MCCD Code": "F20",
        "Disease": "Schizophrenia",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "435",
        "MCCD Code": "F21",
        "Disease": "Schizotypal disorder",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "436",
        "MCCD Code": "F22",
        "Disease": "Persistent delusional disorders",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "437",
        "MCCD Code": "F23",
        "Disease": "Acute and transient psychotic disorders",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "438",
        "MCCD Code": "F24",
        "Disease": "Induced delusional disorder",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "439",
        "MCCD Code": "F25",
        "Disease": "Schizoaffective disorders",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "440",
        "MCCD Code": "F28",
        "Disease": "Other nonorganic psychotic disorders",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "441",
        "MCCD Code": "F29",
        "Disease": "Unspecified nonorganic psychosis",
        "Category (Sub Group)": "Schizophrenia, schizotypal and delusional disorders (F20-F29)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "442",
        "MCCD Code": "F30",
        "Disease": "Manic episode",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "443",
        "MCCD Code": "F31",
        "Disease": "Bipolar affective disorder",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "444",
        "MCCD Code": "F32",
        "Disease": "Depressive episode",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "445",
        "MCCD Code": "F33",
        "Disease": "Recurrent depressive disorder",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "446",
        "MCCD Code": "F34",
        "Disease": "Persistent mood [affective] disorders",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "447",
        "MCCD Code": "F38",
        "Disease": "Other mood [affective] disorders",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "448",
        "MCCD Code": "F39",
        "Disease": "Unspecified mood [affective] disorder",
        "Category (Sub Group)": "Mood [affective] disorders (F30-F39)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "449",
        "MCCD Code": "F40",
        "Disease": "Phobic anxiety disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "450",
        "MCCD Code": "F41",
        "Disease": "Other anxiety disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "451",
        "MCCD Code": "F42",
        "Disease": "Obsessive-compulsive disorder",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "452",
        "MCCD Code": "F43",
        "Disease": "Reaction to severe stress, and adjustment disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "453",
        "MCCD Code": "F44",
        "Disease": "Dissociative [conversion] disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "454",
        "MCCD Code": "F45",
        "Disease": "Somatoform disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "455",
        "MCCD Code": "F48",
        "Disease": "Other neurotic disorders",
        "Category (Sub Group)": "Neurotic, stress-related and somatoform disorders (F40-F48)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "456",
        "MCCD Code": "F50",
        "Disease": "Eating disorders",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "457",
        "MCCD Code": "F51",
        "Disease": "Nonorganic sleep disorders",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "458",
        "MCCD Code": "F52",
        "Disease": "Sexual dysfunction, not caused by organic disorder or disease",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "459",
        "MCCD Code": "F53",
        "Disease": "Mental and behavioural disorders associated with the puerperium, not elsewhere classified",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "460",
        "MCCD Code": "F54",
        "Disease": "Psychological and behavioural factors associated with disorders or diseases classified elsewhere",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "461",
        "MCCD Code": "F55",
        "Disease": "Abuse of non-dependence-producing substances",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "462",
        "MCCD Code": "F59",
        "Disease": "Unspecified behavioural syndromes associated with physiological disturbances and physical factors",
        "Category (Sub Group)": "Behavioural syndromes associated with physiological disturbances and physical factors (F50-F59)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "463",
        "MCCD Code": "F60",
        "Disease": "Specific personality disorders",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "464",
        "MCCD Code": "F61",
        "Disease": "Mixed and other personality disorders",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "465",
        "MCCD Code": "F62",
        "Disease": "Enduring personality changes, not attributable to brain damage and disease",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "466",
        "MCCD Code": "F63",
        "Disease": "Habit and impulse disorders",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "467",
        "MCCD Code": "F64",
        "Disease": "Gender identity disorders",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "468",
        "MCCD Code": "F65",
        "Disease": "Disorders of sexual preference",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "469",
        "MCCD Code": "F66",
        "Disease": "Psychological and behavioural disorders associated with sexual development and orientation",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "470",
        "MCCD Code": "F68",
        "Disease": "Other disorders of adult personality and behaviour",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "471",
        "MCCD Code": "F69",
        "Disease": "Unspecified disorder of adult personality and behaviour",
        "Category (Sub Group)": "Disorders of adult personality and behaviour (F60-F69)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "472",
        "MCCD Code": "F70",
        "Disease": "Mild mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "473",
        "MCCD Code": "F71",
        "Disease": "Moderate mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "474",
        "MCCD Code": "F72",
        "Disease": "Severe mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "475",
        "MCCD Code": "F73",
        "Disease": "Profound mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "476",
        "MCCD Code": "F78",
        "Disease": "Other mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "477",
        "MCCD Code": "F79",
        "Disease": "Unspecified mental retardation",
        "Category (Sub Group)": "Mental retardation (F70-F79)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "478",
        "MCCD Code": "F80",
        "Disease": "Specific developmental disorders of speech and language",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "479",
        "MCCD Code": "F81",
        "Disease": "Specific developmental disorders of scholastic skills",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "480",
        "MCCD Code": "F82",
        "Disease": "Specific developmental disorder of motor function",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "481",
        "MCCD Code": "F83",
        "Disease": "Mixed specific developmental disorders",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "482",
        "MCCD Code": "F84",
        "Disease": "Pervasive developmental disorders",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "483",
        "MCCD Code": "F88",
        "Disease": "Other disorders of psychological development",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "484",
        "MCCD Code": "F89",
        "Disease": "Unspecified disorder of psychological development",
        "Category (Sub Group)": "Disorders of psychological development (F80-F89)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "485",
        "MCCD Code": "F90",
        "Disease": "Hyperkinetic disorders",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "486",
        "MCCD Code": "F91",
        "Disease": "Conduct disorders",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "487",
        "MCCD Code": "F92",
        "Disease": "Mixed disorders of conduct and emotions",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "488",
        "MCCD Code": "F93",
        "Disease": "Emotional disorders with onset specific to childhood",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "489",
        "MCCD Code": "F94",
        "Disease": "Disorders of social functioning with onset specific to childhood and adolescence",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "490",
        "MCCD Code": "F95",
        "Disease": "Tic disorders",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "491",
        "MCCD Code": "F98",
        "Disease": "Other behavioural and emotional disorders with onset usually occurring in childhood and olescence",
        "Category (Sub Group)": "Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90-F98)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "492",
        "MCCD Code": "F99",
        "Disease": "Mental disorder, not otherwise specified",
        "Category (Sub Group)": "Unspecified mental disorder (F99)",
        "Major Group": "Mental and behavioural disorders (F00-- F99)"
    },
    {
        "S.No.": "493",
        "MCCD Code": "G00",
        "Disease": "Bacterial meningitis, not elsewhere classified",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "494",
        "MCCD Code": "G01",
        "Disease": "Meningitis in bacterial diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "495",
        "MCCD Code": "G02",
        "Disease": "Meningitis in other infectious and parasitic diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "496",
        "MCCD Code": "G03",
        "Disease": "Meningitis due to other and unspecified causes",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "497",
        "MCCD Code": "G04",
        "Disease": "Encephalitis, myelitis and encephalomyelitis",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "498",
        "MCCD Code": "G05",
        "Disease": "Encephalitis, myelitis and encephalomyelitis in diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "499",
        "MCCD Code": "G06",
        "Disease": "Intracranial and intraspinal abscess and granuloma",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "500",
        "MCCD Code": "G07",
        "Disease": "Intracranial and intraspinal abscess and granuloma in diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "501",
        "MCCD Code": "G08",
        "Disease": "Intracranial and intraspinal phlebitis and thrombophlebitis",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "502",
        "MCCD Code": "G09",
        "Disease": "Sequelae of inflammatory diseases of central nervous system",
        "Category (Sub Group)": "Inflammatory diseases of the central nervous system (G00-G09)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "503",
        "MCCD Code": "G10",
        "Disease": "Huntington's disease",
        "Category (Sub Group)": "Systemic atrophies primarily affecting the central nervous system (G10-G13)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "504",
        "MCCD Code": "G11",
        "Disease": "Hereditary ataxia",
        "Category (Sub Group)": "Systemic atrophies primarily affecting the central nervous system (G10-G13)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "505",
        "MCCD Code": "G12",
        "Disease": "Spinal muscular atrophy and related syndromes",
        "Category (Sub Group)": "Systemic atrophies primarily affecting the central nervous system (G10-G13)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "506",
        "MCCD Code": "G13",
        "Disease": "Systemic atrophies primarily affecting central nervous system in diseases classified elsewhere",
        "Category (Sub Group)": "Systemic atrophies primarily affecting the central nervous system (G10-G13)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "507",
        "MCCD Code": "G20",
        "Disease": "Parkinson's disease",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "508",
        "MCCD Code": "G21",
        "Disease": "Secondary parkinsonism",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "509",
        "MCCD Code": "G22",
        "Disease": "Parkinsonism in diseases classified elsewhere",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "510",
        "MCCD Code": "G23",
        "Disease": "Other degenerative diseases of basal ganglia",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "511",
        "MCCD Code": "G24",
        "Disease": "Dystonia",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "512",
        "MCCD Code": "G25",
        "Disease": "Other extrapyramidal and movement disorders",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "513",
        "MCCD Code": "G26",
        "Disease": "Extrapyramidal and movement disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Extrapyramidal and movement disorders (G20-G26)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "514",
        "MCCD Code": "G30",
        "Disease": "Alzheimer's disease",
        "Category (Sub Group)": "Other degenerative diseases of the nervous system (G30-G32)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "515",
        "MCCD Code": "G31",
        "Disease": "Other degenerative diseases of nervous system, not elsewhere classified",
        "Category (Sub Group)": "Other degenerative diseases of the nervous system (G30-G32)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "516",
        "MCCD Code": "G32",
        "Disease": "Other degenerative disorders of nervous system in diseases classified elsewhere",
        "Category (Sub Group)": "Other degenerative diseases of the nervous system (G30-G32)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "517",
        "MCCD Code": "G35",
        "Disease": "Multiple sclerosis",
        "Category (Sub Group)": "Demyelinating diseases of the central nervous system (G35-G37)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "518",
        "MCCD Code": "G36",
        "Disease": "Other acute disseminated demyelination",
        "Category (Sub Group)": "Demyelinating diseases of the central nervous system (G35-G37)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "519",
        "MCCD Code": "G37",
        "Disease": "Other demyelinating diseases of central nervous system",
        "Category (Sub Group)": "Demyelinating diseases of the central nervous system (G35-G37)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "520",
        "MCCD Code": "G40",
        "Disease": "Epilepsy",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "521",
        "MCCD Code": "G41",
        "Disease": "Status epilepticus",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "522",
        "MCCD Code": "G43",
        "Disease": "Migraine",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "523",
        "MCCD Code": "G44",
        "Disease": "Other headache syndromes",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "524",
        "MCCD Code": "G45",
        "Disease": "Transient cerebral ischaemic attacks and related syndromes",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "525",
        "MCCD Code": "G46",
        "Disease": "Vascular syndromes of brain in cerebrovascular diseases",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "526",
        "MCCD Code": "G47",
        "Disease": "Sleep disorders",
        "Category (Sub Group)": "Episodic and paroxysmal disorders (G40-G47)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "527",
        "MCCD Code": "G50",
        "Disease": "Disorders of trigeminal nerve",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "528",
        "MCCD Code": "G51",
        "Disease": "Facial nerve disorders",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "529",
        "MCCD Code": "G52",
        "Disease": "Disorders of other cranial nerves",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "530",
        "MCCD Code": "G53",
        "Disease": "Cranial nerve disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "531",
        "MCCD Code": "G54",
        "Disease": "Nerve root and plexus disorders",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "532",
        "MCCD Code": "G55",
        "Disease": "Nerve root and plexus compressions in diseases classified elsewhere",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "533",
        "MCCD Code": "G56",
        "Disease": "Mononeuropathies of upper limb",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "534",
        "MCCD Code": "G57",
        "Disease": "Mononeuropathies of lower limb",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "535",
        "MCCD Code": "G58",
        "Disease": "Other mononeuropathies",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "536",
        "MCCD Code": "G59",
        "Disease": "Mononeuropathy in diseases classified elsewhere",
        "Category (Sub Group)": "Nerve, nerve root and plexus disorders (G50-G59)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "537",
        "MCCD Code": "G60",
        "Disease": "Hereditary and idiopathic neuropathy",
        "Category (Sub Group)": "Polyneuropathies and other disorders of the peripheral nervous system (G60-G64)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "538",
        "MCCD Code": "G61",
        "Disease": "Inflammatory polyneuropathy",
        "Category (Sub Group)": "Polyneuropathies and other disorders of the peripheral nervous system (G60-G64)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "539",
        "MCCD Code": "G62",
        "Disease": "Other polyneuropathies",
        "Category (Sub Group)": "Polyneuropathies and other disorders of the peripheral nervous system (G60-G64)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "540",
        "MCCD Code": "G63",
        "Disease": "Polyneuropathy in diseases classified elsewhere",
        "Category (Sub Group)": "Polyneuropathies and other disorders of the peripheral nervous system (G60-G64)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "541",
        "MCCD Code": "G64",
        "Disease": "Other disorders of peripheral nervous system",
        "Category (Sub Group)": "Polyneuropathies and other disorders of the peripheral nervous system (G60-G64)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "542",
        "MCCD Code": "G70",
        "Disease": "Myasthenia gravis and other myoneural disorders",
        "Category (Sub Group)": "Diseases of myoneural junction and muscle (G70-G73)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "543",
        "MCCD Code": "G71",
        "Disease": "Primary disorders of muscles",
        "Category (Sub Group)": "Diseases of myoneural junction and muscle (G70-G73)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "544",
        "MCCD Code": "G72",
        "Disease": "Other myopathies",
        "Category (Sub Group)": "Diseases of myoneural junction and muscle (G70-G73)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "545",
        "MCCD Code": "G73",
        "Disease": "Disorders of myoneural junction and muscle in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of myoneural junction and muscle (G70-G73)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "546",
        "MCCD Code": "G80",
        "Disease": "Infantile cerebral palsy",
        "Category (Sub Group)": "Cerebral palsy and other paralytic syndromes (G80-G83)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "547",
        "MCCD Code": "G81",
        "Disease": "Hemiplegia",
        "Category (Sub Group)": "Cerebral palsy and other paralytic syndromes (G80-G83)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "548",
        "MCCD Code": "G82",
        "Disease": "Paraplegia and tetraplegia",
        "Category (Sub Group)": "Cerebral palsy and other paralytic syndromes (G80-G83)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "549",
        "MCCD Code": "G83",
        "Disease": "Other paralytic syndromes",
        "Category (Sub Group)": "Cerebral palsy and other paralytic syndromes (G80-G83)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "550",
        "MCCD Code": "G90",
        "Disease": "Disorders of autonomic nervous system",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "551",
        "MCCD Code": "G91",
        "Disease": "Hydrocephalus",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "552",
        "MCCD Code": "G92",
        "Disease": "Toxic encephalopathy",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "553",
        "MCCD Code": "G93",
        "Disease": "Other disorders of brain",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "554",
        "MCCD Code": "G94",
        "Disease": "Other disorders of brain in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "555",
        "MCCD Code": "G95",
        "Disease": "Other diseases of spinal cord",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "556",
        "MCCD Code": "G96",
        "Disease": "Other disorders of central nervous system",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "557",
        "MCCD Code": "G97",
        "Disease": "Postprocedural disorders of nervous system, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "558",
        "MCCD Code": "G98",
        "Disease": "Other disorders of nervous system, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "559",
        "MCCD Code": "G99",
        "Disease": "Other disorders of nervous system in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of the nervous system (G90-G99)",
        "Major Group": "Diseases of the nervous system (G00-G99)"
    },
    {
        "S.No.": "560",
        "MCCD Code": "H00",
        "Disease": "Hordeolum and chalazion",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "561",
        "MCCD Code": "H01",
        "Disease": "Other inflammation of eyelid",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "562",
        "MCCD Code": "H02",
        "Disease": "Other disorders of eyelid",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "563",
        "MCCD Code": "H03",
        "Disease": "Disorders of eyelid in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "564",
        "MCCD Code": "H04",
        "Disease": "Disorders of lacrimal system",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "565",
        "MCCD Code": "H05",
        "Disease": "Disorders of orbit",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "566",
        "MCCD Code": "H06",
        "Disease": "Disorders of lacrimal system and orbit in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of eyelid, lacrimal system and orbit (H00-H06)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "567",
        "MCCD Code": "H10",
        "Disease": "Conjunctivitis",
        "Category (Sub Group)": "Disorders of conjunctiva (H10-H13)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "568",
        "MCCD Code": "H11",
        "Disease": "Other disorders of conjunctiva",
        "Category (Sub Group)": "Disorders of conjunctiva (H10-H13)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "569",
        "MCCD Code": "H13",
        "Disease": "Disorders of conjunctiva in diseases classified elsew",
        "Category (Sub Group)": "Disorders of conjunctiva (H10-H13)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "570",
        "MCCD Code": "H15",
        "Disease": "Disorders of sclera",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "571",
        "MCCD Code": "H16",
        "Disease": "Keratitis",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "572",
        "MCCD Code": "H17",
        "Disease": "Corneal scars and opacities",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "573",
        "MCCD Code": "H18",
        "Disease": "Other disorders of cornea",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "574",
        "MCCD Code": "H19",
        "Disease": "Disorders of sclera and cornea in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "575",
        "MCCD Code": "H20",
        "Disease": "Iridocyclitis",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "576",
        "MCCD Code": "H21",
        "Disease": "Other disorders of iris and ciliary body",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "577",
        "MCCD Code": "H22",
        "Disease": "Disorders of iris and ciliary body in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of sclera, cornea, iris and ciliary body (H15-H22)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "578",
        "MCCD Code": "H25",
        "Disease": "Senile cataract",
        "Category (Sub Group)": "Disorders of lens (H25-H28)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "579",
        "MCCD Code": "H26",
        "Disease": "Other cataract",
        "Category (Sub Group)": "Disorders of lens (H25-H28)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "580",
        "MCCD Code": "H27",
        "Disease": "Other disorders of lens",
        "Category (Sub Group)": "Disorders of lens (H25-H28)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "581",
        "MCCD Code": "H28",
        "Disease": "Cataract and other disorders of lens in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of lens (H25-H28)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "582",
        "MCCD Code": "H30",
        "Disease": "Chorioretinal inflammation",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "583",
        "MCCD Code": "H31",
        "Disease": "Other disorders of choroid",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "584",
        "MCCD Code": "H32",
        "Disease": "Chorioretinal disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "585",
        "MCCD Code": "H33",
        "Disease": "Retinal detachments and breaks",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "586",
        "MCCD Code": "H34",
        "Disease": "Retinal vascular occlusions",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "587",
        "MCCD Code": "H35",
        "Disease": "Other retinal disorders",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "588",
        "MCCD Code": "H36",
        "Disease": "Retinal disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of choroid and retina (H30-H36)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "589",
        "MCCD Code": "H40",
        "Disease": "Glaucoma",
        "Category (Sub Group)": "Glaucoma (H40-H42)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "590",
        "MCCD Code": "H42",
        "Disease": "Glaucoma in diseases classified elsewhere",
        "Category (Sub Group)": "Glaucoma (H40-H42)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "591",
        "MCCD Code": "H43",
        "Disease": "Disorders of vitreous body",
        "Category (Sub Group)": "Disorders of vitreous body and globe (H43-H45)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "592",
        "MCCD Code": "H44",
        "Disease": "Disorders of globe",
        "Category (Sub Group)": "Disorders of vitreous body and globe (H43-H45)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "593",
        "MCCD Code": "H45",
        "Disease": "Disorders of vitreous body and globe in diseases classified else where",
        "Category (Sub Group)": "Disorders of vitreous body and globe (H43-H45)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "594",
        "MCCD Code": "H46",
        "Disease": "Optic neuritis",
        "Category (Sub Group)": "Disorders of optic nerve and visual pathways (H46-H48)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "595",
        "MCCD Code": "H47",
        "Disease": "Other disorders of optic [2nd] nerve and visual pathways",
        "Category (Sub Group)": "Disorders of optic nerve and visual pathways (H46-H48)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "596",
        "MCCD Code": "H48",
        "Disease": "Disorders of optic [2nd] nerve and visual pathways in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of optic nerve and visual pathways (H46-H48)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "597",
        "MCCD Code": "H49",
        "Disease": "Paralytic strabismus",
        "Category (Sub Group)": "Disorders of ocular muscles, binocular movement, accommodation and refraction (H49-H52)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "598",
        "MCCD Code": "H50",
        "Disease": "Other strabismus",
        "Category (Sub Group)": "Disorders of ocular muscles, binocular movement, accommodation and refraction (H49-H52)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "599",
        "MCCD Code": "H51",
        "Disease": "Other disorders of binocular movement",
        "Category (Sub Group)": "Disorders of ocular muscles, binocular movement, accommodation and refraction (H49-H52)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "600",
        "MCCD Code": "H52",
        "Disease": "Disorders of refraction and accommodation",
        "Category (Sub Group)": "Disorders of ocular muscles, binocular movement, accommodation and refraction (H49-H52)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "601",
        "MCCD Code": "H53",
        "Disease": "Visual disturbances",
        "Category (Sub Group)": "Visual disturbances and blindness (H53-H54)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "602",
        "MCCD Code": "H54",
        "Disease": "Blindness and low vision",
        "Category (Sub Group)": "Visual disturbances and blindness (H53-H54)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "603",
        "MCCD Code": "H55",
        "Disease": "Nystagmus and other irregular eye movements",
        "Category (Sub Group)": "Other disorders of eye and adnexa (H55-H59)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "604",
        "MCCD Code": "H57",
        "Disease": "Other disorders of eye and adnexa",
        "Category (Sub Group)": "Other disorders of eye and adnexa (H55-H59)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "605",
        "MCCD Code": "H58",
        "Disease": "Other disorders of eye and adnexa in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of eye and adnexa (H55-H59)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "606",
        "MCCD Code": "H59",
        "Disease": "Postprocedural disorders of eye and adnexa, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of eye and adnexa (H55-H59)",
        "Major Group": "Diseases of the eye and adnexa (H00-H59)"
    },
    {
        "S.No.": "607",
        "MCCD Code": "H60",
        "Disease": "Otitis externa",
        "Category (Sub Group)": "Diseases of external ear (H60-H62)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "608",
        "MCCD Code": "H61",
        "Disease": "Other disorders of external ear",
        "Category (Sub Group)": "Diseases of external ear (H60-H62)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "609",
        "MCCD Code": "H62",
        "Disease": "Disorders of external ear in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of external ear (H60-H62)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "610",
        "MCCD Code": "H65",
        "Disease": "Nonsuppurative otitis media",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "611",
        "MCCD Code": "H66",
        "Disease": "Suppurative and unspecified otitis media",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "612",
        "MCCD Code": "H67",
        "Disease": "Otitis media in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "613",
        "MCCD Code": "H68",
        "Disease": "Eustachian salpingitis and obstruction",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "614",
        "MCCD Code": "H69",
        "Disease": "Other disorders of Eustachian tube",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "615",
        "MCCD Code": "H70",
        "Disease": "Mastoiditis and related conditions",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "616",
        "MCCD Code": "H71",
        "Disease": "Cholesteatoma of middle ear",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "617",
        "MCCD Code": "H72",
        "Disease": "Perforation of tympanic membrane",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "618",
        "MCCD Code": "H73",
        "Disease": "Other disorders of tympanic membrane",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "619",
        "MCCD Code": "H74",
        "Disease": "Other disorders of middle ear and mastoid",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "620",
        "MCCD Code": "H75",
        "Disease": "Other disorders of middle ear and mastoid in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of middle ear and mastoid (H65-H75)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "621",
        "MCCD Code": "H80",
        "Disease": "Otosclerosis",
        "Category (Sub Group)": "Diseasesof inner ear (H80-H83)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "622",
        "MCCD Code": "H81",
        "Disease": "Disorders of vestibular function",
        "Category (Sub Group)": "Diseasesof inner ear (H80-H83)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "623",
        "MCCD Code": "H82",
        "Disease": "Vertiginous syndromes in diseases classified elsewhere",
        "Category (Sub Group)": "Diseasesof inner ear (H80-H83)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "624",
        "MCCD Code": "H83",
        "Disease": "Other diseases of inner ear",
        "Category (Sub Group)": "Diseasesof inner ear (H80-H83)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "625",
        "MCCD Code": "H90",
        "Disease": "Conductive and sensorineural hearing loss",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "626",
        "MCCD Code": "H91",
        "Disease": "Other hearing loss",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "627",
        "MCCD Code": "H92",
        "Disease": "Otalgia and effusion of ear",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "628",
        "MCCD Code": "H93",
        "Disease": "Other disorders of ear, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "629",
        "MCCD Code": "H94",
        "Disease": "Other disorders of ear in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "630",
        "MCCD Code": "H95",
        "Disease": "Postprocedural disorders of ear and mastoid process, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of ear (H90-H95)",
        "Major Group": "Diseases of the ear and mastoid process (H60-H95)"
    },
    {
        "S.No.": "631",
        "MCCD Code": "I00",
        "Disease": "Rheumatic fever without mention of heart involvement",
        "Category (Sub Group)": "Acute rheumatic fever (I00-I02)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "632",
        "MCCD Code": "I01",
        "Disease": "Rheumatic fever with heart involvement",
        "Category (Sub Group)": "Acute rheumatic fever (I00-I02)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "633",
        "MCCD Code": "I02",
        "Disease": "Rheumatic chorea",
        "Category (Sub Group)": "Acute rheumatic fever (I00-I02)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "634",
        "MCCD Code": "I05",
        "Disease": "Rheumatic mitral valve diseases",
        "Category (Sub Group)": "Chronic rheumatic heart diseases (I05-I09)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "635",
        "MCCD Code": "I06",
        "Disease": "Rheumatic aortic valve diseases",
        "Category (Sub Group)": "Chronic rheumatic heart diseases (I05-I09)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "636",
        "MCCD Code": "I07",
        "Disease": "Rheumatic tricuspid valve diseases",
        "Category (Sub Group)": "Chronic rheumatic heart diseases (I05-I09)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "637",
        "MCCD Code": "I08",
        "Disease": "Multiple valve diseases",
        "Category (Sub Group)": "Chronic rheumatic heart diseases (I05-I09)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "638",
        "MCCD Code": "I09",
        "Disease": "Other rheumatic heart diseases",
        "Category (Sub Group)": "Chronic rheumatic heart diseases (I05-I09)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "639",
        "MCCD Code": "I10",
        "Disease": "Essential (primary) hypertension",
        "Category (Sub Group)": "Hypertensive diseases (I10-I15)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "640",
        "MCCD Code": "I11",
        "Disease": "Hypertensive heart disease",
        "Category (Sub Group)": "Hypertensive diseases (I10-I15)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "641",
        "MCCD Code": "I12",
        "Disease": "Hypertensive renal disease",
        "Category (Sub Group)": "Hypertensive diseases (I10-I15)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "642",
        "MCCD Code": "I13",
        "Disease": "Hypertensive heart and renal disease",
        "Category (Sub Group)": "Hypertensive diseases (I10-I15)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "643",
        "MCCD Code": "I15",
        "Disease": "Secondary hypertension",
        "Category (Sub Group)": "Hypertensive diseases (I10-I15)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "644",
        "MCCD Code": "I20",
        "Disease": "Angina pectoris",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "645",
        "MCCD Code": "I21",
        "Disease": "Acute myocardial infarction",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "646",
        "MCCD Code": "I22",
        "Disease": "Subsequent myocardial infarction",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "647",
        "MCCD Code": "I23",
        "Disease": "Certain current complications following acute myocardial infarction",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "648",
        "MCCD Code": "I24",
        "Disease": "Other acute ischaemic heart diseases",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "649",
        "MCCD Code": "I25",
        "Disease": "Chronic ischaemic heart disease",
        "Category (Sub Group)": "Ischaemic heart diseases (I20-I25)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "650",
        "MCCD Code": "I26",
        "Disease": "Pulmonary embolism",
        "Category (Sub Group)": "Pulmonary heart disease and diseases of pulmonary circulation (I26-I28)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "651",
        "MCCD Code": "I27",
        "Disease": "Other pulmonary heart diseases",
        "Category (Sub Group)": "Pulmonary heart disease and diseases of pulmonary circulation (I26-I28)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "652",
        "MCCD Code": "I28",
        "Disease": "Other diseases of pulmonary vessels",
        "Category (Sub Group)": "Pulmonary heart disease and diseases of pulmonary circulation (I26-I28)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "653",
        "MCCD Code": "I30",
        "Disease": "Acute pericarditis",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "654",
        "MCCD Code": "I31",
        "Disease": "Other diseases of pericardium",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "655",
        "MCCD Code": "I32",
        "Disease": "Pericarditis in diseases classified elsewhere",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "656",
        "MCCD Code": "I33",
        "Disease": "Acute and subacute endocarditis",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "657",
        "MCCD Code": "I34",
        "Disease": "Nonrheumatic mitral valve disorders",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "658",
        "MCCD Code": "I35",
        "Disease": "Nonrheumatic aortic valve disorders",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "659",
        "MCCD Code": "I36",
        "Disease": "Nonrheumatic tricuspid valve disorders",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "660",
        "MCCD Code": "I37",
        "Disease": "Pulmonary valve disorders",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "661",
        "MCCD Code": "I38",
        "Disease": "Endocarditis, valve unspecified",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "662",
        "MCCD Code": "I39",
        "Disease": "Endocarditis and heart valve disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "663",
        "MCCD Code": "I40",
        "Disease": "Acute myocarditis",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "664",
        "MCCD Code": "I41",
        "Disease": "Myocarditis in diseases classified elsewhere",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "665",
        "MCCD Code": "I42",
        "Disease": "Cardiomyopathy",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "666",
        "MCCD Code": "I43",
        "Disease": "Cardiomyopathy in diseases classified elsewhere",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "667",
        "MCCD Code": "I44",
        "Disease": "Atrioventricular and left bundle-branch block",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "668",
        "MCCD Code": "I45",
        "Disease": "Other conduction disorders",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "669",
        "MCCD Code": "I46",
        "Disease": "Cardiac arrest",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "670",
        "MCCD Code": "I47",
        "Disease": "Paroxysmal tachycardia",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "671",
        "MCCD Code": "I48",
        "Disease": "Atrial fibrillation and flutter",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "672",
        "MCCD Code": "I49",
        "Disease": "Other cardiac arrhythmias",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "673",
        "MCCD Code": "I50",
        "Disease": "Heart failure",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "674",
        "MCCD Code": "I51",
        "Disease": "Complications and ill-defined descriptions of heart disease",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "675",
        "MCCD Code": "I52",
        "Disease": "Other heart disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other forms of heart disease (I30-I52)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "676",
        "MCCD Code": "I60",
        "Disease": "Subarachnoid haemorrhage",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "677",
        "MCCD Code": "I61",
        "Disease": "Intracerebral haemorrhage",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "678",
        "MCCD Code": "I62",
        "Disease": "Other nontraumatic intracranial haemorrhage",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "679",
        "MCCD Code": "I63",
        "Disease": "Cerebral infarction",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "680",
        "MCCD Code": "I64",
        "Disease": "Stroke, not specified as haemorrhage or infarction",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "681",
        "MCCD Code": "I65",
        "Disease": "Occlusion and stenosis of precerebral arteries, not resulting in cerebral infarction",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "682",
        "MCCD Code": "I66",
        "Disease": "Occlusion and stenosis of cerebral arteries, not resulting in cerebral infarction",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "683",
        "MCCD Code": "I67",
        "Disease": "Other cerebrovascular diseases",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "684",
        "MCCD Code": "I68",
        "Disease": "Cerebrovascular disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "685",
        "MCCD Code": "I69",
        "Disease": "Sequelae of cerebrovascular disease",
        "Category (Sub Group)": "Cerebrovascular diseases (I60-I69)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "686",
        "MCCD Code": "I70",
        "Disease": "Atherosclerosis",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "687",
        "MCCD Code": "I71",
        "Disease": "Aortic aneurysm and dissection",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "688",
        "MCCD Code": "I72",
        "Disease": "Other aneurysm",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "689",
        "MCCD Code": "I73",
        "Disease": "Other peripheral vascular diseases",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "690",
        "MCCD Code": "I74",
        "Disease": "Arterial embolism and thrombosis",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "691",
        "MCCD Code": "I77",
        "Disease": "Other disorders of arteries and arterioles",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "692",
        "MCCD Code": "I78",
        "Disease": "Diseases of capillaries",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "693",
        "MCCD Code": "I79",
        "Disease": "Disorders of arteries, arterioles and capillaries in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of arteries, arterioles and capillaries (I70-I79)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "694",
        "MCCD Code": "I80",
        "Disease": "Phlebitis and thrombophlebitis",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "695",
        "MCCD Code": "I81",
        "Disease": "Portal vein thrombosis",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "696",
        "MCCD Code": "I82",
        "Disease": "Other venous embolism and thrombosis",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "697",
        "MCCD Code": "I83",
        "Disease": "Varicose veins of lower extremities",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "698",
        "MCCD Code": "I84",
        "Disease": "Haemorrhoids",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "699",
        "MCCD Code": "I85",
        "Disease": "Oesophageal varices",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "700",
        "MCCD Code": "I86",
        "Disease": "Varicose veins of other sites",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "701",
        "MCCD Code": "I87",
        "Disease": "Other disorders of veins",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "702",
        "MCCD Code": "I88",
        "Disease": "Nonspecific lymphadenitis",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "703",
        "MCCD Code": "I89",
        "Disease": "Other noninfective disorders of lymphatic vessels and lymph nodes",
        "Category (Sub Group)": "Diseases of veins, lymphatic vessels and lymph nodes, not elsewhere classified (I80-I89)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "704",
        "MCCD Code": "I95",
        "Disease": "Hypotension",
        "Category (Sub Group)": "Other and unspecified disorders of the circulatory system (I95-I99)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "705",
        "MCCD Code": "I97",
        "Disease": "Postprocedural disorders of circulatory system, not elsewhere classified",
        "Category (Sub Group)": "Other and unspecified disorders of the circulatory system (I95-I99)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "706",
        "MCCD Code": "I98",
        "Disease": "Other disorders of circulatory system in diseases classified elsewhere",
        "Category (Sub Group)": "Other and unspecified disorders of the circulatory system (I95-I99)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "707",
        "MCCD Code": "I99",
        "Disease": "Other and unspecified disorders of circulatory system",
        "Category (Sub Group)": "Other and unspecified disorders of the circulatory system (I95-I99)",
        "Major Group": "Diseases of the circulatory system(I00-I99)"
    },
    {
        "S.No.": "708",
        "MCCD Code": "J00",
        "Disease": "Acute nasopharyngitis [common cold]",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "709",
        "MCCD Code": "J01",
        "Disease": "Acute sinusitis",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "710",
        "MCCD Code": "J02",
        "Disease": "Acute pharyngitis",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "711",
        "MCCD Code": "J03",
        "Disease": "Acute tonsillitis",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "712",
        "MCCD Code": "J04",
        "Disease": "Acute laryngitis and tracheitis",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "713",
        "MCCD Code": "J05",
        "Disease": "Acute obstructive laryngitis [croup] and epiglottitis",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "714",
        "MCCD Code": "J06",
        "Disease": "Acute upper respiratory infections of multiple and unspecified sites",
        "Category (Sub Group)": "Acute upper respiratory infections (J00-J06)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "715",
        "MCCD Code": "J10",
        "Disease": "Influenza due to identified influenza virus",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "716",
        "MCCD Code": "J11",
        "Disease": "Influenza, virus not identified",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "717",
        "MCCD Code": "J12",
        "Disease": "Viral pneumonia, not elsewhere classified",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "718",
        "MCCD Code": "J13",
        "Disease": "Pneumonia due to Streptococcus pneumoniae",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "719",
        "MCCD Code": "J14",
        "Disease": "Pneumonia due to Haemophilus influenzae",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "720",
        "MCCD Code": "J15",
        "Disease": "Bacterial pneumonia, not elsewhere classified",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "721",
        "MCCD Code": "J16",
        "Disease": "Pneumonia due to other infectious organisms, not elsewhere classified",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "722",
        "MCCD Code": "J17",
        "Disease": "Pneumonia in diseases classified elsewhere",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "723",
        "MCCD Code": "J18",
        "Disease": "Pneumonia, organism unspecified",
        "Category (Sub Group)": "Influenza and pneumonia (J10-J18)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "724",
        "MCCD Code": "J20",
        "Disease": "Acute bronchitis",
        "Category (Sub Group)": "Other acute lower respiratory infections (J20-J22)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "725",
        "MCCD Code": "J21",
        "Disease": "Acute bronchiolitis",
        "Category (Sub Group)": "Other acute lower respiratory infections (J20-J22)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "726",
        "MCCD Code": "J22",
        "Disease": "Unspecified acute lower respiratory infection",
        "Category (Sub Group)": "Other acute lower respiratory infections (J20-J22)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "727",
        "MCCD Code": "J30",
        "Disease": "Vasomotor and allergic rhinitis",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "728",
        "MCCD Code": "J31",
        "Disease": "Chronic rhinitis, nasopharyngitis and pharyngitis",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "729",
        "MCCD Code": "J32",
        "Disease": "Chronic sinusitis",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "730",
        "MCCD Code": "J33",
        "Disease": "Nasal polyp",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "731",
        "MCCD Code": "J34",
        "Disease": "Other disorders of nose and nasal sinuses",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "732",
        "MCCD Code": "J35",
        "Disease": "Chronic diseases of tonsils and adenoids",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "733",
        "MCCD Code": "J36",
        "Disease": "Peritonsillar abscess",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "734",
        "MCCD Code": "J37",
        "Disease": "Chronic laryngitis and laryngotracheitis",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "735",
        "MCCD Code": "J38",
        "Disease": "Diseases of vocal cords and larynx, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "736",
        "MCCD Code": "J39",
        "Disease": "Other diseases of upper respiratory tract",
        "Category (Sub Group)": "Other diseases of upper respiratory tract (J30-J39)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "737",
        "MCCD Code": "J40",
        "Disease": "Bronchitis, not specified as acute or chronic",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "738",
        "MCCD Code": "J41",
        "Disease": "Simple and mucopurulent chronic bronchitis",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "739",
        "MCCD Code": "J42",
        "Disease": "Unspecified chronic bronchitis",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "740",
        "MCCD Code": "J43",
        "Disease": "Emphysema",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "741",
        "MCCD Code": "J44",
        "Disease": "Other chronic obstructive pulmonary disease",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "742",
        "MCCD Code": "J45",
        "Disease": "Asthma",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "743",
        "MCCD Code": "J46",
        "Disease": "Status asthmaticus",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "744",
        "MCCD Code": "J47",
        "Disease": "Bronchiectasis",
        "Category (Sub Group)": "Chronic lower respiratory diseases (J40-J47)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "745",
        "MCCD Code": "J60",
        "Disease": "Coalworker's pneumoconiosis",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "746",
        "MCCD Code": "J61",
        "Disease": "Pneumoconiosis due to asbestos and other mineral fibres",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "747",
        "MCCD Code": "J62",
        "Disease": "Pneumoconiosis due to dust containing silica",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "748",
        "MCCD Code": "J63",
        "Disease": "Pneumoconiosis due to other inorganic dusts",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "749",
        "MCCD Code": "J64",
        "Disease": "Unspecified pneumoconiosis",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "750",
        "MCCD Code": "J65",
        "Disease": "Pneumoconiosis associated with tuberculosis",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "751",
        "MCCD Code": "J66",
        "Disease": "Airway disease due to specific organic dust",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "752",
        "MCCD Code": "J67",
        "Disease": "Hypersensitivity pneumonitis due to organic dust",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "753",
        "MCCD Code": "J68",
        "Disease": "Respiratory conditions due to inhalation of chemicals, gases, fumes and vapours",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "754",
        "MCCD Code": "J69",
        "Disease": "Pneumonitis due to solids and liquids",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "755",
        "MCCD Code": "J70",
        "Disease": "Respiratory conditions due to other external agents",
        "Category (Sub Group)": "Lung diseases due to external agents (J60-J70)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "756",
        "MCCD Code": "J80",
        "Disease": "Adult respiratory distress syndrome",
        "Category (Sub Group)": "Other respiratory diseases principally affecting the interstitium (J80-J84)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "757",
        "MCCD Code": "J81",
        "Disease": "Pulmonary oedema",
        "Category (Sub Group)": "Other respiratory diseases principally affecting the interstitium (J80-J84)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "758",
        "MCCD Code": "J82",
        "Disease": "Pulmonary eosinophilia, not elsewhere classified",
        "Category (Sub Group)": "Other respiratory diseases principally affecting the interstitium (J80-J84)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "759",
        "MCCD Code": "J84",
        "Disease": "Other interstitial pulmonary diseases",
        "Category (Sub Group)": "Other respiratory diseases principally affecting the interstitium (J80-J84)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "760",
        "MCCD Code": "J85",
        "Disease": "Abscess of lung and mediastinum",
        "Category (Sub Group)": "Suppurative and necrotic conditions of lower respiratory tract(J85-J86)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "761",
        "MCCD Code": "J86",
        "Disease": "Pyothorax",
        "Category (Sub Group)": "Suppurative and necrotic conditions of lower respiratory tract(J85-J86)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "762",
        "MCCD Code": "J90",
        "Disease": "Pleural effusion, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of pleura (J90-J94)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "763",
        "MCCD Code": "J91",
        "Disease": "Pleural effusion in conditions classified elsewhere",
        "Category (Sub Group)": "Other diseases of pleura (J90-J94)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "764",
        "MCCD Code": "J92",
        "Disease": "Pleural plaque",
        "Category (Sub Group)": "Other diseases of pleura (J90-J94)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "765",
        "MCCD Code": "J93",
        "Disease": "Pneumothorax",
        "Category (Sub Group)": "Other diseases of pleura (J90-J94)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "766",
        "MCCD Code": "J94",
        "Disease": "Other pleural conditions",
        "Category (Sub Group)": "Other diseases of pleura (J90-J94)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "767",
        "MCCD Code": "J95",
        "Disease": "Postprocedural respiratory disorders, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of the respiratory system (J95-J99)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "768",
        "MCCD Code": "J96",
        "Disease": "Respiratory failure, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of the respiratory system (J95-J99)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "769",
        "MCCD Code": "J98",
        "Disease": "Other respiratory disorders",
        "Category (Sub Group)": "Other diseases of the respiratory system (J95-J99)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "770",
        "MCCD Code": "J99",
        "Disease": "Respiratory disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other diseases of the respiratory system (J95-J99)",
        "Major Group": "Diseases of the respiratory system (J00-J99)"
    },
    {
        "S.No.": "771",
        "MCCD Code": "K00",
        "Disease": "Disorders of tooth development and eruption",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "772",
        "MCCD Code": "K01",
        "Disease": "Embedded and impacted teeth",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "773",
        "MCCD Code": "K02",
        "Disease": "Dental caries",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "774",
        "MCCD Code": "K03",
        "Disease": "Other diseases of hard tissues of teeth",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "775",
        "MCCD Code": "K04",
        "Disease": "Diseases of pulp and periapical tissues",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "776",
        "MCCD Code": "K05",
        "Disease": "Gingivitis and periodontal diseases",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "777",
        "MCCD Code": "K06",
        "Disease": "Other disorders of gingiva and edentulous alveolar ridge",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "778",
        "MCCD Code": "K07",
        "Disease": "Dentofacial anomalies [including malocclusion]",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "779",
        "MCCD Code": "K08",
        "Disease": "Other disorders of teeth and supporting structures",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "780",
        "MCCD Code": "K09",
        "Disease": "Cysts of oral region, not elsewhere classified",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "781",
        "MCCD Code": "K10",
        "Disease": "Other diseases of jaws",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "782",
        "MCCD Code": "K11",
        "Disease": "Diseases of salivary glands",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "783",
        "MCCD Code": "K12",
        "Disease": "Stomatitis and related lesions",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "784",
        "MCCD Code": "K13",
        "Disease": "Other diseases of lip and oral mucosa",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "785",
        "MCCD Code": "K14",
        "Disease": "Diseases of tongue",
        "Category (Sub Group)": "Diseases of oral cavity, salivary glands and jaws (K00-K14)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "786",
        "MCCD Code": "K20",
        "Disease": "Oesophagitis",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "787",
        "MCCD Code": "K21",
        "Disease": "Gastro-oesophageal reflux disease",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "788",
        "MCCD Code": "K22",
        "Disease": "Other diseases of oesophagus",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "789",
        "MCCD Code": "K23",
        "Disease": "Disorders of oesophagus in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "790",
        "MCCD Code": "K25",
        "Disease": "Gastric ulcer",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "791",
        "MCCD Code": "K26",
        "Disease": "Duodenal ulcer",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "792",
        "MCCD Code": "K27",
        "Disease": "Peptic ulcer, site unspecified",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "793",
        "MCCD Code": "K28",
        "Disease": "Gastrojejunal ulcer",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "794",
        "MCCD Code": "K29",
        "Disease": "Gastritis and duodenitis",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "795",
        "MCCD Code": "K30",
        "Disease": "Dyspepsia",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "796",
        "MCCD Code": "K31",
        "Disease": "Other diseases of stomach and duodenum",
        "Category (Sub Group)": "Diseases of oesophagus, stomach and duodenum (K20-K31)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "797",
        "MCCD Code": "K35",
        "Disease": "Acute appendicitis",
        "Category (Sub Group)": "Diseases of appendix (K35-K38)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "798",
        "MCCD Code": "K36",
        "Disease": "Other appendicitis",
        "Category (Sub Group)": "Diseases of appendix (K35-K38)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "799",
        "MCCD Code": "K37",
        "Disease": "Unspecified appendicitis",
        "Category (Sub Group)": "Diseases of appendix (K35-K38)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "800",
        "MCCD Code": "K38",
        "Disease": "Other diseases of appendix",
        "Category (Sub Group)": "Diseases of appendix (K35-K38)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "801",
        "MCCD Code": "K40",
        "Disease": "Inguinal hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "802",
        "MCCD Code": "K41",
        "Disease": "Femoral hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "803",
        "MCCD Code": "K42",
        "Disease": "Umbilical hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "804",
        "MCCD Code": "K43",
        "Disease": "Ventral hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "805",
        "MCCD Code": "K44",
        "Disease": "Diaphragmatic hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "806",
        "MCCD Code": "K45",
        "Disease": "Other abdominal hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "807",
        "MCCD Code": "K46",
        "Disease": "Unspecified abdominal hernia",
        "Category (Sub Group)": "Hernia (K40-K46)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "808",
        "MCCD Code": "K50",
        "Disease": "Crohn's disease [regional enteritis]",
        "Category (Sub Group)": "Noninfective enteritis and colitis (K50-K52)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "809",
        "MCCD Code": "K51",
        "Disease": "Ulcerative colitis",
        "Category (Sub Group)": "Noninfective enteritis and colitis (K50-K52)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "810",
        "MCCD Code": "K52",
        "Disease": "Other noninfective gastroenteritis and colitis",
        "Category (Sub Group)": "Noninfective enteritis and colitis (K50-K52)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "811",
        "MCCD Code": "K55",
        "Disease": "Vascular disorders of intestine",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "812",
        "MCCD Code": "K56",
        "Disease": "Paralytic ileus and intestinal obstruction without hernia",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "813",
        "MCCD Code": "K57",
        "Disease": "Diverticular disease of intestine",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "814",
        "MCCD Code": "K58",
        "Disease": "Irritable bowel syndrome",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "815",
        "MCCD Code": "K59",
        "Disease": "Other functional intestinal disorders",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "816",
        "MCCD Code": "K60",
        "Disease": "Fissure and fistula of anal and rectal regions",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "817",
        "MCCD Code": "K61",
        "Disease": "Abscess of anal and rectal regions",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "818",
        "MCCD Code": "K62",
        "Disease": "Other diseases of anus and rectum",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "819",
        "MCCD Code": "K63",
        "Disease": "Other diseases of intestine",
        "Category (Sub Group)": "Other diseases of intestines (K55-K63)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "820",
        "MCCD Code": "K65",
        "Disease": "Peritonitis",
        "Category (Sub Group)": "Diseases of peritoneum (K65-K67)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "821",
        "MCCD Code": "K66",
        "Disease": "Other disorders of peritoneum",
        "Category (Sub Group)": "Diseases of peritoneum (K65-K67)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "822",
        "MCCD Code": "K67",
        "Disease": "Disorders of peritoneum in infectious diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of peritoneum (K65-K67)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "823",
        "MCCD Code": "K70",
        "Disease": "Alcoholic liver disease",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "824",
        "MCCD Code": "K71",
        "Disease": "Toxic liver disease",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "825",
        "MCCD Code": "K72",
        "Disease": "Hepatic failure, not elsewhere classified",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "826",
        "MCCD Code": "K73",
        "Disease": "Chronic hepatitis, not elsewhere classified",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "827",
        "MCCD Code": "K74",
        "Disease": "Fibrosis and cirrhosis of liver",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "828",
        "MCCD Code": "K75",
        "Disease": "Other inflammatory liver diseases",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "829",
        "MCCD Code": "K76",
        "Disease": "Other diseases of liver",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "830",
        "MCCD Code": "K77",
        "Disease": "Liver disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of liver (K70-K77)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "831",
        "MCCD Code": "K80",
        "Disease": "Cholelithiasis",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "832",
        "MCCD Code": "K81",
        "Disease": "Cholecystitis",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "833",
        "MCCD Code": "K82",
        "Disease": "Other diseases of gallbladder",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "834",
        "MCCD Code": "K83",
        "Disease": "Other diseases of biliary tract",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "835",
        "MCCD Code": "K85",
        "Disease": "Acute pancreatitis",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "836",
        "MCCD Code": "K86",
        "Disease": "Other diseases of pancreas",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "837",
        "MCCD Code": "K87",
        "Disease": "Disorders of gallbladder, biliary tract and pancreas in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of gallbladder, biliary tract and pancreas (K80-K87)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "838",
        "MCCD Code": "K90",
        "Disease": "Intestinal malabsorption",
        "Category (Sub Group)": "Other diseases of the digestive system (K90-K93)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "839",
        "MCCD Code": "K91",
        "Disease": "Postprocedural disorders of digestive system, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of the digestive system (K90-K93)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "840",
        "MCCD Code": "K92",
        "Disease": "Other diseases of digestive system",
        "Category (Sub Group)": "Other diseases of the digestive system (K90-K93)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "841",
        "MCCD Code": "K93",
        "Disease": "Disorders of other digestive organs in diseases classified elsewhere",
        "Category (Sub Group)": "Other diseases of the digestive system (K90-K93)",
        "Major Group": "Diseases of the digestive system (K00-K93)"
    },
    {
        "S.No.": "842",
        "MCCD Code": "L00",
        "Disease": "Staphylococcal scalded skin syndrome",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "843",
        "MCCD Code": "L01",
        "Disease": "Impetigo",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "844",
        "MCCD Code": "L02",
        "Disease": "Cutaneous abscess, furuncle and carbuncle",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "845",
        "MCCD Code": "L03",
        "Disease": "Cellulitis",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "846",
        "MCCD Code": "L04",
        "Disease": "Acute lymphadenitis",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "847",
        "MCCD Code": "L05",
        "Disease": "Pilonidal cyst",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "848",
        "MCCD Code": "L08",
        "Disease": "Other local infections of skin and subcutaneous tissue",
        "Category (Sub Group)": "Infections of the skin and subcutaneous tissue (L00-L08)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "849",
        "MCCD Code": "L10",
        "Disease": "Pemphigus",
        "Category (Sub Group)": "Bullous disorders (L10-L14)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "850",
        "MCCD Code": "L11",
        "Disease": "Other acantholytic disorders",
        "Category (Sub Group)": "Bullous disorders (L10-L14)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "851",
        "MCCD Code": "L12",
        "Disease": "Pemphigoid",
        "Category (Sub Group)": "Bullous disorders (L10-L14)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "852",
        "MCCD Code": "L13",
        "Disease": "Other bullous disorders",
        "Category (Sub Group)": "Bullous disorders (L10-L14)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "853",
        "MCCD Code": "L14",
        "Disease": "Bullous disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Bullous disorders (L10-L14)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "854",
        "MCCD Code": "L20",
        "Disease": "Atopic dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "855",
        "MCCD Code": "L21",
        "Disease": "Seborrhoeic dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "856",
        "MCCD Code": "L22",
        "Disease": "Diaper [napkin] dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "857",
        "MCCD Code": "L23",
        "Disease": "Allergic contact dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "858",
        "MCCD Code": "L24",
        "Disease": "Irritant contact dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "859",
        "MCCD Code": "L25",
        "Disease": "Unspecified contact dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "860",
        "MCCD Code": "L26",
        "Disease": "Exfoliative dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "861",
        "MCCD Code": "L27",
        "Disease": "Dermatitis due to substances taken internally",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "862",
        "MCCD Code": "L28",
        "Disease": "Lichen simplex chronicus and prurigo",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "863",
        "MCCD Code": "L29",
        "Disease": "Pruritus",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "864",
        "MCCD Code": "L30",
        "Disease": "Other dermatitis",
        "Category (Sub Group)": "Dermatitis and eczema (L20-L30)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "865",
        "MCCD Code": "L40",
        "Disease": "Psoriasis",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "866",
        "MCCD Code": "L41",
        "Disease": "Parapsoriasis",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "867",
        "MCCD Code": "L42",
        "Disease": "Pityriasis rosea",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "868",
        "MCCD Code": "L43",
        "Disease": "Lichen planus",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "869",
        "MCCD Code": "L44",
        "Disease": "Other papulosquamous disorders",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "870",
        "MCCD Code": "L45?",
        "Disease": "Papulosquamous disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Papulosquamous disorders (L40-L45)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "871",
        "MCCD Code": "L50",
        "Disease": "Urticaria",
        "Category (Sub Group)": "Urticaria and erythema (L50-L54)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "872",
        "MCCD Code": "L51",
        "Disease": "Erythema multiforme",
        "Category (Sub Group)": "Urticaria and erythema (L50-L54)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "873",
        "MCCD Code": "L52",
        "Disease": "Erythema nodosum",
        "Category (Sub Group)": "Urticaria and erythema (L50-L54)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "874",
        "MCCD Code": "L53",
        "Disease": "Other erythematous conditions",
        "Category (Sub Group)": "Urticaria and erythema (L50-L54)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "875",
        "MCCD Code": "L54",
        "Disease": "Erythema in diseases classified elsewhere",
        "Category (Sub Group)": "Urticaria and erythema (L50-L54)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "876",
        "MCCD Code": "L55",
        "Disease": "Sunburn",
        "Category (Sub Group)": "Radiation-related disorders of the skin and subcutaneous tissue (L55-L59)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "877",
        "MCCD Code": "L56",
        "Disease": "Other acute skin changes due to ultraviolet radiation",
        "Category (Sub Group)": "Radiation-related disorders of the skin and subcutaneous tissue (L55-L59)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "878",
        "MCCD Code": "L57",
        "Disease": "Skin changes due to chronic exposure to nonionizing radiation",
        "Category (Sub Group)": "Radiation-related disorders of the skin and subcutaneous tissue (L55-L59)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "879",
        "MCCD Code": "L58",
        "Disease": "Radiodermatitis",
        "Category (Sub Group)": "Radiation-related disorders of the skin and subcutaneous tissue (L55-L59)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "880",
        "MCCD Code": "L59",
        "Disease": "Other disorders of skin and subcutaneous tissue related to radiation",
        "Category (Sub Group)": "Radiation-related disorders of the skin and subcutaneous tissue (L55-L59)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "881",
        "MCCD Code": "L60",
        "Disease": "Nail disorders",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "882",
        "MCCD Code": "L62",
        "Disease": "Nail disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "883",
        "MCCD Code": "L63",
        "Disease": "Alopecia areata",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "884",
        "MCCD Code": "L64",
        "Disease": "Androgenic alopecia",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "885",
        "MCCD Code": "L65",
        "Disease": "Other nonscarring hair loss",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "886",
        "MCCD Code": "L66",
        "Disease": "Cicatricial alopecia [scarring hair loss]",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "887",
        "MCCD Code": "L67",
        "Disease": "Hair colour and hair shaft abnormalities",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "888",
        "MCCD Code": "L68",
        "Disease": "Hypertrichosis",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "889",
        "MCCD Code": "L70",
        "Disease": "Acne",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "890",
        "MCCD Code": "L71",
        "Disease": "Rosacea",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "891",
        "MCCD Code": "L72",
        "Disease": "Follicular cysts of skin and subcutaneous tissue",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "892",
        "MCCD Code": "L73",
        "Disease": "Other follicular disorders",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "893",
        "MCCD Code": "L74",
        "Disease": "Eccrine sweat disorders",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "894",
        "MCCD Code": "L75",
        "Disease": "Apocrine sweat disorders",
        "Category (Sub Group)": "Disorders of skin appendages (L60-L75)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "895",
        "MCCD Code": "L80",
        "Disease": "Vitiligo",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "896",
        "MCCD Code": "L81",
        "Disease": "Other disorders of pigmentation",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "897",
        "MCCD Code": "L82",
        "Disease": "Seborrhoeic keratosis",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "898",
        "MCCD Code": "L83",
        "Disease": "Acanthosis  nigricans",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "899",
        "MCCD Code": "L84",
        "Disease": "Corns and callosities",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "900",
        "MCCD Code": "L85",
        "Disease": "Other epidermal thickening",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "901",
        "MCCD Code": "L86",
        "Disease": "Keratoderma in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "902",
        "MCCD Code": "L87",
        "Disease": "Transepidermal elimination disorders",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "903",
        "MCCD Code": "L88",
        "Disease": "Pyoderma gangrenosum",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "904",
        "MCCD Code": "L89",
        "Disease": "Decubitus ulcer",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "905",
        "MCCD Code": "L90",
        "Disease": "Atrophic disorders of skin",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "906",
        "MCCD Code": "L91",
        "Disease": "Hypertrophic disorders of skin",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "907",
        "MCCD Code": "L92",
        "Disease": "Granulomatous disorders of skin and subcutaneous tissue",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "908",
        "MCCD Code": "L93",
        "Disease": "Lupus erythematosus",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "909",
        "MCCD Code": "L94",
        "Disease": "Other localized connective tissue disorders",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "910",
        "MCCD Code": "L95",
        "Disease": "Vasculitis limited to skin, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "911",
        "MCCD Code": "L97",
        "Disease": "Ulcer of lower limb, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "912",
        "MCCD Code": "L98",
        "Disease": "Other disorders of skin and subcutaneous tissue, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "913",
        "MCCD Code": "L99",
        "Disease": "Other disorders of skin and subcutaneous tissue in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of the skin and subcutaneous tissue (L80-L99)",
        "Major Group": "Diseases of the skin and subcutaneous tissue (L00-L99)"
    },
    {
        "S.No.": "914",
        "MCCD Code": "M00",
        "Disease": "Pyogenic arthritis",
        "Category (Sub Group)": "Infectious arthropathies (M00-M03)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "915",
        "MCCD Code": "M01",
        "Disease": "Direct infections of joint in infectious and parasitic diseases classified elsewhere",
        "Category (Sub Group)": "Infectious arthropathies (M00-M03)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "916",
        "MCCD Code": "M02",
        "Disease": "Reactive arthropathies",
        "Category (Sub Group)": "Infectious arthropathies (M00-M03)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "917",
        "MCCD Code": "M03",
        "Disease": "Postinfective and reactive arthropathies in diseases classified elsewhere",
        "Category (Sub Group)": "Infectious arthropathies (M00-M03)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "918",
        "MCCD Code": "M05",
        "Disease": "Seropositive rheumatoid arthritis",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "919",
        "MCCD Code": "M06",
        "Disease": "Other rheumatoid arthritis",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "920",
        "MCCD Code": "M07",
        "Disease": "Psoriatic and enteropathic arthropathies",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "921",
        "MCCD Code": "M08",
        "Disease": "Juvenile arthritis",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "922",
        "MCCD Code": "M09",
        "Disease": "Juvenile arthritis in diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "923",
        "MCCD Code": "M10",
        "Disease": "Gout",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "924",
        "MCCD Code": "M11",
        "Disease": "Other  crystal  arthropathies",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "925",
        "MCCD Code": "M12",
        "Disease": "Other specific arthropathies",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "926",
        "MCCD Code": "M13",
        "Disease": "Other arthritis",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "927",
        "MCCD Code": "M14",
        "Disease": "Arthropathies in other diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory polyarthropathies (M05-M14)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "928",
        "MCCD Code": "M15",
        "Disease": "Polyarthrosis",
        "Category (Sub Group)": "Arthrosis (M15-M19)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "929",
        "MCCD Code": "M16",
        "Disease": "Coxarthrosis [arthrosis of hip]",
        "Category (Sub Group)": "Arthrosis (M15-M19)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "930",
        "MCCD Code": "M17",
        "Disease": "Gonarthrosis [arthrosis of knee]",
        "Category (Sub Group)": "Arthrosis (M15-M19)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "931",
        "MCCD Code": "M18",
        "Disease": "Arthrosis of first carpometacarpal joint",
        "Category (Sub Group)": "Arthrosis (M15-M19)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "932",
        "MCCD Code": "M19",
        "Disease": "Other arthrosis",
        "Category (Sub Group)": "Arthrosis (M15-M19)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "933",
        "MCCD Code": "M20",
        "Disease": "Acquired deformities of fingers and toes",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "934",
        "MCCD Code": "M21",
        "Disease": "Other acquired deformities of limbs",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "935",
        "MCCD Code": "M22",
        "Disease": "Disorders of patella",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "936",
        "MCCD Code": "M23",
        "Disease": "Internal derangement of knee",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "937",
        "MCCD Code": "M24",
        "Disease": "Other specific joint derangements",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "938",
        "MCCD Code": "M25",
        "Disease": "Other joint disorders, not elsewhere classified",
        "Category (Sub Group)": "Other joint disorders (M20-M25)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "939",
        "MCCD Code": "M30",
        "Disease": "Polyarteritis nodosa and related conditions",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "940",
        "MCCD Code": "M31",
        "Disease": "Other necrotizing vasculopathies",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "941",
        "MCCD Code": "M32",
        "Disease": "Systemic lupus erythematosus",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "942",
        "MCCD Code": "M33",
        "Disease": "Dermatopolymyositis",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "943",
        "MCCD Code": "M34",
        "Disease": "Systemic sclerosis",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "944",
        "MCCD Code": "M35",
        "Disease": "Other systemic involvement of connective tissue",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "945",
        "MCCD Code": "M36",
        "Disease": "Systemic disorders of connective tissue in diseases classified elsewhere",
        "Category (Sub Group)": "Systemic connective tissue disorders (M30-M36)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "946",
        "MCCD Code": "M40",
        "Disease": "Kyphosis and lordosis",
        "Category (Sub Group)": "Deforming dorsopathies (M40-M43)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "947",
        "MCCD Code": "M41",
        "Disease": "Scoliosis",
        "Category (Sub Group)": "Deforming dorsopathies (M40-M43)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "948",
        "MCCD Code": "M42",
        "Disease": "Spinal osteochondrosis",
        "Category (Sub Group)": "Deforming dorsopathies (M40-M43)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "949",
        "MCCD Code": "M43",
        "Disease": "Other deforming dorsopathies",
        "Category (Sub Group)": "Deforming dorsopathies (M40-M43)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "950",
        "MCCD Code": "M45",
        "Disease": "Ankylosing spondylitis",
        "Category (Sub Group)": "Spondylopathies (M45-M49)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "951",
        "MCCD Code": "M46",
        "Disease": "Other inflammatory spondylopathies",
        "Category (Sub Group)": "Spondylopathies (M45-M49)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "952",
        "MCCD Code": "M47",
        "Disease": "Spondylosis",
        "Category (Sub Group)": "Spondylopathies (M45-M49)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "953",
        "MCCD Code": "M48",
        "Disease": "Other spondylopathies",
        "Category (Sub Group)": "Spondylopathies (M45-M49)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "954",
        "MCCD Code": "M49",
        "Disease": "Spondylopathies in diseases classified elsewhere",
        "Category (Sub Group)": "Spondylopathies (M45-M49)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "955",
        "MCCD Code": "M50",
        "Disease": "Cervical disc disorders",
        "Category (Sub Group)": "Other dorsopathies (M50-M54)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "956",
        "MCCD Code": "M51",
        "Disease": "Other intervertebral disc disorders",
        "Category (Sub Group)": "Other dorsopathies (M50-M54)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "957",
        "MCCD Code": "M53",
        "Disease": "Other dorsopathies, not elsewhere classified",
        "Category (Sub Group)": "Other dorsopathies (M50-M54)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "958",
        "MCCD Code": "M54",
        "Disease": "Dorsalgia",
        "Category (Sub Group)": "Other dorsopathies (M50-M54)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "959",
        "MCCD Code": "M60",
        "Disease": "Myositis",
        "Category (Sub Group)": "Disorders   of   muscles   (M60-M63)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "960",
        "MCCD Code": "M61",
        "Disease": "Calcification and ossification of muscle",
        "Category (Sub Group)": "Disorders   of   muscles   (M60-M63)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "961",
        "MCCD Code": "M62",
        "Disease": "Other disorders of muscle",
        "Category (Sub Group)": "Disorders   of   muscles   (M60-M63)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "962",
        "MCCD Code": "M63",
        "Disease": "Disorders of muscle in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders   of   muscles   (M60-M63)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "963",
        "MCCD Code": "M65",
        "Disease": "Synovitis and tenosynovitis",
        "Category (Sub Group)": "Disorders of synovium and tendon (M65-M68)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "964",
        "MCCD Code": "M66",
        "Disease": "Spontaneous rupture of synovium and tendon",
        "Category (Sub Group)": "Disorders of synovium and tendon (M65-M68)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "965",
        "MCCD Code": "M67",
        "Disease": "Other disorders of synovium and tendon",
        "Category (Sub Group)": "Disorders of synovium and tendon (M65-M68)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "966",
        "MCCD Code": "M68",
        "Disease": "Disorders of synovium and tendon in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of synovium and tendon (M65-M68)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "967",
        "MCCD Code": "M70",
        "Disease": "Soft tissue disorders related to use, overuse and pressure",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "968",
        "MCCD Code": "M71",
        "Disease": "Other bursopathies",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "969",
        "MCCD Code": "M72",
        "Disease": "Fibroblastic disorders",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "970",
        "MCCD Code": "M73",
        "Disease": "Soft tissue disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "971",
        "MCCD Code": "M75",
        "Disease": "Shoulder lesions",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "972",
        "MCCD Code": "M76",
        "Disease": "Enthesopathies of lower limb, excluding foot",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "973",
        "MCCD Code": "M77",
        "Disease": "Other enthesopathies",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "974",
        "MCCD Code": "M79",
        "Disease": "Other soft tissue disorders, not elsewhere classified",
        "Category (Sub Group)": "Other soft tissue disorders (M70-M79)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "975",
        "MCCD Code": "M80",
        "Disease": "Osteoporosis with pathological fracture",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "976",
        "MCCD Code": "M81",
        "Disease": "Osteoporosis without pathological fracture",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "977",
        "MCCD Code": "M82",
        "Disease": "Osteoporosis in diseases classified elsewhere",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "978",
        "MCCD Code": "M83",
        "Disease": "Adult osteomalacia",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "979",
        "MCCD Code": "M84",
        "Disease": "Disorders of continuity of bone",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "980",
        "MCCD Code": "M85",
        "Disease": "Other disorders of bone density and structure",
        "Category (Sub Group)": "Disorders of bone density and structure (M80-M85)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "981",
        "MCCD Code": "M86",
        "Disease": "Osteomyelitis",
        "Category (Sub Group)": "Other osteopathies (M86-M90)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "982",
        "MCCD Code": "M87",
        "Disease": "Osteonecrosis",
        "Category (Sub Group)": "Other osteopathies (M86-M90)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "983",
        "MCCD Code": "M88",
        "Disease": "Paget's disease of bone [osteitis deformans]",
        "Category (Sub Group)": "Other osteopathies (M86-M90)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "984",
        "MCCD Code": "M89",
        "Disease": "Other disorders of bone",
        "Category (Sub Group)": "Other osteopathies (M86-M90)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "985",
        "MCCD Code": "M90?",
        "Disease": "Osteopathies in diseases classified elsewhere",
        "Category (Sub Group)": "Other osteopathies (M86-M90)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "986",
        "MCCD Code": "M91",
        "Disease": "Juvenile osteochondrosis of hip and pelvis",
        "Category (Sub Group)": "Chondro pathies (M91-M94)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "987",
        "MCCD Code": "M92",
        "Disease": "Other juvenile osteochondrosis",
        "Category (Sub Group)": "Chondro pathies (M91-M94)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "988",
        "MCCD Code": "M93",
        "Disease": "Other osteochondropathies",
        "Category (Sub Group)": "Chondro pathies (M91-M94)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "989",
        "MCCD Code": "M94",
        "Disease": "Other disorders of cartilage",
        "Category (Sub Group)": "Chondro pathies (M91-M94)",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "990",
        "MCCD Code": "M95",
        "Disease": "Other acquired deformities of musculoskeletal system and connective tissue",
        "Category (Sub Group)": "Other disorders of the musculoskeletal system and connective",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "991",
        "MCCD Code": "M96",
        "Disease": "Postprocedural musculoskeletal disorders, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the musculoskeletal system and connective",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "992",
        "MCCD Code": "M99",
        "Disease": "Biomechanical lesions, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the musculoskeletal system and connective",
        "Major Group": "Diseases of the musculoskeletal system and connective tissue (M00-M99)"
    },
    {
        "S.No.": "993",
        "MCCD Code": "N00",
        "Disease": "Acute nephritic syndrome",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "994",
        "MCCD Code": "N01",
        "Disease": "Rapidly progressive nephritic syndrome",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "995",
        "MCCD Code": "N02",
        "Disease": "Recurrent and persistent haematuria",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "996",
        "MCCD Code": "N03",
        "Disease": "Chronic nephritic syndrome",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "997",
        "MCCD Code": "N04",
        "Disease": "Nephrotic syndrome",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "998",
        "MCCD Code": "N05",
        "Disease": "Unspecified nephritic syndrome",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "999",
        "MCCD Code": "N06",
        "Disease": "Isolated proteinuria with specified morphological lesion",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1000",
        "MCCD Code": "N07",
        "Disease": "Hereditary nephropathy, not elsewhere classified",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1001",
        "MCCD Code": "N08",
        "Disease": "Glomerular disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Glomerular diseases (N00-N08)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1002",
        "MCCD Code": "N10",
        "Disease": "Acute tubulo-interstitial nephritis",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1003",
        "MCCD Code": "N11",
        "Disease": "Chronic tubulo-interstitial nephritis",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1004",
        "MCCD Code": "N12",
        "Disease": "Tubulo-interstitial nephritis, not specified as acute or chronic",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1005",
        "MCCD Code": "N13",
        "Disease": "Obstructive and reflux uropathy",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1006",
        "MCCD Code": "N14",
        "Disease": "Drug- and heavy-metal-induced tubulo-interstitial and tubular conditions",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1007",
        "MCCD Code": "N15",
        "Disease": "Other renal tubulo-interstitial diseases",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1008",
        "MCCD Code": "N16",
        "Disease": "Renal tubulo-interstitial disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Renal tubulo-interstitial diseases (N10-N16)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1009",
        "MCCD Code": "N17",
        "Disease": "Acute renal failure",
        "Category (Sub Group)": "Renal failure (N17-N19)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1010",
        "MCCD Code": "N18",
        "Disease": "Chronic renal failure",
        "Category (Sub Group)": "Renal failure (N17-N19)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1011",
        "MCCD Code": "N19",
        "Disease": "Unspecified renal failure",
        "Category (Sub Group)": "Renal failure (N17-N19)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1012",
        "MCCD Code": "N20",
        "Disease": "Calculus of kidney and ureter",
        "Category (Sub Group)": "Urolithiasis (N20-N23)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1013",
        "MCCD Code": "N21",
        "Disease": "Calculus of lower urinary tract",
        "Category (Sub Group)": "Urolithiasis (N20-N23)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1014",
        "MCCD Code": "N22",
        "Disease": "Calculus of urinary tract in diseases classified elsewhere",
        "Category (Sub Group)": "Urolithiasis (N20-N23)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1015",
        "MCCD Code": "N23",
        "Disease": "Unspecified renal colic",
        "Category (Sub Group)": "Urolithiasis (N20-N23)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1016",
        "MCCD Code": "N25",
        "Disease": "Disorders resulting from impaired renal tubular function",
        "Category (Sub Group)": "Other disorders of kidney and ureter (N25-N29)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1017",
        "MCCD Code": "N26",
        "Disease": "Unspecified contracted kidney",
        "Category (Sub Group)": "Other disorders of kidney and ureter (N25-N29)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1018",
        "MCCD Code": "N27",
        "Disease": "Small kidney of unknown cause",
        "Category (Sub Group)": "Other disorders of kidney and ureter (N25-N29)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1019",
        "MCCD Code": "N28",
        "Disease": "Other disorders of kidney and ureter, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of kidney and ureter (N25-N29)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1020",
        "MCCD Code": "N29",
        "Disease": "Other disorders of kidney and ureter in diseases classified elsewhere",
        "Category (Sub Group)": "Other disorders of kidney and ureter (N25-N29)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1021",
        "MCCD Code": "N30",
        "Disease": "Cystitis",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1022",
        "MCCD Code": "N31",
        "Disease": "Neuromuscular dysfunction of bladder, not elsewhere classified",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1023",
        "MCCD Code": "N32",
        "Disease": "Other disorders of bladder",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1024",
        "MCCD Code": "N33",
        "Disease": "Bladder disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1025",
        "MCCD Code": "N34",
        "Disease": "Urethritis and urethral syndrome",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1026",
        "MCCD Code": "N35",
        "Disease": "Urethral stricture",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1027",
        "MCCD Code": "N36",
        "Disease": "Other disorders of urethra",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1028",
        "MCCD Code": "N37",
        "Disease": "Urethral disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1029",
        "MCCD Code": "N39",
        "Disease": "Other disorders of urinary system",
        "Category (Sub Group)": "Other diseases of urinary system (N30-N39)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1030",
        "MCCD Code": "N40",
        "Disease": "Hyperplasia of prostate",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1031",
        "MCCD Code": "N41",
        "Disease": "Inflammatory diseases of prostate",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1032",
        "MCCD Code": "N42",
        "Disease": "Other disorders of prostate",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1033",
        "MCCD Code": "N43",
        "Disease": "Hydrocele and spermatocele",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1034",
        "MCCD Code": "N44",
        "Disease": "Torsion of testis",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1035",
        "MCCD Code": "N45",
        "Disease": "Orchitis and epididymitis",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1036",
        "MCCD Code": "N46",
        "Disease": "Male infertility",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1037",
        "MCCD Code": "N47",
        "Disease": "Redundant prepuce, phimosis and paraphimosis",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1038",
        "MCCD Code": "N48",
        "Disease": "Other disorders of penis",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1039",
        "MCCD Code": "N49",
        "Disease": "Inflammatory disorders of male genital organs, not elsewhere classified",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1040",
        "MCCD Code": "N50",
        "Disease": "Other disorders of male genital organs",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1041",
        "MCCD Code": "N51",
        "Disease": "Disorders of male genital organs in diseases classified elsewhere",
        "Category (Sub Group)": "Diseases of male genital organs (N40-N51)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1042",
        "MCCD Code": "N60",
        "Disease": "Benign mammary dysplasia",
        "Category (Sub Group)": "Disorders of breast (N60-N64)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1043",
        "MCCD Code": "N61",
        "Disease": "Inflammatory disorders of breast",
        "Category (Sub Group)": "Disorders of breast (N60-N64)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1044",
        "MCCD Code": "N62",
        "Disease": "Hypertrophy of breast",
        "Category (Sub Group)": "Disorders of breast (N60-N64)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1045",
        "MCCD Code": "N63",
        "Disease": "Unspecified lump in breast",
        "Category (Sub Group)": "Disorders of breast (N60-N64)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1046",
        "MCCD Code": "N64",
        "Disease": "Other disorders of breast",
        "Category (Sub Group)": "Disorders of breast (N60-N64)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1047",
        "MCCD Code": "N70",
        "Disease": "Salpingitis and oophoritis",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1048",
        "MCCD Code": "N71",
        "Disease": "Inflammatory disease of uterus, except cervix",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1049",
        "MCCD Code": "N72",
        "Disease": "Inflammatory disease of cervix uteri",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1050",
        "MCCD Code": "N73",
        "Disease": "Other female pelvic inflammatory diseases",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1051",
        "MCCD Code": "N74",
        "Disease": "Female pelvic inflammatory disorders in diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1052",
        "MCCD Code": "N75",
        "Disease": "Diseases of Bartholin's gland",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1053",
        "MCCD Code": "N76",
        "Disease": "Other inflammation of vagina and vulva",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1054",
        "MCCD Code": "N77",
        "Disease": "Vulvovaginal ulceration and inflammation in diseases classified elsewhere",
        "Category (Sub Group)": "Inflammatory diseases of female pelvic organs (N70-N77)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1055",
        "MCCD Code": "N80",
        "Disease": "Endometriosis",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1056",
        "MCCD Code": "N81",
        "Disease": "Female genital prolapse",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1057",
        "MCCD Code": "N82",
        "Disease": "Fistulae involving female genital tract",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1058",
        "MCCD Code": "N83",
        "Disease": "Noninflammatory disorders of ovary, fallopian tube and broad ligament",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1059",
        "MCCD Code": "N84",
        "Disease": "Polyp of female genital tract",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1060",
        "MCCD Code": "N85",
        "Disease": "Other noninflammatory disorders of uterus, except cervix",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1061",
        "MCCD Code": "N86",
        "Disease": "Erosion and ectropion of cervix uteri",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1062",
        "MCCD Code": "N87",
        "Disease": "Dysplasia of cervix uteri",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1063",
        "MCCD Code": "N88",
        "Disease": "Other noninflammatory disorders of cervix uteri",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1064",
        "MCCD Code": "N89",
        "Disease": "Other noninflammatory disorders of vagina",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1065",
        "MCCD Code": "N90",
        "Disease": "Other noninflammatory disorders of vulva and perineum",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1066",
        "MCCD Code": "N91",
        "Disease": "Absent, scanty and rare menstruation",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1067",
        "MCCD Code": "N92",
        "Disease": "Excessive, frequent and irregular menstruation",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1068",
        "MCCD Code": "N93",
        "Disease": "Other abnormal uterine and vaginal bleeding",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1069",
        "MCCD Code": "N94",
        "Disease": "Pain and other conditions associated with female genital organs and menstrual cycle",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1070",
        "MCCD Code": "N95",
        "Disease": "Menopausal and other perimenopausal disorders",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1071",
        "MCCD Code": "N96",
        "Disease": "Habitual aborter",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1072",
        "MCCD Code": "N97",
        "Disease": "Female infertility",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1073",
        "MCCD Code": "N98",
        "Disease": "Complications associated with artificial fertilization",
        "Category (Sub Group)": "Noninflammatory disorders of female genital tract (N80-N98)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1074",
        "MCCD Code": "N99",
        "Disease": "Postprocedural disorders of genitourinary system, not elsewhere classified",
        "Category (Sub Group)": "Other disorders of the genitourinary system (N99)",
        "Major Group": "Diseases of the genitourinary system (N00-N99)"
    },
    {
        "S.No.": "1075",
        "MCCD Code": "O00",
        "Disease": "Ectopic pregnancy",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1076",
        "MCCD Code": "O01",
        "Disease": "Hydatidiform mole",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1077",
        "MCCD Code": "O02",
        "Disease": "Other abnormal products of conception",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1078",
        "MCCD Code": "O03",
        "Disease": "Spontaneous abortion",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1079",
        "MCCD Code": "O04",
        "Disease": "Medical abortion",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1080",
        "MCCD Code": "O05",
        "Disease": "Other abortion",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1081",
        "MCCD Code": "O06",
        "Disease": "Unspecified abortion",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1082",
        "MCCD Code": "O07",
        "Disease": "Failed attempted abortion",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1083",
        "MCCD Code": "O08",
        "Disease": "Complications following abortion and ectopic and molar pregnancy",
        "Category (Sub Group)": "Pregnancy with abortive outcome (O00-O08)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1084",
        "MCCD Code": "O10",
        "Disease": "Pre-existing hypertension complicating pregnancy, childbirth and the puerperium",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1085",
        "MCCD Code": "O11",
        "Disease": "Pre-existing hypertensive disorder with superimposed proteinuria",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1086",
        "MCCD Code": "O12",
        "Disease": "Gestational [pregnancy-induced] oedema and proteinuria without hypertension",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1087",
        "MCCD Code": "O13",
        "Disease": "Gestational [pregnancy-induced] hypertension without significant proteinuria",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1088",
        "MCCD Code": "O14",
        "Disease": "Gestational [pregnancy-induced] hypertension with significant proteinuria",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1089",
        "MCCD Code": "O15",
        "Disease": "Eclampsia",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1090",
        "MCCD Code": "O16",
        "Disease": "Unspecified maternal hypertension",
        "Category (Sub Group)": "Oedema, proteinuria and hypertensive disorders in pregnancy, childbirth and the puerperium (O10-O16)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1091",
        "MCCD Code": "O20",
        "Disease": "Haemorrhage in early pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1092",
        "MCCD Code": "O21",
        "Disease": "Excessive vomiting in pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1093",
        "MCCD Code": "O22",
        "Disease": "Venous complications in pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1094",
        "MCCD Code": "O23",
        "Disease": "Infections of genitourinary tract in pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1095",
        "MCCD Code": "O24",
        "Disease": "Diabetes mellitus in pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1096",
        "MCCD Code": "O25",
        "Disease": "Malnutrition in pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1097",
        "MCCD Code": "O26",
        "Disease": "Maternal care for other conditions predominantly related to pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1098",
        "MCCD Code": "O28",
        "Disease": "Abnormal findings on antenatal screening of mother",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1099",
        "MCCD Code": "O29",
        "Disease": "Complications of anaesthesia during pregnancy",
        "Category (Sub Group)": "Other maternal disorders predominantly related to pregnancy (O20-O29)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1100",
        "MCCD Code": "O30",
        "Disease": "Multiple gestation",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1101",
        "MCCD Code": "O31",
        "Disease": "Complications specific to multiple gestation",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1102",
        "MCCD Code": "O32",
        "Disease": "Maternal care for known or suspected malpresentation of fetus",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1103",
        "MCCD Code": "O33",
        "Disease": "Maternal care for known or suspected disproportion",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1104",
        "MCCD Code": "O34",
        "Disease": "Maternal care for known or suspected abnormality of pelvic organs",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1105",
        "MCCD Code": "O35",
        "Disease": "Maternal care for known or suspected fetal abnormality and damage",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1106",
        "MCCD Code": "O36",
        "Disease": "Maternal care for other known or suspected fetal problems",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1107",
        "MCCD Code": "O40",
        "Disease": "Polyhydramnios",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1108",
        "MCCD Code": "O41",
        "Disease": "Other disorders of amniotic fluid and membranes",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1109",
        "MCCD Code": "O42",
        "Disease": "Premature rupture of membranes",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1110",
        "MCCD Code": "O43",
        "Disease": "Placental disorders",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1111",
        "MCCD Code": "O44",
        "Disease": "Placenta praevia",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1112",
        "MCCD Code": "O45",
        "Disease": "Premature separation of placenta [abruptio placentae]",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1113",
        "MCCD Code": "O46",
        "Disease": "Antepartum haemorrhage, not elsewhere classified",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1114",
        "MCCD Code": "O47",
        "Disease": "False labour",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1115",
        "MCCD Code": "O48",
        "Disease": "Prolonged pregnancy",
        "Category (Sub Group)": "Maternal care related to the fetus and amniotic cavity and possible delivery problems (O30-O48)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1116",
        "MCCD Code": "O60",
        "Disease": "Preterm delivery",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1117",
        "MCCD Code": "O61",
        "Disease": "Failed induction of labour",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1118",
        "MCCD Code": "O62",
        "Disease": "Abnormalities of forces of labour",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1119",
        "MCCD Code": "O63",
        "Disease": "Long labour",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1120",
        "MCCD Code": "O64",
        "Disease": "Obstructed labour due to malposition and malpresentation of fetus",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1121",
        "MCCD Code": "O65",
        "Disease": "Obstructed labour due to maternal pelvic abnormality",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1122",
        "MCCD Code": "O66",
        "Disease": "Other obstructed labour",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1123",
        "MCCD Code": "O67",
        "Disease": "Labour and delivery complicated by intrapartum haemorrhage, not elsewhere classified",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1124",
        "MCCD Code": "O68",
        "Disease": "Labour and delivery complicated by fetal stress [distress]",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1125",
        "MCCD Code": "O69",
        "Disease": "Labour and delivery complicated by umbilical cord complications",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1126",
        "MCCD Code": "O70",
        "Disease": "Perineal laceration during delivery",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1127",
        "MCCD Code": "O71",
        "Disease": "Other obstetric trauma",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1128",
        "MCCD Code": "O72",
        "Disease": "Postpartum haemorrhage",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1129",
        "MCCD Code": "O73",
        "Disease": "Retained placenta and membranes, without haemorrhage",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1130",
        "MCCD Code": "O74",
        "Disease": "Complications of anaesthesia during labour and delivery",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1131",
        "MCCD Code": "O75",
        "Disease": "Other complications of labour and delivery, not elsewhere classified",
        "Category (Sub Group)": "Complications of labour and delivery (O60-O75)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1132",
        "MCCD Code": "O80",
        "Disease": "Single spontaneous delivery",
        "Category (Sub Group)": "Delivery (O80-O84)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1133",
        "MCCD Code": "O81",
        "Disease": "Single delivery by forceps and vacuum extractor",
        "Category (Sub Group)": "Delivery (O80-O84)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1134",
        "MCCD Code": "O82",
        "Disease": "Single delivery by caesarean section",
        "Category (Sub Group)": "Delivery (O80-O84)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1135",
        "MCCD Code": "O83",
        "Disease": "Other assisted single delivery",
        "Category (Sub Group)": "Delivery (O80-O84)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1136",
        "MCCD Code": "O84",
        "Disease": "Multiple delivery",
        "Category (Sub Group)": "Delivery (O80-O84)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1137",
        "MCCD Code": "O85",
        "Disease": "Puerperal sepsis",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1138",
        "MCCD Code": "O86",
        "Disease": "Other puerperal infections",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1139",
        "MCCD Code": "O87",
        "Disease": "Venous complications in the puerperium",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1140",
        "MCCD Code": "O88",
        "Disease": "Obstetric embolism",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1141",
        "MCCD Code": "O89",
        "Disease": "Complications of anaesthesia during the puerperium",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1142",
        "MCCD Code": "O90",
        "Disease": "Complications of the puerperium, not elsewhere classified",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1143",
        "MCCD Code": "O91",
        "Disease": "Infections of breast associated with childbirth",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1144",
        "MCCD Code": "O92",
        "Disease": "Other disorders of breast and lactation associated with childbirth",
        "Category (Sub Group)": "Complications predominantly related to the puerperium (O85-O92)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1145",
        "MCCD Code": "O95",
        "Disease": "Obstetric death of unspecified cause",
        "Category (Sub Group)": "Other obstetric conditions, not elsewhere classified (O95-O99)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1146",
        "MCCD Code": "O96",
        "Disease": "Death from any obstetric cause occurring more than 42 days but less than one year after delivery",
        "Category (Sub Group)": "Other obstetric conditions, not elsewhere classified (O95-O99)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1147",
        "MCCD Code": "O97",
        "Disease": "Death from sequelae of direct obstetric causes",
        "Category (Sub Group)": "Other obstetric conditions, not elsewhere classified (O95-O99)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1148",
        "MCCD Code": "O98",
        "Disease": "Maternal infectious and parasitic diseases classifiable elsewhere but complicating pregnancy, childbirth and the puerperium",
        "Category (Sub Group)": "Other obstetric conditions, not elsewhere classified (O95-O99)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1149",
        "MCCD Code": "O99",
        "Disease": "Other maternal diseases classifiable elsewhere but complicating pregnancy, childbirth and the puerperium",
        "Category (Sub Group)": "Other obstetric conditions, not elsewhere classified (O95-O99)",
        "Major Group": "Pregnancy, childbirth and the puerperium (O00-O99)"
    },
    {
        "S.No.": "1150",
        "MCCD Code": "P00",
        "Disease": "Fetus and newborn affected by maternal conditions that may be unrelated to present pregnancy",
        "Category (Sub Group)": "Fetus and newborn affected by maternal factors and by complications of pregnancy, labour and delivery (P00-P04)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1151",
        "MCCD Code": "P01",
        "Disease": "Fetus and newborn affected by maternal complications of pregnancy",
        "Category (Sub Group)": "Fetus and newborn affected by maternal factors and by complications of pregnancy, labour and delivery (P00-P04)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1152",
        "MCCD Code": "P02",
        "Disease": "Fetus and newborn affected by complications of placenta, cord and membranes",
        "Category (Sub Group)": "Fetus and newborn affected by maternal factors and by complications of pregnancy, labour and delivery (P00-P04)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1153",
        "MCCD Code": "P03",
        "Disease": "Fetus and newborn affected by other complications of labour and delivery",
        "Category (Sub Group)": "Fetus and newborn affected by maternal factors and by complications of pregnancy, labour and delivery (P00-P04)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1154",
        "MCCD Code": "P04",
        "Disease": "Fetus and newborn affected by noxious influences transmitted via placenta or breast milk",
        "Category (Sub Group)": "Fetus and newborn affected by maternal factors and by complications of pregnancy, labour and delivery (P00-P04)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1155",
        "MCCD Code": "P05",
        "Disease": "Slow fetal growth and fetal malnutrition",
        "Category (Sub Group)": "Disorders related to length of gestation and fetal growth (P05-P08)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1156",
        "MCCD Code": "P07",
        "Disease": "Disorders related to short gestation and low birth weight, not elsewhere classified",
        "Category (Sub Group)": "Disorders related to length of gestation and fetal growth (P05-P08)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1157",
        "MCCD Code": "P08",
        "Disease": "Disorders related to long gestation and high birth weight",
        "Category (Sub Group)": "Disorders related to length of gestation and fetal growth (P05-P08)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1158",
        "MCCD Code": "P10",
        "Disease": "Intracranial laceration and haemorrhage due to birth injury",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1159",
        "MCCD Code": "P11",
        "Disease": "Other birth injuries to central nervous system",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1160",
        "MCCD Code": "P12",
        "Disease": "Birth injury to scalp",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1161",
        "MCCD Code": "P13",
        "Disease": "Birth injury to skeleton",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1162",
        "MCCD Code": "P14",
        "Disease": "Birth injury to peripheral nervous system",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1163",
        "MCCD Code": "P15",
        "Disease": "Other birth injuries",
        "Category (Sub Group)": "Birth trauma (P10-P15)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1164",
        "MCCD Code": "P20",
        "Disease": "Intrauterine hypoxia",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1165",
        "MCCD Code": "P21",
        "Disease": "Birth asphyxia",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1166",
        "MCCD Code": "P22",
        "Disease": "Respiratory distress of newborn",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1167",
        "MCCD Code": "P23",
        "Disease": "Congenital pneumonia",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1168",
        "MCCD Code": "P24",
        "Disease": "Neonatal aspiration syndromes",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1169",
        "MCCD Code": "P25",
        "Disease": "Interstitial emphysema and related conditions originating in the perinatal period",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1170",
        "MCCD Code": "P26",
        "Disease": "Pulmonary haemorrhage originating in the perinatal period",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1171",
        "MCCD Code": "P27",
        "Disease": "Chronic respiratory disease originating in the perinatal period",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1172",
        "MCCD Code": "P28",
        "Disease": "Other respiratory conditions originating in the perinatal period",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1173",
        "MCCD Code": "P29",
        "Disease": "Cardiovascular disorders originating in the perinatal period",
        "Category (Sub Group)": "Respiratory and cardiovascular disorders specific to the perinatal period (P20-P29)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1174",
        "MCCD Code": "P35",
        "Disease": "Congenital viral diseases",
        "Category (Sub Group)": "Infections specific to the perinatal period (P35-P39)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1175",
        "MCCD Code": "P36",
        "Disease": "Bacterial sepsis of newborn",
        "Category (Sub Group)": "Infections specific to the perinatal period (P35-P39)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1176",
        "MCCD Code": "P37",
        "Disease": "Other congenital infectious and parasitic diseases",
        "Category (Sub Group)": "Infections specific to the perinatal period (P35-P39)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1177",
        "MCCD Code": "P38",
        "Disease": "Omphalitis of newborn with or without mild haemorrhage",
        "Category (Sub Group)": "Infections specific to the perinatal period (P35-P39)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1178",
        "MCCD Code": "P39",
        "Disease": "Other infections specific to the perinatal period",
        "Category (Sub Group)": "Infections specific to the perinatal period (P35-P39)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1179",
        "MCCD Code": "P50",
        "Disease": "Fetal blood loss",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1180",
        "MCCD Code": "P51",
        "Disease": "Umbilical haemorrhage of newborn",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1181",
        "MCCD Code": "P52",
        "Disease": "Intracranial nontraumatic haemorrhage of fetus and newborn",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1182",
        "MCCD Code": "P53",
        "Disease": "Haemorrhagic disease of fetus and newborn",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1183",
        "MCCD Code": "P54",
        "Disease": "Other neonatal haemorrhages",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1184",
        "MCCD Code": "P55",
        "Disease": "Haemolytic disease of fetus and newborn",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1185",
        "MCCD Code": "P56",
        "Disease": "Hydrops fetalis due to haemolytic disease",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1186",
        "MCCD Code": "P57",
        "Disease": "Kernicterus",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1187",
        "MCCD Code": "P58",
        "Disease": "Neonatal jaundice due to other excessive haemolysis",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1188",
        "MCCD Code": "P59",
        "Disease": "Neonatal jaundice from other and unspecified causes",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1189",
        "MCCD Code": "P60",
        "Disease": "Disseminated intravascular coagulation of fetus and newborn",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1190",
        "MCCD Code": "P61",
        "Disease": "Other perinatal haematological disorders",
        "Category (Sub Group)": "Haemorrhagic and haematological disorders of fetus and newborn (P50-P61)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1191",
        "MCCD Code": "P70",
        "Disease": "Transitory disorders of carbohydrate metabolism specific to fetus and newborn",
        "Category (Sub Group)": "Transitory endocrine and metabolic disorders specific to fetus and newborn (P70-P74)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1192",
        "MCCD Code": "P71",
        "Disease": "Transitory neonatal disorders of calcium and magnesium metabolism",
        "Category (Sub Group)": "Transitory endocrine and metabolic disorders specific to fetus and newborn (P70-P74)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1193",
        "MCCD Code": "P72",
        "Disease": "Other transitory neonatal endocrine disorders",
        "Category (Sub Group)": "Transitory endocrine and metabolic disorders specific to fetus and newborn (P70-P74)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1194",
        "MCCD Code": "P74",
        "Disease": "Other transitory neonatal electrolyte and metabolic disturbances",
        "Category (Sub Group)": "Transitory endocrine and metabolic disorders specific to fetus and newborn (P70-P74)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1195",
        "MCCD Code": "P75",
        "Disease": "Meconium ileus",
        "Category (Sub Group)": "Digestive system disorders of fetus and newborn (P75-P78)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1196",
        "MCCD Code": "P76",
        "Disease": "Other intestinal obstruction of newborn",
        "Category (Sub Group)": "Digestive system disorders of fetus and newborn (P75-P78)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1197",
        "MCCD Code": "P77",
        "Disease": "Necrotizing enterocolitis of fetus and newborn",
        "Category (Sub Group)": "Digestive system disorders of fetus and newborn (P75-P78)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1198",
        "MCCD Code": "P78",
        "Disease": "Other perinatal digestive system disorders",
        "Category (Sub Group)": "Digestive system disorders of fetus and newborn (P75-P78)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1199",
        "MCCD Code": "P80",
        "Disease": "Hypothermia of newborn",
        "Category (Sub Group)": "Conditions involving the integument and temperature regulation of fetus and newborn (P80-P83)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1200",
        "MCCD Code": "P81",
        "Disease": "Other disturbances of temperature regulation of newborn",
        "Category (Sub Group)": "Conditions involving the integument and temperature regulation of fetus and newborn (P80-P83)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1201",
        "MCCD Code": "P83",
        "Disease": "Other conditions of integument specific to fetus and newborn",
        "Category (Sub Group)": "Conditions involving the integument and temperature regulation of fetus and newborn (P80-P83)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1202",
        "MCCD Code": "P90",
        "Disease": "Convulsions of newborn",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1203",
        "MCCD Code": "P91",
        "Disease": "Other disturbances of cerebral status of newborn",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1204",
        "MCCD Code": "P92",
        "Disease": "Feeding problems of newborn",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1205",
        "MCCD Code": "P93",
        "Disease": "Reactions and intoxications due to drugs administered to fetus and newborn",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1206",
        "MCCD Code": "P94",
        "Disease": "Disorders of muscle tone of newborn",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1207",
        "MCCD Code": "P95",
        "Disease": "Fetal death of unspecified cause",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1208",
        "MCCD Code": "P96",
        "Disease": "Other conditions originating in the perinatal period",
        "Category (Sub Group)": "Other disorders originating in the perinatal period (P90-P96)",
        "Major Group": "Certain conditions originating in the perinatal period (P00-P96)"
    },
    {
        "S.No.": "1209",
        "MCCD Code": "Q00",
        "Disease": "Anencephaly and similar malformations",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1210",
        "MCCD Code": "Q01",
        "Disease": "Encephalocele",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1211",
        "MCCD Code": "Q02",
        "Disease": "Microcephaly",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1212",
        "MCCD Code": "Q03",
        "Disease": "Congenital hydrocephalus",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1213",
        "MCCD Code": "Q04",
        "Disease": "Other congenital malformations of brain",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1214",
        "MCCD Code": "Q05",
        "Disease": "Spina bifida",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1215",
        "MCCD Code": "Q06",
        "Disease": "Other congenital malformations of spinal cord",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1216",
        "MCCD Code": "Q07",
        "Disease": "Other congenital malformations of nervous system",
        "Category (Sub Group)": "Congenital malformations of the nervous system (Q00-Q07)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1217",
        "MCCD Code": "Q10",
        "Disease": "Congenital malformations of eyelid, lacrimal apparatus and orbit",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1218",
        "MCCD Code": "Q11",
        "Disease": "Anophthalmos, microphthalmos and macrophthalmos",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1219",
        "MCCD Code": "Q12",
        "Disease": "Congenital lens malformations",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1220",
        "MCCD Code": "Q13",
        "Disease": "Congenital malformations of anterior segment of eye",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1221",
        "MCCD Code": "Q14",
        "Disease": "Congenital malformations of posterior segment of eye",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1222",
        "MCCD Code": "Q15",
        "Disease": "Other congenital malformations of eye",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1223",
        "MCCD Code": "Q16",
        "Disease": "Congenital malformations of ear causing impairment of hearing",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1224",
        "MCCD Code": "Q17",
        "Disease": "Other congenital malformations of ear",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1225",
        "MCCD Code": "Q18",
        "Disease": "Other congenital malformations of face and neck",
        "Category (Sub Group)": "Congenital malformations of eye, ear, face and neck (Q10-Q18)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1226",
        "MCCD Code": "Q20",
        "Disease": "Congenital malformations of cardiac chambers and connections",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1227",
        "MCCD Code": "Q21",
        "Disease": "Congenital malformations of cardiac septa",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1228",
        "MCCD Code": "Q22",
        "Disease": "Congenital malformations of pulmonary and tricuspid valves",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1229",
        "MCCD Code": "Q23",
        "Disease": "Congenital malformations of aortic and mitral valves",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1230",
        "MCCD Code": "Q24",
        "Disease": "Other congenital malformations of heart",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1231",
        "MCCD Code": "Q25",
        "Disease": "Congenital malformations of great arteries",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1232",
        "MCCD Code": "Q26",
        "Disease": "Congenital malformations of great veins",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1233",
        "MCCD Code": "Q27",
        "Disease": "Other congenital malformations of peripheral vascular system",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1234",
        "MCCD Code": "Q28",
        "Disease": "Other congenital malformations of circulatory system",
        "Category (Sub Group)": "Congenital malformations of the circulatory system (Q20-Q28)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1235",
        "MCCD Code": "Q30",
        "Disease": "Congenital malformations of nose",
        "Category (Sub Group)": "Congenital malformations of the respiratory system (Q30-Q34)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1236",
        "MCCD Code": "Q31",
        "Disease": "Congenital malformations of larynx",
        "Category (Sub Group)": "Congenital malformations of the respiratory system (Q30-Q34)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1237",
        "MCCD Code": "Q32",
        "Disease": "Congenital malformations of trachea and bronchus",
        "Category (Sub Group)": "Congenital malformations of the respiratory system (Q30-Q34)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1238",
        "MCCD Code": "Q33",
        "Disease": "Congenital malformations of lung",
        "Category (Sub Group)": "Congenital malformations of the respiratory system (Q30-Q34)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1239",
        "MCCD Code": "Q34",
        "Disease": "Other congenital malformations of respiratory system",
        "Category (Sub Group)": "Congenital malformations of the respiratory system (Q30-Q34)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1240",
        "MCCD Code": "Q35",
        "Disease": "Cleft palate",
        "Category (Sub Group)": "Cleft lip and cleft palate (Q35-Q37)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1241",
        "MCCD Code": "Q36",
        "Disease": "Cleft lip",
        "Category (Sub Group)": "Cleft lip and cleft palate (Q35-Q37)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1242",
        "MCCD Code": "Q37",
        "Disease": "Cleft palate with cleft lip",
        "Category (Sub Group)": "Cleft lip and cleft palate (Q35-Q37)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1243",
        "MCCD Code": "Q38",
        "Disease": "Other congenital malformations of tongue, mouth and pharynx",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1244",
        "MCCD Code": "Q39",
        "Disease": "Congenital malformations of oesophagus",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1245",
        "MCCD Code": "Q40",
        "Disease": "Other congenital malformations of upper alimentary tract",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1246",
        "MCCD Code": "Q41",
        "Disease": "Congenital absence, atresia and stenosis of small intestine",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1247",
        "MCCD Code": "Q42",
        "Disease": "Congenital absence, atresia and stenosis of large intestine",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1248",
        "MCCD Code": "Q43",
        "Disease": "Other congenital malformations of intestine",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1249",
        "MCCD Code": "Q44",
        "Disease": "Congenital malformations of gallbladder, bile ducts and liver",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1250",
        "MCCD Code": "Q45",
        "Disease": "Other congenital malformations of digestive system",
        "Category (Sub Group)": "Other congenital malformations of the digestive system (Q38-Q45)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1251",
        "MCCD Code": "Q50",
        "Disease": "Congenital malformations of ovaries, fallopian tubes and broad ligaments",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1252",
        "MCCD Code": "Q51",
        "Disease": "Congenital malformations of uterus and cervix",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1253",
        "MCCD Code": "Q52",
        "Disease": "Other congenital malformations of female genitalia",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1254",
        "MCCD Code": "Q53",
        "Disease": "Undescended testicle",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1255",
        "MCCD Code": "Q54",
        "Disease": "Hypospadias",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1256",
        "MCCD Code": "Q55",
        "Disease": "Other congenital malformations of male genital organs",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1257",
        "MCCD Code": "Q56",
        "Disease": "Indeterminate sex and pseudohermaphroditism",
        "Category (Sub Group)": "Congenital malformations of genital organs (Q50-Q56)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1258",
        "MCCD Code": "Q60",
        "Disease": "Renal agenesis and other reduction defects of kidney",
        "Category (Sub Group)": "Congenital malformations of the urinary system (Q60-Q64)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1259",
        "MCCD Code": "Q61",
        "Disease": "Cystic kidney disease",
        "Category (Sub Group)": "Congenital malformations of the urinary system (Q60-Q64)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1260",
        "MCCD Code": "Q62",
        "Disease": "Congenital obstructive defects of renal pelvis and congenital malformations of ureter",
        "Category (Sub Group)": "Congenital malformations of the urinary system (Q60-Q64)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1261",
        "MCCD Code": "Q63",
        "Disease": "Other congenital malformations of kidney",
        "Category (Sub Group)": "Congenital malformations of the urinary system (Q60-Q64)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1262",
        "MCCD Code": "Q64",
        "Disease": "Other congenital malformations of urinary system",
        "Category (Sub Group)": "Congenital malformations of the urinary system (Q60-Q64)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1263",
        "MCCD Code": "Q65",
        "Disease": "Congenital deformities of hip",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1264",
        "MCCD Code": "Q66",
        "Disease": "Congenital deformities of feet",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1265",
        "MCCD Code": "Q67",
        "Disease": "Congenital musculoskeletal deformities of head, face, spine and chest",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1266",
        "MCCD Code": "Q68",
        "Disease": "Other congenital musculoskeletal deformities",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1267",
        "MCCD Code": "Q69",
        "Disease": "Polydactyly",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1268",
        "MCCD Code": "Q70",
        "Disease": "Syndactyly",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1269",
        "MCCD Code": "Q71",
        "Disease": "Reduction defects of upper limb",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1270",
        "MCCD Code": "Q72",
        "Disease": "Reduction defects of lower limb",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1271",
        "MCCD Code": "Q73",
        "Disease": "Reduction defects of unspecified limb",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1272",
        "MCCD Code": "Q74",
        "Disease": "Other congenital malformations of limb(s)",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1273",
        "MCCD Code": "Q75",
        "Disease": "Other congenital malformations of skull and face bones",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1274",
        "MCCD Code": "Q76",
        "Disease": "Congenital malformations of spine and bony thorax",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1275",
        "MCCD Code": "Q77",
        "Disease": "Osteochondrodysplasia with defects of growth of tubular bones and spine",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1276",
        "MCCD Code": "Q78",
        "Disease": "Other osteochondrodysplasias",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1277",
        "MCCD Code": "Q79",
        "Disease": "Congenital malformations of the musculoskeletal system, not elsewhere classified",
        "Category (Sub Group)": "Congenital malformations and deformations of the musculoskeletal system (Q65-Q79)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1278",
        "MCCD Code": "Q80",
        "Disease": "Congenital ichthyosis",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1279",
        "MCCD Code": "Q81",
        "Disease": "Epidermolysis bullosa",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1280",
        "MCCD Code": "Q82",
        "Disease": "Other congenital malformations of skin",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1281",
        "MCCD Code": "Q83",
        "Disease": "Congenital malformations of breast",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1282",
        "MCCD Code": "Q84",
        "Disease": "Other congenital malformations of integument",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1283",
        "MCCD Code": "Q85",
        "Disease": "Phakomatoses, not elsewhere classified",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1284",
        "MCCD Code": "Q86",
        "Disease": "Congenital malformation syndromes due to known exogenous causes, not elsewhere classified",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1285",
        "MCCD Code": "Q87",
        "Disease": "Other specified congenital malformation syndromes affecting multiple systems",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1286",
        "MCCD Code": "Q89",
        "Disease": "Other congenital malformations, not elsewhere classified",
        "Category (Sub Group)": "Other congenital malformations (Q80-Q89)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1287",
        "MCCD Code": "Q90",
        "Disease": "Down's syndrome",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1288",
        "MCCD Code": "Q91",
        "Disease": "Edwards' syndrome and Patau's syndrome",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1289",
        "MCCD Code": "Q92",
        "Disease": "Other trisomies and partial trisomies of the autosomes, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1290",
        "MCCD Code": "Q93",
        "Disease": "Monosomies and deletions from the autosomes, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1291",
        "MCCD Code": "Q95",
        "Disease": "Balanced rearrangements and structural markers, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1292",
        "MCCD Code": "Q96",
        "Disease": "Turner's syndrome",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1293",
        "MCCD Code": "Q97",
        "Disease": "Other sex chromosome abnormalities, female phenotype, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1294",
        "MCCD Code": "Q98",
        "Disease": "Other sex chromosome abnormalities, male phenotype, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1295",
        "MCCD Code": "Q99",
        "Disease": "Other chromosome abnormalities, not elsewhere classified",
        "Category (Sub Group)": "Chromosomal abnormalities, not elsewhere classified (Q90-Q99)",
        "Major Group": "Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"
    },
    {
        "S.No.": "1296",
        "MCCD Code": "R00",
        "Disease": "Abnormalities of heart beat",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1297",
        "MCCD Code": "R01",
        "Disease": "Cardiac murmurs and other cardiac sounds",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1298",
        "MCCD Code": "R02",
        "Disease": "Gangrene, not elsewhere classified",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1299",
        "MCCD Code": "R03",
        "Disease": "Abnormal blood-pressure reading, without diagnosis",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1300",
        "MCCD Code": "R04",
        "Disease": "Haemorrhage from respiratory passages",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1301",
        "MCCD Code": "R05",
        "Disease": "Cough",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1302",
        "MCCD Code": "R06",
        "Disease": "Abnormalities of breathing",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1303",
        "MCCD Code": "R07",
        "Disease": "Pain in throat and chest",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1304",
        "MCCD Code": "R09",
        "Disease": "Other symptoms and signs involving the circulatory and respiratory systems",
        "Category (Sub Group)": "Symptoms and signs involving the circulatory and respiratory systems (R00-R09)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1305",
        "MCCD Code": "R10",
        "Disease": "Abdominal and pelvic pain",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1306",
        "MCCD Code": "R11",
        "Disease": "Nausea and vomiting",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1307",
        "MCCD Code": "R12",
        "Disease": "Heartburn",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1308",
        "MCCD Code": "R13",
        "Disease": "Dysphagia",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1309",
        "MCCD Code": "R14",
        "Disease": "Flatulence and related conditions",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1310",
        "MCCD Code": "R15",
        "Disease": "Faecal incontinence",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1311",
        "MCCD Code": "R16",
        "Disease": "Hepatomegaly and splenomegaly, not elsewhere classified",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1312",
        "MCCD Code": "R17",
        "Disease": "Unspecified jaundice",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1313",
        "MCCD Code": "R18",
        "Disease": "Ascites",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1314",
        "MCCD Code": "R19",
        "Disease": "Other symptoms and signs involving the digestive system and abdomen",
        "Category (Sub Group)": "Symptoms and signs involving the digestive system and abdomen (R10-R19)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1315",
        "MCCD Code": "R20",
        "Disease": "Disturbances of skin sensation",
        "Category (Sub Group)": "Symptoms and signs involving the skin and subcutaneous tissue (R20-R23)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1316",
        "MCCD Code": "R21",
        "Disease": "Rash and other nonspecific skin eruption",
        "Category (Sub Group)": "Symptoms and signs involving the skin and subcutaneous tissue (R20-R23)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1317",
        "MCCD Code": "R22",
        "Disease": "Localized swelling, mass and lump of skin and subcutaneous tissue",
        "Category (Sub Group)": "Symptoms and signs involving the skin and subcutaneous tissue (R20-R23)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1318",
        "MCCD Code": "R23",
        "Disease": "Other skin changes",
        "Category (Sub Group)": "Symptoms and signs involving the skin and subcutaneous tissue (R20-R23)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1319",
        "MCCD Code": "R25",
        "Disease": "Abnormal involuntary movements",
        "Category (Sub Group)": "Symptoms and signs involving the nervous and musculoskeletal systems (R25-R29)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1320",
        "MCCD Code": "R26",
        "Disease": "Abnormalities of gait and mobility",
        "Category (Sub Group)": "Symptoms and signs involving the nervous and musculoskeletal systems (R25-R29)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1321",
        "MCCD Code": "R27",
        "Disease": "Other lack of coordination",
        "Category (Sub Group)": "Symptoms and signs involving the nervous and musculoskeletal systems (R25-R29)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1322",
        "MCCD Code": "R29",
        "Disease": "Other symptoms and signs involving the nervous and musculoskeletal systems",
        "Category (Sub Group)": "Symptoms and signs involving the nervous and musculoskeletal systems (R25-R29)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1323",
        "MCCD Code": "R30",
        "Disease": "Pain associated with micturition",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1324",
        "MCCD Code": "R31",
        "Disease": "Unspecified haematuria",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1325",
        "MCCD Code": "R32",
        "Disease": "Unspecified urinary incontinence",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1326",
        "MCCD Code": "R33",
        "Disease": "Retention  of  urine",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1327",
        "MCCD Code": "R34",
        "Disease": "Anuria and oliguria",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1328",
        "MCCD Code": "R35",
        "Disease": "Polyuria",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1329",
        "MCCD Code": "R36",
        "Disease": "Urethral discharge",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1330",
        "MCCD Code": "R39",
        "Disease": "Other symptoms and signs involving the urinary system",
        "Category (Sub Group)": "Symptoms and signs involving the urinary system (R30-R39)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1331",
        "MCCD Code": "R40",
        "Disease": "Somnolence, stupor and coma",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1332",
        "MCCD Code": "R41",
        "Disease": "Other symptoms and signs involving cognitive functions and awareness",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1333",
        "MCCD Code": "R42",
        "Disease": "Dizziness and giddiness",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1334",
        "MCCD Code": "R43",
        "Disease": "Disturbances of smell and taste",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1335",
        "MCCD Code": "R44",
        "Disease": "Other symptoms and signs involving general sensations and perceptions",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1336",
        "MCCD Code": "R45",
        "Disease": "Symptoms and signs involving emotional state",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1337",
        "MCCD Code": "R46",
        "Disease": "Symptoms and signs involving appearance and behaviour",
        "Category (Sub Group)": "Symptoms and signs involving cognition, perception, emotional state and behaviour (R40-R46)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1338",
        "MCCD Code": "R47",
        "Disease": "Speech disturbances, not elsewhere classified",
        "Category (Sub Group)": "Symptoms and signs involving speech and voice (R47-R49)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1339",
        "MCCD Code": "R48",
        "Disease": "Dyslexia and other symbolic dysfunctions, not elsewhere classified",
        "Category (Sub Group)": "Symptoms and signs involving speech and voice (R47-R49)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1340",
        "MCCD Code": "R49",
        "Disease": "Voice disturbances",
        "Category (Sub Group)": "Symptoms and signs involving speech and voice (R47-R49)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1341",
        "MCCD Code": "R50",
        "Disease": "Fever of unknown origin",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1342",
        "MCCD Code": "R51",
        "Disease": "Headache",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1343",
        "MCCD Code": "R52",
        "Disease": "Pain, not elsewhere classified",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1344",
        "MCCD Code": "R53",
        "Disease": "Malaise and fatigue",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1345",
        "MCCD Code": "R54",
        "Disease": "Senility",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1346",
        "MCCD Code": "R55",
        "Disease": "Syncope and collapse",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1347",
        "MCCD Code": "R56",
        "Disease": "Convulsions, not elsewhere classified",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1348",
        "MCCD Code": "R57",
        "Disease": "Shock, not elsewhere classified",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1349",
        "MCCD Code": "R58",
        "Disease": "Haemorrhage, not elsewhere classified",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1350",
        "MCCD Code": "R59",
        "Disease": "Enlarged lymph nodes",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1351",
        "MCCD Code": "R60",
        "Disease": "Oedema, not elsewhere classified",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1352",
        "MCCD Code": "R61",
        "Disease": "Hyperhidrosis",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1353",
        "MCCD Code": "R62",
        "Disease": "Lack of expected normal physiological development",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1354",
        "MCCD Code": "R63",
        "Disease": "Symptoms and signs concerning food and fluid intake",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1355",
        "MCCD Code": "R64",
        "Disease": "Cachexia",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1356",
        "MCCD Code": "R68",
        "Disease": "Other general symptoms and signs",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1357",
        "MCCD Code": "R69",
        "Disease": "Unknown and unspecified causes of morbidity",
        "Category (Sub Group)": "General symptoms and signs (R50-R69)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1358",
        "MCCD Code": "R70",
        "Disease": "Elevated erythrocyte sedimentation rate and abnormality of plasma viscosity",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1359",
        "MCCD Code": "R71",
        "Disease": "Abnormality of red blood cells",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1360",
        "MCCD Code": "R72",
        "Disease": "Abnormality of white blood cells, not elsewhere classified",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1361",
        "MCCD Code": "R73",
        "Disease": "Elevated blood glucose level",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1362",
        "MCCD Code": "R74",
        "Disease": "Abnormal serum enzyme levels",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1363",
        "MCCD Code": "R75",
        "Disease": "Laboratory evidence of human immunodeficiency virus [HIV]",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1364",
        "MCCD Code": "R76",
        "Disease": "Other abnormal immunological findings in serum",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1365",
        "MCCD Code": "R77",
        "Disease": "Other abnormalities of plasma proteins",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1366",
        "MCCD Code": "R78",
        "Disease": "Findings of drugs and other substances, not normally found in blood",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1367",
        "MCCD Code": "R79",
        "Disease": "Other abnormal findings of blood chemistry",
        "Category (Sub Group)": "Abnormal findings on examination of blood, without diagnosis (R70-R79)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1368",
        "MCCD Code": "R80",
        "Disease": "Isolated proteinuria",
        "Category (Sub Group)": "Abnormal findings on examination of urine, without diagnosis (R80-R82)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1369",
        "MCCD Code": "R81",
        "Disease": "Glycosuria",
        "Category (Sub Group)": "Abnormal findings on examination of urine, without diagnosis (R80-R82)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1370",
        "MCCD Code": "R82",
        "Disease": "Other abnormal findings in urine",
        "Category (Sub Group)": "Abnormal findings on examination of urine, without diagnosis (R80-R82)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1371",
        "MCCD Code": "R83",
        "Disease": "Abnormal findings in cerebrospinal fluid",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1372",
        "MCCD Code": "R84",
        "Disease": "Abnormal findings in specimens from respiratory organs and thorax",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1373",
        "MCCD Code": "R85",
        "Disease": "Abnormal findings in specimens from digestive organs and abdominal cavity",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1374",
        "MCCD Code": "R86",
        "Disease": "Abnormal findings in specimens from male genital organs",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1375",
        "MCCD Code": "R87",
        "Disease": "Abnormal findings in specimens from female genital organs",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1376",
        "MCCD Code": "R89",
        "Disease": "Abnormal findings in specimens from other organs, systems and tissues",
        "Category (Sub Group)": "Abnormal findings on examination of other body fluids, substances and tissues, without diagnosis (R83-R89)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1377",
        "MCCD Code": "R90",
        "Disease": "Abnormal findings on diagnostic imaging of central nervous system",
        "Category (Sub Group)": "Abnormal findings on diagnostic imaging and in function studies, without diagnosis (R90-R94)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1378",
        "MCCD Code": "R91",
        "Disease": "Abnormal findings on diagnostic imaging of lung",
        "Category (Sub Group)": "Abnormal findings on diagnostic imaging and in function studies, without diagnosis (R90-R94)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1379",
        "MCCD Code": "R92",
        "Disease": "Abnormal findings on diagnostic imaging of breast",
        "Category (Sub Group)": "Abnormal findings on diagnostic imaging and in function studies, without diagnosis (R90-R94)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1380",
        "MCCD Code": "R93",
        "Disease": "Abnormal findings on diagnostic imaging of other body structures",
        "Category (Sub Group)": "Abnormal findings on diagnostic imaging and in function studies, without diagnosis (R90-R94)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1381",
        "MCCD Code": "R94",
        "Disease": "Abnormal results of function studies",
        "Category (Sub Group)": "Abnormal findings on diagnostic imaging and in function studies, without diagnosis (R90-R94)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1382",
        "MCCD Code": "R95",
        "Disease": "Sudden infant death syndrome",
        "Category (Sub Group)": "Ill-defined and unknown causes of mortality (R95-R99)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1383",
        "MCCD Code": "R96",
        "Disease": "Other sudden death, cause unknown",
        "Category (Sub Group)": "Ill-defined and unknown causes of mortality (R95-R99)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1384",
        "MCCD Code": "R98",
        "Disease": "Unattended death",
        "Category (Sub Group)": "Ill-defined and unknown causes of mortality (R95-R99)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1385",
        "MCCD Code": "R99",
        "Disease": "Other ill-defined and unspecified causes of mortality",
        "Category (Sub Group)": "Ill-defined and unknown causes of mortality (R95-R99)",
        "Major Group": "Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)"
    },
    {
        "S.No.": "1386",
        "MCCD Code": "S00",
        "Disease": "Superficial injury of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1387",
        "MCCD Code": "S01",
        "Disease": "Open wound of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1388",
        "MCCD Code": "S02",
        "Disease": "Fracture of skull and facial bones",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1389",
        "MCCD Code": "S03",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1390",
        "MCCD Code": "S04",
        "Disease": "Injury of cranial nerves",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1391",
        "MCCD Code": "S05",
        "Disease": "Injury of eye and orbit",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1392",
        "MCCD Code": "S06",
        "Disease": "Intracranial injury",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1393",
        "MCCD Code": "S07",
        "Disease": "Crushing injury of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1394",
        "MCCD Code": "S08",
        "Disease": "Traumatic amputation of part of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1395",
        "MCCD Code": "S09",
        "Disease": "Other and unspecified injuries of head",
        "Category (Sub Group)": "Injuries to the head (S00-S09)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1396",
        "MCCD Code": "S10",
        "Disease": "Superficial injury of neck",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1397",
        "MCCD Code": "S11",
        "Disease": "Open wound of neck",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1398",
        "MCCD Code": "S12",
        "Disease": "Fracture of neck",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1399",
        "MCCD Code": "S13",
        "Disease": "Dislocation, sprain and strain of joints and ligaments at neck level",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1400",
        "MCCD Code": "S14",
        "Disease": "Injury of nerves and spinal cord at neck level",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1401",
        "MCCD Code": "S15",
        "Disease": "Injury of blood vessels at neck level",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1402",
        "MCCD Code": "S16",
        "Disease": "Injury of muscle and tendon at neck level",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1403",
        "MCCD Code": "S17",
        "Disease": "Crushing injury of neck",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1404",
        "MCCD Code": "S18",
        "Disease": "Traumatic amputation at neck level",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1405",
        "MCCD Code": "S19",
        "Disease": "Other and unspecified injuries of neck",
        "Category (Sub Group)": "Injuries to the neck (S10-S19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1406",
        "MCCD Code": "S20",
        "Disease": "Superficial injury of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1407",
        "MCCD Code": "S21",
        "Disease": "Open wound of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1408",
        "MCCD Code": "S22",
        "Disease": "Fracture of rib(s), sternum and thoracic spine",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1409",
        "MCCD Code": "S23",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1410",
        "MCCD Code": "S24",
        "Disease": "Injury of nerves and spinal cord at thorax level",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1411",
        "MCCD Code": "S25",
        "Disease": "Injury of blood vessels of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1412",
        "MCCD Code": "S26",
        "Disease": "Injury of heart",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1413",
        "MCCD Code": "S27",
        "Disease": "Injury of other and unspecified intrathoracic organs",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1414",
        "MCCD Code": "S28",
        "Disease": "Crushing injury of thorax and traumatic amputation of part of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1415",
        "MCCD Code": "S29",
        "Disease": "Other and unspecified injuries of thorax",
        "Category (Sub Group)": "Injuries to the thorax (S20-S29)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1416",
        "MCCD Code": "S30",
        "Disease": "Superficial injury of abdomen, lower back and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1417",
        "MCCD Code": "S31",
        "Disease": "Open wound of abdomen, lower back and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1418",
        "MCCD Code": "S32",
        "Disease": "Fracture of lumbar spine and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1419",
        "MCCD Code": "S33",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of lumbar spine and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1420",
        "MCCD Code": "S34",
        "Disease": "Injury of nerves and lumbar spinal cord at abdomen, lower back and pelvis level",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1421",
        "MCCD Code": "S35",
        "Disease": "Injury of blood vessels at abdomen, lower back and pelvis level",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1422",
        "MCCD Code": "S36",
        "Disease": "Injury of intra-abdominal organs",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1423",
        "MCCD Code": "S37",
        "Disease": "Injury of urinary and pelvic organs",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1424",
        "MCCD Code": "S38",
        "Disease": "Crushing injury and traumatic amputation of part of abdomen, lower back and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1425",
        "MCCD Code": "S39",
        "Disease": "Other and unspecified injuries of abdomen, lower back and pelvis",
        "Category (Sub Group)": "Injuries to the abdomen, lower back, lumbar spine and pelvis (S30-S39)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1426",
        "MCCD Code": "S40",
        "Disease": "Superficial injury of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1427",
        "MCCD Code": "S41",
        "Disease": "Open wound of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1428",
        "MCCD Code": "S42",
        "Disease": "Fracture of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1429",
        "MCCD Code": "S43",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of shoulder girdle",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1430",
        "MCCD Code": "S44",
        "Disease": "Injury of nerves at shoulder and upper arm level",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1431",
        "MCCD Code": "S45",
        "Disease": "Injury of blood vessels at shoulder and upper arm level",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1432",
        "MCCD Code": "S46",
        "Disease": "Injury of muscle and tendon at shoulder and upper arm level",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1433",
        "MCCD Code": "S47",
        "Disease": "Crushing injury of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1434",
        "MCCD Code": "S48",
        "Disease": "Traumatic amputation of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1435",
        "MCCD Code": "S49",
        "Disease": "Other and unspecified injuries of shoulder and upper arm",
        "Category (Sub Group)": "Injuries to the shoulder and upper arm (S40-S49)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1436",
        "MCCD Code": "S50",
        "Disease": "Superficial injury of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1437",
        "MCCD Code": "S51",
        "Disease": "Open wound of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1438",
        "MCCD Code": "S52",
        "Disease": "Fracture of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1439",
        "MCCD Code": "S53",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of elbow",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1440",
        "MCCD Code": "S54",
        "Disease": "Injury of nerves at forearm level",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1441",
        "MCCD Code": "S55",
        "Disease": "Injury of blood vessels at forearm level",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1442",
        "MCCD Code": "S56",
        "Disease": "Injury of muscle and tendon at forearm level",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1443",
        "MCCD Code": "S57",
        "Disease": "Crushing injury of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1444",
        "MCCD Code": "S58",
        "Disease": "Traumatic amputation of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1445",
        "MCCD Code": "S59",
        "Disease": "Other and unspecified injuries of forearm",
        "Category (Sub Group)": "Injuries to the elbow and forearm (S50-S59)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1446",
        "MCCD Code": "S60",
        "Disease": "Superficial injury of wrist and hand",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1447",
        "MCCD Code": "S61",
        "Disease": "Open wound of wrist and hand",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1448",
        "MCCD Code": "S62",
        "Disease": "Fracture at wrist and hand level",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1449",
        "MCCD Code": "S63",
        "Disease": "Dislocation, sprain and strain of joints and ligaments at wrist and hand level",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1450",
        "MCCD Code": "S64",
        "Disease": "Injury of nerves at wrist and hand level",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1451",
        "MCCD Code": "S65",
        "Disease": "Injury of blood vessels at wrist and hand level",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1452",
        "MCCD Code": "S66",
        "Disease": "Injury of muscle and tendon at wrist and hand level",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1453",
        "MCCD Code": "S67",
        "Disease": "Crushing injury of wrist and hand",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1454",
        "MCCD Code": "S68",
        "Disease": "Traumatic amputation of wrist and hand",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1455",
        "MCCD Code": "S69",
        "Disease": "Other and unspecified injuries of wrist and hand",
        "Category (Sub Group)": "Injuries to the wrist and hand (S60-S69)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1456",
        "MCCD Code": "S70",
        "Disease": "Superficial injury of hip and thigh",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1457",
        "MCCD Code": "S71",
        "Disease": "Open wound of hip and thigh",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1458",
        "MCCD Code": "S72",
        "Disease": "Fracture of femur",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1459",
        "MCCD Code": "S73",
        "Disease": "Dislocation, sprain and strain of joint and ligaments of hip",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1460",
        "MCCD Code": "S74",
        "Disease": "Injury of nerves at hip and thigh level",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1461",
        "MCCD Code": "S75",
        "Disease": "Injury of blood vessels at hip and thigh level",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1462",
        "MCCD Code": "S76",
        "Disease": "Injury of muscle and tendon at hip and thigh level",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1463",
        "MCCD Code": "S77",
        "Disease": "Crushing injury of hip and thigh",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1464",
        "MCCD Code": "S78",
        "Disease": "Traumatic amputation of hip and thigh",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1465",
        "MCCD Code": "S79",
        "Disease": "Other and specified injuries of hip and thigh",
        "Category (Sub Group)": "Injuries to the hip and thigh (S70-S79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1466",
        "MCCD Code": "S80",
        "Disease": "Superficial injury of lower leg",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1467",
        "MCCD Code": "S81",
        "Disease": "Open wound of lower leg",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1468",
        "MCCD Code": "S82",
        "Disease": "Fracture of lower leg, including ankle",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1469",
        "MCCD Code": "S83",
        "Disease": "Dislocation, sprain and strain of joints and ligaments of knee",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1470",
        "MCCD Code": "S84",
        "Disease": "Injury of nerves at lower leg level",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1471",
        "MCCD Code": "S85",
        "Disease": "Injury of blood vessels at lower leg level",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1472",
        "MCCD Code": "S86",
        "Disease": "Injury of muscle and tendon at lower leg level",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1473",
        "MCCD Code": "S87",
        "Disease": "Crushing injury of lower leg",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1474",
        "MCCD Code": "S88",
        "Disease": "Traumatic amputation of lower leg",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1475",
        "MCCD Code": "S89",
        "Disease": "Other and unspecified injuries of lower leg",
        "Category (Sub Group)": "Injuries to the knee and lower leg (S80-S89)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1476",
        "MCCD Code": "S90",
        "Disease": "Superficial injury of ankle and foot",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1477",
        "MCCD Code": "S91",
        "Disease": "Open wound of ankle and foot",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1478",
        "MCCD Code": "S92",
        "Disease": "Fracture of foot, except ankle",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1479",
        "MCCD Code": "S93",
        "Disease": "Dislocation, sprain and strain of joints and ligaments at ankle and foot level",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1480",
        "MCCD Code": "S94",
        "Disease": "Injury of nerves at ankle and foot level",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1481",
        "MCCD Code": "S95",
        "Disease": "Injury of blood vessels at ankle and foot level",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1482",
        "MCCD Code": "S96",
        "Disease": "Injury of muscle and tendon at ankle and foot level",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1483",
        "MCCD Code": "S97",
        "Disease": "Crushing injury of ankle and foot",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1484",
        "MCCD Code": "S98",
        "Disease": "Traumatic amputation of ankle and foot",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1485",
        "MCCD Code": "S99",
        "Disease": "Other and unspecified injuries of ankle and foot",
        "Category (Sub Group)": "Injuries to the ankle and foot (S90-S99)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1486",
        "MCCD Code": "T00",
        "Disease": "Superficial injuries involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1487",
        "MCCD Code": "T01",
        "Disease": "Open wounds involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1488",
        "MCCD Code": "T02",
        "Disease": "Fractures involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1489",
        "MCCD Code": "T03",
        "Disease": "Dislocations, sprains and strains involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1490",
        "MCCD Code": "T04",
        "Disease": "Crushing injuries involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1491",
        "MCCD Code": "T05",
        "Disease": "Traumatic amputations involving multiple body regions",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1492",
        "MCCD Code": "T06",
        "Disease": "Other injuries involving multiple body regions, not elsewhere classified",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1493",
        "MCCD Code": "T07",
        "Disease": "Unspecified multiple injuries",
        "Category (Sub Group)": "Injuries involving multiple body regions (T00-T07)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1494",
        "MCCD Code": "T08",
        "Disease": "Fracture of spine, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1495",
        "MCCD Code": "T09",
        "Disease": "Other injuries of spine and trunk, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1496",
        "MCCD Code": "T10",
        "Disease": "Fracture of upper limb, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1497",
        "MCCD Code": "T11",
        "Disease": "Other injuries of upper limb, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1498",
        "MCCD Code": "T12",
        "Disease": "Fracture of lower limb, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1499",
        "MCCD Code": "T13",
        "Disease": "Other injuries of lower limb, level unspecified",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1500",
        "MCCD Code": "T14",
        "Disease": "Injury of unspecified body region",
        "Category (Sub Group)": "Injuries to unspecified part of trunk, limb or body region (T08-T14)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1501",
        "MCCD Code": "T15",
        "Disease": "Foreign body on external eye",
        "Category (Sub Group)": "Effects of foreign body entering through natural orifice (T15-T19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1502",
        "MCCD Code": "T16",
        "Disease": "Foreign body in ear",
        "Category (Sub Group)": "Effects of foreign body entering through natural orifice (T15-T19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1503",
        "MCCD Code": "T17",
        "Disease": "Foreign body in respiratory tract",
        "Category (Sub Group)": "Effects of foreign body entering through natural orifice (T15-T19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1504",
        "MCCD Code": "T18",
        "Disease": "Foreign body in alimentary tract",
        "Category (Sub Group)": "Effects of foreign body entering through natural orifice (T15-T19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1505",
        "MCCD Code": "T19",
        "Disease": "Foreign body in genitourinary tract",
        "Category (Sub Group)": "Effects of foreign body entering through natural orifice (T15-T19)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1506",
        "MCCD Code": "T20",
        "Disease": "Burn and corrosion of head and neck",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1507",
        "MCCD Code": "T21",
        "Disease": "Burn and corrosion of trunk",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1508",
        "MCCD Code": "T22",
        "Disease": "Burn and corrosion of shoulder and upper limb, except wrist and hand",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1509",
        "MCCD Code": "T23",
        "Disease": "Burn and corrosion of wrist and hand",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1510",
        "MCCD Code": "T24",
        "Disease": "Burn and corrosion of hip and lower limb, except ankle and foot",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1511",
        "MCCD Code": "T25",
        "Disease": "Burn and corrosion of ankle and foot",
        "Category (Sub Group)": "Burns and corrosions of external body surface, specified by site (T20-T25)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1512",
        "MCCD Code": "T26",
        "Disease": "Burn and corrosion confined to eye and adnexa",
        "Category (Sub Group)": "Burns and corrosions confined to eye and internal organs (T26-T28)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1513",
        "MCCD Code": "T27",
        "Disease": "Burn and corrosion of respiratory tract",
        "Category (Sub Group)": "Burns and corrosions confined to eye and internal organs (T26-T28)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1514",
        "MCCD Code": "T28",
        "Disease": "Burn and corrosion of other internal organs",
        "Category (Sub Group)": "Burns and corrosions confined to eye and internal organs (T26-T28)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1515",
        "MCCD Code": "T29",
        "Disease": "Burns and corrosions of multiple body regions",
        "Category (Sub Group)": "Burns and corrosions of multiple and unspecified body regions (T29-T32)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1516",
        "MCCD Code": "T30",
        "Disease": "Burn and corrosion, body region unspecified",
        "Category (Sub Group)": "Burns and corrosions of multiple and unspecified body regions (T29-T32)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1517",
        "MCCD Code": "T31",
        "Disease": "Burns classified according to extent of body surface involved",
        "Category (Sub Group)": "Burns and corrosions of multiple and unspecified body regions (T29-T32)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1518",
        "MCCD Code": "T32",
        "Disease": "Corrosions classified according to extent of body surface involved",
        "Category (Sub Group)": "Burns and corrosions of multiple and unspecified body regions (T29-T32)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1519",
        "MCCD Code": "T33",
        "Disease": "Superficial frostbite",
        "Category (Sub Group)": "Frost bite (T33-T35)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1520",
        "MCCD Code": "T34",
        "Disease": "Frostbite with tissue necrosis",
        "Category (Sub Group)": "Frost bite (T33-T35)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1521",
        "MCCD Code": "T35",
        "Disease": "Frostbite involving multiple body regions and unspecified frostbite",
        "Category (Sub Group)": "Frost bite (T33-T35)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1522",
        "MCCD Code": "T36",
        "Disease": "Poisoning by systemic antibiotics",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1523",
        "MCCD Code": "T37",
        "Disease": "Poisoning by other systemic anti-infectives and antiparasitics",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1524",
        "MCCD Code": "T38",
        "Disease": "Poisoning by hormones and their synthetic substitutes and antagonists, not elsewhere classified",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1525",
        "MCCD Code": "T39",
        "Disease": "Poisoning by nonopioid analgesics, antipyretics and antirheumatics",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1526",
        "MCCD Code": "T40",
        "Disease": "Poisoning by narcotics and psychodysleptics [hallucinogens]",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1527",
        "MCCD Code": "T41",
        "Disease": "Poisoning by anaesthetics and therapeutic gases",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1528",
        "MCCD Code": "T42",
        "Disease": "Poisoning by antiepileptic, sedative-hypnotic and antiparkinsonism drugs",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1529",
        "MCCD Code": "T43",
        "Disease": "Poisoning by psychotropic drugs, not elsewhere classified",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1530",
        "MCCD Code": "T44",
        "Disease": "Poisoning by drugs primarily affecting the autonomic nervous system",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1531",
        "MCCD Code": "T45",
        "Disease": "Poisoning by primarily systemic and haematological agents, not elsewhere classified",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1532",
        "MCCD Code": "T46",
        "Disease": "Poisoning by agents primarily affecting the cardiovascular system",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1533",
        "MCCD Code": "T47",
        "Disease": "Poisoning by agents primarily affecting the gastrointestinal system",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1534",
        "MCCD Code": "T48",
        "Disease": "Poisoning by agents primarily acting on smooth and skeletal muscles and the respiratory system",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1535",
        "MCCD Code": "T49",
        "Disease": "Poisoning by topical agents primarily affecting skin and mucous membrane and by  ophthalmological, otorhinolaryngological and dental drugs",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1536",
        "MCCD Code": "T50",
        "Disease": "Poisoning by diuretics and other and unspecified drugs, medicaments and biological  substances",
        "Category (Sub Group)": "Poisoning by drugs, medicaments and biological substances (T36-T50)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1537",
        "MCCD Code": "T51",
        "Disease": "Toxic effect of alcohol",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1538",
        "MCCD Code": "T52",
        "Disease": "Toxic effect of organic solvents",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1539",
        "MCCD Code": "T53",
        "Disease": "Toxic effect of halogen derivatives of aliphatic and aromatic hydrocarbons",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1540",
        "MCCD Code": "T54",
        "Disease": "Toxic effect of corrosive substances",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1541",
        "MCCD Code": "T55",
        "Disease": "Toxic effect of soaps and detergents",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1542",
        "MCCD Code": "T56",
        "Disease": "Toxic effect of metals",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1543",
        "MCCD Code": "T57",
        "Disease": "Toxic effect of other inorganic substances",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1544",
        "MCCD Code": "T58",
        "Disease": "Toxic effect of carbon monoxide",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1545",
        "MCCD Code": "T59",
        "Disease": "Toxic effect of other gases, fumes and vapours",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1546",
        "MCCD Code": "T60",
        "Disease": "Toxic effect of pesticides",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1547",
        "MCCD Code": "T61",
        "Disease": "Toxic effect of noxious substances eaten as seafood",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1548",
        "MCCD Code": "T62",
        "Disease": "Toxic effect of other noxious substances eaten as food",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1549",
        "MCCD Code": "T63",
        "Disease": "Toxic effect of contact with venomous animals",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1550",
        "MCCD Code": "T64",
        "Disease": "Toxic effect of aflatoxin and other mycotoxin food contaminants",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1551",
        "MCCD Code": "T65",
        "Disease": "Toxic effect of other and unspecified substances",
        "Category (Sub Group)": "Toxic effects of substances chiefly nonmedicinal as to source (T51-T65)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1552",
        "MCCD Code": "T66",
        "Disease": "Unspecified effects of radiation",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1553",
        "MCCD Code": "T67",
        "Disease": "Effects of heat and light",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1554",
        "MCCD Code": "T68",
        "Disease": "Hypothermia",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1555",
        "MCCD Code": "T69",
        "Disease": "Other effects of reduced temperature",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1556",
        "MCCD Code": "T70",
        "Disease": "Effects of air pressure and water pressure",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1557",
        "MCCD Code": "T71",
        "Disease": "Asphyxiation",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1558",
        "MCCD Code": "T73",
        "Disease": "Effects of other deprivation",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1559",
        "MCCD Code": "T74",
        "Disease": "Maltreatment syndromes",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1560",
        "MCCD Code": "T75",
        "Disease": "Effects of other external causes",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1561",
        "MCCD Code": "T78",
        "Disease": "Adverse effects, not elsewhere classified",
        "Category (Sub Group)": "Other and unspecified effects of external causes (T66-T78)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1562",
        "MCCD Code": "T79",
        "Disease": "Certain early complications of trauma, not elsewhere classified",
        "Category (Sub Group)": "Certain early complications of trauma (T79)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1563",
        "MCCD Code": "T80",
        "Disease": "Complications following infusion, transfusion and therapeutic injection",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1564",
        "MCCD Code": "T81",
        "Disease": "Complications of procedures, not elsewhere classified",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1565",
        "MCCD Code": "T82",
        "Disease": "Complications of cardiac and vascular prosthetic devices, implants and grafts",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1566",
        "MCCD Code": "T83",
        "Disease": "Complications of genitourinary prosthetic devices, implants and grafts",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1567",
        "MCCD Code": "T84",
        "Disease": "Complications of internal orthopaedic prosthetic devices, implants and grafts",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1568",
        "MCCD Code": "T85",
        "Disease": "Complications of other internal prosthetic devices, implants and grafts",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1569",
        "MCCD Code": "T86",
        "Disease": "Failure and rejection of transplanted organs and tissues",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1570",
        "MCCD Code": "T87",
        "Disease": "Complications peculiar to reattachment and amputation",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1571",
        "MCCD Code": "T88",
        "Disease": "Other complications of surgical and medical care, not elsewhere classified",
        "Category (Sub Group)": "Complications of surgical and medical care, not elsewhere classified (T80-T88)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1572",
        "MCCD Code": "T90",
        "Disease": "Sequelae of injuries of head",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1573",
        "MCCD Code": "T91",
        "Disease": "Sequelae of injuries of neck and trunk",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1574",
        "MCCD Code": "T92",
        "Disease": "Sequelae of injuries of upper limb",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1575",
        "MCCD Code": "T93",
        "Disease": "Sequelae of injuries of lower limb",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1576",
        "MCCD Code": "T94",
        "Disease": "Sequelae of injuries involving multiple and unspecified body regions",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1577",
        "MCCD Code": "T95",
        "Disease": "Sequelae of burns, corrosions and frostbite",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1578",
        "MCCD Code": "T96",
        "Disease": "Sequelae of poisoning by drugs, medicaments and biological substances",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1579",
        "MCCD Code": "T97",
        "Disease": "Sequelae of toxic effects of substances chiefly nonmedicinal as to source",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1580",
        "MCCD Code": "T98",
        "Disease": "Sequelae of other and unspecified effects of external causes",
        "Category (Sub Group)": "Sequelae of injuries, of poisoning and of other consequences of external causes (T90-T98)",
        "Major Group": "Injury, poisoning and certain other consequences of external causes (S00-T98)"
    },
    {
        "S.No.": "1581",
        "MCCD Code": "U04",
        "Disease": "Severe acute respiratory syndrome [SARS]",
        "Category (Sub Group)": "Provisional assignment of new diseases of uncertain etiology (U00-U49)",
        "Major Group": "Codes for special purposes (U00-U99)"
    },
    {
        "S.No.": "1582",
        "MCCD Code": "U07.1",
        "Disease": "Virus Identified",
        "Category (Sub Group)": "Provisional assignment of new diseases of uncertain etiology (U00-U49)",
        "Major Group": "Codes for special purposes (U00-U99)"
    },
    {
        "S.No.": "1583",
        "MCCD Code": "V01",
        "Disease": "Pedestrian injured in collision with pedal cycle",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1584",
        "MCCD Code": "V02",
        "Disease": "Pedestrian injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1585",
        "MCCD Code": "V03",
        "Disease": "Pedestrian injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1586",
        "MCCD Code": "V04",
        "Disease": "Pedestrian injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1587",
        "MCCD Code": "V05",
        "Disease": "Pedestrian injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1588",
        "MCCD Code": "V06",
        "Disease": "Pedestrian injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1589",
        "MCCD Code": "V09",
        "Disease": "Pedestrian injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Pedestrian injured in transport accident (V01-V09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1590",
        "MCCD Code": "V10",
        "Disease": "Pedal cyclist injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1591",
        "MCCD Code": "V11",
        "Disease": "Pedal cyclist injured in collision with other pedal cycle",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1592",
        "MCCD Code": "V12",
        "Disease": "Pedal cyclist injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1593",
        "MCCD Code": "V13",
        "Disease": "Pedal cyclist injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1594",
        "MCCD Code": "V14",
        "Disease": "Pedal cyclist injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1595",
        "MCCD Code": "V15",
        "Disease": "Pedal cyclist injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1596",
        "MCCD Code": "V16",
        "Disease": "Pedal cyclist injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1597",
        "MCCD Code": "V17",
        "Disease": "Pedal cyclist injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1598",
        "MCCD Code": "V18",
        "Disease": "Pedal cyclist injured in noncollision transport accident",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1599",
        "MCCD Code": "V19",
        "Disease": "Pedal cyclist injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Pedal cyclist injured in transport accident (V10-V19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1600",
        "MCCD Code": "V20",
        "Disease": "Motorcycle rider injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1601",
        "MCCD Code": "V21",
        "Disease": "Motorcycle rider injured in collision with pedal cycle",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1602",
        "MCCD Code": "V22",
        "Disease": "Motorcycle rider injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1603",
        "MCCD Code": "V23",
        "Disease": "Motorcycle rider injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1604",
        "MCCD Code": "V24",
        "Disease": "Motorcycle rider injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1605",
        "MCCD Code": "V25",
        "Disease": "Motorcycle rider injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1606",
        "MCCD Code": "V26",
        "Disease": "Motorcycle rider injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1607",
        "MCCD Code": "V27",
        "Disease": "Motorcycle rider injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1608",
        "MCCD Code": "V28",
        "Disease": "Motorcycle rider injured in noncollision transport accident",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1609",
        "MCCD Code": "V29",
        "Disease": "Motorcycle rider injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Motorcycle rider injured in transport accident (V20-V29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1610",
        "MCCD Code": "V30",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1611",
        "MCCD Code": "V31",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with pedal cycle",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1612",
        "MCCD Code": "V32",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1613",
        "MCCD Code": "V33",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1614",
        "MCCD Code": "V34",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with heavy transport vehicle",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1615",
        "MCCD Code": "V35",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with railway train or railway   vehicle",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1616",
        "MCCD Code": "V36",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1617",
        "MCCD Code": "V37",
        "Disease": "Occupant of three-wheeled motor vehicle injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1618",
        "MCCD Code": "V38",
        "Disease": "Occupant of three-wheeled motor vehicle injured in noncollision transport accident",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1619",
        "MCCD Code": "V39",
        "Disease": "Occupant of three-wheeled motor vehicle injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Occupant of three-wheeled motor vehicle injured in transport accident (V30-V39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1620",
        "MCCD Code": "V40",
        "Disease": "Car occupant injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1621",
        "MCCD Code": "V41",
        "Disease": "Car occupant injured in collision with pedal cycle",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1622",
        "MCCD Code": "V42",
        "Disease": "Car occupant injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1623",
        "MCCD Code": "V43",
        "Disease": "Car occupant injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1624",
        "MCCD Code": "V44",
        "Disease": "Car occupant injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1625",
        "MCCD Code": "V45",
        "Disease": "Car occupant injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1626",
        "MCCD Code": "V46",
        "Disease": "Car occupant injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1627",
        "MCCD Code": "V47",
        "Disease": "Car occupant injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1628",
        "MCCD Code": "V48",
        "Disease": "Car occupant injured in noncollision transport accident",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1629",
        "MCCD Code": "V49",
        "Disease": "Car occupant injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Car occupant injured in transport accident (V40-V49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1630",
        "MCCD Code": "V50",
        "Disease": "Occupant of pick-up truck or van injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1631",
        "MCCD Code": "V51",
        "Disease": "Occupant of pick-up truck or van injured in collision with pedal cycle",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1632",
        "MCCD Code": "V52",
        "Disease": "Occupant of pick-up truck or van injured in collision with two- or three-wh",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1633",
        "MCCD Code": "V53",
        "Disease": "Occupant of pick-up truck or van injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1634",
        "MCCD Code": "V54",
        "Disease": "Occupant of pick-up truck or van injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1635",
        "MCCD Code": "V55",
        "Disease": "Occupant of pick-up truck or van injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1636",
        "MCCD Code": "V56",
        "Disease": "Occupant of pick-up truck or van injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1637",
        "MCCD Code": "V57",
        "Disease": "Occupant of pick-up truck or van injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1638",
        "MCCD Code": "V58",
        "Disease": "Occupant of pick-up truck or van injured in noncollision transport accident",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1639",
        "MCCD Code": "V59",
        "Disease": "Occupant of pick-up truck or van injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Occupant of pick-up truck or van injured in transport accident (V50-V59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1640",
        "MCCD Code": "V60",
        "Disease": "Occupant of heavy transport vehicle injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1641",
        "MCCD Code": "V61",
        "Disease": "Occupant of heavy transport vehicle injured in collision with pedal cycle",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1642",
        "MCCD Code": "V62",
        "Disease": "Occupant of heavy transport vehicle injured in collision with two- or three wheeled motor vehicle",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1643",
        "MCCD Code": "V63",
        "Disease": "Occupant of heavy transport vehicle injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1644",
        "MCCD Code": "V64",
        "Disease": "Occupant of heavy transport vehicle injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1645",
        "MCCD Code": "V65",
        "Disease": "Occupant of heavy transport vehicle injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1646",
        "MCCD Code": "V66",
        "Disease": "Occupant of heavy transport vehicle injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1647",
        "MCCD Code": "V67",
        "Disease": "Occupant of heavy transport vehicle injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1648",
        "MCCD Code": "V68",
        "Disease": "Occupant of heavy transport vehicle injured in noncollision transport accident",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1649",
        "MCCD Code": "V69",
        "Disease": "Occupant of heavy transport vehicle injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Occupant of heavy transport vehicle injured in transport accident (V60-V69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1650",
        "MCCD Code": "V70",
        "Disease": "Bus occupant injured in collision with pedestrian or animal",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1651",
        "MCCD Code": "V71",
        "Disease": "Bus occupant injured in collision with pedal cycle",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1652",
        "MCCD Code": "V72",
        "Disease": "Bus occupant injured in collision with two- or three-wheeled motor vehicle",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1653",
        "MCCD Code": "V73",
        "Disease": "Bus occupant injured in collision with car, pick-up truck or van",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1654",
        "MCCD Code": "V74",
        "Disease": "Bus occupant injured in collision with heavy transport vehicle or bus",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1655",
        "MCCD Code": "V75",
        "Disease": "Bus occupant injured in collision with railway train or railway vehicle",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1656",
        "MCCD Code": "V76",
        "Disease": "Bus occupant injured in collision with other nonmotor vehicle",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1657",
        "MCCD Code": "V77",
        "Disease": "Bus occupant injured in collision with fixed or stationary object",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1658",
        "MCCD Code": "V78",
        "Disease": "Bus occupant injured in noncollision transport accident",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1659",
        "MCCD Code": "V79",
        "Disease": "Bus occupant injured in other and unspecified transport accidents",
        "Category (Sub Group)": "Bus occupant injured in transport accident (V70-V79)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1660",
        "MCCD Code": "V80",
        "Disease": "Animal-rider or occupant of animal-drawn vehicle injured in transport accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1661",
        "MCCD Code": "V81",
        "Disease": "Occupant of railway train or railway vehicle injured in transport accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1662",
        "MCCD Code": "V82",
        "Disease": "Occupant of streetcar injured in transport accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1663",
        "MCCD Code": "V83",
        "Disease": "Occupant of special vehicle mainly used on industrial premises injured in transport  accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1664",
        "MCCD Code": "V84",
        "Disease": "Occupant of special vehicle mainly used in agriculture injured in transport accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1665",
        "MCCD Code": "V85",
        "Disease": "Occupant of special construction vehicle injured in transport accident",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1666",
        "MCCD Code": "V86",
        "Disease": "Occupant of special all-terrain or other motor vehicle designed primarily for off-road use, injured",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1667",
        "MCCD Code": "V87",
        "Disease": "Traffic accident of specified type but victim's mode of transport unknown",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1668",
        "MCCD Code": "V88",
        "Disease": "Nontraffic accident of specified type but victim's mode of transport unknown",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1669",
        "MCCD Code": "V89",
        "Disease": "Motor- or nonmotor-vehicle accident, type of vehicle unspecified",
        "Category (Sub Group)": "Other land transport accidents (V80-V89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1670",
        "MCCD Code": "V90",
        "Disease": "Accident to watercraft causing drowning and submersion",
        "Category (Sub Group)": "Water transport accidents (V90-V94)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1671",
        "MCCD Code": "V91",
        "Disease": "Accident to watercraft causing other injury",
        "Category (Sub Group)": "Water transport accidents (V90-V94)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1672",
        "MCCD Code": "V92",
        "Disease": "Water-transport-related drowning and submersion without accident to watercraft",
        "Category (Sub Group)": "Water transport accidents (V90-V94)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1673",
        "MCCD Code": "V93",
        "Disease": "Accident on board watercraft without accident to watercraft, not causing drowning and submersion",
        "Category (Sub Group)": "Water transport accidents (V90-V94)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1674",
        "MCCD Code": "V94",
        "Disease": "Other and unspecified water transport accidents",
        "Category (Sub Group)": "Water transport accidents (V90-V94)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1675",
        "MCCD Code": "V95",
        "Disease": "Accident to powered aircraft causing injury to occupant",
        "Category (Sub Group)": "Air and space transport accidents (V95-V97)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1676",
        "MCCD Code": "V96",
        "Disease": "Accident to nonpowered aircraft causing injury to occupant",
        "Category (Sub Group)": "Air and space transport accidents (V95-V97)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1677",
        "MCCD Code": "V97",
        "Disease": "Other specified air transport accidents",
        "Category (Sub Group)": "Air and space transport accidents (V95-V97)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1678",
        "MCCD Code": "V98",
        "Disease": "Other specified transport accidents",
        "Category (Sub Group)": "Other and unspecified transport accidents (V98-V99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1679",
        "MCCD Code": "V99",
        "Disease": "Unspecified transport accident",
        "Category (Sub Group)": "Other and unspecified transport accidents (V98-V99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1680",
        "MCCD Code": "W00",
        "Disease": "Fall on same level involving ice and snow",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1681",
        "MCCD Code": "W01",
        "Disease": "Fall on same level from slipping, tripping and stumbling",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1682",
        "MCCD Code": "W02",
        "Disease": "Fall involving ice-skates, skis, roller-skates or skateboards",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1683",
        "MCCD Code": "W03",
        "Disease": "Other fall on same level due to collision with, or pushing by, another person",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1684",
        "MCCD Code": "W04",
        "Disease": "Fall while being carried or supported by other persons",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1685",
        "MCCD Code": "W05",
        "Disease": "Fall involving wheelchair",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1686",
        "MCCD Code": "W06",
        "Disease": "Fall involving bed",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1687",
        "MCCD Code": "W07",
        "Disease": "Fall involving chair",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1688",
        "MCCD Code": "W08",
        "Disease": "Fall involving other furniture",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1689",
        "MCCD Code": "W09",
        "Disease": "Fall involving playground equipment",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1690",
        "MCCD Code": "W10",
        "Disease": "Fall on and from stairs and steps",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1691",
        "MCCD Code": "W11",
        "Disease": "Fall on and from ladder",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1692",
        "MCCD Code": "W12",
        "Disease": "Fall on and from scaffolding",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1693",
        "MCCD Code": "W13",
        "Disease": "Fall from, out of or through building or structure",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1694",
        "MCCD Code": "W14",
        "Disease": "Fall from tree",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1695",
        "MCCD Code": "W15",
        "Disease": "Fall from cliff",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1696",
        "MCCD Code": "W16",
        "Disease": "Diving or jumping into water causing injury other than drowning or submersion",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1697",
        "MCCD Code": "W17",
        "Disease": "Other fall from one level to another",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1698",
        "MCCD Code": "W18",
        "Disease": "Other fall on same level",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1699",
        "MCCD Code": "W19",
        "Disease": "Unspecified fall",
        "Category (Sub Group)": "Falls (w00-w19))",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1700",
        "MCCD Code": "W20",
        "Disease": "Struck by thrown, projected or falling object",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1701",
        "MCCD Code": "W21",
        "Disease": "Striking against or struck by sports equipment",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1702",
        "MCCD Code": "W22",
        "Disease": "Striking against or struck by other objects",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1703",
        "MCCD Code": "W23",
        "Disease": "Caught, crushed, jammed or pinched in or between objects",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1704",
        "MCCD Code": "W24",
        "Disease": "Contact with lifting and transmission devices, not elsewhere classified",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1705",
        "MCCD Code": "W25",
        "Disease": "Contact with sharp glass",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1706",
        "MCCD Code": "W26",
        "Disease": "Contact with knife, sword or dagger",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1707",
        "MCCD Code": "W27",
        "Disease": "Contact with nonpowered hand tool",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1708",
        "MCCD Code": "W28",
        "Disease": "Contact with powered lawnmower",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1709",
        "MCCD Code": "W29",
        "Disease": "Contact with other powered hand tools and household machinery",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1710",
        "MCCD Code": "W30",
        "Disease": "Contact with agricultural machinery",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1711",
        "MCCD Code": "W31",
        "Disease": "Contact with other and unspecified machinery",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1712",
        "MCCD Code": "W32",
        "Disease": "Handgun discharge",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1713",
        "MCCD Code": "W33",
        "Disease": "Rifle, shotgun and larger firearm discharge",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1714",
        "MCCD Code": "W34",
        "Disease": "Discharge from other and unspecified firearms",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1715",
        "MCCD Code": "W35",
        "Disease": "Explosion and rupture of boiler",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1716",
        "MCCD Code": "W36",
        "Disease": "Explosion and rupture of gas cylinder",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1717",
        "MCCD Code": "W37",
        "Disease": "Explosion and rupture of pressurized tyre, pipe or hose",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1718",
        "MCCD Code": "W38",
        "Disease": "Explosion and rupture of other specified pressurized devices",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1719",
        "MCCD Code": "W39",
        "Disease": "Discharge of firework",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1720",
        "MCCD Code": "W40",
        "Disease": "Explosion of other materials",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1721",
        "MCCD Code": "W41",
        "Disease": "Exposure to high-pressure jet",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1722",
        "MCCD Code": "W42",
        "Disease": "Exposure to noise",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1723",
        "MCCD Code": "W43",
        "Disease": "Exposure to vibration",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1724",
        "MCCD Code": "W44",
        "Disease": "Foreign body entering into or through eye or natural orifice",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1725",
        "MCCD Code": "W45",
        "Disease": "Foreign body or object entering through skin",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1726",
        "MCCD Code": "W49",
        "Disease": "Exposure to other and unspecified inanimate mechanical forces",
        "Category (Sub Group)": "Exposure to inanimate mechanical forces (w20-w49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1727",
        "MCCD Code": "W50",
        "Disease": "Hit, struck, kicked, twisted, bitten or scratched by another person",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1728",
        "MCCD Code": "W51",
        "Disease": "Striking against or bumped into by another person",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1729",
        "MCCD Code": "W52",
        "Disease": "Crushed, pushed or stepped on by crowd or human stampede",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1730",
        "MCCD Code": "W53",
        "Disease": "Bitten by rat",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1731",
        "MCCD Code": "W54",
        "Disease": "Bitten or struck by dog",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1732",
        "MCCD Code": "W55",
        "Disease": "Bitten or struck by other mammals",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1733",
        "MCCD Code": "W56",
        "Disease": "Contact with marine animal",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1734",
        "MCCD Code": "W57",
        "Disease": "Bitten or stung by nonvenomous insect and other nonvenomous arthropods",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1735",
        "MCCD Code": "W58",
        "Disease": "Bitten or struck by crocodile or alligator",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1736",
        "MCCD Code": "W59",
        "Disease": "Bitten or crushed by other reptiles",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1737",
        "MCCD Code": "W60",
        "Disease": "Contact with plant thorns and spines and sharp leaves",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1738",
        "MCCD Code": "W64",
        "Disease": "Exposure to other and unspecified animate mechanical forces",
        "Category (Sub Group)": "Exposure to animate mechanical forces (w50-w64)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1739",
        "MCCD Code": "W65",
        "Disease": "Drowning and submersion while in bath-tub",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1740",
        "MCCD Code": "W66",
        "Disease": "Drowning and submersion following fall into bath-tub",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1741",
        "MCCD Code": "W67",
        "Disease": "Drowning and submersion while in swimming-pool",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1742",
        "MCCD Code": "W68",
        "Disease": "Drowning and submersion following fall into swimming-pool",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1743",
        "MCCD Code": "W69",
        "Disease": "Drowning and submersion while in natural water",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1744",
        "MCCD Code": "W70",
        "Disease": "Drowning and submersion following fall into natural water",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1745",
        "MCCD Code": "W73",
        "Disease": "Other specified drowning and submersion",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1746",
        "MCCD Code": "W74",
        "Disease": "Unspecified drowning and submersion",
        "Category (Sub Group)": "Accidental drowning and submersion (W65- W74)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1747",
        "MCCD Code": "W75",
        "Disease": "Accidental suffocation and strangulation in bed",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1748",
        "MCCD Code": "W76",
        "Disease": "Other accidental hanging and strangulation",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1749",
        "MCCD Code": "W77",
        "Disease": "Threat to breathing due to cave-in, falling earth and other substances",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1750",
        "MCCD Code": "W78",
        "Disease": "Inhalation of gastric contents",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1751",
        "MCCD Code": "W79",
        "Disease": "Inhalation and ingestion of food causing obstruction of respiratory tract",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1752",
        "MCCD Code": "W80",
        "Disease": "Inhalation and ingestion of other objects causing obstruction of respiratory tract",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1753",
        "MCCD Code": "W81",
        "Disease": "Confined to or trapped in a low-oxygen environment",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1754",
        "MCCD Code": "W83",
        "Disease": "Other specified threats to breathing",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1755",
        "MCCD Code": "W84",
        "Disease": "Unspecified threat to breathing",
        "Category (Sub Group)": "Other accidental threats to breathing (w75-w84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1756",
        "MCCD Code": "W85",
        "Disease": "Exposure to electric transmission lines",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1757",
        "MCCD Code": "W86",
        "Disease": "Exposure to other specified electric current",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1758",
        "MCCD Code": "W87",
        "Disease": "Exposure to unspecified electric current",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1759",
        "MCCD Code": "W88",
        "Disease": "Exposure to ionizing radiation",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1760",
        "MCCD Code": "W89",
        "Disease": "Exposure to man-made visible and ultraviolet light",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1761",
        "MCCD Code": "W90",
        "Disease": "Exposure to other nonionizing radiation",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1762",
        "MCCD Code": "W91",
        "Disease": "Exposure to unspecified type of radiation",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1763",
        "MCCD Code": "W92",
        "Disease": "Exposure to excessive heat of man-made origin",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1764",
        "MCCD Code": "W93",
        "Disease": "Exposure to excessive cold of man-made origin",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1765",
        "MCCD Code": "W94",
        "Disease": "Exposure to high and low air pressure and changes in air pressure",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1766",
        "MCCD Code": "W99",
        "Disease": "Exposure to other and unspecified man-made environmental factors",
        "Category (Sub Group)": "Exposure to electric current, radiation and extreme ambient air temperature and pressure (W85-W99)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1767",
        "MCCD Code": "X00",
        "Disease": "Exposure to uncontrolled fire in building or structure",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1768",
        "MCCD Code": "X01",
        "Disease": "Exposure to uncontrolled fire, not in building or structure",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1769",
        "MCCD Code": "X02",
        "Disease": "Exposure to controlled fire in building or structure",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1770",
        "MCCD Code": "X03",
        "Disease": "Exposure to controlled fire, not in building or structure",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1771",
        "MCCD Code": "X04",
        "Disease": "Exposure to ignition of highly flammable material",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1772",
        "MCCD Code": "X05",
        "Disease": "Exposure to ignition or melting of nightwear",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1773",
        "MCCD Code": "X06",
        "Disease": "Exposure to ignition or melting of other clothing and apparel",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1774",
        "MCCD Code": "X08",
        "Disease": "Exposure to other specified smoke, fire and flames",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1775",
        "MCCD Code": "X09",
        "Disease": "Exposure to unspecified smoke, fire and flames",
        "Category (Sub Group)": "Exposure to smoke, fire and flames (X00-X09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1776",
        "MCCD Code": "X10",
        "Disease": "Contact with hot drinks, food, fats and cooking oils",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1777",
        "MCCD Code": "X11",
        "Disease": "Contact with hot tap-water",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1778",
        "MCCD Code": "X12",
        "Disease": "Contact with other hot fluids",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1779",
        "MCCD Code": "X13",
        "Disease": "Contact with steam and hot vapours",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1780",
        "MCCD Code": "X14",
        "Disease": "Contact with hot air and gases",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1781",
        "MCCD Code": "X15",
        "Disease": "Contact with hot household appliances",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1782",
        "MCCD Code": "X16",
        "Disease": "Contact with hot heating appliances, radiators and pipes",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1783",
        "MCCD Code": "X17",
        "Disease": "Contact with hot engines, machinery and tools",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1784",
        "MCCD Code": "X18",
        "Disease": "Contact with other hot metals",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1785",
        "MCCD Code": "X19",
        "Disease": "Contact with other and unspecified heat and hot substances",
        "Category (Sub Group)": "Contact with heat and hot substances (X10-X19)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1786",
        "MCCD Code": "X20",
        "Disease": "Contact with venomous snakes and lizards",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1787",
        "MCCD Code": "X21",
        "Disease": "Contact with venomous spiders",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1788",
        "MCCD Code": "X22",
        "Disease": "Contact with scorpions",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1789",
        "MCCD Code": "X23",
        "Disease": "Contact with hornets, wasps and bees",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1790",
        "MCCD Code": "X24",
        "Disease": "Contact with centipedes and venomous millipedes (tropical)",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1791",
        "MCCD Code": "X25",
        "Disease": "Contact with other specified venomous arthropods",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1792",
        "MCCD Code": "X26",
        "Disease": "Contact with venomous marine animals and plants",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1793",
        "MCCD Code": "X27",
        "Disease": "Contact with other specified venomous animals",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1794",
        "MCCD Code": "X28",
        "Disease": "Contact with other specified venomous plants",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1795",
        "MCCD Code": "X29",
        "Disease": "Contact with unspecified venomous animal or plant",
        "Category (Sub Group)": "Contact with venomous animals and plants (X20-X29)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1796",
        "MCCD Code": "X30",
        "Disease": "Exposure to excessive natural heat",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1797",
        "MCCD Code": "X31",
        "Disease": "Exposure to excessive natural cold",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1798",
        "MCCD Code": "X32",
        "Disease": "Exposure to sunlight",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1799",
        "MCCD Code": "X33",
        "Disease": "Victim of lightning",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1800",
        "MCCD Code": "X34",
        "Disease": "Victim of earthquake",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1801",
        "MCCD Code": "X35",
        "Disease": "Victim of volcanic eruption",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1802",
        "MCCD Code": "X36",
        "Disease": "Victim of avalanche, landslide and other earth movements",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1803",
        "MCCD Code": "X37",
        "Disease": "Victim of cataclysmic storm",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1804",
        "MCCD Code": "X38",
        "Disease": "Victim of flood",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1805",
        "MCCD Code": "X39",
        "Disease": "Exposure to other and unspecified forces of nature",
        "Category (Sub Group)": "Exposure to forces of nature (X30-X39)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1806",
        "MCCD Code": "X40",
        "Disease": "Accidental poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1807",
        "MCCD Code": "X41",
        "Disease": "Accidental poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and psychotropic drugs, not elsewhere classified",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1808",
        "MCCD Code": "X42",
        "Disease": "Accidental poisoning by and exposure to narcotics and psychodysleptics [hallucinogens], not elsewhere classified",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1809",
        "MCCD Code": "X43",
        "Disease": "Accidental poisoning by and exposure to other drugs acting on the autonomic nervous system",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1810",
        "MCCD Code": "X44",
        "Disease": "Accidental poisoning by and exposure to other and unspecified drugs, medicaments and biological substances",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1811",
        "MCCD Code": "X45",
        "Disease": "Accidental poisoning by and exposure to alcohol",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1812",
        "MCCD Code": "X46",
        "Disease": "Accidental poisoning by and exposure to organic solvents and halogenated hydrocarbons and their vapours",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1813",
        "MCCD Code": "X47",
        "Disease": "Accidental poisoning by and exposure to other gases and vapours",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1814",
        "MCCD Code": "X48",
        "Disease": "Accidental poisoning by and exposure to pesticides",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1815",
        "MCCD Code": "X49",
        "Disease": "Accidental poisoning by and exposure to other and unspecified chemicals and noxious substances",
        "Category (Sub Group)": "Accidental poisoning by and exposure to noxious substances (X40-X49)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1816",
        "MCCD Code": "X50",
        "Disease": "Overexertion and strenuous or repetitive movements",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1817",
        "MCCD Code": "X51",
        "Disease": "Travel and motion",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1818",
        "MCCD Code": "X52",
        "Disease": "Prolonged stay in weightless environment",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1819",
        "MCCD Code": "X53",
        "Disease": "Lack of food",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1820",
        "MCCD Code": "X54",
        "Disease": "Lack of water",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1821",
        "MCCD Code": "X57",
        "Disease": "Unspecified privation",
        "Category (Sub Group)": "Overexertion, travel and privation (X50-X57)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1822",
        "MCCD Code": "X58",
        "Disease": "Exposure to other specified factors",
        "Category (Sub Group)": "Accidental exposure to other and unspecified factors (X58-X59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1823",
        "MCCD Code": "X59",
        "Disease": "Exposure to unspecified factor",
        "Category (Sub Group)": "Accidental exposure to other and unspecified factors (X58-X59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1824",
        "MCCD Code": "X60",
        "Disease": "Intentional self-poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1825",
        "MCCD Code": "X61",
        "Disease": "Intentional self-poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and psychotropic drugs, not elsewhere classified",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1826",
        "MCCD Code": "X62",
        "Disease": "Intentional self-poisoning by and exposure to narcotics and psychodysleptics [hallucinogens], not elsewhere classified",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1827",
        "MCCD Code": "X63",
        "Disease": "Intentional self-poisoning by and exposure to other drugs acting on the autonomic nervous system",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1828",
        "MCCD Code": "X64",
        "Disease": "Intentional self-poisoning by and exposure to other and unspecified drugs, medicaments and biological substances",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1829",
        "MCCD Code": "X65",
        "Disease": "Intentional self-poisoning by and exposure to alcohol",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1830",
        "MCCD Code": "X66",
        "Disease": "Intentional self-poisoning by and exposure to organic solvents and halogenated hydrocarbons and their vapours",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1831",
        "MCCD Code": "X67",
        "Disease": "Intentional self-poisoning by and exposure to other gases and vapours",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1832",
        "MCCD Code": "X68",
        "Disease": "Intentional self-poisoning by and exposure to pesticides",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1833",
        "MCCD Code": "X69",
        "Disease": "Intentional self-poisoning by and exposure to other and unspecified chemicals and noxious substances",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1834",
        "MCCD Code": "X70",
        "Disease": "Intentional self-harm by hanging, strangulation and suffocation",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1835",
        "MCCD Code": "X71",
        "Disease": "Intentional self-harm by drowning and submersion",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1836",
        "MCCD Code": "X72",
        "Disease": "Intentional self-harm by handgun discharge",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1837",
        "MCCD Code": "X73",
        "Disease": "Intentional self-harm by rifle, shotgun and larger firearm discharge",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1838",
        "MCCD Code": "X74",
        "Disease": "Intentional self-harm by other and unspecified firearm discharge",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1839",
        "MCCD Code": "X75",
        "Disease": "Intentional self-harm by explosive material",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1840",
        "MCCD Code": "X76",
        "Disease": "Intentional self-harm by smoke, fire and flames",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1841",
        "MCCD Code": "X77",
        "Disease": "Intentional self-harm by steam, hot vapours and hot objects",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1842",
        "MCCD Code": "X78",
        "Disease": "Intentional self-harm by sharp object",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1843",
        "MCCD Code": "X79",
        "Disease": "Intentional self-harm by blunt object",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1844",
        "MCCD Code": "X80",
        "Disease": "Intentional self-harm by jumping from a high place",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1845",
        "MCCD Code": "X81",
        "Disease": "Intentional self-harm by jumping or lying before moving object",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1846",
        "MCCD Code": "X82",
        "Disease": "Intentional self-harm by crashing of motor vehicle",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1847",
        "MCCD Code": "X83",
        "Disease": "Intentional self-harm by other specified means",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1848",
        "MCCD Code": "X84",
        "Disease": "Intentional self-harm by unspecified means",
        "Category (Sub Group)": "Intentional self-harm (X60-X84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1849",
        "MCCD Code": "X85",
        "Disease": "Assault by drugs, medicaments and biological substances",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1850",
        "MCCD Code": "X86",
        "Disease": "Assault by corrosive substance",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1851",
        "MCCD Code": "X87",
        "Disease": "Assault by pesticides",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1852",
        "MCCD Code": "X88",
        "Disease": "Assault by gases and vapours",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1853",
        "MCCD Code": "X89",
        "Disease": "Assault by other specified chemicals and noxious substances",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1854",
        "MCCD Code": "X90",
        "Disease": "Assault by unspecified chemical or noxious substance",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1855",
        "MCCD Code": "X91",
        "Disease": "Assault by hanging, strangulation and suffocation",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1856",
        "MCCD Code": "X92",
        "Disease": "Assault by drowning and submersion",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1857",
        "MCCD Code": "X93",
        "Disease": "Assault by handgun discharge",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1858",
        "MCCD Code": "X94",
        "Disease": "Assault by rifle, shotgun and larger firearm discharge",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1859",
        "MCCD Code": "X95",
        "Disease": "Assault by other and unspecified firearm discharge",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1860",
        "MCCD Code": "X96",
        "Disease": "Assault by explosive material",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1861",
        "MCCD Code": "X97",
        "Disease": "Assault by smoke, fire and flames",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1862",
        "MCCD Code": "X98",
        "Disease": "Assault by steam, hot vapours and hot objects",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1863",
        "MCCD Code": "X99",
        "Disease": "Assault by sharp object",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1864",
        "MCCD Code": "Y00",
        "Disease": "Assault by blunt object",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1865",
        "MCCD Code": "Y01",
        "Disease": "Assault by pushing from high place",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1866",
        "MCCD Code": "Y02",
        "Disease": "Assault by pushing or placing victim before moving object",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1867",
        "MCCD Code": "Y03",
        "Disease": "Assault by crashing of motor vehicle",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1868",
        "MCCD Code": "Y04",
        "Disease": "Assault by bodily force",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1869",
        "MCCD Code": "Y05",
        "Disease": "Sexual assault by bodily force",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1870",
        "MCCD Code": "Y06",
        "Disease": "Neglect and abandonment",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1871",
        "MCCD Code": "Y07",
        "Disease": "Other maltreatment syndromes",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1872",
        "MCCD Code": "Y08",
        "Disease": "Assault by other specified means",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1873",
        "MCCD Code": "Y09",
        "Disease": "Assault by unspecified means",
        "Category (Sub Group)": "Assault (X85-Y09)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1874",
        "MCCD Code": "Y10",
        "Disease": "Poisoning by and exposure to nonopioid analgesics, antipyretics and antirheumatics, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1875",
        "MCCD Code": "Y11",
        "Disease": "Poisoning by and exposure to antiepileptic, sedative-hypnotic, antiparkinsonism and psychotropic drugs, not elsewhere classified, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1876",
        "MCCD Code": "Y12",
        "Disease": "Poisoning by and exposure to narcotics and psychodysleptics [hallucinogens], not elsewhere classified, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1877",
        "MCCD Code": "Y13",
        "Disease": "Poisoning by and exposure to other drugs acting on the autonomic nervous system, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1878",
        "MCCD Code": "Y14",
        "Disease": "Poisoning by and exposure to other and unspecified drugs, medicaments and biological substances, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1879",
        "MCCD Code": "Y15",
        "Disease": "Poisoning by and exposure to alcohol, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1880",
        "MCCD Code": "Y16",
        "Disease": "Poisoning by and exposure to organic solvents and halogenated hydrocarbons and their vapours, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1881",
        "MCCD Code": "Y17",
        "Disease": "Poisoning by and exposure to other gases and vapours, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1882",
        "MCCD Code": "Y18",
        "Disease": "Poisoning by and exposure to pesticides, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1883",
        "MCCD Code": "Y19",
        "Disease": "Poisoning by and exposure to other and unspecified chemicals and noxious substances, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1884",
        "MCCD Code": "Y20",
        "Disease": "Hanging, strangulation and suffocation, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1885",
        "MCCD Code": "Y21",
        "Disease": "Drowning and submersion, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1886",
        "MCCD Code": "Y22",
        "Disease": "Handgun discharge, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1887",
        "MCCD Code": "Y23",
        "Disease": "Rifle, shotgun and larger firearm discharge, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1888",
        "MCCD Code": "Y24",
        "Disease": "Other and unspecified firearm discharge, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1889",
        "MCCD Code": "Y25",
        "Disease": "Contact with explosive material, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1890",
        "MCCD Code": "Y26",
        "Disease": "Exposure to smoke, fire and flames, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1891",
        "MCCD Code": "Y27",
        "Disease": "Contact with steam, hot vapours and hot objects, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1892",
        "MCCD Code": "Y28",
        "Disease": "Contact with sharp object, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1893",
        "MCCD Code": "Y29",
        "Disease": "Contact with blunt object, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1894",
        "MCCD Code": "Y30",
        "Disease": "Falling, jumping or pushed from a high place, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1895",
        "MCCD Code": "Y31",
        "Disease": "Falling, lying or running before or into moving object, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1896",
        "MCCD Code": "Y32",
        "Disease": "Crashing of motor vehicle, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1897",
        "MCCD Code": "Y33",
        "Disease": "Other specified events, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1898",
        "MCCD Code": "Y34",
        "Disease": "Unspecified event, undetermined intent",
        "Category (Sub Group)": "Event of undetermined intent (Y10-Y34)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1899",
        "MCCD Code": "Y35",
        "Disease": "Legal intervention",
        "Category (Sub Group)": "Legal intervention and operations of war (Y35-Y36)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1900",
        "MCCD Code": "Y36",
        "Disease": "Operations of war",
        "Category (Sub Group)": "Legal intervention and operations of war (Y35-Y36)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1901",
        "MCCD Code": "Y40",
        "Disease": "Systemic antibiotics",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1902",
        "MCCD Code": "Y41",
        "Disease": "Other systemic anti-infectives and antiparasitics",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1903",
        "MCCD Code": "Y42",
        "Disease": "Hormones and their synthetic substitutes and antagonists, not elsewhere classified",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1904",
        "MCCD Code": "Y43",
        "Disease": "Primarily systemic agents",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1905",
        "MCCD Code": "Y44",
        "Disease": "Agents primarily affecting blood constituents",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1906",
        "MCCD Code": "Y45",
        "Disease": "Analgesics, antipyretics and anti-inflammatory drugs",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1907",
        "MCCD Code": "Y46",
        "Disease": "Antiepileptics and antiparkinsonism drugs",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1908",
        "MCCD Code": "Y47",
        "Disease": "Sedatives, hypnotics and antianxiety drugs",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1909",
        "MCCD Code": "Y48",
        "Disease": "Anaesthetics and therapeutic gases",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1910",
        "MCCD Code": "Y49",
        "Disease": "Psychotropic drugs, not elsewhere classified",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1911",
        "MCCD Code": "Y50",
        "Disease": "Central nervous system stimulants, not elsewhere classified",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1912",
        "MCCD Code": "Y51",
        "Disease": "Drugs primarily affecting the autonomic nervous system",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1913",
        "MCCD Code": "Y52",
        "Disease": "Agents primarily affecting the cardiovascular system",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1914",
        "MCCD Code": "Y53",
        "Disease": "Agents primarily affecting the gastrointestinal system",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1915",
        "MCCD Code": "Y54",
        "Disease": "Agents primarily affecting water-balance and mineral and uric acid metabolism",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1916",
        "MCCD Code": "Y55",
        "Disease": "Agents primarily acting on smooth and skeletal muscles and the respiratory system",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1917",
        "MCCD Code": "Y56",
        "Disease": "Topical agents primarily affecting skin and mucous membrane and ophthalmological, otorhinolaryngological and dental drugs",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1918",
        "MCCD Code": "Y57",
        "Disease": "Other and unspecified drugs and medicaments",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1919",
        "MCCD Code": "Y58",
        "Disease": "Bacterial vaccines",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1920",
        "MCCD Code": "Y59",
        "Disease": "Other and unspecified vaccines and biological substances",
        "Category (Sub Group)": "Drugs, medicaments and biological substances causing adverse effects in therapeutic use (Y40-Y59)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1921",
        "MCCD Code": "Y60",
        "Disease": "Unintentional cut, puncture, perforation or haemorrhage during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1922",
        "MCCD Code": "Y61",
        "Disease": "Foreign object accidentally left in body during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1923",
        "MCCD Code": "Y62",
        "Disease": "Failure of sterile precautions during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1924",
        "MCCD Code": "Y63",
        "Disease": "Failure in dosage during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1925",
        "MCCD Code": "Y64",
        "Disease": "Contaminated medical or biological substances",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1926",
        "MCCD Code": "Y65",
        "Disease": "Other misadventures during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1927",
        "MCCD Code": "Y66",
        "Disease": "Nonadministration of surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1928",
        "MCCD Code": "Y69",
        "Disease": "Unspecified misadventure during surgical and medical care",
        "Category (Sub Group)": "Misadventures to patients during surgical and medical care (Y60-Y69)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1929",
        "MCCD Code": "Y70",
        "Disease": "Anaesthesiology devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1930",
        "MCCD Code": "Y71",
        "Disease": "Cardiovascular devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1931",
        "MCCD Code": "Y72",
        "Disease": "Otorhinolaryngological devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1932",
        "MCCD Code": "Y73",
        "Disease": "Gastroenterology and urology devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1933",
        "MCCD Code": "Y74",
        "Disease": "General hospital and personal-use devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1934",
        "MCCD Code": "Y75",
        "Disease": "Neurological devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1935",
        "MCCD Code": "Y76",
        "Disease": "Obstetric and gynaecological devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1936",
        "MCCD Code": "Y77",
        "Disease": "Ophthalmic devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1937",
        "MCCD Code": "Y78",
        "Disease": "Radiological devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1938",
        "MCCD Code": "Y79",
        "Disease": "Orthopaedic devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1939",
        "MCCD Code": "Y80",
        "Disease": "Physical medicine devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1940",
        "MCCD Code": "Y81",
        "Disease": "General- and plastic-surgery devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1941",
        "MCCD Code": "Y82",
        "Disease": "Other and unspecified medical devices associated with adverse incidents",
        "Category (Sub Group)": "Medical devices associated with adverse incidents in diagnostic and therapeutic use (Y70-Y82)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1942",
        "MCCD Code": "Y83",
        "Disease": "Surgical operation and other surgical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure",
        "Category (Sub Group)": "Surgical and other medical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of  misadventure at the time of the procedure (Y83-Y84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1943",
        "MCCD Code": "Y84",
        "Disease": "Other medical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure",
        "Category (Sub Group)": "Surgical and other medical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of  misadventure at the time of the procedure (Y83-Y84)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1944",
        "MCCD Code": "Y85",
        "Disease": "Sequelae of transport accidents",
        "Category (Sub Group)": "Sequelae of external causes of morbidity and mortality (Y85-Y89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1945",
        "MCCD Code": "Y86",
        "Disease": "Sequelae of other accidents",
        "Category (Sub Group)": "Sequelae of external causes of morbidity and mortality (Y85-Y89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1946",
        "MCCD Code": "Y87",
        "Disease": "Sequelae of intentional self-harm, assault and events of undetermined intent",
        "Category (Sub Group)": "Sequelae of external causes of morbidity and mortality (Y85-Y89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1947",
        "MCCD Code": "Y88",
        "Disease": "Sequelae with surgical and medical care as external cause",
        "Category (Sub Group)": "Sequelae of external causes of morbidity and mortality (Y85-Y89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1948",
        "MCCD Code": "Y89",
        "Disease": "Sequelae of other external causes",
        "Category (Sub Group)": "Sequelae of external causes of morbidity and mortality (Y85-Y89)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1949",
        "MCCD Code": "Y90",
        "Disease": "Evidence of alcohol involvement determined by blood alcohol level",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1950",
        "MCCD Code": "Y91",
        "Disease": "Evidence of alcohol involvement determined by level of intoxication",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1951",
        "MCCD Code": "Y95",
        "Disease": "Nosocomial condition",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1952",
        "MCCD Code": "Y96",
        "Disease": "Work-related condition",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1953",
        "MCCD Code": "Y97",
        "Disease": "Environmental-pollution-related condition",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1954",
        "MCCD Code": "Y98",
        "Disease": "Lifestyle-related condition",
        "Category (Sub Group)": "Supplementary factors related to causes of morbidity and mortality classified elsewhere (Y90-Y98)",
        "Major Group": "External causes of morbidity and mortality (V01-Y98)"
    },
    {
        "S.No.": "1955",
        "MCCD Code": "Z00",
        "Disease": "General examination and investigation of persons without complaint and reported diagnosis",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1956",
        "MCCD Code": "Z01",
        "Disease": "Other special examinations and investigations of persons without complaint or reported diagnosis",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1957",
        "MCCD Code": "Z02",
        "Disease": "Examination and encounter for administrative purposes",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1958",
        "MCCD Code": "Z03",
        "Disease": "Medical observation and evaluation for suspected diseases and conditions",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1959",
        "MCCD Code": "Z04",
        "Disease": "Examination and observation for other reasons",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1960",
        "MCCD Code": "Z08",
        "Disease": "Follow-up examination after treatment for malignant neoplasms",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1961",
        "MCCD Code": "Z09",
        "Disease": "Follow-up examination after treatment for conditions other than malignant neoplasms",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1962",
        "MCCD Code": "Z10",
        "Disease": "Routine general health check-up of defined subpopulation",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1963",
        "MCCD Code": "Z11",
        "Disease": "Special screening examination for infectious and parasitic diseases",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1964",
        "MCCD Code": "Z12",
        "Disease": "Special screening examination for neoplasms",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1965",
        "MCCD Code": "Z13",
        "Disease": "Special screening examination for other diseases and disorders",
        "Category (Sub Group)": "Persons encountering health services for examination and investigation (Z00-Z13)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1966",
        "MCCD Code": "Z20",
        "Disease": "Contact with and exposure to communicable diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1967",
        "MCCD Code": "Z21",
        "Disease": "Asymptomatic human immunodeficiency virus [HIV] infection status",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1968",
        "MCCD Code": "Z22",
        "Disease": "Carrier of infectious disease",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1969",
        "MCCD Code": "Z23",
        "Disease": "Need for immunization against single bacterial diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1970",
        "MCCD Code": "Z24",
        "Disease": "Need for immunization against certain single viral diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1971",
        "MCCD Code": "Z25",
        "Disease": "Need for immunization against other single viral diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1972",
        "MCCD Code": "Z26",
        "Disease": "Need for immunization against other single infectious diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1973",
        "MCCD Code": "Z27",
        "Disease": "Need for immunization against combinations of infectious diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1974",
        "MCCD Code": "Z28",
        "Disease": "Immunization not carried out",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1975",
        "MCCD Code": "Z29",
        "Disease": "Need for other prophylactic measures",
        "Category (Sub Group)": "Persons with potential health hazards related to communicable diseases (z20-z29)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1976",
        "MCCD Code": "Z30",
        "Disease": "Contraceptive management",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1977",
        "MCCD Code": "Z31",
        "Disease": "Procreative management",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1978",
        "MCCD Code": "Z32",
        "Disease": "Pregnancy examination and test",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1979",
        "MCCD Code": "Z33",
        "Disease": "Pregnant state, incidental",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1980",
        "MCCD Code": "Z34",
        "Disease": "Supervision of normal pregnancy",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1981",
        "MCCD Code": "Z35",
        "Disease": "Supervision of high-risk pregnancy",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1982",
        "MCCD Code": "Z36",
        "Disease": "Antenatal screening",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1983",
        "MCCD Code": "Z37",
        "Disease": "Outcome of delivery",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1984",
        "MCCD Code": "Z38",
        "Disease": "Liveborn infants according to place of birth",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1985",
        "MCCD Code": "Z39",
        "Disease": "Postpartum care and examination",
        "Category (Sub Group)": "Persons encountering health services in circumstances related to reproduction (Z30-Z39)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1986",
        "MCCD Code": "Z40",
        "Disease": "Prophylactic surgery",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1987",
        "MCCD Code": "Z41",
        "Disease": "Procedures for purposes other than remedying health state",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1988",
        "MCCD Code": "Z42",
        "Disease": "Follow-up care involving plastic surgery",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1989",
        "MCCD Code": "Z43",
        "Disease": "Attention to artificial openings",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1990",
        "MCCD Code": "Z44",
        "Disease": "Fitting and adjustment of external prosthetic device",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1991",
        "MCCD Code": "Z45",
        "Disease": "Adjustment and management of implanted device",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1992",
        "MCCD Code": "Z46",
        "Disease": "Fitting and adjustment of other devices",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1993",
        "MCCD Code": "Z47",
        "Disease": "Other orthopaedic follow-up care",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1994",
        "MCCD Code": "Z48",
        "Disease": "Other surgical follow-up care",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1995",
        "MCCD Code": "Z49",
        "Disease": "Care involving dialysis",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1996",
        "MCCD Code": "Z50",
        "Disease": "Care involving use of rehabilitation procedures",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1997",
        "MCCD Code": "Z51",
        "Disease": "Other medical care",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1998",
        "MCCD Code": "Z52",
        "Disease": "Donors of organs and tissues",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "1999",
        "MCCD Code": "Z53",
        "Disease": "Persons encountering health services for specific procedures, not carried out",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2000",
        "MCCD Code": "Z54",
        "Disease": "Convalescence",
        "Category (Sub Group)": "Persons encountering health services for specific procedures and health care (Z40-Z54)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2001",
        "MCCD Code": "Z55",
        "Disease": "Problems related to education and literacy",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2002",
        "MCCD Code": "Z56",
        "Disease": "Problems related to employment and unemployment",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2003",
        "MCCD Code": "Z57",
        "Disease": "Occupational exposure to risk-factors",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2004",
        "MCCD Code": "Z58",
        "Disease": "Problems related to physical environment",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2005",
        "MCCD Code": "Z59",
        "Disease": "Problems related to housing and economic circumstances",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2006",
        "MCCD Code": "Z60",
        "Disease": "Problems related to social environment",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2007",
        "MCCD Code": "Z61",
        "Disease": "Problems related to negative life events in childhood",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2008",
        "MCCD Code": "Z62",
        "Disease": "Other problems related to upbringing",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2009",
        "MCCD Code": "Z63",
        "Disease": "Other problems related to primary support group, including family circumstances",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2010",
        "MCCD Code": "Z64",
        "Disease": "Problems related to certain psychosocial circumstances",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2011",
        "MCCD Code": "Z65",
        "Disease": "Problems related to other psychosocial circumstances",
        "Category (Sub Group)": "Persons with potential health hazards related to socioeconomic and psychosocial circumstances (Z55-Z65)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2012",
        "MCCD Code": "Z70",
        "Disease": "Counselling related to sexual attitude, behaviour and orientation",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2013",
        "MCCD Code": "Z71",
        "Disease": "Persons encountering health services for other counselling and medical advice, not elsewhere classif",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2014",
        "MCCD Code": "Z72",
        "Disease": "Problems related to lifestyle",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2015",
        "MCCD Code": "Z73",
        "Disease": "Problems related to life-management difficulty",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2016",
        "MCCD Code": "Z74",
        "Disease": "Problems related to care-provider dependency",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2017",
        "MCCD Code": "Z75",
        "Disease": "Problems related to medical facilities and other health care",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2018",
        "MCCD Code": "Z76",
        "Disease": "Persons encountering health services in other circumstances",
        "Category (Sub Group)": "Persons encountering health services in other circumstances (Z70-Z76)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2019",
        "MCCD Code": "Z80",
        "Disease": "Family history of malignant neoplasm",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2020",
        "MCCD Code": "Z81",
        "Disease": "Family history of mental and behavioural disorders",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2021",
        "MCCD Code": "Z82",
        "Disease": "Family history of certain disabilities and chronic diseases leading to disablement",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2022",
        "MCCD Code": "Z83",
        "Disease": "Family history of other specific disorders",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2023",
        "MCCD Code": "Z84",
        "Disease": "Family history of other conditions",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2024",
        "MCCD Code": "Z85",
        "Disease": "Personal history of malignant neoplasm",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2025",
        "MCCD Code": "Z86",
        "Disease": "Personal history of certain other diseases",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2026",
        "MCCD Code": "Z87",
        "Disease": "Personal history of other diseases and conditions",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2027",
        "MCCD Code": "Z88",
        "Disease": "Personal history of allergy to drugs, medicaments and biological substances",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2028",
        "MCCD Code": "Z89",
        "Disease": "Acquired absence of limb",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2029",
        "MCCD Code": "Z90",
        "Disease": "Acquired absence of organs, not elsewhere classified",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2030",
        "MCCD Code": "Z91",
        "Disease": "Personal history of risk-factors, not elsewhere classified",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2031",
        "MCCD Code": "Z92",
        "Disease": "Personal history of medical treatment",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2032",
        "MCCD Code": "Z93",
        "Disease": "Artificial opening status",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2033",
        "MCCD Code": "Z94",
        "Disease": "Transplanted organ and tissue status",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2034",
        "MCCD Code": "Z95",
        "Disease": "Presence of cardiac and vascular implants and grafts",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2035",
        "MCCD Code": "Z96",
        "Disease": "Presence of other functional implants",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2036",
        "MCCD Code": "Z97",
        "Disease": "Presence of other devices",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2037",
        "MCCD Code": "Z98",
        "Disease": "Other postsurgical states",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    },
    {
        "S.No.": "2038",
        "MCCD Code": "Z99",
        "Disease": "Dependence on enabling machines and devices, not elsewhere classified",
        "Category (Sub Group)": "Persons with potential health hazards related to family and personal history and certain conditions influencing health status (Z80-Z99)",
        "Major Group": "Factors influencing health status and contact with health services (Z00-Z99)"
    }
];




const tableBody = document.getElementById('tableBody');


jsonData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item['S.No.']}</td>
        <td>${item['MCCD Code']}</td>
        <td>${item['Disease']}</td>
        <td>${item['Category (Sub Group)']}</td>
        <td>${item['Major Group']}</td>
    `;
    tableBody.appendChild(row);
});

}
