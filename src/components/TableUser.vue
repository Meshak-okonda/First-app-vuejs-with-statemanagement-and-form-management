<template >
    <div>
        <table id="customers">
            <tr >
                <td>Numero d'ordre</td>
                <td>Nom d'utilisateur</td>
                <td>E - Mail</td>
                <td>Modifier</td>
                <td>Supprimer</td>
            </tr>
            <tr v-for="user in store.state.users" :key="user.name">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>
                    {{user.email}}
                </td>
                <td>
                    <button @click="updateUser(user.id)"> Modifier </button>
                </td>
                <td>
                    <button @click="deleteUser(user.id)"> Supprimer </button>
                </td>
            </tr>
    </table>
    </div>
</template>
<script>
import {store} from "../store/store.js";

export default {
    name: 'TableUser',
    data() {
        return {
            store
        }
    },
    methods: {
        deleteUser(id){
            store.deleteUser(id);
        },
        updateUser(id){
            store.getDataUpdate(id);
        }
    }
}
</script>

<style >
    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }
    button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    }
</style>