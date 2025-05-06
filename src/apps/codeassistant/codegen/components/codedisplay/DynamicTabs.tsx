import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  useTheme,
  IconButton,
  Tooltip,
  Paper,
} from '@mui/material';
import { ICodeObject } from '@/apps/codeassistant/codegen/CodeGen.types';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TabPanel } from '@/apps/codeassistant/codegen/components/codedisplay/TabPanel';
import { StyledDynamicTabs } from '@/apps/codeassistant/codegen/components/codedisplay/DynamicTabs.styles';

function a11yProps(index: number) {
  return {
    id: `code-tab-${index}`,
    'aria-controls': `code-tabpanel-${index}`,
  };
}

interface DynamicTabsProps {
  code: ICodeObject[];
  defaultLanguage?: string;
  maxHeight?: string | number;
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({
  code,
  defaultLanguage = 'jsx',
  maxHeight = '600px',
}) => {
  const [value, setValue] = useState(0);
  const [tabScrollPos, setTabScrollPos] = useState(0);
  const theme = useTheme();
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getLanguage = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();

    const extensionMap: Record<string, string> = {
      js: 'javascript',
      jsx: 'jsx',
      ts: 'typescript',
      tsx: 'tsx',
      py: 'python',
      html: 'html',
      css: 'css',
      json: 'json',
      md: 'markdown',
    };

    return extension ? extensionMap[extension] || defaultLanguage : defaultLanguage;
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const container = tabsRef.current;
      const scrollAmount = container.clientWidth / 2;
      const newPosition =
        direction === 'left'
          ? Math.max(tabScrollPos - scrollAmount, 0)
          : tabScrollPos + scrollAmount;

      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setTabScrollPos(newPosition);
    }
  };

  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (tabsRef.current) {
        const { scrollWidth, clientWidth } = tabsRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScrollable();

    const resizeObserver = new ResizeObserver(checkScrollable);
    if (tabsRef.current) {
      resizeObserver.observe(tabsRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [code]);

  if (!code || code.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant='body1' color='text.secondary'>
          No code files available to display.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={2} sx={{ m: 2, width: '100%' }}>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: theme.palette.background.paper,
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {showScrollButtons && (
            <Tooltip title='Scroll left'>
              <span>
                <IconButton
                  size='small'
                  onClick={() => scrollTabs('left')}
                  disabled={tabScrollPos === 0}
                  sx={{ ml: 0.5 }}
                >
                  <ArrowBackIosNewIcon fontSize='small' />
                </IconButton>
              </span>
            </Tooltip>
          )}

          <Box
            ref={tabsRef}
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            <StyledDynamicTabs
              theme={theme}
              value={value}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons={false}
              aria-label='code file tabs'
            >
              {code.map((file, index) => (
                <Tab
                  key={index}
                  label={file.fileName || `File ${index + 1}`}
                  {...a11yProps(index)}
                />
              ))}
            </StyledDynamicTabs>
          </Box>

          {showScrollButtons && (
            <Tooltip title='Scroll right'>
              <IconButton size='small' onClick={() => scrollTabs('right')} sx={{ mr: 0.5 }}>
                <ArrowForwardIosIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </AppBar>

      <Box sx={{ maxHeight, overflow: 'auto' }}>
        {code.map((file, index) => (
          <TabPanel key={index} value={value} index={index}>
            <CodeBlock code={file.content} language={getLanguage(file.fileName || '')} />
          </TabPanel>
        ))}
      </Box>
    </Paper>
  );
};

export default DynamicTabs;
