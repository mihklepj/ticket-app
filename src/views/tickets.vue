<template>
  <div class="tickets">

    <!-- Modal for adding tickets -->
    <teleport to="#modals" v-if="modalActive" >
        <Modal :modalActive="modalActive" @click.self="toggleModal">
            <button>Submit</button>
            <button @click="toggleModal">Close</button>
        </Modal>
    </teleport>
    
    <div>
        <h1>Tickets</h1>
        <p>This is the Tickets management page</p>
        <button @click="toggleModal">Add an ticket</button>
        <div>
            <h2>
                Table of tickets here
            </h2>
        </div>
    </div>
    
    
  </div>  
</template>

<script>
import Modal from '@/components/tickets-modal.vue';
import { ref } from 'vue';
export default {
    name: 'Tickets',
    components: { Modal },
    setup() {
        const modalActive = ref(false)
        const toggleModal = () => {
            modalActive.value = !modalActive.value
        }
        return {modalActive, toggleModal}
    }
}
</script>

<style>
#app, #modals {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#formBtn {
    margin-top: 20px;
}
</style>