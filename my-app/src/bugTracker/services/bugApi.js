import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

const bugApi = {
    async getAll(){
        let response = await axios.get(serviceEndPoint);
        return response.data;
    },
    async save(bugData){
        if (bugData.id === 0){
            let response = await axios.post(serviceEndPoint, bugData);
            return response.data;
        } else {
            let response = await axios.put(`${serviceEndPoint}/${bugData.id}`, bugData);
            return response.data;
        }
    },
    async remove(bugData){
        let response = await axios.delete(`${serviceEndPoint}/${bugData.id}`);
            return response.data;
    }
}

export default bugApi;