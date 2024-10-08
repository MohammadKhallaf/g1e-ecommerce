# ECommerce App

m{}-{} -> margin
p{}-{} -> padding
g      ->


# How to create a react app?

```jsx
function ComponentName(){
  return (<>...</>)
}

const ComponentName = ()=>{
  return (<>...</>)
}

export default ComponentName; // one export default per file
```
`import ComponentName for './path'`

```jsx
export const ComponentName ->
import {ComponentName} for './path'
```


```jsx
// how to use it?
<ComponentName />

```

- PascalCase (start with capital case) 


# Component State
- prop <== from parent
``


# in arrays
- key

# How to use react-bootstrap
1. install `npm install react-bootstrap bootstrap`
2. add the css file in `index.js` --> `import 'bootstrap/dist/css/bootstrap.min.css';`
3. import your component when needed


----------------- 07 sept.
# Navigating
- react router dom -> install
- ```jsx
<BrowserRouter>
  </BrowserRouter>```


# properties
- as={Component} ..

# VS shortcuts
- remove unused imports :
  `shift + alt + O`


# browser storage
- localStorage
  - `localStorage.setItem("key",value (must be string))

# component life cycle
1 - initial render (1st render) -> []
```js
useEffect(()=>{
  // code block
},[])
```
2 - update (in state) -> [state]
```js
useEffect(()=>{
  // code block
  
},[state])
```
3 - destroy | un-amount
```js
useEffect(()=>{

  return ()=>{
    // code will run on destroy
    // clean
  }
},[])
```

4 - on each render
```js
useEffect(()=>{
// code block
})
```
# optimization techniques
- **useMemo** -> value
  - useMemo(()=>{ return value},[])
- **useCallback** -> function
     - useCallback(()=>{ },[])
- memo -> memo(React Component) -> listen to the changes in the prop


# Local Storage data <-->

# write to local storage

- read <- state
- stringify -> convert to string `JSON.strigify(data)`
- write -> local storage
`localStorage.setItem("key",convertedData)`


# read from local storage
- read <- local storage `localStorage.getItem("key")`
- parse `JSON.parse(data)`
- write -> state



---
## 13 Sept.

### Wishlist functionality
-> state 
1. create state 
- add 
- remove

## Optimization

## UUID


## Dynamic Route
- define `<Route path=":id" element={<ReactComponent/>}`
- use / read dynamic value (id) -> `useParams` -> `params.id`

---
# 13 sept task
1- fix add comment
2-

___

## Projects
- Meals -> reciepe -> [add meal] -> products , filter
- Electronics
- Bookstore -> categories -> cart
- task flow 
  - admin / employee
- E learnings
- Cars
- Resturant

Pages 

- each member -> one page UI & logic

2 / 2 

- 2 -> UI (x,y) || 2 -> logic (z,r)
- 2 -> UI (z,r) || 2 -> logic (x,y)

|> gallery & cart     ->
|> gallery & wishlist ->


## 14 sept. 
- products provider && comments fix
- axios && BE integration --> `npm install axios`

## Protected Route
- Protected Component `element={user ? <CheckoutPage /> : <LoginPage />}`
-
```jsx 
if (user) return children; // routes --> render
  return <Navigate to="/login" />;
  ```

- component composition -> {children}
  - layouts