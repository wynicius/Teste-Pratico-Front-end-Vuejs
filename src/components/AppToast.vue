<template>
  <div>
    <span>Anything can be added here.</span>
    <button class="action" @click.stop="clicked">Open!</button>
  </div>
 </template>

<script>
export default {
 methods: {
   clicked() {
     // Emit a "click" event when clicked.
     // Can be any event though and even pass parameters back
     this.$emit("click");
   }
 }
};
</script>