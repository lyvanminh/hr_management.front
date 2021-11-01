<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Please chosse user approve
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
            <div v-for="(user, index) in users" :key="index">
                <input type="checkbox" v-if='user.role === "ceo" || user.role === "manager"' :id="user.role" :value="user.name" v-model="list_user">
                <label :for="user.name" v-if='user.role === "ceo" || user.role === "manager"' class="label-name">{{ user.name }}</label>
            </div>
        </slot>
       </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          @click="submit"
        >
          Done
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ModalUser",
        props: ['users', 'users_approve'],
        data() {
          return {
            list_user: this.users_approve,
          }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            submit() {
                this.$emit('submit', this.list_user);
            },
        },
    }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    position: unset;
    top: 0;
    width: 50%;
    height: auto;
  }

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

  .modal-body .label-name {
      margin-left: 10px;
  }
</style>
