<script>
    import {selectedPlayerIndex} from "$lib/player.js";

    export let index
    export let player

    function setSelectedPlayerIndex() {
        $selectedPlayerIndex = index
    }

    $: contextualClasses = ($selectedPlayerIndex === index) ?
        "bg-purple-800 text-purple-200"
     : "bg-purple-200 text-purple-800"
</script>

<div class="{contextualClasses} p-4 text-center rounded-md"
     on:click={setSelectedPlayerIndex}>
    <h1 class="text-xl">{$player.name} : {$player.score}</h1>
</div>