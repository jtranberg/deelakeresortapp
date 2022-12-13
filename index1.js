

console.log('Hi there!');

 const fetchData = async() => {         //base: app19koAOouGQSEe5
  const response = await axios.get('https://swapi.dev/api/planets', { //api:key1bbQRqHJDp9xTC....URL:.https://airtable.com/
    params: {
      apikey: '',
      s: 'search'
    }
 });
  console.log(response.data);
};
fetchData();


