
class Helper {

    constructor() {

        this.isAuthenticated = false;
    }

    setAuthentication() {

        if (sessionStorage.getItem('token'))

            this.isAuthenticated = true;
    }
    
    isLoggedIn() {

        return this.isAuthenticated;
    }

}

export default Helper;