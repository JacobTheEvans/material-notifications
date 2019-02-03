import React from 'react'
import { snackbar } from 'material-notifications'

function ExampleFunction () {
  return (
    <button
      onClick={() => {
        snackbar({
          message: 'Example notify with function',
          type: 'plain',
          position: 'bottomLeft',
          timeout: 3000
        })
      }}
    >
      Notify with function
    </button>
  )
}

export default ExampleFunction
