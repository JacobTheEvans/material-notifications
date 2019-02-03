import React from 'react'
import { snackbar } from 'material-notifications'

function ExampleComponent () {
  return (
    <button
      onClick={() => {
        snackbar({
          message: 'Example notify with component',
          type: 'info',
          position: 'topRight',
          timeout: 3000
        })
      }}
    >
      Notify with component
    </button>
  )
}

export default ExampleComponent
