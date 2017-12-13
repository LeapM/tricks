## what is reducer
reducer is responsbile to convert action into th new state newstate=reducer(oldstate,action)
## reducer must be pure
Given the same arguments, it should calculate the next state and return it. **No surprises**. No side effects. No API calls. No mutations. Just a calculation.
## store shape
In a more complex app, you're going to want different entities to reference each other. We suggest that you keep your state as normalized as possible, without any nesting

