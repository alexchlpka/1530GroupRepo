import http from "../http-common";

class SkinDataService {
    getAll(page = 0){
        return http.get();
    }

    get(_id){
        return http.get(`/id/?_id=${_id}`);
    }
}

export default new SkinDataService();