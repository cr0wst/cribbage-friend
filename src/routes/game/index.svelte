<script>
    import {createPlayer, players} from "$lib/player.js";
    import Scoreboard from "$lib/Scoreboard/Scoreboard.svelte";

    $players = [
        createPlayer({name: "Player 1", score: 0}),
        createPlayer({name: "Player 2", score: 0}),
    ]
</script>

<Scoreboard/>