export function searchPackages(text, size, from) {
    return fetch(
        `${process.env.VUE_APP_BASE_URL}/-/v1/search?${
            new URLSearchParams(
                {text, size, from}
            )
        }`
    ).then(res => res.json());
}