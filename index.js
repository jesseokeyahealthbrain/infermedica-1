const classes = require('extends-classes')
const axios = require('axios')
const {
    Condition,
    Info,
    LabTest,
    LookUp,
    Search,
    RiskFactor,
    Symptom,
    Suggest,
    Explain,
    Parse,
    Diagnosis,
    Triage
} = require('./lib')

const Classes = classes(
    Condition,
    Info,
    LabTest,
    LookUp,
    Search,
    RiskFactor,
    Symptom,
    Suggest,
    Explain,
    Parse,
    Diagnosis,
    Triage
)

class Infermedica extends Classes {
    constructor(options = {}) {
        const { appId, appKey } = options
        const host = 'https://api.infermedica.com/v2'
        axios.defaults.headers.common['app_id'] = appId
        axios.defaults.headers.common['app_key'] = appKey
        super({ host, axios })
    }

    __call(method, args) {
        console.log(`'${method}(${args || ''})' is missing!`);
    }

    _handleError(err) {
       const errType = typeof err
       if (errType === 'object') {}
       console.log(errType)
    }
}

module.exports = Infermedica