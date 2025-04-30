// Базовий інтерфейс
class Notifier {
    send(message) {
        console.log(`Email: ${message}`);
    }
}

// Базовий декоратор
class NotifierDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }

    send(message) {
        this.notifier.send(message);
    }
}

// Декоратор для SMS
class SMSDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`SMS: ${message}`);
    }
}

// Декоратор для Facebook
class FacebookDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Facebook: ${message}`);
    }
}

// Декоратор для Slack
class SlackDecorator extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Slack: ${message}`);
    }
}

// 👨‍💻 Клієнтський код
let notifier = new Notifier(); // лише email
notifier = new SMSDecorator(notifier); // email + SMS
notifier = new FacebookDecorator(notifier); // email + SMS + Facebook
notifier = new SlackDecorator(notifier); // email + SMS + Facebook + Slack

notifier.send("Пожежа у серверній! 🔥");
