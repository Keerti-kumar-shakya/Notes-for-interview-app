import img from '../topic-images/javascript/javascript.png'

// images of js
import img_js_1 from '../topic-images/javascript/01-object-img-example.png';
import img_js_2 from '../topic-images/javascript/02-this-keyword.png'
import img_js_4 from '../topic-images/javascript/04-settimeout.png'
import img_js_5 from '../topic-images/javascript/05-eventLoop.png'
import img_js_6 from '../topic-images/javascript/06-micro-task.png'
import img_js_7 from '../topic-images/javascript/07-placement-async-defer-load-delay.jpg'


export const javascript = [
  {id: 0,
    topic: 'JavaScript object',
    question: 'What is a JavaScript object? What are the different ways to create it?', 
    studyMaterial: `A JavaScript object is a data structure that stores key-value pairs. You can create objects in several ways: Object Literal, Object Constructor, Object.create(), Class Constructor.`,

    example: `
  `,

    img: img_js_1,

    video: ''
  },
  //
  {id: 1,
    question: 'How do you figure out the scope of variables in JavaScript?', 

    topic: 'scope in JavaScript', 

    studyMaterial: `The scope of a variable in JavaScript refers to the regions of the code from where the variable is accessible. There are two types of scope in JavaScript: global scope and local scope.`,
    example: `
   
    Global scope: It refers to using the global variables that exist outside of any function or block of code. This means that you can access them from anywhere in the code.

    Local scope: It refers to using local variables that have scope inside of a function or block of code. This means that you can only access them from within the function or block of code in which they exist.
    `,
    img: '',
    video: ''
  },
  //
  {id: 2,
    question: 'What is <this> keyword in JavaScript?', 
    
    topic: '<this> keyword', 

    studyMaterial: `The this keyword in JavaScript refers to the current context or object, which depends on how and where it is used `,

    example: ``,

    img: img_js_2,

    video: 'https://youtu.be/gvicrj31JOM?feature=shared'
  }
  //
  , {id: 3,
    question: 'What does the “prototype” property do in JavaScript?', 
    
    topic: 'prototype', 

    studyMaterial: `The prototype property in JavaScript enables objects to inherit methods and properties. You use it to add functions or attributes that other objects can share.`,

    example: ``,

    img: img_js_2,

    video: 'https://youtu.be/eDxrLEQbLv0?feature=shared'
  },

  {id: 4,
    question: 'what is Settimeout 0 in js?', 
    
    topic: 'Settimeout 0', 

    studyMaterial: `setTimeout(0) in JavaScript is used to delay the execution of a function until the current call stack is cleared, even though the delay is set to 0 milliseconds. This effectively defers the function execution, allowing the browser to complete any pending tasks, such as rendering updates, before the function is called. It's often used to break up long operations or to ensure code runs asynchronously.
    `,

    example: ``,

    img: img_js_4,

    video: 'https://youtu.be/Ruq4sEw9h_8?feature=shared'
  },

  {id: 5,
    question: 'What is Event loop in js?', 
    
    topic: 'Event Loop', 

    studyMaterial: `The event loop in JavaScript is a mechanism that handles asynchronous operations. It continuously checks the call stack and the message queue, executing tasks from the queue only when the call stack is empty. This allows JavaScript to perform non-blocking operations, like handling user input or making network requests, while still running single-threaded.
    `,

    example: ``,

    img: img_js_5,

    video: 'https://youtu.be/vFJbKR6zfCE?feature=shared'
  },

  {id: 6,
    question: 'What is Micro task in js?', 
    
    topic: 'Micro task', 

    studyMaterial: `In JavaScript, a microtask is a type of task that is executed at the end of the current operation, before the next event loop iteration. Examples of microtasks include promise callbacks (.then, .catch, .finally), and MutationObserver callbacks. They have higher priority than macrotasks and are used to handle asynchronous code efficiently without waiting for the event loop to complete a full iteration.
    `,

    example: ``,

    img: img_js_6,

    video: 'https://youtu.be/Rpb-hZjw--w?feature=shared'
  },

  {id: 7,
    question: 'What is Micro task in js?', 
    
    topic: 'Async, defer, delay load', 

    studyMaterial: `This summary helps in choosing the right script loading strategy for better performance and user experience.
    `,

    example: ``,

    img: img_js_7,

    video: 'https://youtu.be/BMuFBYw91UQ?feature=shared'
  }
]