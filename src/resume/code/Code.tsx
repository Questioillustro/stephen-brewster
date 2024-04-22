/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { CodeStyle } from './Code.style';
import { useCodeHooks } from './Code.hooks';
import CodeTile from './codetile/CodeTile';

function Code() {
  const codeItems = useCodeHooks();

  return (
    <div css={CodeStyle.root}>
      {codeItems.map((c) => (
        <CodeTile item={c} key={c.href} />
      ))}
    </div>
  );
}

export default Code;
