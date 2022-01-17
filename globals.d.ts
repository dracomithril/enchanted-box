interface Box {
  name: string;
  description: string;
  photo: string;
}

declare module '*/home.md' {
  import React from 'react';
  const attributes: {
    title: string;
    date: string;
    meta: string;
    body: string;
    boxes: Box[];
  };
  const react: React.VFC;
  export { attributes, react };
}
