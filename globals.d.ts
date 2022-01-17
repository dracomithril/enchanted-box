interface Box {
  name: string;
  description: string;
  image: string;
}

declare module '*/home.md' {
  import React from 'react';
  const attributes: {
    title: string;
    date: string;
    body: string;
    boxes: Cat[];
  };
  const react: React.VFC;
  export { attributes, react };
}
