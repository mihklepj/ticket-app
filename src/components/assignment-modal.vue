<template>
  <div class="modal-overlay">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h2>Add an assignment</h2>
        </slot>
        <button type="button" class="btn-close" @click="close">X</button>
      </header>
      
      <section class="modal-body">
        <slot name="body">
          <form id="assignment" name="assignment" >
                  
                  <table>
                    <tr>
                      <td>
                        <label class="lbl" for="title">Title</label>
                      </td>
                      <td>
                        <input type="text" name="title" id="title" placeholder="Title of assignment">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <label class="lbl" for="description">Description</label>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <textarea name="description" id="description" cols="30" rows="3"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="lbl" for="state">State</label>
                      </td>
                      <td>
                        <select class="select" v-model="state">
                            <option value=""></option>
                            <option value="not started">Not started</option>
                            <option value="in progress">In progress</option>
                            <option value="completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="deadline">Deadline</label>
                      </td>
                      <td>
                        <input type="date" name="deadline" id="deadline">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="process_id">Process ID</label>
                      </td>
                      <td>
                        <!-- Maybe a function to fetch process info to show with process id -->
                        
                        <input type="number" name="process_id" id="process_id" placeholder="Tied to a process">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="assigned_to">Assignee</label>
                      </td>
                      <td>
                        <!-- Maybe a function to fetch assignee info to show with input -->
                        
                        <input type="number" name="assigned_to" id="assigned_to" placeholder="Assign to someone">
                      </td>
                    </tr>
                  </table>
                </form>
        </slot>
      </section>
      
      <footer class="modal-footer">
        <slot name="footer">
          This is footer
        </slot>
        
        <div class="formBtn">
          <button name="submit" type="button" form="assignment">submit</button>
          <button name="reset" type="button" form="assignment">reset</button>
          <button name="close" type="button" @click="close">close</button>
        </div>
      </footer>
      
<!--
      <div v-show="modalActive">
          <div>
            <div>
                <h2>Add an assignment</h2>
                
                <form id="assignment" name="assignment" >
                  
                  <table>
                    <tr>
                      <td>
                        <label class="lbl" for="title">Title</label>
                      </td>
                      <td>
                        <input type="text" name="title" id="title" placeholder="Title of assignment">
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <label class="lbl" for="description">Description</label>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <textarea name="description" id="description" cols="30" rows="3"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="lbl" for="state">State</label>
                      </td>
                      <td>
                        <select class="select" v-model="state">
                            <option value=""></option>
                            <option value="not started">Not started</option>
                            <option value="in progress">In progress</option>
                            <option value="completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="deadline">Deadline</label>
                      </td>
                      <td>
                        <input type="date" name="deadline" id="deadline">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="process_id">Process ID</label>
                      </td>
                      <td>
                         Maybe a function to fetch process info to show with process id -->
                        <!--
                        <input type="number" name="process_id" id="process_id" placeholder="Tied to a process">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="assigned_to">Assignee</label>
                      </td>
                      <td>
                         Maybe a function to fetch assignee info to show with input -->
                        <!--
                        <input type="number" name="assigned_to" id="assigned_to" placeholder="Assign to someone">
                      </td>
                    </tr>
                  </table>
                </form>
                <div class="formBtn">
                        <button name="submit" type="button" form="assignment">submit</button>
                        <button name="reset" type="button" form="assignment">reset</button>
                        <button @click="toggleModal" name="close" type="button" form="assignment">close</button>
                        <slot />
                        </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      -->
    </div>
  </div>
  
    
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
/*
import toggleModal from '@/views/assignments.vue'
import modalActive from '@/views/assignments.vue'
export default {
    props: ['modalActive', 'toggleModal'],
    components: { toggleModal },
    data() {
      return {
        form: {
          title: '',
          description: '',
          state: '',
          deadline: '',
          process_id: '',
          assigned_to: ''
        }
      }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}*/
</script>

<style>
  /*.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }*/

  /*.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }*/

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>