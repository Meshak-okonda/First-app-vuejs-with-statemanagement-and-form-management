<script>
/* eslint-disable */
import { store } from '../store/store.js';

export default {
    name: 'FormUser',
    data() {
        return {
            store
        }
    },
    methods: {
        submitHandler(e){
            if(store.state.dataForm.id){
              store.updateUser({...e, id: store.state.dataForm.id});
            }else{
              store.addUser(e);
            }
            store.clearDataForm()
        }
    },
}
</script>


<template lang="fr">
<div class="form">
    <FormKit
    type="form"
    submit-label="Register"
    @submit="submitHandler"
  >
    <h1>Register!</h1>
    <p>
      You can put any type of element inside a form, not just FormKit inputs
      (although only FormKit inputs are included with the submission).
    </p>
    <hr />
    <FormKit
      type="text"
      name="name"
      label="Your name"
      
      v-model="store.state.dataForm.name"
      placeholder="Nom d'utilisateur"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      v-model="store.state.dataForm.email"
      placeholder="Votre Mail"
      help="What email should we use?"
      validation="required|email"
    />
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
    </div>
    </div>
    
</template>

<style>
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>