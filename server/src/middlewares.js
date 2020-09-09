const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // next : 현재 라우터에서 판단하지 않고 다음 라우터로 넘기겠다.
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'ㅗ' : error.stack, // 404 에러 발생시 production일 경우 ㅗ, 개발일 경우 error.stack
  });
};

module.exports = {
  notFound,
  errorHandler,
};
