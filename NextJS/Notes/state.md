
# state: 
- state is peace of data that can change over time and afects user experience
# State Managements
- state management is a way to store, update and share state with multiple components.

# Typs of State
1. Local State : useStat(): normal state, useReducer(): complex state
2. Global State : useContext(): normal and  Zustand for complex state like for Cart, Auth, Theme
3. Derived State : filter data based on condition
4. Server state : deling with data
5. URL State : 

# In nextjs we can manage state in several ways

1. useState(): 
- use for small isolated UI logic
- ex: model, counter, form

2. useContext()
- use for simple global state 
- ex: cart, theme, auth status

3. useReducer()
4. Zustate(): external library