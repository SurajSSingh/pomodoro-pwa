<script lang="ts">
  import { onMount } from "svelte";

  const numberOfSecond: number = 5;
  let canNotify: boolean = false;

  onMount(() => {
    if(!("Notification" in window)){
      alert("This browser does not support notifications!");
      return;
    }
    canNotify = Notification.permission === "granted" ? true : false;
    if(canNotify){
      const notification = new Notification("Welcome!");
    }
  });

  function getNotify(){
    alert("Hello");
    Notification.requestPermission().then((value) => {
      canNotify = value === "granted" ? true : false;
    })
  }

  function testNotification(){
    if(canNotify){
      const notification = new Notification("This is a test!");
      alert(`'${notification.title}' has run!`)
    }
  }

  function delayedTestNotification(){
    setTimeout(testNotification, numberOfSecond * 1000);
  }

  function alertedTestNotification(){
    alert("Clicked Test");
    setTimeout(testNotification, numberOfSecond * 1000);
  }
</script>

<main>
<h1>Simple Notification Tester</h1>
{#if !canNotify}
<button on:click={getNotify}>Allow Notification</button>
{:else}
<button on:click={testNotification}>Test Notify</button>
<button on:click={delayedTestNotification}>Test Delayed Notify</button>
<button on:click={alertedTestNotification}>Test Alert Notify</button>
{/if}
</main>