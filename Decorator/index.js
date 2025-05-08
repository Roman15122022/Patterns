class Notifier {
    send(message) {
        console.log(`Email: ${message}`);
    }
}

class NotifierDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }

    send(message) {
        this.notifier.send(message);
    }
}

class SMSDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`SMS: ${message}`);
    }
}

class FacebookDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Facebook: ${message}`);
    }
}

class SlackDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Slack: ${message}`);
    }
}

let notifier = new Notifier();
notifier = new SMSDecorator(notifier); // email + SMS
notifier = new FacebookDecorator(notifier); // email + SMS + Facebook
notifier = new SlackDecorator(notifier); // email + SMS + Facebook + Slack

notifier.send("Пожежа у серверній! 🔥");
