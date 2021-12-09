// this is the common class for making code shorter
class Team {
    name;
    address = 'BD';
    constructor(hisName, hisAddress) {
        this.name = hisName;
        this.address = hisAddress;
    }
}







// uncommon part for supporter
class StudentCare extends Team {
    groupSupportTime;
    designation = 'Support students on time!';
    constructor(hisName, hisAddress, time) {
        super(hisName, hisAddress)
        this.groupSupportTime = time;
    }
    buildRoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}





// uncommon part for mobile developer
class MobileAppDeveloper extends Team {
    makeMobileAppMenu;
    designation = 'Release app with a professional menu bar!';
    constructor(hisName, hisAddress, menu) {
        super(hisName, hisAddress)
        this.makeMobileAppMenu = menu;
    }
    mobile(student) {
        console.log(this.name, 'Build a mobile app for', student);
    }
}





// uncommon part for web developer
class WebDeveloper extends Team {
    makeFaq;
    designation = 'Update website with a FAQ section on time!';
    constructor(hisName, hisAddress, faq) {
        super(hisName, hisAddress)
        this.makeFaq = faq;
    }
    web(student) {
        console.log(this.name, 'Build a website for', student);
    }
}







// supporter
const supporter = new StudentCare('Mr. Bob', 'Toronto', 4);
console.log(supporter);
supporter.buildRoutine('Pitter');



// mobile developer
const appDeveloper = new MobileAppDeveloper('Mr. Jhon', 'Florida', 'Menu Bar Creat');
console.log(appDeveloper);
appDeveloper.mobile('Pitter');



// web developer
const webDeveloper = new WebDeveloper('Mr. Broud', 'London', 'Make an FAQ Section');
console.log(webDeveloper);
webDeveloper.web('Pitter');