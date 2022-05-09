var imUndefined,
    imNull = null;

function defaultParameters(param) {
    if (param === undefined) {
        param = "someValueWeSet";

    }
    return param
};