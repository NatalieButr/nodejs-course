const validateId = (data, id) => {
    const isValidate= data.find(item => item.id === id);
    return isValidate !== undefined ? isValidate : null;
}


module.exports = {validateId}