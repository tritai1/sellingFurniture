const { body, validationResult } = require('express-validator');

module.exports.validateEmail = [
    body('email')
    .trim()
    .normalizeEmail()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|vn)$/)
    .withMessage('Email không đúng định dạng! Chỉ hỗ trợ tên miền com, net, org, vn.')
  ];
  
  module.exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array()
      });
    }
  
    next();
  };
  

  // giúp lưu email đúng định dạng 