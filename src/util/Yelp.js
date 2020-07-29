const apiKey = process.env.REACT_APP_API_KEY;
// GET https://api.yelp.com/v3/businesses/{id}
const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: 
            {
                Authorization: `Bearer ${apiKey}`
            }
        }
        ).then(response => {
            return response.json()})
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.map(cat => cat.title),
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
        .catch(e => {
            console.log("Error! ", e);
        });
    }
}

export default Yelp;
