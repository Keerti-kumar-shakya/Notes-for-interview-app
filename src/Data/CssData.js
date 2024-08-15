import img_3 from '../topic-images/css/03-fall-back-font.jpg';
import img_4 from '../topic-images/css/04-inline-inline-block.jpg';

export const css = [
  {id: 0,
    question: `What is WCAG ?`,
    topic: 'WCAG', 
    studyMaterial: 'WCAG stands for Web Content Accessibility Guidelines. It’s a set of guidelines developed to ensure web content is accessible to people with disabilities. In the context of CSS, WCAG guidelines help ensure that your designs are usable by everyone, including those with visual impairments, by focusing on aspects like color contrast, text size, and responsive design.',
    img: '',
    video: 'https://youtu.be/oFmHQsviAYo?feature=shared'
  },
  {id: 1,
    question: `What is the difference between reactive and adaptive designs?`,
    topic: 'Reactive Design vs Adaptive Design', 
    studyMaterial: `
    Reactive Design: Typically refers to designs that respond to changes in the viewport size using CSS media queries. It often adjusts layout and content based on specific screen sizes or resolutions, creating a fixed set of rules for different breakpoints.
................................................................................................................................................................................
Adaptive Design: Involves creating different layouts or designs specifically tailored for various devices or screen sizes. Rather than just changing the layout based on screen size, adaptive design provides a set of predefined layouts for specific devices or contexts, often involving more tailored adjustments.

In short, reactive design adjusts within a range of sizes, while adaptive design uses distinct layouts for specific sizes.
    `,
    img: '',
    video: 'https://youtu.be/Mco_Qfs1BgU?feature=shared'
  },

  {id: 2,
    question: `What are fall back fonts?`,
    topic: ' fall back fonts', 
    studyMaterial: `Fallback fonts in CSS are secondary fonts that are used when the primary font specified is unavailable. You list them in a font-family declaration to ensure text is displayed in a similar style if the primary font can't be loaded. `,
    img: img_3,
    video: 'https://youtu.be/T56kPPaQyAI?feature=shared'
  },

  {id: 3,
    question: `Tell the difference between inline and inline block?`,
    topic: 'inline & inline block', 
    studyMaterial: `In CSS, the difference between inline and inline-block is:

    inline: Elements are laid out in a row and only take up as much width as their content. They do not respect width or height properties and do not start on a new line.........................................................................................................................................................................................................................
    
    inline-block: Elements are also laid out in a row like inline, but they respect width and height properties. They do start on a new line if there isn't enough space on the current line, but they do not break the flow like block elements.
    ....................................................................
    In summary, inline elements ignore width/height and stay in-line, while inline-block elements respect width/height and stay in-line as well.`,
    img: img_4,
    video: 'https://youtu.be/DFT9qxVCF6k?feature=shared'
  }
]