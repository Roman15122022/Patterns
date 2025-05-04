function createChatRoom() {
    let users = [];

    function register(user) {
        users.push(user);
    }

    function sendMessage(from, message) {
        users.forEach(u => {
            if (u.name !== from) {
                u.receive(from, message);
            }
        });
    }

    return { register, sendMessage };
}

function createUser(name, chatRoom) {
    function receive(from, message) {
        console.log(`${name} отримав повідомлення від ${from}: "${message}"`);
    }

    function send(message) {
        chatRoom.sendMessage(name, message);
    }

    return { name, receive, send };
}

const chatRoom = createChatRoom();

const alice = createUser('Alice', chatRoom);
const bob = createUser('Bob', chatRoom);
const charlie = createUser('Charlie', chatRoom);

chatRoom.register(alice);
chatRoom.register(bob);
chatRoom.register(charlie);

alice.send('Привіт, усім!');
bob.send('Привіт, Alice!');
