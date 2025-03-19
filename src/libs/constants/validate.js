export const VALIDATE = {
    MINIMUM_ADDRESS_LENGTH: 5,
    MINIMUM_PASSWORD_LENGTH: 6,
    EMAIL_VALIDATE_REGEX: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    PHONE_VALIDATE_REGEX: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
}
export const MESSAGE = {
    EMAIL_REQUIRED: 'Email must not empty',
    EMAIL_INVALID: 'Invalid email',
    PASSWORD_REQUIRED: 'Password must not empty',
    PASSWORD_INVALID: 'Invalid password',
    ADDRESS_REQUIRED: 'Address must not empty',
    ADDRESS_INVALID: 'Invalid address',
    PHONE_REQUIRED: 'Phone must not empty',
    PHONE_INVALID: 'Invalid phone number'
}