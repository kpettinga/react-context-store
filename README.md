# React Context Store

A contrived example of how to implement a global state management system using React's native APIs. Particularly, the [Context API](https://react.dev/reference/react/useContext) and the [`useReducer`](https://react.dev/reference/react/useReducer) hook. 

I was inspired to create this repo after completing the Advanced Hooks course in Epic React to show how it is relatively simple to implement global state management without cumbersome tools like Redux. Redux does, however, comes with some advantages such as the ability to plug in middleware, async methods for updating state (thunks), among others. But the basic architecture for global state management does not require a lot of overhead. My intent was to show that here.

Written by [Kirk Pettinga](https://www.kirkpettinga.com), 2023