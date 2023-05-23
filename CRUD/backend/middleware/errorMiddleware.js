/*it is used for express errorcode in json format */

const errorHandler=(err, req, res, next)=>{
    const statusCode = res.statusCode   /*we can use error no 500 instead of error code */

    res.status(statusCode)

    res.json({
        messgae:err.message,
        stack:process.env.NODE_ENV === 'production' ? null : err.stack,
    });

};

module.exports = {
    errorHandler,
}