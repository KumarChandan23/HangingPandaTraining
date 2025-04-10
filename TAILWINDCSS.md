
# Tailwind CSS

▶️ Installation 
- create vite react project
- In terminal : npm install tailwindcss @tailwindcss/vite 

- create file with vite.config.js 
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })
- create globle CSS file and pase this : @import "tailwindcss";
- npm run dev

✅ Layout
# Container Break point
- sm : 640px
- md : 768px
- lg : 1024px
- xl : 1280px
- 2xl : 1536px

- we can override its break point
// tailwind.config.js
module.exports = {
  theme: 
    container: {
      center: true,
      padding: '1rem', // adds horizontal padding
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
};

# Box-sizing
- box-content: it add paddig and margin outsite of box and increases size.
- box-border : padding and border are include inside box. it does not increase size.

# Display
- inline: default. it contains context width and height. and does not access width and height.
- inline-block: it behaves like inline and accepts height and width.
- block: it occupies complete with of device
▶ Flex box
- flex
=> ▶️ Drection
- flex-row/col
- flex-row/col-reverse
=> ▶️ Align Items
- items-start : align to top left
- items-center : align center vertically
- items-end : align to buttom left
- items-baseline : default text
- items-stretch
=> ▶️ Justify Content
- justify-start : align to top left
- justify-end : align to top right
- justify-center : center align
- justify-between : equal space between all items
- justify-around : equla space around item from left and right and double in between items
- justify-evenly : equla space between all sides
=> ▶️ Flex Wrap
- flex-wrap : items wrap onto multiple lines
- flex-nowrap : all items stays on one line
- flex-wrap-reverse : wraps in reverse direction starts from buttom and goes on
=> ▶️ Flex Grow / Shrink / Basis
- flex-1 : flex=> 1 1 0% Grow and shrink as needed
- flex-auto : Grow/ shrink but keep auto size
- flex-initial : default size
- flex-none : no grow, no shrink
- flex-1/2 : flex-basix => 50%
=> ▶️ Align self
- self-auto : inherit valus from parent like default
- self-start

# Border 
- border : 
- border-0 : no border
- border-2 : border 2px
- border-t : border top only
- border-l-3 : border 3px left only
- border-r : border right only
- border-b : border bottom only
# Border Color (50 to 950 and only 50, 100, 150, 200 like this )
- border-red-500
- border-transparent
# Border Style
- border-solid : streight line
- border-dashed : space between dashed line
- border-double : two streight line
- border-none : no border
# Border Radius
- rouned
- rounded-sm
- rounded-md
- rounded-lg
- rounded-xl
- rounded-2xl
- rounded-3xl
- rounded-full
🔘 Rounded Specific Corners
- rounded-t : top-left and right-left
- rounded-b : bottom-left and bottom-right
- rounded-l : left side only
- rounded-r : right side only
- rounded-tl : top-left only
- rounded-tr : top-right only
- rounded-bl : bottom-left only
- rounded-br : bottom-left only
=> ex : rounded-tl-xl like this....

# Overflow
- overflow-visible : content is visible outside of box. it is default
- overflow-hidden : overflow in clipped and contect is hidden outside of box.
- overflow-scroll : overlow is clipped and scrollbar is added inside the box.
- overflow-auto : if contect is extran in the box then scrollbar will automatically appied. 
- overflow-y-scroll : only vertically scroll is possible not horizontally.
- overflow-x-scroll : only horizontally scrollbar 

# positions
=> static : normal flow of doducment
=> relative : 
-- stays in normal flow.
-- we can shift it position using top, left, right and bottom.
-- it does not release its original space, only it can move
=> absolute :
-- it does not follow normal flow of code 
-- it release its orignal space
-- it sets its position accoding to it's parent
 