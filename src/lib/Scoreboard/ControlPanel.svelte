<script>
    import ControlAction from "$lib/Scoreboard/ControlAction.svelte";

    export let player

    const scoreShortcuts = [
        {name: "Fifteen", points: 2},
        {name: "Pairs", points: 2},
        {name: "Three of a Kind", points: 6},
        {name: "Four of a Kind", points: 12},
        {name: "Run of Three", points: 3},
        {name: "Run of Four", points: 4},
        {name: "Double Run of Three", points: 8},
        {name: "Double Run of Four", points: 10},
        {name: "Triple Run of Three", points: 15},
        {name: "Quadruple Run of Three", points: 16},
        {name: "Four Card Flush", points: 4},
        {name: "Five Card Flush", points: 5},
        {name: "Suited Jack", points: 1}
    ]

    const fixedScoreButtons = [
        {name: "-5", points: -5},
        {name: "-2", points: -2},
        {name: "-1", points: -1},
        {name: "+1", points: 1},
        {name: "+5", points: 5},
        {name: "+2", points: 2}
    ]

    const playOnlyButtons = [
        {name: "Fifteen", points: 2},
        {name: "Thirty-One", points: 2},
        {name: "Last Card", points: 1},
        {name: "Jack Starter", points: 1},
        {name: "Pairs", points: 2},
        {name: "Three of a Kind", points: 6},
        {name: "Four of a Kind", points: 12},
        {name: "Run of Three", points: 3},
        {name: "Run of Four", points: 4},
    ]
</script>
<div class="text-center">
    <h2 class="text-xl font-bold">Play</h2>
    <div class="grid grid-cols-3 p-2 gap-1">
        {#each playOnlyButtons as shortcut}
            <ControlAction bind:name={shortcut.name} bind:points={shortcut.points} bind:player/>
        {/each}
    </div>
    <h2 class="text-xl font-bold">Show</h2>
    <div class="grid grid-cols-4 p-2 gap-1">
        {#each scoreShortcuts as shortcut}
            <ControlAction bind:name={shortcut.name} bind:points={shortcut.points} bind:player/>
        {/each}
    </div>

    <div class="grid grid-cols-6 p-2 gap-2">
        {#each fixedScoreButtons as shortcut}
            <ControlAction bind:name={shortcut.name} bind:points={shortcut.points} bind:player/>
        {/each}
    </div>
</div>