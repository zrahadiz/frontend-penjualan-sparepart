import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        dataProduct: null,
        dataPenjualan: null,
        totalPendapatan: 0
    }),

    actions: {
        async getProduct(){
            try{
                const response = await axios.get('http://localhost:8080/main/all')
                this.dataProduct = response.data
                console.log(this.dataProduct)
            }catch(error){
                console.error(error);
            }
        },
        async getPenjualan(){
            try{
                const response = await axios.get('http://localhost:8080/transactions/all')
                this.dataPenjualan = response.data
                console.log(this.dataPenjualan)
                this.totalPendapatan = 0
                for(let x in this.dataPenjualan){
                    this.totalPendapatan += this.dataPenjualan[x].hargaTotal;
                }
            }catch(error){
                console.error(error);
            }
        }
    }
})
