export const onEnter = (e, cb) => {
    if (!isNumber(e.key)) {
        var charCode = (typeof e.which == "undefined")
            ? e.keyCode
            : e.which;
        switch(charCode)
        {
            case 13:
                return cb();
            default:
                e.preventDefault();
                return false;
        }
    }
}