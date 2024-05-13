
export async function fetchPokemonApi(url){

    try {       
        const req = await fetch(url);
        if (!req.ok) {
            throw new Error("Error fetching API");
        }

        const result = await req.json();        
        return { data: result, error: false };


    } catch (error) {

        return { data: [], error: true, msg: "Something went wrong", status: 404};
        
    }
}

export async function fetchMoreInfoPokemon(url){

    try {       
        const req = await fetch(url);
        if (!req.ok) {
            throw new Error("Error fetching API");
        }

        const result = await req.json();  

        return {
            id: result.id,
            sprite: result.sprites,
            name: result.name,
            type: result.types
        }


    } catch (error) {

        return { data: [], error: true, msg: "Something went wrong", status: 404};
        
    }
}