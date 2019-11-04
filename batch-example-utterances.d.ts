type BatchExampleUtterances = {
    text: string,
    intentName: string,
    entityLabels: {
        entityName: string,
        startCharIndex: number,
        endCharIndex: number
    }[]
}[];