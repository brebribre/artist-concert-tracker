import { artistExistInArray } from "./utils";

interface Concert {
    eventName:string,
    startDate:string,
    venue:string,
    city:string,
    country:string,
    image:string,
    offer:string,
    performer:string[]
  }

export async function getConcertByGroupName(name:string){
    let formatName = name.trim();
    formatName = formatName.replace(/ /g, "+");
    const url = 'https://www.jambase.com/jb-api/v1/events?artistName='+ formatName + '&apikey=4ca92282-713c-4912-8a55-066afff640d9';
    const options = {method: 'GET', headers: {Accept: 'application/json'}};


    try {
        let concerts: Concert[] = [];
        const response = await fetch(url, options);
        const data = await response.json();
        const list = data["events"];
       
        let len = list.length;
        let tmp:Concert;

        for(let i = 0; i < len ; i++){
            let offerExist = list[i].offers.length > 0;

            let performersLen = list[i].performer.length
            let performersExist = performersLen > 0;
            let performersTmp: string[] = []

            for(let j = 0; j < performersLen ; j++){
                performersTmp.push(list[i].performer[j]["name"]);
            }


            tmp = {
                eventName: list[i].name,
                startDate: list[i].startDate,
                venue: list[i].location.name,
                city: list[i].location.address.addressLocality,
                country: list[i].location.address.addressCountry.name,
                image: list[i].image,
                offer: offerExist?list[i].offers[0].url:"",
                performer: performersExist?performersTmp:[""]
            }

            //check validity
            let artistName = list[i].performer[0].name.toLowerCase();
            let type = list[i]["@type"];
      

            if(type === "Festival" && artistExistInArray(name, performersTmp)){
                concerts.push(tmp);
            }else{
                if(artistName === name.trim().toLowerCase()){
                    concerts.push(tmp);
                }
            }
        }
        
        return concerts;
    } catch (error) {
        console.error(error);
    }
    return [];
    
}


