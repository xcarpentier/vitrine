#!/usr/bin/env node
const axios = require('axios')
  //
  //
  //
;(async function() {
  const { data } = await axios.post(
    'http://localhost:9000/.netlify/functions/notification',
    {
      text: 'test',
    },
  )
  console.warn(JSON.stringify(data))
})()
