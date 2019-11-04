import { EMPLOYEES } from "./employee-names";

export const app: App = {
    entities: {
    },
    intents: {
    },
    patterns: [
    ]
};

interface App {
    entities: { [name: string]: string[] };
    intents: {
        [name: string]: {
            training: string[];
            validation: string[];
        };
    };
    patterns: {
        pattern: string;
        intent: string;
    }[];
}
