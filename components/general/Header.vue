<template>
  <header class="container">
    <div class="location">Portugal/Lisbon</div>
    <div class="content--centered">
      <ul v-if="routerLinks.length > 0" class="router-list">
        <li
          v-for="router in routerLinks"
          :key="router.id"
          :class="[
            'router-item',
            'tooltip-box',
            { 'active-route': router.routerName === route.fullPath },
          ]"
          @click="handlePageRedirect(router.routerName)"
        >
          <component
            :is="router.iconName"
            :size="{ width: '1.4em', height: '1.4em' }"
          />

          <span class="router-title">{{ router.title }}</span>

          <div class="tooltip">
            <span class="text">{{ router.title }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="schedule-call">
      <ButtonBooking></ButtonBooking>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { IconsAccount, IconsBook } from "#components";
import { type Component, markRaw } from "vue";

const route = useRoute();

const routerLinks = ref<
  {
    id: number;
    title: string;
    iconName: Component;
    routerName: string;
    isCurrentRoute: boolean;
  }[]
>([
  {
    id: 1,
    title: "Home",
    iconName: markRaw(IconsAccount),
    routerName: "/",
    isCurrentRoute: true,
  },
  {
    id: 2,
    title: "Blog",
    iconName: markRaw(IconsBook),
    routerName: "/blog",
    isCurrentRoute: false,
  },
]);

const handlePageRedirect = async (routerName: string) => {
  await navigateTo({ path: routerName });
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 100%;
  bottom: 1rem;
  left: 0;
  right: 0;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .location {
    display: none;
  }
}

.router-list {
  display: flex;
  color: var(--white);
  list-style-type: none;
  border: 1px solid var(--scheme-gray-600-30);
  background-color: var(--scheme-gray-100);
  padding: 0.25rem;
  border-radius: 0.75rem;
  gap: 0.25rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 8px 12px rgba(0, 0, 0, 0.08),
    0px 8px 16px rgba(0, 0, 0, 0.08);

  .router-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid transparent;
    transition: background-color 0.5s ease, border-color 0.5s ease;
    &:hover {
      background-color: var(--scheme-gray-600-10);
      border: 1px solid var(--scheme-gray-600-30);
    }
  }
}

.router-title {
  display: none;
}

.active-route {
  background-color: var(--scheme-gray-600-30);
  border: 1px solid var(--scheme-gray-600-30);
}

.tooltip-box {
  position: relative;
  &:hover .tooltip,
  &:active .tooltip {
    opacity: 1;
  }
  .tooltip {
    color: var(--white);
    text-align: center;
    padding: 5px 0;
    border-radius: 2px;
    width: 120px;
    bottom: 160%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 1s;
    transition-timing-function: cubic-bezier(0.1, 0.5, 0.1);
    position: absolute;
    z-index: 1;
    background-color: var(--scheme-gray-300);
  }
}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--scheme-gray-300) transparent transparent transparent;
}

@media (min-width: 768px) {
  .container {
    position: relative;
    display: grid;
    width: auto;
    grid-template-columns: 25% 50% 25%;
    align-items: center;
    padding: 1rem;
    .content--centered {
      margin: 0 auto;
    }

    .location {
      display: inline-block;
      font-weight: 400;
    }

    .schedule-call {
      display: flex;
      justify-content: end;
    }
  }

  .router-list {
    background-color: var(--static-black-medium);
    width: fit-content;
  }

  .router-title {
    display: inline-block;
  }

  .tooltip {
    display: none;
  }
}
</style>
