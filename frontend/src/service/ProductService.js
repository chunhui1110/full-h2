import axios from 'axios';

const PRODUCT_API_URL = "http://localhost:8080/api/products"

class productService {
    getPrdoucts(){
        return axios.get(PRODUCT_API_URL);
    }
    getPrdouctById(productId){
        return axios.get(`${PRODUCT_API_URL}/${productId}`);
    }
    deletProduct(productId){
        return axios.delete(`${PRODUCT_API_URL}/${productId}`);
    }
    createProduct(product){
        return axios.post(PRODUCT_API_URL, product);
    }
    updateProduct(product, productId){
        return axios.put(`${PRODUCT_API_URL}/${productId}`, product);
    }
}

export default new productService();