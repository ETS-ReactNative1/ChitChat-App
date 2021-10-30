const isValid = (value) => {
    return value === '' || value === null || value === undefined
        ? false
        : true
}

export {
    isValid
}