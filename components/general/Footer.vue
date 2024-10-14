<template>
  <footer>
    <span class="footer-copyright">
      &#169; 2024 / Vasco Neves / Build your portfolio with Nuxt
    </span>
    <div class="footer-icons">
      <IconsGithub
        :size="{ width: '1.5em', height: '1.5em' }"
        @click="handleIconRedirect('https://github.com/vasconevesxd')"
      ></IconsGithub>
      <IconsLinkedin
        :size="{ width: '1.5em', height: '1.5em' }"
        @click="handleIconRedirect('https://www.linkedin.com/in/vascopneves/')"
      ></IconsLinkedin>
      <IconsEmail
        :size="{ width: '1.5em', height: '1.5em' }"
        @click="handleIconRedirect('mailto:vascopneves.jobs@gmail.com')"
      ></IconsEmail>
    </div>
  </footer>
</template>

<script setup lang="ts">
const handleIconRedirect = (link: string) => {
  if (link) window.location.href = link;
};
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  font-size: 0.825rem;
  align-items: center;
  gap: 1rem;
}

.footer-copyright {
  color: var(--white);
}

.footer-icons {
  display: flex;
  gap: 1.25rem;
  svg {
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  footer {
    justify-content: space-around;
    flex-direction: row;
    margin: 1rem 0;
    gap: 0;
  }
}
</style>
