# React Context Store

### A contrived example of how to implement a global state management system using [reducers](https://react.dev/reference/react/useReducer) the [Context API](https://react.dev/reference/react/useContext).

I was inspired to create this repo after completing the Advanced Hooks course of [Epic React](https://epicreact.dev/) to show how it is relatively simple to implement global state management without cumbersome tools like Redux. 

Often, these tools come with advantages such as custom debuggers and the ability to plug in middleware, but they come at a cost. I actually used Redux quite heavily before getting in-depth knowledge about React's Context API. But I never had a true grasp on the inner workings of global state management as the methods were abstracted away. And that was fine with me at the time. But, ultimately, I don't think it's a good idea to not have a solid understanding of such a critical part of your application.

The basic architecture for global state management does not require a third-party library. My intent is to show that here.

## The Store Provider

The `<StoreProvider>` component should wrap every component you want to have access to global state. It comes with two props:

```js
<StoreProvider shouldLog isUndoable >
```

*See `src/App.jsx`*

| Prop | Description |
| --- | --- |
| **`shouldLog`** | Enables logging actions and resulting state. Useful for debugging. |
| **`isUndoable`** | Enables state history. State values are wrapped in a `present` object. `past` and `future` arrays store past and future snapshots of state. |

## Access store data with a hook

#### `[store, dispatch] = useStore()`

Provides access to the global store and a dispatch function. Optionally, you can provide a function to the hook to cherry-pick specific values.

```js
// Grab the whole store object:
const [store, dispatch] = useStore()

// or get more granular:
const [user, dispatch] = useStore( store => store.present.user )
```

## It's important to note...

My example here is completely contrived and I would not actually use Context if this were a real app. It's too simple and can easily be built with local state, composition, and props. 

Brought to you by [Kirk Pettinga](https://www.kirkpettinga.com)