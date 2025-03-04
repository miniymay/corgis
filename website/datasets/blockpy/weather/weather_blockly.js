

var weather_INDEXES = [
    ["(None)", "(None)"],
    
    ["Date.Full", "Date.Full"] ,
    ["Station.Location", "Station.Location"] 
];

var weather_INDEX_VALUES = {
    "(None)": [],
    
    "Date.Full": [
        
        ["2016-01-03", "2016-01-03"] ,
        ["2016-01-10", "2016-01-10"] ,
        ["2016-01-17", "2016-01-17"] ,
        ["2016-01-24", "2016-01-24"] ,
        ["2016-01-31", "2016-01-31"] ,
        ["2016-02-07", "2016-02-07"] ,
        ["2016-02-14", "2016-02-14"] ,
        ["2016-02-21", "2016-02-21"] ,
        ["2016-02-28", "2016-02-28"] ,
        ["2016-03-06", "2016-03-06"] ,
        ["2016-03-13", "2016-03-13"] ,
        ["2016-03-20", "2016-03-20"] ,
        ["2016-03-27", "2016-03-27"] ,
        ["2016-04-03", "2016-04-03"] ,
        ["2016-04-10", "2016-04-10"] ,
        ["2016-04-17", "2016-04-17"] ,
        ["2016-04-24", "2016-04-24"] ,
        ["2016-05-01", "2016-05-01"] ,
        ["2016-05-08", "2016-05-08"] ,
        ["2016-05-15", "2016-05-15"] ,
        ["2016-05-22", "2016-05-22"] ,
        ["2016-05-29", "2016-05-29"] ,
        ["2016-06-05", "2016-06-05"] ,
        ["2016-06-12", "2016-06-12"] ,
        ["2016-06-19", "2016-06-19"] ,
        ["2016-06-26", "2016-06-26"] ,
        ["2016-07-03", "2016-07-03"] ,
        ["2016-07-10", "2016-07-10"] ,
        ["2016-07-17", "2016-07-17"] ,
        ["2016-07-24", "2016-07-24"] ,
        ["2016-07-31", "2016-07-31"] ,
        ["2016-08-07", "2016-08-07"] ,
        ["2016-08-14", "2016-08-14"] ,
        ["2016-08-21", "2016-08-21"] ,
        ["2016-08-28", "2016-08-28"] ,
        ["2016-09-04", "2016-09-04"] ,
        ["2016-09-11", "2016-09-11"] ,
        ["2016-09-18", "2016-09-18"] ,
        ["2016-09-25", "2016-09-25"] ,
        ["2016-10-02", "2016-10-02"] ,
        ["2016-10-09", "2016-10-09"] ,
        ["2016-10-16", "2016-10-16"] ,
        ["2016-10-23", "2016-10-23"] ,
        ["2016-10-30", "2016-10-30"] ,
        ["2016-11-06", "2016-11-06"] ,
        ["2016-11-13", "2016-11-13"] ,
        ["2016-11-20", "2016-11-20"] ,
        ["2016-11-27", "2016-11-27"] ,
        ["2016-12-04", "2016-12-04"] ,
        ["2016-12-11", "2016-12-11"] ,
        ["2016-12-18", "2016-12-18"] ,
        ["2016-12-25", "2016-12-25"] ,
        ["2017-01-01", "2017-01-01"] 
    ],
    "Station.Location": [
        
        ["Aberdeen, SD", "Aberdeen, SD"] ,
        ["Abilene, TX", "Abilene, TX"] ,
        ["Akron, OH", "Akron, OH"] ,
        ["Alamosa, CO", "Alamosa, CO"] ,
        ["Albany, NY", "Albany, NY"] ,
        ["Albuquerque, NM", "Albuquerque, NM"] ,
        ["Allentown, PA", "Allentown, PA"] ,
        ["Alma, GA", "Alma, GA"] ,
        ["Alpena, MI", "Alpena, MI"] ,
        ["Amarillo, TX", "Amarillo, TX"] ,
        ["Anchorage, AK", "Anchorage, AK"] ,
        ["Anderson, SC", "Anderson, SC"] ,
        ["Annette, AK", "Annette, AK"] ,
        ["Asheville, NC", "Asheville, NC"] ,
        ["Astoria, OR", "Astoria, OR"] ,
        ["Athens, GA", "Athens, GA"] ,
        ["Atlanta, GA", "Atlanta, GA"] ,
        ["Atlantic City, NJ", "Atlantic City, NJ"] ,
        ["Augusta, GA", "Augusta, GA"] ,
        ["Austin/Bergstrom, TX", "Austin/Bergstrom, TX"] ,
        ["Austin/City, TX", "Austin/City, TX"] ,
        ["Bakersfield, CA", "Bakersfield, CA"] ,
        ["Baltimore, MD", "Baltimore, MD"] ,
        ["Bangor, ME", "Bangor, ME"] ,
        ["Baton Rouge, LA", "Baton Rouge, LA"] ,
        ["Beaumont/Port Arthur, TX", "Beaumont/Port Arthur, TX"] ,
        ["Beckley, WV", "Beckley, WV"] ,
        ["Bethel, AK", "Bethel, AK"] ,
        ["Bettles, AK", "Bettles, AK"] ,
        ["Billings, MT", "Billings, MT"] ,
        ["Binghamton, NY", "Binghamton, NY"] ,
        ["Birmingham, AL", "Birmingham, AL"] ,
        ["Bishop, CA", "Bishop, CA"] ,
        ["Bismarck, ND", "Bismarck, ND"] ,
        ["Blacksburg, VA", "Blacksburg, VA"] ,
        ["Boise, ID", "Boise, ID"] ,
        ["Boston, MA", "Boston, MA"] ,
        ["Bridgeport, CT", "Bridgeport, CT"] ,
        ["Bristol/Jhnsn Cty/Kngsprt, TN", "Bristol/Jhnsn Cty/Kngsprt, TN"] ,
        ["Brownsville, TX", "Brownsville, TX"] ,
        ["Buffalo, NY", "Buffalo, NY"] ,
        ["Burlington, VT", "Burlington, VT"] ,
        ["Burns, OR", "Burns, OR"] ,
        ["Butte, MT", "Butte, MT"] ,
        ["Cape Girardeau, MO", "Cape Girardeau, MO"] ,
        ["Cape Hatteras, NC", "Cape Hatteras, NC"] ,
        ["Caribou, ME", "Caribou, ME"] ,
        ["Casper, WY", "Casper, WY"] ,
        ["Cedar Rapids, IA", "Cedar Rapids, IA"] ,
        ["Charleston, SC", "Charleston, SC"] ,
        ["Charleston, WV", "Charleston, WV"] ,
        ["Charlotte, NC", "Charlotte, NC"] ,
        ["Chattanooga, TN", "Chattanooga, TN"] ,
        ["Cheyenne, WY", "Cheyenne, WY"] ,
        ["Chicago, IL", "Chicago, IL"] ,
        ["Childress, TX", "Childress, TX"] ,
        ["China Lake, CA", "China Lake, CA"] ,
        ["Clarksville, TN", "Clarksville, TN"] ,
        ["Clayton, NM", "Clayton, NM"] ,
        ["Cleveland, OH", "Cleveland, OH"] ,
        ["Cold Bay, AK", "Cold Bay, AK"] ,
        ["College Station, TX", "College Station, TX"] ,
        ["Colorado Springs, CO", "Colorado Springs, CO"] ,
        ["Columbia, MO", "Columbia, MO"] ,
        ["Columbia, SC", "Columbia, SC"] ,
        ["Columbus, OH", "Columbus, OH"] ,
        ["Concord, CA", "Concord, CA"] ,
        ["Concord, NH", "Concord, NH"] ,
        ["Concordia, KS", "Concordia, KS"] ,
        ["Cordova, AK", "Cordova, AK"] ,
        ["Corpus Christi, TX", "Corpus Christi, TX"] ,
        ["Covington, KY", "Covington, KY"] ,
        ["Craig, CO", "Craig, CO"] ,
        ["Crossville, TN", "Crossville, TN"] ,
        ["Cut Bank, MT", "Cut Bank, MT"] ,
        ["Dalhart, TX", "Dalhart, TX"] ,
        ["Dallas, TX", "Dallas, TX"] ,
        ["Dallas-Fort Worth, TX", "Dallas-Fort Worth, TX"] ,
        ["Dayton, OH", "Dayton, OH"] ,
        ["Daytona Beach, FL", "Daytona Beach, FL"] ,
        ["Deer Park, WA", "Deer Park, WA"] ,
        ["Del Rio, TX", "Del Rio, TX"] ,
        ["Delta Junction/Ft Greely, AK", "Delta Junction/Ft Greely, AK"] ,
        ["Denver, CO", "Denver, CO"] ,
        ["Des Moines, IA", "Des Moines, IA"] ,
        ["Detroit, MI", "Detroit, MI"] ,
        ["Dickinson, ND", "Dickinson, ND"] ,
        ["Dillon, MT", "Dillon, MT"] ,
        ["Dodge City, KS", "Dodge City, KS"] ,
        ["Douglas Bisbee, AZ", "Douglas Bisbee, AZ"] ,
        ["Dubuque, IA", "Dubuque, IA"] ,
        ["Duluth, MN", "Duluth, MN"] ,
        ["El Paso, TX", "El Paso, TX"] ,
        ["Elkins, WV", "Elkins, WV"] ,
        ["Ely, NV", "Ely, NV"] ,
        ["Ephrata, WA", "Ephrata, WA"] ,
        ["Erie, PA", "Erie, PA"] ,
        ["Eugene, OR", "Eugene, OR"] ,
        ["Eureka, CA", "Eureka, CA"] ,
        ["Eureka, NV", "Eureka, NV"] ,
        ["Evansville, IN", "Evansville, IN"] ,
        ["Fairbanks, AK", "Fairbanks, AK"] ,
        ["Fargo, ND", "Fargo, ND"] ,
        ["Flint, MI", "Flint, MI"] ,
        ["Fort Lauderdale, FL", "Fort Lauderdale, FL"] ,
        ["Fort Smith, AR", "Fort Smith, AR"] ,
        ["Fort Wayne, IN", "Fort Wayne, IN"] ,
        ["Fort Worth, TX", "Fort Worth, TX"] ,
        ["Fresno, CA", "Fresno, CA"] ,
        ["Gage, OK", "Gage, OK"] ,
        ["Gainesville, FL", "Gainesville, FL"] ,
        ["Galveston, TX", "Galveston, TX"] ,
        ["Glasgow, MT", "Glasgow, MT"] ,
        ["Glens Falls, NY", "Glens Falls, NY"] ,
        ["Goodland, KS", "Goodland, KS"] ,
        ["Grand Forks, ND", "Grand Forks, ND"] ,
        ["Grand Island, NE", "Grand Island, NE"] ,
        ["Grand Junction, CO", "Grand Junction, CO"] ,
        ["Grand Rapids, MI", "Grand Rapids, MI"] ,
        ["Great Falls, MT", "Great Falls, MT"] ,
        ["Green Bay, WI", "Green Bay, WI"] ,
        ["Greensboro, NC", "Greensboro, NC"] ,
        ["Greenville, MS", "Greenville, MS"] ,
        ["Greenwood, MS", "Greenwood, MS"] ,
        ["Greer, SC", "Greer, SC"] ,
        ["Gulfport, MS", "Gulfport, MS"] ,
        ["Gulkana, AK", "Gulkana, AK"] ,
        ["Gustavus, AK", "Gustavus, AK"] ,
        ["Harrisburg, PA", "Harrisburg, PA"] ,
        ["Harrison, AR", "Harrison, AR"] ,
        ["Hattiesburg, MS", "Hattiesburg, MS"] ,
        ["Havre, MT", "Havre, MT"] ,
        ["Hayward, CA", "Hayward, CA"] ,
        ["Helena, MT", "Helena, MT"] ,
        ["Hickory, NC", "Hickory, NC"] ,
        ["Hilo, HI", "Hilo, HI"] ,
        ["Homer, AK", "Homer, AK"] ,
        ["Honolulu, HI", "Honolulu, HI"] ,
        ["Houghton Lake, MI", "Houghton Lake, MI"] ,
        ["Houston, TX", "Houston, TX"] ,
        ["Huntington, WV", "Huntington, WV"] ,
        ["Huntsville, AL", "Huntsville, AL"] ,
        ["Huron, SD", "Huron, SD"] ,
        ["Iliamna, AK", "Iliamna, AK"] ,
        ["Indianapolis, IN", "Indianapolis, IN"] ,
        ["International Falls, MN", "International Falls, MN"] ,
        ["Islip, NY", "Islip, NY"] ,
        ["Jackson, KY", "Jackson, KY"] ,
        ["Jackson, MS", "Jackson, MS"] ,
        ["Jacksonville, FL", "Jacksonville, FL"] ,
        ["Juneau, AK", "Juneau, AK"] ,
        ["Kahului, HI", "Kahului, HI"] ,
        ["Kalispell, MT", "Kalispell, MT"] ,
        ["Kansas City, MO", "Kansas City, MO"] ,
        ["Kaunakakai, HI", "Kaunakakai, HI"] ,
        ["Kenai, AK", "Kenai, AK"] ,
        ["Ketchikan, AK", "Ketchikan, AK"] ,
        ["Key West, FL", "Key West, FL"] ,
        ["King Salmon, AK", "King Salmon, AK"] ,
        ["Kingman, AZ", "Kingman, AZ"] ,
        ["Knoxville, TN", "Knoxville, TN"] ,
        ["Kodiak, AK", "Kodiak, AK"] ,
        ["Kotzebue, AK", "Kotzebue, AK"] ,
        ["La Crosse, WI", "La Crosse, WI"] ,
        ["Lake Charles, LA", "Lake Charles, LA"] ,
        ["Lander, WY", "Lander, WY"] ,
        ["Lansing, MI", "Lansing, MI"] ,
        ["Las Vegas, NV", "Las Vegas, NV"] ,
        ["Lewiston, ID", "Lewiston, ID"] ,
        ["Lexington, KY", "Lexington, KY"] ,
        ["Lihue, HI", "Lihue, HI"] ,
        ["Lincoln, NE", "Lincoln, NE"] ,
        ["Long Beach, CA", "Long Beach, CA"] ,
        ["Los Angeles, CA", "Los Angeles, CA"] ,
        ["Louisville, KY", "Louisville, KY"] ,
        ["Lubbock, TX", "Lubbock, TX"] ,
        ["Lynchburg, VA", "Lynchburg, VA"] ,
        ["Macon, GA", "Macon, GA"] ,
        ["Madison, WI", "Madison, WI"] ,
        ["Mansfield, OH", "Mansfield, OH"] ,
        ["Marquette, MI", "Marquette, MI"] ,
        ["Mc Grath, AK", "Mc Grath, AK"] ,
        ["Medford, OR", "Medford, OR"] ,
        ["Medicine Lodge, KS", "Medicine Lodge, KS"] ,
        ["Memphis, TN", "Memphis, TN"] ,
        ["Mercury, NV", "Mercury, NV"] ,
        ["Meridian, MS", "Meridian, MS"] ,
        ["Miami, FL", "Miami, FL"] ,
        ["Midland, TX", "Midland, TX"] ,
        ["Miles City, MT", "Miles City, MT"] ,
        ["Milton, MA", "Milton, MA"] ,
        ["Milwaukee, WI", "Milwaukee, WI"] ,
        ["Minneapolis, MN", "Minneapolis, MN"] ,
        ["Missoula, MT", "Missoula, MT"] ,
        ["Mobile, AL", "Mobile, AL"] ,
        ["Moline, IL", "Moline, IL"] ,
        ["Montgomery, AL", "Montgomery, AL"] ,
        ["Mt. Washington, NH", "Mt. Washington, NH"] ,
        ["Muskegon, MI", "Muskegon, MI"] ,
        ["Nashville, TN", "Nashville, TN"] ,
        ["New Orleans, LA", "New Orleans, LA"] ,
        ["New York, NY", "New York, NY"] ,
        ["Newark, DE", "Newark, DE"] ,
        ["Newark, NJ", "Newark, NJ"] ,
        ["Nome, AK", "Nome, AK"] ,
        ["Norfolk, NE", "Norfolk, NE"] ,
        ["Norfolk, VA", "Norfolk, VA"] ,
        ["North Little Rock, AR", "North Little Rock, AR"] ,
        ["North Platte, NE", "North Platte, NE"] ,
        ["Northway, AK", "Northway, AK"] ,
        ["Oak Ridge, TN", "Oak Ridge, TN"] ,
        ["Oklahoma City, OK", "Oklahoma City, OK"] ,
        ["Olympia, WA", "Olympia, WA"] ,
        ["Omaha, NE", "Omaha, NE"] ,
        ["Orlando, FL", "Orlando, FL"] ,
        ["Paducah, KY", "Paducah, KY"] ,
        ["Palmer, AK", "Palmer, AK"] ,
        ["Pendleton, OR", "Pendleton, OR"] ,
        ["Pensacola, FL", "Pensacola, FL"] ,
        ["Peoria, IL", "Peoria, IL"] ,
        ["Petersburg, AK", "Petersburg, AK"] ,
        ["Philadelphia, PA", "Philadelphia, PA"] ,
        ["Phoenix, AZ", "Phoenix, AZ"] ,
        ["Pierre, SD", "Pierre, SD"] ,
        ["Pittsburgh, PA", "Pittsburgh, PA"] ,
        ["Pocatello, ID", "Pocatello, ID"] ,
        ["Ponca City, OK", "Ponca City, OK"] ,
        ["Portland, ME", "Portland, ME"] ,
        ["Portland, OR", "Portland, OR"] ,
        ["Providence, RI", "Providence, RI"] ,
        ["Pueblo, CO", "Pueblo, CO"] ,
        ["Puntilla Lake, AK", "Puntilla Lake, AK"] ,
        ["Quillayute, WA", "Quillayute, WA"] ,
        ["Quincy, IL", "Quincy, IL"] ,
        ["Raleigh/Durham, NC", "Raleigh/Durham, NC"] ,
        ["Rapid City, SD", "Rapid City, SD"] ,
        ["Rawlins, WY", "Rawlins, WY"] ,
        ["Red Bluff, CA", "Red Bluff, CA"] ,
        ["Redding, CA", "Redding, CA"] ,
        ["Redmond, OR", "Redmond, OR"] ,
        ["Reno, NV", "Reno, NV"] ,
        ["Richmond, VA", "Richmond, VA"] ,
        ["Roanoke, VA", "Roanoke, VA"] ,
        ["Rochester, MN", "Rochester, MN"] ,
        ["Rochester, NY", "Rochester, NY"] ,
        ["Rockford, IL", "Rockford, IL"] ,
        ["Rolla/Vichy, MO", "Rolla/Vichy, MO"] ,
        ["Roswell, NM", "Roswell, NM"] ,
        ["Sacramento, CA", "Sacramento, CA"] ,
        ["Salem, OR", "Salem, OR"] ,
        ["Salinas, CA", "Salinas, CA"] ,
        ["Salisbury, MD", "Salisbury, MD"] ,
        ["Salt Lake City, UT", "Salt Lake City, UT"] ,
        ["San Angelo, TX", "San Angelo, TX"] ,
        ["San Antonio, TX", "San Antonio, TX"] ,
        ["San Diego, CA", "San Diego, CA"] ,
        ["San Francisco, CA", "San Francisco, CA"] ,
        ["San Juan, PR", "San Juan, PR"] ,
        ["Sandberg, CA", "Sandberg, CA"] ,
        ["Santa Barbara, CA", "Santa Barbara, CA"] ,
        ["Santa Maria, CA", "Santa Maria, CA"] ,
        ["Sault Ste Marie, MI", "Sault Ste Marie, MI"] ,
        ["Savannah, GA", "Savannah, GA"] ,
        ["Scottsbluff, NE", "Scottsbluff, NE"] ,
        ["Seattle, WA", "Seattle, WA"] ,
        ["Shemya, AK", "Shemya, AK"] ,
        ["Sheridan, WY", "Sheridan, WY"] ,
        ["Shreveport, LA", "Shreveport, LA"] ,
        ["Sidney, NE", "Sidney, NE"] ,
        ["Sioux City, IA", "Sioux City, IA"] ,
        ["Sioux Falls, SD", "Sioux Falls, SD"] ,
        ["Sitka, AK", "Sitka, AK"] ,
        ["Skagway, AK", "Skagway, AK"] ,
        ["Slidell, LA", "Slidell, LA"] ,
        ["South Bend, IN", "South Bend, IN"] ,
        ["Spokane, WA", "Spokane, WA"] ,
        ["Springfield, IL", "Springfield, IL"] ,
        ["Springfield, MO", "Springfield, MO"] ,
        ["St Cloud, MN", "St Cloud, MN"] ,
        ["St Joseph, MO", "St Joseph, MO"] ,
        ["St Louis, MO", "St Louis, MO"] ,
        ["St Paul Island, AK", "St Paul Island, AK"] ,
        ["Stockton, CA", "Stockton, CA"] ,
        ["Syracuse, NY", "Syracuse, NY"] ,
        ["Talkeetna, AK", "Talkeetna, AK"] ,
        ["Tallahassee, FL", "Tallahassee, FL"] ,
        ["Tampa, FL", "Tampa, FL"] ,
        ["Tanana, AK", "Tanana, AK"] ,
        ["Toledo, OH", "Toledo, OH"] ,
        ["Topeka, KS", "Topeka, KS"] ,
        ["Tucson, AZ", "Tucson, AZ"] ,
        ["Tulsa, OK", "Tulsa, OK"] ,
        ["Tupelo, MS", "Tupelo, MS"] ,
        ["Unalakleet, AK", "Unalakleet, AK"] ,
        ["Utqiagvik (Barrow), AK", "Utqiagvik (Barrow), AK"] ,
        ["Valentine, NE", "Valentine, NE"] ,
        ["Vero Beach, FL", "Vero Beach, FL"] ,
        ["Victoria, TX", "Victoria, TX"] ,
        ["Waco, TX", "Waco, TX"] ,
        ["Wallops Island, VA", "Wallops Island, VA"] ,
        ["Washington, VA", "Washington, VA"] ,
        ["Waterloo, IA", "Waterloo, IA"] ,
        ["West Palm Beach, FL", "West Palm Beach, FL"] ,
        ["Wichita Falls, TX", "Wichita Falls, TX"] ,
        ["Wichita, KS", "Wichita, KS"] ,
        ["Wilkes-Barre/Scranton, PA", "Wilkes-Barre/Scranton, PA"] ,
        ["Williamsport, PA", "Williamsport, PA"] ,
        ["Williston, ND", "Williston, ND"] ,
        ["Wilmington, DE", "Wilmington, DE"] ,
        ["Wilmington, NC", "Wilmington, NC"] ,
        ["Windsor Locks, CT", "Windsor Locks, CT"] ,
        ["Winnemucca, NV", "Winnemucca, NV"] ,
        ["Winslow, AZ", "Winslow, AZ"] ,
        ["Worcester, MA", "Worcester, MA"] ,
        ["Wrangell, AK", "Wrangell, AK"] ,
        ["Yakima, WA", "Yakima, WA"] ,
        ["Yakutat, AK", "Yakutat, AK"] ,
        ["Youngstown/Warren, OH", "Youngstown/Warren, OH"] 
    ]
}

var weather_PROPERTIES = [
    ["Data.Precipitation", "Data.Precipitation"] ,
    ["Date.Full", "Date.Full"] ,
    ["Date.Month", "Date.Month"] ,
    ["Date.Week of", "Date.Week of"] ,
    ["Date.Year", "Date.Year"] ,
    ["Station.City", "Station.City"] ,
    ["Station.Code", "Station.Code"] ,
    ["Station.Location", "Station.Location"] ,
    ["Station.State", "Station.State"] ,
    ["Data.Temperature.Avg Temp", "Data.Temperature.Avg Temp"] ,
    ["Data.Temperature.Max Temp", "Data.Temperature.Max Temp"] ,
    ["Data.Temperature.Min Temp", "Data.Temperature.Min Temp"] ,
    ["Data.Wind.Direction", "Data.Wind.Direction"] ,
    ["Data.Wind.Speed", "Data.Wind.Speed"] 
]

Blockly.Blocks['weather_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("weather.get")
        .appendField(new Blockly.FieldDropdown(weather_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(weather_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of weather data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "weather")
    return container;
  },
  domToMutation: function(xmlElement) {
    var index = xmlElement.getAttribute('index');
    this.setFieldValue(index, 'INDEX');
    var index_value = xmlElement.getAttribute('index_value');
    this.updateShape_(index, index_value);
  },
  updateShape_: function(index, index_value) {
    var inputGroup = this.getInput('SECOND')
    var fieldExists = this.getField('INDEX_VALUE');
    if (fieldExists) {
        inputGroup.removeField('INDEX_VALUE');
    }
    try {
        if (index != undefined && index != '(None)') {
            inputGroup.appendField(new Blockly.FieldDropdown(weather_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(weather_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['weather_get'] = function(block) {
    Blockly.Python.definitions_['import_weather'] = 'import weather';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'weather.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['weather'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("weather_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - weather'] = '<category name="Data - Weather" colour="45">'+
                    '<block type="weather_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';