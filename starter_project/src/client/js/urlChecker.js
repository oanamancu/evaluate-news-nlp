function checkURL(inputText) {
    console.log("::: Running urlChecker :::", inputText);
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(inputText)) {
        return true;
    } else {
        return false;
    }
}

export { checkURL };
