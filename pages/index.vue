<template>
  <main class="main-container">
    <section></section>
    <section>
      <div class="profile-pic-container">
        <img
          src="@/assets/img/profile_pic.jpg"
          class="profile-pic"
          alt="profile photo of me"
        />
      </div>
      <div>
        <div class="location-container">
          <span class="location-info">
            <IconsGlobe :fillColor="'#00dc82'"></IconsGlobe>
            Lisbon, Portugal
          </span>
        </div>
        <div class="language-container">
          <p class="language-tag">English</p>
          <p class="language-tag">Portuguese</p>
        </div>
        <div class="name-container">
          <h1 class="name">Vasco Neves</h1>
        </div>
        <div class="title-container">
          <h2 class="title">Software Developer</h2>
        </div>
        <div class="social-container">
          <ul v-if="socialLinks.length > 0" class="social-list">
            <li
              v-for="social in socialLinks"
              :key="social.id"
              :class="['social-item']"
              @click="handleLinkRedirect(social.link)"
            >
              <component
                :is="social.iconName"
                :size="{ width: '1.2em', height: '1.2em' }"
              />
              <span class="social-title">{{ social.title }}</span>
            </li>
          </ul>
        </div>
      </div>

      <p class="bio">
        I'm a Software Developer who loves turning ideas into interactive web
        experiences that make people's lives easier. I get a real sense of
        fulfillment from working with others to tackle tough problems, using my
        technical skills to bring creative solutions to life
      </p>
      <div class="technical-skills-container">
        <h2 class="technical-skills-title">Technical Skills</h2>
        <div class="technical-skills-icons" v-if="technicalIcons.length > 0">
          <div
            v-for="technical in technicalIcons"
            :key="technical.id"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 42px;
            "
          >
            <component
              :is="technical.iconName"
              :size="{ width: '2em', height: '2em' }"
              class="technical-skills-icon"
              :class="[
                technical.isOver ? 'technical-skills-icon--animation' : '',
              ]"
              @mouseover="technical.isOver = true"
              @mouseleave="technical.isOver = false"
            />
            <p :style="{ color: technical.isOver ? technical.colorName : '' }">
              {{ technical.name }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>

<script lang="ts" setup>
import {
  IconsEmail,
  IconsGithub,
  IconsLinkedin,
  IconsVue,
  IconsNuxt,
  IconsPinia,
  IconsLaravel,
  IconsReact,
  IconsRedux,
  IconsDocker,
  IconsTypescript,
  IconsTailwindcss,
} from "#components";
import { type Component, markRaw } from "vue";

const socialLinks = ref<
  {
    id: number;
    title: string;
    iconName: Component;
    link: string;
  }[]
>([
  {
    id: 0,
    title: "GitHub",
    iconName: markRaw(IconsGithub),
    link: "https://github.com/vasconevesxd",
  },
  {
    id: 1,
    title: "Linkedin",
    iconName: markRaw(IconsLinkedin),
    link: "https://www.linkedin.com/in/vascopneves/",
  },
  {
    id: 2,
    title: "Email",
    iconName: markRaw(IconsEmail),
    link: "mailto:vascopneves.jobs@gmail.com",
  },
]);

const technicalIcons = ref<
  {
    id: number;
    iconName: Component;
    isOver: boolean;
    name: string;
    colorName: string;
  }[]
>([
  {
    id: 0,
    iconName: markRaw(IconsVue),
    isOver: false,
    name: "Vue",
    colorName: "#41B883",
  },
  {
    id: 1,
    iconName: markRaw(IconsNuxt),
    isOver: false,
    name: "Nuxt",
    colorName: "#00DC82",
  },
  {
    id: 2,
    iconName: markRaw(IconsPinia),
    isOver: false,
    name: "Pinia",
    colorName: "#ffd04a",
  },
  {
    id: 3,
    iconName: markRaw(IconsLaravel),
    isOver: false,
    name: "Laravel",
    colorName: "#FF2D20",
  },
  {
    id: 4,
    iconName: markRaw(IconsReact),
    isOver: false,
    name: "React",
    colorName: "#61DAFB",
  },
  {
    id: 5,
    iconName: markRaw(IconsRedux),
    isOver: false,
    name: "Redux",
    colorName: "#764ABC",
  },
  {
    id: 6,
    iconName: markRaw(IconsDocker),
    isOver: false,
    name: "Docker",
    colorName: "#2396ED",
  },
  {
    id: 7,
    iconName: markRaw(IconsTypescript),
    isOver: false,
    name: "Typescript",
    colorName: "#3178C6",
  },
  {
    id: 8,
    iconName: markRaw(IconsTailwindcss),
    isOver: false,
    name: "Tailwindcss",
    colorName: "#44a8b3",
  },
]);

const handleLinkRedirect = (link: string) => {
  if (link) {
    window.location.href = link;
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
}

.profile-pic-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.profile-pic {
  border-radius: 999rem;
  background-color: var(--neutral-background-medium);
  object-position: center;
  height: 10rem;
  width: 10rem;
  border: 1px solid var(--scheme-gray-400);
}

.location-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.location-info {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.language-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.825rem;
  margin-top: 1rem;
}

.language-tag {
  border: 1px solid var(--scheme-gray-300);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.name-container {
  display: flex;
  justify-content: start;
}

.name {
  font-weight: 800;
  font-size: 5rem;
  line-height: initial;
  margin: 1rem auto;
}

.title-container {
  display: flex;
  justify-content: start;
}

.title {
  font-weight: 300;
  font-size: 2rem;
  line-height: initial;
  color: var(--scheme-gray-800);
  margin-top: 0;
}

.social-container {
  display: flex;
  justify-content: start;
  margin-bottom: 2rem;
}

.bio {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: justify;
}

.technical-skills-container {
  padding-top: 1rem;
}

.technical-skills-title {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: initial;
  color: var(--white);
}

.technical-skills-icons {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding-top: 2rem;
}

@keyframes zoom-in {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}

.social-list {
  display: flex;
  padding: 0;
  color: var(--white);
  list-style-type: none;
  gap: 0.5rem;
  font-weight: 500;
  margin-bottom: 0;
  flex-wrap: wrap;
}

.social-item {
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.5rem;
  border-radius: 0.75rem;
  transition: background-color 0.5s ease, border-color 0.5s ease;
  border: 1px solid var(--scheme-gray-600-30);
  &:hover {
    background-color: var(--scheme-gray-600-10);
    border: 1px solid var(--scheme-gray-400);
  }
}

@media (min-width: 768px) {
  .main-container {
    grid-template-columns: 20% 60% 20%;
  }

  .name {
    line-height: 1rem;
    margin: auto;
  }

  .title {
    line-height: initial;
  }

  .technical-skills-title {
    line-height: initial;
  }
  .technical-skills-icons {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    .technical-skills-icon {
      filter: grayscale(100%);
      &.technical-skills-icon--animation {
        animation: 1s ease-out 0s 1 zoom-in;
        filter: grayscale(0);
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1290px) {
  .main-container {
    grid-template-columns: 20% 60% 20%;
  }

  .name {
    white-space: nowrap;
    margin: revert;
  }
}

@media (min-width: 1290px) {
  .main-container {
    grid-template-columns: 30% 40% 30%;
  }

  .name {
    line-height: 1rem;
    white-space: nowrap;
    margin: revert;
  }

  .title {
    line-height: 0.5rem;
  }

  .technical-skills-title {
    line-height: 0.5rem;
  }

  .technical-skills-icons {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
