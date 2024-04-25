export async function getBreweries(page, perpage){
    const resp = await fetch(
        `https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perpage}`
    );
    let arr = await resp.json();
    return arr.map((item) => {
            return {
                name: item.name,
                city: item.city,
                state: item.state,
                country: item.country,
                url: item.website_url
            };
        })
}

export async function sayHello(){
    console.log("hello"); 
}

export const myName = 'Jeff'; 



