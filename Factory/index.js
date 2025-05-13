class Transport {
    deliver() {
        throw new Error("Method 'deliver()' must be implemented.");
    }
}

class Truck extends Transport {
    deliver() {
        console.log("Доставка вантажівкою по суші.");
    }
}

class Ship extends Transport {
    deliver() {
        console.log("Доставка судном по морю.");
    }
}

class Logistics {
    createTransport() {
        throw new Error("Method 'createTransport()' must be implemented.");
    }

    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}

function clientCode(logistics) {
    logistics.planDelivery();
}

console.log("=== Сухопутна логістика ===");
const roadLogistics = new RoadLogistics();
clientCode(roadLogistics);

console.log("\n=== Морська логістика ===");
const seaLogistics = new SeaLogistics();
clientCode(seaLogistics)