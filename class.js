class Workers {
    name;
    job;
    address;
    constructor(workerName, workerJob, workerAddress) {
        this.name = workerName;
        this.job = workerJob;
        this.address = workerAddress;
    }
    startWork() {
        console.log(this.name, 'Start Your Duty!');
    }
}

const worker1 = new Workers('MD Sanju', 'Web Developer', 'Vancouver, BC');
console.log(worker1);
worker1.startWork();

const worker2 = new Workers('Munia', 'Cook Biriyani & Make BBQ', 'Vancouver, BC');
console.log(worker2);
worker2.startWork();



// another class example
class BackEndDeveloper {
    name;
    work = 'Apply JavaScript Programming Language!';
    address = 'Canada, BC'
    constructor(developerName, developerAddress) {
        this.name = developerName;
        this.address = developerAddress;
    }
    makeWebsite(client) {
        console.log(this.name, "Start making website for your client", client);
    }
}

const developer1 = new BackEndDeveloper('MD Sanju', 'Vancouver, BC');
console.log(developer1);
developer1.makeWebsite('Mr. Bob');