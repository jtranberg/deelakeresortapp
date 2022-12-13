const Airtable = require('airtable');

require ('dotenv').config();
const { API_KEY, BASE } = process.env;

// const base = new Airtable({ apiKey:' key1bbQRqHJDp9xTC' }).base('app19koAOouGQSEe5');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key1bbQRqHJDp9xTC'
});
var base = Airtable.base('appzU7ByKGEcsKzQs');

base('goals')
.select({
    maxRecords: 9,
    view: 'Grid view'})
.firstPage(function(err, records) {
    if (err) {console.error(err); return;}
    records.forEach(function(record, fetchNextPage) {
        console.log('Retrieved', record.get('title', ));
    });
});

base('goals')
   .create([
    {
        fields: {
            title: 'number4',
            details: 'number4'
        }
    },
    {
        fields: {
            title: 'number5',
            details: 'number5'
        },
    },
   ],
  function (err, records)  {
    if(err) {
        console.log(err);
        return;
    }
      records.forEach(function(record) {
        console.log(record.fields);
        console.log(record);
      });
    }
   );
