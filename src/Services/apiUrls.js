const BASE_URL = "https://localhost:44345/api/";
export const ApiUrls={
    Notes: {
        GETALL: BASE_URL+`Notes/`,
        POST: BASE_URL+`Notes/`,
        Put:(id)=>BASE_URL+`Notes/${id}`,
        Delete:(id)=>BASE_URL+`Notes/${id}`,
    }
}