const houseMixin = {

    wordReplace(old, newWord) {
        let newDescp = this.description.replace(old, newWord);
        this.description = newDescp;
        return this.description;
    },

    wordInsertAfter(word, afterWord) {
        let newDescp = this.description.replace(word, word + " " + afterWord);
        this.description = newDescp;
        return this.description;
    },
    
    wordDelete(wd) {
        let newDescp = this.description.replace(wd, "");
        this.description = newDescp;
        return this.description;
    },

    wordEncrypt() {
        let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        return this.description = this.description.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    },

    wordDecrypt() {
        let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        return this.description = this.description.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    },

};