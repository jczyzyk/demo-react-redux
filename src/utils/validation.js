export const isUrl = (str='') => {
    if(str.length == 0) return true;

    if(str.indexOf('http') == -1)
    {
        str = 'http://' + str;
    }
    var pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    if (!pattern.test(str)) {
        return false;
    } else {
        return true;
    }
}

export const isEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);


