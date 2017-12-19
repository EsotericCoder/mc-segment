# Patterns

## Creating an Observer
An observer is a pattern that allows you to listen to events transmitted by this module. This is similar to how we have used `$('body').trigger('eventName')` in the past. Instead of being attached to a global object, Observers are scoped to your module.

### Initialize the Observer
```js
import Observer from './utilities/Observer'

const myModule = () => {
  return {
    // create the observer
    onThing: new Observer,
    // when doThing is called, the observer will fire
    doThing () {
      this.onThing.fire({ foo: 'bar' })
    }
  }
}
```
### Subscribe to the Observer
```js
myModule.onThing.subscribe((data) => {
  console.log('thing fired!')
})

```
