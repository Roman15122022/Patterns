class Mediator {
    notify(sender, event) {}
}

class Component {
    constructor(mediator) {
        this.mediator = mediator;
    }
}

class Checkbox extends Component {
    check(isChecked) {
        console.log(`Checkbox set to ${isChecked}`);
        this.mediator.notify(this, 'check', isChecked);
    }
}

class Textbox extends Component {
    setVisible(visible) {
        console.log(`Textbox ${visible ? 'visible' : 'hidden'}`);
    }
}

class Button extends Component {
    click() {
        console.log('Button clicked');
        this.mediator.notify(this, 'click');
    }
}

class AuthDialog extends Mediator {
    constructor() {
        super();
        this.checkbox = new Checkbox(this);
        this.loginUsername = new Textbox(this);
        this.loginPassword = new Textbox(this);
        this.regUsername = new Textbox(this);
        this.regPassword = new Textbox(this);
        this.regEmail = new Textbox(this);
        this.okButton = new Button(this);

        this.showLoginForm();
    }

    notify(sender, event, data) {
        if (sender === this.checkbox && event === 'check') {
            if (data) {
                this.showLoginForm();
            } else {
                this.showRegistrationForm();
            }
        }

        if (sender === this.okButton && event === 'click') {
            if (this.checkboxState) {
                console.log('Perform login...');
            } else {
                console.log('Perform registration...');
            }
        }
    }

    showLoginForm() {
        console.log('Switching to Login Form');
        this.checkboxState = true;
        this.loginUsername.setVisible(true);
        this.loginPassword.setVisible(true);
        this.regUsername.setVisible(false);
        this.regPassword.setVisible(false);
        this.regEmail.setVisible(false);
    }

    showRegistrationForm() {
        console.log('Switching to Registration Form');
        this.checkboxState = false;
        this.loginUsername.setVisible(false);
        this.loginPassword.setVisible(false);
        this.regUsername.setVisible(true);
        this.regPassword.setVisible(true);
        this.regEmail.setVisible(true);
    }
}

const dialog = new AuthDialog();

dialog.checkbox.check(false);

dialog.okButton.click();
