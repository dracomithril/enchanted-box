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

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.yml' {
  const value: any;
  export default value;
}
