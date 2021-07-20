<template>
  <button
    :class="['button', variant ? variant : 'primary', rounded ? 'rounded' : '']"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  rounded?: boolean;
}

export default defineComponent({
  name: "Button",
  props: ["variant", "rounded"],
});
</script>

<style scoped>
.primary {
  background-color: #e94d2b;
  color: #fff;
}
.secondary {
  background-color: #fff;
}

.rounded {
  border-radius: 2rem;
}

.button {
  border: none;
  padding: 1rem;
  font-size: 1rem;
}
</style>
