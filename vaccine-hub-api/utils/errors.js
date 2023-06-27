



class ExpressError extends Error {
     constructor(message, status) {
        super()

        this.message = message
        this.status = status    
     }
}



class BadRequest extends Error {
    constructor(message = "Bad Request"){
        super(message, 400)
    }
}


class UnauthorizedError extends Error {
    constructor(message = "Not Authorized"){
        super(message, 402)
    }
}



class  NotFoundError extends ExpressError {
    constructor(message = "Not Found"){
    super(message, 404)
    }
}




module.exports  = {NotFoundError, BadRequest, UnauthorizedError}