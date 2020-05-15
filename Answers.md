- [ 1 ] What problem does the context API help solve?

1a. It stops the required prop flow that is sometimes referred to as 'prop drilling'.  It allows you to store data on a context object and retrieve that data from there, rather than props.  

- [ 2 ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

2a.  Actions contain information that you want to add to the state.  Reducers listen for actions and update the state.  The store holds the redux state and acts as sort of a middleman for actions and reducers.  The store is known as the single source of truth because it is accessible to any component that chooses to subscribe to it.  

- [ 3 ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

3a.  Application state is global (all components can access it) while component state is local and passes down information via props.  In larger applications where data is being shared across many components, you should think about using something like redux to maintain application state.   

- [ 4 ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

4a.  Redux-thunk is a middleware that allows you to handle async operations inside of action-creators.  It intercepts the normal redux flow and can make a call before actions make it to the reducer.

- [ 5 ] What is your favorite state management system you've learned and this sprint? Please explain why!

5a.  At the moment I'm enjoying useContext more.  I see the power of Redux and can see how extremely useful it is but due to my experience it is a little overwhelming for now.  If I were more experienced in both, I'd probably try to master Redux.