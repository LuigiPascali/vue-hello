// const app = Vue.createApp({
//     data() {
//         return {
//             message: "Hello World!"
//         };
//     }

// });

// app.mount('main');

// BONUS VERSION: 

const app = Vue.createApp({
    data() {
      return {
        message: "Hello, World!",
        image: "https://images.unsplash.com/photo-1687125576539-84e6a5c4e770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
        bodyBackgroundColor: "#DDE392",
        textColor: "#646F58",
        fontWeight: "bold",
      };
    },
    mounted() {
      document.body.style.backgroundColor = this.bodyBackgroundColor;
    },
  });

  app.mount('#app');