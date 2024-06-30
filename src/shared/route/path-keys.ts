export const PATH_KEYS = {
    root: '/',
    main() {
        return PATH_KEYS.root
    },
    search() {
        return PATH_KEYS.root.concat('search')
    },
    product() {
        return PATH_KEYS.root.concat('product')
    },
    user() {
        return PATH_KEYS.root.concat('user')
    },
    signUp() {
        return PATH_KEYS.user().concat('sign-up')
    },
    signIn() {
        return PATH_KEYS.user().concat('sign-in')
    },
}
