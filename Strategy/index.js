class RouteStrategy {
    buildRoute(start, end) {
        throw new Error('This method should be implemented by subclasses');
    }
}

class CarRouteStrategy extends RouteStrategy {
    buildRoute(start, end) {
        console.log(`Building a car route from ${start} to ${end}`);
    }
}

class WalkingRouteStrategy extends RouteStrategy {
    buildRoute(start, end) {
        console.log(`Building a walking route from ${start} to ${end}`);
    }
}

class BicycleRouteStrategy extends RouteStrategy {
    buildRoute(start, end) {
        console.log(`Building a bicycle route from ${start} to ${end}`);
    }
}

class Navigator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    buildRoute(start, end) {
        this.strategy.buildRoute(start, end);
    }
}

const navigator = new Navigator(new CarRouteStrategy());

navigator.buildRoute('Kyiv', 'Lviv'); // Using car route

navigator.setStrategy(new WalkingRouteStrategy());
navigator.buildRoute('Opera House', 'Market Square'); // Using walking route

navigator.setStrategy(new BicycleRouteStrategy());
navigator.buildRoute('Park', 'Museum'); // Using bicycle route
