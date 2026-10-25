import { createCn } from 'cn/config'

/** Class joining + Tailwind conflict resolution, taught the custom shadows of src/index.css. */
export const cn = createCn({
  extend: {
    theme: {
      shadow: ['card', 'card-hover', 'cta', 'cta-wa'],
    },
  },
})
