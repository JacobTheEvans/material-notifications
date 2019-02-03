# Material Notifications
Javascript library that follows Material Design Philosophy and allows use of
Snackbar, Banners, and Alerts on your website.

## How to use
Install library in your project.

```bash
npm install material-notifications
or
yarn add material-notifications
```

Or download code and use it in your website
```html
<script src='./material/bundle.js' />
```

Import plain functions
```javascript
import {
  snackbar,
  banner,
  alert
} from 'material-notifications'
```
Call function
```javascript
snackbar('Your message!', 'bottomLeft' 'info')
```

Import React Components
```javascript
import {
  SnackbarContainer,
  Snackbar,
  Banner,
  Alert
} from 'material-notifications'
```

Use Component
```jsx
<SnackbarContainer
  position={'bottomLeft'}
>
  <Snackbar
    message={'Your Message!'}
    type={'info'}
    onFinished={() => console.log('Callback for when the component is complete')}
  />
</SnackbarContainer>

```

## Documentation
Todo


## Philosophy
This library follows the Material Design outline for notifying a user of an
event.

### Snackbar
Message informing a user of some event with text. Can be dismissed early but requires no further action, has
different colors for level of message.

https://material.io/design/components/snackbars.html

### Banner
Message the informing a user of some event with text. Must be dismissed
manually by user but further action be taken while it is present.

https://material.io/design/components/banners.html#usage

### Alert
Message informing a user of some event with text. Blocks all further action on
the website until this action is acknowledged.

https://material.io/design/components/dialogs.html#dialogs
