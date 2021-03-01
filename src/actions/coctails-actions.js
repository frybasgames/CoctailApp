var url = "https://the-cocktail-db.p.rapidapi.com";
var headers = {
    "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf",
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
};
var params = {
    "method": "GET",
    "headers": headers
};

export const getCoctails = () => dispatch => {
    fetch( url + "/filter.php?i=Gin", params)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: 'GET_COCTAIL', payload: data.drinks }));
};

export const getDetails = (id) => dispatch => {
    fetch( url + "/lookup.php?i="+id, params)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: 'GET_COCTAIL_DETAIL', payload: data.drinks }));
};

export const getAlcoholicList = (alcohol) => dispatch => {
    console.log(alcohol)
    fetch( url + "/filter.php?a="+alcohol , params)
        .then(response => response.json())
        .then(data => { 
            if(data.drinks!=="None Found"){
                 dispatch({ type: 'GET_ALCOHOL_LIST', payload: data.drinks })
            }else{
                 dispatch({ type: 'GET_ERROR', payload: "hata" })
            }
        });
};

export const getCategoryList = (category) => dispatch => {
    fetch( url + "/filter.php?c="+category , params)
        .then(response => response.json())
        .then(data => 
            { 
            if(data.drinks!=="None Found"){
                dispatch({ type: 'GET_CATEGORY_LIST', payload: data.drinks })
            }else{
                dispatch({ type: 'GET_ERROR', payload: "hata" })
            }
        });
};

export const getSearchResult = (name) => dispatch => {
    if(name!==""){
        fetch(url + "/search.php?s=" + name, params)
            .then(response => response.json())
            .then(data => { if(data.drinks!==null){
                dispatch({ type: 'GET_COCTAIL_SEARCH', payload: data.drinks })
            }else{
                dispatch({ type: 'GET_ERROR', payload: "hata" })
            }
        });
    }
};

