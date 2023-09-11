// Check if geolocation is available in the browser
export async function getCity(longitude:number, latitude:number) {
    if ("geolocation" in navigator) {
        // Request the user's current location
        global.navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=41ab124125c54e9b94fd7197d869c55b`)
            .then((response) => response.json())
            .then((data) => {
                return data.features[0].properties.city;
            })
            .catch((error) => {
                console.error("Error fetching location data:", error);
            });
            
        });
    }else{
        return "None"
    }
}
  
export function artistExistInArray(name:string, list:string[]){
    for(let i = 0; i < list.length ; i++){
        if(list[i]?.toLowerCase() === name.trim().toLowerCase()){
            

            return true;
        }
    }
    return false;
}

