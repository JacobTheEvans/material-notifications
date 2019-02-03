import { snackbar } from './utils/MaterialControl'
import { Type } from './components/Snackbar'
import { Position } from './components/SnackbarContainer'

snackbar({
  message: 'Test Message',
  position: Position.bottomLeft,
  type: Type.info,
  timeout: 3000
})

snackbar({
  message: 'Test Message',
  position: Position.bottomLeft,
  type: Type.info,
  timeout: 4000
})

snackbar({
  message: 'Test Message',
  position: Position.bottomLeft,
  type: Type.info,
  timeout: 7000
})
