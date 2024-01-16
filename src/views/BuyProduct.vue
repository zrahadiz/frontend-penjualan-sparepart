<template>
    <div>
        <h1 class="grid justify-center font-bold">Product List</h1>
        <div class="grid justify-center">
            <table class="border-collapse border">
                <thead class="border">
                <th class="p-2">Nama Barang</th>
                <th class="p-2">Harga Jual</th>
                <th class="p-2">Kategori</th>
                <th class="p-2">Satuan</th>
                <th class="p-2">Stok</th>
                <th class="p-2">Opsi</th>
                </thead>
                <tbody>
                <tr v-for="item in authStore.dataProduct" :key="item" class="border">
                    <td class="p-2">{{item.namaBarang}}</td>
                    <td class="p-2">{{item.hargaJual}}</td>
                    <td class="p-2">{{item.kategori}}</td>
                    <td class="p-2">{{item.satuan}}</td>
                    <td class="p-2">{{item.stok}}</td>
                    <router-link :to="{ name: 'buy', params:{ id: item.kodeBarang}}" class="btn bg-emerald-400 rounded-md shadow-md w-48 m-2" :class="{ disable:  item.stok == 0}" onclick="add_product_modal.showModal()">BUY</router-link>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .disable{
        pointer-events: none;
        background-color: gray;
    }
</style>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/productStore'

export default {
    data(){
        return{
            authStore: useAuthStore(),
        }
    },
    mounted(){
        this.authStore.getProduct();
    }
}
</script>