<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size.width"
    :height="size.height"
    viewBox="0 0 32 32"
  >
    <path
      fill="#44a8b3"
      d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
    ></path>
  </svg>
</template>

<script lang="ts">
export default {
  name: "LogosTailwindcssIcon",
};
</script>

<script lang="ts" setup>
export interface Size {
  width: string;
  height: string;
}

defineProps({
  size: {
    type: Object as PropType<Size>,
    default: { width: "1.67em", height: "1em" },
  },
});
</script>
