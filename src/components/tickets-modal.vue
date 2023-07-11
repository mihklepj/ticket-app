<template>
    <div class="modal-overlay">
      <div class="modal">
        <transition name="modal-animation">
          <div v-show="modalActive">
            <div>
              <div class="" >
                  <h2>Add a ticket</h2>
                  
                  <!-- FORM -->
                  <form class="formelmnt">
                  <table>
                    <tr>
                      <td>
                        <label class="lbl" for="title">Title</label>
                      </td>
                      <td>
                        <input type="text" name="title" id="title" placeholder="Title of ticket">
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
                        <select class="select" name="state" id="state">
                            <option value="open">Open</option>
                            <option value="in progress">In progress</option>
                            <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>

                    <!-- REMOVE? -->
                    <tr>
                      <td>
                        <label for="updated">Updated</label>
                      </td>
                      <td>
                        <input type="date" name="deadline" id="deadline">
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label for="customer_id">Customer ID</label>
                      </td>
                      <td>
                        <!-- Maybe a function to fetch process info to show with process id -->
                        <input type="number" name="customer_id" id="customer_id" placeholder="Tied to a customer">
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
                  <div class="formBtn">
                      
                  </div>
              </div>
              <slot />
            </div>
              
          
          </div>
      </transition>
      </div>
    </div>
      
  </template>
  
  <script>
  export default {
      props: ['modalActive'],
      methods: {
          closeModal() {
              this.$emit('close')
          }
        }
  }
  </script>
  
  <style>
   
  </style>