import { Card, styled } from '@maximeheckel/design-system';
import Highlight, { Prism, defaultProps } from 'prism-react-renderer';
import { Language } from 'prism-react-renderer';
import { JSXElementConstructor, ReactElement } from 'react';
import theme from "prism-react-renderer/themes/nightOwl";

// require('prismjs/components/prism-swift');
// require('prismjs/components/prism-glsl');


export interface CodeBlockProps {
  codeString: string;
  language: Language;
  metastring: string | null;
}

export interface HighlightedCodeTextProps {
  codeString: string;
  language: Language | 'glsl';
  highlightLine?: (index: number) => boolean;
}



export type PrePropsType = {
  // children: {
  //   props: {
  //     metastring: string;
  //     mdxType?: string;
  //     className?: string;
  //     children: string;
  //   };
  // };
  children?: React.ReactNode;
};


export const preToCodeBlock = (preProps: PrePropsType) => {
  const children = preProps.children as
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;

  if (children && children.props) {
    const { children: codeString, className = '', ...props } = children.props;

    const matches = className.match(/language-(?<lang>.*)/);
    return {
      className,
      codeString: codeString.trim(),
      language:
        matches && matches.groups && matches.groups.lang
          ? (matches.groups.lang as Language)
          : ('' as Language),
      ...props,
    };
  }
};

const RE = /{([\d,-]+)}/;

export const calculateLinesToHighlight = (metastring: string | null) => {
  if (!metastring || !RE.test(metastring)) {
    return () => false;
  } else {
    const lineNumbers = RE.exec(metastring)![1]
      .split(',')
      .map((v) => v.split('-').map((val) => parseInt(val, 10)));
    return (index: number) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
};

const RETitle = /title=[A-Za-z](.+)/;

export const hasTitle = (metastring: string | null) => {
  if (!metastring || !RETitle.test(metastring)) {
    return '';
  } else {
    return RETitle.exec(metastring)![0].split('title=')[1];
  }
};

export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
  const { codeString, language, highlightLine } = props;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      Prism={Prism}
      // @ts-ignore let glsl be a valid language
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, index) => {
            const { className: lineClassName } = getLineProps({
              className:
                highlightLine && highlightLine(index) ? 'highlight-line' : '',
              key: index,
              line,
            });

            return (
              <Line
                data-testid={
                  highlightLine && highlightLine(index)
                    ? 'highlight-line'
                    : 'line'
                }
                key={index}
                className={lineClassName}
              >
                <LineNo data-testid="number-line">{index + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => {
                    return (
                      <span
                        data-testid="content-line"
                        key={key}
                        {...getTokenProps({
                          key,
                          token,
                        })}
                      />
                    );
                  })}
                </LineContent>
              </Line>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );
};

const CodeBlock = (props: CodeBlockProps) => {
  const { codeString, language, metastring } = props;

  const highlightLineFn = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);

  return (
    <Card
      css={{
        marginBottom: '32px',
        background: 'unset',

        '@media(max-width: 750px)': {
          /**
           * Make it fullbleed!
           */
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          borderRadius: '0px',
        },
      }}
    >
      {title ? (
        <Card.Header
          css={{
            padding: '0px 16px',
            backgroundColor: 'hsl(223deg 15% 15% / 50%)',
          }}
        >
          <CodeSnippetTitle data-testid="codesnippet-title">
            {title}
          </CodeSnippetTitle>
          <CopyToClipboardButton title={title} text={codeString} />
        </Card.Header>
      ) : null}
      <HighlightedCodeText
        codeString={codeString}
        language={language}
        highlightLine={highlightLineFn}
      />
    </Card>
  );
};


export default CodeBlock;

const Pre = styled('pre', {
  marginTop: '0',
  marginBottom: '0',
  textAlign: 'left',
  padding: '8px 0px',
  overflow: 'auto',
  borderBottomLeftRadius: 'var(--border-radius-2)',
  borderBottomRightRadius: 'var(--border-radius-2)',
  backgroundColor: 'var(--code-snippet-background)',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--font-size-1)',
  lineHeight: '26px',

});

const Line = styled('div', {
  display: 'table',
  borderCollapse: 'collapse',
  padding: '0px 14px',
  borderLeft: '3px solid transparent',

  '&.highlight-line': {
    background: 'var(--maximeheckel-colors-emphasis)',
    borderColor: 'var(--maximeheckel-colors-brand)',
  },

  '&:hover': {
    backgroundColor: 'var(--maximeheckel-colors-emphasis)',
  },
});

const LineNo = styled('div', {
  width: '45px',
  padding: '0 12px',
  userSelect: 'none',
  opacity: '1',
  color: 'var(--maximeheckel-colors-typeface-tertiary)',
});

const LineContent = styled('span', {
  display: 'table-cell',
  width: '100%',
});

const CodeSnippetTitle = styled('p', {
  marginBlockStart: '0px',
  fontSize: 'var(--font-size-1)',
  marginBottom: '0px',
  color: 'var(--maximeheckel-colors-typeface-primary)',
  fontWeight: '500',
});


import { Button } from '@maximeheckel/design-system';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const CopyToClipboardButton = (props: { text: string; title?: string }) => {
  const duration = 0.4;
  const svgVariants = {
    hover: (isChecked: boolean) => ({
      scale: isChecked ? 1 : 1.05,
    }),
    pressed: (isChecked: boolean) => ({
      scale: isChecked ? 1 : 0.95,
    }),
    idle: {
      scale: 1,
    },
  };

  const boxVariants = {
    checked: { opacity: 0 },
    unchecked: { opacity: 1 },
  };

  const tickVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.05 }),
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 },
  };

  const [isChecked, setIsChecked] = React.useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  const copyToClipboard = (content: string) => {
    const el = document.createElement(`textarea`);
    el.value = content;
    el.setAttribute(`readonly`, ``);
    el.style.position = `absolute`;
    el.style.left = `-9999px`;
    document.body.appendChild(el);
    el.select();
    document.execCommand(`copy`);
    document.body.removeChild(el);
  };

  React.useEffect(() => {
    if (isChecked) {
      setTimeout(() => setIsChecked(false), 3000);
    }
  }, [isChecked]);

  return (
    <Button
      onClick={() => {
        copyToClipboard(props.text);
        setIsChecked(true);
      }}
      variant="icon"
      size="small"
      icon={
        <motion.svg
          initial="idle"
          whileHover="hover"
          whileTap="pressed"
          transition={{ duration }}
          variants={svgVariants}
          custom={isChecked}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={isChecked ? 'checked' : 'unchecked'}
            variants={boxVariants}
            custom={isChecked}
            transition={{ duration }}
          />
          <motion.path
            d="M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={isChecked ? 'checked' : 'unchecked'}
            variants={boxVariants}
            custom={isChecked}
            transition={{ duration }}
          />
          <motion.path
            d="M20 6L9 17L4 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={isChecked ? 'checked' : 'unchecked'}
            variants={tickVariants}
            style={{ pathLength, opacity }}
            custom={isChecked}
            transition={{ duration }}
          />
        </motion.svg>
      }
    />
  );
};

// export default CopyToClipboardButton;
