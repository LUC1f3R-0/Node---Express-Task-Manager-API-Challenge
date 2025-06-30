const loggerMiddleware = (request, response, next) => {
    // console.log("middleware => loggerMiddleware running")
    const now = new Date().toISOString();
    console.log(`[${now}] ${request.method} ${request.originalUrl}`);
    next();
}

export default loggerMiddleware;