<template>
  <div>
    <div>=======Setup & ref===========</div>
    <Setup />
    <div>=======Method===========</div>
    <Method />
    <div>=======Computed===========</div>
    <Computed />
    <div>=======Modularizing===========</div>
    <Modularizing />
    <div>=======LifecycleHooks===========</div>
    <LifecycleHooks />
    <div>=======Watch===========</div>
    <Watch />
    <div>=======SharingState===========</div>
    <SharingState />
    <div>=======Suspense===========</div>
    <SuspenseComponent />
  </div>
</template>

<script>
import Setup from "./components/Setup.vue";
import Method from "./components/Method.vue";
import Computed from "./components/Computed.vue";
import Modularizing from "./components/Modularizing";
import LifecycleHooks from "./components/LifecycleHooks";
import Watch from "./components/Watch.vue";
import SharingState from "./components/SharingState";
import SuspenseComponent from './components/Suspense'
export default {
  name: "App",
  components: {
    Setup,
    Method,
    Computed,
    Modularizing,
    LifecycleHooks,
    Watch,
    SharingState,
    SuspenseComponent
  },
};
</script>
