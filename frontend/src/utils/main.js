export function truncate(title) {
    return `${title.length > 16 ? `${title.slice(0, 16)}...` : title}`
}

export function isAuthPage() {
    const path = window.location.pathname;
    if (path === "/login" || path === "/sign") {
        return true;
    }
}