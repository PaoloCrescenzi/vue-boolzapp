import importeduserList from './usersList.js';

const { createApp } = Vue;

createApp({
    data() {
        return {
            importeduserList,

            utenteAttivo: -1,

            objUtente: "",
        };
    },

    methods: {
        utenteCliccato(i, utenteSingle) {
            this.utenteAttivo = i,
            this.objUtente = utenteSingle;
        },
    },
}).mount("#app")

