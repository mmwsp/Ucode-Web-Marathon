exports.getAnonymous = (name, alias, affiliation) => {
    let MandarinClass = class {
       /* #name;
        #alias;
        #affiliation;
        constructor(name, alias, affiliation){
            this.#name = name;
            this.#alias = alias;
            this.#affiliation = affiliation;
        }
        getN() {
            return this.#name;
        }
        getA() {
            return this.#alias;
        }
        getAf() {
            return this.#affiliation;
        }   */

        constructor(name, alias, affiliation){
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;
        }

    }
    return new MandarinClass(name, alias, affiliation);
}