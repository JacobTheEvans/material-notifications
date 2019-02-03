# Material Notifications
Javascript library that follows the Material Design Philosophy and allows use of
Snackbar, Banners, and Alerts on your website.

Download package from [npm](https://www.npmjs.com/package/material-notifications)

<aside class="notice">
This library is still in development and is not considered ready for use in production
</aside>

## Todo
### Snackbar
- [x] Create components
- [x] Create control function
- [x] Add example of basic use for vanilla Javascript
- [x] Add example of basic use for React Javascript
- [ ] Add example of basic use for React Typescript
- [ ] Create controlled components
- [ ] Add example of advanced use for React Javascript
- [ ] Add example of advanced use for React Typescript
- [ ] Add documentation to README.md

### Banner
- [ ] Create components
- [ ] Create control function
- [ ] Add example of basic use for vanilla Javascript
- [ ] Add example of basic use for React Javascript
- [ ] Add example of basic use for React Typescript
- [ ] Create controlled components
- [ ] Add example of advanced use for React Javascript
- [ ] Add example of advanced use for React Typescript
- [ ] Add documentation to README.md

### Alert
- [ ] Create components
- [ ] Create control function
- [ ] Add example of basic use for vanilla Javascript
- [ ] Add example of basic use for React Javascript
- [ ] Add example of basic use for React Typescript
- [ ] Create controlled components
- [ ] Add example of advanced use for React Javascript
- [ ] Add example of advanced use for React Typescript
- [ ] Add documentation to README.md

## How to use

### Vanilla
<aside class="notice">
Example can be found in /examples/vanilla
</aside>

Download the library and add it to your html file.
```html
<script src='./vanilla-material-notifications.js' />
```

Call notification functions.
```javascript
snackbar({
  type: 'plain',
  position: 'bottomLeft',
  message: 'Hello this is a plain message',
  timeout: 3000
})
```

### React
<aside class="notice">
Example can be found in /examples/react-javascript
</aside>

Add library to your project.
```bash
npm install material-notifications
or
yarn add material-notifications
```

Import plain functions.
```javascript
import { snackbar } from 'material-notifications'
```
Call notification functions.
```javascript
snackbar('Your message!', 'bottomLeft' 'info', 2000)
```

`How to import and use components coming soon...`

## Philosophy
This library follows the Material Design outline for notifying a user of an
event.

### Snackbar
Message informing a user of some event with text. Can be dismissed early but
requires no further action, and has different colors for level of message.

https://material.io/design/components/snackbars.html

### Banner
Message the informing a user of some event with text. Must be dismissed
manually by user but further action be taken while it is present.

https://material.io/design/components/banners.html#usage

### Alert
Message informing a user of some event with text. Blocks all further action on
the website until this action is acknowledged.

https://material.io/design/components/dialogs.html#dialogs
