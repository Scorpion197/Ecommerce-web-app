
class Helper {

    constructor() {

        this.isAuthenticated = false;
    }

    setAuthenticationStatus() {

        if (sessionStorage.getItem('token') != null)

            this.isAuthenticated = true;
    }

    getAuthenticationStatus() {

        if (sessionStorage.getItem('token') != null)
            return true;
        
        return false;
    }
}

export default Helper;