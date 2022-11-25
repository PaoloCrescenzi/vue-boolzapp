import importeduserList from './usersList'

const{createApp}= Vue;

createApp({
    data (){
        return{
            usersList: importeduserList
        };
    },
}).mount("#app")

