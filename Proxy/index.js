// Важкий сервісний обʼєкт
class HeavyResource {
    constructor() {
        console.log("⏳ Ініціалізація важкого ресурсу...");
    }

    fetchData() {
        console.log("📦 Дані отримано з важкого ресурсу");
    }
}

// Замісник, який створює важкий обʼєкт лише при потребі
class LazyResourceProxy {
    constructor() {
        this.realResource = null;
    }

    fetchData() {
        if (!this.realResource) {
            this.realResource = new HeavyResource(); // Створюється лише при першому виклику
        }

        this.realResource.fetchData();
    }
}

// Клієнтський код
const resource = new LazyResourceProxy();

// Ніяких логів про ініціалізацію — бо ще не викликали fetchData()
console.log("🔹 Програма запущена");

// Перший виклик — створюється реальний обʼєкт
resource.fetchData(); // ⏳ + 📦

// Другий виклик — вже без повторної ініціалізації
resource.fetchData(); // 📦
