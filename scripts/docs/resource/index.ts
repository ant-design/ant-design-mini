import type { IResource } from "../types/index";

export class Resource implements IResource {
    class: string[];
    slot: { key: string; value: string; }[][];
    constructor() {
        this.class = []
        this.slot = []
    }
    addClass(val: string[]) {
        this.class.push(...val)

    }
    addSlot(val: { key: string; value: string; }[]) {
        this.slot.push(val)
    }
    reset() {
        this.class.length = 0
        this.slot.length = 0
    }
}