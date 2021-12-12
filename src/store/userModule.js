export const userModule = {
    namespaced: true,
    state: () => ({
        isAuth: false,
        userData: [],
    }),
    getters: {

    },
    mutations: {
        ADD_USER: (state, user) => {
            state.userData.push(user)
        },
        SIGN_OUT: (state, user) => {
            state.userData = user
        },
    },
    actions: {
        getUsers() {

        }
    }
};