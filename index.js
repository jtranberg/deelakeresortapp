const Airtable = require('airtable');

require ('dotenv').config();
const { API_KEY, BASE } = process.env;

// const base = new Airtable({ apiKey:' key1bbQRqHJDp9xTC' }).base('app19koAOouGQSEe5');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key1bbQRqHJDp9xTC'
});
var base = Airtable.base('appId0a9mLlRZgqCk');

base('Sites')
.select({
    // maxRecords: 9,
    view: 'Grid view'})
.firstPage(function(err, records) {
    if (err) {console.error(err); return;}
    records.forEach(function(record, fetchNextPage) {
        console.log('Retrieved', record.get('Site', ));
        console.log('Retrieved', record.get('360', ));
        console.log('Retrieved', record.get('Canoe Calendar', ));
        console.log('Retrieved', record.get('BookingMood', ));
        console.log('Retrieved', record.get('Rental Type', ));
        console.log('Retrieved', record.get('Building Description', ));
        console.log('Retrieved', record.get('Main Photo', ));
        console.log('Retrieved', record.get('Accommodations', ));
        console.log('Retrieved', record.get('Cost per night', ));
        
        console.log('Retrieved', record.get('footer', ));
        console.log('Retrieved', record.get('landing Page footer', ));

    });
});