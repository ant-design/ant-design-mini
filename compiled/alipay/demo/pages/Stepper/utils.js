export function resolveEventValue(event) {
    if (typeof event.detail !== 'undefined') {
        return event.detail;
    }
    return event;
}
