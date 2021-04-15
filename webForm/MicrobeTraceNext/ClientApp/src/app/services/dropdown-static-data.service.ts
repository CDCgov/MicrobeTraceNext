import { Injectable } from '@angular/core';
import { ISOLanguages } from '../DTO/iso-languages';
import { County } from '../DTO/county-state';
import { Country } from '../DTO/iso-country';
import { SearchCriteria } from '../DTO/seach-criteria';
import { SearchBy } from '../DTO/enums';
import { State } from '../DTO/State';

@Injectable({
  providedIn: 'root'
})
export class DropdownStaticDataService {

  public Ethnicity: string[] = ['Hispanic/Latino', 'Non-Hispanic/Latino', 'Unknown'];
  public Sex: string[] = ['Male', 'Female', 'Other', 'Unknown'];

  public Countries : string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  public States: string[] =  ['Non US','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  public StatesDomestic: string[] = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  public StateCode: State[] = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    },
    {
      "name": "Alaska",
      "abbreviation": "AK"
    },
    {
      "name": "American Samoa",
      "abbreviation": "AS"
    },
    {
      "name": "Arizona",
      "abbreviation": "AZ"
    },
    {
      "name": "Arkansas",
      "abbreviation": "AR"
    },
    {
      "name": "California",
      "abbreviation": "CA"
    },
    {
      "name": "Colorado",
      "abbreviation": "CO"
    },
    {
      "name": "Connecticut",
      "abbreviation": "CT"
    },
    {
      "name": "Delaware",
      "abbreviation": "DE"
    },
    {
      "name": "District Of Columbia",
      "abbreviation": "DC"
    },
    {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
    },
    {
      "name": "Florida",
      "abbreviation": "FL"
    },
    {
      "name": "Georgia",
      "abbreviation": "GA"
    },
    {
      "name": "Guam Gu",
      "abbreviation": "GU"
    },
    {
      "name": "Hawaii",
      "abbreviation": "HI"
    },
    {
      "name": "Idaho",
      "abbreviation": "ID"
    },
    {
      "name": "Illinois",
      "abbreviation": "IL"
    },
    {
      "name": "Indiana",
      "abbreviation": "IN"
    },
    {
      "name": "Iowa",
      "abbreviation": "IA"
    },
    {
      "name": "Kansas",
      "abbreviation": "KS"
    },
    {
      "name": "Kentucky",
      "abbreviation": "KY"
    },
    {
      "name": "Louisiana",
      "abbreviation": "LA"
    },
    {
      "name": "Maine",
      "abbreviation": "ME"
    },
    {
      "name": "Marshall Islands",
      "abbreviation": "MH"
    },
    {
      "name": "Maryland",
      "abbreviation": "MD"
    },
    {
      "name": "Massachusetts",
      "abbreviation": "MA"
    },
    {
      "name": "Michigan",
      "abbreviation": "MI"
    },
    {
      "name": "Minnesota",
      "abbreviation": "MN"
    },
    {
      "name": "Mississippi",
      "abbreviation": "MS"
    },
    {
      "name": "Missouri",
      "abbreviation": "MO"
    },
    {
      "name": "Montana",
      "abbreviation": "MT"
    },
    {
      "name": "Nebraska",
      "abbreviation": "NE"
    },
    {
      "name": "Nevada",
      "abbreviation": "NV"
    },
    {
      "name": "New Hampshire",
      "abbreviation": "NH"
    },
    {
      "name": "New Jersey",
      "abbreviation": "NJ"
    },
    {
      "name": "New Mexico",
      "abbreviation": "NM"
    },
    {
      "name": "New York",
      "abbreviation": "NY"
    },
    {
      "name": "North Carolina",
      "abbreviation": "NC"
    },
    {
      "name": "North Dakota",
      "abbreviation": "ND"
    },
    {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
    },
    {
      "name": "Ohio",
      "abbreviation": "OH"
    },
    {
      "name": "Oklahoma",
      "abbreviation": "OK"
    },
    {
      "name": "Oregon",
      "abbreviation": "OR"
    },
    {
      "name": "Palau",
      "abbreviation": "PW"
    },
    {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    },
    {
      "name": "Puerto Rico",
      "abbreviation": "PR"
    },
    {
      "name": "Rhode Island",
      "abbreviation": "RI"
    },
    {
      "name": "South Carolina",
      "abbreviation": "SC"
    },
    {
      "name": "South Dakota",
      "abbreviation": "SD"
    },
    {
      "name": "Tennessee",
      "abbreviation": "TN"
    },
    {
      "name": "Texas",
      "abbreviation": "TX"
    },
    {
      "name": "Utah",
      "abbreviation": "UT"
    },
    {
      "name": "Vermont",
      "abbreviation": "VT"
    },
    {
      "name": "Virgin Islands",
      "abbreviation": "VI"
    },
    {
      "name": "Virginia",
      "abbreviation": "VA"
    },
    {
      "name": "Washington",
      "abbreviation": "WA"
    },
    {
      "name": "West Virginia",
      "abbreviation": "WV"
    },
    {
      "name": "Wisconsin",
      "abbreviation": "WI"
    },
    {
      "name": "Wyoming",
      "abbreviation": "WY"
    },
    {
      "name": "American Samoa",
      "abbreviation": "AS"
    },
    {
      "name": "District of Columbia",
      "abbreviation": "DC"
    },
    {
      "name": "Guam",
      "abbreviation": "GU"
    },
    {
      "name": "New York City",
      "abbreviation": "NYC"
    },
    {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
    },
    {
      "name": "Puerto Rico",
      "abbreviation": "PR"
    },
    {
      "name": "U.S. Virgin Islands",
      "abbreviation": "VI"
    },
    {
      "name": "Federated States of Micronesia",
      "abbreviation": "FSM"
    },
    {
      "name": "Republic of Marshall Islands",
      "abbreviation": "RMI"
    },
    {
      "name": "Republic of Palau",
      "abbreviation": "ROP"
    }

  ]

  public Languages: ISOLanguages[] = [
    {"code":"ab","name":"Abkhaz","nativeName":"аҧсуа"},
    {"code":"aa","name":"Afar","nativeName":"Afaraf"},
    {"code":"af","name":"Afrikaans","nativeName":"Afrikaans"},
    {"code":"ak","name":"Akan","nativeName":"Akan"},
    {"code":"sq","name":"Albanian","nativeName":"Shqip"},
    {"code":"am","name":"Amharic","nativeName":"አማርኛ"},
    {"code":"ar","name":"Arabic","nativeName":"العربية"},
    {"code":"an","name":"Aragonese","nativeName":"Aragonés"},
    {"code":"hy","name":"Armenian","nativeName":"Հայերեն"},
    {"code":"as","name":"Assamese","nativeName":"অসমীয়া"},
    {"code":"av","name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
    {"code":"ae","name":"Avestan","nativeName":"avesta"},
    {"code":"ay","name":"Aymara","nativeName":"aymar aru"},
    {"code":"az","name":"Azerbaijani","nativeName":"azərbaycan dili"},
    {"code":"bm","name":"Bambara","nativeName":"bamanankan"},
    {"code":"ba","name":"Bashkir","nativeName":"башҡорт теле"},
    {"code":"eu","name":"Basque","nativeName":"euskara, euskera"},
    {"code":"be","name":"Belarusian","nativeName":"Беларуская"},
    {"code":"bn","name":"Bengali","nativeName":"বাংলা"},
    {"code":"bh","name":"Bihari","nativeName":"भोजपुरी"},
    {"code":"bi","name":"Bislama","nativeName":"Bislama"},
    {"code":"bs","name":"Bosnian","nativeName":"bosanski jezik"},
    {"code":"br","name":"Breton","nativeName":"brezhoneg"},
    {"code":"bg","name":"Bulgarian","nativeName":"български език"},
    {"code":"my","name":"Burmese","nativeName":"ဗမာစာ"},
    {"code":"ca","name":"Catalan; Valencian","nativeName":"Català"},
    {"code":"ch","name":"Chamorro","nativeName":"Chamoru"},
    {"code":"ce","name":"Chechen","nativeName":"нохчийн мотт"},
    {"code":"ny","name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
    {"code":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
    {"code":"cv","name":"Chuvash","nativeName":"чӑваш чӗлхи"},
    {"code":"kw","name":"Cornish","nativeName":"Kernewek"},
    {"code":"co","name":"Corsican","nativeName":"corsu, lingua corsa"},
    {"code":"cr","name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
    {"code":"hr","name":"Croatian","nativeName":"hrvatski"},
    {"code":"cs","name":"Czech","nativeName":"česky, čeština"},
    {"code":"da","name":"Danish","nativeName":"dansk"},
    {"code":"dv","name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
    {"code":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},
    {"code":"en","name":"English","nativeName":"English"},
    {"code":"eo","name":"Esperanto","nativeName":"Esperanto"},
    {"code":"et","name":"Estonian","nativeName":"eesti, eesti keel"},
    {"code":"ee","name":"Ewe","nativeName":"Eʋegbe"},
    {"code":"fo","name":"Faroese","nativeName":"føroyskt"},
    {"code":"fj","name":"Fijian","nativeName":"vosa Vakaviti"},
    {"code":"fi","name":"Finnish","nativeName":"suomi, suomen kieli"},
    {"code":"fr","name":"French","nativeName":"français, langue française"},
    {"code":"ff","name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
    {"code":"gl","name":"Galician","nativeName":"Galego"},
    {"code":"ka","name":"Georgian","nativeName":"ქართული"},
    {"code":"de","name":"German","nativeName":"Deutsch"},
    {"code":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},
    {"code":"gn","name":"Guaraní","nativeName":"Avañeẽ"},
    {"code":"gu","name":"Gujarati","nativeName":"ગુજરાતી"},
    {"code":"ht","name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
    {"code":"ha","name":"Hausa","nativeName":"Hausa, هَوُسَ"},
    {"code":"he","name":"Hebrew (modern)","nativeName":"עברית"},
    {"code":"hz","name":"Herero","nativeName":"Otjiherero"},
    {"code":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},
    {"code":"ho","name":"Hiri Motu","nativeName":"Hiri Motu"},
    {"code":"hu","name":"Hungarian","nativeName":"Magyar"},
    {"code":"ia","name":"Interlingua","nativeName":"Interlingua"},
    {"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},
    {"code":"ie","name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
    {"code":"ga","name":"Irish","nativeName":"Gaeilge"},
    {"code":"ig","name":"Igbo","nativeName":"Asụsụ Igbo"},
    {"code":"ik","name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
    {"code":"io","name":"Ido","nativeName":"Ido"},
    {"code":"is","name":"Icelandic","nativeName":"Íslenska"},
    {"code":"it","name":"Italian","nativeName":"Italiano"},
    {"code":"iu","name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
    {"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
    {"code":"jv","name":"Javanese","nativeName":"basa Jawa"},
    {"code":"kl","name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
    {"code":"kn","name":"Kannada","nativeName":"ಕನ್ನಡ"},
    {"code":"kr","name":"Kanuri","nativeName":"Kanuri"},
    {"code":"ks","name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
    {"code":"kk","name":"Kazakh","nativeName":"Қазақ тілі"},
    {"code":"km","name":"Khmer","nativeName":"ភាសាខ្មែរ"},
    {"code":"ki","name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
    {"code":"rw","name":"Kinyarwanda","nativeName":"Ikinyarwanda"},
    {"code":"ky","name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
    {"code":"kv","name":"Komi","nativeName":"коми кыв"},
    {"code":"kg","name":"Kongo","nativeName":"KiKongo"},
    {"code":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
    {"code":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
    {"code":"kj","name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
    {"code":"la","name":"Latin","nativeName":"latine, lingua latina"},
    {"code":"lb","name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
    {"code":"lg","name":"Luganda","nativeName":"Luganda"},
    {"code":"li","name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
    {"code":"ln","name":"Lingala","nativeName":"Lingála"},
    {"code":"lo","name":"Lao","nativeName":"ພາສາລາວ"},
    {"code":"lt","name":"Lithuanian","nativeName":"lietuvių kalba"},
    {"code":"lu","name":"Luba-Katanga","nativeName":""},
    {"code":"lv","name":"Latvian","nativeName":"latviešu valoda"},
    {"code":"gv","name":"Manx","nativeName":"Gaelg, Gailck"},
    {"code":"mk","name":"Macedonian","nativeName":"македонски јазик"},
    {"code":"mg","name":"Malagasy","nativeName":"Malagasy fiteny"},
    {"code":"ms","name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
    {"code":"ml","name":"Malayalam","nativeName":"മലയാളം"},
    {"code":"mt","name":"Maltese","nativeName":"Malti"},
    {"code":"mi","name":"Māori","nativeName":"te reo Māori"},
    {"code":"mr","name":"Marathi (Marāṭhī)","nativeName":"मराठी"},
    {"code":"mh","name":"Marshallese","nativeName":"Kajin M̧ajeļ"},
    {"code":"mn","name":"Mongolian","nativeName":"монгол"},
    {"code":"na","name":"Nauru","nativeName":"Ekakairũ Naoero"},
    {"code":"nv","name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
    {"code":"nb","name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
    {"code":"nd","name":"North Ndebele","nativeName":"isiNdebele"},
    {"code":"ne","name":"Nepali","nativeName":"नेपाली"},
    {"code":"ng","name":"Ndonga","nativeName":"Owambo"},
    {"code":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
    {"code":"no","name":"Norwegian","nativeName":"Norsk"},
    {"code":"ii","name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
    {"code":"nr","name":"South Ndebele","nativeName":"isiNdebele"},
    {"code":"oc","name":"Occitan","nativeName":"Occitan"},
    {"code":"oj","name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
    {"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},
    {"code":"om","name":"Oromo","nativeName":"Afaan Oromoo"},
    {"code":"or","name":"Oriya","nativeName":"ଓଡ଼ିଆ"},
    {"code":"os","name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
    {"code":"pa","name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
    {"code":"pi","name":"Pāli","nativeName":"पाऴि"},
    {"code":"fa","name":"Persian","nativeName":"فارسی"},
    {"code":"pl","name":"Polish","nativeName":"polski"},
    {"code":"ps","name":"Pashto, Pushto","nativeName":"پښتو"},
    {"code":"pt","name":"Portuguese","nativeName":"Português"},
    {"code":"qu","name":"Quechua","nativeName":"Runa Simi, Kichwa"},
    {"code":"rm","name":"Romansh","nativeName":"rumantsch grischun"},
    {"code":"rn","name":"Kirundi","nativeName":"kiRundi"},
    {"code":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
    {"code":"ru","name":"Russian","nativeName":"русский язык"},
    {"code":"sa","name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
    {"code":"sc","name":"Sardinian","nativeName":"sardu"},
    {"code":"sd","name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
    {"code":"se","name":"Northern Sami","nativeName":"Davvisámegiella"},
    {"code":"sm","name":"Samoan","nativeName":"gagana faa Samoa"},
    {"code":"sg","name":"Sango","nativeName":"yângâ tî sängö"},
    {"code":"sr","name":"Serbian","nativeName":"српски језик"},
    {"code":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
    {"code":"sn","name":"Shona","nativeName":"chiShona"},
    {"code":"si","name":"Sinhala, Sinhalese","nativeName":"සිංහල"},
    {"code":"sk","name":"Slovak","nativeName":"slovenčina"},
    {"code":"sl","name":"Slovene","nativeName":"slovenščina"},
    {"code":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
    {"code":"st","name":"Southern Sotho","nativeName":"Sesotho"},
    {"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},
    {"code":"su","name":"Sundanese","nativeName":"Basa Sunda"},
    {"code":"sw","name":"Swahili","nativeName":"Kiswahili"},
    {"code":"ss","name":"Swati","nativeName":"SiSwati"},
    {"code":"sv","name":"Swedish","nativeName":"svenska"},
    {"code":"ta","name":"Tamil","nativeName":"தமிழ்"},
    {"code":"te","name":"Telugu","nativeName":"తెలుగు"},
    {"code":"tg","name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
    {"code":"th","name":"Thai","nativeName":"ไทย"},
    {"code":"ti","name":"Tigrinya","nativeName":"ትግርኛ"},
    {"code":"bo","name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
    {"code":"tk","name":"Turkmen","nativeName":"Türkmen, Түркмен"},
    {"code":"tl","name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
    {"code":"tn","name":"Tswana","nativeName":"Setswana"},
    {"code":"to","name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
    {"code":"tr","name":"Turkish","nativeName":"Türkçe"},
    {"code":"ts","name":"Tsonga","nativeName":"Xitsonga"},
    {"code":"tt","name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
    {"code":"tw","name":"Twi","nativeName":"Twi"},
    {"code":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},
    {"code":"ug","name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
    {"code":"uk","name":"Ukrainian","nativeName":"українська"},
    {"code":"ur","name":"Urdu","nativeName":"اردو"},
    {"code":"uz","name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
    {"code":"ve","name":"Venda","nativeName":"Tshivenḓa"},
    {"code":"vi","name":"Vietnamese","nativeName":"Tiếng Việt"},
    {"code":"vo","name":"Volapük","nativeName":"Volapük"},
    {"code":"wa","name":"Walloon","nativeName":"Walon"},
    {"code":"cy","name":"Welsh","nativeName":"Cymraeg"},
    {"code":"wo","name":"Wolof","nativeName":"Wollof"},
    {"code":"fy","name":"Western Frisian","nativeName":"Frysk"},
    {"code":"xh","name":"Xhosa","nativeName":"isiXhosa"},
    {"code":"yi","name":"Yiddish","nativeName":"ייִדיש"},
    {"code":"yo","name":"Yoruba","nativeName":"Yorùbá"},
    {"code":"za","name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
  ];


  public Counties: County[] = [{
    "County": "Abbeville",
    "State": "South Carolina"
  }, {
    "County": "Acadia",
    "State": "Louisiana"
  }, {
    "County": "Accomack",
    "State": "Virginia"
  }, {
    "County": "Ada",
    "State": "Idaho"
  }, {
    "County": "Adair",
    "State": "Oklahoma"
  }, {
    "County": "Adair",
    "State": "Iowa"
  }, {
    "County": "Adair",
    "State": "Kentucky"
  }, {
    "County": "Adair",
    "State": "Missouri"
  }, {
    "County": "Adams",
    "State": "Colorado"
  }, {
    "County": "Adams",
    "State": "Nebraska"
  }, {
    "County": "Adams",
    "State": "Iowa"
  }, {
    "County": "Adams",
    "State": "Mississippi"
  }, {
    "County": "Adams",
    "State": "Illinois"
  }, {
    "County": "Adams",
    "State": "Indiana"
  }, {
    "County": "Adams",
    "State": "Washington"
  }, {
    "County": "Adams",
    "State": "Idaho"
  }, {
    "County": "Adams",
    "State": "North Dakota"
  }, {
    "County": "Adams",
    "State": "Wisconsin"
  }, {
    "County": "Adams",
    "State": "Ohio"
  }, {
    "County": "Adams",
    "State": "Pennsylvania"
  }, {
    "County": "Addison",
    "State": "Vermont"
  }, {
    "County": "Adjuntas",
    "State": "Puerto Rico"
  }, {
    "County": "Aguada",
    "State": "Puerto Rico"
  }, {
    "County": "Aguadilla",
    "State": "Puerto Rico"
  }, {
    "County": "Aguas Buenas",
    "State": "Puerto Rico"
  }, {
    "County": "Aibonito",
    "State": "Puerto Rico"
  }, {
    "County": "Aiken",
    "State": "South Carolina"
  }, {
    "County": "Aitkin",
    "State": "Minnesota"
  }, {
    "County": "Alachua",
    "State": "Florida"
  }, {
    "County": "Alamance",
    "State": "North Carolina"
  }, {
    "County": "Alameda",
    "State": "California"
  }, {
    "County": "Alamosa",
    "State": "Colorado"
  }, {
    "County": "Albany",
    "State": "Wyoming"
  }, {
    "County": "Albany",
    "State": "New York"
  }, {
    "County": "Albemarle",
    "State": "Virginia"
  }, {
    "County": "Alcona",
    "State": "Michigan"
  }, {
    "County": "Alcorn",
    "State": "Mississippi"
  }, {
    "County": "Aleutians East",
    "State": "Alaska"
  }, {
    "County": "Aleutians West",
    "State": "Alaska"
  }, {
    "County": "Alexander",
    "State": "Illinois"
  }, {
    "County": "Alexander",
    "State": "North Carolina"
  }, {
    "County": "Alexandria",
    "State": "Virginia"
  }, {
    "County": "Alfalfa",
    "State": "Oklahoma"
  }, {
    "County": "Alger",
    "State": "Michigan"
  }, {
    "County": "Allamakee",
    "State": "Iowa"
  }, {
    "County": "Allegan",
    "State": "Michigan"
  }, {
    "County": "Allegany",
    "State": "Maryland"
  }, {
    "County": "Allegany",
    "State": "New York"
  }, {
    "County": "Alleghany",
    "State": "North Carolina"
  }, {
    "County": "Alleghany",
    "State": "Virginia"
  }, {
    "County": "Allegheny",
    "State": "Pennsylvania"
  }, {
    "County": "Allen",
    "State": "Louisiana"
  }, {
    "County": "Allen",
    "State": "Kansas"
  }, {
    "County": "Allen",
    "State": "Kentucky"
  }, {
    "County": "Allen",
    "State": "Indiana"
  }, {
    "County": "Allen",
    "State": "Ohio"
  }, {
    "County": "Allendale",
    "State": "South Carolina"
  }, {
    "County": "Alpena",
    "State": "Michigan"
  }, {
    "County": "Alpine",
    "State": "California"
  }, {
    "County": "Amador",
    "State": "California"
  }, {
    "County": "Amelia",
    "State": "Virginia"
  }, {
    "County": "Amherst",
    "State": "Virginia"
  }, {
    "County": "Amite",
    "State": "Mississippi"
  }, {
    "County": "Anasco",
    "State": "Puerto Rico"
  }, {
    "County": "Anchorage",
    "State": "Alaska"
  }, {
    "County": "Anderson",
    "State": "Texas"
  }, {
    "County": "Anderson",
    "State": "Kansas"
  }, {
    "County": "Anderson",
    "State": "Tennessee"
  }, {
    "County": "Anderson",
    "State": "Kentucky"
  }, {
    "County": "Anderson",
    "State": "South Carolina"
  }, {
    "County": "Andrew",
    "State": "Missouri"
  }, {
    "County": "Andrews",
    "State": "Texas"
  }, {
    "County": "Androscoggin",
    "State": "Maine"
  }, {
    "County": "Angelina",
    "State": "Texas"
  }, {
    "County": "Anne Arundel",
    "State": "Maryland"
  }, {
    "County": "Anoka",
    "State": "Minnesota"
  }, {
    "County": "Anson",
    "State": "North Carolina"
  }, {
    "County": "Antelope",
    "State": "Nebraska"
  }, {
    "County": "Antrim",
    "State": "Michigan"
  }, {
    "County": "Apache",
    "State": "Arizona"
  }, {
    "County": "Appanoose",
    "State": "Iowa"
  }, {
    "County": "Appling",
    "State": "Georgia"
  }, {
    "County": "Appomattox",
    "State": "Virginia"
  }, {
    "County": "Aransas",
    "State": "Texas"
  }, {
    "County": "Arapahoe",
    "State": "Colorado"
  }, {
    "County": "Archer",
    "State": "Texas"
  }, {
    "County": "Archuleta",
    "State": "Colorado"
  }, {
    "County": "Arecibo",
    "State": "Puerto Rico"
  }, {
    "County": "Arenac",
    "State": "Michigan"
  }, {
    "County": "Arkansas",
    "State": "Arkansas"
  }, {
    "County": "Arlington",
    "State": "Virginia"
  }, {
    "County": "Armstrong",
    "State": "Texas"
  }, {
    "County": "Armstrong",
    "State": "Pennsylvania"
  }, {
    "County": "Aroostook",
    "State": "Maine"
  }, {
    "County": "Arroyo",
    "State": "Puerto Rico"
  }, {
    "County": "Arthur",
    "State": "Nebraska"
  }, {
    "County": "Ascension",
    "State": "Louisiana"
  }, {
    "County": "Ashe",
    "State": "North Carolina"
  }, {
    "County": "Ashland",
    "State": "Wisconsin"
  }, {
    "County": "Ashland",
    "State": "Ohio"
  }, {
    "County": "Ashley",
    "State": "Arkansas"
  }, {
    "County": "Ashtabula",
    "State": "Ohio"
  }, {
    "County": "Asotin",
    "State": "Washington"
  }, {
    "County": "Assumption",
    "State": "Louisiana"
  }, {
    "County": "Atascosa",
    "State": "Texas"
  }, {
    "County": "Atchison",
    "State": "Kansas"
  }, {
    "County": "Atchison",
    "State": "Missouri"
  }, {
    "County": "Athens",
    "State": "Ohio"
  }, {
    "County": "Atkinson",
    "State": "Georgia"
  }, {
    "County": "Atlantic",
    "State": "New Jersey"
  }, {
    "County": "Atoka",
    "State": "Oklahoma"
  }, {
    "County": "Attala",
    "State": "Mississippi"
  }, {
    "County": "Audrain",
    "State": "Missouri"
  }, {
    "County": "Audubon",
    "State": "Iowa"
  }, {
    "County": "Auglaize",
    "State": "Ohio"
  }, {
    "County": "Augusta",
    "State": "Virginia"
  }, {
    "County": "Aurora",
    "State": "South Dakota"
  }, {
    "County": "Austin",
    "State": "Texas"
  }, {
    "County": "Autauga",
    "State": "Alabama"
  }, {
    "County": "Avery",
    "State": "North Carolina"
  }, {
    "County": "Avoyelles",
    "State": "Louisiana"
  }, {
    "County": "Baca",
    "State": "Colorado"
  }, {
    "County": "Bacon",
    "State": "Georgia"
  }, {
    "County": "Bailey",
    "State": "Texas"
  }, {
    "County": "Baker",
    "State": "Georgia"
  }, {
    "County": "Baker",
    "State": "Oregon"
  }, {
    "County": "Baker",
    "State": "Florida"
  }, {
    "County": "Baldwin",
    "State": "Alabama"
  }, {
    "County": "Baldwin",
    "State": "Georgia"
  }, {
    "County": "Ballard",
    "State": "Kentucky"
  }, {
    "County": "Baltimore City",
    "State": "Maryland"
  }, {
    "County": "Baltimore County",
    "State": "Maryland"
  }, {
    "County": "Bamberg",
    "State": "South Carolina"
  }, {
    "County": "Bandera",
    "State": "Texas"
  }, {
    "County": "Banks",
    "State": "Georgia"
  }, {
    "County": "Banner",
    "State": "Nebraska"
  }, {
    "County": "Bannock",
    "State": "Idaho"
  }, {
    "County": "Baraga",
    "State": "Michigan"
  }, {
    "County": "Barber",
    "State": "Kansas"
  }, {
    "County": "Barbour",
    "State": "Alabama"
  }, {
    "County": "Barbour",
    "State": "West Virginia"
  }, {
    "County": "Barceloneta",
    "State": "Puerto Rico"
  }, {
    "County": "Barnes",
    "State": "North Dakota"
  }, {
    "County": "Barnstable",
    "State": "Massachusetts"
  }, {
    "County": "Barnwell",
    "State": "South Carolina"
  }, {
    "County": "Barranquitas",
    "State": "Puerto Rico"
  }, {
    "County": "Barren",
    "State": "Kentucky"
  }, {
    "County": "Barron",
    "State": "Wisconsin"
  }, {
    "County": "Barrow",
    "State": "Georgia"
  }, {
    "County": "Barry",
    "State": "Missouri"
  }, {
    "County": "Barry",
    "State": "Michigan"
  }, {
    "County": "Bartholomew",
    "State": "Indiana"
  }, {
    "County": "Barton",
    "State": "Kansas"
  }, {
    "County": "Barton",
    "State": "Missouri"
  }, {
    "County": "Bartow",
    "State": "Georgia"
  }, {
    "County": "Bastrop",
    "State": "Texas"
  }, {
    "County": "Bates",
    "State": "Missouri"
  }, {
    "County": "Bath",
    "State": "Kentucky"
  }, {
    "County": "Bath",
    "State": "Virginia"
  }, {
    "County": "Baxter",
    "State": "Arkansas"
  }, {
    "County": "Bay",
    "State": "Florida"
  }, {
    "County": "Bay",
    "State": "Michigan"
  }, {
    "County": "Bayamon",
    "State": "Puerto Rico"
  }, {
    "County": "Bayfield",
    "State": "Wisconsin"
  }, {
    "County": "Baylor",
    "State": "Texas"
  }, {
    "County": "Beadle",
    "State": "South Dakota"
  }, {
    "County": "Bear Lake",
    "State": "Idaho"
  }, {
    "County": "Beaufort",
    "State": "South Carolina"
  }, {
    "County": "Beaufort",
    "State": "North Carolina"
  }, {
    "County": "Beauregard",
    "State": "Louisiana"
  }, {
    "County": "Beaver",
    "State": "Utah"
  }, {
    "County": "Beaver",
    "State": "Oklahoma"
  }, {
    "County": "Beaver",
    "State": "Pennsylvania"
  }, {
    "County": "Beaverhead",
    "State": "Montana"
  }, {
    "County": "Becker",
    "State": "Minnesota"
  }, {
    "County": "Beckham",
    "State": "Oklahoma"
  }, {
    "County": "Bedford",
    "State": "Tennessee"
  }, {
    "County": "Bedford",
    "State": "Pennsylvania"
  }, {
    "County": "Bedford County",
    "State": "Virginia"
  }, {
    "County": "Bee",
    "State": "Texas"
  }, {
    "County": "Belknap",
    "State": "New Hampshire"
  }, {
    "County": "Bell",
    "State": "Texas"
  }, {
    "County": "Bell",
    "State": "Kentucky"
  }, {
    "County": "Belmont",
    "State": "Ohio"
  }, {
    "County": "Beltrami",
    "State": "Minnesota"
  }, {
    "County": "Ben Hill",
    "State": "Georgia"
  }, {
    "County": "Benewah",
    "State": "Idaho"
  }, {
    "County": "Bennett",
    "State": "South Dakota"
  }, {
    "County": "Bennington",
    "State": "Vermont"
  }, {
    "County": "Benson",
    "State": "North Dakota"
  }, {
    "County": "Bent",
    "State": "Colorado"
  }, {
    "County": "Benton",
    "State": "Arkansas"
  }, {
    "County": "Benton",
    "State": "Mississippi"
  }, {
    "County": "Benton",
    "State": "Tennessee"
  }, {
    "County": "Benton",
    "State": "Missouri"
  }, {
    "County": "Benton",
    "State": "Iowa"
  }, {
    "County": "Benton",
    "State": "Indiana"
  }, {
    "County": "Benton",
    "State": "Oregon"
  }, {
    "County": "Benton",
    "State": "Washington"
  }, {
    "County": "Benton",
    "State": "Minnesota"
  }, {
    "County": "Benzie",
    "State": "Michigan"
  }, {
    "County": "Bergen",
    "State": "New Jersey"
  }, {
    "County": "Berkeley",
    "State": "South Carolina"
  }, {
    "County": "Berkeley",
    "State": "West Virginia"
  }, {
    "County": "Berks",
    "State": "Pennsylvania"
  }, {
    "County": "Berkshire",
    "State": "Massachusetts"
  }, {
    "County": "Bernalillo",
    "State": "New Mexico"
  }, {
    "County": "Berrien",
    "State": "Michigan"
  }, {
    "County": "Berrien",
    "State": "Georgia"
  }, {
    "County": "Bertie",
    "State": "North Carolina"
  }, {
    "County": "Bethel",
    "State": "Alaska"
  }, {
    "County": "Bexar",
    "State": "Texas"
  }, {
    "County": "Bibb",
    "State": "Alabama"
  }, {
    "County": "Bibb",
    "State": "Georgia"
  }, {
    "County": "Bienville",
    "State": "Louisiana"
  }, {
    "County": "Big Horn",
    "State": "Wyoming"
  }, {
    "County": "Big Horn",
    "State": "Montana"
  }, {
    "County": "Big Stone",
    "State": "Minnesota"
  }, {
    "County": "Billings",
    "State": "North Dakota"
  }, {
    "County": "Bingham",
    "State": "Idaho"
  }, {
    "County": "Black Hawk",
    "State": "Iowa"
  }, {
    "County": "Blackford",
    "State": "Indiana"
  }, {
    "County": "Bladen",
    "State": "North Carolina"
  }, {
    "County": "Blaine",
    "State": "Idaho"
  }, {
    "County": "Blaine",
    "State": "Oklahoma"
  }, {
    "County": "Blaine",
    "State": "Nebraska"
  }, {
    "County": "Blaine",
    "State": "Montana"
  }, {
    "County": "Blair",
    "State": "Pennsylvania"
  }, {
    "County": "Blanco",
    "State": "Texas"
  }, {
    "County": "Bland",
    "State": "Virginia"
  }, {
    "County": "Bleckley",
    "State": "Georgia"
  }, {
    "County": "Bledsoe",
    "State": "Tennessee"
  }, {
    "County": "Blount",
    "State": "Alabama"
  }, {
    "County": "Blount",
    "State": "Tennessee"
  }, {
    "County": "Blue Earth",
    "State": "Minnesota"
  }, {
    "County": "Boise",
    "State": "Idaho"
  }, {
    "County": "Bolivar",
    "State": "Mississippi"
  }, {
    "County": "Bollinger",
    "State": "Missouri"
  }, {
    "County": "Bon Homme",
    "State": "South Dakota"
  }, {
    "County": "Bond",
    "State": "Illinois"
  }, {
    "County": "Bonner",
    "State": "Idaho"
  }, {
    "County": "Bonneville",
    "State": "Idaho"
  }, {
    "County": "Boone",
    "State": "Nebraska"
  }, {
    "County": "Boone",
    "State": "Arkansas"
  }, {
    "County": "Boone",
    "State": "Missouri"
  }, {
    "County": "Boone",
    "State": "Iowa"
  }, {
    "County": "Boone",
    "State": "Indiana"
  }, {
    "County": "Boone",
    "State": "Kentucky"
  }, {
    "County": "Boone",
    "State": "Illinois"
  }, {
    "County": "Boone",
    "State": "West Virginia"
  }, {
    "County": "Borden",
    "State": "Texas"
  }, {
    "County": "Bosque",
    "State": "Texas"
  }, {
    "County": "Bossier",
    "State": "Louisiana"
  }, {
    "County": "Botetourt",
    "State": "Virginia"
  }, {
    "County": "Bottineau",
    "State": "North Dakota"
  }, {
    "County": "Boulder",
    "State": "Colorado"
  }, {
    "County": "Boundary",
    "State": "Idaho"
  }, {
    "County": "Bourbon",
    "State": "Kansas"
  }, {
    "County": "Bourbon",
    "State": "Kentucky"
  }, {
    "County": "Bowie",
    "State": "Texas"
  }, {
    "County": "Bowman",
    "State": "North Dakota"
  }, {
    "County": "Box Butte",
    "State": "Nebraska"
  }, {
    "County": "Box Elder",
    "State": "Utah"
  }, {
    "County": "Boyd",
    "State": "Nebraska"
  }, {
    "County": "Boyd",
    "State": "Kentucky"
  }, {
    "County": "Boyle",
    "State": "Kentucky"
  }, {
    "County": "Bracken",
    "State": "Kentucky"
  }, {
    "County": "Bradford",
    "State": "Florida"
  }, {
    "County": "Bradford",
    "State": "Pennsylvania"
  }, {
    "County": "Bradley",
    "State": "Arkansas"
  }, {
    "County": "Bradley",
    "State": "Tennessee"
  }, {
    "County": "Branch",
    "State": "Michigan"
  }, {
    "County": "Brantley",
    "State": "Georgia"
  }, {
    "County": "Braxton",
    "State": "West Virginia"
  }, {
    "County": "Brazoria",
    "State": "Texas"
  }, {
    "County": "Brazos",
    "State": "Texas"
  }, {
    "County": "Breathitt",
    "State": "Kentucky"
  }, {
    "County": "Breckinridge",
    "State": "Kentucky"
  }, {
    "County": "Bremer",
    "State": "Iowa"
  }, {
    "County": "Brevard",
    "State": "Florida"
  }, {
    "County": "Brewster",
    "State": "Texas"
  }, {
    "County": "Briscoe",
    "State": "Texas"
  }, {
    "County": "Bristol",
    "State": "Virginia"
  }, {
    "County": "Bristol",
    "State": "Rhode Island"
  }, {
    "County": "Bristol",
    "State": "Massachusetts"
  }, {
    "County": "Bristol Bay",
    "State": "Alaska"
  }, {
    "County": "Broadwater",
    "State": "Montana"
  }, {
    "County": "Bronx",
    "State": "New York"
  }, {
    "County": "Brooke",
    "State": "West Virginia"
  }, {
    "County": "Brookings",
    "State": "South Dakota"
  }, {
    "County": "Brooks",
    "State": "Texas"
  }, {
    "County": "Brooks",
    "State": "Georgia"
  }, {
    "County": "Broome",
    "State": "New York"
  }, {
    "County": "Broomfield",
    "State": "Colorado"
  }, {
    "County": "Broward",
    "State": "Florida"
  }, {
    "County": "Brown",
    "State": "Texas"
  }, {
    "County": "Brown",
    "State": "Nebraska"
  }, {
    "County": "Brown",
    "State": "Kansas"
  }, {
    "County": "Brown",
    "State": "Illinois"
  }, {
    "County": "Brown",
    "State": "Ohio"
  }, {
    "County": "Brown",
    "State": "Indiana"
  }, {
    "County": "Brown",
    "State": "South Dakota"
  }, {
    "County": "Brown",
    "State": "Minnesota"
  }, {
    "County": "Brown",
    "State": "Wisconsin"
  }, {
    "County": "Brule",
    "State": "South Dakota"
  }, {
    "County": "Brunswick",
    "State": "North Carolina"
  }, {
    "County": "Brunswick",
    "State": "Virginia"
  }, {
    "County": "Bryan",
    "State": "Oklahoma"
  }, {
    "County": "Bryan",
    "State": "Georgia"
  }, {
    "County": "Buchanan",
    "State": "Missouri"
  }, {
    "County": "Buchanan",
    "State": "Iowa"
  }, {
    "County": "Buchanan",
    "State": "Virginia"
  }, {
    "County": "Buckingham",
    "State": "Virginia"
  }, {
    "County": "Bucks",
    "State": "Pennsylvania"
  }, {
    "County": "Buena Vista",
    "State": "Iowa"
  }, {
    "County": "Buena Vista",
    "State": "Virginia"
  }, {
    "County": "Buffalo",
    "State": "Nebraska"
  }, {
    "County": "Buffalo",
    "State": "South Dakota"
  }, {
    "County": "Buffalo",
    "State": "Wisconsin"
  }, {
    "County": "Bullitt",
    "State": "Kentucky"
  }, {
    "County": "Bulloch",
    "State": "Georgia"
  }, {
    "County": "Bullock",
    "State": "Alabama"
  }, {
    "County": "Buncombe",
    "State": "North Carolina"
  }, {
    "County": "Bureau",
    "State": "Illinois"
  }, {
    "County": "Burke",
    "State": "North Dakota"
  }, {
    "County": "Burke",
    "State": "Georgia"
  }, {
    "County": "Burke",
    "State": "North Carolina"
  }, {
    "County": "Burleigh",
    "State": "North Dakota"
  }, {
    "County": "Burleson",
    "State": "Texas"
  }, {
    "County": "Burlington",
    "State": "New Jersey"
  }, {
    "County": "Burnet",
    "State": "Texas"
  }, {
    "County": "Burnett",
    "State": "Wisconsin"
  }, {
    "County": "Burt",
    "State": "Nebraska"
  }, {
    "County": "Butler",
    "State": "Kansas"
  }, {
    "County": "Butler",
    "State": "Nebraska"
  }, {
    "County": "Butler",
    "State": "Missouri"
  }, {
    "County": "Butler",
    "State": "Alabama"
  }, {
    "County": "Butler",
    "State": "Kentucky"
  }, {
    "County": "Butler",
    "State": "Iowa"
  }, {
    "County": "Butler",
    "State": "Ohio"
  }, {
    "County": "Butler",
    "State": "Pennsylvania"
  }, {
    "County": "Butte",
    "State": "California"
  }, {
    "County": "Butte",
    "State": "Idaho"
  }, {
    "County": "Butte",
    "State": "South Dakota"
  }, {
    "County": "Butts",
    "State": "Georgia"
  }, {
    "County": "Cabarrus",
    "State": "North Carolina"
  }, {
    "County": "Cabell",
    "State": "West Virginia"
  }, {
    "County": "Cabo Rojo",
    "State": "Puerto Rico"
  }, {
    "County": "Cache",
    "State": "Utah"
  }, {
    "County": "Caddo",
    "State": "Oklahoma"
  }, {
    "County": "Caddo",
    "State": "Louisiana"
  }, {
    "County": "Caguas",
    "State": "Puerto Rico"
  }, {
    "County": "Calaveras",
    "State": "California"
  }, {
    "County": "Calcasieu",
    "State": "Louisiana"
  }, {
    "County": "Caldwell",
    "State": "Texas"
  }, {
    "County": "Caldwell",
    "State": "Louisiana"
  }, {
    "County": "Caldwell",
    "State": "Kentucky"
  }, {
    "County": "Caldwell",
    "State": "Missouri"
  }, {
    "County": "Caldwell",
    "State": "North Carolina"
  }, {
    "County": "Caledonia",
    "State": "Vermont"
  }, {
    "County": "Calhoun",
    "State": "Texas"
  }, {
    "County": "Calhoun",
    "State": "Florida"
  }, {
    "County": "Calhoun",
    "State": "Iowa"
  }, {
    "County": "Calhoun",
    "State": "Arkansas"
  }, {
    "County": "Calhoun",
    "State": "Mississippi"
  }, {
    "County": "Calhoun",
    "State": "Georgia"
  }, {
    "County": "Calhoun",
    "State": "Alabama"
  }, {
    "County": "Calhoun",
    "State": "Illinois"
  }, {
    "County": "Calhoun",
    "State": "Michigan"
  }, {
    "County": "Calhoun",
    "State": "South Carolina"
  }, {
    "County": "Calhoun",
    "State": "West Virginia"
  }, {
    "County": "Callahan",
    "State": "Texas"
  }, {
    "County": "Callaway",
    "State": "Missouri"
  }, {
    "County": "Calloway",
    "State": "Kentucky"
  }, {
    "County": "Calumet",
    "State": "Wisconsin"
  }, {
    "County": "Calvert",
    "State": "Maryland"
  }, {
    "County": "Camas",
    "State": "Idaho"
  }, {
    "County": "Cambria",
    "State": "Pennsylvania"
  }, {
    "County": "Camden",
    "State": "Missouri"
  }, {
    "County": "Camden",
    "State": "Georgia"
  }, {
    "County": "Camden",
    "State": "North Carolina"
  }, {
    "County": "Camden",
    "State": "New Jersey"
  }, {
    "County": "Cameron",
    "State": "Texas"
  }, {
    "County": "Cameron",
    "State": "Louisiana"
  }, {
    "County": "Cameron",
    "State": "Pennsylvania"
  }, {
    "County": "Camp",
    "State": "Texas"
  }, {
    "County": "Campbell",
    "State": "Tennessee"
  }, {
    "County": "Campbell",
    "State": "Kentucky"
  }, {
    "County": "Campbell",
    "State": "Wyoming"
  }, {
    "County": "Campbell",
    "State": "South Dakota"
  }, {
    "County": "Campbell",
    "State": "Virginia"
  }, {
    "County": "Camuy",
    "State": "Puerto Rico"
  }, {
    "County": "Canadian",
    "State": "Oklahoma"
  }, {
    "County": "Candler",
    "State": "Georgia"
  }, {
    "County": "Cannon",
    "State": "Tennessee"
  }, {
    "County": "Canovanas",
    "State": "Puerto Rico"
  }, {
    "County": "Canyon",
    "State": "Idaho"
  }, {
    "County": "Cape Girardeau",
    "State": "Missouri"
  }, {
    "County": "Cape May",
    "State": "New Jersey"
  }, {
    "County": "Carbon",
    "State": "Utah"
  }, {
    "County": "Carbon",
    "State": "Wyoming"
  }, {
    "County": "Carbon",
    "State": "Montana"
  }, {
    "County": "Carbon",
    "State": "Pennsylvania"
  }, {
    "County": "Caribou",
    "State": "Idaho"
  }, {
    "County": "Carlisle",
    "State": "Kentucky"
  }, {
    "County": "Carlton",
    "State": "Minnesota"
  }, {
    "County": "Carolina",
    "State": "Puerto Rico"
  }, {
    "County": "Caroline",
    "State": "Virginia"
  }, {
    "County": "Caroline",
    "State": "Maryland"
  }, {
    "County": "Carroll",
    "State": "Iowa"
  }, {
    "County": "Carroll",
    "State": "Mississippi"
  }, {
    "County": "Carroll",
    "State": "Arkansas"
  }, {
    "County": "Carroll",
    "State": "Georgia"
  }, {
    "County": "Carroll",
    "State": "Tennessee"
  }, {
    "County": "Carroll",
    "State": "Missouri"
  }, {
    "County": "Carroll",
    "State": "Illinois"
  }, {
    "County": "Carroll",
    "State": "Indiana"
  }, {
    "County": "Carroll",
    "State": "Kentucky"
  }, {
    "County": "Carroll",
    "State": "Virginia"
  }, {
    "County": "Carroll",
    "State": "Ohio"
  }, {
    "County": "Carroll",
    "State": "Maryland"
  }, {
    "County": "Carroll",
    "State": "New Hampshire"
  }, {
    "County": "Carson",
    "State": "Texas"
  }, {
    "County": "Carson City",
    "State": "Nevada"
  }, {
    "County": "Carter",
    "State": "Oklahoma"
  }, {
    "County": "Carter",
    "State": "Missouri"
  }, {
    "County": "Carter",
    "State": "Montana"
  }, {
    "County": "Carter",
    "State": "Tennessee"
  }, {
    "County": "Carter",
    "State": "Kentucky"
  }, {
    "County": "Carteret",
    "State": "North Carolina"
  }, {
    "County": "Carver",
    "State": "Minnesota"
  }, {
    "County": "Cascade",
    "State": "Montana"
  }, {
    "County": "Casey",
    "State": "Kentucky"
  }, {
    "County": "Cass",
    "State": "Nebraska"
  }, {
    "County": "Cass",
    "State": "Iowa"
  }, {
    "County": "Cass",
    "State": "Texas"
  }, {
    "County": "Cass",
    "State": "Missouri"
  }, {
    "County": "Cass",
    "State": "Illinois"
  }, {
    "County": "Cass",
    "State": "Indiana"
  }, {
    "County": "Cass",
    "State": "Michigan"
  }, {
    "County": "Cass",
    "State": "North Dakota"
  }, {
    "County": "Cass",
    "State": "Minnesota"
  }, {
    "County": "Cassia",
    "State": "Idaho"
  }, {
    "County": "Castro",
    "State": "Texas"
  }, {
    "County": "Caswell",
    "State": "North Carolina"
  }, {
    "County": "Catahoula",
    "State": "Louisiana"
  }, {
    "County": "Catano",
    "State": "Puerto Rico"
  }, {
    "County": "Catawba",
    "State": "North Carolina"
  }, {
    "County": "Catoosa",
    "State": "Georgia"
  }, {
    "County": "Catron",
    "State": "New Mexico"
  }, {
    "County": "Cattaraugus",
    "State": "New York"
  }, {
    "County": "Cavalier",
    "State": "North Dakota"
  }, {
    "County": "Cayey",
    "State": "Puerto Rico"
  }, {
    "County": "Cayuga",
    "State": "New York"
  }, {
    "County": "Cecil",
    "State": "Maryland"
  }, {
    "County": "Cedar",
    "State": "Nebraska"
  }, {
    "County": "Cedar",
    "State": "Missouri"
  }, {
    "County": "Cedar",
    "State": "Iowa"
  }, {
    "County": "Ceiba",
    "State": "Puerto Rico"
  }, {
    "County": "Centre",
    "State": "Pennsylvania"
  }, {
    "County": "Cerro Gordo",
    "State": "Iowa"
  }, {
    "County": "Chaffee",
    "State": "Colorado"
  }, {
    "County": "Chambers",
    "State": "Texas"
  }, {
    "County": "Chambers",
    "State": "Alabama"
  }, {
    "County": "Champaign",
    "State": "Illinois"
  }, {
    "County": "Champaign",
    "State": "Ohio"
  }, {
    "County": "Chariton",
    "State": "Missouri"
  }, {
    "County": "Charles",
    "State": "Maryland"
  }, {
    "County": "Charles City",
    "State": "Virginia"
  }, {
    "County": "Charles Mix",
    "State": "South Dakota"
  }, {
    "County": "Charleston",
    "State": "South Carolina"
  }, {
    "County": "Charlevoix",
    "State": "Michigan"
  }, {
    "County": "Charlotte",
    "State": "Florida"
  }, {
    "County": "Charlotte",
    "State": "Virginia"
  }, {
    "County": "Charlottesville",
    "State": "Virginia"
  }, {
    "County": "Charlton",
    "State": "Georgia"
  }, {
    "County": "Chase",
    "State": "Nebraska"
  }, {
    "County": "Chase",
    "State": "Kansas"
  }, {
    "County": "Chatham",
    "State": "Georgia"
  }, {
    "County": "Chatham",
    "State": "North Carolina"
  }, {
    "County": "Chattahoochee",
    "State": "Georgia"
  }, {
    "County": "Chattooga",
    "State": "Georgia"
  }, {
    "County": "Chautauqua",
    "State": "Kansas"
  }, {
    "County": "Chautauqua",
    "State": "New York"
  }, {
    "County": "Chaves",
    "State": "New Mexico"
  }, {
    "County": "Cheatham",
    "State": "Tennessee"
  }, {
    "County": "Cheboygan",
    "State": "Michigan"
  }, {
    "County": "Chelan",
    "State": "Washington"
  }, {
    "County": "Chemung",
    "State": "New York"
  }, {
    "County": "Chenango",
    "State": "New York"
  }, {
    "County": "Cherokee",
    "State": "Texas"
  }, {
    "County": "Cherokee",
    "State": "Kansas"
  }, {
    "County": "Cherokee",
    "State": "Oklahoma"
  }, {
    "County": "Cherokee",
    "State": "Iowa"
  }, {
    "County": "Cherokee",
    "State": "Alabama"
  }, {
    "County": "Cherokee",
    "State": "Georgia"
  }, {
    "County": "Cherokee",
    "State": "North Carolina"
  }, {
    "County": "Cherokee",
    "State": "South Carolina"
  }, {
    "County": "Cherry",
    "State": "Nebraska"
  }, {
    "County": "Chesapeake",
    "State": "Virginia"
  }, {
    "County": "Cheshire",
    "State": "New Hampshire"
  }, {
    "County": "Chester",
    "State": "Tennessee"
  }, {
    "County": "Chester",
    "State": "South Carolina"
  }, {
    "County": "Chester",
    "State": "Pennsylvania"
  }, {
    "County": "Chesterfield",
    "State": "South Carolina"
  }, {
    "County": "Chesterfield",
    "State": "Virginia"
  }, {
    "County": "Cheyenne",
    "State": "Colorado"
  }, {
    "County": "Cheyenne",
    "State": "Kansas"
  }, {
    "County": "Cheyenne",
    "State": "Nebraska"
  }, {
    "County": "Chickasaw",
    "State": "Mississippi"
  }, {
    "County": "Chickasaw",
    "State": "Iowa"
  }, {
    "County": "Chicot",
    "State": "Arkansas"
  }, {
    "County": "Childress",
    "State": "Texas"
  }, {
    "County": "Chilton",
    "State": "Alabama"
  }, {
    "County": "Chippewa",
    "State": "Minnesota"
  }, {
    "County": "Chippewa",
    "State": "Wisconsin"
  }, {
    "County": "Chippewa",
    "State": "Michigan"
  }, {
    "County": "Chisago",
    "State": "Minnesota"
  }, {
    "County": "Chittenden",
    "State": "Vermont"
  }, {
    "County": "Choctaw",
    "State": "Oklahoma"
  }, {
    "County": "Choctaw",
    "State": "Mississippi"
  }, {
    "County": "Choctaw",
    "State": "Alabama"
  }, {
    "County": "Chouteau",
    "State": "Montana"
  }, {
    "County": "Chowan",
    "State": "North Carolina"
  }, {
    "County": "Christian",
    "State": "Missouri"
  }, {
    "County": "Christian",
    "State": "Kentucky"
  }, {
    "County": "Christian",
    "State": "Illinois"
  }, {
    "County": "Churchill",
    "State": "Nevada"
  }, {
    "County": "Ciales",
    "State": "Puerto Rico"
  }, {
    "County": "Cibola",
    "State": "New Mexico"
  }, {
    "County": "Cidra",
    "State": "Puerto Rico"
  }, {
    "County": "Cimarron",
    "State": "Oklahoma"
  }, {
    "County": "Citrus",
    "State": "Florida"
  }, {
    "County": "Clackamas",
    "State": "Oregon"
  }, {
    "County": "Claiborne",
    "State": "Louisiana"
  }, {
    "County": "Claiborne",
    "State": "Mississippi"
  }, {
    "County": "Claiborne",
    "State": "Tennessee"
  }, {
    "County": "Clallam",
    "State": "Washington"
  }, {
    "County": "Clare",
    "State": "Michigan"
  }, {
    "County": "Clarendon",
    "State": "South Carolina"
  }, {
    "County": "Clarion",
    "State": "Pennsylvania"
  }, {
    "County": "Clark",
    "State": "Nevada"
  }, {
    "County": "Clark",
    "State": "Kansas"
  }, {
    "County": "Clark",
    "State": "Arkansas"
  }, {
    "County": "Clark",
    "State": "Missouri"
  }, {
    "County": "Clark",
    "State": "Illinois"
  }, {
    "County": "Clark",
    "State": "Indiana"
  }, {
    "County": "Clark",
    "State": "Kentucky"
  }, {
    "County": "Clark",
    "State": "Washington"
  }, {
    "County": "Clark",
    "State": "Idaho"
  }, {
    "County": "Clark",
    "State": "South Dakota"
  }, {
    "County": "Clark",
    "State": "Wisconsin"
  }, {
    "County": "Clark",
    "State": "Ohio"
  }, {
    "County": "Clarke",
    "State": "Alabama"
  }, {
    "County": "Clarke",
    "State": "Mississippi"
  }, {
    "County": "Clarke",
    "State": "Iowa"
  }, {
    "County": "Clarke",
    "State": "Georgia"
  }, {
    "County": "Clarke",
    "State": "Virginia"
  }, {
    "County": "Clatsop",
    "State": "Oregon"
  }, {
    "County": "Clay",
    "State": "Texas"
  }, {
    "County": "Clay",
    "State": "Kansas"
  }, {
    "County": "Clay",
    "State": "Nebraska"
  }, {
    "County": "Clay",
    "State": "Missouri"
  }, {
    "County": "Clay",
    "State": "South Dakota"
  }, {
    "County": "Clay",
    "State": "Iowa"
  }, {
    "County": "Clay",
    "State": "Arkansas"
  }, {
    "County": "Clay",
    "State": "Mississippi"
  }, {
    "County": "Clay",
    "State": "Georgia"
  }, {
    "County": "Clay",
    "State": "Alabama"
  }, {
    "County": "Clay",
    "State": "Tennessee"
  }, {
    "County": "Clay",
    "State": "Illinois"
  }, {
    "County": "Clay",
    "State": "Indiana"
  }, {
    "County": "Clay",
    "State": "Minnesota"
  }, {
    "County": "Clay",
    "State": "Florida"
  }, {
    "County": "Clay",
    "State": "North Carolina"
  }, {
    "County": "Clay",
    "State": "Kentucky"
  }, {
    "County": "Clay",
    "State": "West Virginia"
  }, {
    "County": "Clayton",
    "State": "Georgia"
  }, {
    "County": "Clayton",
    "State": "Iowa"
  }, {
    "County": "Clear Creek",
    "State": "Colorado"
  }, {
    "County": "Clearfield",
    "State": "Pennsylvania"
  }, {
    "County": "Clearwater",
    "State": "Idaho"
  }, {
    "County": "Clearwater",
    "State": "Minnesota"
  }, {
    "County": "Cleburne",
    "State": "Arkansas"
  }, {
    "County": "Cleburne",
    "State": "Alabama"
  }, {
    "County": "Clermont",
    "State": "Ohio"
  }, {
    "County": "Cleveland",
    "State": "Oklahoma"
  }, {
    "County": "Cleveland",
    "State": "Arkansas"
  }, {
    "County": "Cleveland",
    "State": "North Carolina"
  }, {
    "County": "Clinch",
    "State": "Georgia"
  }, {
    "County": "Clinton",
    "State": "Missouri"
  }, {
    "County": "Clinton",
    "State": "Kentucky"
  }, {
    "County": "Clinton",
    "State": "Illinois"
  }, {
    "County": "Clinton",
    "State": "Iowa"
  }, {
    "County": "Clinton",
    "State": "Indiana"
  }, {
    "County": "Clinton",
    "State": "Michigan"
  }, {
    "County": "Clinton",
    "State": "Ohio"
  }, {
    "County": "Clinton",
    "State": "Pennsylvania"
  }, {
    "County": "Clinton",
    "State": "New York"
  }, {
    "County": "Cloud",
    "State": "Kansas"
  }, {
    "County": "Coahoma",
    "State": "Mississippi"
  }, {
    "County": "Coal",
    "State": "Oklahoma"
  }, {
    "County": "Coamo",
    "State": "Puerto Rico"
  }, {
    "County": "Cobb",
    "State": "Georgia"
  }, {
    "County": "Cochise",
    "State": "Arizona"
  }, {
    "County": "Cochran",
    "State": "Texas"
  }, {
    "County": "Cocke",
    "State": "Tennessee"
  }, {
    "County": "Coconino",
    "State": "Arizona"
  }, {
    "County": "Codington",
    "State": "South Dakota"
  }, {
    "County": "Coffee",
    "State": "Alabama"
  }, {
    "County": "Coffee",
    "State": "Tennessee"
  }, {
    "County": "Coffee",
    "State": "Georgia"
  }, {
    "County": "Coffey",
    "State": "Kansas"
  }, {
    "County": "Coke",
    "State": "Texas"
  }, {
    "County": "Colbert",
    "State": "Alabama"
  }, {
    "County": "Cole",
    "State": "Missouri"
  }, {
    "County": "Coleman",
    "State": "Texas"
  }, {
    "County": "Coles",
    "State": "Illinois"
  }, {
    "County": "Colfax",
    "State": "New Mexico"
  }, {
    "County": "Colfax",
    "State": "Nebraska"
  }, {
    "County": "Colleton",
    "State": "South Carolina"
  }, {
    "County": "Collier",
    "State": "Florida"
  }, {
    "County": "Collin",
    "State": "Texas"
  }, {
    "County": "Collingsworth",
    "State": "Texas"
  }, {
    "County": "Colonial Heights",
    "State": "Virginia"
  }, {
    "County": "Colorado",
    "State": "Texas"
  }, {
    "County": "Colquitt",
    "State": "Georgia"
  }, {
    "County": "Columbia",
    "State": "Arkansas"
  }, {
    "County": "Columbia",
    "State": "Wisconsin"
  }, {
    "County": "Columbia",
    "State": "Oregon"
  }, {
    "County": "Columbia",
    "State": "Washington"
  }, {
    "County": "Columbia",
    "State": "Florida"
  }, {
    "County": "Columbia",
    "State": "Georgia"
  }, {
    "County": "Columbia",
    "State": "Pennsylvania"
  }, {
    "County": "Columbia",
    "State": "New York"
  }, {
    "County": "Columbiana",
    "State": "Ohio"
  }, {
    "County": "Columbus",
    "State": "North Carolina"
  }, {
    "County": "Colusa",
    "State": "California"
  }, {
    "County": "Comal",
    "State": "Texas"
  }, {
    "County": "Comanche",
    "State": "Texas"
  }, {
    "County": "Comanche",
    "State": "Oklahoma"
  }, {
    "County": "Comanche",
    "State": "Kansas"
  }, {
    "County": "Comerio",
    "State": "Puerto Rico"
  }, {
    "County": "Concho",
    "State": "Texas"
  }, {
    "County": "Concordia",
    "State": "Louisiana"
  }, {
    "County": "Conecuh",
    "State": "Alabama"
  }, {
    "County": "Conejos",
    "State": "Colorado"
  }, {
    "County": "Contra Costa",
    "State": "California"
  }, {
    "County": "Converse",
    "State": "Wyoming"
  }, {
    "County": "Conway",
    "State": "Arkansas"
  }, {
    "County": "Cook",
    "State": "Illinois"
  }, {
    "County": "Cook",
    "State": "Minnesota"
  }, {
    "County": "Cook",
    "State": "Georgia"
  }, {
    "County": "Cooke",
    "State": "Texas"
  }, {
    "County": "Cooper",
    "State": "Missouri"
  }, {
    "County": "Coos",
    "State": "Oregon"
  }, {
    "County": "Coos",
    "State": "New Hampshire"
  }, {
    "County": "Coosa",
    "State": "Alabama"
  }, {
    "County": "Copiah",
    "State": "Mississippi"
  }, {
    "County": "Corozal",
    "State": "Puerto Rico"
  }, {
    "County": "Corson",
    "State": "South Dakota"
  }, {
    "County": "Cortland",
    "State": "New York"
  }, {
    "County": "Coryell",
    "State": "Texas"
  }, {
    "County": "Coshocton",
    "State": "Ohio"
  }, {
    "County": "Costilla",
    "State": "Colorado"
  }, {
    "County": "Cottle",
    "State": "Texas"
  }, {
    "County": "Cotton",
    "State": "Oklahoma"
  }, {
    "County": "Cottonwood",
    "State": "Minnesota"
  }, {
    "County": "Covington",
    "State": "Mississippi"
  }, {
    "County": "Covington",
    "State": "Alabama"
  }, {
    "County": "Covington",
    "State": "Virginia"
  }, {
    "County": "Coweta",
    "State": "Georgia"
  }, {
    "County": "Cowley",
    "State": "Kansas"
  }, {
    "County": "Cowlitz",
    "State": "Washington"
  }, {
    "County": "Craig",
    "State": "Oklahoma"
  }, {
    "County": "Craig",
    "State": "Virginia"
  }, {
    "County": "Craighead",
    "State": "Arkansas"
  }, {
    "County": "Crane",
    "State": "Texas"
  }, {
    "County": "Craven",
    "State": "North Carolina"
  }, {
    "County": "Crawford",
    "State": "Kansas"
  }, {
    "County": "Crawford",
    "State": "Iowa"
  }, {
    "County": "Crawford",
    "State": "Arkansas"
  }, {
    "County": "Crawford",
    "State": "Georgia"
  }, {
    "County": "Crawford",
    "State": "Missouri"
  }, {
    "County": "Crawford",
    "State": "Wisconsin"
  }, {
    "County": "Crawford",
    "State": "Illinois"
  }, {
    "County": "Crawford",
    "State": "Indiana"
  }, {
    "County": "Crawford",
    "State": "Michigan"
  }, {
    "County": "Crawford",
    "State": "Ohio"
  }, {
    "County": "Crawford",
    "State": "Pennsylvania"
  }, {
    "County": "Creek",
    "State": "Oklahoma"
  }, {
    "County": "Crenshaw",
    "State": "Alabama"
  }, {
    "County": "Crisp",
    "State": "Georgia"
  }, {
    "County": "Crittenden",
    "State": "Arkansas"
  }, {
    "County": "Crittenden",
    "State": "Kentucky"
  }, {
    "County": "Crockett",
    "State": "Texas"
  }, {
    "County": "Crockett",
    "State": "Tennessee"
  }, {
    "County": "Crook",
    "State": "Oregon"
  }, {
    "County": "Crook",
    "State": "Wyoming"
  }, {
    "County": "Crosby",
    "State": "Texas"
  }, {
    "County": "Cross",
    "State": "Arkansas"
  }, {
    "County": "Crow Wing",
    "State": "Minnesota"
  }, {
    "County": "Crowley",
    "State": "Colorado"
  }, {
    "County": "Culberson",
    "State": "Texas"
  }, {
    "County": "Culebra",
    "State": "Puerto Rico"
  }, {
    "County": "Cullman",
    "State": "Alabama"
  }, {
    "County": "Culpeper",
    "State": "Virginia"
  }, {
    "County": "Cumberland",
    "State": "Kentucky"
  }, {
    "County": "Cumberland",
    "State": "Tennessee"
  }, {
    "County": "Cumberland",
    "State": "Illinois"
  }, {
    "County": "Cumberland",
    "State": "North Carolina"
  }, {
    "County": "Cumberland",
    "State": "Virginia"
  }, {
    "County": "Cumberland",
    "State": "Pennsylvania"
  }, {
    "County": "Cumberland",
    "State": "New Jersey"
  }, {
    "County": "Cumberland",
    "State": "Maine"
  }, {
    "County": "Cuming",
    "State": "Nebraska"
  }, {
    "County": "Currituck",
    "State": "North Carolina"
  }, {
    "County": "Curry",
    "State": "Oregon"
  }, {
    "County": "Curry",
    "State": "New Mexico"
  }, {
    "County": "Custer",
    "State": "Colorado"
  }, {
    "County": "Custer",
    "State": "Oklahoma"
  }, {
    "County": "Custer",
    "State": "South Dakota"
  }, {
    "County": "Custer",
    "State": "Nebraska"
  }, {
    "County": "Custer",
    "State": "Idaho"
  }, {
    "County": "Custer",
    "State": "Montana"
  }, {
    "County": "Cuyahoga",
    "State": "Ohio"
  }, {
    "County": "Dade",
    "State": "Georgia"
  }, {
    "County": "Dade",
    "State": "Missouri"
  }, {
    "County": "Daggett",
    "State": "Utah"
  }, {
    "County": "Dakota",
    "State": "Nebraska"
  }, {
    "County": "Dakota",
    "State": "Minnesota"
  }, {
    "County": "Dale",
    "State": "Alabama"
  }, {
    "County": "Dallam",
    "State": "Texas"
  }, {
    "County": "Dallas",
    "State": "Texas"
  }, {
    "County": "Dallas",
    "State": "Arkansas"
  }, {
    "County": "Dallas",
    "State": "Alabama"
  }, {
    "County": "Dallas",
    "State": "Missouri"
  }, {
    "County": "Dallas",
    "State": "Iowa"
  }, {
    "County": "Dane",
    "State": "Wisconsin"
  }, {
    "County": "Daniels",
    "State": "Montana"
  }, {
    "County": "Danville",
    "State": "Virginia"
  }, {
    "County": "Dare",
    "State": "North Carolina"
  }, {
    "County": "Darke",
    "State": "Ohio"
  }, {
    "County": "Darlington",
    "State": "South Carolina"
  }, {
    "County": "Dauphin",
    "State": "Pennsylvania"
  }, {
    "County": "Davidson",
    "State": "Tennessee"
  }, {
    "County": "Davidson",
    "State": "North Carolina"
  }, {
    "County": "Davie",
    "State": "North Carolina"
  }, {
    "County": "Daviess",
    "State": "Missouri"
  }, {
    "County": "Daviess",
    "State": "Kentucky"
  }, {
    "County": "Daviess",
    "State": "Indiana"
  }, {
    "County": "Davis",
    "State": "Utah"
  }, {
    "County": "Davis",
    "State": "Iowa"
  }, {
    "County": "Davison",
    "State": "South Dakota"
  }, {
    "County": "Dawes",
    "State": "Nebraska"
  }, {
    "County": "Dawson",
    "State": "Texas"
  }, {
    "County": "Dawson",
    "State": "Nebraska"
  }, {
    "County": "Dawson",
    "State": "Georgia"
  }, {
    "County": "Dawson",
    "State": "Montana"
  }, {
    "County": "Day",
    "State": "South Dakota"
  }, {
    "County": "De Baca",
    "State": "New Mexico"
  }, {
    "County": "De Soto",
    "State": "Louisiana"
  }, {
    "County": "De Witt",
    "State": "Illinois"
  }, {
    "County": "Deaf Smith",
    "State": "Texas"
  }, {
    "County": "Dearborn",
    "State": "Indiana"
  }, {
    "County": "Decatur",
    "State": "Georgia"
  }, {
    "County": "Decatur",
    "State": "Kansas"
  }, {
    "County": "Decatur",
    "State": "Tennessee"
  }, {
    "County": "Decatur",
    "State": "Iowa"
  }, {
    "County": "Decatur",
    "State": "Indiana"
  }, {
    "County": "Deer Lodge",
    "State": "Montana"
  }, {
    "County": "Defiance",
    "State": "Ohio"
  }, {
    "County": "DeKalb",
    "State": "Missouri"
  }, {
    "County": "DeKalb",
    "State": "Georgia"
  }, {
    "County": "DeKalb",
    "State": "Alabama"
  }, {
    "County": "DeKalb",
    "State": "Tennessee"
  }, {
    "County": "DeKalb",
    "State": "Illinois"
  }, {
    "County": "DeKalb",
    "State": "Indiana"
  }, {
    "County": "Del Norte",
    "State": "California"
  }, {
    "County": "Delaware",
    "State": "Oklahoma"
  }, {
    "County": "Delaware",
    "State": "Iowa"
  }, {
    "County": "Delaware",
    "State": "Indiana"
  }, {
    "County": "Delaware",
    "State": "Ohio"
  }, {
    "County": "Delaware",
    "State": "Pennsylvania"
  }, {
    "County": "Delaware",
    "State": "New York"
  }, {
    "County": "Delta",
    "State": "Colorado"
  }, {
    "County": "Delta",
    "State": "Texas"
  }, {
    "County": "Delta",
    "State": "Michigan"
  }, {
    "County": "Denali",
    "State": "Alaska"
  }, {
    "County": "Dent",
    "State": "Missouri"
  }, {
    "County": "Denton",
    "State": "Texas"
  }, {
    "County": "Denver",
    "State": "Colorado"
  }, {
    "County": "Des Moines",
    "State": "Iowa"
  }, {
    "County": "Deschutes",
    "State": "Oregon"
  }, {
    "County": "Desha",
    "State": "Arkansas"
  }, {
    "County": "DeSoto",
    "State": "Mississippi"
  }, {
    "County": "DeSoto",
    "State": "Florida"
  }, {
    "County": "Deuel",
    "State": "Nebraska"
  }, {
    "County": "Deuel",
    "State": "South Dakota"
  }, {
    "County": "Dewey",
    "State": "Oklahoma"
  }, {
    "County": "Dewey",
    "State": "South Dakota"
  }, {
    "County": "DeWitt",
    "State": "Texas"
  }, {
    "County": "Dickens",
    "State": "Texas"
  }, {
    "County": "Dickenson",
    "State": "Virginia"
  }, {
    "County": "Dickey",
    "State": "North Dakota"
  }, {
    "County": "Dickinson",
    "State": "Kansas"
  }, {
    "County": "Dickinson",
    "State": "Iowa"
  }, {
    "County": "Dickinson",
    "State": "Michigan"
  }, {
    "County": "Dickson",
    "State": "Tennessee"
  }, {
    "County": "Dillingham",
    "State": "Alaska"
  }, {
    "County": "Dillon",
    "State": "South Carolina"
  }, {
    "County": "Dimmit",
    "State": "Texas"
  }, {
    "County": "Dinwiddie",
    "State": "Virginia"
  }, {
    "County": "District of Columbia",
    "State": "District of Columbia"
  }, {
    "County": "Divide",
    "State": "North Dakota"
  }, {
    "County": "Dixie",
    "State": "Florida"
  }, {
    "County": "Dixon",
    "State": "Nebraska"
  }, {
    "County": "Doddridge",
    "State": "West Virginia"
  }, {
    "County": "Dodge",
    "State": "Nebraska"
  }, {
    "County": "Dodge",
    "State": "Wisconsin"
  }, {
    "County": "Dodge",
    "State": "Minnesota"
  }, {
    "County": "Dodge",
    "State": "Georgia"
  }, {
    "County": "Dolores",
    "State": "Colorado"
  }, {
    "County": "Dona Ana",
    "State": "New Mexico"
  }, {
    "County": "Doniphan",
    "State": "Kansas"
  }, {
    "County": "Donley",
    "State": "Texas"
  }, {
    "County": "Dooly",
    "State": "Georgia"
  }, {
    "County": "Door",
    "State": "Wisconsin"
  }, {
    "County": "Dorado",
    "State": "Puerto Rico"
  }, {
    "County": "Dorchester",
    "State": "South Carolina"
  }, {
    "County": "Dorchester",
    "State": "Maryland"
  }, {
    "County": "Dougherty",
    "State": "Georgia"
  }, {
    "County": "Douglas",
    "State": "Oregon"
  }, {
    "County": "Douglas",
    "State": "Nevada"
  }, {
    "County": "Douglas",
    "State": "Colorado"
  }, {
    "County": "Douglas",
    "State": "Kansas"
  }, {
    "County": "Douglas",
    "State": "South Dakota"
  }, {
    "County": "Douglas",
    "State": "Nebraska"
  }, {
    "County": "Douglas",
    "State": "Missouri"
  }, {
    "County": "Douglas",
    "State": "Georgia"
  }, {
    "County": "Douglas",
    "State": "Illinois"
  }, {
    "County": "Douglas",
    "State": "Washington"
  }, {
    "County": "Douglas",
    "State": "Minnesota"
  }, {
    "County": "Douglas",
    "State": "Wisconsin"
  }, {
    "County": "Drew",
    "State": "Arkansas"
  }, {
    "County": "Dubois",
    "State": "Indiana"
  }, {
    "County": "Dubuque",
    "State": "Iowa"
  }, {
    "County": "Duchesne",
    "State": "Utah"
  }, {
    "County": "Dukes",
    "State": "Massachusetts"
  }, {
    "County": "Dundy",
    "State": "Nebraska"
  }, {
    "County": "Dunklin",
    "State": "Missouri"
  }, {
    "County": "Dunn",
    "State": "North Dakota"
  }, {
    "County": "Dunn",
    "State": "Wisconsin"
  }, {
    "County": "DuPage",
    "State": "Illinois"
  }, {
    "County": "Duplin",
    "State": "North Carolina"
  }, {
    "County": "Durham",
    "State": "North Carolina"
  }, {
    "County": "Dutchess",
    "State": "New York"
  }, {
    "County": "Duval",
    "State": "Texas"
  }, {
    "County": "Duval",
    "State": "Florida"
  }, {
    "County": "Dyer",
    "State": "Tennessee"
  }, {
    "County": "Eagle",
    "State": "Colorado"
  }, {
    "County": "Early",
    "State": "Georgia"
  }, {
    "County": "East Baton Rouge",
    "State": "Louisiana"
  }, {
    "County": "East Carroll",
    "State": "Louisiana"
  }, {
    "County": "East Feliciana",
    "State": "Louisiana"
  }, {
    "County": "Eastland",
    "State": "Texas"
  }, {
    "County": "Eaton",
    "State": "Michigan"
  }, {
    "County": "Eau Claire",
    "State": "Wisconsin"
  }, {
    "County": "Echols",
    "State": "Georgia"
  }, {
    "County": "Ector",
    "State": "Texas"
  }, {
    "County": "Eddy",
    "State": "New Mexico"
  }, {
    "County": "Eddy",
    "State": "North Dakota"
  }, {
    "County": "Edgar",
    "State": "Illinois"
  }, {
    "County": "Edgecombe",
    "State": "North Carolina"
  }, {
    "County": "Edgefield",
    "State": "South Carolina"
  }, {
    "County": "Edmonson",
    "State": "Kentucky"
  }, {
    "County": "Edmunds",
    "State": "South Dakota"
  }, {
    "County": "Edwards",
    "State": "Texas"
  }, {
    "County": "Edwards",
    "State": "Kansas"
  }, {
    "County": "Edwards",
    "State": "Illinois"
  }, {
    "County": "Effingham",
    "State": "Illinois"
  }, {
    "County": "Effingham",
    "State": "Georgia"
  }, {
    "County": "El Dorado",
    "State": "California"
  }, {
    "County": "El Paso",
    "State": "Texas"
  }, {
    "County": "El Paso",
    "State": "Colorado"
  }, {
    "County": "Elbert",
    "State": "Colorado"
  }, {
    "County": "Elbert",
    "State": "Georgia"
  }, {
    "County": "Elk",
    "State": "Kansas"
  }, {
    "County": "Elk",
    "State": "Pennsylvania"
  }, {
    "County": "Elkhart",
    "State": "Indiana"
  }, {
    "County": "Elko",
    "State": "Nevada"
  }, {
    "County": "Elliott",
    "State": "Kentucky"
  }, {
    "County": "Ellis",
    "State": "Oklahoma"
  }, {
    "County": "Ellis",
    "State": "Texas"
  }, {
    "County": "Ellis",
    "State": "Kansas"
  }, {
    "County": "Ellsworth",
    "State": "Kansas"
  }, {
    "County": "Elmore",
    "State": "Idaho"
  }, {
    "County": "Elmore",
    "State": "Alabama"
  }, {
    "County": "Emanuel",
    "State": "Georgia"
  }, {
    "County": "Emery",
    "State": "Utah"
  }, {
    "County": "Emmet",
    "State": "Iowa"
  }, {
    "County": "Emmet",
    "State": "Michigan"
  }, {
    "County": "Emmons",
    "State": "North Dakota"
  }, {
    "County": "Emporia",
    "State": "Virginia"
  }, {
    "County": "Erath",
    "State": "Texas"
  }, {
    "County": "Erie",
    "State": "Ohio"
  }, {
    "County": "Erie",
    "State": "Pennsylvania"
  }, {
    "County": "Erie",
    "State": "New York"
  }, {
    "County": "Escambia",
    "State": "Florida"
  }, {
    "County": "Escambia",
    "State": "Alabama"
  }, {
    "County": "Esmeralda",
    "State": "Nevada"
  }, {
    "County": "Essex",
    "State": "Virginia"
  }, {
    "County": "Essex",
    "State": "New Jersey"
  }, {
    "County": "Essex",
    "State": "Massachusetts"
  }, {
    "County": "Essex",
    "State": "New York"
  }, {
    "County": "Essex",
    "State": "Vermont"
  }, {
    "County": "Estill",
    "State": "Kentucky"
  }, {
    "County": "Etowah",
    "State": "Alabama"
  }, {
    "County": "Eureka",
    "State": "Nevada"
  }, {
    "County": "Evangeline",
    "State": "Louisiana"
  }, {
    "County": "Evans",
    "State": "Georgia"
  }, {
    "County": "Fairbanks North Star",
    "State": "Alaska"
  }, {
    "County": "Fairfax City",
    "State": "Virginia"
  }, {
    "County": "Fairfax County",
    "State": "Virginia"
  }, {
    "County": "Fairfield",
    "State": "South Carolina"
  }, {
    "County": "Fairfield",
    "State": "Ohio"
  }, {
    "County": "Fairfield",
    "State": "Connecticut"
  }, {
    "County": "Fajardo",
    "State": "Puerto Rico"
  }, {
    "County": "Fall River",
    "State": "South Dakota"
  }, {
    "County": "Fallon",
    "State": "Montana"
  }, {
    "County": "Falls",
    "State": "Texas"
  }, {
    "County": "Falls Church",
    "State": "Virginia"
  }, {
    "County": "Fannin",
    "State": "Texas"
  }, {
    "County": "Fannin",
    "State": "Georgia"
  }, {
    "County": "Faribault",
    "State": "Minnesota"
  }, {
    "County": "Faulk",
    "State": "South Dakota"
  }, {
    "County": "Faulkner",
    "State": "Arkansas"
  }, {
    "County": "Fauquier",
    "State": "Virginia"
  }, {
    "County": "Fayette",
    "State": "Texas"
  }, {
    "County": "Fayette",
    "State": "Tennessee"
  }, {
    "County": "Fayette",
    "State": "Alabama"
  }, {
    "County": "Fayette",
    "State": "Georgia"
  }, {
    "County": "Fayette",
    "State": "Iowa"
  }, {
    "County": "Fayette",
    "State": "Illinois"
  }, {
    "County": "Fayette",
    "State": "Kentucky"
  }, {
    "County": "Fayette",
    "State": "Indiana"
  }, {
    "County": "Fayette",
    "State": "Ohio"
  }, {
    "County": "Fayette",
    "State": "West Virginia"
  }, {
    "County": "Fayette",
    "State": "Pennsylvania"
  }, {
    "County": "Fentress",
    "State": "Tennessee"
  }, {
    "County": "Fergus",
    "State": "Montana"
  }, {
    "County": "Ferry",
    "State": "Washington"
  }, {
    "County": "Fillmore",
    "State": "Nebraska"
  }, {
    "County": "Fillmore",
    "State": "Minnesota"
  }, {
    "County": "Finney",
    "State": "Kansas"
  }, {
    "County": "Fisher",
    "State": "Texas"
  }, {
    "County": "Flagler",
    "State": "Florida"
  }, {
    "County": "Flathead",
    "State": "Montana"
  }, {
    "County": "Fleming",
    "State": "Kentucky"
  }, {
    "County": "Florence",
    "State": "Wisconsin"
  }, {
    "County": "Florence",
    "State": "South Carolina"
  }, {
    "County": "Florida",
    "State": "Puerto Rico"
  }, {
    "County": "Floyd",
    "State": "Texas"
  }, {
    "County": "Floyd",
    "State": "Georgia"
  }, {
    "County": "Floyd",
    "State": "Iowa"
  }, {
    "County": "Floyd",
    "State": "Indiana"
  }, {
    "County": "Floyd",
    "State": "Virginia"
  }, {
    "County": "Floyd",
    "State": "Kentucky"
  }, {
    "County": "Fluvanna",
    "State": "Virginia"
  }, {
    "County": "Foard",
    "State": "Texas"
  }, {
    "County": "Fond du Lac",
    "State": "Wisconsin"
  }, {
    "County": "Ford",
    "State": "Kansas"
  }, {
    "County": "Ford",
    "State": "Illinois"
  }, {
    "County": "Forest",
    "State": "Wisconsin"
  }, {
    "County": "Forest",
    "State": "Pennsylvania"
  }, {
    "County": "Forrest",
    "State": "Mississippi"
  }, {
    "County": "Forsyth",
    "State": "Georgia"
  }, {
    "County": "Forsyth",
    "State": "North Carolina"
  }, {
    "County": "Fort Bend",
    "State": "Texas"
  }, {
    "County": "Foster",
    "State": "North Dakota"
  }, {
    "County": "Fountain",
    "State": "Indiana"
  }, {
    "County": "Franklin",
    "State": "Idaho"
  }, {
    "County": "Franklin",
    "State": "Florida"
  }, {
    "County": "Franklin",
    "State": "Texas"
  }, {
    "County": "Franklin",
    "State": "Nebraska"
  }, {
    "County": "Franklin",
    "State": "Kansas"
  }, {
    "County": "Franklin",
    "State": "Mississippi"
  }, {
    "County": "Franklin",
    "State": "Louisiana"
  }, {
    "County": "Franklin",
    "State": "Arkansas"
  }, {
    "County": "Franklin",
    "State": "Alabama"
  }, {
    "County": "Franklin",
    "State": "Tennessee"
  }, {
    "County": "Franklin",
    "State": "Missouri"
  }, {
    "County": "Franklin",
    "State": "Iowa"
  }, {
    "County": "Franklin",
    "State": "Illinois"
  }, {
    "County": "Franklin",
    "State": "Kentucky"
  }, {
    "County": "Franklin",
    "State": "Indiana"
  }, {
    "County": "Franklin",
    "State": "Washington"
  }, {
    "County": "Franklin",
    "State": "Georgia"
  }, {
    "County": "Franklin",
    "State": "North Carolina"
  }, {
    "County": "Franklin",
    "State": "Ohio"
  }, {
    "County": "Franklin",
    "State": "Pennsylvania"
  }, {
    "County": "Franklin",
    "State": "Massachusetts"
  }, {
    "County": "Franklin",
    "State": "New York"
  }, {
    "County": "Franklin",
    "State": "Vermont"
  }, {
    "County": "Franklin",
    "State": "Maine"
  }, {
    "County": "Franklin City",
    "State": "Virginia"
  }, {
    "County": "Franklin County",
    "State": "Virginia"
  }, {
    "County": "Frederick",
    "State": "Virginia"
  }, {
    "County": "Frederick",
    "State": "Maryland"
  }, {
    "County": "Fredericksburg",
    "State": "Virginia"
  }, {
    "County": "Freeborn",
    "State": "Minnesota"
  }, {
    "County": "Freestone",
    "State": "Texas"
  }, {
    "County": "Fremont",
    "State": "Colorado"
  }, {
    "County": "Fremont",
    "State": "Wyoming"
  }, {
    "County": "Fremont",
    "State": "Iowa"
  }, {
    "County": "Fremont",
    "State": "Idaho"
  }, {
    "County": "Fresno",
    "State": "California"
  }, {
    "County": "Frio",
    "State": "Texas"
  }, {
    "County": "Frontier",
    "State": "Nebraska"
  }, {
    "County": "Fulton",
    "State": "Arkansas"
  }, {
    "County": "Fulton",
    "State": "Kentucky"
  }, {
    "County": "Fulton",
    "State": "Georgia"
  }, {
    "County": "Fulton",
    "State": "Illinois"
  }, {
    "County": "Fulton",
    "State": "Indiana"
  }, {
    "County": "Fulton",
    "State": "Ohio"
  }, {
    "County": "Fulton",
    "State": "Pennsylvania"
  }, {
    "County": "Fulton",
    "State": "New York"
  }, {
    "County": "Furnas",
    "State": "Nebraska"
  }, {
    "County": "Gadsden",
    "State": "Florida"
  }, {
    "County": "Gage",
    "State": "Nebraska"
  }, {
    "County": "Gaines",
    "State": "Texas"
  }, {
    "County": "Galax",
    "State": "Virginia"
  }, {
    "County": "Gallatin",
    "State": "Illinois"
  }, {
    "County": "Gallatin",
    "State": "Kentucky"
  }, {
    "County": "Gallatin",
    "State": "Montana"
  }, {
    "County": "Gallia",
    "State": "Ohio"
  }, {
    "County": "Galveston",
    "State": "Texas"
  }, {
    "County": "Garden",
    "State": "Nebraska"
  }, {
    "County": "Garfield",
    "State": "Utah"
  }, {
    "County": "Garfield",
    "State": "Colorado"
  }, {
    "County": "Garfield",
    "State": "Oklahoma"
  }, {
    "County": "Garfield",
    "State": "Nebraska"
  }, {
    "County": "Garfield",
    "State": "Washington"
  }, {
    "County": "Garfield",
    "State": "Montana"
  }, {
    "County": "Garland",
    "State": "Arkansas"
  }, {
    "County": "Garrard",
    "State": "Kentucky"
  }, {
    "County": "Garrett",
    "State": "Maryland"
  }, {
    "County": "Garvin",
    "State": "Oklahoma"
  }, {
    "County": "Garza",
    "State": "Texas"
  }, {
    "County": "Gasconade",
    "State": "Missouri"
  }, {
    "County": "Gaston",
    "State": "North Carolina"
  }, {
    "County": "Gates",
    "State": "North Carolina"
  }, {
    "County": "Geary",
    "State": "Kansas"
  }, {
    "County": "Geauga",
    "State": "Ohio"
  }, {
    "County": "Gem",
    "State": "Idaho"
  }, {
    "County": "Genesee",
    "State": "Michigan"
  }, {
    "County": "Genesee",
    "State": "New York"
  }, {
    "County": "Geneva",
    "State": "Alabama"
  }, {
    "County": "Gentry",
    "State": "Missouri"
  }, {
    "County": "George",
    "State": "Mississippi"
  }, {
    "County": "Georgetown",
    "State": "South Carolina"
  }, {
    "County": "Gibson",
    "State": "Tennessee"
  }, {
    "County": "Gibson",
    "State": "Indiana"
  }, {
    "County": "Gila",
    "State": "Arizona"
  }, {
    "County": "Gilchrist",
    "State": "Florida"
  }, {
    "County": "Giles",
    "State": "Tennessee"
  }, {
    "County": "Giles",
    "State": "Virginia"
  }, {
    "County": "Gillespie",
    "State": "Texas"
  }, {
    "County": "Gilliam",
    "State": "Oregon"
  }, {
    "County": "Gilmer",
    "State": "Georgia"
  }, {
    "County": "Gilmer",
    "State": "West Virginia"
  }, {
    "County": "Gilpin",
    "State": "Colorado"
  }, {
    "County": "Glacier",
    "State": "Montana"
  }, {
    "County": "Glades",
    "State": "Florida"
  }, {
    "County": "Gladwin",
    "State": "Michigan"
  }, {
    "County": "Glascock",
    "State": "Georgia"
  }, {
    "County": "Glasscock",
    "State": "Texas"
  }, {
    "County": "Glenn",
    "State": "California"
  }, {
    "County": "Gloucester",
    "State": "Virginia"
  }, {
    "County": "Gloucester",
    "State": "New Jersey"
  }, {
    "County": "Glynn",
    "State": "Georgia"
  }, {
    "County": "Gogebic",
    "State": "Michigan"
  }, {
    "County": "Golden Valley",
    "State": "Montana"
  }, {
    "County": "Golden Valley",
    "State": "North Dakota"
  }, {
    "County": "Goliad",
    "State": "Texas"
  }, {
    "County": "Gonzales",
    "State": "Texas"
  }, {
    "County": "Goochland",
    "State": "Virginia"
  }, {
    "County": "Goodhue",
    "State": "Minnesota"
  }, {
    "County": "Gooding",
    "State": "Idaho"
  }, {
    "County": "Gordon",
    "State": "Georgia"
  }, {
    "County": "Goshen",
    "State": "Wyoming"
  }, {
    "County": "Gosper",
    "State": "Nebraska"
  }, {
    "County": "Gove",
    "State": "Kansas"
  }, {
    "County": "Grady",
    "State": "Georgia"
  }, {
    "County": "Grady",
    "State": "Oklahoma"
  }, {
    "County": "Grafton",
    "State": "New Hampshire"
  }, {
    "County": "Graham",
    "State": "Arizona"
  }, {
    "County": "Graham",
    "State": "Kansas"
  }, {
    "County": "Graham",
    "State": "North Carolina"
  }, {
    "County": "Grainger",
    "State": "Tennessee"
  }, {
    "County": "Grand",
    "State": "Utah"
  }, {
    "County": "Grand",
    "State": "Colorado"
  }, {
    "County": "Grand Forks",
    "State": "North Dakota"
  }, {
    "County": "Grand Isle",
    "State": "Vermont"
  }, {
    "County": "Grand Traverse",
    "State": "Michigan"
  }, {
    "County": "Granite",
    "State": "Montana"
  }, {
    "County": "Grant",
    "State": "New Mexico"
  }, {
    "County": "Grant",
    "State": "Oklahoma"
  }, {
    "County": "Grant",
    "State": "Kansas"
  }, {
    "County": "Grant",
    "State": "Nebraska"
  }, {
    "County": "Grant",
    "State": "Louisiana"
  }, {
    "County": "Grant",
    "State": "Arkansas"
  }, {
    "County": "Grant",
    "State": "Wisconsin"
  }, {
    "County": "Grant",
    "State": "Kentucky"
  }, {
    "County": "Grant",
    "State": "Indiana"
  }, {
    "County": "Grant",
    "State": "Oregon"
  }, {
    "County": "Grant",
    "State": "Washington"
  }, {
    "County": "Grant",
    "State": "North Dakota"
  }, {
    "County": "Grant",
    "State": "South Dakota"
  }, {
    "County": "Grant",
    "State": "Minnesota"
  }, {
    "County": "Grant",
    "State": "West Virginia"
  }, {
    "County": "Granville",
    "State": "North Carolina"
  }, {
    "County": "Gratiot",
    "State": "Michigan"
  }, {
    "County": "Graves",
    "State": "Kentucky"
  }, {
    "County": "Gray",
    "State": "Texas"
  }, {
    "County": "Gray",
    "State": "Kansas"
  }, {
    "County": "Grays Harbor",
    "State": "Washington"
  }, {
    "County": "Grayson",
    "State": "Texas"
  }, {
    "County": "Grayson",
    "State": "Kentucky"
  }, {
    "County": "Grayson",
    "State": "Virginia"
  }, {
    "County": "Greeley",
    "State": "Kansas"
  }, {
    "County": "Greeley",
    "State": "Nebraska"
  }, {
    "County": "Green",
    "State": "Kentucky"
  }, {
    "County": "Green",
    "State": "Wisconsin"
  }, {
    "County": "Green Lake",
    "State": "Wisconsin"
  }, {
    "County": "Greenbrier",
    "State": "West Virginia"
  }, {
    "County": "Greene",
    "State": "Iowa"
  }, {
    "County": "Greene",
    "State": "Missouri"
  }, {
    "County": "Greene",
    "State": "Arkansas"
  }, {
    "County": "Greene",
    "State": "Mississippi"
  }, {
    "County": "Greene",
    "State": "Alabama"
  }, {
    "County": "Greene",
    "State": "Illinois"
  }, {
    "County": "Greene",
    "State": "Indiana"
  }, {
    "County": "Greene",
    "State": "Ohio"
  }, {
    "County": "Greene",
    "State": "Georgia"
  }, {
    "County": "Greene",
    "State": "Tennessee"
  }, {
    "County": "Greene",
    "State": "North Carolina"
  }, {
    "County": "Greene",
    "State": "Pennsylvania"
  }, {
    "County": "Greene",
    "State": "Virginia"
  }, {
    "County": "Greene",
    "State": "New York"
  }, {
    "County": "Greenlee",
    "State": "Arizona"
  }, {
    "County": "Greensville",
    "State": "Virginia"
  }, {
    "County": "Greenup",
    "State": "Kentucky"
  }, {
    "County": "Greenville",
    "State": "South Carolina"
  }, {
    "County": "Greenwood",
    "State": "Kansas"
  }, {
    "County": "Greenwood",
    "State": "South Carolina"
  }, {
    "County": "Greer",
    "State": "Oklahoma"
  }, {
    "County": "Gregg",
    "State": "Texas"
  }, {
    "County": "Gregory",
    "State": "South Dakota"
  }, {
    "County": "Grenada",
    "State": "Mississippi"
  }, {
    "County": "Griggs",
    "State": "North Dakota"
  }, {
    "County": "Grimes",
    "State": "Texas"
  }, {
    "County": "Grundy",
    "State": "Tennessee"
  }, {
    "County": "Grundy",
    "State": "Missouri"
  }, {
    "County": "Grundy",
    "State": "Iowa"
  }, {
    "County": "Grundy",
    "State": "Illinois"
  }, {
    "County": "Guadalupe",
    "State": "Texas"
  }, {
    "County": "Guadalupe",
    "State": "New Mexico"
  }, {
    "County": "Guanica",
    "State": "Puerto Rico"
  }, {
    "County": "Guayama",
    "State": "Puerto Rico"
  }, {
    "County": "Guayanilla",
    "State": "Puerto Rico"
  }, {
    "County": "Guaynabo",
    "State": "Puerto Rico"
  }, {
    "County": "Guernsey",
    "State": "Ohio"
  }, {
    "County": "Guilford",
    "State": "North Carolina"
  }, {
    "County": "Gulf",
    "State": "Florida"
  }, {
    "County": "Gunnison",
    "State": "Colorado"
  }, {
    "County": "Gurabo",
    "State": "Puerto Rico"
  }, {
    "County": "Guthrie",
    "State": "Iowa"
  }, {
    "County": "Gwinnett",
    "State": "Georgia"
  }, {
    "County": "Haakon",
    "State": "South Dakota"
  }, {
    "County": "Habersham",
    "State": "Georgia"
  }, {
    "County": "Haines",
    "State": "Alaska"
  }, {
    "County": "Hale",
    "State": "Texas"
  }, {
    "County": "Hale",
    "State": "Alabama"
  }, {
    "County": "Halifax",
    "State": "Virginia"
  }, {
    "County": "Halifax",
    "State": "North Carolina"
  }, {
    "County": "Hall",
    "State": "Texas"
  }, {
    "County": "Hall",
    "State": "Nebraska"
  }, {
    "County": "Hall",
    "State": "Georgia"
  }, {
    "County": "Hamblen",
    "State": "Tennessee"
  }, {
    "County": "Hamilton",
    "State": "Texas"
  }, {
    "County": "Hamilton",
    "State": "Kansas"
  }, {
    "County": "Hamilton",
    "State": "Nebraska"
  }, {
    "County": "Hamilton",
    "State": "Tennessee"
  }, {
    "County": "Hamilton",
    "State": "Iowa"
  }, {
    "County": "Hamilton",
    "State": "Illinois"
  }, {
    "County": "Hamilton",
    "State": "Indiana"
  }, {
    "County": "Hamilton",
    "State": "Ohio"
  }, {
    "County": "Hamilton",
    "State": "Florida"
  }, {
    "County": "Hamilton",
    "State": "New York"
  }, {
    "County": "Hamlin",
    "State": "South Dakota"
  }, {
    "County": "Hampden",
    "State": "Massachusetts"
  }, {
    "County": "Hampshire",
    "State": "West Virginia"
  }, {
    "County": "Hampshire",
    "State": "Massachusetts"
  }, {
    "County": "Hampton",
    "State": "South Carolina"
  }, {
    "County": "Hampton",
    "State": "Virginia"
  }, {
    "County": "Hancock",
    "State": "Mississippi"
  }, {
    "County": "Hancock",
    "State": "Illinois"
  }, {
    "County": "Hancock",
    "State": "Iowa"
  }, {
    "County": "Hancock",
    "State": "Kentucky"
  }, {
    "County": "Hancock",
    "State": "Indiana"
  }, {
    "County": "Hancock",
    "State": "Georgia"
  }, {
    "County": "Hancock",
    "State": "Tennessee"
  }, {
    "County": "Hancock",
    "State": "West Virginia"
  }, {
    "County": "Hancock",
    "State": "Ohio"
  }, {
    "County": "Hancock",
    "State": "Maine"
  }, {
    "County": "Hand",
    "State": "South Dakota"
  }, {
    "County": "Hanover",
    "State": "Virginia"
  }, {
    "County": "Hansford",
    "State": "Texas"
  }, {
    "County": "Hanson",
    "State": "South Dakota"
  }, {
    "County": "Haralson",
    "State": "Georgia"
  }, {
    "County": "Hardee",
    "State": "Florida"
  }, {
    "County": "Hardeman",
    "State": "Texas"
  }, {
    "County": "Hardeman",
    "State": "Tennessee"
  }, {
    "County": "Hardin",
    "State": "Texas"
  }, {
    "County": "Hardin",
    "State": "Tennessee"
  }, {
    "County": "Hardin",
    "State": "Iowa"
  }, {
    "County": "Hardin",
    "State": "Illinois"
  }, {
    "County": "Hardin",
    "State": "Kentucky"
  }, {
    "County": "Hardin",
    "State": "Ohio"
  }, {
    "County": "Harding",
    "State": "New Mexico"
  }, {
    "County": "Harding",
    "State": "South Dakota"
  }, {
    "County": "Hardy",
    "State": "West Virginia"
  }, {
    "County": "Harford",
    "State": "Maryland"
  }, {
    "County": "Harlan",
    "State": "Nebraska"
  }, {
    "County": "Harlan",
    "State": "Kentucky"
  }, {
    "County": "Harmon",
    "State": "Oklahoma"
  }, {
    "County": "Harnett",
    "State": "North Carolina"
  }, {
    "County": "Harney",
    "State": "Oregon"
  }, {
    "County": "Harper",
    "State": "Oklahoma"
  }, {
    "County": "Harper",
    "State": "Kansas"
  }, {
    "County": "Harris",
    "State": "Texas"
  }, {
    "County": "Harris",
    "State": "Georgia"
  }, {
    "County": "Harrison",
    "State": "Mississippi"
  }, {
    "County": "Harrison",
    "State": "Texas"
  }, {
    "County": "Harrison",
    "State": "Iowa"
  }, {
    "County": "Harrison",
    "State": "Missouri"
  }, {
    "County": "Harrison",
    "State": "Indiana"
  }, {
    "County": "Harrison",
    "State": "Kentucky"
  }, {
    "County": "Harrison",
    "State": "West Virginia"
  }, {
    "County": "Harrison",
    "State": "Ohio"
  }, {
    "County": "Harrisonburg",
    "State": "Virginia"
  }, {
    "County": "Hart",
    "State": "Kentucky"
  }, {
    "County": "Hart",
    "State": "Georgia"
  }, {
    "County": "Hartford",
    "State": "Connecticut"
  }, {
    "County": "Hartley",
    "State": "Texas"
  }, {
    "County": "Harvey",
    "State": "Kansas"
  }, {
    "County": "Haskell",
    "State": "Texas"
  }, {
    "County": "Haskell",
    "State": "Oklahoma"
  }, {
    "County": "Haskell",
    "State": "Kansas"
  }, {
    "County": "Hatillo",
    "State": "Puerto Rico"
  }, {
    "County": "Hawaii",
    "State": "Hawaii"
  }, {
    "County": "Hawkins",
    "State": "Tennessee"
  }, {
    "County": "Hayes",
    "State": "Nebraska"
  }, {
    "County": "Hays",
    "State": "Texas"
  }, {
    "County": "Haywood",
    "State": "Tennessee"
  }, {
    "County": "Haywood",
    "State": "North Carolina"
  }, {
    "County": "Heard",
    "State": "Georgia"
  }, {
    "County": "Hemphill",
    "State": "Texas"
  }, {
    "County": "Hempstead",
    "State": "Arkansas"
  }, {
    "County": "Henderson",
    "State": "Texas"
  }, {
    "County": "Henderson",
    "State": "Tennessee"
  }, {
    "County": "Henderson",
    "State": "Illinois"
  }, {
    "County": "Henderson",
    "State": "Kentucky"
  }, {
    "County": "Henderson",
    "State": "North Carolina"
  }, {
    "County": "Hendricks",
    "State": "Indiana"
  }, {
    "County": "Hendry",
    "State": "Florida"
  }, {
    "County": "Hennepin",
    "State": "Minnesota"
  }, {
    "County": "Henrico",
    "State": "Virginia"
  }, {
    "County": "Henry",
    "State": "Alabama"
  }, {
    "County": "Henry",
    "State": "Georgia"
  }, {
    "County": "Henry",
    "State": "Tennessee"
  }, {
    "County": "Henry",
    "State": "Missouri"
  }, {
    "County": "Henry",
    "State": "Iowa"
  }, {
    "County": "Henry",
    "State": "Illinois"
  }, {
    "County": "Henry",
    "State": "Kentucky"
  }, {
    "County": "Henry",
    "State": "Indiana"
  }, {
    "County": "Henry",
    "State": "Ohio"
  }, {
    "County": "Henry",
    "State": "Virginia"
  }, {
    "County": "Herkimer",
    "State": "New York"
  }, {
    "County": "Hernando",
    "State": "Florida"
  }, {
    "County": "Hertford",
    "State": "North Carolina"
  }, {
    "County": "Hettinger",
    "State": "North Dakota"
  }, {
    "County": "Hickman",
    "State": "Kentucky"
  }, {
    "County": "Hickman",
    "State": "Tennessee"
  }, {
    "County": "Hickory",
    "State": "Missouri"
  }, {
    "County": "Hidalgo",
    "State": "New Mexico"
  }, {
    "County": "Hidalgo",
    "State": "Texas"
  }, {
    "County": "Highland",
    "State": "Ohio"
  }, {
    "County": "Highland",
    "State": "Virginia"
  }, {
    "County": "Highlands",
    "State": "Florida"
  }, {
    "County": "Hill",
    "State": "Texas"
  }, {
    "County": "Hill",
    "State": "Montana"
  }, {
    "County": "Hillsborough",
    "State": "Florida"
  }, {
    "County": "Hillsborough",
    "State": "New Hampshire"
  }, {
    "County": "Hillsdale",
    "State": "Michigan"
  }, {
    "County": "Hinds",
    "State": "Mississippi"
  }, {
    "County": "Hinsdale",
    "State": "Colorado"
  }, {
    "County": "Hitchcock",
    "State": "Nebraska"
  }, {
    "County": "Hocking",
    "State": "Ohio"
  }, {
    "County": "Hockley",
    "State": "Texas"
  }, {
    "County": "Hodgeman",
    "State": "Kansas"
  }, {
    "County": "Hoke",
    "State": "North Carolina"
  }, {
    "County": "Holmes",
    "State": "Florida"
  }, {
    "County": "Holmes",
    "State": "Mississippi"
  }, {
    "County": "Holmes",
    "State": "Ohio"
  }, {
    "County": "Holt",
    "State": "Missouri"
  }, {
    "County": "Holt",
    "State": "Nebraska"
  }, {
    "County": "Honolulu",
    "State": "Hawaii"
  }, {
    "County": "Hood",
    "State": "Texas"
  }, {
    "County": "Hood River",
    "State": "Oregon"
  }, {
    "County": "Hooker",
    "State": "Nebraska"
  }, {
    "County": "Hoonah-Angoon",
    "State": "Alaska"
  }, {
    "County": "Hopewell",
    "State": "Virginia"
  }, {
    "County": "Hopkins",
    "State": "Texas"
  }, {
    "County": "Hopkins",
    "State": "Kentucky"
  }, {
    "County": "Hormigueros",
    "State": "Puerto Rico"
  }, {
    "County": "Horry",
    "State": "South Carolina"
  }, {
    "County": "Hot Spring",
    "State": "Arkansas"
  }, {
    "County": "Hot Springs",
    "State": "Wyoming"
  }, {
    "County": "Houghton",
    "State": "Michigan"
  }, {
    "County": "Houston",
    "State": "Texas"
  }, {
    "County": "Houston",
    "State": "Alabama"
  }, {
    "County": "Houston",
    "State": "Tennessee"
  }, {
    "County": "Houston",
    "State": "Minnesota"
  }, {
    "County": "Houston",
    "State": "Georgia"
  }, {
    "County": "Howard",
    "State": "Texas"
  }, {
    "County": "Howard",
    "State": "Nebraska"
  }, {
    "County": "Howard",
    "State": "Arkansas"
  }, {
    "County": "Howard",
    "State": "Missouri"
  }, {
    "County": "Howard",
    "State": "Iowa"
  }, {
    "County": "Howard",
    "State": "Indiana"
  }, {
    "County": "Howard",
    "State": "Maryland"
  }, {
    "County": "Howell",
    "State": "Missouri"
  }, {
    "County": "Hubbard",
    "State": "Minnesota"
  }, {
    "County": "Hudson",
    "State": "New Jersey"
  }, {
    "County": "Hudspeth",
    "State": "Texas"
  }, {
    "County": "Huerfano",
    "State": "Colorado"
  }, {
    "County": "Hughes",
    "State": "Oklahoma"
  }, {
    "County": "Hughes",
    "State": "South Dakota"
  }, {
    "County": "Humacao",
    "State": "Puerto Rico"
  }, {
    "County": "Humboldt",
    "State": "California"
  }, {
    "County": "Humboldt",
    "State": "Nevada"
  }, {
    "County": "Humboldt",
    "State": "Iowa"
  }, {
    "County": "Humphreys",
    "State": "Mississippi"
  }, {
    "County": "Humphreys",
    "State": "Tennessee"
  }, {
    "County": "Hunt",
    "State": "Texas"
  }, {
    "County": "Hunterdon",
    "State": "New Jersey"
  }, {
    "County": "Huntingdon",
    "State": "Pennsylvania"
  }, {
    "County": "Huntington",
    "State": "Indiana"
  }, {
    "County": "Huron",
    "State": "Ohio"
  }, {
    "County": "Huron",
    "State": "Michigan"
  }, {
    "County": "Hutchinson",
    "State": "Texas"
  }, {
    "County": "Hutchinson",
    "State": "South Dakota"
  }, {
    "County": "Hyde",
    "State": "South Dakota"
  }, {
    "County": "Hyde",
    "State": "North Carolina"
  }, {
    "County": "Iberia",
    "State": "Louisiana"
  }, {
    "County": "Iberville",
    "State": "Louisiana"
  }, {
    "County": "Ida",
    "State": "Iowa"
  }, {
    "County": "Idaho",
    "State": "Idaho"
  }, {
    "County": "Imperial",
    "State": "California"
  }, {
    "County": "Independence",
    "State": "Arkansas"
  }, {
    "County": "Indian River",
    "State": "Florida"
  }, {
    "County": "Indiana",
    "State": "Pennsylvania"
  }, {
    "County": "Ingham",
    "State": "Michigan"
  }, {
    "County": "Inyo",
    "State": "California"
  }, {
    "County": "Ionia",
    "State": "Michigan"
  }, {
    "County": "Iosco",
    "State": "Michigan"
  }, {
    "County": "Iowa",
    "State": "Iowa"
  }, {
    "County": "Iowa",
    "State": "Wisconsin"
  }, {
    "County": "Iredell",
    "State": "North Carolina"
  }, {
    "County": "Irion",
    "State": "Texas"
  }, {
    "County": "Iron",
    "State": "Utah"
  }, {
    "County": "Iron",
    "State": "Missouri"
  }, {
    "County": "Iron",
    "State": "Wisconsin"
  }, {
    "County": "Iron",
    "State": "Michigan"
  }, {
    "County": "Iroquois",
    "State": "Illinois"
  }, {
    "County": "Irwin",
    "State": "Georgia"
  }, {
    "County": "Isabela",
    "State": "Puerto Rico"
  }, {
    "County": "Isabella",
    "State": "Michigan"
  }, {
    "County": "Isanti",
    "State": "Minnesota"
  }, {
    "County": "Island",
    "State": "Washington"
  }, {
    "County": "Isle of Wight",
    "State": "Virginia"
  }, {
    "County": "Issaquena",
    "State": "Mississippi"
  }, {
    "County": "Itasca",
    "State": "Minnesota"
  }, {
    "County": "Itawamba",
    "State": "Mississippi"
  }, {
    "County": "Izard",
    "State": "Arkansas"
  }, {
    "County": "Jack",
    "State": "Texas"
  }, {
    "County": "Jackson",
    "State": "Oregon"
  }, {
    "County": "Jackson",
    "State": "Colorado"
  }, {
    "County": "Jackson",
    "State": "Texas"
  }, {
    "County": "Jackson",
    "State": "Mississippi"
  }, {
    "County": "Jackson",
    "State": "Florida"
  }, {
    "County": "Jackson",
    "State": "Oklahoma"
  }, {
    "County": "Jackson",
    "State": "South Dakota"
  }, {
    "County": "Jackson",
    "State": "Kansas"
  }, {
    "County": "Jackson",
    "State": "Missouri"
  }, {
    "County": "Jackson",
    "State": "Minnesota"
  }, {
    "County": "Jackson",
    "State": "Louisiana"
  }, {
    "County": "Jackson",
    "State": "Arkansas"
  }, {
    "County": "Jackson",
    "State": "Alabama"
  }, {
    "County": "Jackson",
    "State": "Tennessee"
  }, {
    "County": "Jackson",
    "State": "Illinois"
  }, {
    "County": "Jackson",
    "State": "Iowa"
  }, {
    "County": "Jackson",
    "State": "Indiana"
  }, {
    "County": "Jackson",
    "State": "Kentucky"
  }, {
    "County": "Jackson",
    "State": "Michigan"
  }, {
    "County": "Jackson",
    "State": "Wisconsin"
  }, {
    "County": "Jackson",
    "State": "Georgia"
  }, {
    "County": "Jackson",
    "State": "North Carolina"
  }, {
    "County": "Jackson",
    "State": "West Virginia"
  }, {
    "County": "Jackson",
    "State": "Ohio"
  }, {
    "County": "James City",
    "State": "Virginia"
  }, {
    "County": "Jasper",
    "State": "Texas"
  }, {
    "County": "Jasper",
    "State": "Mississippi"
  }, {
    "County": "Jasper",
    "State": "Missouri"
  }, {
    "County": "Jasper",
    "State": "Iowa"
  }, {
    "County": "Jasper",
    "State": "Illinois"
  }, {
    "County": "Jasper",
    "State": "Indiana"
  }, {
    "County": "Jasper",
    "State": "Georgia"
  }, {
    "County": "Jasper",
    "State": "South Carolina"
  }, {
    "County": "Jay",
    "State": "Indiana"
  }, {
    "County": "Jayuya",
    "State": "Puerto Rico"
  }, {
    "County": "Jeff Davis",
    "State": "Texas"
  }, {
    "County": "Jeff Davis",
    "State": "Georgia"
  }, {
    "County": "Jefferson",
    "State": "Colorado"
  }, {
    "County": "Jefferson",
    "State": "Texas"
  }, {
    "County": "Jefferson",
    "State": "Louisiana"
  }, {
    "County": "Jefferson",
    "State": "Florida"
  }, {
    "County": "Jefferson",
    "State": "Oklahoma"
  }, {
    "County": "Jefferson",
    "State": "Nebraska"
  }, {
    "County": "Jefferson",
    "State": "Kansas"
  }, {
    "County": "Jefferson",
    "State": "Mississippi"
  }, {
    "County": "Jefferson",
    "State": "Arkansas"
  }, {
    "County": "Jefferson",
    "State": "Alabama"
  }, {
    "County": "Jefferson",
    "State": "Missouri"
  }, {
    "County": "Jefferson",
    "State": "Iowa"
  }, {
    "County": "Jefferson",
    "State": "Illinois"
  }, {
    "County": "Jefferson",
    "State": "Indiana"
  }, {
    "County": "Jefferson",
    "State": "Kentucky"
  }, {
    "County": "Jefferson",
    "State": "Wisconsin"
  }, {
    "County": "Jefferson",
    "State": "Oregon"
  }, {
    "County": "Jefferson",
    "State": "Washington"
  }, {
    "County": "Jefferson",
    "State": "Idaho"
  }, {
    "County": "Jefferson",
    "State": "Montana"
  }, {
    "County": "Jefferson",
    "State": "Georgia"
  }, {
    "County": "Jefferson",
    "State": "Tennessee"
  }, {
    "County": "Jefferson",
    "State": "Ohio"
  }, {
    "County": "Jefferson",
    "State": "Pennsylvania"
  }, {
    "County": "Jefferson",
    "State": "West Virginia"
  }, {
    "County": "Jefferson",
    "State": "New York"
  }, {
    "County": "Jefferson Davis",
    "State": "Louisiana"
  }, {
    "County": "Jefferson Davis",
    "State": "Mississippi"
  }, {
    "County": "Jenkins",
    "State": "Georgia"
  }, {
    "County": "Jennings",
    "State": "Indiana"
  }, {
    "County": "Jerauld",
    "State": "South Dakota"
  }, {
    "County": "Jerome",
    "State": "Idaho"
  }, {
    "County": "Jersey",
    "State": "Illinois"
  }, {
    "County": "Jessamine",
    "State": "Kentucky"
  }, {
    "County": "Jewell",
    "State": "Kansas"
  }, {
    "County": "Jim Hogg",
    "State": "Texas"
  }, {
    "County": "Jim Wells",
    "State": "Texas"
  }, {
    "County": "Jo Daviess",
    "State": "Illinois"
  }, {
    "County": "Johnson",
    "State": "Texas"
  }, {
    "County": "Johnson",
    "State": "Kansas"
  }, {
    "County": "Johnson",
    "State": "Nebraska"
  }, {
    "County": "Johnson",
    "State": "Arkansas"
  }, {
    "County": "Johnson",
    "State": "Missouri"
  }, {
    "County": "Johnson",
    "State": "Iowa"
  }, {
    "County": "Johnson",
    "State": "Illinois"
  }, {
    "County": "Johnson",
    "State": "Indiana"
  }, {
    "County": "Johnson",
    "State": "Wyoming"
  }, {
    "County": "Johnson",
    "State": "Georgia"
  }, {
    "County": "Johnson",
    "State": "Tennessee"
  }, {
    "County": "Johnson",
    "State": "Kentucky"
  }, {
    "County": "Johnston",
    "State": "Oklahoma"
  }, {
    "County": "Johnston",
    "State": "North Carolina"
  }, {
    "County": "Jones",
    "State": "Texas"
  }, {
    "County": "Jones",
    "State": "Mississippi"
  }, {
    "County": "Jones",
    "State": "Iowa"
  }, {
    "County": "Jones",
    "State": "South Dakota"
  }, {
    "County": "Jones",
    "State": "Georgia"
  }, {
    "County": "Jones",
    "State": "North Carolina"
  }, {
    "County": "Josephine",
    "State": "Oregon"
  }, {
    "County": "Juab",
    "State": "Utah"
  }, {
    "County": "Juana Diaz",
    "State": "Puerto Rico"
  }, {
    "County": "Judith Basin",
    "State": "Montana"
  }, {
    "County": "Juncos",
    "State": "Puerto Rico"
  }, {
    "County": "Juneau",
    "State": "Alaska"
  }, {
    "County": "Juneau",
    "State": "Wisconsin"
  }, {
    "County": "Juniata",
    "State": "Pennsylvania"
  }, {
    "County": "Kalamazoo",
    "State": "Michigan"
  }, {
    "County": "Kalawao",
    "State": "Hawaii"
  }, {
    "County": "Kalkaska",
    "State": "Michigan"
  }, {
    "County": "Kanabec",
    "State": "Minnesota"
  }, {
    "County": "Kanawha",
    "State": "West Virginia"
  }, {
    "County": "Kandiyohi",
    "State": "Minnesota"
  }, {
    "County": "Kane",
    "State": "Utah"
  }, {
    "County": "Kane",
    "State": "Illinois"
  }, {
    "County": "Kankakee",
    "State": "Illinois"
  }, {
    "County": "Karnes",
    "State": "Texas"
  }, {
    "County": "Kauai",
    "State": "Hawaii"
  }, {
    "County": "Kaufman",
    "State": "Texas"
  }, {
    "County": "Kay",
    "State": "Oklahoma"
  }, {
    "County": "Kearney",
    "State": "Nebraska"
  }, {
    "County": "Kearny",
    "State": "Kansas"
  }, {
    "County": "Keith",
    "State": "Nebraska"
  }, {
    "County": "Kemper",
    "State": "Mississippi"
  }, {
    "County": "Kenai Peninsula",
    "State": "Alaska"
  }, {
    "County": "Kendall",
    "State": "Texas"
  }, {
    "County": "Kendall",
    "State": "Illinois"
  }, {
    "County": "Kenedy",
    "State": "Texas"
  }, {
    "County": "Kennebec",
    "State": "Maine"
  }, {
    "County": "Kenosha",
    "State": "Wisconsin"
  }, {
    "County": "Kent",
    "State": "Texas"
  }, {
    "County": "Kent",
    "State": "Michigan"
  }, {
    "County": "Kent",
    "State": "Maryland"
  }, {
    "County": "Kent",
    "State": "Delaware"
  }, {
    "County": "Kent",
    "State": "Rhode Island"
  }, {
    "County": "Kenton",
    "State": "Kentucky"
  }, {
    "County": "Keokuk",
    "State": "Iowa"
  }, {
    "County": "Kern",
    "State": "California"
  }, {
    "County": "Kerr",
    "State": "Texas"
  }, {
    "County": "Kershaw",
    "State": "South Carolina"
  }, {
    "County": "Ketchikan Gateway",
    "State": "Alaska"
  }, {
    "County": "Kewaunee",
    "State": "Wisconsin"
  }, {
    "County": "Keweenaw",
    "State": "Michigan"
  }, {
    "County": "Keya Paha",
    "State": "Nebraska"
  }, {
    "County": "Kidder",
    "State": "North Dakota"
  }, {
    "County": "Kimball",
    "State": "Nebraska"
  }, {
    "County": "Kimble",
    "State": "Texas"
  }, {
    "County": "King",
    "State": "Texas"
  }, {
    "County": "King",
    "State": "Washington"
  }, {
    "County": "King and Queen",
    "State": "Virginia"
  }, {
    "County": "King George",
    "State": "Virginia"
  }, {
    "County": "King William",
    "State": "Virginia"
  }, {
    "County": "Kingfisher",
    "State": "Oklahoma"
  }, {
    "County": "Kingman",
    "State": "Kansas"
  }, {
    "County": "Kings",
    "State": "California"
  }, {
    "County": "Kings",
    "State": "New York"
  }, {
    "County": "Kingsbury",
    "State": "South Dakota"
  }, {
    "County": "Kinney",
    "State": "Texas"
  }, {
    "County": "Kiowa",
    "State": "Oklahoma"
  }, {
    "County": "Kiowa",
    "State": "Colorado"
  }, {
    "County": "Kiowa",
    "State": "Kansas"
  }, {
    "County": "Kit Carson",
    "State": "Colorado"
  }, {
    "County": "Kitsap",
    "State": "Washington"
  }, {
    "County": "Kittitas",
    "State": "Washington"
  }, {
    "County": "Kittson",
    "State": "Minnesota"
  }, {
    "County": "Klamath",
    "State": "Oregon"
  }, {
    "County": "Kleberg",
    "State": "Texas"
  }, {
    "County": "Klickitat",
    "State": "Washington"
  }, {
    "County": "Knott",
    "State": "Kentucky"
  }, {
    "County": "Knox",
    "State": "Texas"
  }, {
    "County": "Knox",
    "State": "Nebraska"
  }, {
    "County": "Knox",
    "State": "Tennessee"
  }, {
    "County": "Knox",
    "State": "Missouri"
  }, {
    "County": "Knox",
    "State": "Illinois"
  }, {
    "County": "Knox",
    "State": "Indiana"
  }, {
    "County": "Knox",
    "State": "Kentucky"
  }, {
    "County": "Knox",
    "State": "Ohio"
  }, {
    "County": "Knox",
    "State": "Maine"
  }, {
    "County": "Kodiak Island",
    "State": "Alaska"
  }, {
    "County": "Koochiching",
    "State": "Minnesota"
  }, {
    "County": "Kootenai",
    "State": "Idaho"
  }, {
    "County": "Kosciusko",
    "State": "Indiana"
  }, {
    "County": "Kossuth",
    "State": "Iowa"
  }, {
    "County": "Kusilvak",
    "State": "Alaska"
  }, {
    "County": "La Crosse",
    "State": "Wisconsin"
  }, {
    "County": "La Paz",
    "State": "Arizona"
  }, {
    "County": "La Plata",
    "State": "Colorado"
  }, {
    "County": "La Salle",
    "State": "Texas"
  }, {
    "County": "La Salle",
    "State": "Louisiana"
  }, {
    "County": "Labette",
    "State": "Kansas"
  }, {
    "County": "Lac qui Parle",
    "State": "Minnesota"
  }, {
    "County": "Lackawanna",
    "State": "Pennsylvania"
  }, {
    "County": "Laclede",
    "State": "Missouri"
  }, {
    "County": "Lafayette",
    "State": "Louisiana"
  }, {
    "County": "Lafayette",
    "State": "Arkansas"
  }, {
    "County": "Lafayette",
    "State": "Mississippi"
  }, {
    "County": "Lafayette",
    "State": "Missouri"
  }, {
    "County": "Lafayette",
    "State": "Wisconsin"
  }, {
    "County": "Lafayette",
    "State": "Florida"
  }, {
    "County": "Lafourche",
    "State": "Louisiana"
  }, {
    "County": "LaGrange",
    "State": "Indiana"
  }, {
    "County": "Lajas",
    "State": "Puerto Rico"
  }, {
    "County": "Lake",
    "State": "California"
  }, {
    "County": "Lake",
    "State": "Oregon"
  }, {
    "County": "Lake",
    "State": "Colorado"
  }, {
    "County": "Lake",
    "State": "Tennessee"
  }, {
    "County": "Lake",
    "State": "Indiana"
  }, {
    "County": "Lake",
    "State": "Illinois"
  }, {
    "County": "Lake",
    "State": "Montana"
  }, {
    "County": "Lake",
    "State": "South Dakota"
  }, {
    "County": "Lake",
    "State": "Minnesota"
  }, {
    "County": "Lake",
    "State": "Michigan"
  }, {
    "County": "Lake",
    "State": "Florida"
  }, {
    "County": "Lake",
    "State": "Ohio"
  }, {
    "County": "Lake and Peninsula",
    "State": "Alaska"
  }, {
    "County": "Lake of the Woods",
    "State": "Minnesota"
  }, {
    "County": "Lamar",
    "State": "Texas"
  }, {
    "County": "Lamar",
    "State": "Mississippi"
  }, {
    "County": "Lamar",
    "State": "Alabama"
  }, {
    "County": "Lamar",
    "State": "Georgia"
  }, {
    "County": "Lamb",
    "State": "Texas"
  }, {
    "County": "Lamoille",
    "State": "Vermont"
  }, {
    "County": "LaMoure",
    "State": "North Dakota"
  }, {
    "County": "Lampasas",
    "State": "Texas"
  }, {
    "County": "Lancaster",
    "State": "Nebraska"
  }, {
    "County": "Lancaster",
    "State": "South Carolina"
  }, {
    "County": "Lancaster",
    "State": "Virginia"
  }, {
    "County": "Lancaster",
    "State": "Pennsylvania"
  }, {
    "County": "Lander",
    "State": "Nevada"
  }, {
    "County": "Lane",
    "State": "Kansas"
  }, {
    "County": "Lane",
    "State": "Oregon"
  }, {
    "County": "Langlade",
    "State": "Wisconsin"
  }, {
    "County": "Lanier",
    "State": "Georgia"
  }, {
    "County": "Lapeer",
    "State": "Michigan"
  }, {
    "County": "LaPorte",
    "State": "Indiana"
  }, {
    "County": "Laramie",
    "State": "Wyoming"
  }, {
    "County": "Lares",
    "State": "Puerto Rico"
  }, {
    "County": "Larimer",
    "State": "Colorado"
  }, {
    "County": "Larue",
    "State": "Kentucky"
  }, {
    "County": "Las Animas",
    "State": "Colorado"
  }, {
    "County": "Las Marias",
    "State": "Puerto Rico"
  }, {
    "County": "Las Piedras",
    "State": "Puerto Rico"
  }, {
    "County": "LaSalle",
    "State": "Illinois"
  }, {
    "County": "Lassen",
    "State": "California"
  }, {
    "County": "Latah",
    "State": "Idaho"
  }, {
    "County": "Latimer",
    "State": "Oklahoma"
  }, {
    "County": "Lauderdale",
    "State": "Tennessee"
  }, {
    "County": "Lauderdale",
    "State": "Mississippi"
  }, {
    "County": "Lauderdale",
    "State": "Alabama"
  }, {
    "County": "Laurel",
    "State": "Kentucky"
  }, {
    "County": "Laurens",
    "State": "Georgia"
  }, {
    "County": "Laurens",
    "State": "South Carolina"
  }, {
    "County": "Lavaca",
    "State": "Texas"
  }, {
    "County": "Lawrence",
    "State": "Mississippi"
  }, {
    "County": "Lawrence",
    "State": "Missouri"
  }, {
    "County": "Lawrence",
    "State": "Arkansas"
  }, {
    "County": "Lawrence",
    "State": "Alabama"
  }, {
    "County": "Lawrence",
    "State": "Tennessee"
  }, {
    "County": "Lawrence",
    "State": "Illinois"
  }, {
    "County": "Lawrence",
    "State": "Indiana"
  }, {
    "County": "Lawrence",
    "State": "South Dakota"
  }, {
    "County": "Lawrence",
    "State": "Kentucky"
  }, {
    "County": "Lawrence",
    "State": "Ohio"
  }, {
    "County": "Lawrence",
    "State": "Pennsylvania"
  }, {
    "County": "Le Flore",
    "State": "Oklahoma"
  }, {
    "County": "Le Sueur",
    "State": "Minnesota"
  }, {
    "County": "Lea",
    "State": "New Mexico"
  }, {
    "County": "Leake",
    "State": "Mississippi"
  }, {
    "County": "Leavenworth",
    "State": "Kansas"
  }, {
    "County": "Lebanon",
    "State": "Pennsylvania"
  }, {
    "County": "Lee",
    "State": "Texas"
  }, {
    "County": "Lee",
    "State": "Arkansas"
  }, {
    "County": "Lee",
    "State": "Georgia"
  }, {
    "County": "Lee",
    "State": "Alabama"
  }, {
    "County": "Lee",
    "State": "Mississippi"
  }, {
    "County": "Lee",
    "State": "Iowa"
  }, {
    "County": "Lee",
    "State": "Illinois"
  }, {
    "County": "Lee",
    "State": "Florida"
  }, {
    "County": "Lee",
    "State": "Virginia"
  }, {
    "County": "Lee",
    "State": "South Carolina"
  }, {
    "County": "Lee",
    "State": "North Carolina"
  }, {
    "County": "Lee",
    "State": "Kentucky"
  }, {
    "County": "Leelanau",
    "State": "Michigan"
  }, {
    "County": "Leflore",
    "State": "Mississippi"
  }, {
    "County": "Lehigh",
    "State": "Pennsylvania"
  }, {
    "County": "Lemhi",
    "State": "Idaho"
  }, {
    "County": "Lenawee",
    "State": "Michigan"
  }, {
    "County": "Lenoir",
    "State": "North Carolina"
  }, {
    "County": "Leon",
    "State": "Florida"
  }, {
    "County": "Leon",
    "State": "Texas"
  }, {
    "County": "Leslie",
    "State": "Kentucky"
  }, {
    "County": "Letcher",
    "State": "Kentucky"
  }, {
    "County": "Levy",
    "State": "Florida"
  }, {
    "County": "Lewis",
    "State": "Tennessee"
  }, {
    "County": "Lewis",
    "State": "Missouri"
  }, {
    "County": "Lewis",
    "State": "Washington"
  }, {
    "County": "Lewis",
    "State": "Idaho"
  }, {
    "County": "Lewis",
    "State": "Kentucky"
  }, {
    "County": "Lewis",
    "State": "West Virginia"
  }, {
    "County": "Lewis",
    "State": "New York"
  }, {
    "County": "Lewis and Clark",
    "State": "Montana"
  }, {
    "County": "Lexington",
    "State": "South Carolina"
  }, {
    "County": "Lexington",
    "State": "Virginia"
  }, {
    "County": "Liberty",
    "State": "Texas"
  }, {
    "County": "Liberty",
    "State": "Florida"
  }, {
    "County": "Liberty",
    "State": "Montana"
  }, {
    "County": "Liberty",
    "State": "Georgia"
  }, {
    "County": "Licking",
    "State": "Ohio"
  }, {
    "County": "Limestone",
    "State": "Texas"
  }, {
    "County": "Limestone",
    "State": "Alabama"
  }, {
    "County": "Lincoln",
    "State": "New Mexico"
  }, {
    "County": "Lincoln",
    "State": "Nevada"
  }, {
    "County": "Lincoln",
    "State": "Idaho"
  }, {
    "County": "Lincoln",
    "State": "Wyoming"
  }, {
    "County": "Lincoln",
    "State": "Oklahoma"
  }, {
    "County": "Lincoln",
    "State": "Colorado"
  }, {
    "County": "Lincoln",
    "State": "Nebraska"
  }, {
    "County": "Lincoln",
    "State": "Kansas"
  }, {
    "County": "Lincoln",
    "State": "South Dakota"
  }, {
    "County": "Lincoln",
    "State": "Louisiana"
  }, {
    "County": "Lincoln",
    "State": "Mississippi"
  }, {
    "County": "Lincoln",
    "State": "Arkansas"
  }, {
    "County": "Lincoln",
    "State": "Tennessee"
  }, {
    "County": "Lincoln",
    "State": "Missouri"
  }, {
    "County": "Lincoln",
    "State": "Kentucky"
  }, {
    "County": "Lincoln",
    "State": "Oregon"
  }, {
    "County": "Lincoln",
    "State": "Washington"
  }, {
    "County": "Lincoln",
    "State": "Montana"
  }, {
    "County": "Lincoln",
    "State": "Minnesota"
  }, {
    "County": "Lincoln",
    "State": "Wisconsin"
  }, {
    "County": "Lincoln",
    "State": "Georgia"
  }, {
    "County": "Lincoln",
    "State": "North Carolina"
  }, {
    "County": "Lincoln",
    "State": "West Virginia"
  }, {
    "County": "Lincoln",
    "State": "Maine"
  }, {
    "County": "Linn",
    "State": "Kansas"
  }, {
    "County": "Linn",
    "State": "Missouri"
  }, {
    "County": "Linn",
    "State": "Iowa"
  }, {
    "County": "Linn",
    "State": "Oregon"
  }, {
    "County": "Lipscomb",
    "State": "Texas"
  }, {
    "County": "Litchfield",
    "State": "Connecticut"
  }, {
    "County": "Little River",
    "State": "Arkansas"
  }, {
    "County": "Live Oak",
    "State": "Texas"
  }, {
    "County": "Livingston",
    "State": "Louisiana"
  }, {
    "County": "Livingston",
    "State": "Kentucky"
  }, {
    "County": "Livingston",
    "State": "Missouri"
  }, {
    "County": "Livingston",
    "State": "Illinois"
  }, {
    "County": "Livingston",
    "State": "Michigan"
  }, {
    "County": "Livingston",
    "State": "New York"
  }, {
    "County": "Llano",
    "State": "Texas"
  }, {
    "County": "Logan",
    "State": "Oklahoma"
  }, {
    "County": "Logan",
    "State": "Kansas"
  }, {
    "County": "Logan",
    "State": "Colorado"
  }, {
    "County": "Logan",
    "State": "Nebraska"
  }, {
    "County": "Logan",
    "State": "Arkansas"
  }, {
    "County": "Logan",
    "State": "Kentucky"
  }, {
    "County": "Logan",
    "State": "Illinois"
  }, {
    "County": "Logan",
    "State": "North Dakota"
  }, {
    "County": "Logan",
    "State": "West Virginia"
  }, {
    "County": "Logan",
    "State": "Ohio"
  }, {
    "County": "Loiza",
    "State": "Puerto Rico"
  }, {
    "County": "Long",
    "State": "Georgia"
  }, {
    "County": "Lonoke",
    "State": "Arkansas"
  }, {
    "County": "Lorain",
    "State": "Ohio"
  }, {
    "County": "Los Alamos",
    "State": "New Mexico"
  }, {
    "County": "Los Angeles",
    "State": "California"
  }, {
    "County": "Loudon",
    "State": "Tennessee"
  }, {
    "County": "Loudoun",
    "State": "Virginia"
  }, {
    "County": "Louisa",
    "State": "Iowa"
  }, {
    "County": "Louisa",
    "State": "Virginia"
  }, {
    "County": "Loup",
    "State": "Nebraska"
  }, {
    "County": "Love",
    "State": "Oklahoma"
  }, {
    "County": "Loving",
    "State": "Texas"
  }, {
    "County": "Lowndes",
    "State": "Alabama"
  }, {
    "County": "Lowndes",
    "State": "Mississippi"
  }, {
    "County": "Lowndes",
    "State": "Georgia"
  }, {
    "County": "Lubbock",
    "State": "Texas"
  }, {
    "County": "Lucas",
    "State": "Iowa"
  }, {
    "County": "Lucas",
    "State": "Ohio"
  }, {
    "County": "Luce",
    "State": "Michigan"
  }, {
    "County": "Lumpkin",
    "State": "Georgia"
  }, {
    "County": "Luna",
    "State": "New Mexico"
  }, {
    "County": "Lunenburg",
    "State": "Virginia"
  }, {
    "County": "Luquillo",
    "State": "Puerto Rico"
  }, {
    "County": "Luzerne",
    "State": "Pennsylvania"
  }, {
    "County": "Lycoming",
    "State": "Pennsylvania"
  }, {
    "County": "Lyman",
    "State": "South Dakota"
  }, {
    "County": "Lynchburg",
    "State": "Virginia"
  }, {
    "County": "Lynn",
    "State": "Texas"
  }, {
    "County": "Lyon",
    "State": "Nevada"
  }, {
    "County": "Lyon",
    "State": "Kansas"
  }, {
    "County": "Lyon",
    "State": "Iowa"
  }, {
    "County": "Lyon",
    "State": "Kentucky"
  }, {
    "County": "Lyon",
    "State": "Minnesota"
  }, {
    "County": "Mackinac",
    "State": "Michigan"
  }, {
    "County": "Macomb",
    "State": "Michigan"
  }, {
    "County": "Macon",
    "State": "Alabama"
  }, {
    "County": "Macon",
    "State": "Georgia"
  }, {
    "County": "Macon",
    "State": "Tennessee"
  }, {
    "County": "Macon",
    "State": "Missouri"
  }, {
    "County": "Macon",
    "State": "Illinois"
  }, {
    "County": "Macon",
    "State": "North Carolina"
  }, {
    "County": "Macoupin",
    "State": "Illinois"
  }, {
    "County": "Madera",
    "State": "California"
  }, {
    "County": "Madison",
    "State": "Idaho"
  }, {
    "County": "Madison",
    "State": "Texas"
  }, {
    "County": "Madison",
    "State": "Nebraska"
  }, {
    "County": "Madison",
    "State": "Louisiana"
  }, {
    "County": "Madison",
    "State": "Mississippi"
  }, {
    "County": "Madison",
    "State": "Arkansas"
  }, {
    "County": "Madison",
    "State": "Tennessee"
  }, {
    "County": "Madison",
    "State": "Alabama"
  }, {
    "County": "Madison",
    "State": "Missouri"
  }, {
    "County": "Madison",
    "State": "Illinois"
  }, {
    "County": "Madison",
    "State": "Iowa"
  }, {
    "County": "Madison",
    "State": "Kentucky"
  }, {
    "County": "Madison",
    "State": "Indiana"
  }, {
    "County": "Madison",
    "State": "Montana"
  }, {
    "County": "Madison",
    "State": "Florida"
  }, {
    "County": "Madison",
    "State": "Georgia"
  }, {
    "County": "Madison",
    "State": "North Carolina"
  }, {
    "County": "Madison",
    "State": "Ohio"
  }, {
    "County": "Madison",
    "State": "Virginia"
  }, {
    "County": "Madison",
    "State": "New York"
  }, {
    "County": "Magoffin",
    "State": "Kentucky"
  }, {
    "County": "Mahaska",
    "State": "Iowa"
  }, {
    "County": "Mahnomen",
    "State": "Minnesota"
  }, {
    "County": "Mahoning",
    "State": "Ohio"
  }, {
    "County": "Major",
    "State": "Oklahoma"
  }, {
    "County": "Malheur",
    "State": "Oregon"
  }, {
    "County": "Manassas",
    "State": "Virginia"
  }, {
    "County": "Manassas Park",
    "State": "Virginia"
  }, {
    "County": "Manatee",
    "State": "Florida"
  }, {
    "County": "Manati",
    "State": "Puerto Rico"
  }, {
    "County": "Manistee",
    "State": "Michigan"
  }, {
    "County": "Manitowoc",
    "State": "Wisconsin"
  }, {
    "County": "Marathon",
    "State": "Wisconsin"
  }, {
    "County": "Marengo",
    "State": "Alabama"
  }, {
    "County": "Maricao",
    "State": "Puerto Rico"
  }, {
    "County": "Maricopa",
    "State": "Arizona"
  }, {
    "County": "Maries",
    "State": "Missouri"
  }, {
    "County": "Marin",
    "State": "California"
  }, {
    "County": "Marinette",
    "State": "Wisconsin"
  }, {
    "County": "Marion",
    "State": "Texas"
  }, {
    "County": "Marion",
    "State": "Kansas"
  }, {
    "County": "Marion",
    "State": "Mississippi"
  }, {
    "County": "Marion",
    "State": "Arkansas"
  }, {
    "County": "Marion",
    "State": "Alabama"
  }, {
    "County": "Marion",
    "State": "Georgia"
  }, {
    "County": "Marion",
    "State": "Tennessee"
  }, {
    "County": "Marion",
    "State": "Missouri"
  }, {
    "County": "Marion",
    "State": "Iowa"
  }, {
    "County": "Marion",
    "State": "Illinois"
  }, {
    "County": "Marion",
    "State": "Kentucky"
  }, {
    "County": "Marion",
    "State": "Indiana"
  }, {
    "County": "Marion",
    "State": "Oregon"
  }, {
    "County": "Marion",
    "State": "Florida"
  }, {
    "County": "Marion",
    "State": "South Carolina"
  }, {
    "County": "Marion",
    "State": "Ohio"
  }, {
    "County": "Marion",
    "State": "West Virginia"
  }, {
    "County": "Mariposa",
    "State": "California"
  }, {
    "County": "Marlboro",
    "State": "South Carolina"
  }, {
    "County": "Marquette",
    "State": "Wisconsin"
  }, {
    "County": "Marquette",
    "State": "Michigan"
  }, {
    "County": "Marshall",
    "State": "Oklahoma"
  }, {
    "County": "Marshall",
    "State": "Kansas"
  }, {
    "County": "Marshall",
    "State": "Mississippi"
  }, {
    "County": "Marshall",
    "State": "Tennessee"
  }, {
    "County": "Marshall",
    "State": "Kentucky"
  }, {
    "County": "Marshall",
    "State": "Alabama"
  }, {
    "County": "Marshall",
    "State": "Iowa"
  }, {
    "County": "Marshall",
    "State": "Illinois"
  }, {
    "County": "Marshall",
    "State": "Indiana"
  }, {
    "County": "Marshall",
    "State": "South Dakota"
  }, {
    "County": "Marshall",
    "State": "Minnesota"
  }, {
    "County": "Marshall",
    "State": "West Virginia"
  }, {
    "County": "Martin",
    "State": "Texas"
  }, {
    "County": "Martin",
    "State": "Minnesota"
  }, {
    "County": "Martin",
    "State": "Indiana"
  }, {
    "County": "Martin",
    "State": "Florida"
  }, {
    "County": "Martin",
    "State": "North Carolina"
  }, {
    "County": "Martin",
    "State": "Kentucky"
  }, {
    "County": "Martinsville",
    "State": "Virginia"
  }, {
    "County": "Mason",
    "State": "Texas"
  }, {
    "County": "Mason",
    "State": "Illinois"
  }, {
    "County": "Mason",
    "State": "Washington"
  }, {
    "County": "Mason",
    "State": "Michigan"
  }, {
    "County": "Mason",
    "State": "Kentucky"
  }, {
    "County": "Mason",
    "State": "West Virginia"
  }, {
    "County": "Massac",
    "State": "Illinois"
  }, {
    "County": "Matagorda",
    "State": "Texas"
  }, {
    "County": "Matanuska-Susitna",
    "State": "Alaska"
  }, {
    "County": "Mathews",
    "State": "Virginia"
  }, {
    "County": "Maui",
    "State": "Hawaii"
  }, {
    "County": "Maunabo",
    "State": "Puerto Rico"
  }, {
    "County": "Maury",
    "State": "Tennessee"
  }, {
    "County": "Maverick",
    "State": "Texas"
  }, {
    "County": "Mayaguez",
    "State": "Puerto Rico"
  }, {
    "County": "Mayes",
    "State": "Oklahoma"
  }, {
    "County": "McClain",
    "State": "Oklahoma"
  }, {
    "County": "McCone",
    "State": "Montana"
  }, {
    "County": "McCook",
    "State": "South Dakota"
  }, {
    "County": "McCormick",
    "State": "South Carolina"
  }, {
    "County": "McCracken",
    "State": "Kentucky"
  }, {
    "County": "McCreary",
    "State": "Kentucky"
  }, {
    "County": "McCulloch",
    "State": "Texas"
  }, {
    "County": "McCurtain",
    "State": "Oklahoma"
  }, {
    "County": "McDonald",
    "State": "Missouri"
  }, {
    "County": "McDonough",
    "State": "Illinois"
  }, {
    "County": "McDowell",
    "State": "North Carolina"
  }, {
    "County": "McDowell",
    "State": "West Virginia"
  }, {
    "County": "McDuffie",
    "State": "Georgia"
  }, {
    "County": "McHenry",
    "State": "Illinois"
  }, {
    "County": "McHenry",
    "State": "North Dakota"
  }, {
    "County": "McIntosh",
    "State": "Oklahoma"
  }, {
    "County": "McIntosh",
    "State": "North Dakota"
  }, {
    "County": "McIntosh",
    "State": "Georgia"
  }, {
    "County": "McKean",
    "State": "Pennsylvania"
  }, {
    "County": "McKenzie",
    "State": "North Dakota"
  }, {
    "County": "McKinley",
    "State": "New Mexico"
  }, {
    "County": "McLean",
    "State": "Kentucky"
  }, {
    "County": "McLean",
    "State": "Illinois"
  }, {
    "County": "McLean",
    "State": "North Dakota"
  }, {
    "County": "McLennan",
    "State": "Texas"
  }, {
    "County": "McLeod",
    "State": "Minnesota"
  }, {
    "County": "McMinn",
    "State": "Tennessee"
  }, {
    "County": "McMullen",
    "State": "Texas"
  }, {
    "County": "McNairy",
    "State": "Tennessee"
  }, {
    "County": "McPherson",
    "State": "Nebraska"
  }, {
    "County": "McPherson",
    "State": "Kansas"
  }, {
    "County": "McPherson",
    "State": "South Dakota"
  }, {
    "County": "Meade",
    "State": "Kansas"
  }, {
    "County": "Meade",
    "State": "Kentucky"
  }, {
    "County": "Meade",
    "State": "South Dakota"
  }, {
    "County": "Meagher",
    "State": "Montana"
  }, {
    "County": "Mecklenburg",
    "State": "North Carolina"
  }, {
    "County": "Mecklenburg",
    "State": "Virginia"
  }, {
    "County": "Mecosta",
    "State": "Michigan"
  }, {
    "County": "Medina",
    "State": "Texas"
  }, {
    "County": "Medina",
    "State": "Ohio"
  }, {
    "County": "Meeker",
    "State": "Minnesota"
  }, {
    "County": "Meigs",
    "State": "Tennessee"
  }, {
    "County": "Meigs",
    "State": "Ohio"
  }, {
    "County": "Mellette",
    "State": "South Dakota"
  }, {
    "County": "Menard",
    "State": "Texas"
  }, {
    "County": "Menard",
    "State": "Illinois"
  }, {
    "County": "Mendocino",
    "State": "California"
  }, {
    "County": "Menifee",
    "State": "Kentucky"
  }, {
    "County": "Menominee",
    "State": "Wisconsin"
  }, {
    "County": "Menominee",
    "State": "Michigan"
  }, {
    "County": "Merced",
    "State": "California"
  }, {
    "County": "Mercer",
    "State": "Missouri"
  }, {
    "County": "Mercer",
    "State": "Illinois"
  }, {
    "County": "Mercer",
    "State": "Kentucky"
  }, {
    "County": "Mercer",
    "State": "Ohio"
  }, {
    "County": "Mercer",
    "State": "North Dakota"
  }, {
    "County": "Mercer",
    "State": "West Virginia"
  }, {
    "County": "Mercer",
    "State": "Pennsylvania"
  }, {
    "County": "Mercer",
    "State": "New Jersey"
  }, {
    "County": "Meriwether",
    "State": "Georgia"
  }, {
    "County": "Merrick",
    "State": "Nebraska"
  }, {
    "County": "Merrimack",
    "State": "New Hampshire"
  }, {
    "County": "Mesa",
    "State": "Colorado"
  }, {
    "County": "Metcalfe",
    "State": "Kentucky"
  }, {
    "County": "Miami",
    "State": "Kansas"
  }, {
    "County": "Miami",
    "State": "Ohio"
  }, {
    "County": "Miami",
    "State": "Indiana"
  }, {
    "County": "Miami-Dade",
    "State": "Florida"
  }, {
    "County": "Middlesex",
    "State": "Virginia"
  }, {
    "County": "Middlesex",
    "State": "New Jersey"
  }, {
    "County": "Middlesex",
    "State": "Connecticut"
  }, {
    "County": "Middlesex",
    "State": "Massachusetts"
  }, {
    "County": "Midland",
    "State": "Texas"
  }, {
    "County": "Midland",
    "State": "Michigan"
  }, {
    "County": "Mifflin",
    "State": "Pennsylvania"
  }, {
    "County": "Milam",
    "State": "Texas"
  }, {
    "County": "Millard",
    "State": "Utah"
  }, {
    "County": "Mille Lacs",
    "State": "Minnesota"
  }, {
    "County": "Miller",
    "State": "Arkansas"
  }, {
    "County": "Miller",
    "State": "Georgia"
  }, {
    "County": "Miller",
    "State": "Missouri"
  }, {
    "County": "Mills",
    "State": "Texas"
  }, {
    "County": "Mills",
    "State": "Iowa"
  }, {
    "County": "Milwaukee",
    "State": "Wisconsin"
  }, {
    "County": "Miner",
    "State": "South Dakota"
  }, {
    "County": "Mineral",
    "State": "Nevada"
  }, {
    "County": "Mineral",
    "State": "Colorado"
  }, {
    "County": "Mineral",
    "State": "Montana"
  }, {
    "County": "Mineral",
    "State": "West Virginia"
  }, {
    "County": "Mingo",
    "State": "West Virginia"
  }, {
    "County": "Minidoka",
    "State": "Idaho"
  }, {
    "County": "Minnehaha",
    "State": "South Dakota"
  }, {
    "County": "Missaukee",
    "State": "Michigan"
  }, {
    "County": "Mississippi",
    "State": "Arkansas"
  }, {
    "County": "Mississippi",
    "State": "Missouri"
  }, {
    "County": "Missoula",
    "State": "Montana"
  }, {
    "County": "Mitchell",
    "State": "Texas"
  }, {
    "County": "Mitchell",
    "State": "Kansas"
  }, {
    "County": "Mitchell",
    "State": "Georgia"
  }, {
    "County": "Mitchell",
    "State": "Iowa"
  }, {
    "County": "Mitchell",
    "State": "North Carolina"
  }, {
    "County": "Mobile",
    "State": "Alabama"
  }, {
    "County": "Moca",
    "State": "Puerto Rico"
  }, {
    "County": "Modoc",
    "State": "California"
  }, {
    "County": "Moffat",
    "State": "Colorado"
  }, {
    "County": "Mohave",
    "State": "Arizona"
  }, {
    "County": "Moniteau",
    "State": "Missouri"
  }, {
    "County": "Monmouth",
    "State": "New Jersey"
  }, {
    "County": "Mono",
    "State": "California"
  }, {
    "County": "Monona",
    "State": "Iowa"
  }, {
    "County": "Monongalia",
    "State": "West Virginia"
  }, {
    "County": "Monroe",
    "State": "Arkansas"
  }, {
    "County": "Monroe",
    "State": "Alabama"
  }, {
    "County": "Monroe",
    "State": "Mississippi"
  }, {
    "County": "Monroe",
    "State": "Georgia"
  }, {
    "County": "Monroe",
    "State": "Tennessee"
  }, {
    "County": "Monroe",
    "State": "Kentucky"
  }, {
    "County": "Monroe",
    "State": "Missouri"
  }, {
    "County": "Monroe",
    "State": "Illinois"
  }, {
    "County": "Monroe",
    "State": "Iowa"
  }, {
    "County": "Monroe",
    "State": "Indiana"
  }, {
    "County": "Monroe",
    "State": "Wisconsin"
  }, {
    "County": "Monroe",
    "State": "Florida"
  }, {
    "County": "Monroe",
    "State": "West Virginia"
  }, {
    "County": "Monroe",
    "State": "Ohio"
  }, {
    "County": "Monroe",
    "State": "Michigan"
  }, {
    "County": "Monroe",
    "State": "New York"
  }, {
    "County": "Monroe",
    "State": "Pennsylvania"
  }, {
    "County": "Montague",
    "State": "Texas"
  }, {
    "County": "Montcalm",
    "State": "Michigan"
  }, {
    "County": "Monterey",
    "State": "California"
  }, {
    "County": "Montezuma",
    "State": "Colorado"
  }, {
    "County": "Montgomery",
    "State": "Texas"
  }, {
    "County": "Montgomery",
    "State": "Kansas"
  }, {
    "County": "Montgomery",
    "State": "Iowa"
  }, {
    "County": "Montgomery",
    "State": "Mississippi"
  }, {
    "County": "Montgomery",
    "State": "Arkansas"
  }, {
    "County": "Montgomery",
    "State": "Alabama"
  }, {
    "County": "Montgomery",
    "State": "Tennessee"
  }, {
    "County": "Montgomery",
    "State": "Missouri"
  }, {
    "County": "Montgomery",
    "State": "Illinois"
  }, {
    "County": "Montgomery",
    "State": "Indiana"
  }, {
    "County": "Montgomery",
    "State": "Kentucky"
  }, {
    "County": "Montgomery",
    "State": "Ohio"
  }, {
    "County": "Montgomery",
    "State": "Georgia"
  }, {
    "County": "Montgomery",
    "State": "North Carolina"
  }, {
    "County": "Montgomery",
    "State": "Virginia"
  }, {
    "County": "Montgomery",
    "State": "Maryland"
  }, {
    "County": "Montgomery",
    "State": "Pennsylvania"
  }, {
    "County": "Montgomery",
    "State": "New York"
  }, {
    "County": "Montmorency",
    "State": "Michigan"
  }, {
    "County": "Montour",
    "State": "Pennsylvania"
  }, {
    "County": "Montrose",
    "State": "Colorado"
  }, {
    "County": "Moody",
    "State": "South Dakota"
  }, {
    "County": "Moore",
    "State": "Texas"
  }, {
    "County": "Moore",
    "State": "Tennessee"
  }, {
    "County": "Moore",
    "State": "North Carolina"
  }, {
    "County": "Mora",
    "State": "New Mexico"
  }, {
    "County": "Morehouse",
    "State": "Louisiana"
  }, {
    "County": "Morgan",
    "State": "Utah"
  }, {
    "County": "Morgan",
    "State": "Colorado"
  }, {
    "County": "Morgan",
    "State": "Alabama"
  }, {
    "County": "Morgan",
    "State": "Tennessee"
  }, {
    "County": "Morgan",
    "State": "Missouri"
  }, {
    "County": "Morgan",
    "State": "Illinois"
  }, {
    "County": "Morgan",
    "State": "Indiana"
  }, {
    "County": "Morgan",
    "State": "Georgia"
  }, {
    "County": "Morgan",
    "State": "Kentucky"
  }, {
    "County": "Morgan",
    "State": "Ohio"
  }, {
    "County": "Morgan",
    "State": "West Virginia"
  }, {
    "County": "Morovis",
    "State": "Puerto Rico"
  }, {
    "County": "Morrill",
    "State": "Nebraska"
  }, {
    "County": "Morris",
    "State": "Texas"
  }, {
    "County": "Morris",
    "State": "Kansas"
  }, {
    "County": "Morris",
    "State": "New Jersey"
  }, {
    "County": "Morrison",
    "State": "Minnesota"
  }, {
    "County": "Morrow",
    "State": "Oregon"
  }, {
    "County": "Morrow",
    "State": "Ohio"
  }, {
    "County": "Morton",
    "State": "Kansas"
  }, {
    "County": "Morton",
    "State": "North Dakota"
  }, {
    "County": "Motley",
    "State": "Texas"
  }, {
    "County": "Moultrie",
    "State": "Illinois"
  }, {
    "County": "Mountrail",
    "State": "North Dakota"
  }, {
    "County": "Mower",
    "State": "Minnesota"
  }, {
    "County": "Muhlenberg",
    "State": "Kentucky"
  }, {
    "County": "Multnomah",
    "State": "Oregon"
  }, {
    "County": "Murray",
    "State": "Oklahoma"
  }, {
    "County": "Murray",
    "State": "Georgia"
  }, {
    "County": "Murray",
    "State": "Minnesota"
  }, {
    "County": "Muscatine",
    "State": "Iowa"
  }, {
    "County": "Muscogee",
    "State": "Georgia"
  }, {
    "County": "Muskegon",
    "State": "Michigan"
  }, {
    "County": "Muskingum",
    "State": "Ohio"
  }, {
    "County": "Muskogee",
    "State": "Oklahoma"
  }, {
    "County": "Musselshell",
    "State": "Montana"
  }, {
    "County": "Nacogdoches",
    "State": "Texas"
  }, {
    "County": "Naguabo",
    "State": "Puerto Rico"
  }, {
    "County": "Nance",
    "State": "Nebraska"
  }, {
    "County": "Nantucket",
    "State": "Massachusetts"
  }, {
    "County": "Napa",
    "State": "California"
  }, {
    "County": "Naranjito",
    "State": "Puerto Rico"
  }, {
    "County": "Nash",
    "State": "North Carolina"
  }, {
    "County": "Nassau",
    "State": "Florida"
  }, {
    "County": "Nassau",
    "State": "New York"
  }, {
    "County": "Natchitoches",
    "State": "Louisiana"
  }, {
    "County": "Natrona",
    "State": "Wyoming"
  }, {
    "County": "Navajo",
    "State": "Arizona"
  }, {
    "County": "Navarro",
    "State": "Texas"
  }, {
    "County": "Nelson",
    "State": "Kentucky"
  }, {
    "County": "Nelson",
    "State": "North Dakota"
  }, {
    "County": "Nelson",
    "State": "Virginia"
  }, {
    "County": "Nemaha",
    "State": "Kansas"
  }, {
    "County": "Nemaha",
    "State": "Nebraska"
  }, {
    "County": "Neosho",
    "State": "Kansas"
  }, {
    "County": "Neshoba",
    "State": "Mississippi"
  }, {
    "County": "Ness",
    "State": "Kansas"
  }, {
    "County": "Nevada",
    "State": "California"
  }, {
    "County": "Nevada",
    "State": "Arkansas"
  }, {
    "County": "New Castle",
    "State": "Delaware"
  }, {
    "County": "New Hanover",
    "State": "North Carolina"
  }, {
    "County": "New Haven",
    "State": "Connecticut"
  }, {
    "County": "New Kent",
    "State": "Virginia"
  }, {
    "County": "New London",
    "State": "Connecticut"
  }, {
    "County": "New Madrid",
    "State": "Missouri"
  }, {
    "County": "New York",
    "State": "New York"
  }, {
    "County": "Newaygo",
    "State": "Michigan"
  }, {
    "County": "Newberry",
    "State": "South Carolina"
  }, {
    "County": "Newport",
    "State": "Rhode Island"
  }, {
    "County": "Newport News",
    "State": "Virginia"
  }, {
    "County": "Newton",
    "State": "Texas"
  }, {
    "County": "Newton",
    "State": "Mississippi"
  }, {
    "County": "Newton",
    "State": "Arkansas"
  }, {
    "County": "Newton",
    "State": "Missouri"
  }, {
    "County": "Newton",
    "State": "Georgia"
  }, {
    "County": "Newton",
    "State": "Indiana"
  }, {
    "County": "Nez Perce",
    "State": "Idaho"
  }, {
    "County": "Niagara",
    "State": "New York"
  }, {
    "County": "Nicholas",
    "State": "Kentucky"
  }, {
    "County": "Nicholas",
    "State": "West Virginia"
  }, {
    "County": "Nicollet",
    "State": "Minnesota"
  }, {
    "County": "Niobrara",
    "State": "Wyoming"
  }, {
    "County": "Noble",
    "State": "Oklahoma"
  }, {
    "County": "Noble",
    "State": "Indiana"
  }, {
    "County": "Noble",
    "State": "Ohio"
  }, {
    "County": "Nobles",
    "State": "Minnesota"
  }, {
    "County": "Nodaway",
    "State": "Missouri"
  }, {
    "County": "Nolan",
    "State": "Texas"
  }, {
    "County": "Nome",
    "State": "Alaska"
  }, {
    "County": "Norfolk",
    "State": "Virginia"
  }, {
    "County": "Norfolk",
    "State": "Massachusetts"
  }, {
    "County": "Norman",
    "State": "Minnesota"
  }, {
    "County": "North Slope",
    "State": "Alaska"
  }, {
    "County": "Northampton",
    "State": "North Carolina"
  }, {
    "County": "Northampton",
    "State": "Virginia"
  }, {
    "County": "Northampton",
    "State": "Pennsylvania"
  }, {
    "County": "Northumberland",
    "State": "Virginia"
  }, {
    "County": "Northumberland",
    "State": "Pennsylvania"
  }, {
    "County": "Northwest Arctic",
    "State": "Alaska"
  }, {
    "County": "Norton",
    "State": "Kansas"
  }, {
    "County": "Norton",
    "State": "Virginia"
  }, {
    "County": "Nottoway",
    "State": "Virginia"
  }, {
    "County": "Nowata",
    "State": "Oklahoma"
  }, {
    "County": "Noxubee",
    "State": "Mississippi"
  }, {
    "County": "Nuckolls",
    "State": "Nebraska"
  }, {
    "County": "Nueces",
    "State": "Texas"
  }, {
    "County": "Nye",
    "State": "Nevada"
  }, {
    "County": "O\u0027Brien",
    "State": "Iowa"
  }, {
    "County": "Oakland",
    "State": "Michigan"
  }, {
    "County": "Obion",
    "State": "Tennessee"
  }, {
    "County": "Ocean",
    "State": "New Jersey"
  }, {
    "County": "Oceana",
    "State": "Michigan"
  }, {
    "County": "Ochiltree",
    "State": "Texas"
  }, {
    "County": "Oconee",
    "State": "Georgia"
  }, {
    "County": "Oconee",
    "State": "South Carolina"
  }, {
    "County": "Oconto",
    "State": "Wisconsin"
  }, {
    "County": "Ogemaw",
    "State": "Michigan"
  }, {
    "County": "Oglala Lakota",
    "State": "South Dakota"
  }, {
    "County": "Ogle",
    "State": "Illinois"
  }, {
    "County": "Oglethorpe",
    "State": "Georgia"
  }, {
    "County": "Ohio",
    "State": "Kentucky"
  }, {
    "County": "Ohio",
    "State": "Indiana"
  }, {
    "County": "Ohio",
    "State": "West Virginia"
  }, {
    "County": "Okaloosa",
    "State": "Florida"
  }, {
    "County": "Okanogan",
    "State": "Washington"
  }, {
    "County": "Okeechobee",
    "State": "Florida"
  }, {
    "County": "Okfuskee",
    "State": "Oklahoma"
  }, {
    "County": "Oklahoma",
    "State": "Oklahoma"
  }, {
    "County": "Okmulgee",
    "State": "Oklahoma"
  }, {
    "County": "Oktibbeha",
    "State": "Mississippi"
  }, {
    "County": "Oldham",
    "State": "Texas"
  }, {
    "County": "Oldham",
    "State": "Kentucky"
  }, {
    "County": "Oliver",
    "State": "North Dakota"
  }, {
    "County": "Olmsted",
    "State": "Minnesota"
  }, {
    "County": "Oneida",
    "State": "Idaho"
  }, {
    "County": "Oneida",
    "State": "Wisconsin"
  }, {
    "County": "Oneida",
    "State": "New York"
  }, {
    "County": "Onondaga",
    "State": "New York"
  }, {
    "County": "Onslow",
    "State": "North Carolina"
  }, {
    "County": "Ontario",
    "State": "New York"
  }, {
    "County": "Ontonagon",
    "State": "Michigan"
  }, {
    "County": "Orange",
    "State": "California"
  }, {
    "County": "Orange",
    "State": "Texas"
  }, {
    "County": "Orange",
    "State": "Indiana"
  }, {
    "County": "Orange",
    "State": "Florida"
  }, {
    "County": "Orange",
    "State": "North Carolina"
  }, {
    "County": "Orange",
    "State": "Virginia"
  }, {
    "County": "Orange",
    "State": "New York"
  }, {
    "County": "Orange",
    "State": "Vermont"
  }, {
    "County": "Orangeburg",
    "State": "South Carolina"
  }, {
    "County": "Oregon",
    "State": "Missouri"
  }, {
    "County": "Orleans",
    "State": "Louisiana"
  }, {
    "County": "Orleans",
    "State": "New York"
  }, {
    "County": "Orleans",
    "State": "Vermont"
  }, {
    "County": "Orocovis",
    "State": "Puerto Rico"
  }, {
    "County": "Osage",
    "State": "Oklahoma"
  }, {
    "County": "Osage",
    "State": "Kansas"
  }, {
    "County": "Osage",
    "State": "Missouri"
  }, {
    "County": "Osborne",
    "State": "Kansas"
  }, {
    "County": "Osceola",
    "State": "Iowa"
  }, {
    "County": "Osceola",
    "State": "Michigan"
  }, {
    "County": "Osceola",
    "State": "Florida"
  }, {
    "County": "Oscoda",
    "State": "Michigan"
  }, {
    "County": "Oswego",
    "State": "New York"
  }, {
    "County": "Otero",
    "State": "New Mexico"
  }, {
    "County": "Otero",
    "State": "Colorado"
  }, {
    "County": "Otoe",
    "State": "Nebraska"
  }, {
    "County": "Otsego",
    "State": "Michigan"
  }, {
    "County": "Otsego",
    "State": "New York"
  }, {
    "County": "Ottawa",
    "State": "Oklahoma"
  }, {
    "County": "Ottawa",
    "State": "Kansas"
  }, {
    "County": "Ottawa",
    "State": "Michigan"
  }, {
    "County": "Ottawa",
    "State": "Ohio"
  }, {
    "County": "Otter Tail",
    "State": "Minnesota"
  }, {
    "County": "Ouachita",
    "State": "Louisiana"
  }, {
    "County": "Ouachita",
    "State": "Arkansas"
  }, {
    "County": "Ouray",
    "State": "Colorado"
  }, {
    "County": "Outagamie",
    "State": "Wisconsin"
  }, {
    "County": "Overton",
    "State": "Tennessee"
  }, {
    "County": "Owen",
    "State": "Indiana"
  }, {
    "County": "Owen",
    "State": "Kentucky"
  }, {
    "County": "Owsley",
    "State": "Kentucky"
  }, {
    "County": "Owyhee",
    "State": "Idaho"
  }, {
    "County": "Oxford",
    "State": "Maine"
  }, {
    "County": "Ozark",
    "State": "Missouri"
  }, {
    "County": "Ozaukee",
    "State": "Wisconsin"
  }, {
    "County": "Pacific",
    "State": "Washington"
  }, {
    "County": "Page",
    "State": "Iowa"
  }, {
    "County": "Page",
    "State": "Virginia"
  }, {
    "County": "Palm Beach",
    "State": "Florida"
  }, {
    "County": "Palo Alto",
    "State": "Iowa"
  }, {
    "County": "Palo Pinto",
    "State": "Texas"
  }, {
    "County": "Pamlico",
    "State": "North Carolina"
  }, {
    "County": "Panola",
    "State": "Texas"
  }, {
    "County": "Panola",
    "State": "Mississippi"
  }, {
    "County": "Park",
    "State": "Colorado"
  }, {
    "County": "Park",
    "State": "Montana"
  }, {
    "County": "Park",
    "State": "Wyoming"
  }, {
    "County": "Parke",
    "State": "Indiana"
  }, {
    "County": "Parker",
    "State": "Texas"
  }, {
    "County": "Parmer",
    "State": "Texas"
  }, {
    "County": "Pasco",
    "State": "Florida"
  }, {
    "County": "Pasquotank",
    "State": "North Carolina"
  }, {
    "County": "Passaic",
    "State": "New Jersey"
  }, {
    "County": "Patillas",
    "State": "Puerto Rico"
  }, {
    "County": "Patrick",
    "State": "Virginia"
  }, {
    "County": "Paulding",
    "State": "Georgia"
  }, {
    "County": "Paulding",
    "State": "Ohio"
  }, {
    "County": "Pawnee",
    "State": "Oklahoma"
  }, {
    "County": "Pawnee",
    "State": "Kansas"
  }, {
    "County": "Pawnee",
    "State": "Nebraska"
  }, {
    "County": "Payette",
    "State": "Idaho"
  }, {
    "County": "Payne",
    "State": "Oklahoma"
  }, {
    "County": "Peach",
    "State": "Georgia"
  }, {
    "County": "Pearl River",
    "State": "Mississippi"
  }, {
    "County": "Pecos",
    "State": "Texas"
  }, {
    "County": "Pembina",
    "State": "North Dakota"
  }, {
    "County": "Pemiscot",
    "State": "Missouri"
  }, {
    "County": "Pend Oreille",
    "State": "Washington"
  }, {
    "County": "Pender",
    "State": "North Carolina"
  }, {
    "County": "Pendleton",
    "State": "Kentucky"
  }, {
    "County": "Pendleton",
    "State": "West Virginia"
  }, {
    "County": "Pennington",
    "State": "South Dakota"
  }, {
    "County": "Pennington",
    "State": "Minnesota"
  }, {
    "County": "Penobscot",
    "State": "Maine"
  }, {
    "County": "Penuelas",
    "State": "Puerto Rico"
  }, {
    "County": "Peoria",
    "State": "Illinois"
  }, {
    "County": "Pepin",
    "State": "Wisconsin"
  }, {
    "County": "Perkins",
    "State": "Nebraska"
  }, {
    "County": "Perkins",
    "State": "South Dakota"
  }, {
    "County": "Perquimans",
    "State": "North Carolina"
  }, {
    "County": "Perry",
    "State": "Arkansas"
  }, {
    "County": "Perry",
    "State": "Mississippi"
  }, {
    "County": "Perry",
    "State": "Alabama"
  }, {
    "County": "Perry",
    "State": "Tennessee"
  }, {
    "County": "Perry",
    "State": "Illinois"
  }, {
    "County": "Perry",
    "State": "Missouri"
  }, {
    "County": "Perry",
    "State": "Indiana"
  }, {
    "County": "Perry",
    "State": "Kentucky"
  }, {
    "County": "Perry",
    "State": "Ohio"
  }, {
    "County": "Perry",
    "State": "Pennsylvania"
  }, {
    "County": "Pershing",
    "State": "Nevada"
  }, {
    "County": "Person",
    "State": "North Carolina"
  }, {
    "County": "Petersburg",
    "State": "Alaska"
  }, {
    "County": "Petersburg",
    "State": "Virginia"
  }, {
    "County": "Petroleum",
    "State": "Montana"
  }, {
    "County": "Pettis",
    "State": "Missouri"
  }, {
    "County": "Phelps",
    "State": "Nebraska"
  }, {
    "County": "Phelps",
    "State": "Missouri"
  }, {
    "County": "Philadelphia",
    "State": "Pennsylvania"
  }, {
    "County": "Phillips",
    "State": "Colorado"
  }, {
    "County": "Phillips",
    "State": "Kansas"
  }, {
    "County": "Phillips",
    "State": "Arkansas"
  }, {
    "County": "Phillips",
    "State": "Montana"
  }, {
    "County": "Piatt",
    "State": "Illinois"
  }, {
    "County": "Pickaway",
    "State": "Ohio"
  }, {
    "County": "Pickens",
    "State": "Alabama"
  }, {
    "County": "Pickens",
    "State": "Georgia"
  }, {
    "County": "Pickens",
    "State": "South Carolina"
  }, {
    "County": "Pickett",
    "State": "Tennessee"
  }, {
    "County": "Pierce",
    "State": "Nebraska"
  }, {
    "County": "Pierce",
    "State": "Washington"
  }, {
    "County": "Pierce",
    "State": "North Dakota"
  }, {
    "County": "Pierce",
    "State": "Wisconsin"
  }, {
    "County": "Pierce",
    "State": "Georgia"
  }, {
    "County": "Pike",
    "State": "Mississippi"
  }, {
    "County": "Pike",
    "State": "Arkansas"
  }, {
    "County": "Pike",
    "State": "Alabama"
  }, {
    "County": "Pike",
    "State": "Georgia"
  }, {
    "County": "Pike",
    "State": "Illinois"
  }, {
    "County": "Pike",
    "State": "Missouri"
  }, {
    "County": "Pike",
    "State": "Indiana"
  }, {
    "County": "Pike",
    "State": "Kentucky"
  }, {
    "County": "Pike",
    "State": "Ohio"
  }, {
    "County": "Pike",
    "State": "Pennsylvania"
  }, {
    "County": "Pima",
    "State": "Arizona"
  }, {
    "County": "Pinal",
    "State": "Arizona"
  }, {
    "County": "Pine",
    "State": "Minnesota"
  }, {
    "County": "Pinellas",
    "State": "Florida"
  }, {
    "County": "Pipestone",
    "State": "Minnesota"
  }, {
    "County": "Piscataquis",
    "State": "Maine"
  }, {
    "County": "Pitkin",
    "State": "Colorado"
  }, {
    "County": "Pitt",
    "State": "North Carolina"
  }, {
    "County": "Pittsburg",
    "State": "Oklahoma"
  }, {
    "County": "Pittsylvania",
    "State": "Virginia"
  }, {
    "County": "Piute",
    "State": "Utah"
  }, {
    "County": "Placer",
    "State": "California"
  }, {
    "County": "Plaquemines",
    "State": "Louisiana"
  }, {
    "County": "Platte",
    "State": "Wyoming"
  }, {
    "County": "Platte",
    "State": "Missouri"
  }, {
    "County": "Platte",
    "State": "Nebraska"
  }, {
    "County": "Pleasants",
    "State": "West Virginia"
  }, {
    "County": "Plumas",
    "State": "California"
  }, {
    "County": "Plymouth",
    "State": "Iowa"
  }, {
    "County": "Plymouth",
    "State": "Massachusetts"
  }, {
    "County": "Pocahontas",
    "State": "Iowa"
  }, {
    "County": "Pocahontas",
    "State": "West Virginia"
  }, {
    "County": "Poinsett",
    "State": "Arkansas"
  }, {
    "County": "Pointe Coupee",
    "State": "Louisiana"
  }, {
    "County": "Polk",
    "State": "Texas"
  }, {
    "County": "Polk",
    "State": "Nebraska"
  }, {
    "County": "Polk",
    "State": "Arkansas"
  }, {
    "County": "Polk",
    "State": "Georgia"
  }, {
    "County": "Polk",
    "State": "Tennessee"
  }, {
    "County": "Polk",
    "State": "Missouri"
  }, {
    "County": "Polk",
    "State": "Iowa"
  }, {
    "County": "Polk",
    "State": "Oregon"
  }, {
    "County": "Polk",
    "State": "Minnesota"
  }, {
    "County": "Polk",
    "State": "Wisconsin"
  }, {
    "County": "Polk",
    "State": "Florida"
  }, {
    "County": "Polk",
    "State": "North Carolina"
  }, {
    "County": "Ponce",
    "State": "Puerto Rico"
  }, {
    "County": "Pondera",
    "State": "Montana"
  }, {
    "County": "Pontotoc",
    "State": "Oklahoma"
  }, {
    "County": "Pontotoc",
    "State": "Mississippi"
  }, {
    "County": "Pope",
    "State": "Arkansas"
  }, {
    "County": "Pope",
    "State": "Illinois"
  }, {
    "County": "Pope",
    "State": "Minnesota"
  }, {
    "County": "Poquoson",
    "State": "Virginia"
  }, {
    "County": "Portage",
    "State": "Wisconsin"
  }, {
    "County": "Portage",
    "State": "Ohio"
  }, {
    "County": "Porter",
    "State": "Indiana"
  }, {
    "County": "Portsmouth",
    "State": "Virginia"
  }, {
    "County": "Posey",
    "State": "Indiana"
  }, {
    "County": "Pottawatomie",
    "State": "Oklahoma"
  }, {
    "County": "Pottawatomie",
    "State": "Kansas"
  }, {
    "County": "Pottawattamie",
    "State": "Iowa"
  }, {
    "County": "Potter",
    "State": "Texas"
  }, {
    "County": "Potter",
    "State": "South Dakota"
  }, {
    "County": "Potter",
    "State": "Pennsylvania"
  }, {
    "County": "Powder River",
    "State": "Montana"
  }, {
    "County": "Powell",
    "State": "Montana"
  }, {
    "County": "Powell",
    "State": "Kentucky"
  }, {
    "County": "Power",
    "State": "Idaho"
  }, {
    "County": "Poweshiek",
    "State": "Iowa"
  }, {
    "County": "Powhatan",
    "State": "Virginia"
  }, {
    "County": "Prairie",
    "State": "Arkansas"
  }, {
    "County": "Prairie",
    "State": "Montana"
  }, {
    "County": "Pratt",
    "State": "Kansas"
  }, {
    "County": "Preble",
    "State": "Ohio"
  }, {
    "County": "Prentiss",
    "State": "Mississippi"
  }, {
    "County": "Presidio",
    "State": "Texas"
  }, {
    "County": "Presque Isle",
    "State": "Michigan"
  }, {
    "County": "Preston",
    "State": "West Virginia"
  }, {
    "County": "Price",
    "State": "Wisconsin"
  }, {
    "County": "Prince Edward",
    "State": "Virginia"
  }, {
    "County": "Prince George",
    "State": "Virginia"
  }, {
    "County": "Prince George\u0027s",
    "State": "Maryland"
  }, {
    "County": "Prince of Wales-Hyder",
    "State": "Alaska"
  }, {
    "County": "Prince William",
    "State": "Virginia"
  }, {
    "County": "Providence",
    "State": "Rhode Island"
  }, {
    "County": "Prowers",
    "State": "Colorado"
  }, {
    "County": "Pueblo",
    "State": "Colorado"
  }, {
    "County": "Pulaski",
    "State": "Arkansas"
  }, {
    "County": "Pulaski",
    "State": "Illinois"
  }, {
    "County": "Pulaski",
    "State": "Kentucky"
  }, {
    "County": "Pulaski",
    "State": "Missouri"
  }, {
    "County": "Pulaski",
    "State": "Indiana"
  }, {
    "County": "Pulaski",
    "State": "Georgia"
  }, {
    "County": "Pulaski",
    "State": "Virginia"
  }, {
    "County": "Pushmataha",
    "State": "Oklahoma"
  }, {
    "County": "Putnam",
    "State": "Tennessee"
  }, {
    "County": "Putnam",
    "State": "Missouri"
  }, {
    "County": "Putnam",
    "State": "Illinois"
  }, {
    "County": "Putnam",
    "State": "Indiana"
  }, {
    "County": "Putnam",
    "State": "Ohio"
  }, {
    "County": "Putnam",
    "State": "Florida"
  }, {
    "County": "Putnam",
    "State": "Georgia"
  }, {
    "County": "Putnam",
    "State": "West Virginia"
  }, {
    "County": "Putnam",
    "State": "New York"
  }, {
    "County": "Quay",
    "State": "New Mexico"
  }, {
    "County": "Quebradillas",
    "State": "Puerto Rico"
  }, {
    "County": "Queen Anne\u0027s",
    "State": "Maryland"
  }, {
    "County": "Queens",
    "State": "New York"
  }, {
    "County": "Quitman",
    "State": "Mississippi"
  }, {
    "County": "Quitman",
    "State": "Georgia"
  }, {
    "County": "Rabun",
    "State": "Georgia"
  }, {
    "County": "Racine",
    "State": "Wisconsin"
  }, {
    "County": "Radford",
    "State": "Virginia"
  }, {
    "County": "Rains",
    "State": "Texas"
  }, {
    "County": "Raleigh",
    "State": "West Virginia"
  }, {
    "County": "Ralls",
    "State": "Missouri"
  }, {
    "County": "Ramsey",
    "State": "North Dakota"
  }, {
    "County": "Ramsey",
    "State": "Minnesota"
  }, {
    "County": "Randall",
    "State": "Texas"
  }, {
    "County": "Randolph",
    "State": "Arkansas"
  }, {
    "County": "Randolph",
    "State": "Georgia"
  }, {
    "County": "Randolph",
    "State": "Alabama"
  }, {
    "County": "Randolph",
    "State": "Missouri"
  }, {
    "County": "Randolph",
    "State": "Illinois"
  }, {
    "County": "Randolph",
    "State": "Indiana"
  }, {
    "County": "Randolph",
    "State": "North Carolina"
  }, {
    "County": "Randolph",
    "State": "West Virginia"
  }, {
    "County": "Rankin",
    "State": "Mississippi"
  }, {
    "County": "Ransom",
    "State": "North Dakota"
  }, {
    "County": "Rapides",
    "State": "Louisiana"
  }, {
    "County": "Rappahannock",
    "State": "Virginia"
  }, {
    "County": "Ravalli",
    "State": "Montana"
  }, {
    "County": "Rawlins",
    "State": "Kansas"
  }, {
    "County": "Ray",
    "State": "Missouri"
  }, {
    "County": "Reagan",
    "State": "Texas"
  }, {
    "County": "Real",
    "State": "Texas"
  }, {
    "County": "Red Lake",
    "State": "Minnesota"
  }, {
    "County": "Red River",
    "State": "Texas"
  }, {
    "County": "Red River",
    "State": "Louisiana"
  }, {
    "County": "Red Willow",
    "State": "Nebraska"
  }, {
    "County": "Redwood",
    "State": "Minnesota"
  }, {
    "County": "Reeves",
    "State": "Texas"
  }, {
    "County": "Refugio",
    "State": "Texas"
  }, {
    "County": "Reno",
    "State": "Kansas"
  }, {
    "County": "Rensselaer",
    "State": "New York"
  }, {
    "County": "Renville",
    "State": "North Dakota"
  }, {
    "County": "Renville",
    "State": "Minnesota"
  }, {
    "County": "Republic",
    "State": "Kansas"
  }, {
    "County": "Reynolds",
    "State": "Missouri"
  }, {
    "County": "Rhea",
    "State": "Tennessee"
  }, {
    "County": "Rice",
    "State": "Kansas"
  }, {
    "County": "Rice",
    "State": "Minnesota"
  }, {
    "County": "Rich",
    "State": "Utah"
  }, {
    "County": "Richardson",
    "State": "Nebraska"
  }, {
    "County": "Richland",
    "State": "Louisiana"
  }, {
    "County": "Richland",
    "State": "Wisconsin"
  }, {
    "County": "Richland",
    "State": "Illinois"
  }, {
    "County": "Richland",
    "State": "Montana"
  }, {
    "County": "Richland",
    "State": "North Dakota"
  }, {
    "County": "Richland",
    "State": "South Carolina"
  }, {
    "County": "Richland",
    "State": "Ohio"
  }, {
    "County": "Richmond",
    "State": "Georgia"
  }, {
    "County": "Richmond",
    "State": "North Carolina"
  }, {
    "County": "Richmond",
    "State": "New York"
  }, {
    "County": "Richmond City",
    "State": "Virginia"
  }, {
    "County": "Richmond County",
    "State": "Virginia"
  }, {
    "County": "Riley",
    "State": "Kansas"
  }, {
    "County": "Rincon",
    "State": "Puerto Rico"
  }, {
    "County": "Ringgold",
    "State": "Iowa"
  }, {
    "County": "Rio Arriba",
    "State": "New Mexico"
  }, {
    "County": "Rio Blanco",
    "State": "Colorado"
  }, {
    "County": "Rio Grande",
    "State": "Colorado"
  }, {
    "County": "Rio Grande",
    "State": "Puerto Rico"
  }, {
    "County": "Ripley",
    "State": "Missouri"
  }, {
    "County": "Ripley",
    "State": "Indiana"
  }, {
    "County": "Ritchie",
    "State": "West Virginia"
  }, {
    "County": "Riverside",
    "State": "California"
  }, {
    "County": "Roane",
    "State": "Tennessee"
  }, {
    "County": "Roane",
    "State": "West Virginia"
  }, {
    "County": "Roanoke City",
    "State": "Virginia"
  }, {
    "County": "Roanoke County",
    "State": "Virginia"
  }, {
    "County": "Roberts",
    "State": "Texas"
  }, {
    "County": "Roberts",
    "State": "South Dakota"
  }, {
    "County": "Robertson",
    "State": "Texas"
  }, {
    "County": "Robertson",
    "State": "Tennessee"
  }, {
    "County": "Robertson",
    "State": "Kentucky"
  }, {
    "County": "Robeson",
    "State": "North Carolina"
  }, {
    "County": "Rock",
    "State": "Nebraska"
  }, {
    "County": "Rock",
    "State": "Minnesota"
  }, {
    "County": "Rock",
    "State": "Wisconsin"
  }, {
    "County": "Rock Island",
    "State": "Illinois"
  }, {
    "County": "Rockbridge",
    "State": "Virginia"
  }, {
    "County": "Rockcastle",
    "State": "Kentucky"
  }, {
    "County": "Rockdale",
    "State": "Georgia"
  }, {
    "County": "Rockingham",
    "State": "North Carolina"
  }, {
    "County": "Rockingham",
    "State": "Virginia"
  }, {
    "County": "Rockingham",
    "State": "New Hampshire"
  }, {
    "County": "Rockland",
    "State": "New York"
  }, {
    "County": "Rockwall",
    "State": "Texas"
  }, {
    "County": "Roger Mills",
    "State": "Oklahoma"
  }, {
    "County": "Rogers",
    "State": "Oklahoma"
  }, {
    "County": "Rolette",
    "State": "North Dakota"
  }, {
    "County": "Rooks",
    "State": "Kansas"
  }, {
    "County": "Roosevelt",
    "State": "New Mexico"
  }, {
    "County": "Roosevelt",
    "State": "Montana"
  }, {
    "County": "Roscommon",
    "State": "Michigan"
  }, {
    "County": "Roseau",
    "State": "Minnesota"
  }, {
    "County": "Rosebud",
    "State": "Montana"
  }, {
    "County": "Ross",
    "State": "Ohio"
  }, {
    "County": "Routt",
    "State": "Colorado"
  }, {
    "County": "Rowan",
    "State": "North Carolina"
  }, {
    "County": "Rowan",
    "State": "Kentucky"
  }, {
    "County": "Runnels",
    "State": "Texas"
  }, {
    "County": "Rush",
    "State": "Kansas"
  }, {
    "County": "Rush",
    "State": "Indiana"
  }, {
    "County": "Rusk",
    "State": "Texas"
  }, {
    "County": "Rusk",
    "State": "Wisconsin"
  }, {
    "County": "Russell",
    "State": "Kansas"
  }, {
    "County": "Russell",
    "State": "Alabama"
  }, {
    "County": "Russell",
    "State": "Kentucky"
  }, {
    "County": "Russell",
    "State": "Virginia"
  }, {
    "County": "Rutherford",
    "State": "Tennessee"
  }, {
    "County": "Rutherford",
    "State": "North Carolina"
  }, {
    "County": "Rutland",
    "State": "Vermont"
  }, {
    "County": "Sabana Grande",
    "State": "Puerto Rico"
  }, {
    "County": "Sabine",
    "State": "Louisiana"
  }, {
    "County": "Sabine",
    "State": "Texas"
  }, {
    "County": "Sac",
    "State": "Iowa"
  }, {
    "County": "Sacramento",
    "State": "California"
  }, {
    "County": "Sagadahoc",
    "State": "Maine"
  }, {
    "County": "Saginaw",
    "State": "Michigan"
  }, {
    "County": "Saguache",
    "State": "Colorado"
  }, {
    "County": "Salem",
    "State": "Virginia"
  }, {
    "County": "Salem",
    "State": "New Jersey"
  }, {
    "County": "Salinas",
    "State": "Puerto Rico"
  }, {
    "County": "Saline",
    "State": "Kansas"
  }, {
    "County": "Saline",
    "State": "Nebraska"
  }, {
    "County": "Saline",
    "State": "Arkansas"
  }, {
    "County": "Saline",
    "State": "Missouri"
  }, {
    "County": "Saline",
    "State": "Illinois"
  }, {
    "County": "Salt Lake",
    "State": "Utah"
  }, {
    "County": "Saluda",
    "State": "South Carolina"
  }, {
    "County": "Sampson",
    "State": "North Carolina"
  }, {
    "County": "San Augustine",
    "State": "Texas"
  }, {
    "County": "San Benito",
    "State": "California"
  }, {
    "County": "San Bernardino",
    "State": "California"
  }, {
    "County": "San Diego",
    "State": "California"
  }, {
    "County": "San Francisco",
    "State": "California"
  }, {
    "County": "San German",
    "State": "Puerto Rico"
  }, {
    "County": "San Jacinto",
    "State": "Texas"
  }, {
    "County": "San Joaquin",
    "State": "California"
  }, {
    "County": "San Juan",
    "State": "New Mexico"
  }, {
    "County": "San Juan",
    "State": "Utah"
  }, {
    "County": "San Juan",
    "State": "Colorado"
  }, {
    "County": "San Juan",
    "State": "Washington"
  }, {
    "County": "San Juan",
    "State": "Puerto Rico"
  }, {
    "County": "San Lorenzo",
    "State": "Puerto Rico"
  }, {
    "County": "San Luis Obispo",
    "State": "California"
  }, {
    "County": "San Mateo",
    "State": "California"
  }, {
    "County": "San Miguel",
    "State": "Colorado"
  }, {
    "County": "San Miguel",
    "State": "New Mexico"
  }, {
    "County": "San Patricio",
    "State": "Texas"
  }, {
    "County": "San Saba",
    "State": "Texas"
  }, {
    "County": "San Sebastian",
    "State": "Puerto Rico"
  }, {
    "County": "Sanborn",
    "State": "South Dakota"
  }, {
    "County": "Sanders",
    "State": "Montana"
  }, {
    "County": "Sandoval",
    "State": "New Mexico"
  }, {
    "County": "Sandusky",
    "State": "Ohio"
  }, {
    "County": "Sangamon",
    "State": "Illinois"
  }, {
    "County": "Sanilac",
    "State": "Michigan"
  }, {
    "County": "Sanpete",
    "State": "Utah"
  }, {
    "County": "Santa Barbara",
    "State": "California"
  }, {
    "County": "Santa Clara",
    "State": "California"
  }, {
    "County": "Santa Cruz",
    "State": "California"
  }, {
    "County": "Santa Cruz",
    "State": "Arizona"
  }, {
    "County": "Santa Fe",
    "State": "New Mexico"
  }, {
    "County": "Santa Isabel",
    "State": "Puerto Rico"
  }, {
    "County": "Santa Rosa",
    "State": "Florida"
  }, {
    "County": "Sarasota",
    "State": "Florida"
  }, {
    "County": "Saratoga",
    "State": "New York"
  }, {
    "County": "Sargent",
    "State": "North Dakota"
  }, {
    "County": "Sarpy",
    "State": "Nebraska"
  }, {
    "County": "Sauk",
    "State": "Wisconsin"
  }, {
    "County": "Saunders",
    "State": "Nebraska"
  }, {
    "County": "Sawyer",
    "State": "Wisconsin"
  }, {
    "County": "Schenectady",
    "State": "New York"
  }, {
    "County": "Schleicher",
    "State": "Texas"
  }, {
    "County": "Schley",
    "State": "Georgia"
  }, {
    "County": "Schoharie",
    "State": "New York"
  }, {
    "County": "Schoolcraft",
    "State": "Michigan"
  }, {
    "County": "Schuyler",
    "State": "Missouri"
  }, {
    "County": "Schuyler",
    "State": "Illinois"
  }, {
    "County": "Schuyler",
    "State": "New York"
  }, {
    "County": "Schuylkill",
    "State": "Pennsylvania"
  }, {
    "County": "Scioto",
    "State": "Ohio"
  }, {
    "County": "Scotland",
    "State": "Missouri"
  }, {
    "County": "Scotland",
    "State": "North Carolina"
  }, {
    "County": "Scott",
    "State": "Kansas"
  }, {
    "County": "Scott",
    "State": "Mississippi"
  }, {
    "County": "Scott",
    "State": "Arkansas"
  }, {
    "County": "Scott",
    "State": "Missouri"
  }, {
    "County": "Scott",
    "State": "Tennessee"
  }, {
    "County": "Scott",
    "State": "Illinois"
  }, {
    "County": "Scott",
    "State": "Iowa"
  }, {
    "County": "Scott",
    "State": "Indiana"
  }, {
    "County": "Scott",
    "State": "Kentucky"
  }, {
    "County": "Scott",
    "State": "Minnesota"
  }, {
    "County": "Scott",
    "State": "Virginia"
  }, {
    "County": "Scotts Bluff",
    "State": "Nebraska"
  }, {
    "County": "Screven",
    "State": "Georgia"
  }, {
    "County": "Scurry",
    "State": "Texas"
  }, {
    "County": "Searcy",
    "State": "Arkansas"
  }, {
    "County": "Sebastian",
    "State": "Arkansas"
  }, {
    "County": "Sedgwick",
    "State": "Colorado"
  }, {
    "County": "Sedgwick",
    "State": "Kansas"
  }, {
    "County": "Seminole",
    "State": "Georgia"
  }, {
    "County": "Seminole",
    "State": "Oklahoma"
  }, {
    "County": "Seminole",
    "State": "Florida"
  }, {
    "County": "Seneca",
    "State": "Ohio"
  }, {
    "County": "Seneca",
    "State": "New York"
  }, {
    "County": "Sequatchie",
    "State": "Tennessee"
  }, {
    "County": "Sequoyah",
    "State": "Oklahoma"
  }, {
    "County": "Sevier",
    "State": "Utah"
  }, {
    "County": "Sevier",
    "State": "Arkansas"
  }, {
    "County": "Sevier",
    "State": "Tennessee"
  }, {
    "County": "Seward",
    "State": "Kansas"
  }, {
    "County": "Seward",
    "State": "Nebraska"
  }, {
    "County": "Shackelford",
    "State": "Texas"
  }, {
    "County": "Shannon",
    "State": "Missouri"
  }, {
    "County": "Sharkey",
    "State": "Mississippi"
  }, {
    "County": "Sharp",
    "State": "Arkansas"
  }, {
    "County": "Shasta",
    "State": "California"
  }, {
    "County": "Shawano",
    "State": "Wisconsin"
  }, {
    "County": "Shawnee",
    "State": "Kansas"
  }, {
    "County": "Sheboygan",
    "State": "Wisconsin"
  }, {
    "County": "Shelby",
    "State": "Iowa"
  }, {
    "County": "Shelby",
    "State": "Texas"
  }, {
    "County": "Shelby",
    "State": "Tennessee"
  }, {
    "County": "Shelby",
    "State": "Alabama"
  }, {
    "County": "Shelby",
    "State": "Missouri"
  }, {
    "County": "Shelby",
    "State": "Illinois"
  }, {
    "County": "Shelby",
    "State": "Kentucky"
  }, {
    "County": "Shelby",
    "State": "Indiana"
  }, {
    "County": "Shelby",
    "State": "Ohio"
  }, {
    "County": "Shenandoah",
    "State": "Virginia"
  }, {
    "County": "Sherburne",
    "State": "Minnesota"
  }, {
    "County": "Sheridan",
    "State": "Kansas"
  }, {
    "County": "Sheridan",
    "State": "Nebraska"
  }, {
    "County": "Sheridan",
    "State": "Wyoming"
  }, {
    "County": "Sheridan",
    "State": "Montana"
  }, {
    "County": "Sheridan",
    "State": "North Dakota"
  }, {
    "County": "Sherman",
    "State": "Texas"
  }, {
    "County": "Sherman",
    "State": "Kansas"
  }, {
    "County": "Sherman",
    "State": "Nebraska"
  }, {
    "County": "Sherman",
    "State": "Oregon"
  }, {
    "County": "Shiawassee",
    "State": "Michigan"
  }, {
    "County": "Shoshone",
    "State": "Idaho"
  }, {
    "County": "Sibley",
    "State": "Minnesota"
  }, {
    "County": "Sierra",
    "State": "California"
  }, {
    "County": "Sierra",
    "State": "New Mexico"
  }, {
    "County": "Silver Bow",
    "State": "Montana"
  }, {
    "County": "Simpson",
    "State": "Mississippi"
  }, {
    "County": "Simpson",
    "State": "Kentucky"
  }, {
    "County": "Sioux",
    "State": "Nebraska"
  }, {
    "County": "Sioux",
    "State": "Iowa"
  }, {
    "County": "Sioux",
    "State": "North Dakota"
  }, {
    "County": "Siskiyou",
    "State": "California"
  }, {
    "County": "Sitka",
    "State": "Alaska"
  }, {
    "County": "Skagit",
    "State": "Washington"
  }, {
    "County": "Skagway",
    "State": "Alaska"
  }, {
    "County": "Skamania",
    "State": "Washington"
  }, {
    "County": "Slope",
    "State": "North Dakota"
  }, {
    "County": "Smith",
    "State": "Texas"
  }, {
    "County": "Smith",
    "State": "Kansas"
  }, {
    "County": "Smith",
    "State": "Mississippi"
  }, {
    "County": "Smith",
    "State": "Tennessee"
  }, {
    "County": "Smyth",
    "State": "Virginia"
  }, {
    "County": "Snohomish",
    "State": "Washington"
  }, {
    "County": "Snyder",
    "State": "Pennsylvania"
  }, {
    "County": "Socorro",
    "State": "New Mexico"
  }, {
    "County": "Solano",
    "State": "California"
  }, {
    "County": "Somerset",
    "State": "Pennsylvania"
  }, {
    "County": "Somerset",
    "State": "Maryland"
  }, {
    "County": "Somerset",
    "State": "New Jersey"
  }, {
    "County": "Somerset",
    "State": "Maine"
  }, {
    "County": "Somervell",
    "State": "Texas"
  }, {
    "County": "Sonoma",
    "State": "California"
  }, {
    "County": "Southampton",
    "State": "Virginia"
  }, {
    "County": "Southeast Fairbanks",
    "State": "Alaska"
  }, {
    "County": "Spalding",
    "State": "Georgia"
  }, {
    "County": "Spartanburg",
    "State": "South Carolina"
  }, {
    "County": "Spencer",
    "State": "Indiana"
  }, {
    "County": "Spencer",
    "State": "Kentucky"
  }, {
    "County": "Spink",
    "State": "South Dakota"
  }, {
    "County": "Spokane",
    "State": "Washington"
  }, {
    "County": "Spotsylvania",
    "State": "Virginia"
  }, {
    "County": "St. Bernard",
    "State": "Louisiana"
  }, {
    "County": "St. Charles",
    "State": "Louisiana"
  }, {
    "County": "St. Charles",
    "State": "Missouri"
  }, {
    "County": "St. Clair",
    "State": "Alabama"
  }, {
    "County": "St. Clair",
    "State": "Missouri"
  }, {
    "County": "St. Clair",
    "State": "Illinois"
  }, {
    "County": "St. Clair",
    "State": "Michigan"
  }, {
    "County": "St. Croix",
    "State": "Wisconsin"
  }, {
    "County": "St. Francis",
    "State": "Arkansas"
  }, {
    "County": "St. Francois",
    "State": "Missouri"
  }, {
    "County": "St. Helena",
    "State": "Louisiana"
  }, {
    "County": "St. James",
    "State": "Louisiana"
  }, {
    "County": "St. John the Baptist",
    "State": "Louisiana"
  }, {
    "County": "St. Johns",
    "State": "Florida"
  }, {
    "County": "St. Joseph",
    "State": "Indiana"
  }, {
    "County": "St. Joseph",
    "State": "Michigan"
  }, {
    "County": "St. Landry",
    "State": "Louisiana"
  }, {
    "County": "St. Lawrence",
    "State": "New York"
  }, {
    "County": "St. Louis",
    "State": "Minnesota"
  }, {
    "County": "St. Louis City",
    "State": "Missouri"
  }, {
    "County": "St. Louis County",
    "State": "Missouri"
  }, {
    "County": "St. Lucie",
    "State": "Florida"
  }, {
    "County": "St. Martin",
    "State": "Louisiana"
  }, {
    "County": "St. Mary",
    "State": "Louisiana"
  }, {
    "County": "St. Mary\u0027s",
    "State": "Maryland"
  }, {
    "County": "St. Tammany",
    "State": "Louisiana"
  }, {
    "County": "Stafford",
    "State": "Kansas"
  }, {
    "County": "Stafford",
    "State": "Virginia"
  }, {
    "County": "Stanislaus",
    "State": "California"
  }, {
    "County": "Stanley",
    "State": "South Dakota"
  }, {
    "County": "Stanly",
    "State": "North Carolina"
  }, {
    "County": "Stanton",
    "State": "Kansas"
  }, {
    "County": "Stanton",
    "State": "Nebraska"
  }, {
    "County": "Stark",
    "State": "Illinois"
  }, {
    "County": "Stark",
    "State": "North Dakota"
  }, {
    "County": "Stark",
    "State": "Ohio"
  }, {
    "County": "Starke",
    "State": "Indiana"
  }, {
    "County": "Starr",
    "State": "Texas"
  }, {
    "County": "Staunton",
    "State": "Virginia"
  }, {
    "County": "Ste. Genevieve",
    "State": "Missouri"
  }, {
    "County": "Stearns",
    "State": "Minnesota"
  }, {
    "County": "Steele",
    "State": "North Dakota"
  }, {
    "County": "Steele",
    "State": "Minnesota"
  }, {
    "County": "Stephens",
    "State": "Texas"
  }, {
    "County": "Stephens",
    "State": "Oklahoma"
  }, {
    "County": "Stephens",
    "State": "Georgia"
  }, {
    "County": "Stephenson",
    "State": "Illinois"
  }, {
    "County": "Sterling",
    "State": "Texas"
  }, {
    "County": "Steuben",
    "State": "Indiana"
  }, {
    "County": "Steuben",
    "State": "New York"
  }, {
    "County": "Stevens",
    "State": "Kansas"
  }, {
    "County": "Stevens",
    "State": "Washington"
  }, {
    "County": "Stevens",
    "State": "Minnesota"
  }, {
    "County": "Stewart",
    "State": "Georgia"
  }, {
    "County": "Stewart",
    "State": "Tennessee"
  }, {
    "County": "Stillwater",
    "State": "Montana"
  }, {
    "County": "Stoddard",
    "State": "Missouri"
  }, {
    "County": "Stokes",
    "State": "North Carolina"
  }, {
    "County": "Stone",
    "State": "Mississippi"
  }, {
    "County": "Stone",
    "State": "Missouri"
  }, {
    "County": "Stone",
    "State": "Arkansas"
  }, {
    "County": "Stonewall",
    "State": "Texas"
  }, {
    "County": "Storey",
    "State": "Nevada"
  }, {
    "County": "Story",
    "State": "Iowa"
  }, {
    "County": "Strafford",
    "State": "New Hampshire"
  }, {
    "County": "Stutsman",
    "State": "North Dakota"
  }, {
    "County": "Sublette",
    "State": "Wyoming"
  }, {
    "County": "Suffolk",
    "State": "Virginia"
  }, {
    "County": "Suffolk",
    "State": "New York"
  }, {
    "County": "Suffolk",
    "State": "Massachusetts"
  }, {
    "County": "Sullivan",
    "State": "Missouri"
  }, {
    "County": "Sullivan",
    "State": "Indiana"
  }, {
    "County": "Sullivan",
    "State": "Tennessee"
  }, {
    "County": "Sullivan",
    "State": "Pennsylvania"
  }, {
    "County": "Sullivan",
    "State": "New York"
  }, {
    "County": "Sullivan",
    "State": "New Hampshire"
  }, {
    "County": "Sully",
    "State": "South Dakota"
  }, {
    "County": "Summers",
    "State": "West Virginia"
  }, {
    "County": "Summit",
    "State": "Utah"
  }, {
    "County": "Summit",
    "State": "Colorado"
  }, {
    "County": "Summit",
    "State": "Ohio"
  }, {
    "County": "Sumner",
    "State": "Kansas"
  }, {
    "County": "Sumner",
    "State": "Tennessee"
  }, {
    "County": "Sumter",
    "State": "Alabama"
  }, {
    "County": "Sumter",
    "State": "Georgia"
  }, {
    "County": "Sumter",
    "State": "Florida"
  }, {
    "County": "Sumter",
    "State": "South Carolina"
  }, {
    "County": "Sunflower",
    "State": "Mississippi"
  }, {
    "County": "Surry",
    "State": "North Carolina"
  }, {
    "County": "Surry",
    "State": "Virginia"
  }, {
    "County": "Susquehanna",
    "State": "Pennsylvania"
  }, {
    "County": "Sussex",
    "State": "Virginia"
  }, {
    "County": "Sussex",
    "State": "Delaware"
  }, {
    "County": "Sussex",
    "State": "New Jersey"
  }, {
    "County": "Sutter",
    "State": "California"
  }, {
    "County": "Sutton",
    "State": "Texas"
  }, {
    "County": "Suwannee",
    "State": "Florida"
  }, {
    "County": "Swain",
    "State": "North Carolina"
  }, {
    "County": "Sweet Grass",
    "State": "Montana"
  }, {
    "County": "Sweetwater",
    "State": "Wyoming"
  }, {
    "County": "Swift",
    "State": "Minnesota"
  }, {
    "County": "Swisher",
    "State": "Texas"
  }, {
    "County": "Switzerland",
    "State": "Indiana"
  }, {
    "County": "Talbot",
    "State": "Georgia"
  }, {
    "County": "Talbot",
    "State": "Maryland"
  }, {
    "County": "Taliaferro",
    "State": "Georgia"
  }, {
    "County": "Talladega",
    "State": "Alabama"
  }, {
    "County": "Tallahatchie",
    "State": "Mississippi"
  }, {
    "County": "Tallapoosa",
    "State": "Alabama"
  }, {
    "County": "Tama",
    "State": "Iowa"
  }, {
    "County": "Taney",
    "State": "Missouri"
  }, {
    "County": "Tangipahoa",
    "State": "Louisiana"
  }, {
    "County": "Taos",
    "State": "New Mexico"
  }, {
    "County": "Tarrant",
    "State": "Texas"
  }, {
    "County": "Tate",
    "State": "Mississippi"
  }, {
    "County": "Tattnall",
    "State": "Georgia"
  }, {
    "County": "Taylor",
    "State": "Texas"
  }, {
    "County": "Taylor",
    "State": "Iowa"
  }, {
    "County": "Taylor",
    "State": "Georgia"
  }, {
    "County": "Taylor",
    "State": "Kentucky"
  }, {
    "County": "Taylor",
    "State": "Wisconsin"
  }, {
    "County": "Taylor",
    "State": "Florida"
  }, {
    "County": "Taylor",
    "State": "West Virginia"
  }, {
    "County": "Tazewell",
    "State": "Illinois"
  }, {
    "County": "Tazewell",
    "State": "Virginia"
  }, {
    "County": "Tehama",
    "State": "California"
  }, {
    "County": "Telfair",
    "State": "Georgia"
  }, {
    "County": "Teller",
    "State": "Colorado"
  }, {
    "County": "Tensas",
    "State": "Louisiana"
  }, {
    "County": "Terrebonne",
    "State": "Louisiana"
  }, {
    "County": "Terrell",
    "State": "Texas"
  }, {
    "County": "Terrell",
    "State": "Georgia"
  }, {
    "County": "Terry",
    "State": "Texas"
  }, {
    "County": "Teton",
    "State": "Idaho"
  }, {
    "County": "Teton",
    "State": "Wyoming"
  }, {
    "County": "Teton",
    "State": "Montana"
  }, {
    "County": "Texas",
    "State": "Oklahoma"
  }, {
    "County": "Texas",
    "State": "Missouri"
  }, {
    "County": "Thayer",
    "State": "Nebraska"
  }, {
    "County": "Thomas",
    "State": "Georgia"
  }, {
    "County": "Thomas",
    "State": "Kansas"
  }, {
    "County": "Thomas",
    "State": "Nebraska"
  }, {
    "County": "Throckmorton",
    "State": "Texas"
  }, {
    "County": "Thurston",
    "State": "Nebraska"
  }, {
    "County": "Thurston",
    "State": "Washington"
  }, {
    "County": "Tift",
    "State": "Georgia"
  }, {
    "County": "Tillamook",
    "State": "Oregon"
  }, {
    "County": "Tillman",
    "State": "Oklahoma"
  }, {
    "County": "Tioga",
    "State": "New York"
  }, {
    "County": "Tioga",
    "State": "Pennsylvania"
  }, {
    "County": "Tippah",
    "State": "Mississippi"
  }, {
    "County": "Tippecanoe",
    "State": "Indiana"
  }, {
    "County": "Tipton",
    "State": "Tennessee"
  }, {
    "County": "Tipton",
    "State": "Indiana"
  }, {
    "County": "Tishomingo",
    "State": "Mississippi"
  }, {
    "County": "Titus",
    "State": "Texas"
  }, {
    "County": "Toa Alta",
    "State": "Puerto Rico"
  }, {
    "County": "Toa Baja",
    "State": "Puerto Rico"
  }, {
    "County": "Todd",
    "State": "South Dakota"
  }, {
    "County": "Todd",
    "State": "Kentucky"
  }, {
    "County": "Todd",
    "State": "Minnesota"
  }, {
    "County": "Tolland",
    "State": "Connecticut"
  }, {
    "County": "Tom Green",
    "State": "Texas"
  }, {
    "County": "Tompkins",
    "State": "New York"
  }, {
    "County": "Tooele",
    "State": "Utah"
  }, {
    "County": "Toole",
    "State": "Montana"
  }, {
    "County": "Toombs",
    "State": "Georgia"
  }, {
    "County": "Torrance",
    "State": "New Mexico"
  }, {
    "County": "Towner",
    "State": "North Dakota"
  }, {
    "County": "Towns",
    "State": "Georgia"
  }, {
    "County": "Traill",
    "State": "North Dakota"
  }, {
    "County": "Transylvania",
    "State": "North Carolina"
  }, {
    "County": "Traverse",
    "State": "Minnesota"
  }, {
    "County": "Travis",
    "State": "Texas"
  }, {
    "County": "Treasure",
    "State": "Montana"
  }, {
    "County": "Trego",
    "State": "Kansas"
  }, {
    "County": "Trempealeau",
    "State": "Wisconsin"
  }, {
    "County": "Treutlen",
    "State": "Georgia"
  }, {
    "County": "Trigg",
    "State": "Kentucky"
  }, {
    "County": "Trimble",
    "State": "Kentucky"
  }, {
    "County": "Trinity",
    "State": "California"
  }, {
    "County": "Trinity",
    "State": "Texas"
  }, {
    "County": "Tripp",
    "State": "South Dakota"
  }, {
    "County": "Troup",
    "State": "Georgia"
  }, {
    "County": "Trousdale",
    "State": "Tennessee"
  }, {
    "County": "Trujillo Alto",
    "State": "Puerto Rico"
  }, {
    "County": "Trumbull",
    "State": "Ohio"
  }, {
    "County": "Tucker",
    "State": "West Virginia"
  }, {
    "County": "Tulare",
    "State": "California"
  }, {
    "County": "Tulsa",
    "State": "Oklahoma"
  }, {
    "County": "Tunica",
    "State": "Mississippi"
  }, {
    "County": "Tuolumne",
    "State": "California"
  }, {
    "County": "Turner",
    "State": "South Dakota"
  }, {
    "County": "Turner",
    "State": "Georgia"
  }, {
    "County": "Tuscaloosa",
    "State": "Alabama"
  }, {
    "County": "Tuscarawas",
    "State": "Ohio"
  }, {
    "County": "Tuscola",
    "State": "Michigan"
  }, {
    "County": "Twiggs",
    "State": "Georgia"
  }, {
    "County": "Twin Falls",
    "State": "Idaho"
  }, {
    "County": "Tyler",
    "State": "Texas"
  }, {
    "County": "Tyler",
    "State": "West Virginia"
  }, {
    "County": "Tyrrell",
    "State": "North Carolina"
  }, {
    "County": "Uinta",
    "State": "Wyoming"
  }, {
    "County": "Uintah",
    "State": "Utah"
  }, {
    "County": "Ulster",
    "State": "New York"
  }, {
    "County": "Umatilla",
    "State": "Oregon"
  }, {
    "County": "Unicoi",
    "State": "Tennessee"
  }, {
    "County": "Union",
    "State": "New Mexico"
  }, {
    "County": "Union",
    "State": "South Dakota"
  }, {
    "County": "Union",
    "State": "Arkansas"
  }, {
    "County": "Union",
    "State": "Louisiana"
  }, {
    "County": "Union",
    "State": "Mississippi"
  }, {
    "County": "Union",
    "State": "Georgia"
  }, {
    "County": "Union",
    "State": "Tennessee"
  }, {
    "County": "Union",
    "State": "Illinois"
  }, {
    "County": "Union",
    "State": "Iowa"
  }, {
    "County": "Union",
    "State": "Kentucky"
  }, {
    "County": "Union",
    "State": "Indiana"
  }, {
    "County": "Union",
    "State": "Oregon"
  }, {
    "County": "Union",
    "State": "Florida"
  }, {
    "County": "Union",
    "State": "South Carolina"
  }, {
    "County": "Union",
    "State": "North Carolina"
  }, {
    "County": "Union",
    "State": "Ohio"
  }, {
    "County": "Union",
    "State": "Pennsylvania"
  }, {
    "County": "Union",
    "State": "New Jersey"
  }, {
    "County": "Upshur",
    "State": "Texas"
  }, {
    "County": "Upshur",
    "State": "West Virginia"
  }, {
    "County": "Upson",
    "State": "Georgia"
  }, {
    "County": "Upton",
    "State": "Texas"
  }, {
    "County": "Utah",
    "State": "Utah"
  }, {
    "County": "Utuado",
    "State": "Puerto Rico"
  }, {
    "County": "Uvalde",
    "State": "Texas"
  }, {
    "County": "Val Verde",
    "State": "Texas"
  }, {
    "County": "Valdez-Cordova",
    "State": "Alaska"
  }, {
    "County": "Valencia",
    "State": "New Mexico"
  }, {
    "County": "Valley",
    "State": "Nebraska"
  }, {
    "County": "Valley",
    "State": "Idaho"
  }, {
    "County": "Valley",
    "State": "Montana"
  }, {
    "County": "Van Buren",
    "State": "Arkansas"
  }, {
    "County": "Van Buren",
    "State": "Tennessee"
  }, {
    "County": "Van Buren",
    "State": "Iowa"
  }, {
    "County": "Van Buren",
    "State": "Michigan"
  }, {
    "County": "Van Wert",
    "State": "Ohio"
  }, {
    "County": "Van Zandt",
    "State": "Texas"
  }, {
    "County": "Vance",
    "State": "North Carolina"
  }, {
    "County": "Vanderburgh",
    "State": "Indiana"
  }, {
    "County": "Vega Alta",
    "State": "Puerto Rico"
  }, {
    "County": "Vega Baja",
    "State": "Puerto Rico"
  }, {
    "County": "Venango",
    "State": "Pennsylvania"
  }, {
    "County": "Ventura",
    "State": "California"
  }, {
    "County": "Vermilion",
    "State": "Louisiana"
  }, {
    "County": "Vermilion",
    "State": "Illinois"
  }, {
    "County": "Vermillion",
    "State": "Indiana"
  }, {
    "County": "Vernon",
    "State": "Louisiana"
  }, {
    "County": "Vernon",
    "State": "Missouri"
  }, {
    "County": "Vernon",
    "State": "Wisconsin"
  }, {
    "County": "Victoria",
    "State": "Texas"
  }, {
    "County": "Vieques",
    "State": "Puerto Rico"
  }, {
    "County": "Vigo",
    "State": "Indiana"
  }, {
    "County": "Vilas",
    "State": "Wisconsin"
  }, {
    "County": "Villalba",
    "State": "Puerto Rico"
  }, {
    "County": "Vinton",
    "State": "Ohio"
  }, {
    "County": "Virginia Beach",
    "State": "Virginia"
  }, {
    "County": "Volusia",
    "State": "Florida"
  }, {
    "County": "Wabash",
    "State": "Illinois"
  }, {
    "County": "Wabash",
    "State": "Indiana"
  }, {
    "County": "Wabasha",
    "State": "Minnesota"
  }, {
    "County": "Wabaunsee",
    "State": "Kansas"
  }, {
    "County": "Wadena",
    "State": "Minnesota"
  }, {
    "County": "Wagoner",
    "State": "Oklahoma"
  }, {
    "County": "Wahkiakum",
    "State": "Washington"
  }, {
    "County": "Wake",
    "State": "North Carolina"
  }, {
    "County": "Wakulla",
    "State": "Florida"
  }, {
    "County": "Waldo",
    "State": "Maine"
  }, {
    "County": "Walker",
    "State": "Texas"
  }, {
    "County": "Walker",
    "State": "Alabama"
  }, {
    "County": "Walker",
    "State": "Georgia"
  }, {
    "County": "Walla Walla",
    "State": "Washington"
  }, {
    "County": "Wallace",
    "State": "Kansas"
  }, {
    "County": "Waller",
    "State": "Texas"
  }, {
    "County": "Wallowa",
    "State": "Oregon"
  }, {
    "County": "Walsh",
    "State": "North Dakota"
  }, {
    "County": "Walthall",
    "State": "Mississippi"
  }, {
    "County": "Walton",
    "State": "Florida"
  }, {
    "County": "Walton",
    "State": "Georgia"
  }, {
    "County": "Walworth",
    "State": "Wisconsin"
  }, {
    "County": "Walworth",
    "State": "South Dakota"
  }, {
    "County": "Wapello",
    "State": "Iowa"
  }, {
    "County": "Ward",
    "State": "Texas"
  }, {
    "County": "Ward",
    "State": "North Dakota"
  }, {
    "County": "Ware",
    "State": "Georgia"
  }, {
    "County": "Warren",
    "State": "Mississippi"
  }, {
    "County": "Warren",
    "State": "Tennessee"
  }, {
    "County": "Warren",
    "State": "Kentucky"
  }, {
    "County": "Warren",
    "State": "Missouri"
  }, {
    "County": "Warren",
    "State": "Iowa"
  }, {
    "County": "Warren",
    "State": "Illinois"
  }, {
    "County": "Warren",
    "State": "Indiana"
  }, {
    "County": "Warren",
    "State": "Ohio"
  }, {
    "County": "Warren",
    "State": "Georgia"
  }, {
    "County": "Warren",
    "State": "North Carolina"
  }, {
    "County": "Warren",
    "State": "Pennsylvania"
  }, {
    "County": "Warren",
    "State": "Virginia"
  }, {
    "County": "Warren",
    "State": "New Jersey"
  }, {
    "County": "Warren",
    "State": "New York"
  }, {
    "County": "Warrick",
    "State": "Indiana"
  }, {
    "County": "Wasatch",
    "State": "Utah"
  }, {
    "County": "Wasco",
    "State": "Oregon"
  }, {
    "County": "Waseca",
    "State": "Minnesota"
  }, {
    "County": "Washakie",
    "State": "Wyoming"
  }, {
    "County": "Washburn",
    "State": "Wisconsin"
  }, {
    "County": "Washington",
    "State": "Utah"
  }, {
    "County": "Washington",
    "State": "Texas"
  }, {
    "County": "Washington",
    "State": "Louisiana"
  }, {
    "County": "Washington",
    "State": "Florida"
  }, {
    "County": "Washington",
    "State": "Oklahoma"
  }, {
    "County": "Washington",
    "State": "Colorado"
  }, {
    "County": "Washington",
    "State": "Kansas"
  }, {
    "County": "Washington",
    "State": "Nebraska"
  }, {
    "County": "Washington",
    "State": "Mississippi"
  }, {
    "County": "Washington",
    "State": "Arkansas"
  }, {
    "County": "Washington",
    "State": "Alabama"
  }, {
    "County": "Washington",
    "State": "Missouri"
  }, {
    "County": "Washington",
    "State": "Illinois"
  }, {
    "County": "Washington",
    "State": "Iowa"
  }, {
    "County": "Washington",
    "State": "Kentucky"
  }, {
    "County": "Washington",
    "State": "Indiana"
  }, {
    "County": "Washington",
    "State": "Wisconsin"
  }, {
    "County": "Washington",
    "State": "Oregon"
  }, {
    "County": "Washington",
    "State": "Idaho"
  }, {
    "County": "Washington",
    "State": "Minnesota"
  }, {
    "County": "Washington",
    "State": "Georgia"
  }, {
    "County": "Washington",
    "State": "Tennessee"
  }, {
    "County": "Washington",
    "State": "Virginia"
  }, {
    "County": "Washington",
    "State": "North Carolina"
  }, {
    "County": "Washington",
    "State": "Ohio"
  }, {
    "County": "Washington",
    "State": "Pennsylvania"
  }, {
    "County": "Washington",
    "State": "Maryland"
  }, {
    "County": "Washington",
    "State": "New York"
  }, {
    "County": "Washington",
    "State": "Rhode Island"
  }, {
    "County": "Washington",
    "State": "Vermont"
  }, {
    "County": "Washington",
    "State": "Maine"
  }, {
    "County": "Washita",
    "State": "Oklahoma"
  }, {
    "County": "Washoe",
    "State": "Nevada"
  }, {
    "County": "Washtenaw",
    "State": "Michigan"
  }, {
    "County": "Watauga",
    "State": "North Carolina"
  }, {
    "County": "Watonwan",
    "State": "Minnesota"
  }, {
    "County": "Waukesha",
    "State": "Wisconsin"
  }, {
    "County": "Waupaca",
    "State": "Wisconsin"
  }, {
    "County": "Waushara",
    "State": "Wisconsin"
  }, {
    "County": "Wayne",
    "State": "Utah"
  }, {
    "County": "Wayne",
    "State": "Nebraska"
  }, {
    "County": "Wayne",
    "State": "Missouri"
  }, {
    "County": "Wayne",
    "State": "Mississippi"
  }, {
    "County": "Wayne",
    "State": "Tennessee"
  }, {
    "County": "Wayne",
    "State": "Kentucky"
  }, {
    "County": "Wayne",
    "State": "Iowa"
  }, {
    "County": "Wayne",
    "State": "Illinois"
  }, {
    "County": "Wayne",
    "State": "Indiana"
  }, {
    "County": "Wayne",
    "State": "Georgia"
  }, {
    "County": "Wayne",
    "State": "North Carolina"
  }, {
    "County": "Wayne",
    "State": "West Virginia"
  }, {
    "County": "Wayne",
    "State": "Ohio"
  }, {
    "County": "Wayne",
    "State": "Michigan"
  }, {
    "County": "Wayne",
    "State": "New York"
  }, {
    "County": "Wayne",
    "State": "Pennsylvania"
  }, {
    "County": "Waynesboro",
    "State": "Virginia"
  }, {
    "County": "Weakley",
    "State": "Tennessee"
  }, {
    "County": "Webb",
    "State": "Texas"
  }, {
    "County": "Weber",
    "State": "Utah"
  }, {
    "County": "Webster",
    "State": "Nebraska"
  }, {
    "County": "Webster",
    "State": "Louisiana"
  }, {
    "County": "Webster",
    "State": "Mississippi"
  }, {
    "County": "Webster",
    "State": "Missouri"
  }, {
    "County": "Webster",
    "State": "Georgia"
  }, {
    "County": "Webster",
    "State": "Iowa"
  }, {
    "County": "Webster",
    "State": "Kentucky"
  }, {
    "County": "Webster",
    "State": "West Virginia"
  }, {
    "County": "Weld",
    "State": "Colorado"
  }, {
    "County": "Wells",
    "State": "Indiana"
  }, {
    "County": "Wells",
    "State": "North Dakota"
  }, {
    "County": "West Baton Rouge",
    "State": "Louisiana"
  }, {
    "County": "West Carroll",
    "State": "Louisiana"
  }, {
    "County": "West Feliciana",
    "State": "Louisiana"
  }, {
    "County": "Westchester",
    "State": "New York"
  }, {
    "County": "Westmoreland",
    "State": "Pennsylvania"
  }, {
    "County": "Westmoreland",
    "State": "Virginia"
  }, {
    "County": "Weston",
    "State": "Wyoming"
  }, {
    "County": "Wetzel",
    "State": "West Virginia"
  }, {
    "County": "Wexford",
    "State": "Michigan"
  }, {
    "County": "Wharton",
    "State": "Texas"
  }, {
    "County": "Whatcom",
    "State": "Washington"
  }, {
    "County": "Wheatland",
    "State": "Montana"
  }, {
    "County": "Wheeler",
    "State": "Texas"
  }, {
    "County": "Wheeler",
    "State": "Nebraska"
  }, {
    "County": "Wheeler",
    "State": "Oregon"
  }, {
    "County": "Wheeler",
    "State": "Georgia"
  }, {
    "County": "White",
    "State": "Arkansas"
  }, {
    "County": "White",
    "State": "Tennessee"
  }, {
    "County": "White",
    "State": "Illinois"
  }, {
    "County": "White",
    "State": "Indiana"
  }, {
    "County": "White",
    "State": "Georgia"
  }, {
    "County": "White Pine",
    "State": "Nevada"
  }, {
    "County": "Whiteside",
    "State": "Illinois"
  }, {
    "County": "Whitfield",
    "State": "Georgia"
  }, {
    "County": "Whitley",
    "State": "Kentucky"
  }, {
    "County": "Whitley",
    "State": "Indiana"
  }, {
    "County": "Whitman",
    "State": "Washington"
  }, {
    "County": "Wibaux",
    "State": "Montana"
  }, {
    "County": "Wichita",
    "State": "Texas"
  }, {
    "County": "Wichita",
    "State": "Kansas"
  }, {
    "County": "Wicomico",
    "State": "Maryland"
  }, {
    "County": "Wilbarger",
    "State": "Texas"
  }, {
    "County": "Wilcox",
    "State": "Alabama"
  }, {
    "County": "Wilcox",
    "State": "Georgia"
  }, {
    "County": "Wilkes",
    "State": "Georgia"
  }, {
    "County": "Wilkes",
    "State": "North Carolina"
  }, {
    "County": "Wilkin",
    "State": "Minnesota"
  }, {
    "County": "Wilkinson",
    "State": "Mississippi"
  }, {
    "County": "Wilkinson",
    "State": "Georgia"
  }, {
    "County": "Will",
    "State": "Illinois"
  }, {
    "County": "Willacy",
    "State": "Texas"
  }, {
    "County": "Williams",
    "State": "Ohio"
  }, {
    "County": "Williams",
    "State": "North Dakota"
  }, {
    "County": "Williamsburg",
    "State": "South Carolina"
  }, {
    "County": "Williamsburg",
    "State": "Virginia"
  }, {
    "County": "Williamson",
    "State": "Texas"
  }, {
    "County": "Williamson",
    "State": "Tennessee"
  }, {
    "County": "Williamson",
    "State": "Illinois"
  }, {
    "County": "Wilson",
    "State": "Texas"
  }, {
    "County": "Wilson",
    "State": "Kansas"
  }, {
    "County": "Wilson",
    "State": "Tennessee"
  }, {
    "County": "Wilson",
    "State": "North Carolina"
  }, {
    "County": "Winchester",
    "State": "Virginia"
  }, {
    "County": "Windham",
    "State": "Connecticut"
  }, {
    "County": "Windham",
    "State": "Vermont"
  }, {
    "County": "Windsor",
    "State": "Vermont"
  }, {
    "County": "Winkler",
    "State": "Texas"
  }, {
    "County": "Winn",
    "State": "Louisiana"
  }, {
    "County": "Winnebago",
    "State": "Iowa"
  }, {
    "County": "Winnebago",
    "State": "Illinois"
  }, {
    "County": "Winnebago",
    "State": "Wisconsin"
  }, {
    "County": "Winneshiek",
    "State": "Iowa"
  }, {
    "County": "Winona",
    "State": "Minnesota"
  }, {
    "County": "Winston",
    "State": "Mississippi"
  }, {
    "County": "Winston",
    "State": "Alabama"
  }, {
    "County": "Wirt",
    "State": "West Virginia"
  }, {
    "County": "Wise",
    "State": "Texas"
  }, {
    "County": "Wise",
    "State": "Virginia"
  }, {
    "County": "Wolfe",
    "State": "Kentucky"
  }, {
    "County": "Wood",
    "State": "Texas"
  }, {
    "County": "Wood",
    "State": "Wisconsin"
  }, {
    "County": "Wood",
    "State": "West Virginia"
  }, {
    "County": "Wood",
    "State": "Ohio"
  }, {
    "County": "Woodbury",
    "State": "Iowa"
  }, {
    "County": "Woodford",
    "State": "Illinois"
  }, {
    "County": "Woodford",
    "State": "Kentucky"
  }, {
    "County": "Woodruff",
    "State": "Arkansas"
  }, {
    "County": "Woods",
    "State": "Oklahoma"
  }, {
    "County": "Woodson",
    "State": "Kansas"
  }, {
    "County": "Woodward",
    "State": "Oklahoma"
  }, {
    "County": "Worcester",
    "State": "Maryland"
  }, {
    "County": "Worcester",
    "State": "Massachusetts"
  }, {
    "County": "Worth",
    "State": "Missouri"
  }, {
    "County": "Worth",
    "State": "Georgia"
  }, {
    "County": "Worth",
    "State": "Iowa"
  }, {
    "County": "Wrangell",
    "State": "Alaska"
  }, {
    "County": "Wright",
    "State": "Missouri"
  }, {
    "County": "Wright",
    "State": "Iowa"
  }, {
    "County": "Wright",
    "State": "Minnesota"
  }, {
    "County": "Wyandot",
    "State": "Ohio"
  }, {
    "County": "Wyandotte",
    "State": "Kansas"
  }, {
    "County": "Wyoming",
    "State": "West Virginia"
  }, {
    "County": "Wyoming",
    "State": "Pennsylvania"
  }, {
    "County": "Wyoming",
    "State": "New York"
  }, {
    "County": "Wythe",
    "State": "Virginia"
  }, {
    "County": "Yabucoa",
    "State": "Puerto Rico"
  }, {
    "County": "Yadkin",
    "State": "North Carolina"
  }, {
    "County": "Yakima",
    "State": "Washington"
  }, {
    "County": "Yakutat",
    "State": "Alaska"
  }, {
    "County": "Yalobusha",
    "State": "Mississippi"
  }, {
    "County": "Yamhill",
    "State": "Oregon"
  }, {
    "County": "Yancey",
    "State": "North Carolina"
  }, {
    "County": "Yankton",
    "State": "South Dakota"
  }, {
    "County": "Yates",
    "State": "New York"
  }, {
    "County": "Yauco",
    "State": "Puerto Rico"
  }, {
    "County": "Yavapai",
    "State": "Arizona"
  }, {
    "County": "Yazoo",
    "State": "Mississippi"
  }, {
    "County": "Yell",
    "State": "Arkansas"
  }, {
    "County": "Yellow Medicine",
    "State": "Minnesota"
  }, {
    "County": "Yellowstone",
    "State": "Montana"
  }, {
    "County": "Yoakum",
    "State": "Texas"
  }, {
    "County": "Yolo",
    "State": "California"
  }, {
    "County": "York",
    "State": "Nebraska"
  }, {
    "County": "York",
    "State": "South Carolina"
  }, {
    "County": "York",
    "State": "Virginia"
  }, {
    "County": "York",
    "State": "Pennsylvania"
  }, {
    "County": "York",
    "State": "Maine"
  }, {
    "County": "Young",
    "State": "Texas"
  }, {
    "County": "Yuba",
    "State": "California"
  }, {
    "County": "Yukon-Koyukuk",
    "State": "Alaska"
  }, {
    "County": "Yuma",
    "State": "Arizona"
  }, {
    "County": "Yuma",
    "State": "Colorado"
  }, {
    "County": "Zapata",
    "State": "Texas"
  }, {
    "County": "Zavala",
    "State": "Texas"
  }, {
    "County": "Ziebach",
    "State": "South Dakota"
  }];




















  public Counties2: County[] = [{
    "County": "Autauga",
    "State": "Alabama"
  }, {
    "County": "Baldwin",
    "State": "Alabama"
  }, {
    "County": "Barbour",
    "State": "Alabama"
  }, {
    "County": "Bibb",
    "State": "Alabama"
  }, {
    "County": "Blount",
    "State": "Alabama"
  }, {
    "County": "Bullock",
    "State": "Alabama"
  }, {
    "County": "Butler",
    "State": "Alabama"
  }, {
    "County": "Calhoun",
    "State": "Alabama"
  }, {
    "County": "Chambers",
    "State": "Alabama"
  }, {
    "County": "Cherokee",
    "State": "Alabama"
  }, {
    "County": "Chilton",
    "State": "Alabama"
  }, {
    "County": "Choctaw",
    "State": "Alabama"
  }, {
    "County": "Clarke",
    "State": "Alabama"
  }, {
    "County": "Clay",
    "State": "Alabama"
  }, {
    "County": "Cleburne",
    "State": "Alabama"
  }, {
    "County": "Coffee",
    "State": "Alabama"
  }, {
    "County": "Colbert",
    "State": "Alabama"
  }, {
    "County": "Conecuh",
    "State": "Alabama"
  }, {
    "County": "Coosa",
    "State": "Alabama"
  }, {
    "County": "Covington",
    "State": "Alabama"
  }, {
    "County": "Crenshaw",
    "State": "Alabama"
  }, {
    "County": "Cullman",
    "State": "Alabama"
  }, {
    "County": "Dale",
    "State": "Alabama"
  }, {
    "County": "Dallas",
    "State": "Alabama"
  }, {
    "County": "De Kalb",
    "State": "Alabama"
  }, {
    "County": "Elmore",
    "State": "Alabama"
  }, {
    "County": "Escambia",
    "State": "Alabama"
  }, {
    "County": "Etowah",
    "State": "Alabama"
  }, {
    "County": "Fayette",
    "State": "Alabama"
  }, {
    "County": "Franklin",
    "State": "Alabama"
  }, {
    "County": "Geneva",
    "State": "Alabama"
  }, {
    "County": "Greene",
    "State": "Alabama"
  }, {
    "County": "Hale",
    "State": "Alabama"
  }, {
    "County": "Henry",
    "State": "Alabama"
  }, {
    "County": "Houston",
    "State": "Alabama"
  }, {
    "County": "Jackson",
    "State": "Alabama"
  }, {
    "County": "Jefferson",
    "State": "Alabama"
  }, {
    "County": "Lamar",
    "State": "Alabama"
  }, {
    "County": "Lauderdale",
    "State": "Alabama"
  }, {
    "County": "Lawrence",
    "State": "Alabama"
  }, {
    "County": "Lee",
    "State": "Alabama"
  }, {
    "County": "Limestone",
    "State": "Alabama"
  }, {
    "County": "Lowndes",
    "State": "Alabama"
  }, {
    "County": "Macon",
    "State": "Alabama"
  }, {
    "County": "Madison",
    "State": "Alabama"
  }, {
    "County": "Marengo",
    "State": "Alabama"
  }, {
    "County": "Marion",
    "State": "Alabama"
  }, {
    "County": "Marshall",
    "State": "Alabama"
  }, {
    "County": "Mobile",
    "State": "Alabama"
  }, {
    "County": "Monroe",
    "State": "Alabama"
  }, {
    "County": "Montgomery",
    "State": "Alabama"
  }, {
    "County": "Morgan",
    "State": "Alabama"
  }, {
    "County": "Perry",
    "State": "Alabama"
  }, {
    "County": "Pickens",
    "State": "Alabama"
  }, {
    "County": "Pike",
    "State": "Alabama"
  }, {
    "County": "Randolph",
    "State": "Alabama"
  }, {
    "County": "Russell",
    "State": "Alabama"
  }, {
    "County": "St Clair",
    "State": "Alabama"
  }, {
    "County": "Shelby",
    "State": "Alabama"
  }, {
    "County": "Sumter",
    "State": "Alabama"
  }, {
    "County": "Talladega",
    "State": "Alabama"
  }, {
    "County": "Tallapoosa",
    "State": "Alabama"
  }, {
    "County": "Tuscaloosa",
    "State": "Alabama"
  }, {
    "County": "Walker",
    "State": "Alabama"
  }, {
    "County": "Washington",
    "State": "Alabama"
  }, {
    "County": "Wilcox",
    "State": "Alabama"
  }, {
    "County": "Winston",
    "State": "Alabama"
  }, {
    "County": "Aleutians East Borough",
    "State": "Alaska"
  }, {
    "County": "Aleutians West Census Areae",
    "State": "Alaska"
  }, {
    "County": "Anchorage Municipality",
    "State": "Alaska"
  }, {
    "County": "Bethel Census Areae",
    "State": "Alaska"
  }, {
    "County": "Bristol Bay Borough",
    "State": "Alaska"
  }, {
    "County": "Chugach Census Areae",
    "State": "Alaska"
  }, {
    "County": "Copper River Census Areae",
    "State": "Alaska"
  }, {
    "County": "Denali Borough",
    "State": "Alaska"
  }, {
    "County": "Dillingham Census Areae",
    "State": "Alaska"
  }, {
    "County": "Fairbanks North Star Borough",
    "State": "Alaska"
  }, {
    "County": "Haines Borough",
    "State": "Alaska"
  }, {
    "County": "Hoonah Angoon Census Areae",
    "State": "Alaska"
  }, {
    "County": "Juneau City and Borough",
    "State": "Alaska"
  }, {
    "County": "Kenai Peninsula Borough",
    "State": "Alaska"
  }, {
    "County": "Ketchikan Gateway Borough",
    "State": "Alaska"
  }, {
    "County": "Kodiak Island Borough",
    "State": "Alaska"
  }, {
    "County": "Kusilvak Census Areae",
    "State": "Alaska"
  }, {
    "County": "Lakeand Peninsula Borough",
    "State": "Alaska"
  }, {
    "County": "Matanuska Susitna Borough",
    "State": "Alaska"
  }, {
    "County": "Nome Census Areae",
    "State": "Alaska"
  }, {
    "County": "North Slope Borough",
    "State": "Alaska"
  }, {
    "County": "Northwest Arctic Borough",
    "State": "Alaska"
  }, {
    "County": "Petersburg Boroughh",
    "State": "Alaska"
  }, {
    "County": "Prince of Wales Hyder Census Areae",
    "State": "Alaska"
  }, {
    "County": "Sitka City and Borough",
    "State": "Alaska"
  }, {
    "County": "Skagway Municipality",
    "State": "Alaska"
  }, {
    "County": "Southeast Fairbanks Census Areae",
    "State": "Alaska"
  }, {
    "County": "Wrangell City and Borough",
    "State": "Alaska"
  }, {
    "County": "Yakutat City and Borough",
    "State": "Alaska"
  }, {
    "County": "Yukon Koyukuk Census Areae",
    "State": "Alaska"
  }, {
    "County": "Eastern District",
    "State": "American Samoa"
  }, {
    "County": "Manua District",
    "State": "American Samoa"
  }, {
    "County": "Rose Atoll Rose Island",
    "State": "American Samoa"
  }, {
    "County": "Swains Island",
    "State": "American Samoa"
  }, {
    "County": "Western District",
    "State": "American Samoa"
  }, {
    "County": "Apache",
    "State": "Arizona"
  }, {
    "County": "Cochise",
    "State": "Arizona"
  }, {
    "County": "Coconino",
    "State": "Arizona"
  }, {
    "County": "Gila",
    "State": "Arizona"
  }, {
    "County": "Graham",
    "State": "Arizona"
  }, {
    "County": "Greenlee",
    "State": "Arizona"
  }, {
    "County": "La Paz",
    "State": "Arizona"
  }, {
    "County": "Maricopa",
    "State": "Arizona"
  }, {
    "County": "Mohave",
    "State": "Arizona"
  }, {
    "County": "Navajo",
    "State": "Arizona"
  }, {
    "County": "Pima",
    "State": "Arizona"
  }, {
    "County": "Pinal",
    "State": "Arizona"
  }, {
    "County": "Santa Cruz",
    "State": "Arizona"
  }, {
    "County": "Yavapai",
    "State": "Arizona"
  }, {
    "County": "Yuma",
    "State": "Arizona"
  }, {
    "County": "Arkansas",
    "State": "Arkansas"
  }, {
    "County": "Ashley",
    "State": "Arkansas"
  }, {
    "County": "Baxter",
    "State": "Arkansas"
  }, {
    "County": "Benton",
    "State": "Arkansas"
  }, {
    "County": "Boone",
    "State": "Arkansas"
  }, {
    "County": "Bradley",
    "State": "Arkansas"
  }, {
    "County": "Calhoun",
    "State": "Arkansas"
  }, {
    "County": "Carroll",
    "State": "Arkansas"
  }, {
    "County": "Chicot",
    "State": "Arkansas"
  }, {
    "County": "Clark",
    "State": "Arkansas"
  }, {
    "County": "Clay",
    "State": "Arkansas"
  }, {
    "County": "Cleburne",
    "State": "Arkansas"
  }, {
    "County": "Cleveland",
    "State": "Arkansas"
  }, {
    "County": "Columbia",
    "State": "Arkansas"
  }, {
    "County": "Conway",
    "State": "Arkansas"
  }, {
    "County": "Craighead",
    "State": "Arkansas"
  }, {
    "County": "Crawford",
    "State": "Arkansas"
  }, {
    "County": "Crittenden",
    "State": "Arkansas"
  }, {
    "County": "Cross",
    "State": "Arkansas"
  }, {
    "County": "Dallas",
    "State": "Arkansas"
  }, {
    "County": "Desha",
    "State": "Arkansas"
  }, {
    "County": "Drew",
    "State": "Arkansas"
  }, {
    "County": "Faulkner",
    "State": "Arkansas"
  }, {
    "County": "Franklin",
    "State": "Arkansas"
  }, {
    "County": "Fulton",
    "State": "Arkansas"
  }, {
    "County": "Garland",
    "State": "Arkansas"
  }, {
    "County": "Grant",
    "State": "Arkansas"
  }, {
    "County": "Greene",
    "State": "Arkansas"
  }, {
    "County": "Hempstead",
    "State": "Arkansas"
  }, {
    "County": "Hot Spring",
    "State": "Arkansas"
  }, {
    "County": "Howard",
    "State": "Arkansas"
  }, {
    "County": "Independence",
    "State": "Arkansas"
  }, {
    "County": "Izard",
    "State": "Arkansas"
  }, {
    "County": "Jackson",
    "State": "Arkansas"
  }, {
    "County": "Jefferson",
    "State": "Arkansas"
  }, {
    "County": "Johnson",
    "State": "Arkansas"
  }, {
    "County": "Lafayette",
    "State": "Arkansas"
  }, {
    "County": "Lawrence",
    "State": "Arkansas"
  }, {
    "County": "Lee",
    "State": "Arkansas"
  }, {
    "County": "Lincoln",
    "State": "Arkansas"
  }, {
    "County": "Little River",
    "State": "Arkansas"
  }, {
    "County": "Logan",
    "State": "Arkansas"
  }, {
    "County": "Lonoke",
    "State": "Arkansas"
  }, {
    "County": "Madison",
    "State": "Arkansas"
  }, {
    "County": "Marion",
    "State": "Arkansas"
  }, {
    "County": "Miller",
    "State": "Arkansas"
  }, {
    "County": "Mississippi",
    "State": "Arkansas"
  }, {
    "County": "Monroe",
    "State": "Arkansas"
  }, {
    "County": "Montgomery",
    "State": "Arkansas"
  }, {
    "County": "Nevada",
    "State": "Arkansas"
  }, {
    "County": "Newton",
    "State": "Arkansas"
  }, {
    "County": "Ouachita",
    "State": "Arkansas"
  }, {
    "County": "Perry",
    "State": "Arkansas"
  }, {
    "County": "Phillips",
    "State": "Arkansas"
  }, {
    "County": "Pike",
    "State": "Arkansas"
  }, {
    "County": "Poinsett",
    "State": "Arkansas"
  }, {
    "County": "Polk",
    "State": "Arkansas"
  }, {
    "County": "Pope",
    "State": "Arkansas"
  }, {
    "County": "Prairie",
    "State": "Arkansas"
  }, {
    "County": "Pulaski",
    "State": "Arkansas"
  }, {
    "County": "Randolph",
    "State": "Arkansas"
  }, {
    "County": "St Francis",
    "State": "Arkansas"
  }, {
    "County": "Saline",
    "State": "Arkansas"
  }, {
    "County": "Scott",
    "State": "Arkansas"
  }, {
    "County": "Searcy",
    "State": "Arkansas"
  }, {
    "County": "Sebastian",
    "State": "Arkansas"
  }, {
    "County": "Sevier",
    "State": "Arkansas"
  }, {
    "County": "Sharp",
    "State": "Arkansas"
  }, {
    "County": "Stone",
    "State": "Arkansas"
  }, {
    "County": "Union",
    "State": "Arkansas"
  }, {
    "County": "Van Buren",
    "State": "Arkansas"
  }, {
    "County": "Washington",
    "State": "Arkansas"
  }, {
    "County": "White",
    "State": "Arkansas"
  }, {
    "County": "Woodruff",
    "State": "Arkansas"
  }, {
    "County": "Yell",
    "State": "Arkansas"
  }, {
    "County": "Alameda",
    "State": "California"
  }, {
    "County": "Alpine",
    "State": "California"
  }, {
    "County": "Amador",
    "State": "California"
  }, {
    "County": "Butte",
    "State": "California"
  }, {
    "County": "Calaveras",
    "State": "California"
  }, {
    "County": "Colusa",
    "State": "California"
  }, {
    "County": "Contra Costa",
    "State": "California"
  }, {
    "County": "Del Norte",
    "State": "California"
  }, {
    "County": "El Dorado",
    "State": "California"
  }, {
    "County": "Fresno",
    "State": "California"
  }, {
    "County": "Glenn",
    "State": "California"
  }, {
    "County": "Humboldt",
    "State": "California"
  }, {
    "County": "Imperial",
    "State": "California"
  }, {
    "County": "Inyo",
    "State": "California"
  }, {
    "County": "Kern",
    "State": "California"
  }, {
    "County": "Kings",
    "State": "California"
  }, {
    "County": "Lake",
    "State": "California"
  }, {
    "County": "Lassen",
    "State": "California"
  }, {
    "County": "Los Angeles",
    "State": "California"
  }, {
    "County": "Madera",
    "State": "California"
  }, {
    "County": "Marin",
    "State": "California"
  }, {
    "County": "Mariposa",
    "State": "California"
  }, {
    "County": "Mendocino",
    "State": "California"
  }, {
    "County": "Merced",
    "State": "California"
  }, {
    "County": "Modoc",
    "State": "California"
  }, {
    "County": "Mono",
    "State": "California"
  }, {
    "County": "Monterey",
    "State": "California"
  }, {
    "County": "Napa",
    "State": "California"
  }, {
    "County": "Nevada",
    "State": "California"
  }, {
    "County": "Orange",
    "State": "California"
  }, {
    "County": "Placer",
    "State": "California"
  }, {
    "County": "Plumas",
    "State": "California"
  }, {
    "County": "Riverside",
    "State": "California"
  }, {
    "County": "Sacramento",
    "State": "California"
  }, {
    "County": "San Benito",
    "State": "California"
  }, {
    "County": "San Bernardino",
    "State": "California"
  }, {
    "County": "San Diego",
    "State": "California"
  }, {
    "County": "San Francisco City and County",
    "State": "California"
  }, {
    "County": "San Joaquin",
    "State": "California"
  }, {
    "County": "San Luis Obispo",
    "State": "California"
  }, {
    "County": "San Mateo",
    "State": "California"
  }, {
    "County": "Santa Barbara",
    "State": "California"
  }, {
    "County": "Santa Clara",
    "State": "California"
  }, {
    "County": "Santa Cruz",
    "State": "California"
  }, {
    "County": "Shasta",
    "State": "California"
  }, {
    "County": "Sierra",
    "State": "California"
  }, {
    "County": "Siskiyou",
    "State": "California"
  }, {
    "County": "Solano",
    "State": "California"
  }, {
    "County": "Sonoma",
    "State": "California"
  }, {
    "County": "Stanislaus",
    "State": "California"
  }, {
    "County": "Sutter",
    "State": "California"
  }, {
    "County": "Tehama",
    "State": "California"
  }, {
    "County": "Trinity",
    "State": "California"
  }, {
    "County": "Tulare",
    "State": "California"
  }, {
    "County": "Tuolumne",
    "State": "California"
  }, {
    "County": "Ventura",
    "State": "California"
  }, {
    "County": "Yolo",
    "State": "California"
  }, {
    "County": "Yuba",
    "State": "California"
  }, {
    "County": "Adams",
    "State": "Colorado"
  }, {
    "County": "Alamosa",
    "State": "Colorado"
  }, {
    "County": "Arapahoe",
    "State": "Colorado"
  }, {
    "County": "Archuleta",
    "State": "Colorado"
  }, {
    "County": "Baca",
    "State": "Colorado"
  }, {
    "County": "Bent",
    "State": "Colorado"
  }, {
    "County": "Boulder",
    "State": "Colorado"
  }, {
    "County": "Broomfield City and County",
    "State": "Colorado"
  }, {
    "County": "Chaffee",
    "State": "Colorado"
  }, {
    "County": "Cheyenne",
    "State": "Colorado"
  }, {
    "County": "Clear Creek",
    "State": "Colorado"
  }, {
    "County": "Conejos",
    "State": "Colorado"
  }, {
    "County": "Costilla",
    "State": "Colorado"
  }, {
    "County": "Crowley",
    "State": "Colorado"
  }, {
    "County": "Custer",
    "State": "Colorado"
  }, {
    "County": "Delta",
    "State": "Colorado"
  }, {
    "County": "Denver City and County",
    "State": "Colorado"
  }, {
    "County": "Dolores",
    "State": "Colorado"
  }, {
    "County": "Douglas",
    "State": "Colorado"
  }, {
    "County": "Eagle",
    "State": "Colorado"
  }, {
    "County": "Elbert",
    "State": "Colorado"
  }, {
    "County": "El Paso",
    "State": "Colorado"
  }, {
    "County": "Fremont",
    "State": "Colorado"
  }, {
    "County": "Garfield",
    "State": "Colorado"
  }, {
    "County": "Gilpin",
    "State": "Colorado"
  }, {
    "County": "Grand",
    "State": "Colorado"
  }, {
    "County": "Gunnison",
    "State": "Colorado"
  }, {
    "County": "Hinsdale",
    "State": "Colorado"
  }, {
    "County": "Huerfano",
    "State": "Colorado"
  }, {
    "County": "Jackson",
    "State": "Colorado"
  }, {
    "County": "Jefferson",
    "State": "Colorado"
  }, {
    "County": "Kiowa",
    "State": "Colorado"
  }, {
    "County": "Kit Carson",
    "State": "Colorado"
  }, {
    "County": "Lake",
    "State": "Colorado"
  }, {
    "County": "La Plata",
    "State": "Colorado"
  }, {
    "County": "Larimer",
    "State": "Colorado"
  }, {
    "County": "Las Animas",
    "State": "Colorado"
  }, {
    "County": "Lincoln",
    "State": "Colorado"
  }, {
    "County": "Logan",
    "State": "Colorado"
  }, {
    "County": "Mesa",
    "State": "Colorado"
  }, {
    "County": "Mineral",
    "State": "Colorado"
  }, {
    "County": "Moffat",
    "State": "Colorado"
  }, {
    "County": "Montezuma",
    "State": "Colorado"
  }, {
    "County": "Montrose",
    "State": "Colorado"
  }, {
    "County": "Morgan",
    "State": "Colorado"
  }, {
    "County": "Otero",
    "State": "Colorado"
  }, {
    "County": "Ouray",
    "State": "Colorado"
  }, {
    "County": "Park",
    "State": "Colorado"
  }, {
    "County": "Phillips",
    "State": "Colorado"
  }, {
    "County": "Pitkin",
    "State": "Colorado"
  }, {
    "County": "Prowers",
    "State": "Colorado"
  }, {
    "County": "Pueblo",
    "State": "Colorado"
  }, {
    "County": "Rio Blanco",
    "State": "Colorado"
  }, {
    "County": "Rio Grande",
    "State": "Colorado"
  }, {
    "County": "Routt",
    "State": "Colorado"
  }, {
    "County": "Saguache",
    "State": "Colorado"
  }, {
    "County": "San Juan",
    "State": "Colorado"
  }, {
    "County": "San Miguel",
    "State": "Colorado"
  }, {
    "County": "Sedgwick",
    "State": "Colorado"
  }, {
    "County": "Summit",
    "State": "Colorado"
  }, {
    "County": "Teller",
    "State": "Colorado"
  }, {
    "County": "Washington",
    "State": "Colorado"
  }, {
    "County": "Weld",
    "State": "Colorado"
  }, {
    "County": "Yuma",
    "State": "Colorado"
  }, {
    "County": "Fairfield",
    "State": "Connecticut"
  }, {
    "County": "Hartford",
    "State": "Connecticut"
  }, {
    "County": "Litchfield",
    "State": "Connecticut"
  }, {
    "County": "Middlesex",
    "State": "Connecticut"
  }, {
    "County": "New Haven",
    "State": "Connecticut"
  }, {
    "County": "New London",
    "State": "Connecticut"
  }, {
    "County": "Tolland",
    "State": "Connecticut"
  }, {
    "County": "Windham",
    "State": "Connecticut"
  }, {
    "County": "Kent",
    "State": "Delaware"
  }, {
    "County": "New Castle",
    "State": "Delaware"
  }, {
    "County": "Sussex",
    "State": "Delaware"
  }, {
    "County": "District of Columbia",
    "State": "District of Columbia"
  }, {
    "County": "Alachua",
    "State": "Florida"
  }, {
    "County": "Baker",
    "State": "Florida"
  }, {
    "County": "Bay",
    "State": "Florida"
  }, {
    "County": "Bradford",
    "State": "Florida"
  }, {
    "County": "Brevard",
    "State": "Florida"
  }, {
    "County": "Broward",
    "State": "Florida"
  }, {
    "County": "Calhoun",
    "State": "Florida"
  }, {
    "County": "Charlotte",
    "State": "Florida"
  }, {
    "County": "Citrus",
    "State": "Florida"
  }, {
    "County": "Clay",
    "State": "Florida"
  }, {
    "County": "Collier",
    "State": "Florida"
  }, {
    "County": "Columbia",
    "State": "Florida"
  }, {
    "County": "De Soto",
    "State": "Florida"
  }, {
    "County": "Dixie",
    "State": "Florida"
  }, {
    "County": "Duval",
    "State": "Florida"
  }, {
    "County": "Escambia",
    "State": "Florida"
  }, {
    "County": "Flagler",
    "State": "Florida"
  }, {
    "County": "Franklin",
    "State": "Florida"
  }, {
    "County": "Gadsden",
    "State": "Florida"
  }, {
    "County": "Gilchrist",
    "State": "Florida"
  }, {
    "County": "Glades",
    "State": "Florida"
  }, {
    "County": "Gulf",
    "State": "Florida"
  }, {
    "County": "Hamilton",
    "State": "Florida"
  }, {
    "County": "Hardee",
    "State": "Florida"
  }, {
    "County": "Hendry",
    "State": "Florida"
  }, {
    "County": "Hernando",
    "State": "Florida"
  }, {
    "County": "Highlands",
    "State": "Florida"
  }, {
    "County": "Hillsborough",
    "State": "Florida"
  }, {
    "County": "Holmes",
    "State": "Florida"
  }, {
    "County": "Indian River",
    "State": "Florida"
  }, {
    "County": "Jackson",
    "State": "Florida"
  }, {
    "County": "Jefferson",
    "State": "Florida"
  }, {
    "County": "Lafayette",
    "State": "Florida"
  }, {
    "County": "Lake",
    "State": "Florida"
  }, {
    "County": "Lee",
    "State": "Florida"
  }, {
    "County": "Leon",
    "State": "Florida"
  }, {
    "County": "Levy",
    "State": "Florida"
  }, {
    "County": "Liberty",
    "State": "Florida"
  }, {
    "County": "Madison",
    "State": "Florida"
  }, {
    "County": "Manatee",
    "State": "Florida"
  }, {
    "County": "Marion",
    "State": "Florida"
  }, {
    "County": "Martin",
    "State": "Florida"
  }, {
    "County": "Miami Dade",
    "State": "Florida"
  }, {
    "County": "Monroe",
    "State": "Florida"
  }, {
    "County": "Nassau",
    "State": "Florida"
  }, {
    "County": "Okaloosa",
    "State": "Florida"
  }, {
    "County": "Okeechobee",
    "State": "Florida"
  }, {
    "County": "Orange",
    "State": "Florida"
  }, {
    "County": "Osceola",
    "State": "Florida"
  }, {
    "County": "Palm Beach",
    "State": "Florida"
  }, {
    "County": "Pasco",
    "State": "Florida"
  }, {
    "County": "Pinellas",
    "State": "Florida"
  }, {
    "County": "Polk",
    "State": "Florida"
  }, {
    "County": "Putnam",
    "State": "Florida"
  }, {
    "County": "St Johns",
    "State": "Florida"
  }, {
    "County": "St Lucie",
    "State": "Florida"
  }, {
    "County": "Santa Rosa",
    "State": "Florida"
  }, {
    "County": "Sarasota",
    "State": "Florida"
  }, {
    "County": "Seminole",
    "State": "Florida"
  }, {
    "County": "Sumter",
    "State": "Florida"
  }, {
    "County": "Suwannee",
    "State": "Florida"
  }, {
    "County": "Taylor",
    "State": "Florida"
  }, {
    "County": "Union",
    "State": "Florida"
  }, {
    "County": "Volusia",
    "State": "Florida"
  }, {
    "County": "Wakulla",
    "State": "Florida"
  }, {
    "County": "Walton",
    "State": "Florida"
  }, {
    "County": "Washington",
    "State": "Florida"
  }, {
    "County": "Appling",
    "State": "Georgia"
  }, {
    "County": "Atkinson",
    "State": "Georgia"
  }, {
    "County": "Bacon",
    "State": "Georgia"
  }, {
    "County": "Baker",
    "State": "Georgia"
  }, {
    "County": "Baldwin",
    "State": "Georgia"
  }, {
    "County": "Banks",
    "State": "Georgia"
  }, {
    "County": "Barrow",
    "State": "Georgia"
  }, {
    "County": "Bartow",
    "State": "Georgia"
  }, {
    "County": "Ben Hill",
    "State": "Georgia"
  }, {
    "County": "Berrien",
    "State": "Georgia"
  }, {
    "County": "Bibb",
    "State": "Georgia"
  }, {
    "County": "Bleckley",
    "State": "Georgia"
  }, {
    "County": "Brantley",
    "State": "Georgia"
  }, {
    "County": "Brooks",
    "State": "Georgia"
  }, {
    "County": "Bryan",
    "State": "Georgia"
  }, {
    "County": "Bulloch",
    "State": "Georgia"
  }, {
    "County": "Burke",
    "State": "Georgia"
  }, {
    "County": "Butts",
    "State": "Georgia"
  }, {
    "County": "Calhoun",
    "State": "Georgia"
  }, {
    "County": "Camden",
    "State": "Georgia"
  }, {
    "County": "Candler",
    "State": "Georgia"
  }, {
    "County": "Carroll",
    "State": "Georgia"
  }, {
    "County": "Catoosa",
    "State": "Georgia"
  }, {
    "County": "Charlton",
    "State": "Georgia"
  }, {
    "County": "Chatham",
    "State": "Georgia"
  }, {
    "County": "Chattahoochee",
    "State": "Georgia"
  }, {
    "County": "Chattooga",
    "State": "Georgia"
  }, {
    "County": "Cherokee",
    "State": "Georgia"
  }, {
    "County": "Clarke",
    "State": "Georgia"
  }, {
    "County": "Clay",
    "State": "Georgia"
  }, {
    "County": "Clayton",
    "State": "Georgia"
  }, {
    "County": "Clinch",
    "State": "Georgia"
  }, {
    "County": "Cobb",
    "State": "Georgia"
  }, {
    "County": "Coffee",
    "State": "Georgia"
  }, {
    "County": "Colquitt",
    "State": "Georgia"
  }, {
    "County": "Columbia",
    "State": "Georgia"
  }, {
    "County": "Cook",
    "State": "Georgia"
  }, {
    "County": "Coweta",
    "State": "Georgia"
  }, {
    "County": "Crawford",
    "State": "Georgia"
  }, {
    "County": "Crisp",
    "State": "Georgia"
  }, {
    "County": "Dade",
    "State": "Georgia"
  }, {
    "County": "Dawson",
    "State": "Georgia"
  }, {
    "County": "Decatur",
    "State": "Georgia"
  }, {
    "County": "De Kalb",
    "State": "Georgia"
  }, {
    "County": "Dodge",
    "State": "Georgia"
  }, {
    "County": "Dooly",
    "State": "Georgia"
  }, {
    "County": "Dougherty",
    "State": "Georgia"
  }, {
    "County": "Douglas",
    "State": "Georgia"
  }, {
    "County": "Early",
    "State": "Georgia"
  }, {
    "County": "Echols",
    "State": "Georgia"
  }, {
    "County": "Effingham",
    "State": "Georgia"
  }, {
    "County": "Elbert",
    "State": "Georgia"
  }, {
    "County": "Emanuel",
    "State": "Georgia"
  }, {
    "County": "Evans",
    "State": "Georgia"
  }, {
    "County": "Fannin",
    "State": "Georgia"
  }, {
    "County": "Fayette",
    "State": "Georgia"
  }, {
    "County": "Floyd",
    "State": "Georgia"
  }, {
    "County": "Forsyth",
    "State": "Georgia"
  }, {
    "County": "Franklin",
    "State": "Georgia"
  }, {
    "County": "Fulton",
    "State": "Georgia"
  }, {
    "County": "Gilmer",
    "State": "Georgia"
  }, {
    "County": "Glascock",
    "State": "Georgia"
  }, {
    "County": "Glynn",
    "State": "Georgia"
  }, {
    "County": "Gordon",
    "State": "Georgia"
  }, {
    "County": "Grady",
    "State": "Georgia"
  }, {
    "County": "Greene",
    "State": "Georgia"
  }, {
    "County": "Gwinnett",
    "State": "Georgia"
  }, {
    "County": "Habersham",
    "State": "Georgia"
  }, {
    "County": "Hall",
    "State": "Georgia"
  }, {
    "County": "Hancock",
    "State": "Georgia"
  }, {
    "County": "Haralson",
    "State": "Georgia"
  }, {
    "County": "Harris",
    "State": "Georgia"
  }, {
    "County": "Hart",
    "State": "Georgia"
  }, {
    "County": "Heard",
    "State": "Georgia"
  }, {
    "County": "Henry",
    "State": "Georgia"
  }, {
    "County": "Houston",
    "State": "Georgia"
  }, {
    "County": "Irwin",
    "State": "Georgia"
  }, {
    "County": "Jackson",
    "State": "Georgia"
  }, {
    "County": "Jasper",
    "State": "Georgia"
  }, {
    "County": "Jeff Davis",
    "State": "Georgia"
  }, {
    "County": "Jefferson",
    "State": "Georgia"
  }, {
    "County": "Jenkins",
    "State": "Georgia"
  }, {
    "County": "Johnson",
    "State": "Georgia"
  }, {
    "County": "Jones",
    "State": "Georgia"
  }, {
    "County": "Lamar",
    "State": "Georgia"
  }, {
    "County": "Lanier",
    "State": "Georgia"
  }, {
    "County": "Laurens",
    "State": "Georgia"
  }, {
    "County": "Lee",
    "State": "Georgia"
  }, {
    "County": "Liberty",
    "State": "Georgia"
  }, {
    "County": "Lincoln",
    "State": "Georgia"
  }, {
    "County": "Long",
    "State": "Georgia"
  }, {
    "County": "Lowndes",
    "State": "Georgia"
  }, {
    "County": "Lumpkin",
    "State": "Georgia"
  }, {
    "County": "Mc Duffie",
    "State": "Georgia"
  }, {
    "County": "Mc Intosh",
    "State": "Georgia"
  }, {
    "County": "Macon",
    "State": "Georgia"
  }, {
    "County": "Madison",
    "State": "Georgia"
  }, {
    "County": "Marion",
    "State": "Georgia"
  }, {
    "County": "Meriwether",
    "State": "Georgia"
  }, {
    "County": "Miller",
    "State": "Georgia"
  }, {
    "County": "Mitchell",
    "State": "Georgia"
  }, {
    "County": "Monroe",
    "State": "Georgia"
  }, {
    "County": "Montgomery",
    "State": "Georgia"
  }, {
    "County": "Morgan",
    "State": "Georgia"
  }, {
    "County": "Murray",
    "State": "Georgia"
  }, {
    "County": "Muscogee",
    "State": "Georgia"
  }, {
    "County": "Newton",
    "State": "Georgia"
  }, {
    "County": "Oconee",
    "State": "Georgia"
  }, {
    "County": "Oglethorpe",
    "State": "Georgia"
  }, {
    "County": "Paulding",
    "State": "Georgia"
  }, {
    "County": "Peach",
    "State": "Georgia"
  }, {
    "County": "Pickens",
    "State": "Georgia"
  }, {
    "County": "Pierce",
    "State": "Georgia"
  }, {
    "County": "Pike",
    "State": "Georgia"
  }, {
    "County": "Polk",
    "State": "Georgia"
  }, {
    "County": "Pulaski",
    "State": "Georgia"
  }, {
    "County": "Putnam",
    "State": "Georgia"
  }, {
    "County": "Quitman",
    "State": "Georgia"
  }, {
    "County": "Rabun",
    "State": "Georgia"
  }, {
    "County": "Randolph",
    "State": "Georgia"
  }, {
    "County": "Richmond",
    "State": "Georgia"
  }, {
    "County": "Rockdale",
    "State": "Georgia"
  }, {
    "County": "Schley",
    "State": "Georgia"
  }, {
    "County": "Screven",
    "State": "Georgia"
  }, {
    "County": "Seminole",
    "State": "Georgia"
  }, {
    "County": "Spalding",
    "State": "Georgia"
  }, {
    "County": "Stephens",
    "State": "Georgia"
  }, {
    "County": "Stewart",
    "State": "Georgia"
  }, {
    "County": "Sumter",
    "State": "Georgia"
  }, {
    "County": "Talbot",
    "State": "Georgia"
  }, {
    "County": "Taliaferro",
    "State": "Georgia"
  }, {
    "County": "Tattnall",
    "State": "Georgia"
  }, {
    "County": "Taylor",
    "State": "Georgia"
  }, {
    "County": "Telfair",
    "State": "Georgia"
  }, {
    "County": "Terrell",
    "State": "Georgia"
  }, {
    "County": "Thomas",
    "State": "Georgia"
  }, {
    "County": "Tift",
    "State": "Georgia"
  }, {
    "County": "Toombs",
    "State": "Georgia"
  }, {
    "County": "Towns",
    "State": "Georgia"
  }, {
    "County": "Treutlen",
    "State": "Georgia"
  }, {
    "County": "Troup",
    "State": "Georgia"
  }, {
    "County": "Turner",
    "State": "Georgia"
  }, {
    "County": "Twiggs",
    "State": "Georgia"
  }, {
    "County": "Union",
    "State": "Georgia"
  }, {
    "County": "Upson",
    "State": "Georgia"
  }, {
    "County": "Walker",
    "State": "Georgia"
  }, {
    "County": "Walton",
    "State": "Georgia"
  }, {
    "County": "Ware",
    "State": "Georgia"
  }, {
    "County": "Warren",
    "State": "Georgia"
  }, {
    "County": "Washington",
    "State": "Georgia"
  }, {
    "County": "Wayne",
    "State": "Georgia"
  }, {
    "County": "Webster",
    "State": "Georgia"
  }, {
    "County": "Wheeler",
    "State": "Georgia"
  }, {
    "County": "White",
    "State": "Georgia"
  }, {
    "County": "Whitfield",
    "State": "Georgia"
  }, {
    "County": "Wilcox",
    "State": "Georgia"
  }, {
    "County": "Wilkes",
    "State": "Georgia"
  }, {
    "County": "Wilkinson",
    "State": "Georgia"
  }, {
    "County": "Worth",
    "State": "Georgia"
  }, {
    "County": "Guam",
    "State": "Guam"
  }, {
    "County": "Hawaii",
    "State": "Hawaii"
  }, {
    "County": "Honolulu City and County",
    "State": "Hawaii"
  }, {
    "County": "Kalawao",
    "State": "Hawaii"
  }, {
    "County": "Kauai",
    "State": "Hawaii"
  }, {
    "County": "Maui",
    "State": "Hawaii"
  }, {
    "County": "Ada",
    "State": "Idaho"
  }, {
    "County": "Adams",
    "State": "Idaho"
  }, {
    "County": "Bannock",
    "State": "Idaho"
  }, {
    "County": "Bear Lake",
    "State": "Idaho"
  }, {
    "County": "Benewah",
    "State": "Idaho"
  }, {
    "County": "Bingham",
    "State": "Idaho"
  }, {
    "County": "Blaine",
    "State": "Idaho"
  }, {
    "County": "Boise",
    "State": "Idaho"
  }, {
    "County": "Bonner",
    "State": "Idaho"
  }, {
    "County": "Bonneville",
    "State": "Idaho"
  }, {
    "County": "Boundary",
    "State": "Idaho"
  }, {
    "County": "Butte",
    "State": "Idaho"
  }, {
    "County": "Camas",
    "State": "Idaho"
  }, {
    "County": "Canyon",
    "State": "Idaho"
  }, {
    "County": "Caribou",
    "State": "Idaho"
  }, {
    "County": "Cassia",
    "State": "Idaho"
  }, {
    "County": "Clark",
    "State": "Idaho"
  }, {
    "County": "Clearwater",
    "State": "Idaho"
  }, {
    "County": "Custer",
    "State": "Idaho"
  }, {
    "County": "Elmore",
    "State": "Idaho"
  }, {
    "County": "Franklin",
    "State": "Idaho"
  }, {
    "County": "Fremont",
    "State": "Idaho"
  }, {
    "County": "Gem",
    "State": "Idaho"
  }, {
    "County": "Gooding",
    "State": "Idaho"
  }, {
    "County": "Idaho",
    "State": "Idaho"
  }, {
    "County": "Jefferson",
    "State": "Idaho"
  }, {
    "County": "Jerome",
    "State": "Idaho"
  }, {
    "County": "Kootenai",
    "State": "Idaho"
  }, {
    "County": "Latah",
    "State": "Idaho"
  }, {
    "County": "Lemhi",
    "State": "Idaho"
  }, {
    "County": "Lewis",
    "State": "Idaho"
  }, {
    "County": "Lincoln",
    "State": "Idaho"
  }, {
    "County": "Madison",
    "State": "Idaho"
  }, {
    "County": "Minidoka",
    "State": "Idaho"
  }, {
    "County": "Nez Perce",
    "State": "Idaho"
  }, {
    "County": "Oneida",
    "State": "Idaho"
  }, {
    "County": "Owyhee",
    "State": "Idaho"
  }, {
    "County": "Payette",
    "State": "Idaho"
  }, {
    "County": "Power",
    "State": "Idaho"
  }, {
    "County": "Shoshone",
    "State": "Idaho"
  }, {
    "County": "Teton",
    "State": "Idaho"
  }, {
    "County": "Twin Falls",
    "State": "Idaho"
  }, {
    "County": "Valley",
    "State": "Idaho"
  }, {
    "County": "Washington",
    "State": "Idaho"
  }, {
    "County": "Adams",
    "State": "Illinois"
  }, {
    "County": "Alexander",
    "State": "Illinois"
  }, {
    "County": "Bond",
    "State": "Illinois"
  }, {
    "County": "Boone",
    "State": "Illinois"
  }, {
    "County": "Brown",
    "State": "Illinois"
  }, {
    "County": "Bureau",
    "State": "Illinois"
  }, {
    "County": "Calhoun",
    "State": "Illinois"
  }, {
    "County": "Carroll",
    "State": "Illinois"
  }, {
    "County": "Cass",
    "State": "Illinois"
  }, {
    "County": "Champaign",
    "State": "Illinois"
  }, {
    "County": "Christian",
    "State": "Illinois"
  }, {
    "County": "Clark",
    "State": "Illinois"
  }, {
    "County": "Clay",
    "State": "Illinois"
  }, {
    "County": "Clinton",
    "State": "Illinois"
  }, {
    "County": "Coles",
    "State": "Illinois"
  }, {
    "County": "Cook",
    "State": "Illinois"
  }, {
    "County": "Crawford",
    "State": "Illinois"
  }, {
    "County": "Cumberland",
    "State": "Illinois"
  }, {
    "County": "De Kalb",
    "State": "Illinois"
  }, {
    "County": "De Witt",
    "State": "Illinois"
  }, {
    "County": "Douglas",
    "State": "Illinois"
  }, {
    "County": "Du Page",
    "State": "Illinois"
  }, {
    "County": "Edgar",
    "State": "Illinois"
  }, {
    "County": "Edwards",
    "State": "Illinois"
  }, {
    "County": "Effingham",
    "State": "Illinois"
  }, {
    "County": "Fayette",
    "State": "Illinois"
  }, {
    "County": "Ford",
    "State": "Illinois"
  }, {
    "County": "Franklin",
    "State": "Illinois"
  }, {
    "County": "Fulton",
    "State": "Illinois"
  }, {
    "County": "Gallatin",
    "State": "Illinois"
  }, {
    "County": "Greene",
    "State": "Illinois"
  }, {
    "County": "Grundy",
    "State": "Illinois"
  }, {
    "County": "Hamilton",
    "State": "Illinois"
  }, {
    "County": "Hancock",
    "State": "Illinois"
  }, {
    "County": "Hardin",
    "State": "Illinois"
  }, {
    "County": "Henderson",
    "State": "Illinois"
  }, {
    "County": "Henry",
    "State": "Illinois"
  }, {
    "County": "Iroquois",
    "State": "Illinois"
  }, {
    "County": "Jackson",
    "State": "Illinois"
  }, {
    "County": "Jasper",
    "State": "Illinois"
  }, {
    "County": "Jefferson",
    "State": "Illinois"
  }, {
    "County": "Jersey",
    "State": "Illinois"
  }, {
    "County": "Jo Daviess",
    "State": "Illinois"
  }, {
    "County": "Johnson",
    "State": "Illinois"
  }, {
    "County": "Kane",
    "State": "Illinois"
  }, {
    "County": "Kankakee",
    "State": "Illinois"
  }, {
    "County": "Kendall",
    "State": "Illinois"
  }, {
    "County": "Knox",
    "State": "Illinois"
  }, {
    "County": "Lake",
    "State": "Illinois"
  }, {
    "County": "La Salle",
    "State": "Illinois"
  }, {
    "County": "Lawrence",
    "State": "Illinois"
  }, {
    "County": "Lee",
    "State": "Illinois"
  }, {
    "County": "Livingston",
    "State": "Illinois"
  }, {
    "County": "Logan",
    "State": "Illinois"
  }, {
    "County": "Mc Donough",
    "State": "Illinois"
  }, {
    "County": "Mc Henry",
    "State": "Illinois"
  }, {
    "County": "Mc Lean",
    "State": "Illinois"
  }, {
    "County": "Macon",
    "State": "Illinois"
  }, {
    "County": "Macoupin",
    "State": "Illinois"
  }, {
    "County": "Madison",
    "State": "Illinois"
  }, {
    "County": "Marion",
    "State": "Illinois"
  }, {
    "County": "Marshall",
    "State": "Illinois"
  }, {
    "County": "Mason",
    "State": "Illinois"
  }, {
    "County": "Massac",
    "State": "Illinois"
  }, {
    "County": "Menard",
    "State": "Illinois"
  }, {
    "County": "Mercer",
    "State": "Illinois"
  }, {
    "County": "Monroe",
    "State": "Illinois"
  }, {
    "County": "Montgomery",
    "State": "Illinois"
  }, {
    "County": "Morgan",
    "State": "Illinois"
  }, {
    "County": "Moultrie",
    "State": "Illinois"
  }, {
    "County": "Ogle",
    "State": "Illinois"
  }, {
    "County": "Peoria",
    "State": "Illinois"
  }, {
    "County": "Perry",
    "State": "Illinois"
  }, {
    "County": "Piatt",
    "State": "Illinois"
  }, {
    "County": "Pike",
    "State": "Illinois"
  }, {
    "County": "Pope",
    "State": "Illinois"
  }, {
    "County": "Pulaski",
    "State": "Illinois"
  }, {
    "County": "Putnam",
    "State": "Illinois"
  }, {
    "County": "Randolph",
    "State": "Illinois"
  }, {
    "County": "Richland",
    "State": "Illinois"
  }, {
    "County": "Rock Island",
    "State": "Illinois"
  }, {
    "County": "St Clair",
    "State": "Illinois"
  }, {
    "County": "Saline",
    "State": "Illinois"
  }, {
    "County": "Sangamon",
    "State": "Illinois"
  }, {
    "County": "Schuyler",
    "State": "Illinois"
  }, {
    "County": "Scott",
    "State": "Illinois"
  }, {
    "County": "Shelby",
    "State": "Illinois"
  }, {
    "County": "Stark",
    "State": "Illinois"
  }, {
    "County": "Stephenson",
    "State": "Illinois"
  }, {
    "County": "Tazewell",
    "State": "Illinois"
  }, {
    "County": "Union",
    "State": "Illinois"
  }, {
    "County": "Vermilion",
    "State": "Illinois"
  }, {
    "County": "Wabash",
    "State": "Illinois"
  }, {
    "County": "Warren",
    "State": "Illinois"
  }, {
    "County": "Washington",
    "State": "Illinois"
  }, {
    "County": "Wayne",
    "State": "Illinois"
  }, {
    "County": "White",
    "State": "Illinois"
  }, {
    "County": "Whiteside",
    "State": "Illinois"
  }, {
    "County": "Will",
    "State": "Illinois"
  }, {
    "County": "Williamson",
    "State": "Illinois"
  }, {
    "County": "Winnebago",
    "State": "Illinois"
  }, {
    "County": "Woodford",
    "State": "Illinois"
  }, {
    "County": "Adams",
    "State": "Indiana"
  }, {
    "County": "Allen",
    "State": "Indiana"
  }, {
    "County": "Bartholomew",
    "State": "Indiana"
  }, {
    "County": "Benton",
    "State": "Indiana"
  }, {
    "County": "Blackford",
    "State": "Indiana"
  }, {
    "County": "Boone",
    "State": "Indiana"
  }, {
    "County": "Brown",
    "State": "Indiana"
  }, {
    "County": "Carroll",
    "State": "Indiana"
  }, {
    "County": "Cass",
    "State": "Indiana"
  }, {
    "County": "Clark",
    "State": "Indiana"
  }, {
    "County": "Clay",
    "State": "Indiana"
  }, {
    "County": "Clinton",
    "State": "Indiana"
  }, {
    "County": "Crawford",
    "State": "Indiana"
  }, {
    "County": "Daviess",
    "State": "Indiana"
  }, {
    "County": "Dearborn",
    "State": "Indiana"
  }, {
    "County": "Decatur",
    "State": "Indiana"
  }, {
    "County": "De Kalb",
    "State": "Indiana"
  }, {
    "County": "Delaware",
    "State": "Indiana"
  }, {
    "County": "Dubois",
    "State": "Indiana"
  }, {
    "County": "Elkhart",
    "State": "Indiana"
  }, {
    "County": "Fayette",
    "State": "Indiana"
  }, {
    "County": "Floyd",
    "State": "Indiana"
  }, {
    "County": "Fountain",
    "State": "Indiana"
  }, {
    "County": "Franklin",
    "State": "Indiana"
  }, {
    "County": "Fulton",
    "State": "Indiana"
  }, {
    "County": "Gibson",
    "State": "Indiana"
  }, {
    "County": "Grant",
    "State": "Indiana"
  }, {
    "County": "Greene",
    "State": "Indiana"
  }, {
    "County": "Hamilton",
    "State": "Indiana"
  }, {
    "County": "Hancock",
    "State": "Indiana"
  }, {
    "County": "Harrison",
    "State": "Indiana"
  }, {
    "County": "Hendricks",
    "State": "Indiana"
  }, {
    "County": "Henry",
    "State": "Indiana"
  }, {
    "County": "Howard",
    "State": "Indiana"
  }, {
    "County": "Huntington",
    "State": "Indiana"
  }, {
    "County": "Jackson",
    "State": "Indiana"
  }, {
    "County": "Jasper",
    "State": "Indiana"
  }, {
    "County": "Jay",
    "State": "Indiana"
  }, {
    "County": "Jefferson",
    "State": "Indiana"
  }, {
    "County": "Jennings",
    "State": "Indiana"
  }, {
    "County": "Johnson",
    "State": "Indiana"
  }, {
    "County": "Knox",
    "State": "Indiana"
  }, {
    "County": "Kosciusko",
    "State": "Indiana"
  }, {
    "County": "La Grange",
    "State": "Indiana"
  }, {
    "County": "Lake",
    "State": "Indiana"
  }, {
    "County": "La Porte",
    "State": "Indiana"
  }, {
    "County": "Lawrence",
    "State": "Indiana"
  }, {
    "County": "Madison",
    "State": "Indiana"
  }, {
    "County": "Marion",
    "State": "Indiana"
  }, {
    "County": "Marshall",
    "State": "Indiana"
  }, {
    "County": "Martin",
    "State": "Indiana"
  }, {
    "County": "Miami",
    "State": "Indiana"
  }, {
    "County": "Monroe",
    "State": "Indiana"
  }, {
    "County": "Montgomery",
    "State": "Indiana"
  }, {
    "County": "Morgan",
    "State": "Indiana"
  }, {
    "County": "Newton",
    "State": "Indiana"
  }, {
    "County": "Noble",
    "State": "Indiana"
  }, {
    "County": "Ohio",
    "State": "Indiana"
  }, {
    "County": "Orange",
    "State": "Indiana"
  }, {
    "County": "Owen",
    "State": "Indiana"
  }, {
    "County": "Parke",
    "State": "Indiana"
  }, {
    "County": "Perry",
    "State": "Indiana"
  }, {
    "County": "Pike",
    "State": "Indiana"
  }, {
    "County": "Porter",
    "State": "Indiana"
  }, {
    "County": "Posey",
    "State": "Indiana"
  }, {
    "County": "Pulaski",
    "State": "Indiana"
  }, {
    "County": "Putnam",
    "State": "Indiana"
  }, {
    "County": "Randolph",
    "State": "Indiana"
  }, {
    "County": "Ripley",
    "State": "Indiana"
  }, {
    "County": "Rush",
    "State": "Indiana"
  }, {
    "County": "St Joseph",
    "State": "Indiana"
  }, {
    "County": "Scott",
    "State": "Indiana"
  }, {
    "County": "Shelby",
    "State": "Indiana"
  }, {
    "County": "Spencer",
    "State": "Indiana"
  }, {
    "County": "Starke",
    "State": "Indiana"
  }, {
    "County": "Steuben",
    "State": "Indiana"
  }, {
    "County": "Sullivan",
    "State": "Indiana"
  }, {
    "County": "Switzerland",
    "State": "Indiana"
  }, {
    "County": "Tippecanoe",
    "State": "Indiana"
  }, {
    "County": "Tipton",
    "State": "Indiana"
  }, {
    "County": "Union",
    "State": "Indiana"
  }, {
    "County": "Vanderburgh",
    "State": "Indiana"
  }, {
    "County": "Vermillion",
    "State": "Indiana"
  }, {
    "County": "Vigo",
    "State": "Indiana"
  }, {
    "County": "Wabash",
    "State": "Indiana"
  }, {
    "County": "Warren",
    "State": "Indiana"
  }, {
    "County": "Warrick",
    "State": "Indiana"
  }, {
    "County": "Washington",
    "State": "Indiana"
  }, {
    "County": "Wayne",
    "State": "Indiana"
  }, {
    "County": "Wells",
    "State": "Indiana"
  }, {
    "County": "White",
    "State": "Indiana"
  }, {
    "County": "Whitley",
    "State": "Indiana"
  }, {
    "County": "Adair",
    "State": "Iowa"
  }, {
    "County": "Adams",
    "State": "Iowa"
  }, {
    "County": "Allamakee",
    "State": "Iowa"
  }, {
    "County": "Appanoose",
    "State": "Iowa"
  }, {
    "County": "Audubon",
    "State": "Iowa"
  }, {
    "County": "Benton",
    "State": "Iowa"
  }, {
    "County": "Black Hawk",
    "State": "Iowa"
  }, {
    "County": "Boone",
    "State": "Iowa"
  }, {
    "County": "Bremer",
    "State": "Iowa"
  }, {
    "County": "Buchanan",
    "State": "Iowa"
  }, {
    "County": "Buena Vista",
    "State": "Iowa"
  }, {
    "County": "Butler",
    "State": "Iowa"
  }, {
    "County": "Calhoun",
    "State": "Iowa"
  }, {
    "County": "Carroll",
    "State": "Iowa"
  }, {
    "County": "Cass",
    "State": "Iowa"
  }, {
    "County": "Cedar",
    "State": "Iowa"
  }, {
    "County": "Cerro Gordo",
    "State": "Iowa"
  }, {
    "County": "Cherokee",
    "State": "Iowa"
  }, {
    "County": "Chickasaw",
    "State": "Iowa"
  }, {
    "County": "Clarke",
    "State": "Iowa"
  }, {
    "County": "Clay",
    "State": "Iowa"
  }, {
    "County": "Clayton",
    "State": "Iowa"
  }, {
    "County": "Clinton",
    "State": "Iowa"
  }, {
    "County": "Crawford",
    "State": "Iowa"
  }, {
    "County": "Dallas",
    "State": "Iowa"
  }, {
    "County": "Davis",
    "State": "Iowa"
  }, {
    "County": "Decatur",
    "State": "Iowa"
  }, {
    "County": "Delaware",
    "State": "Iowa"
  }, {
    "County": "Des Moines",
    "State": "Iowa"
  }, {
    "County": "Dickinson",
    "State": "Iowa"
  }, {
    "County": "Dubuque",
    "State": "Iowa"
  }, {
    "County": "Emmet",
    "State": "Iowa"
  }, {
    "County": "Fayette",
    "State": "Iowa"
  }, {
    "County": "Floyd",
    "State": "Iowa"
  }, {
    "County": "Franklin",
    "State": "Iowa"
  }, {
    "County": "Fremont",
    "State": "Iowa"
  }, {
    "County": "Greene",
    "State": "Iowa"
  }, {
    "County": "Grundy",
    "State": "Iowa"
  }, {
    "County": "Guthrie",
    "State": "Iowa"
  }, {
    "County": "Hamilton",
    "State": "Iowa"
  }, {
    "County": "Hancock",
    "State": "Iowa"
  }, {
    "County": "Hardin",
    "State": "Iowa"
  }, {
    "County": "Harrison",
    "State": "Iowa"
  }, {
    "County": "Henry",
    "State": "Iowa"
  }, {
    "County": "Howard",
    "State": "Iowa"
  }, {
    "County": "Humboldt",
    "State": "Iowa"
  }, {
    "County": "Ida",
    "State": "Iowa"
  }, {
    "County": "Iowa",
    "State": "Iowa"
  }, {
    "County": "Jackson",
    "State": "Iowa"
  }, {
    "County": "Jasper",
    "State": "Iowa"
  }, {
    "County": "Jefferson",
    "State": "Iowa"
  }, {
    "County": "Johnson",
    "State": "Iowa"
  }, {
    "County": "Jones",
    "State": "Iowa"
  }, {
    "County": "Keokuk",
    "State": "Iowa"
  }, {
    "County": "Kossuth",
    "State": "Iowa"
  }, {
    "County": "Lee",
    "State": "Iowa"
  }, {
    "County": "Linn",
    "State": "Iowa"
  }, {
    "County": "Louisa",
    "State": "Iowa"
  }, {
    "County": "Lucas",
    "State": "Iowa"
  }, {
    "County": "Lyon",
    "State": "Iowa"
  }, {
    "County": "Madison",
    "State": "Iowa"
  }, {
    "County": "Mahaska",
    "State": "Iowa"
  }, {
    "County": "Marion",
    "State": "Iowa"
  }, {
    "County": "Marshall",
    "State": "Iowa"
  }, {
    "County": "Mills",
    "State": "Iowa"
  }, {
    "County": "Mitchell",
    "State": "Iowa"
  }, {
    "County": "Monona",
    "State": "Iowa"
  }, {
    "County": "Monroe",
    "State": "Iowa"
  }, {
    "County": "Montgomery",
    "State": "Iowa"
  }, {
    "County": "Muscatine",
    "State": "Iowa"
  }, {
    "County": "O Brien",
    "State": "Iowa"
  }, {
    "County": "Osceola",
    "State": "Iowa"
  }, {
    "County": "Page",
    "State": "Iowa"
  }, {
    "County": "Palo Alto",
    "State": "Iowa"
  }, {
    "County": "Plymouth",
    "State": "Iowa"
  }, {
    "County": "Pocahontas",
    "State": "Iowa"
  }, {
    "County": "Polk",
    "State": "Iowa"
  }, {
    "County": "Pottawattamie",
    "State": "Iowa"
  }, {
    "County": "Poweshiek",
    "State": "Iowa"
  }, {
    "County": "Ringgold",
    "State": "Iowa"
  }, {
    "County": "Sac",
    "State": "Iowa"
  }, {
    "County": "Scott",
    "State": "Iowa"
  }, {
    "County": "Shelby",
    "State": "Iowa"
  }, {
    "County": "Sioux",
    "State": "Iowa"
  }, {
    "County": "Story",
    "State": "Iowa"
  }, {
    "County": "Tama",
    "State": "Iowa"
  }, {
    "County": "Taylor",
    "State": "Iowa"
  }, {
    "County": "Union",
    "State": "Iowa"
  }, {
    "County": "Van Buren",
    "State": "Iowa"
  }, {
    "County": "Wapello",
    "State": "Iowa"
  }, {
    "County": "Warren",
    "State": "Iowa"
  }, {
    "County": "Washington",
    "State": "Iowa"
  }, {
    "County": "Wayne",
    "State": "Iowa"
  }, {
    "County": "Webster",
    "State": "Iowa"
  }, {
    "County": "Winnebago",
    "State": "Iowa"
  }, {
    "County": "Winneshiek",
    "State": "Iowa"
  }, {
    "County": "Woodbury",
    "State": "Iowa"
  }, {
    "County": "Worth",
    "State": "Iowa"
  }, {
    "County": "Wright",
    "State": "Iowa"
  }, {
    "County": "Allen",
    "State": "Kansas"
  }, {
    "County": "Anderson",
    "State": "Kansas"
  }, {
    "County": "Atchison",
    "State": "Kansas"
  }, {
    "County": "Barber",
    "State": "Kansas"
  }, {
    "County": "Barton",
    "State": "Kansas"
  }, {
    "County": "Bourbon",
    "State": "Kansas"
  }, {
    "County": "Brown",
    "State": "Kansas"
  }, {
    "County": "Butler",
    "State": "Kansas"
  }, {
    "County": "Chase",
    "State": "Kansas"
  }, {
    "County": "Chautauqua",
    "State": "Kansas"
  }, {
    "County": "Cherokee",
    "State": "Kansas"
  }, {
    "County": "Cheyenne",
    "State": "Kansas"
  }, {
    "County": "Clark",
    "State": "Kansas"
  }, {
    "County": "Clay",
    "State": "Kansas"
  }, {
    "County": "Cloud",
    "State": "Kansas"
  }, {
    "County": "Coffey",
    "State": "Kansas"
  }, {
    "County": "Comanche",
    "State": "Kansas"
  }, {
    "County": "Cowley",
    "State": "Kansas"
  }, {
    "County": "Crawford",
    "State": "Kansas"
  }, {
    "County": "Decatur",
    "State": "Kansas"
  }, {
    "County": "Dickinson",
    "State": "Kansas"
  }, {
    "County": "Doniphan",
    "State": "Kansas"
  }, {
    "County": "Douglas",
    "State": "Kansas"
  }, {
    "County": "Edwards",
    "State": "Kansas"
  }, {
    "County": "Elk",
    "State": "Kansas"
  }, {
    "County": "Ellis",
    "State": "Kansas"
  }, {
    "County": "Ellsworth",
    "State": "Kansas"
  }, {
    "County": "Finney",
    "State": "Kansas"
  }, {
    "County": "Ford",
    "State": "Kansas"
  }, {
    "County": "Franklin",
    "State": "Kansas"
  }, {
    "County": "Geary",
    "State": "Kansas"
  }, {
    "County": "Gove",
    "State": "Kansas"
  }, {
    "County": "Graham",
    "State": "Kansas"
  }, {
    "County": "Grant",
    "State": "Kansas"
  }, {
    "County": "Gray",
    "State": "Kansas"
  }, {
    "County": "Greeley",
    "State": "Kansas"
  }, {
    "County": "Greenwood",
    "State": "Kansas"
  }, {
    "County": "Hamilton",
    "State": "Kansas"
  }, {
    "County": "Harper",
    "State": "Kansas"
  }, {
    "County": "Harvey",
    "State": "Kansas"
  }, {
    "County": "Haskell",
    "State": "Kansas"
  }, {
    "County": "Hodgeman",
    "State": "Kansas"
  }, {
    "County": "Jackson",
    "State": "Kansas"
  }, {
    "County": "Jefferson",
    "State": "Kansas"
  }, {
    "County": "Jewell",
    "State": "Kansas"
  }, {
    "County": "Johnson",
    "State": "Kansas"
  }, {
    "County": "Kearny",
    "State": "Kansas"
  }, {
    "County": "Kingman",
    "State": "Kansas"
  }, {
    "County": "Kiowa",
    "State": "Kansas"
  }, {
    "County": "Labette",
    "State": "Kansas"
  }, {
    "County": "Lane",
    "State": "Kansas"
  }, {
    "County": "Leavenworth",
    "State": "Kansas"
  }, {
    "County": "Lincoln",
    "State": "Kansas"
  }, {
    "County": "Linn",
    "State": "Kansas"
  }, {
    "County": "Logan",
    "State": "Kansas"
  }, {
    "County": "Lyon",
    "State": "Kansas"
  }, {
    "County": "Mc Pherson",
    "State": "Kansas"
  }, {
    "County": "Marion",
    "State": "Kansas"
  }, {
    "County": "Marshall",
    "State": "Kansas"
  }, {
    "County": "Meade",
    "State": "Kansas"
  }, {
    "County": "Miami",
    "State": "Kansas"
  }, {
    "County": "Mitchell",
    "State": "Kansas"
  }, {
    "County": "Montgomery",
    "State": "Kansas"
  }, {
    "County": "Morris",
    "State": "Kansas"
  }, {
    "County": "Morton",
    "State": "Kansas"
  }, {
    "County": "Nemaha",
    "State": "Kansas"
  }, {
    "County": "Neosho",
    "State": "Kansas"
  }, {
    "County": "Ness",
    "State": "Kansas"
  }, {
    "County": "Norton",
    "State": "Kansas"
  }, {
    "County": "Osage",
    "State": "Kansas"
  }, {
    "County": "Osborne",
    "State": "Kansas"
  }, {
    "County": "Ottawa",
    "State": "Kansas"
  }, {
    "County": "Pawnee",
    "State": "Kansas"
  }, {
    "County": "Phillips",
    "State": "Kansas"
  }, {
    "County": "Pottawatomie",
    "State": "Kansas"
  }, {
    "County": "Pratt",
    "State": "Kansas"
  }, {
    "County": "Rawlins",
    "State": "Kansas"
  }, {
    "County": "Reno",
    "State": "Kansas"
  }, {
    "County": "Republic",
    "State": "Kansas"
  }, {
    "County": "Rice",
    "State": "Kansas"
  }, {
    "County": "Riley",
    "State": "Kansas"
  }, {
    "County": "Rooks",
    "State": "Kansas"
  }, {
    "County": "Rush",
    "State": "Kansas"
  }, {
    "County": "Russell",
    "State": "Kansas"
  }, {
    "County": "Saline",
    "State": "Kansas"
  }, {
    "County": "Scott",
    "State": "Kansas"
  }, {
    "County": "Sedgwick",
    "State": "Kansas"
  }, {
    "County": "Seward",
    "State": "Kansas"
  }, {
    "County": "Shawnee",
    "State": "Kansas"
  }, {
    "County": "Sheridan",
    "State": "Kansas"
  }, {
    "County": "Sherman",
    "State": "Kansas"
  }, {
    "County": "Smith",
    "State": "Kansas"
  }, {
    "County": "Stafford",
    "State": "Kansas"
  }, {
    "County": "Stanton",
    "State": "Kansas"
  }, {
    "County": "Stevens",
    "State": "Kansas"
  }, {
    "County": "Sumner",
    "State": "Kansas"
  }, {
    "County": "Thomas",
    "State": "Kansas"
  }, {
    "County": "Trego",
    "State": "Kansas"
  }, {
    "County": "Wabaunsee",
    "State": "Kansas"
  }, {
    "County": "Wallace",
    "State": "Kansas"
  }, {
    "County": "Washington",
    "State": "Kansas"
  }, {
    "County": "Wichita",
    "State": "Kansas"
  }, {
    "County": "Wilson",
    "State": "Kansas"
  }, {
    "County": "Woodson",
    "State": "Kansas"
  }, {
    "County": "Wyandotte",
    "State": "Kansas"
  }, {
    "County": "Adair",
    "State": "Kentucky"
  }, {
    "County": "Allen",
    "State": "Kentucky"
  }, {
    "County": "Anderson",
    "State": "Kentucky"
  }, {
    "County": "Ballard",
    "State": "Kentucky"
  }, {
    "County": "Barren",
    "State": "Kentucky"
  }, {
    "County": "Bath",
    "State": "Kentucky"
  }, {
    "County": "Bell",
    "State": "Kentucky"
  }, {
    "County": "Boone",
    "State": "Kentucky"
  }, {
    "County": "Bourbon",
    "State": "Kentucky"
  }, {
    "County": "Boyd",
    "State": "Kentucky"
  }, {
    "County": "Boyle",
    "State": "Kentucky"
  }, {
    "County": "Bracken",
    "State": "Kentucky"
  }, {
    "County": "Breathitt",
    "State": "Kentucky"
  }, {
    "County": "Breckinridge",
    "State": "Kentucky"
  }, {
    "County": "Bullitt",
    "State": "Kentucky"
  }, {
    "County": "Butler",
    "State": "Kentucky"
  }, {
    "County": "Caldwell",
    "State": "Kentucky"
  }, {
    "County": "Calloway",
    "State": "Kentucky"
  }, {
    "County": "Campbell",
    "State": "Kentucky"
  }, {
    "County": "Carlisle",
    "State": "Kentucky"
  }, {
    "County": "Carroll",
    "State": "Kentucky"
  }, {
    "County": "Carter",
    "State": "Kentucky"
  }, {
    "County": "Casey",
    "State": "Kentucky"
  }, {
    "County": "Christian",
    "State": "Kentucky"
  }, {
    "County": "Clark",
    "State": "Kentucky"
  }, {
    "County": "Clay",
    "State": "Kentucky"
  }, {
    "County": "Clinton",
    "State": "Kentucky"
  }, {
    "County": "Crittenden",
    "State": "Kentucky"
  }, {
    "County": "Cumberland",
    "State": "Kentucky"
  }, {
    "County": "Daviess",
    "State": "Kentucky"
  }, {
    "County": "Edmonson",
    "State": "Kentucky"
  }, {
    "County": "Elliott",
    "State": "Kentucky"
  }, {
    "County": "Estill",
    "State": "Kentucky"
  }, {
    "County": "Fayette",
    "State": "Kentucky"
  }, {
    "County": "Fleming",
    "State": "Kentucky"
  }, {
    "County": "Floyd",
    "State": "Kentucky"
  }, {
    "County": "Franklin",
    "State": "Kentucky"
  }, {
    "County": "Fulton",
    "State": "Kentucky"
  }, {
    "County": "Gallatin",
    "State": "Kentucky"
  }, {
    "County": "Garrard",
    "State": "Kentucky"
  }, {
    "County": "Grant",
    "State": "Kentucky"
  }, {
    "County": "Graves",
    "State": "Kentucky"
  }, {
    "County": "Grayson",
    "State": "Kentucky"
  }, {
    "County": "Green",
    "State": "Kentucky"
  }, {
    "County": "Greenup",
    "State": "Kentucky"
  }, {
    "County": "Hancock",
    "State": "Kentucky"
  }, {
    "County": "Hardin",
    "State": "Kentucky"
  }, {
    "County": "Harlan",
    "State": "Kentucky"
  }, {
    "County": "Harrison",
    "State": "Kentucky"
  }, {
    "County": "Hart",
    "State": "Kentucky"
  }, {
    "County": "Henderson",
    "State": "Kentucky"
  }, {
    "County": "Henry",
    "State": "Kentucky"
  }, {
    "County": "Hickman",
    "State": "Kentucky"
  }, {
    "County": "Hopkins",
    "State": "Kentucky"
  }, {
    "County": "Jackson",
    "State": "Kentucky"
  }, {
    "County": "Jefferson",
    "State": "Kentucky"
  }, {
    "County": "Jessamine",
    "State": "Kentucky"
  }, {
    "County": "Johnson",
    "State": "Kentucky"
  }, {
    "County": "Kenton",
    "State": "Kentucky"
  }, {
    "County": "Knott",
    "State": "Kentucky"
  }, {
    "County": "Knox",
    "State": "Kentucky"
  }, {
    "County": "La Rue",
    "State": "Kentucky"
  }, {
    "County": "Laurel",
    "State": "Kentucky"
  }, {
    "County": "Lawrence",
    "State": "Kentucky"
  }, {
    "County": "Lee",
    "State": "Kentucky"
  }, {
    "County": "Leslie",
    "State": "Kentucky"
  }, {
    "County": "Letcher",
    "State": "Kentucky"
  }, {
    "County": "Lewis",
    "State": "Kentucky"
  }, {
    "County": "Lincoln",
    "State": "Kentucky"
  }, {
    "County": "Livingston",
    "State": "Kentucky"
  }, {
    "County": "Logan",
    "State": "Kentucky"
  }, {
    "County": "Lyon",
    "State": "Kentucky"
  }, {
    "County": "Mc Cracken",
    "State": "Kentucky"
  }, {
    "County": "Mc Creary",
    "State": "Kentucky"
  }, {
    "County": "Mc Lean",
    "State": "Kentucky"
  }, {
    "County": "Madison",
    "State": "Kentucky"
  }, {
    "County": "Magoffin",
    "State": "Kentucky"
  }, {
    "County": "Marion",
    "State": "Kentucky"
  }, {
    "County": "Marshall",
    "State": "Kentucky"
  }, {
    "County": "Martin",
    "State": "Kentucky"
  }, {
    "County": "Mason",
    "State": "Kentucky"
  }, {
    "County": "Meade",
    "State": "Kentucky"
  }, {
    "County": "Menifee",
    "State": "Kentucky"
  }, {
    "County": "Mercer",
    "State": "Kentucky"
  }, {
    "County": "Metcalfe",
    "State": "Kentucky"
  }, {
    "County": "Monroe",
    "State": "Kentucky"
  }, {
    "County": "Montgomery",
    "State": "Kentucky"
  }, {
    "County": "Morgan",
    "State": "Kentucky"
  }, {
    "County": "Muhlenberg",
    "State": "Kentucky"
  }, {
    "County": "Nelson",
    "State": "Kentucky"
  }, {
    "County": "Nicholas",
    "State": "Kentucky"
  }, {
    "County": "Ohio",
    "State": "Kentucky"
  }, {
    "County": "Oldham",
    "State": "Kentucky"
  }, {
    "County": "Owen",
    "State": "Kentucky"
  }, {
    "County": "Owsley",
    "State": "Kentucky"
  }, {
    "County": "Pendleton",
    "State": "Kentucky"
  }, {
    "County": "Perry",
    "State": "Kentucky"
  }, {
    "County": "Pike",
    "State": "Kentucky"
  }, {
    "County": "Powell",
    "State": "Kentucky"
  }, {
    "County": "Pulaski",
    "State": "Kentucky"
  }, {
    "County": "Robertson",
    "State": "Kentucky"
  }, {
    "County": "Rockcastle",
    "State": "Kentucky"
  }, {
    "County": "Rowan",
    "State": "Kentucky"
  }, {
    "County": "Russell",
    "State": "Kentucky"
  }, {
    "County": "Scott",
    "State": "Kentucky"
  }, {
    "County": "Shelby",
    "State": "Kentucky"
  }, {
    "County": "Simpson",
    "State": "Kentucky"
  }, {
    "County": "Spencer",
    "State": "Kentucky"
  }, {
    "County": "Taylor",
    "State": "Kentucky"
  }, {
    "County": "Todd",
    "State": "Kentucky"
  }, {
    "County": "Trigg",
    "State": "Kentucky"
  }, {
    "County": "Trimble",
    "State": "Kentucky"
  }, {
    "County": "Union",
    "State": "Kentucky"
  }, {
    "County": "Warren",
    "State": "Kentucky"
  }, {
    "County": "Washington",
    "State": "Kentucky"
  }, {
    "County": "Wayne",
    "State": "Kentucky"
  }, {
    "County": "Webster",
    "State": "Kentucky"
  }, {
    "County": "Whitley",
    "State": "Kentucky"
  }, {
    "County": "Wolfe",
    "State": "Kentucky"
  }, {
    "County": "Woodford",
    "State": "Kentucky"
  }, {
    "County": "Acadia Parish",
    "State": "Louisiana"
  }, {
    "County": "Allen Parish",
    "State": "Louisiana"
  }, {
    "County": "Ascension Parish",
    "State": "Louisiana"
  }, {
    "County": "Assumption Parish",
    "State": "Louisiana"
  }, {
    "County": "Avoyelles Parish",
    "State": "Louisiana"
  }, {
    "County": "Beauregard Parish",
    "State": "Louisiana"
  }, {
    "County": "Bienville Parish",
    "State": "Louisiana"
  }, {
    "County": "Bossier Parish",
    "State": "Louisiana"
  }, {
    "County": "Caddo Parish",
    "State": "Louisiana"
  }, {
    "County": "Calcasieu Parish",
    "State": "Louisiana"
  }, {
    "County": "Caldwell Parish",
    "State": "Louisiana"
  }, {
    "County": "Cameron Parish",
    "State": "Louisiana"
  }, {
    "County": "Catahoula Parish",
    "State": "Louisiana"
  }, {
    "County": "Claiborne Parish",
    "State": "Louisiana"
  }, {
    "County": "Concordia Parish",
    "State": "Louisiana"
  }, {
    "County": "De Soto Parish",
    "State": "Louisiana"
  }, {
    "County": "East Baton Rouge Parish",
    "State": "Louisiana"
  }, {
    "County": "East Carroll Parish",
    "State": "Louisiana"
  }, {
    "County": "East Feliciana Parish",
    "State": "Louisiana"
  }, {
    "County": "Evangeline Parish",
    "State": "Louisiana"
  }, {
    "County": "Franklin Parish",
    "State": "Louisiana"
  }, {
    "County": "Grant Parish",
    "State": "Louisiana"
  }, {
    "County": "Iberia Parish",
    "State": "Louisiana"
  }, {
    "County": "Iberville Parish",
    "State": "Louisiana"
  }, {
    "County": "Jackson Parish",
    "State": "Louisiana"
  }, {
    "County": "Jefferson Parish",
    "State": "Louisiana"
  }, {
    "County": "Jefferson Davis Parish",
    "State": "Louisiana"
  }, {
    "County": "Lafayette Parish",
    "State": "Louisiana"
  }, {
    "County": "Lafourche Parish",
    "State": "Louisiana"
  }, {
    "County": "La Salle Parish",
    "State": "Louisiana"
  }, {
    "County": "Lincoln Parish",
    "State": "Louisiana"
  }, {
    "County": "Livingston Parish",
    "State": "Louisiana"
  }, {
    "County": "Madison Parish",
    "State": "Louisiana"
  }, {
    "County": "Morehouse Parish",
    "State": "Louisiana"
  }, {
    "County": "Natchitoches Parish",
    "State": "Louisiana"
  }, {
    "County": "Orleans Parishq",
    "State": "Louisiana"
  }, {
    "County": "Ouachita Parish",
    "State": "Louisiana"
  }, {
    "County": "Plaquemines Parish",
    "State": "Louisiana"
  }, {
    "County": "Pointe Coupee Parish",
    "State": "Louisiana"
  }, {
    "County": "Rapides Parish",
    "State": "Louisiana"
  }, {
    "County": "Red River Parish",
    "State": "Louisiana"
  }, {
    "County": "Richland Parish",
    "State": "Louisiana"
  }, {
    "County": "Sabine Parish",
    "State": "Louisiana"
  }, {
    "County": "St Bernard Parish",
    "State": "Louisiana"
  }, {
    "County": "St Charles Parish",
    "State": "Louisiana"
  }, {
    "County": "St Helena Parish",
    "State": "Louisiana"
  }, {
    "County": "St James Parish",
    "State": "Louisiana"
  }, {
    "County": "St John the Baptist Parish",
    "State": "Louisiana"
  }, {
    "County": "St Landry Parish",
    "State": "Louisiana"
  }, {
    "County": "St Martin Parish",
    "State": "Louisiana"
  }, {
    "County": "St Mary Parish",
    "State": "Louisiana"
  }, {
    "County": "St Tammany Parish",
    "State": "Louisiana"
  }, {
    "County": "Tangipahoa Parish",
    "State": "Louisiana"
  }, {
    "County": "Tensas Parish",
    "State": "Louisiana"
  }, {
    "County": "Terrebonne Parish",
    "State": "Louisiana"
  }, {
    "County": "Union Parish",
    "State": "Louisiana"
  }, {
    "County": "Vermilion Parish",
    "State": "Louisiana"
  }, {
    "County": "Vernon Parish",
    "State": "Louisiana"
  }, {
    "County": "Washington Parish",
    "State": "Louisiana"
  }, {
    "County": "Webster Parish",
    "State": "Louisiana"
  }, {
    "County": "West Baton Rouge Parish",
    "State": "Louisiana"
  }, {
    "County": "West Carroll Parish",
    "State": "Louisiana"
  }, {
    "County": "West Feliciana Parish",
    "State": "Louisiana"
  }, {
    "County": "Winn Parish",
    "State": "Louisiana"
  }, {
    "County": "Androscoggin",
    "State": "Maine"
  }, {
    "County": "Aroostook",
    "State": "Maine"
  }, {
    "County": "Cumberland",
    "State": "Maine"
  }, {
    "County": "Franklin",
    "State": "Maine"
  }, {
    "County": "Hancock",
    "State": "Maine"
  }, {
    "County": "Kennebec",
    "State": "Maine"
  }, {
    "County": "Knox",
    "State": "Maine"
  }, {
    "County": "Lincoln",
    "State": "Maine"
  }, {
    "County": "Oxford",
    "State": "Maine"
  }, {
    "County": "Penobscot",
    "State": "Maine"
  }, {
    "County": "Piscataquis",
    "State": "Maine"
  }, {
    "County": "Sagadahoc",
    "State": "Maine"
  }, {
    "County": "Somerset",
    "State": "Maine"
  }, {
    "County": "Waldo",
    "State": "Maine"
  }, {
    "County": "Washington",
    "State": "Maine"
  }, {
    "County": "York",
    "State": "Maine"
  }, {
    "County": "Allegany",
    "State": "Maryland"
  }, {
    "County": "Anne Arundel",
    "State": "Maryland"
  }, {
    "County": "Baltimore",
    "State": "Maryland"
  }, {
    "County": "Calvert",
    "State": "Maryland"
  }, {
    "County": "Caroline",
    "State": "Maryland"
  }, {
    "County": "Carroll",
    "State": "Maryland"
  }, {
    "County": "Cecil",
    "State": "Maryland"
  }, {
    "County": "Charles",
    "State": "Maryland"
  }, {
    "County": "Dorchester",
    "State": "Maryland"
  }, {
    "County": "Frederick",
    "State": "Maryland"
  }, {
    "County": "Garrett",
    "State": "Maryland"
  }, {
    "County": "Harford",
    "State": "Maryland"
  }, {
    "County": "Howard",
    "State": "Maryland"
  }, {
    "County": "Kent",
    "State": "Maryland"
  }, {
    "County": "Montgomery",
    "State": "Maryland"
  }, {
    "County": "Prince Georges",
    "State": "Maryland"
  }, {
    "County": "Queen Annes",
    "State": "Maryland"
  }, {
    "County": "St Marys",
    "State": "Maryland"
  }, {
    "County": "Somerset",
    "State": "Maryland"
  }, {
    "County": "Talbot",
    "State": "Maryland"
  }, {
    "County": "Washington",
    "State": "Maryland"
  }, {
    "County": "Wicomico",
    "State": "Maryland"
  }, {
    "County": "Worcester",
    "State": "Maryland"
  }, {
    "County": "Baltimore City",
    "State": "Maryland"
  }, {
    "County": "Barnstable",
    "State": "Massachusetts"
  }, {
    "County": "Berkshiren",
    "State": "Massachusetts"
  }, {
    "County": "Bristol",
    "State": "Massachusetts"
  }, {
    "County": "Dukes",
    "State": "Massachusetts"
  }, {
    "County": "Essex",
    "State": "Massachusetts"
  }, {
    "County": "Franklin",
    "State": "Massachusetts"
  }, {
    "County": "Hampden",
    "State": "Massachusetts"
  }, {
    "County": "Hampshire",
    "State": "Massachusetts"
  }, {
    "County": "Middlesex",
    "State": "Massachusetts"
  }, {
    "County": "Nantucket Town and County",
    "State": "Massachusetts"
  }, {
    "County": "Norfolk",
    "State": "Massachusetts"
  }, {
    "County": "Plymouth",
    "State": "Massachusetts"
  }, {
    "County": "Suffolk",
    "State": "Massachusetts"
  }, {
    "County": "Worcester",
    "State": "Massachusetts"
  }, {
    "County": "Alcona",
    "State": "Michigan"
  }, {
    "County": "Alger",
    "State": "Michigan"
  }, {
    "County": "Allegan",
    "State": "Michigan"
  }, {
    "County": "Alpena",
    "State": "Michigan"
  }, {
    "County": "Antrim",
    "State": "Michigan"
  }, {
    "County": "Arenac",
    "State": "Michigan"
  }, {
    "County": "Baraga",
    "State": "Michigan"
  }, {
    "County": "Barry",
    "State": "Michigan"
  }, {
    "County": "Bay",
    "State": "Michigan"
  }, {
    "County": "Benzie",
    "State": "Michigan"
  }, {
    "County": "Berrien",
    "State": "Michigan"
  }, {
    "County": "Branch",
    "State": "Michigan"
  }, {
    "County": "Calhoun",
    "State": "Michigan"
  }, {
    "County": "Cass",
    "State": "Michigan"
  }, {
    "County": "Charlevoix",
    "State": "Michigan"
  }, {
    "County": "Cheboygan",
    "State": "Michigan"
  }, {
    "County": "Chippewa",
    "State": "Michigan"
  }, {
    "County": "Clare",
    "State": "Michigan"
  }, {
    "County": "Clinton",
    "State": "Michigan"
  }, {
    "County": "Crawford",
    "State": "Michigan"
  }, {
    "County": "Delta",
    "State": "Michigan"
  }, {
    "County": "Dickinson",
    "State": "Michigan"
  }, {
    "County": "Eaton",
    "State": "Michigan"
  }, {
    "County": "Emmet",
    "State": "Michigan"
  }, {
    "County": "Genesee",
    "State": "Michigan"
  }, {
    "County": "Gladwin",
    "State": "Michigan"
  }, {
    "County": "Gogebic",
    "State": "Michigan"
  }, {
    "County": "Grand Traverse",
    "State": "Michigan"
  }, {
    "County": "Gratiot",
    "State": "Michigan"
  }, {
    "County": "Hillsdale",
    "State": "Michigan"
  }, {
    "County": "Houghton",
    "State": "Michigan"
  }, {
    "County": "Huron",
    "State": "Michigan"
  }, {
    "County": "Ingham",
    "State": "Michigan"
  }, {
    "County": "Ionia",
    "State": "Michigan"
  }, {
    "County": "Iosco",
    "State": "Michigan"
  }, {
    "County": "Iron",
    "State": "Michigan"
  }, {
    "County": "Isabella",
    "State": "Michigan"
  }, {
    "County": "Jackson",
    "State": "Michigan"
  }, {
    "County": "Kalamazoo",
    "State": "Michigan"
  }, {
    "County": "Kalkaska",
    "State": "Michigan"
  }, {
    "County": "Kent",
    "State": "Michigan"
  }, {
    "County": "Keweenaw",
    "State": "Michigan"
  }, {
    "County": "Lake",
    "State": "Michigan"
  }, {
    "County": "Lapeer",
    "State": "Michigan"
  }, {
    "County": "Leelanau",
    "State": "Michigan"
  }, {
    "County": "Lenawee",
    "State": "Michigan"
  }, {
    "County": "Livingston",
    "State": "Michigan"
  }, {
    "County": "Luce",
    "State": "Michigan"
  }, {
    "County": "Mackinac",
    "State": "Michigan"
  }, {
    "County": "Macomb",
    "State": "Michigan"
  }, {
    "County": "Manistee",
    "State": "Michigan"
  }, {
    "County": "Marquette",
    "State": "Michigan"
  }, {
    "County": "Mason",
    "State": "Michigan"
  }, {
    "County": "Mecosta",
    "State": "Michigan"
  }, {
    "County": "Menominee",
    "State": "Michigan"
  }, {
    "County": "Midland",
    "State": "Michigan"
  }, {
    "County": "Missaukee",
    "State": "Michigan"
  }, {
    "County": "Monroe",
    "State": "Michigan"
  }, {
    "County": "Montcalm",
    "State": "Michigan"
  }, {
    "County": "Montmorency",
    "State": "Michigan"
  }, {
    "County": "Muskegon",
    "State": "Michigan"
  }, {
    "County": "Newaygo",
    "State": "Michigan"
  }, {
    "County": "Oakland",
    "State": "Michigan"
  }, {
    "County": "Oceana",
    "State": "Michigan"
  }, {
    "County": "Ogemaw",
    "State": "Michigan"
  }, {
    "County": "Ontonagon",
    "State": "Michigan"
  }, {
    "County": "Osceola",
    "State": "Michigan"
  }, {
    "County": "Oscoda",
    "State": "Michigan"
  }, {
    "County": "Otsego",
    "State": "Michigan"
  }, {
    "County": "Ottawa",
    "State": "Michigan"
  }, {
    "County": "Presque Isle",
    "State": "Michigan"
  }, {
    "County": "Roscommon",
    "State": "Michigan"
  }, {
    "County": "Saginaw",
    "State": "Michigan"
  }, {
    "County": "St Clair",
    "State": "Michigan"
  }, {
    "County": "St Joseph",
    "State": "Michigan"
  }, {
    "County": "Sanilac",
    "State": "Michigan"
  }, {
    "County": "Schoolcraft",
    "State": "Michigan"
  }, {
    "County": "Shiawassee",
    "State": "Michigan"
  }, {
    "County": "Tuscola",
    "State": "Michigan"
  }, {
    "County": "Van Buren",
    "State": "Michigan"
  }, {
    "County": "Washtenaw",
    "State": "Michigan"
  }, {
    "County": "Wayne",
    "State": "Michigan"
  }, {
    "County": "Wexford",
    "State": "Michigan"
  }, {
    "County": "Aitkin",
    "State": "Minnesota"
  }, {
    "County": "Anoka",
    "State": "Minnesota"
  }, {
    "County": "Becker",
    "State": "Minnesota"
  }, {
    "County": "Beltrami",
    "State": "Minnesota"
  }, {
    "County": "Benton",
    "State": "Minnesota"
  }, {
    "County": "Big Stone",
    "State": "Minnesota"
  }, {
    "County": "Blue Earth",
    "State": "Minnesota"
  }, {
    "County": "Brown",
    "State": "Minnesota"
  }, {
    "County": "Carlton",
    "State": "Minnesota"
  }, {
    "County": "Carver",
    "State": "Minnesota"
  }, {
    "County": "Cass",
    "State": "Minnesota"
  }, {
    "County": "Chippewa",
    "State": "Minnesota"
  }, {
    "County": "Chisago",
    "State": "Minnesota"
  }, {
    "County": "Clay",
    "State": "Minnesota"
  }, {
    "County": "Clearwater",
    "State": "Minnesota"
  }, {
    "County": "Cook",
    "State": "Minnesota"
  }, {
    "County": "Cottonwood",
    "State": "Minnesota"
  }, {
    "County": "Crow Wing",
    "State": "Minnesota"
  }, {
    "County": "Dakota",
    "State": "Minnesota"
  }, {
    "County": "Dodge",
    "State": "Minnesota"
  }, {
    "County": "Douglas",
    "State": "Minnesota"
  }, {
    "County": "Faribault",
    "State": "Minnesota"
  }, {
    "County": "Fillmore",
    "State": "Minnesota"
  }, {
    "County": "Freeborn",
    "State": "Minnesota"
  }, {
    "County": "Goodhue",
    "State": "Minnesota"
  }, {
    "County": "Grant",
    "State": "Minnesota"
  }, {
    "County": "Hennepin",
    "State": "Minnesota"
  }, {
    "County": "Houston",
    "State": "Minnesota"
  }, {
    "County": "Hubbard",
    "State": "Minnesota"
  }, {
    "County": "Isanti",
    "State": "Minnesota"
  }, {
    "County": "Itasca",
    "State": "Minnesota"
  }, {
    "County": "Jackson",
    "State": "Minnesota"
  }, {
    "County": "Kanabec",
    "State": "Minnesota"
  }, {
    "County": "Kandiyohi",
    "State": "Minnesota"
  }, {
    "County": "Kittson",
    "State": "Minnesota"
  }, {
    "County": "Koochiching",
    "State": "Minnesota"
  }, {
    "County": "Lacqui Parle",
    "State": "Minnesota"
  }, {
    "County": "Lake",
    "State": "Minnesota"
  }, {
    "County": "Lake of the Woods",
    "State": "Minnesota"
  }, {
    "County": "Le Sueur",
    "State": "Minnesota"
  }, {
    "County": "Lincoln",
    "State": "Minnesota"
  }, {
    "County": "Lyon",
    "State": "Minnesota"
  }, {
    "County": "Mc Leod",
    "State": "Minnesota"
  }, {
    "County": "Mahnomen",
    "State": "Minnesota"
  }, {
    "County": "Marshall",
    "State": "Minnesota"
  }, {
    "County": "Martin",
    "State": "Minnesota"
  }, {
    "County": "Meeker",
    "State": "Minnesota"
  }, {
    "County": "Mille Lacs",
    "State": "Minnesota"
  }, {
    "County": "Morrison",
    "State": "Minnesota"
  }, {
    "County": "Mower",
    "State": "Minnesota"
  }, {
    "County": "Murray",
    "State": "Minnesota"
  }, {
    "County": "Nicollet",
    "State": "Minnesota"
  }, {
    "County": "Nobles",
    "State": "Minnesota"
  }, {
    "County": "Norman",
    "State": "Minnesota"
  }, {
    "County": "Olmsted",
    "State": "Minnesota"
  }, {
    "County": "Otter Tail",
    "State": "Minnesota"
  }, {
    "County": "Pennington",
    "State": "Minnesota"
  }, {
    "County": "Pine",
    "State": "Minnesota"
  }, {
    "County": "Pipestone",
    "State": "Minnesota"
  }, {
    "County": "Polk",
    "State": "Minnesota"
  }, {
    "County": "Pope",
    "State": "Minnesota"
  }, {
    "County": "Ramsey",
    "State": "Minnesota"
  }, {
    "County": "Red Lake",
    "State": "Minnesota"
  }, {
    "County": "Redwood",
    "State": "Minnesota"
  }, {
    "County": "Renville",
    "State": "Minnesota"
  }, {
    "County": "Rice",
    "State": "Minnesota"
  }, {
    "County": "Rock",
    "State": "Minnesota"
  }, {
    "County": "Roseau",
    "State": "Minnesota"
  }, {
    "County": "St Louis",
    "State": "Minnesota"
  }, {
    "County": "Scott",
    "State": "Minnesota"
  }, {
    "County": "Sherburne",
    "State": "Minnesota"
  }, {
    "County": "Sibley",
    "State": "Minnesota"
  }, {
    "County": "Stearns",
    "State": "Minnesota"
  }, {
    "County": "Steele",
    "State": "Minnesota"
  }, {
    "County": "Stevens",
    "State": "Minnesota"
  }, {
    "County": "Swift",
    "State": "Minnesota"
  }, {
    "County": "Todd",
    "State": "Minnesota"
  }, {
    "County": "Traverse",
    "State": "Minnesota"
  }, {
    "County": "Wabasha",
    "State": "Minnesota"
  }, {
    "County": "Wadena",
    "State": "Minnesota"
  }, {
    "County": "Waseca",
    "State": "Minnesota"
  }, {
    "County": "Washington",
    "State": "Minnesota"
  }, {
    "County": "Watonwan",
    "State": "Minnesota"
  }, {
    "County": "Wilkin",
    "State": "Minnesota"
  }, {
    "County": "Winona",
    "State": "Minnesota"
  }, {
    "County": "Wright",
    "State": "Minnesota"
  }, {
    "County": "Yellow Medicine",
    "State": "Minnesota"
  }, {
    "County": "Adams",
    "State": "Mississippi"
  }, {
    "County": "Alcorn",
    "State": "Mississippi"
  }, {
    "County": "Amite",
    "State": "Mississippi"
  }, {
    "County": "Attala",
    "State": "Mississippi"
  }, {
    "County": "Benton",
    "State": "Mississippi"
  }, {
    "County": "Bolivar",
    "State": "Mississippi"
  }, {
    "County": "Calhoun",
    "State": "Mississippi"
  }, {
    "County": "Carroll",
    "State": "Mississippi"
  }, {
    "County": "Chickasaw",
    "State": "Mississippi"
  }, {
    "County": "Choctaw",
    "State": "Mississippi"
  }, {
    "County": "Claiborne",
    "State": "Mississippi"
  }, {
    "County": "Clarke",
    "State": "Mississippi"
  }, {
    "County": "Clay",
    "State": "Mississippi"
  }, {
    "County": "Coahoma",
    "State": "Mississippi"
  }, {
    "County": "Copiah",
    "State": "Mississippi"
  }, {
    "County": "Covington",
    "State": "Mississippi"
  }, {
    "County": "De Soto",
    "State": "Mississippi"
  }, {
    "County": "Forrest",
    "State": "Mississippi"
  }, {
    "County": "Franklin",
    "State": "Mississippi"
  }, {
    "County": "George",
    "State": "Mississippi"
  }, {
    "County": "Greene",
    "State": "Mississippi"
  }, {
    "County": "Grenada",
    "State": "Mississippi"
  }, {
    "County": "Hancock",
    "State": "Mississippi"
  }, {
    "County": "Harrison",
    "State": "Mississippi"
  }, {
    "County": "Hinds",
    "State": "Mississippi"
  }, {
    "County": "Holmes",
    "State": "Mississippi"
  }, {
    "County": "Humphreys",
    "State": "Mississippi"
  }, {
    "County": "Issaquena",
    "State": "Mississippi"
  }, {
    "County": "Itawamba",
    "State": "Mississippi"
  }, {
    "County": "Jackson",
    "State": "Mississippi"
  }, {
    "County": "Jasper",
    "State": "Mississippi"
  }, {
    "County": "Jefferson",
    "State": "Mississippi"
  }, {
    "County": "Jefferson Davis",
    "State": "Mississippi"
  }, {
    "County": "Jones",
    "State": "Mississippi"
  }, {
    "County": "Kemper",
    "State": "Mississippi"
  }, {
    "County": "Lafayette",
    "State": "Mississippi"
  }, {
    "County": "Lamar",
    "State": "Mississippi"
  }, {
    "County": "Lauderdale",
    "State": "Mississippi"
  }, {
    "County": "Lawrence",
    "State": "Mississippi"
  }, {
    "County": "Leake",
    "State": "Mississippi"
  }, {
    "County": "Lee",
    "State": "Mississippi"
  }, {
    "County": "Leflore",
    "State": "Mississippi"
  }, {
    "County": "Lincoln",
    "State": "Mississippi"
  }, {
    "County": "Lowndes",
    "State": "Mississippi"
  }, {
    "County": "Madison",
    "State": "Mississippi"
  }, {
    "County": "Marion",
    "State": "Mississippi"
  }, {
    "County": "Marshall",
    "State": "Mississippi"
  }, {
    "County": "Monroe",
    "State": "Mississippi"
  }, {
    "County": "Montgomery",
    "State": "Mississippi"
  }, {
    "County": "Neshoba",
    "State": "Mississippi"
  }, {
    "County": "Newton",
    "State": "Mississippi"
  }, {
    "County": "Noxubee",
    "State": "Mississippi"
  }, {
    "County": "Oktibbeha",
    "State": "Mississippi"
  }, {
    "County": "Panola",
    "State": "Mississippi"
  }, {
    "County": "Pearl River",
    "State": "Mississippi"
  }, {
    "County": "Perry",
    "State": "Mississippi"
  }, {
    "County": "Pike",
    "State": "Mississippi"
  }, {
    "County": "Pontotoc",
    "State": "Mississippi"
  }, {
    "County": "Prentiss",
    "State": "Mississippi"
  }, {
    "County": "Quitman",
    "State": "Mississippi"
  }, {
    "County": "Rankin",
    "State": "Mississippi"
  }, {
    "County": "Scott",
    "State": "Mississippi"
  }, {
    "County": "Sharkey",
    "State": "Mississippi"
  }, {
    "County": "Simpson",
    "State": "Mississippi"
  }, {
    "County": "Smith",
    "State": "Mississippi"
  }, {
    "County": "Stone",
    "State": "Mississippi"
  }, {
    "County": "Sunflower",
    "State": "Mississippi"
  }, {
    "County": "Tallahatchie",
    "State": "Mississippi"
  }, {
    "County": "Tate",
    "State": "Mississippi"
  }, {
    "County": "Tippah",
    "State": "Mississippi"
  }, {
    "County": "Tishomingo",
    "State": "Mississippi"
  }, {
    "County": "Tunica",
    "State": "Mississippi"
  }, {
    "County": "Union",
    "State": "Mississippi"
  }, {
    "County": "Walthall",
    "State": "Mississippi"
  }, {
    "County": "Warren",
    "State": "Mississippi"
  }, {
    "County": "Washington",
    "State": "Mississippi"
  }, {
    "County": "Wayne",
    "State": "Mississippi"
  }, {
    "County": "Webster",
    "State": "Mississippi"
  }, {
    "County": "Wilkinson",
    "State": "Mississippi"
  }, {
    "County": "Winston",
    "State": "Mississippi"
  }, {
    "County": "Yalobusha",
    "State": "Mississippi"
  }, {
    "County": "Yazoo",
    "State": "Mississippi"
  }, {
    "County": "Adair",
    "State": "Missouri"
  }, {
    "County": "Andrew",
    "State": "Missouri"
  }, {
    "County": "Atchison",
    "State": "Missouri"
  }, {
    "County": "Audrain",
    "State": "Missouri"
  }, {
    "County": "Barry",
    "State": "Missouri"
  }, {
    "County": "Barton",
    "State": "Missouri"
  }, {
    "County": "Bates",
    "State": "Missouri"
  }, {
    "County": "Benton",
    "State": "Missouri"
  }, {
    "County": "Bollinger",
    "State": "Missouri"
  }, {
    "County": "Boone",
    "State": "Missouri"
  }, {
    "County": "Buchanan",
    "State": "Missouri"
  }, {
    "County": "Butler",
    "State": "Missouri"
  }, {
    "County": "Caldwell",
    "State": "Missouri"
  }, {
    "County": "Callaway",
    "State": "Missouri"
  }, {
    "County": "Camden",
    "State": "Missouri"
  }, {
    "County": "Cape Girardeau",
    "State": "Missouri"
  }, {
    "County": "Carroll",
    "State": "Missouri"
  }, {
    "County": "Carter",
    "State": "Missouri"
  }, {
    "County": "Cass",
    "State": "Missouri"
  }, {
    "County": "Cedar",
    "State": "Missouri"
  }, {
    "County": "Chariton",
    "State": "Missouri"
  }, {
    "County": "Christian",
    "State": "Missouri"
  }, {
    "County": "Clark",
    "State": "Missouri"
  }, {
    "County": "Clay",
    "State": "Missouri"
  }, {
    "County": "Clinton",
    "State": "Missouri"
  }, {
    "County": "Cole",
    "State": "Missouri"
  }, {
    "County": "Cooper",
    "State": "Missouri"
  }, {
    "County": "Crawford",
    "State": "Missouri"
  }, {
    "County": "Dade",
    "State": "Missouri"
  }, {
    "County": "Dallas",
    "State": "Missouri"
  }, {
    "County": "Daviess",
    "State": "Missouri"
  }, {
    "County": "De Kalb",
    "State": "Missouri"
  }, {
    "County": "Dent",
    "State": "Missouri"
  }, {
    "County": "Douglas",
    "State": "Missouri"
  }, {
    "County": "Dunklin",
    "State": "Missouri"
  }, {
    "County": "Franklin",
    "State": "Missouri"
  }, {
    "County": "Gasconade",
    "State": "Missouri"
  }, {
    "County": "Gentry",
    "State": "Missouri"
  }, {
    "County": "Greene",
    "State": "Missouri"
  }, {
    "County": "Grundy",
    "State": "Missouri"
  }, {
    "County": "Harrison",
    "State": "Missouri"
  }, {
    "County": "Henry",
    "State": "Missouri"
  }, {
    "County": "Hickory",
    "State": "Missouri"
  }, {
    "County": "Holt",
    "State": "Missouri"
  }, {
    "County": "Howard",
    "State": "Missouri"
  }, {
    "County": "Howell",
    "State": "Missouri"
  }, {
    "County": "Iron",
    "State": "Missouri"
  }, {
    "County": "Jackson",
    "State": "Missouri"
  }, {
    "County": "Jasper",
    "State": "Missouri"
  }, {
    "County": "Jefferson",
    "State": "Missouri"
  }, {
    "County": "Johnson",
    "State": "Missouri"
  }, {
    "County": "Knox",
    "State": "Missouri"
  }, {
    "County": "Laclede",
    "State": "Missouri"
  }, {
    "County": "Lafayette",
    "State": "Missouri"
  }, {
    "County": "Lawrence",
    "State": "Missouri"
  }, {
    "County": "Lewis",
    "State": "Missouri"
  }, {
    "County": "Lincoln",
    "State": "Missouri"
  }, {
    "County": "Linn",
    "State": "Missouri"
  }, {
    "County": "Livingston",
    "State": "Missouri"
  }, {
    "County": "Mc Donald",
    "State": "Missouri"
  }, {
    "County": "Macon",
    "State": "Missouri"
  }, {
    "County": "Madison",
    "State": "Missouri"
  }, {
    "County": "Maries",
    "State": "Missouri"
  }, {
    "County": "Marion",
    "State": "Missouri"
  }, {
    "County": "Mercer",
    "State": "Missouri"
  }, {
    "County": "Miller",
    "State": "Missouri"
  }, {
    "County": "Mississippi",
    "State": "Missouri"
  }, {
    "County": "Moniteau",
    "State": "Missouri"
  }, {
    "County": "Monroe",
    "State": "Missouri"
  }, {
    "County": "Montgomery",
    "State": "Missouri"
  }, {
    "County": "Morgan",
    "State": "Missouri"
  }, {  
    "County": "New Madrid",
    "State": "Missouri"
  }, {
    "County": "Newton",
    "State": "Missouri"
  }, {
    "County": "Nodaway",
    "State": "Missouri"
  }, {
    "County": "Oregon",
    "State": "Missouri"
  }, {
    "County": "Osage",
    "State": "Missouri"
  }, {
    "County": "Ozark",
    "State": "Missouri"
  }, {
    "County": "Pemiscot",
    "State": "Missouri"
  }, {
    "County": "Perry",
    "State": "Missouri"
  }, {
    "County": "Pettis",
    "State": "Missouri"
  }, {
    "County": "Phelps",
    "State": "Missouri"
  }, {
    "County": "Pike",
    "State": "Missouri"
  }, {
    "County": "Platte",
    "State": "Missouri"
  }, {
    "County": "Polk",
    "State": "Missouri"
  }, {
    "County": "Pulaski",
    "State": "Missouri"
  }, {
    "County": "Putnam",
    "State": "Missouri"
  }, {
    "County": "Ralls",
    "State": "Missouri"
  }, {
    "County": "Randolph",
    "State": "Missouri"
  }, {
    "County": "Ray",
    "State": "Missouri"
  }, {
    "County": "Reynolds",
    "State": "Missouri"
  }, {
    "County": "Ripley",
    "State": "Missouri"
  }, {
    "County": "St Charles",
    "State": "Missouri"
  }, {
    "County": "St Clair",
    "State": "Missouri"
  }, {
    "County": "Ste Genevieve",
    "State": "Missouri"
  }, {
    "County": "St Francois",
    "State": "Missouri"
  }, {
    "County": "St Louis",
    "State": "Missouri"
  }, {
    "County": "Saline",
    "State": "Missouri"
  }, {
    "County": "Schuyler",
    "State": "Missouri"
  }, {
    "County": "Scotland",
    "State": "Missouri"
  }, {
    "County": "Scott",
    "State": "Missouri"
  }, {
    "County": "Shannon",
    "State": "Missouri"
  }, {
    "County": "Shelby",
    "State": "Missouri"
  }, {
    "County": "Stoddard",
    "State": "Missouri"
  }, {
    "County": "Stone",
    "State": "Missouri"
  }, {
    "County": "Sullivan",
    "State": "Missouri"
  }, {
    "County": "Taney",
    "State": "Missouri"
  }, {
    "County": "Texas",
    "State": "Missouri"
  }, {
    "County": "Vernon",
    "State": "Missouri"
  }, {
    "County": "Warren",
    "State": "Missouri"
  }, {
    "County": "Washington",
    "State": "Missouri"
  }, {
    "County": "Wayne",
    "State": "Missouri"
  }, {
    "County": "Webster",
    "State": "Missouri"
  }, {
    "County": "Worth",
    "State": "Missouri"
  }, {
    "County": "Wright",
    "State": "Missouri"
  }, {
    "County": "St Louis City",
    "State": "Missouri"
  }, {
    "County": "Beaverhead",
    "State": "Montana"
  }, {
    "County": "Big Horn",
    "State": "Montana"
  }, {
    "County": "Blaine",
    "State": "Montana"
  }, {
    "County": "Broadwater",
    "State": "Montana"
  }, {
    "County": "Carbon",
    "State": "Montana"
  }, {
    "County": "Carter",
    "State": "Montana"
  }, {
    "County": "Cascade",
    "State": "Montana"
  }, {
    "County": "Chouteau",
    "State": "Montana"
  }, {
    "County": "Custer",
    "State": "Montana"
  }, {
    "County": "Daniels",
    "State": "Montana"
  }, {
    "County": "Dawson",
    "State": "Montana"
  }, {
    "County": "Deer Lodge",
    "State": "Montana"
  }, {
    "County": "Fallon",
    "State": "Montana"
  }, {
    "County": "Fergus",
    "State": "Montana"
  }, {
    "County": "Flathead",
    "State": "Montana"
  }, {
    "County": "Gallatin",
    "State": "Montana"
  }, {
    "County": "Garfield",
    "State": "Montana"
  }, {
    "County": "Glacier",
    "State": "Montana"
  }, {
    "County": "Golden Valley",
    "State": "Montana"
  }, {
    "County": "Granite",
    "State": "Montana"
  }, {
    "County": "Hill",
    "State": "Montana"
  }, {
    "County": "Jefferson",
    "State": "Montana"
  }, {
    "County": "Judith Basin",
    "State": "Montana"
  }, {
    "County": "Lake",
    "State": "Montana"
  }, {
    "County": "Lewis and Clark",
    "State": "Montana"
  }, {
    "County": "Liberty",
    "State": "Montana"
  }, {
    "County": "Lincoln",
    "State": "Montana"
  }, {
    "County": "Mc Cone",
    "State": "Montana"
  }, {
    "County": "Madison",
    "State": "Montana"
  }, {
    "County": "Meagher",
    "State": "Montana"
  }, {
    "County": "Mineral",
    "State": "Montana"
  }, {
    "County": "Missoula",
    "State": "Montana"
  }, {
    "County": "Musselshell",
    "State": "Montana"
  }, {
    "County": "Park",
    "State": "Montana"
  }, {
    "County": "Petroleum",
    "State": "Montana"
  }, {
    "County": "Phillips",
    "State": "Montana"
  }, {
    "County": "Pondera",
    "State": "Montana"
  }, {
    "County": "Powder River",
    "State": "Montana"
  }, {
    "County": "Powell",
    "State": "Montana"
  }, {
    "County": "Prairie",
    "State": "Montana"
  }, {
    "County": "Ravalli",
    "State": "Montana"
  }, {
    "County": "Richland",
    "State": "Montana"
  }, {
    "County": "Roosevelt",
    "State": "Montana"
  }, {
    "County": "Rosebud",
    "State": "Montana"
  }, {
    "County": "Sanders",
    "State": "Montana"
  }, {
    "County": "Sheridan",
    "State": "Montana"
  }, {
    "County": "Silver Bow",
    "State": "Montana"
  }, {
    "County": "Stillwater",
    "State": "Montana"
  }, {
    "County": "Sweet Grass",
    "State": "Montana"
  }, {
    "County": "Teton",
    "State": "Montana"
  }, {
    "County": "Toole",
    "State": "Montana"
  }, {
    "County": "Treasure",
    "State": "Montana"
  }, {
    "County": "Valley",
    "State": "Montana"
  }, {
    "County": "Wheatland",
    "State": "Montana"
  }, {
    "County": "Wibaux",
    "State": "Montana"
  }, {
    "County": "Yellowstone",
    "State": "Montana"
  }, {
    "County": "Adams",
    "State": "Nebraska"
  }, {
    "County": "Antelope",
    "State": "Nebraska"
  }, {
    "County": "Arthur",
    "State": "Nebraska"
  }, {
    "County": "Banner",
    "State": "Nebraska"
  }, {
    "County": "Blaine",
    "State": "Nebraska"
  }, {
    "County": "Boone",
    "State": "Nebraska"
  }, {
    "County": "Box Butte",
    "State": "Nebraska"
  }, {
    "County": "Boyd",
    "State": "Nebraska"
  }, {
    "County": "Brown",
    "State": "Nebraska"
  }, {
    "County": "Buffalo",
    "State": "Nebraska"
  }, {
    "County": "Burt",
    "State": "Nebraska"
  }, {
    "County": "Butler",
    "State": "Nebraska"
  }, {
    "County": "Cass",
    "State": "Nebraska"
  }, {
    "County": "Cedar",
    "State": "Nebraska"
  }, {
    "County": "Chase",
    "State": "Nebraska"
  }, {
    "County": "Cherry",
    "State": "Nebraska"
  }, {
    "County": "Cheyenne",
    "State": "Nebraska"
  }, {
    "County": "Clay",
    "State": "Nebraska"
  }, {
    "County": "Colfax",
    "State": "Nebraska"
  }, {
    "County": "Cuming",
    "State": "Nebraska"
  }, {
    "County": "Custer",
    "State": "Nebraska"
  }, {
    "County": "Dakota",
    "State": "Nebraska"
  }, {
    "County": "Dawes",
    "State": "Nebraska"
  }, {
    "County": "Dawson",
    "State": "Nebraska"
  }, {
    "County": "Deuel",
    "State": "Nebraska"
  }, {
    "County": "Dixon",
    "State": "Nebraska"
  }, {
    "County": "Dodge",
    "State": "Nebraska"
  }, {
    "County": "Douglas",
    "State": "Nebraska"
  }, {
    "County": "Dundy",
    "State": "Nebraska"
  }, {
    "County": "Fillmore",
    "State": "Nebraska"
  }, {
    "County": "Franklin",
    "State": "Nebraska"
  }, {
    "County": "Frontier",
    "State": "Nebraska"
  }, {
    "County": "Furnas",
    "State": "Nebraska"
  }, {
    "County": "Gage",
    "State": "Nebraska"
  }, {
    "County": "Garden",
    "State": "Nebraska"
  }, {
    "County": "Garfield",
    "State": "Nebraska"
  }, {
    "County": "Gosper",
    "State": "Nebraska"
  }, {
    "County": "Grant",
    "State": "Nebraska"
  }, {
    "County": "Greeley",
    "State": "Nebraska"
  }, {
    "County": "Hall",
    "State": "Nebraska"
  }, {
    "County": "Hamilton",
    "State": "Nebraska"
  }, {
    "County": "Harlan",
    "State": "Nebraska"
  }, {
    "County": "Hayes",
    "State": "Nebraska"
  }, {
    "County": "Hitchcock",
    "State": "Nebraska"
  }, {
    "County": "Holt",
    "State": "Nebraska"
  }, {
    "County": "Hooker",
    "State": "Nebraska"
  }, {
    "County": "Howard",
    "State": "Nebraska"
  }, {
    "County": "Jefferson",
    "State": "Nebraska"
  }, {
    "County": "Johnson",
    "State": "Nebraska"
  }, {
    "County": "Kearney",
    "State": "Nebraska"
  }, {
    "County": "Keith",
    "State": "Nebraska"
  }, {
    "County": "Keya Paha",
    "State": "Nebraska"
  }, {
    "County": "Kimball",
    "State": "Nebraska"
  }, {
    "County": "Knox",
    "State": "Nebraska"
  }, {
    "County": "Lancaster",
    "State": "Nebraska"
  }, {
    "County": "Lincoln",
    "State": "Nebraska"
  }, {
    "County": "Logan",
    "State": "Nebraska"
  }, {
    "County": "Loup",
    "State": "Nebraska"
  }, {
    "County": "Mc Pherson",
    "State": "Nebraska"
  }, {
    "County": "Madison",
    "State": "Nebraska"
  }, {
    "County": "Merrick",
    "State": "Nebraska"
  }, {
    "County": "Morrill",
    "State": "Nebraska"
  }, {
    "County": "Nance",
    "State": "Nebraska"
  }, {
    "County": "Nemaha",
    "State": "Nebraska"
  }, {
    "County": "Nuckolls",
    "State": "Nebraska"
  }, {
    "County": "Otoe",
    "State": "Nebraska"
  }, {
    "County": "Pawnee",
    "State": "Nebraska"
  }, {
    "County": "Perkins",
    "State": "Nebraska"
  }, {
    "County": "Phelps",
    "State": "Nebraska"
  }, {
    "County": "Pierce",
    "State": "Nebraska"
  }, {
    "County": "Platte",
    "State": "Nebraska"
  }, {
    "County": "Polk",
    "State": "Nebraska"
  }, {
    "County": "Red Willow",
    "State": "Nebraska"
  }, {
    "County": "Richardson",
    "State": "Nebraska"
  }, {
    "County": "Rock",
    "State": "Nebraska"
  }, {
    "County": "Saline",
    "State": "Nebraska"
  }, {
    "County": "Sarpy",
    "State": "Nebraska"
  }, {
    "County": "Saunders",
    "State": "Nebraska"
  }, {
    "County": "Scotts Bluff",
    "State": "Nebraska"
  }, {
    "County": "Seward",
    "State": "Nebraska"
  }, {
    "County": "Sheridan",
    "State": "Nebraska"
  }, {
    "County": "Sherman",
    "State": "Nebraska"
  }, {
    "County": "Sioux",
    "State": "Nebraska"
  }, {
    "County": "Stanton",
    "State": "Nebraska"
  }, {
    "County": "Thayer",
    "State": "Nebraska"
  }, {
    "County": "Thomas",
    "State": "Nebraska"
  }, {
    "County": "Thurston",
    "State": "Nebraska"
  }, {
    "County": "Valley",
    "State": "Nebraska"
  }, {
    "County": "Washington",
    "State": "Nebraska"
  }, {
    "County": "Wayne",
    "State": "Nebraska"
  }, {
    "County": "Webster",
    "State": "Nebraska"
  }, {
    "County": "Wheeler",
    "State": "Nebraska"
  }, {
    "County": "York",
    "State": "Nebraska"
  }, {
    "County": "Churchill",
    "State": "Nevada"
  }, {
    "County": "Clark",
    "State": "Nevada"
  }, {
    "County": "Douglas",
    "State": "Nevada"
  }, {
    "County": "Elko",
    "State": "Nevada"
  }, {
    "County": "Esmeralda",
    "State": "Nevada"
  }, {
    "County": "Eureka",
    "State": "Nevada"
  }, {
    "County": "Humboldt",
    "State": "Nevada"
  }, {
    "County": "Lander",
    "State": "Nevada"
  }, {
    "County": "Lincoln",
    "State": "Nevada"
  }, {
    "County": "Lyon",
    "State": "Nevada"
  }, {
    "County": "Mineral",
    "State": "Nevada"
  }, {
    "County": "Nye",
    "State": "Nevada"
  }, {
    "County": "Pershing",
    "State": "Nevada"
  }, {
    "County": "Storey",
    "State": "Nevada"
  }, {
    "County": "Washoe",
    "State": "Nevada"
  }, {
    "County": "White Pine",
    "State": "Nevada"
  }, {
    "County": "Carson City Consolidated Municipality",
    "State": "Nevada"
  }, {
    "County": "Belknap",
    "State": "New Hampshire"
  }, {
    "County": "Carroll",
    "State": "New Hampshire"
  }, {
    "County": "Cheshire",
    "State": "New Hampshire"
  }, {
    "County": "Coos",
    "State": "New Hampshire"
  }, {
    "County": "Grafton",
    "State": "New Hampshire"
  }, {
    "County": "Hillsborough",
    "State": "New Hampshire"
  }, {
    "County": "Merrimack",
    "State": "New Hampshire"
  }, {
    "County": "Rockingham",
    "State": "New Hampshire"
  }, {
    "County": "Strafford",
    "State": "New Hampshire"
  }, {
    "County": "Sullivan",
    "State": "New Hampshire"
  }, {
    "County": "Atlantic",
    "State": "New Jersey"
  }, {
    "County": "Bergen",
    "State": "New Jersey"
  }, {
    "County": "Burlington",
    "State": "New Jersey"
  }, {
    "County": "Camden",
    "State": "New Jersey"
  }, {
    "County": "Cape May",
    "State": "New Jersey"
  }, {
    "County": "Cumberland",
    "State": "New Jersey"
  }, {
    "County": "Essex",
    "State": "New Jersey"
  }, {
    "County": "Gloucester",
    "State": "New Jersey"
  }, {
    "County": "Hudson",
    "State": "New Jersey"
  }, {
    "County": "Hunterdon",
    "State": "New Jersey"
  }, {
    "County": "Mercer",
    "State": "New Jersey"
  }, {
    "County": "Middlesex",
    "State": "New Jersey"
  }, {
    "County": "Monmouth",
    "State": "New Jersey"
  }, {
    "County": "Morris",
    "State": "New Jersey"
  }, {
    "County": "Ocean",
    "State": "New Jersey"
  }, {
    "County": "Passaic",
    "State": "New Jersey"
  }, {
    "County": "Salem",
    "State": "New Jersey"
  }, {
    "County": "Somerset",
    "State": "New Jersey"
  }, {
    "County": "Sussex",
    "State": "New Jersey"
  }, {
    "County": "Union",
    "State": "New Jersey"
  }, {
    "County": "Warren",
    "State": "New Jersey"
  }, {
    "County": "Bernalillo",
    "State": "New Mexico"
  }, {
    "County": "Catron",
    "State": "New Mexico"
  }, {
    "County": "Chaves",
    "State": "New Mexico"
  }, {
    "County": "Cibola",
    "State": "New Mexico"
  }, {
    "County": "Colfax",
    "State": "New Mexico"
  }, {
    "County": "Curry",
    "State": "New Mexico"
  }, {
    "County": "De Baca",
    "State": "New Mexico"
  }, {
    "County": "Doa Ana",
    "State": "New Mexico"
  }, {
    "County": "Eddy",
    "State": "New Mexico"
  }, {
    "County": "Grant",
    "State": "New Mexico"
  }, {
    "County": "Guadalupe",
    "State": "New Mexico"
  }, {
    "County": "Harding",
    "State": "New Mexico"
  }, {
    "County": "Hidalgo",
    "State": "New Mexico"
  }, {
    "County": "Lea",
    "State": "New Mexico"
  }, {
    "County": "Lincoln",
    "State": "New Mexico"
  }, {
    "County": "Los Alamosv",
    "State": "New Mexico"
  }, {
    "County": "Luna",
    "State": "New Mexico"
  }, {
    "County": "Mc Kinley",
    "State": "New Mexico"
  }, {
    "County": "Mora",
    "State": "New Mexico"
  }, {
    "County": "Otero",
    "State": "New Mexico"
  }, {
    "County": "Quay",
    "State": "New Mexico"
  }, {
    "County": "Rio Arriba",
    "State": "New Mexico"
  }, {
    "County": "Roosevelt",
    "State": "New Mexico"
  }, {
    "County": "Sandoval",
    "State": "New Mexico"
  }, {
    "County": "San Juan",
    "State": "New Mexico"
  }, {
    "County": "San Miguel",
    "State": "New Mexico"
  }, {
    "County": "Santa Fe",
    "State": "New Mexico"
  }, {
    "County": "Sierra",
    "State": "New Mexico"
  }, {
    "County": "Socorro",
    "State": "New Mexico"
  }, {
    "County": "Taos",
    "State": "New Mexico"
  }, {
    "County": "Torrance",
    "State": "New Mexico"
  }, {
    "County": "Union",
    "State": "New Mexico"
  }, {
    "County": "Valencia",
    "State": "New Mexico"
  }, {
    "County": "Albany",
    "State": "New York"
  }, {
    "County": "Allegany",
    "State": "New York"
  }, {
    "County": "Bronx",
    "State": "New York"
  }, {
    "County": "Broome",
    "State": "New York"
  }, {
    "County": "Cattaraugus",
    "State": "New York"
  }, {
    "County": "Cayuga",
    "State": "New York"
  }, {
    "County": "Chautauqua",
    "State": "New York"
  }, {
    "County": "Chemung",
    "State": "New York"
  }, {
    "County": "Chenango",
    "State": "New York"
  }, {
    "County": "Clinton",
    "State": "New York"
  }, {
    "County": "Columbia",
    "State": "New York"
  }, {
    "County": "Cortland",
    "State": "New York"
  }, {
    "County": "Delaware",
    "State": "New York"
  }, {
    "County": "Dutchess",
    "State": "New York"
  }, {
    "County": "Erie",
    "State": "New York"
  }, {
    "County": "Essex",
    "State": "New York"
  }, {
    "County": "Franklin",
    "State": "New York"
  }, {
    "County": "Fulton",
    "State": "New York"
  }, {
    "County": "Genesee",
    "State": "New York"
  }, {
    "County": "Greene",
    "State": "New York"
  }, {
    "County": "Hamilton",
    "State": "New York"
  }, {
    "County": "Herkimer",
    "State": "New York"
  }, {
    "County": "Jefferson",
    "State": "New York"
  }, {
    "County": "Kings",
    "State": "New York"
  }, {
    "County": "Lewis",
    "State": "New York"
  }, {
    "County": "Livingston",
    "State": "New York"
  }, {
    "County": "Madison",
    "State": "New York"
  }, {
    "County": "Monroe",
    "State": "New York"
  }, {
    "County": "Montgomery",
    "State": "New York"
  }, {
    "County": "Nassau",
    "State": "New York"
  }, {
    "County": "New York",
    "State": "New York"
  }, {
    "County": "Niagara",
    "State": "New York"
  }, {
    "County": "Oneida",
    "State": "New York"
  }, {
    "County": "Onondaga",
    "State": "New York"
  }, {
    "County": "Ontario",
    "State": "New York"
  }, {
    "County": "Orange",
    "State": "New York"
  }, {
    "County": "Orleans",
    "State": "New York"
  }, {
    "County": "Oswego",
    "State": "New York"
  }, {
    "County": "Otsego",
    "State": "New York"
  }, {
    "County": "Putnam",
    "State": "New York"
  }, {
    "County": "Queens",
    "State": "New York"
  }, {
    "County": "Rensselaer",
    "State": "New York"
  }, {
    "County": "Richmond",
    "State": "New York"
  }, {
    "County": "Rockland",
    "State": "New York"
  }, {
    "County": "St Lawrence",
    "State": "New York"
  }, {
    "County": "Saratoga",
    "State": "New York"
  }, {
    "County": "Schenectady",
    "State": "New York"
  }, {
    "County": "Schoharie",
    "State": "New York"
  }, {
    "County": "Schuyler",
    "State": "New York"
  }, {
    "County": "Seneca",
    "State": "New York"
  }, {
    "County": "Steuben",
    "State": "New York"
  }, {
    "County": "Suffolk",
    "State": "New York"
  }, {
    "County": "Sullivan",
    "State": "New York"
  }, {
    "County": "Tioga",
    "State": "New York"
  }, {
    "County": "Tompkins",
    "State": "New York"
  }, {
    "County": "Ulster",
    "State": "New York"
  }, {
    "County": "Warren",
    "State": "New York"
  }, {
    "County": "Washington",
    "State": "New York"
  }, {
    "County": "Wayne",
    "State": "New York"
  }, {
    "County": "Westchester",
    "State": "New York"
  }, {
    "County": "Wyoming",
    "State": "New York"
  }, {
    "County": "Yates",
    "State": "New York"
  }, {
    "County": "Alamance",
    "State": "North Carolina"
  }, {
    "County": "Alexander",
    "State": "North Carolina"
  }, {
    "County": "Alleghany",
    "State": "North Carolina"
  }, {
    "County": "Anson",
    "State": "North Carolina"
  }, {
    "County": "Ashe",
    "State": "North Carolina"
  }, {
    "County": "Avery",
    "State": "North Carolina"
  }, {
    "County": "Beaufort",
    "State": "North Carolina"
  }, {
    "County": "Bertie",
    "State": "North Carolina"
  }, {
    "County": "Bladen",
    "State": "North Carolina"
  }, {
    "County": "Brunswick",
    "State": "North Carolina"
  }, {
    "County": "Buncombe",
    "State": "North Carolina"
  }, {
    "County": "Burke",
    "State": "North Carolina"
  }, {
    "County": "Cabarrus",
    "State": "North Carolina"
  }, {
    "County": "Caldwell",
    "State": "North Carolina"
  }, {
    "County": "Camden",
    "State": "North Carolina"
  }, {
    "County": "Carteret",
    "State": "North Carolina"
  }, {
    "County": "Caswell",
    "State": "North Carolina"
  }, {
    "County": "Catawba",
    "State": "North Carolina"
  }, {
    "County": "Chatham",
    "State": "North Carolina"
  }, {
    "County": "Cherokee",
    "State": "North Carolina"
  }, {
    "County": "Chowan",
    "State": "North Carolina"
  }, {
    "County": "Clay",
    "State": "North Carolina"
  }, {
    "County": "Cleveland",
    "State": "North Carolina"
  }, {
    "County": "Columbus",
    "State": "North Carolina"
  }, {
    "County": "Craven",
    "State": "North Carolina"
  }, {
    "County": "Cumberland",
    "State": "North Carolina"
  }, {
    "County": "Currituck",
    "State": "North Carolina"
  }, {
    "County": "Dare",
    "State": "North Carolina"
  }, {
    "County": "Davidson",
    "State": "North Carolina"
  }, {
    "County": "Davie",
    "State": "North Carolina"
  }, {
    "County": "Duplin",
    "State": "North Carolina"
  }, {
    "County": "Durham",
    "State": "North Carolina"
  }, {
    "County": "Edgecombe",
    "State": "North Carolina"
  }, {
    "County": "Forsyth",
    "State": "North Carolina"
  }, {
    "County": "Franklin",
    "State": "North Carolina"
  }, {
    "County": "Gaston",
    "State": "North Carolina"
  }, {
    "County": "Gates",
    "State": "North Carolina"
  }, {
    "County": "Graham",
    "State": "North Carolina"
  }, {
    "County": "Granville",
    "State": "North Carolina"
  }, {
    "County": "Greene",
    "State": "North Carolina"
  }, {
    "County": "Guilford",
    "State": "North Carolina"
  }, {
    "County": "Halifax",
    "State": "North Carolina"
  }, {
    "County": "Harnett",
    "State": "North Carolina"
  }, {
    "County": "Haywood",
    "State": "North Carolina"
  }, {
    "County": "Henderson",
    "State": "North Carolina"
  }, {
    "County": "Hertford",
    "State": "North Carolina"
  }, {
    "County": "Hoke",
    "State": "North Carolina"
  }, {
    "County": "Hyde",
    "State": "North Carolina"
  }, {
    "County": "Iredell",
    "State": "North Carolina"
  }, {
    "County": "Jackson",
    "State": "North Carolina"
  }, {
    "County": "Johnston",
    "State": "North Carolina"
  }, {
    "County": "Jones",
    "State": "North Carolina"
  }, {
    "County": "Lee",
    "State": "North Carolina"
  }, {
    "County": "Lenoir",
    "State": "North Carolina"
  }, {
    "County": "Lincoln",
    "State": "North Carolina"
  }, {
    "County": "Mc Dowell",
    "State": "North Carolina"
  }, {
    "County": "Macon",
    "State": "North Carolina"
  }, {
    "County": "Madison",
    "State": "North Carolina"
  }, {
    "County": "Martin",
    "State": "North Carolina"
  }, {
    "County": "Mecklenburg",
    "State": "North Carolina"
  }, {
    "County": "Mitchell",
    "State": "North Carolina"
  }, {
    "County": "Montgomery",
    "State": "North Carolina"
  }, {
    "County": "Moore",
    "State": "North Carolina"
  }, {
    "County": "Nash",
    "State": "North Carolina"
  }, {
    "County": "New Hanover",
    "State": "North Carolina"
  }, {
    "County": "North Hampton",
    "State": "North Carolina"
  }, {
    "County": "Onslow",
    "State": "North Carolina"
  }, {
    "County": "Orange",
    "State": "North Carolina"
  }, {
    "County": "Pamlico",
    "State": "North Carolina"
  }, {
    "County": "Pasquotank",
    "State": "North Carolina"
  }, {
    "County": "Pender",
    "State": "North Carolina"
  }, {
    "County": "Perquimans",
    "State": "North Carolina"
  }, {
    "County": "Person",
    "State": "North Carolina"
  }, {
    "County": "Pitt",
    "State": "North Carolina"
  }, {
    "County": "Polk",
    "State": "North Carolina"
  }, {
    "County": "Randolph",
    "State": "North Carolina"
  }, {
    "County": "Richmond",
    "State": "North Carolina"
  }, {
    "County": "Robeson",
    "State": "North Carolina"
  }, {
    "County": "Rockingham",
    "State": "North Carolina"
  }, {
    "County": "Rowan",
    "State": "North Carolina"
  }, {
    "County": "Rutherford",
    "State": "North Carolina"
  }, {
    "County": "Sampson",
    "State": "North Carolina"
  }, {
    "County": "Scotland",
    "State": "North Carolina"
  }, {
    "County": "Stanly",
    "State": "North Carolina"
  }, {
    "County": "Stokes",
    "State": "North Carolina"
  }, {
    "County": "Surry",
    "State": "North Carolina"
  }, {
    "County": "Swain",
    "State": "North Carolina"
  }, {
    "County": "Transylvania",
    "State": "North Carolina"
  }, {
    "County": "Tyrrell",
    "State": "North Carolina"
  }, {
    "County": "Union",
    "State": "North Carolina"
  }, {
    "County": "Vance",
    "State": "North Carolina"
  }, {
    "County": "Wake",
    "State": "North Carolina"
  }, {
    "County": "Warren",
    "State": "North Carolina"
  }, {
    "County": "Washington",
    "State": "North Carolina"
  }, {
    "County": "Watauga",
    "State": "North Carolina"
  }, {
    "County": "Wayne",
    "State": "North Carolina"
  }, {
    "County": "Wilkes",
    "State": "North Carolina"
  }, {
    "County": "Wilson",
    "State": "North Carolina"
  }, {
    "County": "Yadkin",
    "State": "North Carolina"
  }, {
    "County": "Yancey",
    "State": "North Carolina"
  }, {
    "County": "Adams",
    "State": "North Dakota"
  }, {
    "County": "Barnes",
    "State": "North Dakota"
  }, {
    "County": "Benson",
    "State": "North Dakota"
  }, {
    "County": "Billings",
    "State": "North Dakota"
  }, {
    "County": "Bottineau",
    "State": "North Dakota"
  }, {
    "County": "Bowman",
    "State": "North Dakota"
  }, {
    "County": "Burke",
    "State": "North Dakota"
  }, {
    "County": "Burleigh",
    "State": "North Dakota"
  }, {
    "County": "Cass",
    "State": "North Dakota"
  }, {
    "County": "Cavalier",
    "State": "North Dakota"
  }, {
    "County": "Dickey",
    "State": "North Dakota"
  }, {
    "County": "Divide",
    "State": "North Dakota"
  }, {
    "County": "Dunn",
    "State": "North Dakota"
  }, {
    "County": "Eddy",
    "State": "North Dakota"
  }, {
    "County": "Emmons",
    "State": "North Dakota"
  }, {
    "County": "Foster",
    "State": "North Dakota"
  }, {
    "County": "Golden Valley",
    "State": "North Dakota"
  }, {
    "County": "Grand Forks",
    "State": "North Dakota"
  }, {
    "County": "Grant",
    "State": "North Dakota"
  }, {
    "County": "Griggs",
    "State": "North Dakota"
  }, {
    "County": "Hettinger",
    "State": "North Dakota"
  }, {
    "County": "Kidder",
    "State": "North Dakota"
  }, {
    "County": "La Moure",
    "State": "North Dakota"
  }, {
    "County": "Logan",
    "State": "North Dakota"
  }, {
    "County": "Mc Henry",
    "State": "North Dakota"
  }, {
    "County": "Mc Intosh",
    "State": "North Dakota"
  }, {
    "County": "Mc Kenzie",
    "State": "North Dakota"
  }, {
    "County": "Mc Lean",
    "State": "North Dakota"
  }, {
    "County": "Mercer",
    "State": "North Dakota"
  }, {
    "County": "Morton",
    "State": "North Dakota"
  }, {
    "County": "Mountrail",
    "State": "North Dakota"
  }, {
    "County": "Nelson",
    "State": "North Dakota"
  }, {
    "County": "Oliver",
    "State": "North Dakota"
  }, {
    "County": "Pembina",
    "State": "North Dakota"
  }, {
    "County": "Pierce",
    "State": "North Dakota"
  }, {
    "County": "Ramsey",
    "State": "North Dakota"
  }, {
    "County": "Ransom",
    "State": "North Dakota"
  }, {
    "County": "Renville",
    "State": "North Dakota"
  }, {
    "County": "Richland",
    "State": "North Dakota"
  }, {
    "County": "Rolette",
    "State": "North Dakota"
  }, {
    "County": "Sargent",
    "State": "North Dakota"
  }, {
    "County": "Sheridan",
    "State": "North Dakota"
  }, {
    "County": "Sioux",
    "State": "North Dakota"
  }, {
    "County": "Slope",
    "State": "North Dakota"
  }, {
    "County": "Stark",
    "State": "North Dakota"
  }, {
    "County": "Steele",
    "State": "North Dakota"
  }, {
    "County": "Stutsman",
    "State": "North Dakota"
  }, {
    "County": "Towner",
    "State": "North Dakota"
  }, {
    "County": "Traill",
    "State": "North Dakota"
  }, {
    "County": "Walsh",
    "State": "North Dakota"
  }, {
    "County": "Ward",
    "State": "North Dakota"
  }, {
    "County": "Wells",
    "State": "North Dakota"
  }, {
    "County": "Williams",
    "State": "North Dakota"
  }, {
    "County": "Northern Islands Municipality",
    "State": "Northern Mariana Islands"
  }, {
    "County": "Rota Municipality",
    "State": "Northern Mariana Islands"
  }, {
    "County": "Saipan Municipality",
    "State": "Northern Mariana Islands"
  }, {
    "County": "Tinian Municipality",
    "State": "Northern Mariana Islands"
  }, {
    "County": "Adams",
    "State": "Ohio"
  }, {
    "County": "Allen",
    "State": "Ohio"
  }, {
    "County": "Ashland",
    "State": "Ohio"
  }, {
    "County": "Ashtabula",
    "State": "Ohio"
  }, {
    "County": "Athens",
    "State": "Ohio"
  }, {
    "County": "Auglaize",
    "State": "Ohio"
  }, {
    "County": "Belmont",
    "State": "Ohio"
  }, {
    "County": "Brown",
    "State": "Ohio"
  }, {
    "County": "Butler",
    "State": "Ohio"
  }, {
    "County": "Carroll",
    "State": "Ohio"
  }, {
    "County": "Champaign",
    "State": "Ohio"
  }, {
    "County": "Clark",
    "State": "Ohio"
  }, {
    "County": "Clermont",
    "State": "Ohio"
  }, {
    "County": "Clinton",
    "State": "Ohio"
  }, {
    "County": "Columbiana",
    "State": "Ohio"
  }, {
    "County": "Coshocton",
    "State": "Ohio"
  }, {
    "County": "Crawford",
    "State": "Ohio"
  }, {
    "County": "Cuyahoga",
    "State": "Ohio"
  }, {
    "County": "Darke",
    "State": "Ohio"
  }, {
    "County": "Defiance",
    "State": "Ohio"
  }, {
    "County": "Delaware",
    "State": "Ohio"
  }, {
    "County": "Erie",
    "State": "Ohio"
  }, {
    "County": "Fairfield",
    "State": "Ohio"
  }, {
    "County": "Fayette",
    "State": "Ohio"
  }, {
    "County": "Franklin",
    "State": "Ohio"
  }, {
    "County": "Fulton",
    "State": "Ohio"
  }, {
    "County": "Gallia",
    "State": "Ohio"
  }, {
    "County": "Geauga",
    "State": "Ohio"
  }, {
    "County": "Greene",
    "State": "Ohio"
  }, {
    "County": "Guernsey",
    "State": "Ohio"
  }, {
    "County": "Hamilton",
    "State": "Ohio"
  }, {
    "County": "Hancock",
    "State": "Ohio"
  }, {
    "County": "Hardin",
    "State": "Ohio"
  }, {
    "County": "Harrison",
    "State": "Ohio"
  }, {
    "County": "Henry",
    "State": "Ohio"
  }, {
    "County": "Highland",
    "State": "Ohio"
  }, {
    "County": "Hocking",
    "State": "Ohio"
  }, {
    "County": "Holmes",
    "State": "Ohio"
  }, {
    "County": "Huron",
    "State": "Ohio"
  }, {
    "County": "Jackson",
    "State": "Ohio"
  }, {
    "County": "Jefferson",
    "State": "Ohio"
  }, {
    "County": "Knox",
    "State": "Ohio"
  }, {
    "County": "Lake",
    "State": "Ohio"
  }, {
    "County": "Lawrence",
    "State": "Ohio"
  }, {
    "County": "Licking",
    "State": "Ohio"
  }, {
    "County": "Logan",
    "State": "Ohio"
  }, {
    "County": "Lorain",
    "State": "Ohio"
  }, {
    "County": "Lucas",
    "State": "Ohio"
  }, {
    "County": "Madison",
    "State": "Ohio"
  }, {
    "County": "Mahoning",
    "State": "Ohio"
  }, {
    "County": "Marion",
    "State": "Ohio"
  }, {
    "County": "Medina",
    "State": "Ohio"
  }, {
    "County": "Meigs",
    "State": "Ohio"
  }, {
    "County": "Mercer",
    "State": "Ohio"
  }, {
    "County": "Miami",
    "State": "Ohio"
  }, {
    "County": "Monroe",
    "State": "Ohio"
  }, {
    "County": "Montgomery",
    "State": "Ohio"
  }, {
    "County": "Morgan",
    "State": "Ohio"
  }, {
    "County": "Morrow",
    "State": "Ohio"
  }, {
    "County": "Muskingum",
    "State": "Ohio"
  }, {
    "County": "Noble",
    "State": "Ohio"
  }, {
    "County": "Ottawa",
    "State": "Ohio"
  }, {
    "County": "Paulding",
    "State": "Ohio"
  }, {
    "County": "Perry",
    "State": "Ohio"
  }, {
    "County": "Pickaway",
    "State": "Ohio"
  }, {
    "County": "Pike",
    "State": "Ohio"
  }, {
    "County": "Portage",
    "State": "Ohio"
  }, {
    "County": "Preble",
    "State": "Ohio"
  }, {
    "County": "Putnam",
    "State": "Ohio"
  }, {
    "County": "Richland",
    "State": "Ohio"
  }, {
    "County": "Ross",
    "State": "Ohio"
  }, {
    "County": "Sandusky",
    "State": "Ohio"
  }, {
    "County": "Scioto",
    "State": "Ohio"
  }, {
    "County": "Seneca",
    "State": "Ohio"
  }, {
    "County": "Shelby",
    "State": "Ohio"
  }, {
    "County": "Stark",
    "State": "Ohio"
  }, {
    "County": "Summit",
    "State": "Ohio"
  }, {
    "County": "Trumbull",
    "State": "Ohio"
  }, {
    "County": "Tuscarawas",
    "State": "Ohio"
  }, {
    "County": "Union",
    "State": "Ohio"
  }, {
    "County": "VanWert",
    "State": "Ohio"
  }, {
    "County": "Vinton",
    "State": "Ohio"
  }, {
    "County": "Warren",
    "State": "Ohio"
  }, {
    "County": "Washington",
    "State": "Ohio"
  }, {
    "County": "Wayne",
    "State": "Ohio"
  }, {
    "County": "Williams",
    "State": "Ohio"
  }, {
    "County": "Wood",
    "State": "Ohio"
  }, {
    "County": "Wyandot",
    "State": "Ohio"
  }, {
    "County": "Adair",
    "State": "Oklahoma"
  }, {
    "County": "Alfalfa",
    "State": "Oklahoma"
  }, {
    "County": "Atoka",
    "State": "Oklahoma"
  }, {
    "County": "Beaver",
    "State": "Oklahoma"
  }, {
    "County": "Beckham",
    "State": "Oklahoma"
  }, {
    "County": "Blaine",
    "State": "Oklahoma"
  }, {
    "County": "Bryan",
    "State": "Oklahoma"
  }, {
    "County": "Caddo",
    "State": "Oklahoma"
  }, {
    "County": "Canadian",
    "State": "Oklahoma"
  }, {
    "County": "Carter",
    "State": "Oklahoma"
  }, {
    "County": "Cherokee",
    "State": "Oklahoma"
  }, {
    "County": "Choctaw",
    "State": "Oklahoma"
  }, {
    "County": "Cimarron",
    "State": "Oklahoma"
  }, {
    "County": "Cleveland",
    "State": "Oklahoma"
  }, {
    "County": "Coal",
    "State": "Oklahoma"
  }, {
    "County": "Comanche",
    "State": "Oklahoma"
  }, {
    "County": "Cotton",
    "State": "Oklahoma"
  }, {
    "County": "Craig",
    "State": "Oklahoma"
  }, {
    "County": "Creek",
    "State": "Oklahoma"
  }, {
    "County": "Custer",
    "State": "Oklahoma"
  }, {
    "County": "Delaware",
    "State": "Oklahoma"
  }, {
    "County": "Dewey",
    "State": "Oklahoma"
  }, {
    "County": "Ellis",
    "State": "Oklahoma"
  }, {
    "County": "Garfield",
    "State": "Oklahoma"
  }, {
    "County": "Garvin",
    "State": "Oklahoma"
  }, {
    "County": "Grady",
    "State": "Oklahoma"
  }, {
    "County": "Grant",
    "State": "Oklahoma"
  }, {
    "County": "Greer",
    "State": "Oklahoma"
  }, {
    "County": "Harmon",
    "State": "Oklahoma"
  }, {
    "County": "Harper",
    "State": "Oklahoma"
  }, {
    "County": "Haskell",
    "State": "Oklahoma"
  }, {
    "County": "Hughes",
    "State": "Oklahoma"
  }, {
    "County": "Jackson",
    "State": "Oklahoma"
  }, {
    "County": "Jefferson",
    "State": "Oklahoma"
  }, {
    "County": "Johnston",
    "State": "Oklahoma"
  }, {
    "County": "Kay",
    "State": "Oklahoma"
  }, {
    "County": "Kingfisher",
    "State": "Oklahoma"
  }, {
    "County": "Kiowa",
    "State": "Oklahoma"
  }, {
    "County": "Latimer",
    "State": "Oklahoma"
  }, {
    "County": "Le Flore",
    "State": "Oklahoma"
  }, {
    "County": "Lincoln",
    "State": "Oklahoma"
  }, {
    "County": "Logan",
    "State": "Oklahoma"
  }, {
    "County": "Love",
    "State": "Oklahoma"
  }, {
    "County": "Mc Clain",
    "State": "Oklahoma"
  }, {
    "County": "Mc Curtain",
    "State": "Oklahoma"
  }, {
    "County": "Mc Intosh",
    "State": "Oklahoma"
  }, {
    "County": "Major",
    "State": "Oklahoma"
  }, {
    "County": "Marshall",
    "State": "Oklahoma"
  }, {
    "County": "Mayes",
    "State": "Oklahoma"
  }, {
    "County": "Murray",
    "State": "Oklahoma"
  }, {
    "County": "Muskogee",
    "State": "Oklahoma"
  }, {
    "County": "Noble",
    "State": "Oklahoma"
  }, {
    "County": "Nowata",
    "State": "Oklahoma"
  }, {
    "County": "Okfuskee",
    "State": "Oklahoma"
  }, {
    "County": "Oklahoma",
    "State": "Oklahoma"
  }, {
    "County": "Okmulgee",
    "State": "Oklahoma"
  }, {
    "County": "Osage",
    "State": "Oklahoma"
  }, {
    "County": "Ottawa",
    "State": "Oklahoma"
  }, {
    "County": "Pawnee",
    "State": "Oklahoma"
  }, {
    "County": "Payne",
    "State": "Oklahoma"
  }, {
    "County": "Pittsburg",
    "State": "Oklahoma"
  }, {
    "County": "Pontotoc",
    "State": "Oklahoma"
  }, {
    "County": "Pottawatomie",
    "State": "Oklahoma"
  }, {
    "County": "Pushmataha",
    "State": "Oklahoma"
  }, {
    "County": "Roger Mills",
    "State": "Oklahoma"
  }, {
    "County": "Rogers",
    "State": "Oklahoma"
  }, {
    "County": "Seminole",
    "State": "Oklahoma"
  }, {
    "County": "Sequoyah",
    "State": "Oklahoma"
  }, {
    "County": "Stephens",
    "State": "Oklahoma"
  }, {
    "County": "Texas",
    "State": "Oklahoma"
  }, {
    "County": "Tillman",
    "State": "Oklahoma"
  }, {
    "County": "Tulsa",
    "State": "Oklahoma"
  }, {
    "County": "Wagoner",
    "State": "Oklahoma"
  }, {
    "County": "Washington",
    "State": "Oklahoma"
  }, {
    "County": "Washita",
    "State": "Oklahoma"
  }, {
    "County": "Woods",
    "State": "Oklahoma"
  }, {
    "County": "Woodward",
    "State": "Oklahoma"
  }, {
    "County": "Baker",
    "State": "Oregon"
  }, {
    "County": "Benton",
    "State": "Oregon"
  }, {
    "County": "Clackamas",
    "State": "Oregon"
  }, {
    "County": "Clatsop",
    "State": "Oregon"
  }, {
    "County": "Columbia",
    "State": "Oregon"
  }, {
    "County": "Coos",
    "State": "Oregon"
  }, {
    "County": "Crook",
    "State": "Oregon"
  }, {
    "County": "Curry",
    "State": "Oregon"
  }, {
    "County": "Deschutes",
    "State": "Oregon"
  }, {
    "County": "Douglas",
    "State": "Oregon"
  }, {
    "County": "Gilliam",
    "State": "Oregon"
  }, {
    "County": "Grant",
    "State": "Oregon"
  }, {
    "County": "Harney",
    "State": "Oregon"
  }, {
    "County": "Hood River",
    "State": "Oregon"
  }, {
    "County": "Jackson",
    "State": "Oregon"
  }, {
    "County": "Jefferson",
    "State": "Oregon"
  }, {
    "County": "Josephine",
    "State": "Oregon"
  }, {
    "County": "Klamath",
    "State": "Oregon"
  }, {
    "County": "Lake",
    "State": "Oregon"
  }, {
    "County": "Lane",
    "State": "Oregon"
  }, {
    "County": "Lincoln",
    "State": "Oregon"
  }, {
    "County": "Linn",
    "State": "Oregon"
  }, {
    "County": "Malheur",
    "State": "Oregon"
  }, {
    "County": "Marion",
    "State": "Oregon"
  }, {
    "County": "Morrow",
    "State": "Oregon"
  }, {
    "County": "Multnomah",
    "State": "Oregon"
  }, {
    "County": "Polk",
    "State": "Oregon"
  }, {
    "County": "Sherman",
    "State": "Oregon"
  }, {
    "County": "Tillamook",
    "State": "Oregon"
  }, {
    "County": "Umatilla",
    "State": "Oregon"
  }, {
    "County": "Union",
    "State": "Oregon"
  }, {
    "County": "Wallowa",
    "State": "Oregon"
  }, {
    "County": "Wasco",
    "State": "Oregon"
  }, {
    "County": "Washington",
    "State": "Oregon"
  }, {
    "County": "Wheeler",
    "State": "Oregon"
  }, {
    "County": "Yamhill",
    "State": "Oregon"
  }, {
    "County": "Adams",
    "State": "Pennsylvania"
  }, {
    "County": "Allegheny",
    "State": "Pennsylvania"
  }, {
    "County": "Armstrong",
    "State": "Pennsylvania"
  }, {
    "County": "Beaver",
    "State": "Pennsylvania"
  }, {
    "County": "Bedford",
    "State": "Pennsylvania"
  }, {
    "County": "Berks",
    "State": "Pennsylvania"
  }, {
    "County": "Blair",
    "State": "Pennsylvania"
  }, {
    "County": "Bradford",
    "State": "Pennsylvania"
  }, {
    "County": "Bucks",
    "State": "Pennsylvania"
  }, {
    "County": "Butler",
    "State": "Pennsylvania"
  }, {
    "County": "Cambria",
    "State": "Pennsylvania"
  }, {
    "County": "Cameron",
    "State": "Pennsylvania"
  }, {
    "County": "Carbon",
    "State": "Pennsylvania"
  }, {
    "County": "Centre",
    "State": "Pennsylvania"
  }, {
    "County": "Chester",
    "State": "Pennsylvania"
  }, {
    "County": "Clarion",
    "State": "Pennsylvania"
  }, {
    "County": "Clearfield",
    "State": "Pennsylvania"
  }, {
    "County": "Clinton",
    "State": "Pennsylvania"
  }, {
    "County": "Columbia",
    "State": "Pennsylvania"
  }, {
    "County": "Crawford",
    "State": "Pennsylvania"
  }, {
    "County": "Cumberland",
    "State": "Pennsylvania"
  }, {
    "County": "Dauphin",
    "State": "Pennsylvania"
  }, {
    "County": "Delaware",
    "State": "Pennsylvania"
  }, {
    "County": "Elk",
    "State": "Pennsylvania"
  }, {
    "County": "Erie",
    "State": "Pennsylvania"
  }, {
    "County": "Fayette",
    "State": "Pennsylvania"
  }, {
    "County": "Forest",
    "State": "Pennsylvania"
  }, {
    "County": "Franklin",
    "State": "Pennsylvania"
  }, {
    "County": "Fulton",
    "State": "Pennsylvania"
  }, {
    "County": "Greene",
    "State": "Pennsylvania"
  }, {
    "County": "Huntingdon",
    "State": "Pennsylvania"
  }, {
    "County": "Indiana",
    "State": "Pennsylvania"
  }, {
    "County": "Jefferson",
    "State": "Pennsylvania"
  }, {
    "County": "Juniata",
    "State": "Pennsylvania"
  }, {
    "County": "Lackawanna",
    "State": "Pennsylvania"
  }, {
    "County": "Lancaster",
    "State": "Pennsylvania"
  }, {
    "County": "Lawrence",
    "State": "Pennsylvania"
  }, {
    "County": "Lebanon",
    "State": "Pennsylvania"
  }, {
    "County": "Lehigh",
    "State": "Pennsylvania"
  }, {
    "County": "Luzerne",
    "State": "Pennsylvania"
  }, {
    "County": "Lycoming",
    "State": "Pennsylvania"
  }, {
    "County": "Mc Kean",
    "State": "Pennsylvania"
  }, {
    "County": "Mercer",
    "State": "Pennsylvania"
  }, {
    "County": "Mifflin",
    "State": "Pennsylvania"
  }, {
    "County": "Monroe",
    "State": "Pennsylvania"
  }, {
    "County": "Montgomery",
    "State": "Pennsylvania"
  }, {
    "County": "Montour",
    "State": "Pennsylvania"
  }, {
    "County": "Northampton",
    "State": "Pennsylvania"
  }, {
    "County": "Northumberland",
    "State": "Pennsylvania"
  }, {
    "County": "Perry",
    "State": "Pennsylvania"
  }, {
    "County": "Philadelphia",
    "State": "Pennsylvania"
  }, {
    "County": "Pike",
    "State": "Pennsylvania"
  }, {
    "County": "Potter",
    "State": "Pennsylvania"
  }, {
    "County": "Schuylkill",
    "State": "Pennsylvania"
  }, {
    "County": "Snyder",
    "State": "Pennsylvania"
  }, {
    "County": "Somerset",
    "State": "Pennsylvania"
  }, {
    "County": "Sullivan",
    "State": "Pennsylvania"
  }, {
    "County": "Susquehanna",
    "State": "Pennsylvania"
  }, {
    "County": "Tioga",
    "State": "Pennsylvania"
  }, {
    "County": "Union",
    "State": "Pennsylvania"
  }, {
    "County": "Venango",
    "State": "Pennsylvania"
  }, {
    "County": "Warren",
    "State": "Pennsylvania"
  }, {
    "County": "Washington",
    "State": "Pennsylvania"
  }, {
    "County": "Wayne",
    "State": "Pennsylvania"
  }, {
    "County": "Westmoreland",
    "State": "Pennsylvania"
  }, {
    "County": "Wyoming",
    "State": "Pennsylvania"
  }, {
    "County": "York",
    "State": "Pennsylvania"
  }, {
    "County": "Adjuntas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Aguada Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Aguadilla Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Aguas Buenas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Aibonito Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Aasco Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Arecibo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Arroyo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Barceloneta Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Barranquitas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Bayamn Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Cabo Rojo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Caguas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Camuy Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Canvanas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Carolina Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Catao Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Cayey Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Ceiba Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Ciales Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Cidra Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Coamo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Comero Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Corozal Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Culebra Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Dorado Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Fajardo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Florida Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Gunica Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Guayama Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Guayanilla Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Guaynabo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Gurabo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Hatillo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Hormigueros Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Humacao Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Isabela Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Jayuya Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Juana Daz Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Juncos Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Lajas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Lares Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Las Maras Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "LasPiedras Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Loza Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Luquillo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Manat Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Maricao Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Maunabo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Mayagez Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Moca Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Morovis Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Naguabo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Naranjito Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Orocovis Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Patillas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Peuelas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Ponce Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Quebradillas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Rincn Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Ro Grande Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Sabana Grande Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Salinas Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "San Germn Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "San Juan Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "San Lorenzo Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "San Sebastin Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Santa Isabel Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Toa Alta Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Toa Baja Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Trujillo Alto Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Utuado Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Vega Alta Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Vega Baja Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Vieques Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Villalba Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Yabucoa Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Yauco Municipality",
    "State": "Puerto Rico"
  }, {
    "County": "Bristoln",
    "State": "Rhode Island"
  }, {
    "County": "Kentn",
    "State": "Rhode Island"
  }, {
    "County": "Newportn",
    "State": "Rhode Island"
  }, {
    "County": "Providencen",
    "State": "Rhode Island"
  }, {
    "County": "Washingtonn",
    "State": "Rhode Island"
  }, {
    "County": "Abbeville",
    "State": "South Carolina"
  }, {
    "County": "Aiken",
    "State": "South Carolina"
  }, {
    "County": "Allendale",
    "State": "South Carolina"
  }, {
    "County": "Anderson",
    "State": "South Carolina"
  }, {
    "County": "Bamberg",
    "State": "South Carolina"
  }, {
    "County": "Barnwell",
    "State": "South Carolina"
  }, {
    "County": "Beaufort",
    "State": "South Carolina"
  }, {
    "County": "Berkeley",
    "State": "South Carolina"
  }, {
    "County": "Calhoun",
    "State": "South Carolina"
  }, {
    "County": "Charleston",
    "State": "South Carolina"
  }, {
    "County": "Cherokee",
    "State": "South Carolina"
  }, {
    "County": "Chester",
    "State": "South Carolina"
  }, {
    "County": "Chesterfield",
    "State": "South Carolina"
  }, {
    "County": "Clarendon",
    "State": "South Carolina"
  }, {
    "County": "Colleton",
    "State": "South Carolina"
  }, {
    "County": "Darlington",
    "State": "South Carolina"
  }, {
    "County": "Dillon",
    "State": "South Carolina"
  }, {
    "County": "Dorchester",
    "State": "South Carolina"
  }, {
    "County": "Edgefield",
    "State": "South Carolina"
  }, {
    "County": "Fairfield",
    "State": "South Carolina"
  }, {
    "County": "Florence",
    "State": "South Carolina"
  }, {
    "County": "Georgetown",
    "State": "South Carolina"
  }, {
    "County": "Greenville",
    "State": "South Carolina"
  }, {
    "County": "Greenwood",
    "State": "South Carolina"
  }, {
    "County": "Hampton",
    "State": "South Carolina"
  }, {
    "County": "Horry",
    "State": "South Carolina"
  }, {
    "County": "Jasper",
    "State": "South Carolina"
  }, {
    "County": "Kershaw",
    "State": "South Carolina"
  }, {
    "County": "Lancaster",
    "State": "South Carolina"
  }, {
    "County": "Laurens",
    "State": "South Carolina"
  }, {
    "County": "Lee",
    "State": "South Carolina"
  }, {
    "County": "Lexington",
    "State": "South Carolina"
  }, {
    "County": "Mc Cormick",
    "State": "South Carolina"
  }, {
    "County": "Marion",
    "State": "South Carolina"
  }, {
    "County": "Marlboro",
    "State": "South Carolina"
  }, {
    "County": "Newberry",
    "State": "South Carolina"
  }, {
    "County": "Oconee",
    "State": "South Carolina"
  }, {
    "County": "Orangeburg",
    "State": "South Carolina"
  }, {
    "County": "Pickens",
    "State": "South Carolina"
  }, {
    "County": "Richland",
    "State": "South Carolina"
  }, {
    "County": "Saluda",
    "State": "South Carolina"
  }, {
    "County": "Spartanburg",
    "State": "South Carolina"
  }, {
    "County": "Sumter",
    "State": "South Carolina"
  }, {
    "County": "Union",
    "State": "South Carolina"
  }, {
    "County": "Williamsburg",
    "State": "South Carolina"
  }, {
    "County": "York",
    "State": "South Carolina"
  }, {
    "County": "Aurora",
    "State": "South Dakota"
  }, {
    "County": "Beadle",
    "State": "South Dakota"
  }, {
    "County": "Bennett",
    "State": "South Dakota"
  }, {
    "County": "Bon Homme",
    "State": "South Dakota"
  }, {
    "County": "Brookings",
    "State": "South Dakota"
  }, {
    "County": "Brown",
    "State": "South Dakota"
  }, {
    "County": "Brule",
    "State": "South Dakota"
  }, {
    "County": "Buffalo",
    "State": "South Dakota"
  }, {
    "County": "Butte",
    "State": "South Dakota"
  }, {
    "County": "Campbell",
    "State": "South Dakota"
  }, {
    "County": "Charles Mix",
    "State": "South Dakota"
  }, {
    "County": "Clark",
    "State": "South Dakota"
  }, {
    "County": "Clay",
    "State": "South Dakota"
  }, {
    "County": "Codington",
    "State": "South Dakota"
  }, {
    "County": "Corson",
    "State": "South Dakota"
  }, {
    "County": "Custer",
    "State": "South Dakota"
  }, {
    "County": "Davison",
    "State": "South Dakota"
  }, {
    "County": "Day",
    "State": "South Dakota"
  }, {
    "County": "Deuel",
    "State": "South Dakota"
  }, {
    "County": "Dewey",
    "State": "South Dakota"
  }, {
    "County": "Douglas",
    "State": "South Dakota"
  }, {
    "County": "Edmunds",
    "State": "South Dakota"
  }, {
    "County": "Fall River",
    "State": "South Dakota"
  }, {
    "County": "Faulk",
    "State": "South Dakota"
  }, {
    "County": "Grant",
    "State": "South Dakota"
  }, {
    "County": "Gregory",
    "State": "South Dakota"
  }, {
    "County": "Haakon",
    "State": "South Dakota"
  }, {
    "County": "Hamlin",
    "State": "South Dakota"
  }, {
    "County": "Hand",
    "State": "South Dakota"
  }, {
    "County": "Hanson",
    "State": "South Dakota"
  }, {
    "County": "Harding",
    "State": "South Dakota"
  }, {
    "County": "Hughes",
    "State": "South Dakota"
  }, {
    "County": "Hutchinson",
    "State": "South Dakota"
  }, {
    "County": "Hyde",
    "State": "South Dakota"
  }, {
    "County": "Jackson",
    "State": "South Dakota"
  }, {
    "County": "Jerauld",
    "State": "South Dakota"
  }, {
    "County": "Jones",
    "State": "South Dakota"
  }, {
    "County": "Kingsbury",
    "State": "South Dakota"
  }, {
    "County": "Lake",
    "State": "South Dakota"
  }, {
    "County": "Lawrence",
    "State": "South Dakota"
  }, {
    "County": "Lincoln",
    "State": "South Dakota"
  }, {
    "County": "Lyman",
    "State": "South Dakota"
  }, {
    "County": "Mc Cook",
    "State": "South Dakota"
  }, {
    "County": "Mc Pherson",
    "State": "South Dakota"
  }, {
    "County": "Marshall",
    "State": "South Dakota"
  }, {
    "County": "Meade",
    "State": "South Dakota"
  }, {
    "County": "Mellette",
    "State": "South Dakota"
  }, {
    "County": "Miner",
    "State": "South Dakota"
  }, {
    "County": "Minnehaha",
    "State": "South Dakota"
  }, {
    "County": "Moody",
    "State": "South Dakota"
  }, {
    "County": "Oglala Lakota",
    "State": "South Dakota"
  }, {
    "County": "Pennington",
    "State": "South Dakota"
  }, {
    "County": "Perkins",
    "State": "South Dakota"
  }, {
    "County": "Potter",
    "State": "South Dakota"
  }, {
    "County": "Roberts",
    "State": "South Dakota"
  }, {
    "County": "Sanborn",
    "State": "South Dakota"
  }, {
    "County": "Spink",
    "State": "South Dakota"
  }, {
    "County": "Stanley",
    "State": "South Dakota"
  }, {
    "County": "Sully",
    "State": "South Dakota"
  }, {
    "County": "Todd",
    "State": "South Dakota"
  }, {
    "County": "Tripp",
    "State": "South Dakota"
  }, {
    "County": "Turner",
    "State": "South Dakota"
  }, {
    "County": "Union",
    "State": "South Dakota"
  }, {
    "County": "Walworth",
    "State": "South Dakota"
  }, {
    "County": "Yankton",
    "State": "South Dakota"
  }, {
    "County": "Ziebach",
    "State": "South Dakota"
  }, {
    "County": "Anderson",
    "State": "Tennessee"
  }, {
    "County": "Bedford",
    "State": "Tennessee"
  }, {
    "County": "Benton",
    "State": "Tennessee"
  }, {
    "County": "Bledsoe",
    "State": "Tennessee"
  }, {
    "County": "Blount",
    "State": "Tennessee"
  }, {
    "County": "Bradley",
    "State": "Tennessee"
  }, {
    "County": "Campbell",
    "State": "Tennessee"
  }, {
    "County": "Cannon",
    "State": "Tennessee"
  }, {
    "County": "Carroll",
    "State": "Tennessee"
  }, {
    "County": "Carter",
    "State": "Tennessee"
  }, {
    "County": "Cheatham",
    "State": "Tennessee"
  }, {
    "County": "Chester",
    "State": "Tennessee"
  }, {
    "County": "Claiborne",
    "State": "Tennessee"
  }, {
    "County": "Clay",
    "State": "Tennessee"
  }, {
    "County": "Cocke",
    "State": "Tennessee"
  }, {
    "County": "Coffee",
    "State": "Tennessee"
  }, {
    "County": "Crockett",
    "State": "Tennessee"
  }, {
    "County": "Cumberland",
    "State": "Tennessee"
  }, {
    "County": "Davidson",
    "State": "Tennessee"
  }, {
    "County": "Decatur",
    "State": "Tennessee"
  }, {
    "County": "De Kalb",
    "State": "Tennessee"
  }, {
    "County": "Dickson",
    "State": "Tennessee"
  }, {
    "County": "Dyer",
    "State": "Tennessee"
  }, {
    "County": "Fayette",
    "State": "Tennessee"
  }, {
    "County": "Fentress",
    "State": "Tennessee"
  }, {
    "County": "Franklin",
    "State": "Tennessee"
  }, {
    "County": "Gibson",
    "State": "Tennessee"
  }, {
    "County": "Giles",
    "State": "Tennessee"
  }, {
    "County": "Grainger",
    "State": "Tennessee"
  }, {
    "County": "Greene",
    "State": "Tennessee"
  }, {
    "County": "Grundy",
    "State": "Tennessee"
  }, {
    "County": "Hamblen",
    "State": "Tennessee"
  }, {
    "County": "Hamilton",
    "State": "Tennessee"
  }, {
    "County": "Hancock",
    "State": "Tennessee"
  }, {
    "County": "Hardeman",
    "State": "Tennessee"
  }, {
    "County": "Hardin",
    "State": "Tennessee"
  }, {
    "County": "Hawkins",
    "State": "Tennessee"
  }, {
    "County": "Haywood",
    "State": "Tennessee"
  }, {
    "County": "Henderson",
    "State": "Tennessee"
  }, {
    "County": "Henry",
    "State": "Tennessee"
  }, {
    "County": "Hickman",
    "State": "Tennessee"
  }, {
    "County": "Houston",
    "State": "Tennessee"
  }, {
    "County": "Humphreys",
    "State": "Tennessee"
  }, {
    "County": "Jackson",
    "State": "Tennessee"
  }, {
    "County": "Jefferson",
    "State": "Tennessee"
  }, {
    "County": "Johnson",
    "State": "Tennessee"
  }, {
    "County": "Knox",
    "State": "Tennessee"
  }, {
    "County": "Lake",
    "State": "Tennessee"
  }, {
    "County": "Lauderdale",
    "State": "Tennessee"
  }, {
    "County": "Lawrence",
    "State": "Tennessee"
  }, {
    "County": "Lewis",
    "State": "Tennessee"
  }, {
    "County": "Lincoln",
    "State": "Tennessee"
  }, {
    "County": "Loudon",
    "State": "Tennessee"
  }, {
    "County": "Mc Minn",
    "State": "Tennessee"
  }, {
    "County": "Mc Nairy",
    "State": "Tennessee"
  }, {
    "County": "Macon",
    "State": "Tennessee"
  }, {
    "County": "Madison",
    "State": "Tennessee"
  }, {
    "County": "Marion",
    "State": "Tennessee"
  }, {
    "County": "Marshall",
    "State": "Tennessee"
  }, {
    "County": "Maury",
    "State": "Tennessee"
  }, {
    "County": "Meigs",
    "State": "Tennessee"
  }, {
    "County": "Monroe",
    "State": "Tennessee"
  }, {
    "County": "Montgomery",
    "State": "Tennessee"
  }, {
    "County": "Moore",
    "State": "Tennessee"
  }, {
    "County": "Morgan",
    "State": "Tennessee"
  }, {
    "County": "Obion",
    "State": "Tennessee"
  }, {
    "County": "Overton",
    "State": "Tennessee"
  }, {
    "County": "Perry",
    "State": "Tennessee"
  }, {
    "County": "Pickett",
    "State": "Tennessee"
  }, {
    "County": "Polk",
    "State": "Tennessee"
  }, {
    "County": "Putnam",
    "State": "Tennessee"
  }, {
    "County": "Rhea",
    "State": "Tennessee"
  }, {
    "County": "Roane",
    "State": "Tennessee"
  }, {
    "County": "Robertson",
    "State": "Tennessee"
  }, {
    "County": "Rutherford",
    "State": "Tennessee"
  }, {
    "County": "Scott",
    "State": "Tennessee"
  }, {
    "County": "Sequatchie",
    "State": "Tennessee"
  }, {
    "County": "Sevier",
    "State": "Tennessee"
  }, {
    "County": "Shelby",
    "State": "Tennessee"
  }, {
    "County": "Smith",
    "State": "Tennessee"
  }, {
    "County": "Stewart",
    "State": "Tennessee"
  }, {
    "County": "Sullivan",
    "State": "Tennessee"
  }, {
    "County": "Sumner",
    "State": "Tennessee"
  }, {
    "County": "Tipton",
    "State": "Tennessee"
  }, {
    "County": "Trousdale",
    "State": "Tennessee"
  }, {
    "County": "Unicoi",
    "State": "Tennessee"
  }, {
    "County": "Union",
    "State": "Tennessee"
  }, {
    "County": "Van Buren",
    "State": "Tennessee"
  }, {
    "County": "Warren",
    "State": "Tennessee"
  }, {
    "County": "Washington",
    "State": "Tennessee"
  }, {
    "County": "Wayne",
    "State": "Tennessee"
  }, {
    "County": "Weakley",
    "State": "Tennessee"
  }, {
    "County": "White",
    "State": "Tennessee"
  }, {
    "County": "Williamson",
    "State": "Tennessee"
  }, {
    "County": "Wilson",
    "State": "Tennessee"
  }, {
    "County": "Anderson",
    "State": "Texas"
  }, {
    "County": "Andrews",
    "State": "Texas"
  }, {
    "County": "Angelina",
    "State": "Texas"
  }, {
    "County": "Aransas",
    "State": "Texas"
  }, {
    "County": "Archer",
    "State": "Texas"
  }, {
    "County": "Armstrong",
    "State": "Texas"
  }, {
    "County": "Atascosa",
    "State": "Texas"
  }, {
    "County": "Austin",
    "State": "Texas"
  }, {
    "County": "Bailey",
    "State": "Texas"
  }, {
    "County": "Bandera",
    "State": "Texas"
  }, {
    "County": "Bastrop",
    "State": "Texas"
  }, {
    "County": "Baylor",
    "State": "Texas"
  }, {
    "County": "Bee",
    "State": "Texas"
  }, {
    "County": "Bell",
    "State": "Texas"
  }, {
    "County": "Bexar",
    "State": "Texas"
  }, {
    "County": "Blanco",
    "State": "Texas"
  }, {
    "County": "Borden",
    "State": "Texas"
  }, {
    "County": "Bosque",
    "State": "Texas"
  }, {
    "County": "Bowie",
    "State": "Texas"
  }, {
    "County": "Brazoria",
    "State": "Texas"
  }, {
    "County": "Brazos",
    "State": "Texas"
  }, {
    "County": "Brewster",
    "State": "Texas"
  }, {
    "County": "Briscoe",
    "State": "Texas"
  }, {
    "County": "Brooks",
    "State": "Texas"
  }, {
    "County": "Brown",
    "State": "Texas"
  }, {
    "County": "Burleson",
    "State": "Texas"
  }, {
    "County": "Burnet",
    "State": "Texas"
  }, {
    "County": "Caldwell",
    "State": "Texas"
  }, {
    "County": "Calhoun",
    "State": "Texas"
  }, {
    "County": "Callahan",
    "State": "Texas"
  }, {
    "County": "Cameron",
    "State": "Texas"
  }, {
    "County": "Camp",
    "State": "Texas"
  }, {
    "County": "Carson",
    "State": "Texas"
  }, {
    "County": "Cass",
    "State": "Texas"
  }, {
    "County": "Castro",
    "State": "Texas"
  }, {
    "County": "Chambers",
    "State": "Texas"
  }, {
    "County": "Cherokee",
    "State": "Texas"
  }, {
    "County": "Childress",
    "State": "Texas"
  }, {
    "County": "Clay",
    "State": "Texas"
  }, {
    "County": "Cochran",
    "State": "Texas"
  }, {
    "County": "Coke",
    "State": "Texas"
  }, {
    "County": "Coleman",
    "State": "Texas"
  }, {
    "County": "Collin",
    "State": "Texas"
  }, {
    "County": "Collingsworth",
    "State": "Texas"
  }, {
    "County": "Colorado",
    "State": "Texas"
  }, {
    "County": "Comal",
    "State": "Texas"
  }, {
    "County": "Comanche",
    "State": "Texas"
  }, {
    "County": "Concho",
    "State": "Texas"
  }, {
    "County": "Cooke",
    "State": "Texas"
  }, {
    "County": "Coryell",
    "State": "Texas"
  }, {
    "County": "Cottle",
    "State": "Texas"
  }, {
    "County": "Crane",
    "State": "Texas"
  }, {
    "County": "Crockett",
    "State": "Texas"
  }, {
    "County": "Crosby",
    "State": "Texas"
  }, {
    "County": "Culberson",
    "State": "Texas"
  }, {
    "County": "Dallam",
    "State": "Texas"
  }, {
    "County": "Dallas",
    "State": "Texas"
  }, {
    "County": "Dawson",
    "State": "Texas"
  }, {
    "County": "Deaf Smith",
    "State": "Texas"
  }, {
    "County": "Delta",
    "State": "Texas"
  }, {
    "County": "Denton",
    "State": "Texas"
  }, {
    "County": "De Witt",
    "State": "Texas"
  }, {
    "County": "Dickens",
    "State": "Texas"
  }, {
    "County": "Dimmit",
    "State": "Texas"
  }, {
    "County": "Donley",
    "State": "Texas"
  }, {
    "County": "Duval",
    "State": "Texas"
  }, {
    "County": "Eastland",
    "State": "Texas"
  }, {
    "County": "Ector",
    "State": "Texas"
  }, {
    "County": "Edwards",
    "State": "Texas"
  }, {
    "County": "Ellis",
    "State": "Texas"
  }, {
    "County": "El Paso",
    "State": "Texas"
  }, {
    "County": "Erath",
    "State": "Texas"
  }, {
    "County": "Falls",
    "State": "Texas"
  }, {
    "County": "Fannin",
    "State": "Texas"
  }, {
    "County": "Fayette",
    "State": "Texas"
  }, {
    "County": "Fisher",
    "State": "Texas"
  }, {
    "County": "Floyd",
    "State": "Texas"
  }, {
    "County": "Foard",
    "State": "Texas"
  }, {
    "County": "Fort Bend",
    "State": "Texas"
  }, {
    "County": "Franklin",
    "State": "Texas"
  }, {
    "County": "Freestone",
    "State": "Texas"
  }, {
    "County": "Frio",
    "State": "Texas"
  }, {
    "County": "Gaines",
    "State": "Texas"
  }, {
    "County": "Galveston",
    "State": "Texas"
  }, {
    "County": "Garza",
    "State": "Texas"
  }, {
    "County": "Gillespie",
    "State": "Texas"
  }, {
    "County": "Glasscock",
    "State": "Texas"
  }, {
    "County": "Goliad",
    "State": "Texas"
  }, {
    "County": "Gonzales",
    "State": "Texas"
  }, {
    "County": "Gray",
    "State": "Texas"
  }, {
    "County": "Grayson",
    "State": "Texas"
  }, {
    "County": "Gregg",
    "State": "Texas"
  }, {
    "County": "Grimes",
    "State": "Texas"
  }, {
    "County": "Guadalupe",
    "State": "Texas"
  }, {
    "County": "Hale",
    "State": "Texas"
  }, {
    "County": "Hall",
    "State": "Texas"
  }, {
    "County": "Hamilton",
    "State": "Texas"
  }, {
    "County": "Hansford",
    "State": "Texas"
  }, {
    "County": "Hardeman",
    "State": "Texas"
  }, {
    "County": "Hardin",
    "State": "Texas"
  }, {
    "County": "Harris",
    "State": "Texas"
  }, {
    "County": "Harrison",
    "State": "Texas"
  }, {
    "County": "Hartley",
    "State": "Texas"
  }, {
    "County": "Haskell",
    "State": "Texas"
  }, {
    "County": "Hays",
    "State": "Texas"
  }, {
    "County": "Hemphill",
    "State": "Texas"
  }, {
    "County": "Henderson",
    "State": "Texas"
  }, {
    "County": "Hidalgo",
    "State": "Texas"
  }, {
    "County": "Hill",
    "State": "Texas"
  }, {
    "County": "Hockley",
    "State": "Texas"
  }, {
    "County": "Hood",
    "State": "Texas"
  }, {
    "County": "Hopkins",
    "State": "Texas"
  }, {
    "County": "Houston",
    "State": "Texas"
  }, {
    "County": "Howard",
    "State": "Texas"
  }, {
    "County": "Hudspeth",
    "State": "Texas"
  }, {
    "County": "Hunt",
    "State": "Texas"
  }, {
    "County": "Hutchinson",
    "State": "Texas"
  }, {
    "County": "Irion",
    "State": "Texas"
  }, {
    "County": "Jack",
    "State": "Texas"
  }, {
    "County": "Jackson",
    "State": "Texas"
  }, {
    "County": "Jasper",
    "State": "Texas"
  }, {
    "County": "Jeff Davis",
    "State": "Texas"
  }, {
    "County": "Jefferson",
    "State": "Texas"
  }, {
    "County": "Jim Hogg",
    "State": "Texas"
  }, {
    "County": "Jim Wells",
    "State": "Texas"
  }, {
    "County": "Johnson",
    "State": "Texas"
  }, {
    "County": "Jones",
    "State": "Texas"
  }, {
    "County": "Karnes",
    "State": "Texas"
  }, {
    "County": "Kaufman",
    "State": "Texas"
  }, {
    "County": "Kendall",
    "State": "Texas"
  }, {
    "County": "Kenedy",
    "State": "Texas"
  }, {
    "County": "Kent",
    "State": "Texas"
  }, {
    "County": "Kerr",
    "State": "Texas"
  }, {
    "County": "Kimble",
    "State": "Texas"
  }, {
    "County": "King",
    "State": "Texas"
  }, {
    "County": "Kinney",
    "State": "Texas"
  }, {
    "County": "Kleberg",
    "State": "Texas"
  }, {
    "County": "Knox",
    "State": "Texas"
  }, {
    "County": "Lamar",
    "State": "Texas"
  }, {
    "County": "Lamb",
    "State": "Texas"
  }, {
    "County": "Lampasas",
    "State": "Texas"
  }, {
    "County": "La Salle",
    "State": "Texas"
  }, {
    "County": "Lavaca",
    "State": "Texas"
  }, {
    "County": "Lee",
    "State": "Texas"
  }, {
    "County": "Leon",
    "State": "Texas"
  }, {
    "County": "Liberty",
    "State": "Texas"
  }, {
    "County": "Limestone",
    "State": "Texas"
  }, {
    "County": "Lipscomb",
    "State": "Texas"
  }, {
    "County": "Live Oak",
    "State": "Texas"
  }, {
    "County": "Llano",
    "State": "Texas"
  }, {
    "County": "Loving",
    "State": "Texas"
  }, {
    "County": "Lubbock",
    "State": "Texas"
  }, {
    "County": "Lynn",
    "State": "Texas"
  }, {
    "County": "Mc Culloch",
    "State": "Texas"
  }, {
    "County": "Mc Lennan",
    "State": "Texas"
  }, {
    "County": "Mc Mullen",
    "State": "Texas"
  }, {
    "County": "Madison",
    "State": "Texas"
  }, {
    "County": "Marion",
    "State": "Texas"
  }, {
    "County": "Martin",
    "State": "Texas"
  }, {
    "County": "Mason",
    "State": "Texas"
  }, {
    "County": "Matagorda",
    "State": "Texas"
  }, {
    "County": "Maverick",
    "State": "Texas"
  }, {
    "County": "Medina",
    "State": "Texas"
  }, {
    "County": "Menard",
    "State": "Texas"
  }, {
    "County": "Midland",
    "State": "Texas"
  }, {
    "County": "Milam",
    "State": "Texas"
  }, {
    "County": "Mills",
    "State": "Texas"
  }, {
    "County": "Mitchell",
    "State": "Texas"
  }, {
    "County": "Montague",
    "State": "Texas"
  }, {
    "County": "Montgomery",
    "State": "Texas"
  }, {
    "County": "Moore",
    "State": "Texas"
  }, {
    "County": "Morris",
    "State": "Texas"
  }, {
    "County": "Motley",
    "State": "Texas"
  }, {
    "County": "Nacogdoches",
    "State": "Texas"
  }, {
    "County": "Navarro",
    "State": "Texas"
  }, {
    "County": "Newton",
    "State": "Texas"
  }, {
    "County": "Nolan",
    "State": "Texas"
  }, {
    "County": "Nueces",
    "State": "Texas"
  }, {
    "County": "Ochiltree",
    "State": "Texas"
  }, {
    "County": "Oldham",
    "State": "Texas"
  }, {
    "County": "Orange",
    "State": "Texas"
  }, {
    "County": "Palo Pinto",
    "State": "Texas"
  }, {
    "County": "Panola",
    "State": "Texas"
  }, {
    "County": "Parker",
    "State": "Texas"
  }, {
    "County": "Parmer",
    "State": "Texas"
  }, {
    "County": "Pecos",
    "State": "Texas"
  }, {
    "County": "Polk",
    "State": "Texas"
  }, {
    "County": "Potter",
    "State": "Texas"
  }, {
    "County": "Presidio",
    "State": "Texas"
  }, {
    "County": "Rains",
    "State": "Texas"
  }, {
    "County": "Randall",
    "State": "Texas"
  }, {
    "County": "Reagan",
    "State": "Texas"
  }, {
    "County": "Real",
    "State": "Texas"
  }, {
    "County": "Red River",
    "State": "Texas"
  }, {
    "County": "Reeves",
    "State": "Texas"
  }, {
    "County": "Refugio",
    "State": "Texas"
  }, {
    "County": "Roberts",
    "State": "Texas"
  }, {
    "County": "Robertson",
    "State": "Texas"
  }, {
    "County": "Rockwall",
    "State": "Texas"
  }, {
    "County": "Runnels",
    "State": "Texas"
  }, {
    "County": "Rusk",
    "State": "Texas"
  }, {
    "County": "Sabine",
    "State": "Texas"
  }, {
    "County": "San Augustine",
    "State": "Texas"
  }, {
    "County": "San Jacinto",
    "State": "Texas"
  }, {
    "County": "San Patricio",
    "State": "Texas"
  }, {
    "County": "San Saba",
    "State": "Texas"
  }, {
    "County": "Schleicher",
    "State": "Texas"
  }, {
    "County": "Scurry",
    "State": "Texas"
  }, {
    "County": "Shackelford",
    "State": "Texas"
  }, {
    "County": "Shelby",
    "State": "Texas"
  }, {
    "County": "Sherman",
    "State": "Texas"
  }, {
    "County": "Smith",
    "State": "Texas"
  }, {
    "County": "Somervell",
    "State": "Texas"
  }, {
    "County": "Starr",
    "State": "Texas"
  }, {
    "County": "Stephens",
    "State": "Texas"
  }, {
    "County": "Sterling",
    "State": "Texas"
  }, {
    "County": "Stonewall",
    "State": "Texas"
  }, {
    "County": "Sutton",
    "State": "Texas"
  }, {
    "County": "Swisher",
    "State": "Texas"
  }, {
    "County": "Tarrant",
    "State": "Texas"
  }, {
    "County": "Taylor",
    "State": "Texas"
  }, {
    "County": "Terrell",
    "State": "Texas"
  }, {
    "County": "Terry",
    "State": "Texas"
  }, {
    "County": "Throckmorton",
    "State": "Texas"
  }, {
    "County": "Titus",
    "State": "Texas"
  }, {
    "County": "Tom Green",
    "State": "Texas"
  }, {
    "County": "Travis",
    "State": "Texas"
  }, {
    "County": "Trinity",
    "State": "Texas"
  }, {
    "County": "Tyler",
    "State": "Texas"
  }, {
    "County": "Upshur",
    "State": "Texas"
  }, {
    "County": "Upton",
    "State": "Texas"
  }, {
    "County": "Uvalde",
    "State": "Texas"
  }, {
    "County": "Val Verde",
    "State": "Texas"
  }, {
    "County": "Van Zandt",
    "State": "Texas"
  }, {
    "County": "Victoria",
    "State": "Texas"
  }, {
    "County": "Walker",
    "State": "Texas"
  }, {
    "County": "Waller",
    "State": "Texas"
  }, {
    "County": "Ward",
    "State": "Texas"
  }, {
    "County": "Washington",
    "State": "Texas"
  }, {
    "County": "Webb",
    "State": "Texas"
  }, {
    "County": "Wharton",
    "State": "Texas"
  }, {
    "County": "Wheeler",
    "State": "Texas"
  }, {
    "County": "Wichita",
    "State": "Texas"
  }, {
    "County": "Wilbarger",
    "State": "Texas"
  }, {
    "County": "Willacy",
    "State": "Texas"
  }, {
    "County": "Williamson",
    "State": "Texas"
  }, {
    "County": "Wilson",
    "State": "Texas"
  }, {
    "County": "Winkler",
    "State": "Texas"
  }, {
    "County": "Wise",
    "State": "Texas"
  }, {
    "County": "Wood",
    "State": "Texas"
  }, {
    "County": "Yoakum",
    "State": "Texas"
  }, {
    "County": "Young",
    "State": "Texas"
  }, {
    "County": "Zapata",
    "State": "Texas"
  }, {
    "County": "Zavala",
    "State": "Texas"
  }, {
    "County": "Bajo Nuevo Bank",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Baker Island",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Howland Island",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Jarvis Island",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Johnston Atoll",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Kingman Reef",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Midway Islands",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Navassa Island",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Palmyra Atoll",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Serranilla Bank",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Wake Island",
    "State": "US Minor Outlying Islands"
  }, {
    "County": "Beaver",
    "State": "Utah"
  }, {
    "County": "Box Elder",
    "State": "Utah"
  }, {
    "County": "Cache",
    "State": "Utah"
  }, {
    "County": "Carbon",
    "State": "Utah"
  }, {
    "County": "Daggett",
    "State": "Utah"
  }, {
    "County": "Davis",
    "State": "Utah"
  }, {
    "County": "Duchesne",
    "State": "Utah"
  }, {
    "County": "Emery",
    "State": "Utah"
  }, {
    "County": "Garfield",
    "State": "Utah"
  }, {
    "County": "Grand",
    "State": "Utah"
  }, {
    "County": "Iron",
    "State": "Utah"
  }, {
    "County": "Juab",
    "State": "Utah"
  }, {
    "County": "Kane",
    "State": "Utah"
  }, {
    "County": "Millard",
    "State": "Utah"
  }, {
    "County": "Morgan",
    "State": "Utah"
  }, {
    "County": "Piute",
    "State": "Utah"
  }, {
    "County": "Rich",
    "State": "Utah"
  }, {
    "County": "Salt Lake",
    "State": "Utah"
  }, {
    "County": "San Juan",
    "State": "Utah"
  }, {
    "County": "Sanpete",
    "State": "Utah"
  }, {
    "County": "Sevier",
    "State": "Utah"
  }, {
    "County": "Summit",
    "State": "Utah"
  }, {
    "County": "Tooele",
    "State": "Utah"
  }, {
    "County": "Uintah",
    "State": "Utah"
  }, {
    "County": "Utah",
    "State": "Utah"
  }, {
    "County": "Wasatch",
    "State": "Utah"
  }, {
    "County": "Washington",
    "State": "Utah"
  }, {
    "County": "Wayne",
    "State": "Utah"
  }, {
    "County": "Weber",
    "State": "Utah"
  }, {
    "County": "Addison",
    "State": "Vermont"
  }, {
    "County": "Bennington",
    "State": "Vermont"
  }, {
    "County": "Caledonia",
    "State": "Vermont"
  }, {
    "County": "Chittenden",
    "State": "Vermont"
  }, {
    "County": "Essex",
    "State": "Vermont"
  }, {
    "County": "Franklin",
    "State": "Vermont"
  }, {
    "County": "Grand Isle",
    "State": "Vermont"
  }, {
    "County": "Lamoille",
    "State": "Vermont"
  }, {
    "County": "Orange",
    "State": "Vermont"
  }, {
    "County": "Orleans",
    "State": "Vermont"
  }, {
    "County": "Rutland",
    "State": "Vermont"
  }, {
    "County": "Washington",
    "State": "Vermont"
  }, {
    "County": "Windham",
    "State": "Vermont"
  }, {
    "County": "Windsor",
    "State": "Vermont"
  }, {
    "County": "Saint Croix Island",
    "State": "Virgin Islands US"
  }, {
    "County": "Saint John Island",
    "State": "Virgin Islands US"
  }, {
    "County": "Saint Thomas Island",
    "State": "Virgin Islands US"
  }, {
    "County": "Accomack",
    "State": "Virginia"
  }, {
    "County": "Albemarle",
    "State": "Virginia"
  }, {
    "County": "Alleghany",
    "State": "Virginia"
  }, {
    "County": "Amelia",
    "State": "Virginia"
  }, {
    "County": "Amherst",
    "State": "Virginia"
  }, {
    "County": "Appomattox",
    "State": "Virginia"
  }, {
    "County": "Arlington",
    "State": "Virginia"
  }, {
    "County": "Augusta",
    "State": "Virginia"
  }, {
    "County": "Bath",
    "State": "Virginia"
  }, {
    "County": "Bedfordz",
    "State": "Virginia"
  }, {
    "County": "Bland",
    "State": "Virginia"
  }, {
    "County": "Botetourt",
    "State": "Virginia"
  }, {
    "County": "Brunswick",
    "State": "Virginia"
  }, {
    "County": "Buchanan",
    "State": "Virginia"
  }, {
    "County": "Buckingham",
    "State": "Virginia"
  }, {
    "County": "Campbell",
    "State": "Virginia"
  }, {
    "County": "Caroline",
    "State": "Virginia"
  }, {
    "County": "Carroll",
    "State": "Virginia"
  }, {
    "County": "Charles City",
    "State": "Virginia"
  }, {
    "County": "Charlotte",
    "State": "Virginia"
  }, {
    "County": "Chesterfield",
    "State": "Virginia"
  }, {
    "County": "Clarke",
    "State": "Virginia"
  }, {
    "County": "Craig",
    "State": "Virginia"
  }, {
    "County": "Culpeper",
    "State": "Virginia"
  }, {
    "County": "Cumberland",
    "State": "Virginia"
  }, {
    "County": "Dickenson",
    "State": "Virginia"
  }, {
    "County": "Dinwiddie",
    "State": "Virginia"
  }, {
    "County": "Essex",
    "State": "Virginia"
  }, {
    "County": "Fairfax",
    "State": "Virginia"
  }, {
    "County": "Fauquier",
    "State": "Virginia"
  }, {
    "County": "Floyd",
    "State": "Virginia"
  }, {
    "County": "Fluvanna",
    "State": "Virginia"
  }, {
    "County": "Franklin",
    "State": "Virginia"
  }, {
    "County": "Frederick",
    "State": "Virginia"
  }, {
    "County": "Giles",
    "State": "Virginia"
  }, {
    "County": "Gloucester",
    "State": "Virginia"
  }, {
    "County": "Goochland",
    "State": "Virginia"
  }, {
    "County": "Grayson",
    "State": "Virginia"
  }, {
    "County": "Greene",
    "State": "Virginia"
  }, {
    "County": "Greensville",
    "State": "Virginia"
  }, {
    "County": "Halifax",
    "State": "Virginia"
  }, {
    "County": "Hanover",
    "State": "Virginia"
  }, {
    "County": "Henrico",
    "State": "Virginia"
  }, {
    "County": "Henry",
    "State": "Virginia"
  }, {
    "County": "Highland",
    "State": "Virginia"
  }, {
    "County": "Isle of Wight",
    "State": "Virginia"
  }, {
    "County": "James City",
    "State": "Virginia"
  }, {
    "County": "Kingand Queen",
    "State": "Virginia"
  }, {
    "County": "King George",
    "State": "Virginia"
  }, {
    "County": "King William",
    "State": "Virginia"
  }, {
    "County": "Lancaster",
    "State": "Virginia"
  }, {
    "County": "Lee",
    "State": "Virginia"
  }, {
    "County": "Loudoun",
    "State": "Virginia"
  }, {
    "County": "Louisa",
    "State": "Virginia"
  }, {
    "County": "Lunenburg",
    "State": "Virginia"
  }, {
    "County": "Madison",
    "State": "Virginia"
  }, {
    "County": "Mathews",
    "State": "Virginia"
  }, {
    "County": "Mecklenburg",
    "State": "Virginia"
  }, {
    "County": "Middlesex",
    "State": "Virginia"
  }, {
    "County": "Montgomery",
    "State": "Virginia"
  }, {
    "County": "Nelson",
    "State": "Virginia"
  }, {
    "County": "New Kent",
    "State": "Virginia"
  }, {
    "County": "North Hampton",
    "State": "Virginia"
  }, {
    "County": "North Humberland",
    "State": "Virginia"
  }, {
    "County": "Nottoway",
    "State": "Virginia"
  }, {
    "County": "Orange",
    "State": "Virginia"
  }, {
    "County": "Page",
    "State": "Virginia"
  }, {
    "County": "Patrick",
    "State": "Virginia"
  }, {
    "County": "Pittsylvania",
    "State": "Virginia"
  }, {
    "County": "Powhatan",
    "State": "Virginia"
  }, {
    "County": "Prince Edward",
    "State": "Virginia"
  }, {
    "County": "Prince George",
    "State": "Virginia"
  }, {
    "County": "Prince William",
    "State": "Virginia"
  }, {
    "County": "Pulaski",
    "State": "Virginia"
  }, {
    "County": "Rappahannock",
    "State": "Virginia"
  }, {
    "County": "Richmond",
    "State": "Virginia"
  }, {
    "County": "Roanoke",
    "State": "Virginia"
  }, {
    "County": "Rockbridge",
    "State": "Virginia"
  }, {
    "County": "Rockingham",
    "State": "Virginia"
  }, {
    "County": "Russell",
    "State": "Virginia"
  }, {
    "County": "Scott",
    "State": "Virginia"
  }, {
    "County": "Shenandoah",
    "State": "Virginia"
  }, {
    "County": "Smyth",
    "State": "Virginia"
  }, {
    "County": "Southampton",
    "State": "Virginia"
  }, {
    "County": "Spotsylvania",
    "State": "Virginia"
  }, {
    "County": "Stafford",
    "State": "Virginia"
  }, {
    "County": "Surry",
    "State": "Virginia"
  }, {
    "County": "Sussex",
    "State": "Virginia"
  }, {
    "County": "Tazewell",
    "State": "Virginia"
  }, {
    "County": "Warren",
    "State": "Virginia"
  }, {
    "County": "Washington",
    "State": "Virginia"
  }, {
    "County": "Westmoreland",
    "State": "Virginia"
  }, {
    "County": "Wise",
    "State": "Virginia"
  }, {
    "County": "Wythe",
    "State": "Virginia"
  }, {
    "County": "York",
    "State": "Virginia"
  }, {
    "County": "Alexandria City",
    "State": "Virginia"
  }, {
    "County": "Bristol City",
    "State": "Virginia"
  }, {
    "County": "Buena Vista City",
    "State": "Virginia"
  }, {
    "County": "Charlottesville City",
    "State": "Virginia"
  }, {
    "County": "Chesapeake City",
    "State": "Virginia"
  }, {
    "County": "Colonial Heights City",
    "State": "Virginia"
  }, {
    "County": "Covington City",
    "State": "Virginia"
  }, {
    "County": "Danville City",
    "State": "Virginia"
  }, {
    "County": "Emporia City",
    "State": "Virginia"
  }, {
    "County": "Fairfax City",
    "State": "Virginia"
  }, {
    "County": "FallsChurch City",
    "State": "Virginia"
  }, {
    "County": "Franklin City",
    "State": "Virginia"
  }, {
    "County": "Fredericksburg City",
    "State": "Virginia"
  }, {
    "County": "Galax City",
    "State": "Virginia"
  }, {
    "County": "Hampton City",
    "State": "Virginia"
  }, {
    "County": "Harrisonburg City",
    "State": "Virginia"
  }, {
    "County": "Hopewell City",
    "State": "Virginia"
  }, {
    "County": "Lexington City",
    "State": "Virginia"
  }, {
    "County": "Lynchburg City",
    "State": "Virginia"
  }, {
    "County": "Manassas City",
    "State": "Virginia"
  }, {
    "County": "ManassasPark City",
    "State": "Virginia"
  }, {
    "County": "Martinsville City",
    "State": "Virginia"
  }, {
    "County": "Newport News City",
    "State": "Virginia"
  }, {
    "County": "Norfolk City",
    "State": "Virginia"
  }, {
    "County": "Norton City",
    "State": "Virginia"
  }, {
    "County": "Petersburg City",
    "State": "Virginia"
  }, {
    "County": "Poquoson City",
    "State": "Virginia"
  }, {
    "County": "Portsmouth City",
    "State": "Virginia"
  }, {
    "County": "Radford City",
    "State": "Virginia"
  }, {
    "County": "Richmond City",
    "State": "Virginia"
  }, {
    "County": "Roanoke City",
    "State": "Virginia"
  }, {
    "County": "Salem City",
    "State": "Virginia"
  }, {
    "County": "Staunton City",
    "State": "Virginia"
  }, {
    "County": "Suffolk City",
    "State": "Virginia"
  }, {
    "County": "Virginia Beach City",
    "State": "Virginia"
  }, {
    "County": "Waynesboro City",
    "State": "Virginia"
  }, {
    "County": "Williamsburg City",
    "State": "Virginia"
  }, {
    "County": "Winchester City",
    "State": "Virginia"
  }, {
    "County": "Adams",
    "State": "Washington"
  }, {
    "County": "Asotin",
    "State": "Washington"
  }, {
    "County": "Benton",
    "State": "Washington"
  }, {
    "County": "Chelan",
    "State": "Washington"
  }, {
    "County": "Clallam",
    "State": "Washington"
  }, {
    "County": "Clark",
    "State": "Washington"
  }, {
    "County": "Columbia",
    "State": "Washington"
  }, {
    "County": "Cowlitz",
    "State": "Washington"
  }, {
    "County": "Douglas",
    "State": "Washington"
  }, {
    "County": "Ferry",
    "State": "Washington"
  }, {
    "County": "Franklin",
    "State": "Washington"
  }, {
    "County": "Garfield",
    "State": "Washington"
  }, {
    "County": "Grant",
    "State": "Washington"
  }, {
    "County": "Grays Harbor",
    "State": "Washington"
  }, {
    "County": "Island",
    "State": "Washington"
  }, {
    "County": "Jefferson",
    "State": "Washington"
  }, {
    "County": "King",
    "State": "Washington"
  }, {
    "County": "Kitsap",
    "State": "Washington"
  }, {
    "County": "Kittitas",
    "State": "Washington"
  }, {
    "County": "Klickitat",
    "State": "Washington"
  }, {
    "County": "Lewis",
    "State": "Washington"
  }, {
    "County": "Lincoln",
    "State": "Washington"
  }, {
    "County": "Mason",
    "State": "Washington"
  }, {
    "County": "Okanogan",
    "State": "Washington"
  }, {
    "County": "Pacific",
    "State": "Washington"
  }, {
    "County": "Pend Oreille",
    "State": "Washington"
  }, {
    "County": "Pierce",
    "State": "Washington"
  }, {
    "County": "San Juan",
    "State": "Washington"
  }, {
    "County": "Skagit",
    "State": "Washington"
  }, {
    "County": "Skamania",
    "State": "Washington"
  }, {
    "County": "Snohomish",
    "State": "Washington"
  }, {
    "County": "Spokane",
    "State": "Washington"
  }, {
    "County": "Stevens",
    "State": "Washington"
  }, {
    "County": "Thurston",
    "State": "Washington"
  }, {
    "County": "Wahkiakum",
    "State": "Washington"
  }, {
    "County": "Walla Walla",
    "State": "Washington"
  }, {
    "County": "Whatcom",
    "State": "Washington"
  }, {
    "County": "Whitman",
    "State": "Washington"
  }, {
    "County": "Yakima",
    "State": "Washington"
  }, {
    "County": "Barbour",
    "State": "West Virginia"
  }, {
    "County": "Berkeley",
    "State": "West Virginia"
  }, {
    "County": "Boone",
    "State": "West Virginia"
  }, {
    "County": "Braxton",
    "State": "West Virginia"
  }, {
    "County": "Brooke",
    "State": "West Virginia"
  }, {
    "County": "Cabell",
    "State": "West Virginia"
  }, {
    "County": "Calhoun",
    "State": "West Virginia"
  }, {
    "County": "Clay",
    "State": "West Virginia"
  }, {
    "County": "Doddridge",
    "State": "West Virginia"
  }, {
    "County": "Fayette",
    "State": "West Virginia"
  }, {
    "County": "Gilmer",
    "State": "West Virginia"
  }, {
    "County": "Grant",
    "State": "West Virginia"
  }, {
    "County": "Greenbrier",
    "State": "West Virginia"
  }, {
    "County": "Hampshire",
    "State": "West Virginia"
  }, {
    "County": "Hancock",
    "State": "West Virginia"
  }, {
    "County": "Hardy",
    "State": "West Virginia"
  }, {
    "County": "Harrison",
    "State": "West Virginia"
  }, {
    "County": "Jackson",
    "State": "West Virginia"
  }, {
    "County": "Jefferson",
    "State": "West Virginia"
  }, {
    "County": "Kanawha",
    "State": "West Virginia"
  }, {
    "County": "Lewis",
    "State": "West Virginia"
  }, {
    "County": "Lincoln",
    "State": "West Virginia"
  }, {
    "County": "Logan",
    "State": "West Virginia"
  }, {
    "County": "Mc Dowell",
    "State": "West Virginia"
  }, {
    "County": "Marion",
    "State": "West Virginia"
  }, {
    "County": "Marshall",
    "State": "West Virginia"
  }, {
    "County": "Mason",
    "State": "West Virginia"
  }, {
    "County": "Mercer",
    "State": "West Virginia"
  }, {
    "County": "Mineral",
    "State": "West Virginia"
  }, {
    "County": "Mingo",
    "State": "West Virginia"
  }, {
    "County": "Monongalia",
    "State": "West Virginia"
  }, {
    "County": "Monroe",
    "State": "West Virginia"
  }, {
    "County": "Morgan",
    "State": "West Virginia"
  }, {
    "County": "Nicholas",
    "State": "West Virginia"
  }, {
    "County": "Ohio",
    "State": "West Virginia"
  }, {
    "County": "Pendleton",
    "State": "West Virginia"
  }, {
    "County": "Pleasants",
    "State": "West Virginia"
  }, {
    "County": "Pocahontas",
    "State": "West Virginia"
  }, {
    "County": "Preston",
    "State": "West Virginia"
  }, {
    "County": "Putnam",
    "State": "West Virginia"
  }, {
    "County": "Raleigh",
    "State": "West Virginia"
  }, {
    "County": "Randolph",
    "State": "West Virginia"
  }, {
    "County": "Ritchie",
    "State": "West Virginia"
  }, {
    "County": "Roane",
    "State": "West Virginia"
  }, {
    "County": "Summers",
    "State": "West Virginia"
  }, {
    "County": "Taylor",
    "State": "West Virginia"
  }, {
    "County": "Tucker",
    "State": "West Virginia"
  }, {
    "County": "Tyler",
    "State": "West Virginia"
  }, {
    "County": "Upshur",
    "State": "West Virginia"
  }, {
    "County": "Wayne",
    "State": "West Virginia"
  }, {
    "County": "Webster",
    "State": "West Virginia"
  }, {
    "County": "Wetzel",
    "State": "West Virginia"
  }, {
    "County": "Wirt",
    "State": "West Virginia"
  }, {
    "County": "Wood",
    "State": "West Virginia"
  }, {
    "County": "Wyoming",
    "State": "West Virginia"
  }, {
    "County": "Adams",
    "State": "Wisconsin"
  }, {
    "County": "Ashland",
    "State": "Wisconsin"
  }, {
    "County": "Barron",
    "State": "Wisconsin"
  }, {
    "County": "Bayfield",
    "State": "Wisconsin"
  }, {
    "County": "Brown",
    "State": "Wisconsin"
  }, {
    "County": "Buffalo",
    "State": "Wisconsin"
  }, {
    "County": "Burnett",
    "State": "Wisconsin"
  }, {
    "County": "Calumet",
    "State": "Wisconsin"
  }, {
    "County": "Chippewa",
    "State": "Wisconsin"
  }, {
    "County": "Clark",
    "State": "Wisconsin"
  }, {
    "County": "Columbia",
    "State": "Wisconsin"
  }, {
    "County": "Crawford",
    "State": "Wisconsin"
  }, {
    "County": "Dane",
    "State": "Wisconsin"
  }, {
    "County": "Dodge",
    "State": "Wisconsin"
  }, {
    "County": "Door",
    "State": "Wisconsin"
  }, {
    "County": "Douglas",
    "State": "Wisconsin"
  }, {
    "County": "Dunn",
    "State": "Wisconsin"
  }, {
    "County": "Eau Claire",
    "State": "Wisconsin"
  }, {
    "County": "Florence",
    "State": "Wisconsin"
  }, {
    "County": "Fonddu Lac",
    "State": "Wisconsin"
  }, {
    "County": "Forest",
    "State": "Wisconsin"
  }, {
    "County": "Grant",
    "State": "Wisconsin"
  }, {
    "County": "Green",
    "State": "Wisconsin"
  }, {
    "County": "Green Lake",
    "State": "Wisconsin"
  }, {
    "County": "Iowa",
    "State": "Wisconsin"
  }, {
    "County": "Iron",
    "State": "Wisconsin"
  }, {
    "County": "Jackson",
    "State": "Wisconsin"
  }, {
    "County": "Jefferson",
    "State": "Wisconsin"
  }, {
    "County": "Juneau",
    "State": "Wisconsin"
  }, {
    "County": "Kenosha",
    "State": "Wisconsin"
  }, {
    "County": "Kewaunee",
    "State": "Wisconsin"
  }, {
    "County": "La Crosse",
    "State": "Wisconsin"
  }, {
    "County": "Lafayette",
    "State": "Wisconsin"
  }, {
    "County": "Langlade",
    "State": "Wisconsin"
  }, {
    "County": "Lincoln",
    "State": "Wisconsin"
  }, {
    "County": "Manitowoc",
    "State": "Wisconsin"
  }, {
    "County": "Marathon",
    "State": "Wisconsin"
  }, {
    "County": "Marinette",
    "State": "Wisconsin"
  }, {
    "County": "Marquette",
    "State": "Wisconsin"
  }, {
    "County": "Menominee",
    "State": "Wisconsin"
  }, {
    "County": "Milwaukee",
    "State": "Wisconsin"
  }, {
    "County": "Monroe",
    "State": "Wisconsin"
  }, {
    "County": "Oconto",
    "State": "Wisconsin"
  }, {
    "County": "Oneida",
    "State": "Wisconsin"
  }, {
    "County": "Outagamie",
    "State": "Wisconsin"
  }, {
    "County": "Ozaukee",
    "State": "Wisconsin"
  }, {
    "County": "Pepin",
    "State": "Wisconsin"
  }, {
    "County": "Pierce",
    "State": "Wisconsin"
  }, {
    "County": "Polk",
    "State": "Wisconsin"
  }, {
    "County": "Portage",
    "State": "Wisconsin"
  }, {
    "County": "Price",
    "State": "Wisconsin"
  }, {
    "County": "Racine",
    "State": "Wisconsin"
  }, {
    "County": "Richland",
    "State": "Wisconsin"
  }, {
    "County": "Rock",
    "State": "Wisconsin"
  }, {
    "County": "Rusk",
    "State": "Wisconsin"
  }, {
    "County": "St Croix",
    "State": "Wisconsin"
  }, {
    "County": "Sauk",
    "State": "Wisconsin"
  }, {
    "County": "Sawyer",
    "State": "Wisconsin"
  }, {
    "County": "Shawano",
    "State": "Wisconsin"
  }, {
    "County": "Sheboygan",
    "State": "Wisconsin"
  }, {
    "County": "Taylor",
    "State": "Wisconsin"
  }, {
    "County": "Trempealeau",
    "State": "Wisconsin"
  }, {
    "County": "Vernon",
    "State": "Wisconsin"
  }, {
    "County": "Vilas",
    "State": "Wisconsin"
  }, {
    "County": "Walworth",
    "State": "Wisconsin"
  }, {
    "County": "Washburn",
    "State": "Wisconsin"
  }, {
    "County": "Washington",
    "State": "Wisconsin"
  }, {
    "County": "Waukesha",
    "State": "Wisconsin"
  }, {
    "County": "Waupaca",
    "State": "Wisconsin"
  }, {
    "County": "Waushara",
    "State": "Wisconsin"
  }, {
    "County": "Winnebago",
    "State": "Wisconsin"
  }, {
    "County": "Wood",
    "State": "Wisconsin"
  }, {
    "County": "Albany",
    "State": "Wyoming"
  }, {
    "County": "Big Horn",
    "State": "Wyoming"
  }, {
    "County": "Campbell",
    "State": "Wyoming"
  }, {
    "County": "Carbon",
    "State": "Wyoming"
  }, {
    "County": "Converse",
    "State": "Wyoming"
  }, {
    "County": "Crook",
    "State": "Wyoming"
  }, {
    "County": "Fremont",
    "State": "Wyoming"
  }, {
    "County": "Goshen",
    "State": "Wyoming"
  }, {
    "County": "Hot Springs",
    "State": "Wyoming"
  }, {
    "County": "Johnson",
    "State": "Wyoming"
  }, {
    "County": "Laramie",
    "State": "Wyoming"
  }, {
    "County": "Lincoln",
    "State": "Wyoming"
  }, {
    "County": "Natrona",
    "State": "Wyoming"
  }, {
    "County": "Niobrara",
    "State": "Wyoming"
  }, {
    "County": "Park",
    "State": "Wyoming"
  }, {
    "County": "Platte",
    "State": "Wyoming"
  }, {
    "County": "Sheridan",
    "State": "Wyoming"
  }, {
    "County": "Sublette",
    "State": "Wyoming"
  }, {
    "County": "Sweetwater",
    "State": "Wyoming"
  }, {
    "County": "Teton",
    "State": "Wyoming"
  }, {
    "County": "Uinta",
    "State": "Wyoming"
  }, {
    "County": "Washakie",
    "State": "Wyoming"
  }, {
    "County": "Weston",
    "State": "Wyoming"
  }];

  public AmericanIndianTribes: string[] = ['Abenaki','Acatec','Achi','Achumawi','Acoma','Adai','Ahtna','Ais','Akimel Oodham','Alabama-Coushatta','Aleut','Alsea','Alutiiq','Algonquians','Algonquin','Alsea','Andoke','Anishinaabe','Antoniaño','Apache','Apalachee','Apalachicola','Applegate','Arabela','Arapaho','Arara','Arawak','Arikara','Arua','Ashaninka','Assiniboine','Atakapa','Atikamekw','Atsina','Atsugewi','Avoyel','Aymara','Aztec',
    'Babine','Bannock','Bare','Bari','Baure','Beaver','Bella Bella','Bella Coola','Beothuks','Bidai','Biloxi','Black Carib','Blackfoot (Blackfeet)','Blood Indians','Bora','Bororo','Boruca','Bribri','Brothertown',
    'Caddo','Cahita','Cahto','Cahuilla','Calusa','Carib','Carquin','Carrier','Caska','Catawba','Cathlamet','Cayuga','Cayuse','Celilo','Central Pomo','Chahta','Chalaque','Chappaquiddick','Chatot','Chawchilla','Chehalis','Chelan','Chemehuevi','Cheraw','Cheroenhaka','Cherokee','Chetco','Cheyenne','Chiaha','Chickasaw','Chilcotin','Chimariko','Chinook','Chinook Jargon','Chipewyan','Chippewa','Chitimacha','Choctaw','Cholon','Chontal de Tabasco','Chukchansi','Chumash','Clackamas','Clallam','Clatskanie','Clatsop','Cmique','Cochimi','Cochiti','Cocopa','Coeur dAlene','Cofan','Columbia','Colville','Comanche','Comcaac','Comox','Conestoga','Coos','Copalis','Coquille','Cora','Coree','Coso','Costanoan','Coushatta','Cowichan','Cowlitz','Cree','Creek','Croatan','Crow','Cuna','Cucupa','Cupa','Cupik',
    'Dakelh','Dakota','Dawson','Deg Xinag','Delaware','Deline','Dena ina','Dene','Dene Tha','Diegueno','Dine','Dogrib','Dumna','Dunne-za',
    'Eastern Inland Cree','Eastern Pomo','Eel River Athabascan','Eeyou','Endeve','Eno','Entiat','Erie','Eskimo','Esselen','Etchemin','Euchee','Excelen','Eyak',
    'Flathead Salish','Fox',
    'Gabrielino','Gae','Galibi','Galice','Garifuna','Gitxsan','Gosiute','Grand Ronde','Grigra','Gros Ventre','Guarani','Guarijio','Gulf','Gwich in',
    'Haida','Haisla','Halkomelem','Hän','Hanis','Hare','Hatteras','Haudenosaunee','Havasupai','Hawaiian','Heiltsuk','Heve','Hiaki','Hichiti','Hidatsa','Hocak','Hoh','Holikachuk','Hoopa','Hopi','Hualapai','Huichol','Huichun','Humptulips','Hupa','Huron',
    'Illini','Inca','Ingalik','Innoko','Innu','Inuktitut','Iowa-Oto','Iroquois Confederacy','Ishak','Isleño','Isleta','Itza Maya','Iynu',
    'Jaqaru','James Bay Cree','Jemez','Juaneno','Jumano',
    'Kalapuya','Kalina','Kallawaya','Kanien kehaka','Kalispel','Kansa','Karankawa','Karkin','Karok','Kashaya','Kaska','Kaskaskia','Kathlamet','Kato','Kaw','Kawki','Keres','Kickapoo','Kiliwa','Kiowa','Kiowa Apache','Kitanemuk','Kitsai','Klallam','Klamath-Modoc','Klickitat','Koasati','Konkow','Kootenai','Kutenai','Koso','Koyukon','Kulanapan','Kumeyaay','Kuna','Kupa','Kusan','Kuskokwim','Kutchin','Kwakiutl','Kwantlen',
    'Laguna','Lake Indians','Lakhota','Lassik','Laurentian','Lenape','Lillooet','Lipan Apache','Listiguj','Lnuk','Lokono','Loup','Lower Umpqua','Luckiamute','Luiseño','Lumbee','Lummi','Lushootseed','Maca','Macuna','Madi','Mahican','Maidu','Makah','Mako','Maliseet','Mam','Manao','Mandan','Mangue','Mapuche','Marawa','Mariate','Maricopa','Mataco','Matis','Matlatzinca','Mattole','Mayan','Mayo','Meherrin','Menominee','Meskwaki','Methow','Miami-Illinois','Mical','Miccosukee','Michif','Micmac','Mikasuki','Mi kmaq','Minsi','Miskito','Missouria','Miwok','Mixe','Mixtec','Mobile','Mobilian Jargon','Mococo','Modoc','Mohave','Mohawk','Mohegan','Mohican','Mojave','Molale','Monacan','Monache','Montagnais','Montauk','Multnomah','Munsee','Muskogee','Nahuatl','Nakoda','Nanaimo','Nanticoke','Narragansett','Naskapi','Natchez','Natchitoches','Nauset','Navajo','Nawat','Nespelem','Neutral','Nez Perce','Niantic','Nipmuc','Nisga a','Nlaka pamux','Nooksack','Nootka','Nottoway','Nuuchahnulth','Nuxalk','Oconee','Odawa','Ofo','Ohlone','Ojibwa','Ojibwe','Ojibwemowin','Okanagan','Okmulgee','Omaha-Ponca','Oneida','Onondaga','O odham','Opata','Osage','Otchipwe','Otoe','Ottawa','Ozette','Pai','Paipai','Paiute','Palouse','Pamlico','Panamint','Papago-Pima','Pascua Yaqui','Passamaquoddy','Patuxet','Patwin','Paugussett','Pawnee','Pecos','Pee Dee','Pennacook','Penobscot','Pensacola','Peoria','Pequot','Petun','Picuris','Pima','Pima Bajo','Pipil','Piscataway','Pit River','Plains Indian Sign Language','Pojoaque','Pomo','Ponca','Poospatuck','Popoluca','Potawatomi','Potawatomie','Powhatan','Pueblo','Puquina','Quapaw','Qualicum','Quechan','Quechua','Queets','Quilcene','Quileute','Quinault','Quinnipiac','Raramuri','Red Indians','Restigouche','Rumsen','Runasimi','Saanich','Sac','Saliba','Salinan','Salish','Samish','Sanpoil','Santee','Santiam','Santo Domingo','Saponi','Sarcee','Sasta','Satsop','Savannah','Sauk','Saulteaux','Sechelt','Sekani','Seminoles','Seneca','Seri','Serrano','Shakori','Shanel','Shasta','Shawnee','Shinnecock','Shoshone','Shuar','Shuswap','Siksika','Siletz','Sinkyone','Sioux','Siuslaw','Skagit','Skin','S Klallam','Skokomish','Slavey','Slavi','Sm algyax','Snohomish','Sooke','Southern Paiute','Spokane','Squamish','Steilacoom','Stockbridge','Sto:lo','Stoney','Suquamish','Suruwaha','Susquehannock','Swampy Cree','Swinomish','Tachi','Tagish','Tahltan','Taino','Takelma','Takla','Tanacross','Tanaina','Tanana','Tangipahoa','Tano','Taos','Taposa','Tarahumara','Tataviam','Tehachapi','Ten a','Tenino','Tepehuano','Tequesta','Tesuque','Tewa','Thompson','Tigua','Tillamook','Timbisha','Timucua','Tinde','Tiwa','Tiwanaku','Tjekan','Tlahuica','Tlingit','Tohome','Tohono O odham','Tolowa','Tongva','Tonkawa','Towa','Tsalagi','Tsilhqot in','Tsimshian','Tsuu T ina','Tualatin','Tubar','Tulalip','Tunica','Tupi','Tuscarora','Tutchone','Tutelo','Tututni','Twana','Twatwa','Tygh','Uchi','Ukiah','Ukia','Umatilla','Unami','Unkechaug','Uru','Ute','Virginia Algonquian','Waco','Wahkiakum','Wailaki','Walapai','Walla Walla','Wampanoag','Wanapam','Wanki','Wappinger','Wappo','Warm Springs','Wasco-Wishram','Washo','Wateree','Waxhaw','Wea','Wenatchee','Wendat','Weott','Wichita','Willapa','Winnebago','Wintu','Wishram','Wiyot','Wyandot','Wynoochee','Yakama','Yamasee','Yamel','Yanesha','Yaquina','Yavapai','Yaqui','Yellowknife','Yokuts','Yoncalla','Yucatec Maya','Yucatan','Yuchi','Yuki','Yuma','Yupik','Yurok','Zapotec','Zia','Zoque','Zuni']

    public PlaceOfStay: string[] = [
    'House/single family home',
    'Hotel/motel',
    'Nursing home/assisted living facility',
    'Rehabilitation facility',
    'Mobile home',
    'Apartment',
    'Long term care facility',
    'Acute care inpatient facility',
    'Correctional facility',
    'Group home',
    'Homeless shelter',
    'Outside, in a car, or other location not meant for human habitation',
    'Unknown',
    'Other'
    ];

    public HealthcareJobs: string[] = [
      'Physician',
      'Respiratory therapist',
      'Nurse',
      'Environmental services',
      'Unknown',
      'Other'
    ];

    public JobSettings: string[]=[
    'Hospital',
    'Rehabilitation facility',
    'Long-term care facility',
    'Nursing home/assisted living facility',
    'Unknown',
    'Other'
    ];

    public RelationToCase: string[] = ['Residential', 'Occupational', 'Brief Acquaintance', 'Unknown' ];
    public TypeOfContact: string[] = ['Unprotected Exposure', 'Partial Protection', 'Protected Exposure'];
    public IllnessOutcome: string[] = ['Symptomatic', 'Asymptomatic', 'Known Positive', 'Unknown' ];

  public TestResults: string[] = ['Positive', 'Negative', 'Indeterminate / Inconclusive', 'Pending', 'Not Done'];

  public SearchCriteria: SearchCriteria[] = [
    //{
    //  "Value": SearchBy.nCoVID,
    //"Description": "CDC 2019-nCoV ID"
    //},
    {
      "Value": SearchBy.nCoVIDAndLastName,
      "Description": "CDC 2019-nCoV ID & Last name"
    }
  ];

  public Duration: string[] = [

    "0-15 mins", "15-30 mins", "30-60 mins", "> 60 mins"

  ];
  public AgeRange: string[] = [

    "0-15 years", "15-30 years", "30-45 years", "45-60 years", "60 years+"

  ];


    //public Countries: Country[] =
  constructor() { }
}
