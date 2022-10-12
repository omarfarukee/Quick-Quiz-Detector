import React from 'react';
import ('./Blog.css')
const Blog = () => {
    return (
        <div >
            <div className='ans text-2xl text-white mt-4 font-bold'>
                <h1>Few Regular Asking Qus-Ans</h1>
            </div>
        <div >
            <div className='qus'>
                <h3 className='text-2xl font-bold'>Q- What is the purpose of React router?</h3>
                <h4>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. </h4>
            </div>
            <div className='qus'>
                <h3 className='text-2xl font-bold'>Q- How does context API works ? </h3>
                <h4>  The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. <br />
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </h4>
            </div>
            <div className='qus'>
                <h3 className='text-2xl font-bold'>Q- What is useRef?</h3>
                <h4>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </h4>
            </div>
    </div>
          

        </div>
    );
};

export default Blog;