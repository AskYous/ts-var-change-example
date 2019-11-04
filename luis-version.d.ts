interface LuisVersion {
    luis_schema_version: "3.2.0";
    versionId: string;
    name: "flex-o";
    desc: string;
    culture: "en-us";
    tokenizerVersion: "1.0.0";
    intents: { name: string }[];
    entities: { name: string; roles: any[] }[];
    composites: any[];
    closedLists: any[];
    patternAnyEntities: any[];
    regex_entities: any[];
    prebuiltEntities: {
        name: string,
        roles: any[]
    }[];
    model_features: any[];
    regex_features: any[];
    patterns: any[];
    utterances: {
        text: string,
        intent: string,
        entities: {
            entity: string;
            startPos: number;
            endPos: number;
        }[]
    }[];
    settings: any[]
}