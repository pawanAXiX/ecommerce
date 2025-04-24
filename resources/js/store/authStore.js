export const authStore = {
    setAuthToken(token) {
        localStorage.setItem("token", token);
    },
    removeAuthToken() {
        localStorage.removeItem("token");
    },
    getAuthToken() {
        return localStorage.getItem("token");
    },
    isAuthenticated() {
        return !!this.getAuthToken();
    },
}
