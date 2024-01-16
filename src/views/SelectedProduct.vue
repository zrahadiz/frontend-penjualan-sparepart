<template>
    <div>
        <h2 class="grid justify-center font-bold">Edit Product</h2>
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Kode Barang</span>
                </label>
                <input type="text" v-model="kodeBarang" class="input input-bordered w-full" disabled />
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Nama Barang</span>
                </label>
                <input type="text" v-model="namaBarang" class="input input-bordered input-accent w-full"/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Harga Jual</span>
                </label>
                <input type="text" v-model="hargaJual" class="input input-bordered input-accent w-full"/>    
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Harga Beli</span>
                </label>
                <input type="text" v-model="hargaBeli" class="input input-bordered input-accent w-full"/>    
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Kategori</span>
                </label>
                <input type="text" v-model="kategori" class="input input-bordered input-accent w-full"/>    
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Satuan</span>
                </label>
                <input type="text" v-model="satuan" class="input input-bordered input-accent w-full"/>    
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Stok</span>
                </label>
                <input type="text" v-model="stok" class="input input-bordered input-accent w-full"/>    
            </div>
        </div>
        <div class="flex justify-center mt-5 space-x-4">
            <router-link to="/"  class="btn btn-outline btn-error btn-wide justify-center">Cancel</router-link>
            <button @click="updateProduct" class="btn btn-outline btn-accent btn-wide inline-block justify-center">Submit</button>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/productStore'

export default {
    data(){
        return{
            authStore: useAuthStore(),
            productId: window.location.pathname.split("/")[2],
            kodeBarang: null,
            namaBarang: "",
            hargaJual: null,
            hargaBeli: null,
            kategori: null,
            satuan: null,
            stok: null,
        }
    },
    methods:{
        async getSelectedDiscussion(){
            try{
                const response = await axios.get(`http://localhost:8080/main/barang/${this.productId}`)
                this.kodeBarang = response.data.kodeBarang
                this.namaBarang = response.data.namaBarang
                this.hargaJual = response.data.hargaJual
                this.hargaBeli = response.data.hargaBeli
                this.kategori = response.data.kategori
                this.satuan = response.data.satuan
                this.stok = response.data.stok
                console.log(this.kodeBarang)
            }catch(error){
                console.log(error)
            }
        },
        async updateProduct(){
            try{
                const response = await axios.put(`http://localhost:8080/main/edit/${this.productId}`, {
                    namaBarang: this.namaBarang,
                    hargaJual: this.hargaJual,
                    hargaBeli: this.hargaBeli,
                    satuan: this.satuan,
                    kategori: this.kategori,
                    stok: this.stok})
                alert("Update Succeed")
                window.location.href = '/'
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getSelectedDiscussion()
    }
}
</script>

<style>

</style>