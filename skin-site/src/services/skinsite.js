import http from "../http-common";

class SkinDataService {
    getAll(page = 0){
        return http.get(`?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }
}

export default new SkinDataService();