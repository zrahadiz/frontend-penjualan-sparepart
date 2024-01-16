<template>
  <div>
    <h1 class="grid justify-center font-bold">Product List</h1>
    <div class="grid justify-center">
      <table class="border-collapse border">
        <thead class="border">
          <th class="p-2">Kode Barang</th>
          <th class="p-2">Nama Barang</th>
          <th class="p-2">Harga Jual</th>
          <th class="p-2">Harga Beli</th>
          <th class="p-2">Kategori</th>
          <th class="p-2">Satuan</th>
          <th class="p-2">Stok</th>
          <th class="p-2">Opsi</th>
        </thead>
        <tbody>
          <tr v-for="item in authStore.dataProduct" :key="item" class="border">
            <td class="p-2">{{item.kodeBarang}}</td>
            <td class="p-2">{{item.namaBarang}}</td>
            <td class="p-2">{{item.hargaJual}}</td>
            <td class="p-2">{{item.hargaBeli}}</td>
            <td class="p-2">{{item.kategori}}</td>
            <td class="p-2">{{item.satuan}}</td>
            <td class="p-2">{{item.stok}}</td>
            <router-link :to="{ name: 'product', params:{ id: item.kodeBarang}}" class="inline-block text-center bg-emerald-400 w-16 p-0.5 rounded shadow-md m-2">Edit</router-link>
            <button @click="deleteProduct(item.kodeBarang)" class="bg-red-600 w-16 p-0.5 rounded shadow-md m-3">Delete</button>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="grid justify-center mt-5">
      <button class="btn bg-sky-400 rounded-md shadow-md w-52 p-2" onclick="add_product_modal.showModal()">➕ Add Product</button>
    </div>
    <dialog id="add_product_modal" class="modal">
      <div class="modal-box">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-lg">Add Product!</h3>
          <div class="modal-action items-center -mt-2">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="bg-slate-300 p-1 rounded-full">❌</button>
            </form>
          </div>  
        </div>
        <div class="space-y-1">
          <p>Nama Barang</p>
          <input type="text" placeholder="Type here" v-model="namaBarang" class="input input-bordered input-sm w-full max-w-xs" /><br>
          <p>Harga jual</p>
          <input type="text" placeholder="Type here" v-model="hargaJual" class="input input-bordered input-sm w-full max-w-xs" /><br>
          <p>Harga Beli</p>
          <input type="text" placeholder="Type here" v-model="hargaBeli" class="input input-bordered input-sm w-full max-w-xs" /><br>
          <p>Kategori</p>
          <input type="text" placeholder="Type here" v-model="kategori" class="input input-bordered input-sm w-full max-w-xs" /><br>
          <p>Satuan</p>
          <input type="text" placeholder="Type here" v-model="satuan" class="input input-bordered input-sm w-full max-w-xs" /><br>
          <p>Stok</p>
          <input type="number" v-model="stok" min="1" class="input input-bordered input-sm w-full max-w-xs" /><br>
        </div>
        <div class="mt-5">
          <button @click="addProducts" class="btn btn-block btn-outline btn-accent">Submit</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/productStore'

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export default {
  data(){
    return{
      authStore: useAuthStore(),
      namaBarang: "",
      hargaJual: 0,
      hargaBeli: 0,
      kategori: "",
      satuan: "",
      stok: 0 
    }
  },
  methods: {
    async addProducts(){
      try{
        await axios.post("http://localhost:8080/main/add", {
          namaBarang: this.namaBarang,
          hargaJual: this.hargaJual,
          hargaBeli: this.hargaBeli,
          satuan: this.satuan,
          kategori: this.kategori,
          stok: this.stok}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        this.authStore.getProduct();
      }catch(error){
        console.log(error)
      }
    },
    async deleteProduct(id){
      try{
        await axios.delete(`http://localhost:8080/main/barang/${id}`)
        this.authStore.getProduct();
      }catch(error){
        console.log(error)
      }
    }
  },
  mounted() {
    this.authStore.getProduct();
  }
}
</script>

<style>

</style>
