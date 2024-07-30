const { body, validationResult } = require('express-validator');

exports.validateUser = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('name').not().isEmpty().withMessage('Name is required'),
    body('mobile').isMobilePhone().withMessage('Mobile number is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateExpense = [
    body('description').not().isEmpty().withMessage('Description is required'),
    body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than zero'),
    body('method').isIn(['equal', 'exact', 'percentage']).withMessage('Method is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
