# codingtemple-mechanic-shop-frontend

Use React to  start the process of creating a front end for your Mechanic Workshop Flask Backend.
React Homework

Using React start the process of creating a front end for your Mechanic Workshop Flask Backend.

## Flask Touch-Up

Before starting please ensure that you have CORS active on your Flask Server. To ensure that you do follow these steps:

In you flask app:

```bash
pip install flask-cors

pip freeze > requirements.txt
```

From flask_cors import CORS (on your app __init__.py file)

Add: CORS(app) inside your create_app() under your apps initialization.

*If you don’t have your app deployed you can still do this homework, you will just have to run your flask app locally and make API requests from your react app to your localhost:5000 (similar to how we do in postman)

## React Front End

Similar to what we did in class this past week create a Front-end for your Mechanic shop API

__Basic Requirements:__

- Utilization of CRUD endpoints for mechanics
- Register a Mechanic
- Be able to log a mechanic in
- View the mechanics profile
- Update the Mechanic
- Delete the Mechanic

### BONUS

Display Mechanic tickets

## React Toolbelt

__React-router-dom:__

- BrowserRouter: wraps around whole app to create routing network
- Routes: component that wraps around your individual routes
- Route: established a path (endpoint) to an element (view aka a page)

__useEffect:__

- Handles side effects
- [] : empty dependency array will trigger useEffect only on mount
- [value1, value2] : will trigger useEffect on mount and when any of the values are updated
- Commonly used to handle API requests
- DONT BE AFRAID TO REFERENCE HOW THEY ARE USED

__useState:__

- Return an array with a state value and a set state function
- Always use the set state function to update the state value
- Set state functions trigger a rerender of the component NOT A REFRESH PRESERVING STATE AND SHOWING UPDATES
- const [value, setValue] = useState(‘’);
- Parameters of useState are the default values

__useContext:__

- Creates a cloud of data that can be accessed at any level of the app
- Solves the problem of prop drilling
- Useful for theme setting and auth

__Controlled Components (FORMS):__

- Components that have forms should be controlled
- Whenever the input value changes the state value should be changed
- Whenever the state value changes the input value should be changed

__Pages (Views):__

- Collection of components (the actual pages that should be navigated to)

__Component:__

- Individual unit
- Forms
- Buttons
- Partial displays
- Cards
