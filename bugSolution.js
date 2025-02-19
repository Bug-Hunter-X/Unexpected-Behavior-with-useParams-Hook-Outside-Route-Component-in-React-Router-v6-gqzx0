The solution is to always use the `useParams` hook inside a component rendered by a route. Here's the corrected code:

```javascript
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const MyComponent = () => {
  const params = useParams();
  console.log(params); // params will be defined here
  return (
    <div>MyComponent: {params.id}</div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}/>
    </Routes>
  );
};
export default App;
```

This ensures that `useParams` is used within the correct context and will provide the expected values.  The `params` object will contain the route parameters.