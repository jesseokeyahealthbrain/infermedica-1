# Infermedica (unofficial)
Node interface to the infermedica REST API https://www.npmjs.com/package/infermedica

## Description

This is a Node interface to the Infermedica REST API: https://developer.infermedica.com/docs/api

## Installation

```npm install infermedica --save```

## Usage examples

#### Estimate triage level based on provided patient information
```js
const Infermedica = require('infermedica')
const infermedica = new Infermedica({ appId: '', appKey: '' })

const context = {
    sex: "male",
    age: 70,
    evidence: [
        {
            "id": "s_1193",
            "choice_id": "present"
        },
        {
            "id": "s_488",
            "choice_id": "present"
        },
        {
            "id": "s_418",
            "choice_id": "present"
        }
    ]
}

infermedica.postTriage(context).then(res => {
    console.log(res)
})

```

## Infermedica Methods

```js

// Returns a list of all available conditions
infermedica.getConditions()

//Returns details of a single condition specified by id parameter 
infermedica.getConditions(conditionId)

// Suggests possible diagnoses and relevant observations
infermedica.postDiagnosis({ sex, age, evidence, extras, target, evaluated_at }) 

// Explains which evidence impact probability of selected condition
infermedica.postExplain({ sex, age, evidence, extras, target, evaluated_at })

// Returns information about data used by diagnostic engine
infermedica.getInfo() 

// Returns a list of all available lab tests
infermedica.getLabTests()

// Returns details of a single lab test specified by id parameter
infermedica.getLabTest(labTestId)

// Returns a single observation matching given phrase
infermedica.getLookUp({ phrase, sex })

// Returns list of mentions of observation found in given text
infermedica.postParse({ text, context, concept_types, correct_spelling, include_tokens })

// Returns a list of all available risk factors
infermedica.getRiskFactors()

// Returns details of a single risk factor specified by id parameter
infermedica.getRiskFactor(riskFactorId) 

// Returns a list of all available risk factors
infermedica.getRiskFactors()

// Returns details of a single risk factor specified by id parameter
infermedica.getRiskFactor(riskFactorId)

// Returns list of observations matching the given phrase
infermedica.getSearch({ phrase, sex, maxResults, type })

// Suggests possible symptoms based on provided patient information
infermedica.postSuggest({ sex, age, evidence, extras, evaluated_at }, max_results)

// Returns a list of all available symptoms
infermedica.getSymptoms()

// Returns details of a single symptom specified by id parameter
infermedica.getSymptom(symptomId)

// Estimates triage level based on provided patient information
infermedica.postTriage({ sex, age, evidence, extras, evaluated_at })

```


