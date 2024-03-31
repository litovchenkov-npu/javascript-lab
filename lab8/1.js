class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    toLocaleString(locale) {
        const salutation = this.getSalutation(locale);
        return `${salutation} ${this.lastName}`;
    }

    getSalutation(locale) {
        switch (locale) {
            case 'en':
                if (this.gender === 'female') {
                    if (this.maritalStatus === 'married') {
                        return 'Mrs.';
                    } else {
                        return 'Miss';
                    }
                } else {
                    return 'Mr.';
                }
            case 'de':
                if (this.gender === 'female') {
                    return 'Frau';
                } else {
                    return 'Herr';
                }
            case 'fr':
                if (this.gender === 'female') {
                    return 'Mme';
                } else {
                    return 'M.';
                }
            default:
                return '';
        }
    }
}

const person1 = new Person('John', 'Smith', 'male', 'married');
console.log(person1.toLocaleString('en'));

const person2 = new Person('Emma', 'Müller', 'female', 'single');
console.log(person2.toLocaleString('de'));

const person3 = new Person('Sophie', 'Dupont', 'female', 'married');
console.log(person3.toLocaleString('fr'));