

class BandSiteApi{
constructor (apiKey){
    this.apiKey = apiKey;
    this.baseUrl= "https://unit-2-project-api-25c1595833b2.herokuapp.com";
}

async getShows(){
   const showResponse = await axios.get (`${this.baseUrl}/showdates?api_key=${this.apiKey}`)
   return showResponse.data;
}


}
const runApi = new BandSiteApi("120e9fa0-2ae4-4054-8899-ecb4c8f71ea9");
export default runApi;