import {writable} from "svelte/store";

export let players = writable([])

export let selectedPlayerIndex = writable(0)

export function createPlayer(player) {
    const {subscribe, update} = writable(player);

    return {
        subscribe,
        addPoints: (points) => update(n => {
            n.score += points
            return n
        }),
        removePoints: (points) => update(n => {
            n.score -= points
            return n
        }),
        resetScore: () => update(n => {
            n.score = 0
            return n
        })
    };
}
