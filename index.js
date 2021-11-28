'use strict'

const core = require('@actions/core')
const envsub = require('envsub')

async function run() {
  try {
    const templateFile = core.getInput('templateFile', { required: true })
    const outputFile = core.getInput('outputFile')
    const protect = core.getBooleanInput('export')
    const syntax = core.getInput('syntax')

    await envsub({
      templateFile,
      outputFile,
      protect,
      syntax,
    })
  }
  catch (err) {
    core.setFailed(err.message)
  }
}

if (require.main === module) {
  run()
}
