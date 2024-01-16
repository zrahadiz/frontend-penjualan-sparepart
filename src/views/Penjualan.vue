<template>
    <div>
        <h1 class="grid justify-center font-bold text-xl">Riwayat Data Penjualan</h1>
        <h4 class="grid justify-center font-bold mt-5">Total Pendapatan : Rp.{{authStore.totalPendapatan}}</h4>
        <div class="grid justify-center">
            <table class="border-collapse border">
                <thead class="border">
                <th class="p-2">Kode Barang</th>
                <th class="p-2">No Faktur</th>
                <th class="p-2">Tanggal Faktur</th>
                <th class="p-2">Nama Konsumen</th>
                <th class="p-2">Harga Satuan</th>
                <th class="p-2">Jumlah Beli</th>
                <th class="p-2">Total Harga</th>
                </thead>
                <tbody>
                <tr v-for="item in authStore.dataPenjualan" :key="item" class="border">
                    <td class="p-2">{{item.kodeBarang}}</td>
                    <td class="p-2">{{item.noFaktur}}</td>
                    <td class="p-2">{{item.tanggalFaktur}}</td>
                    <td class="p-2">{{item.namaKonsumen}}</td>
                    <td class="p-2">{{item.hargaSatuan}}</td>
                    <td class="p-2">{{item.jumlahBeli}}</td>
                    <td class="p-2">{{item.hargaTotal}}</td>
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
        this.authStore.getPenjualan();
    }
}
</script>