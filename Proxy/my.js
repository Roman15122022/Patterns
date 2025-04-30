function withAuth(fn, userRole) {
    return function proxy(...args) {
        if (userRole !== "admin") {
            console.warn("🚫 Доступ заборонено");
        }

        return fn(...args);
    };
}

function deleteUser(userId) {
    console.log(`✅ Користувача ${userId} видалено`);
}

const deleteUserAsAdmin = withAuth(deleteUser, "admin");
const deleteUserAsGuest = withAuth(deleteUser, "guest");

deleteUserAsAdmin(42);   // ✅ працює
deleteUserAsGuest(42);   // 🚫 помилка доступу
