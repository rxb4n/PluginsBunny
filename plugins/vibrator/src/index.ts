import { findByProps } from '@vendetta/metro'

import { registerCommand } from '@vendetta'

setInterval(() => {

  findByProps("vibrate").vibrate(

    findByProps("View").Platform.select({ ios: [300], android: 300 }),

    true

  )

}, 300);
