<script lang="ts">
  import initializeCustomSvelte from "./Globals/CustomSvelte";
  import cs from "./Stores/CustomStore";

  initializeCustomSvelte();
  cs.true();
</script>

<div id="page">
  {#if $cs}
    <div>Svelte {$cs}</div>
  {/if}
</div>

<style>
  #page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
</style>
