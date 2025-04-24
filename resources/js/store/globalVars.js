const global={
    login(token){
        localStorage.setItem("token",token);
    },
    logout(){
      localStorage.removeItem("token");
    },
    getAuthToken(){
        return localStorage.getItem("token");
    },
    isAuthenticated(){
        return !!this.getAuthToken();
    },


}

export default global;
