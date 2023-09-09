
export async function getGirlGroupByName(name:string){
    const url = 'https://k-pop.p.rapidapi.com/girl-groups?q='+ name + '&by=Group%20Name';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfe365537amshd321f9268940c7cp19a3efjsn35d9bd0a461d',
            'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
        }
        
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result["data"][0]);

        if(result.count === 0){
            return "Group doesn't exist."
        }else{
            return result["data"][0];
        }
    } catch (error) {
        console.error(error);
    }
}

export async function groupExist(name:string){
    const url = 'https://k-pop.p.rapidapi.com/girl-groups?q='+ name + '&by=Group%20Name';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfe365537amshd321f9268940c7cp19a3efjsn35d9bd0a461d',
            'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
        }
        
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
      

        if(result.count === 0){
            return false;
        }else{
            return true;
        }
    } catch (error) {
        console.error(error);
    }
}


