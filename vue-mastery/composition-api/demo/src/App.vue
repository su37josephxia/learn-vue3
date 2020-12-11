<template>
  <div>
    <div>=======Setup & ref===========</div>
    <Setup />
    <div>=======Method===========</div>
    <Method />
    <div>=======Computed===========</div>
    <Computed />
    <div>=======ReactiveSynatx===========</div>
    <ReactiveSynatx />
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
    <div>=======Teleport===========</div>
    <TeleportComponent />
  </div>
</template>

<script>
import Setup from "./components/Setup.vue";
import Method from "./components/Method.vue";
import Computed from "./components/Computed.vue";
import Modularizing from "./components/Modularizing";
import LifecycleHooks from "./components/LifecycleHooks";
import Watch from "./components/Watch.vue";
import ReactiveSynatx from "./components/ReactiveSynatx.vue";
import SharingState from "./components/SharingState";
import SuspenseComponent from "./components/Suspense";
import TeleportComponent from "./components/Teleport.vue";
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
    ReactiveSynatx,
    SuspenseComponent,
    TeleportComponent,
  },
};
</script>
