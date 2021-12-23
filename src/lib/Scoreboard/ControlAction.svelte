<script>
    export let points
    export let name
    export let player

    function click() {
        player.addPoints(points)
    }
</script>

<button on:click={click} class="border min-h-16">
    {name}
</button>