<template>
    
    <div id="app">
        <button
        type="button"
        class="btn"
        @click="showModal"
        >
        Open Modal!
        </button>

        <Modal
        v-show="isModalVisible"
        @close="closeModal"
        />
    </div>

<!--
  <div class="assignments">
-->
    <!-- Modal for adding assignments -->
<!--    <teleport to="#modals" v-if="modalActive" >
        <Modal :modalActive="modalActive" @click.self="toggleModal">
-->            
            <!--
            <div class="formBtn">
                <button name="submit" type="submit" form="assignment">Submit</button>
                  <button @click="toggleModal">Close</button>
                </div>
                -->
<!--        </Modal>
    </teleport>
    
    <div>
        <h1>Assignments</h1>
        <p>This is the Assignments management page</p>
        <button @click="toggleModal">Add an assignment</button>
        <div>
            <h2>
                Table of assignments here
            </h2>
        </div>
    </div>
    
    
  </div>  -->
</template>

<script>
import Modal from '@/components/assignment-modal.vue';
//import { ref } from 'vue';
export default {
    name: 'Assignments',
    components: { Modal },
    data() {
        return{
            isModalVisible: false,
        };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
    /*props: [],
    setup() {
        const modalActive = ref(true)
        const toggleModal = () => {
            modalActive.value = !modalActive.value
        }
        return {modalActive, toggleModal}
    }*/
};
</script>

<style>
#app, #modals {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text_color);
  margin-top: 60px;
}
#formBtn {
    margin-top: 20px;
}
</style>