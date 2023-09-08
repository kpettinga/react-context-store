# React Context Store

### A contrived example of how to implement a global state management system using [reducers](https://react.dev/reference/react/useReducer) the [Context API](https://react.dev/reference/react/useContext).

I was inspired to create this repo after completing the Advanced Hooks course of [Epic React](https://epicreact.dev/) to show how it is relatively simple to implement global state management without cumbersome tools like Redux. 

Often, these tools come with advantages such as custom debuggers and the ability to plug in middleware, but they come at a cost. I actually used Redux quite heavily before getting in-depth knowledge about React's Context API. But I never had a true grasp on the inner workings of global state management as the methods were abstracted away. And that was fine with me at the time. But, ultimately, I don't think it's a good idea to not have a solid understanding of such a critical part of your application.

The basic architecture for global state management does not require a third-party library. My intent is to show that here.

## Features

**Logger**: Logs your current state to the console whenever state updates. Useful for debugging.

**Undo/Redo with state history**: The ability to cycle through state history and add to history with every update.

## Hooks

**`[foo, dispatch] = useStore(state => state.foo)`**: Provides access to state and a dispatch function. 

**`{login, logout} = useAuth()`**: Easy methods for login and logout

## It's important to note...

My example here is completely contrived and I would not actually use Context if this were a real app. It's too simple and can easily be built with local state, composition, and props. 

Written by [Kirk Pettinga](https://www.kirkpettinga.com), 2023