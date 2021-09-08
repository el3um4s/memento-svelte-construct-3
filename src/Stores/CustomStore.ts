import { writable, Writable} from "svelte/store";

const s:Writable<boolean> = writable(false);

const cs = {
    subscribe: s.subscribe,
    true: () => s.set(true),
    false: () => s.set(false)
}

export default cs;