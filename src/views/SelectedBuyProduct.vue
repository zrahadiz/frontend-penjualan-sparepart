<template>
    <div>
        <h2 class="grid justify-center font-bold">Buy Product</h2>
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Nama Barang</span>
                </label>
                <input type="text" v-model="namaBarang" class="input input-bordered w-full" disabled/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Kategori</span>
                </label>
                <input type="text" v-model="kategori" class="input input-bordered w-full" disabled/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Stok</span>
                </label>
                <input type="text" v-model="stok" class="input input-bordered w-full" disabled/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Harga Jual</span>
                </label>
                <input type="text" v-model="hargaJual" class="input input-bordered w-full" disabled/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Nama Pembeli</span>
                </label>
                <input type="text" v-model="namaKonsumen" class="input input-bordered input-accent w-full"/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Jumlah Beli</span>
                </label>
                <input type="number" min="1" :max="stok" v-model="jumlahBeli" class="input input-bordered input-accent w-full"/>
            </div>
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Total Harga</span>
                </label>
                <input type="number" v-model="hargaTotal" class="input input-bordered input-accent w-full"/>
            </div>
        
            <div class="col-start-2 col-span-4">
                <label class="label">
                    <span class="label-text">Tanggal Pembelian</span>
                </label>
                <input type="text" v-model="tanggalFaktur" class="input input-bordered w-full" disabled/>
            </div>
        </div>
        <div class="flex justify-center mt-5 space-x-4">
            <router-link to="/"  class="btn btn-outline btn-error btn-wide justify-center">Cancel</router-link>
            <button @click="buyProducts" class="btn btn-outline btn-accent btn-wide inline-block justify-center">Confirm Buy</button>
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
            jumlahBeli: 0,
            hargaTotal: 0,
            namaKonsumen: null,
            tanggalFaktur: null
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
            }catch(error){
                console.log(error)
            }
        },
        async buyProducts(){
            try{
                await axios.post("http://localhost:8080/transactions/buy", {
                tanggalFaktur: this.tanggalFaktur,
                namaKonsumen: this.namaKonsumen,
                kodeBarang: this.kodeBarang,
                jumlahBeli: this.jumlahBeli,
                hargaSatuan: this.hargaJual,
                hargaTotal: this.hargaTotal}, {headers: {'Content-Type': 'application/json'}
                })
                alert("Buy Succeed")
                window.location.href = '/'
            }catch(error){
                console.log(error)
            }
        },
        getCurrentDate(){
            let currentDate = new Date().toJSON().slice(0, 10);
            console.log(currentDate); // "2022-06-17"
            this.tanggalFaktur = currentDate
        }
    },
    mounted(){
        this.getSelectedDiscussion()
        this.getCurrentDate()
    },
    updated(){
        this.hargaTotal = this.hargaJual * this.jumlahBeli
    }
}
</script>

<style>

</style>