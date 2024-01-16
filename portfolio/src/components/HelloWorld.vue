<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green nmfont"><b><VueWriter :array="['Bhavya Gupta', 'Welcome!']" :caret="cursor" :typeSpeed="70" :delay="6000" start="500" :iterations="2" /></b></h1>
    <h3>
      IIT Madras ‘26 | Data Science
    </h3>
  </div>
</template>

<style scoped>
@font-face {
    font-family: "Valencia";
    src: url('@/assets/Valencia.ttf');
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.nmfont {
  font-family: "Valencia";
  font-size: 70px;
}

.is-typed span.typed {
  color: black;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
