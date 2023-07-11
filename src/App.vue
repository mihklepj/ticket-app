<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Processes' }">Processes</router-link> |
    <router-link :to="{ name: 'Assignments' }">Assignments</router-link> |
    <router-link :to="{ name: 'Tickets' }">Tickets</router-link> |
    <router-link :to="{ name: 'Departments' }">Departments</router-link> |
    <router-link :to="{ name: 'Chat' }">Chat</router-link>
    
  </nav>

  <router-view/>



</template>

<script>

</script>

<style>

/* DEFINE COLORS HERE */
:root {
  --input_border: #888888; /* var(--input_border) */
  --text_color: #FF652F; /* var(--text_color) */
  --background_color: #272727; /*  var(--background_color)  */
}

h1 {
  color: var(--text_color);
  text-transform: uppercase;
}

h2 {
  color: var(--text_color);
}

p {
  color: var(--text_color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text_color);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--text_color);
  text-decoration: none;
  padding: 10px;
  border-radius: 7px;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: var(--background_color);
  background: var(--text_color);
}

* {
  background: var(--background_color);
  box-sizing: border-box;
}

html {
  font-family: 'Georama', sans-serif;
}

body {
  margin: 0;
}
#formBtn {
    margin: 5px;
}
button {
  border: 0;
  background: var(--text_color);
  color: var(--background_color);
  cursor: pointer;
  padding: 10px;
  margin-inline: 3px;
  border-radius: 10px;
}
.lbl {
  border: 0;
  padding: 3px;
  margin: 6px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: medium;
  color: var(--text_color);
}
.formelmnt {
  text-align: left;
  color: var(--text_color);
}
textarea {
  border: 1px solid var(--input_border);
  padding: 3px;
  margin: 6px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: medium;
  background: var(--background_color);
  border-radius: 7px;
}
input {
  border: 1px solid var(--input_border);
  padding: 3px;
  margin: 6px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: medium;
  background: var(--background_color);
  color: var(--text_color);
  border-radius: 7px;
}
input:focus {
  background: var(--background_color);
  border: 1px solid var(--input_border);
  color: var(--text_color);
}
textarea:focus {
  background: var(--background_color);
  border: 1px solid var(--input_border);
  color: var(--text_color);
}
.select {
  border: 1px solid var(--input_border);
  padding: 3px;
  margin: 6px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: medium;
  background: var(--background_color);
  color: var(--text_color);
  border-radius: 7px;
}
select:focus {
  background: var(--background_color);
  color: var(--text_color);
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000cc;
  }
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: var(--text_color);
    border: none;
    padding: 0;
    font: arial;
  }
  .modal p {
    font-style: normal;
    color: var(--text_color);
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid var(--input_border);
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
</style>
