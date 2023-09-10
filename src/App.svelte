<script lang="ts">
  const numberOfSecond: number = 5;
  let canNotify: boolean = false;

  function getNotify(){
    alert("Hello");
    Notification.requestPermission().then((value) => {
      if(value === "granted"){
        canNotify = true;
      }
      else {
        canNotify = false;
      }
    })
  }

  function testNotification(){
    if(canNotify){
      const notification = new Notification("This is a test!");
    }
  }

  function delayedTestNotification(){
    setTimeout(testNotification, numberOfSecond * 1000);
  }
</script>

<main>
<h1>Simple Pomodoro Timer</h1>
{#if !canNotify}
<button on:click={getNotify}>Allow Notification</button>
{:else}
<button on:click={testNotification}>Test Notify</button>
<button on:click={delayedTestNotification}>Test Delayed Notify</button>
{/if}
</main>