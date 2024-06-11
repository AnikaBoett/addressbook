Vue.createApp({
    data() {
        return {
            inputName: "",
            inputEmail: "",
            history: [],

        };
    },
    methods: {
        recordAddress: function () {
            this.history.push({
                name: this.inputName,
                email: this.inputEmail,
            });

            this.inputName = "";
            this.inputEmail = "";
        },

        deleteItem: function (index) {
            this.history.splice(index, 1);
        },

        editItem: function (index) {
            console.log(this.history[index], index)
            this.inputName = this.history[index].name;
            this.inputEmail = this.history[index].email;
            this.history.splice(index, 1);
        }

    },
    created: function() {
        console.log("Vue app opened");

    }
}).mount("#app");