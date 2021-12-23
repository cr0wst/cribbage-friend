<script>
    import {players, selectedPlayerIndex} from "$lib/player.js";
    import PlayerTab from "$lib/Scoreboard/PlayerTab.svelte";
    import ControlPanel from "$lib/Scoreboard/ControlPanel.svelte";
</script>

<div class="w-full">
    <div class="grid grid-cols-2 justify-center p-2">
        {#each $players as player, i}
            <PlayerTab bind:player index="{i}"/>
        {/each}
    </div>

    <div class="p-2">
        <ControlPanel player="{$players[$selectedPlayerIndex]}"/>
    </div>
    <div class="p-2 w-1/2 items-center justify-center mx-auto">
        <button class="border p-4 w-full m-4 mx-auto" on:click={() => {$players[$selectedPlayerIndex].resetScore()}}>Reset
            Score
        </button>
    </div>
</div>
