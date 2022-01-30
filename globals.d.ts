interface EnchantedBox {
  name: string;
  description: string;
  photo: string;
}

declare module '*/box.md' {
  import React from 'react';
  const attributes: {
    title: string;
    date: string;
    meta: string;
    body: string;
    boxes: EnchantedBox[];
  };
  const react: React.VFC;
  export { attributes, react };
}
