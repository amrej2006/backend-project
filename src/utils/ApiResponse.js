class ApiResponse {
    constructor(status, data, message = "success"){
        this.statusCode = this.statusCode
        this.data= data
        this.message = message
        this.success = this.statusCode < 400
    }
}