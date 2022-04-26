import { reactive } from "vue";

export const store = reactive({
  state: {
   users: [],
   dataForm: {name: "", email:""}
  },
  addUser(user) {
    this.state.users.push({ ...user, id: this.state.users.length + 1 });
  },
  deleteUser(id) {
    this.state.users = this.state.users.filter((user) => user.id !== id);
  },
  getDataUpdate(id){
    this.state.dataForm = {...this.state.users.find((user)=> user.id == id)}
  },
  updateUser(userUp){
    this.state.users = this.state.users.map((user) => {
      if(user.id === userUp.id){
        return userUp;
      }
      return user;
    });
  },
  clearDataForm(){
    this.state.dataForm = {name: "", email: ""}
  }
});
