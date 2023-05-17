import axios from "axios";

export default class ProfService{
    static async getAll(){
        const response = await axios.get('http://localhost:8080/menu/name')
        return response.data
    }
    static async getNameById(id){
        const response = await axios.get('http://localhost:8080/menu/name/' + id)
        return response.data[0]
    }
    static async getContentById(id){
        const response = await axios.get('http://localhost:8080/menu/instruction/' + id)
        return response.data[0]
    }
    static async getDelete(id){
        await axios.delete('http://localhost:8080/menu/delete/' + id)
    }

}