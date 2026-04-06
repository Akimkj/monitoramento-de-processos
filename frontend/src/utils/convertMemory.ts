
export function convertBytes(memory: number | undefined) {
    if (memory === undefined) {
        return ""
    }

    if (memory < 1024) {
        return `${memory} B`
    }

    const memKB = memory / 1024;
    if (memKB < 1024) {
        return `${memKB.toFixed(2)} KB`
    }

    const memMB = memKB / 1024;
    if (memMB < 1024) {
        return `${memMB.toFixed(2)} MB`
    }

    const memGB = memMB / 1024;
    return `${memGB.toFixed(2)} GB`
}