class OldXmlService {
    getData() {
        return `<data><value>42</value></data>`;
    }
}

class JsonClient {
    constructor(service) {
        this.service = service;
    }

    showData() {
        console.log(this.service.getData());
    }
}

class XmlToJsonAdapter {
    constructor(xmlService) {
        this.xmlService = xmlService;
    }

    getData() {
        const xml = this.xmlService.getData();
        const value = xml.match(/<value>(.*?)<\/value>/)[1];
        return { value: Number(value) };
    }
}

const xmlService = new OldXmlService();
const adapter = new XmlToJsonAdapter(xmlService);
const client = new JsonClient(adapter);

client.showData(); // { value: 42 }
