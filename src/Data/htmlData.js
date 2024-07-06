
// image-data
import img_1 from '../topic-images/html/01-tags.png'
import img_2 from '../topic-images/html/02-attributes.png'
import img_3 from '../topic-images/html/03-order-unorder.png'
import img_4 from '../topic-images/html/04-table.png'

export const html = [
  //01-Html tags
  {id: 0,
    topic: 'Html tags',
    question: '', 
    studyMaterial: `HTML tags are markers used to define elements within a web page. They structure content by indicating how different parts of the page should be displayed. Each tag is enclosed in angle brackets, like <tagname>, and usually comes in pairs to enclose content, such as.`,

    example: ' <openingtag>content</closingtag>',

    img: img_1,

    video: ''
  },

   //02-Html attributes
  {id: 1,
    topic: 'HTML attributes', 
    question: '', 
    studyMaterial: 'HTML attributes are extra pieces of information added to HTML elements to modify their behavior or appearance. They are placed inside the opening tag of an element and consist of a name and a value.',

    example: 'In the <a> tag below, the href attribute specifies the destination URL when the link is clicked: <a href="https://example.com">Visit Example</a>',

    img: img_2,
    video: ''
  },

   //02-order list and unordered list in html.
  {id: 2,
    topic: 'order VS unordered list', 
    question: '', 
    studyMaterial: 'In HTML, ordered lists (<ol>) and unordered lists (<ul>) are used to display lists of items, but they differ in how they organize and present those items:',

    example: `
    Ordered List (<ol>):
    <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  //

  Unordered List (<ul>):
  <ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
  `,
    img: img_3,
    video: ''
  },

     //03-HTML Table
     {id: 3,
      topic: 'HTML Table', 
      question: '', 
      studyMaterial: 'In HTML, a table is used to display data in a structured format of rows and columns. Here’s a simple way to create and display a table:',
  
      example: `
      <table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>25</td>
    <td>Los Angeles</td>
  </tr>
</table>
      `,
      img: img_4,
      video: ''
    },
]