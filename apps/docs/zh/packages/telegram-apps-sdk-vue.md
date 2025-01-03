---
outline: [ 2, 3 ]
---

# @telegram-apps/sdk-vue

<p style="display: inline-flex; gap: 8px">
  <a href="https://npmjs.com/package/@telegram-apps/sdk-vue">
    <img src="https://img.shields.io/npm/v/@telegram-apps/sdk-vue?logo=npm"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@telegram-apps/sdk-vue"/>
  <a href="https://github.com/Telegram-Mini-Apps/telegram-apps/tree/master/packages/sdk-vue">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

Vue.js 软件包提供开发人员在开发迷你应用程序时可能会用到的实用工具。

> [!TIP]
> 由于此软件包提供了扩展 [@telegram-apps/sdk](./telegram-apps-sdk/2-x.md) 功能的实用功能，建议先查看 SDK 软件包的
> 文档。

## 安装

在继续之前，假定您已经安装了 `vue` 软件包，因为它是此软件包的
的同级依赖关系。

::: code-group

```bash [pnpm]
pnpm i @telegram-apps/sdk-vue
```

```bash [npm]
npm i @telegram-apps/sdk-vue
```

```bash [yarn]
yarn add @telegram-apps/sdk-vue
```

:::

> [!INFO]
> 此软件包完全重新导出了 [@telegram-apps/sdk](./telegram-apps-sdk/2-x) 软件包，因此 
> 您无需单独安装它。

## 用法

下面是该软件包的一个简单使用示例：

:::code-group

```tsx [index.tsx]
import { createApp } from 'vue';
import { init, backButton } from '@telegram-apps/sdk-vue';

import { BackButton } from './BackButton.vue';

// Initialize the package.
init();

const app = createApp(BackButton);

// Mount the Back Button, so we will work with 
// the actual component properties.
backButton.mount();

app.mount('#root');
```

```vue [BackButton.vue]
/**
 * Component which controls the Back Button visibility.
 */
<script setup lang="ts">
import { watchEffect, onMounted, onUnmounted } from 'vue';
import { backButton, useSignal } from '@telegram-apps/sdk-vue';

const isVisible = useSignal(backButton.isVisible);

watchEffect(() => {
  console.log('The button is', isVisible.value ? 'visible' : 'invisible');
});

onMounted(() => {
  backButton.show();
});

onUnmounted(() => {
  backButton.hide();
});
</script>

<template></template>
```

:::

## Hooks

### `useSignal`

该辅助工具允许您在应用程序中使用我们的 [signals](./telegram-apps-signals.md)。它
返回一个 Vue ref，每次我们的信号发生变化时，它都会更新。

```vue
<script setup lang="ts">
import { watchEffect, onMounted, onUnmounted } from 'vue';
import { backButton, useSignal } from '@telegram-apps/sdk-vue';

const isVisible = useSignal(backButton.isVisible);

watchEffect(() => {
  console.log('The button is', isVisible.value ? 'visible' : 'invisible');
});

onMounted(() => {
  backButton.show();
});

onUnmounted(() => {
  backButton.hide();
});
</script>

<template></template>
```

### `useLaunchParams`

返回迷你应用程序启动参数的函数。

```vue
<script setup lang="ts">
import { useLaunchParams } from '@telegram-apps/sdk-vue';

const lp = useLaunchParams();
</script>

<template>
  <div>Start param: {{ lp.startParam }}</div>
</template>
```
