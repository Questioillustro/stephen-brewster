import { CodegenProvider } from '@/apps/codeassistant/codegen/context/CodegenContext';
import AppHeader from '@/layout/apps/AppHeader';
import { Box, Slide, Stack } from '@mui/material';
import { AboutCodeAssistant } from '@/apps/codeassistant/AboutCodeAssistant';
import { LibraryList } from '@/apps/codeassistant/codelibrary/LibraryList';
import { PanelControls } from '@/apps/codeassistant/PanelControls';
import FrontEndComponent from '@/apps/codeassistant/codegen/FrontEndComponent';
import { PromptInputs } from '@/apps/codeassistant/codegen/PromptInputs';
import { ResultHistoryDisplay } from '@/apps/codeassistant/codegen/components/codedisplay/ResultHistoryDisplay';
import { useState } from 'react';
import { SBThemeProvider } from '@/theme/SBThemeContext';

const CodeAssistant = () => {
  const [fe, setFe] = useState<boolean>(true);
  const [lib, setLib] = useState<boolean>(true);

  return (
    <SBThemeProvider theme={'resumeDark'}>
      <CodegenProvider>
        <Stack sx={{ pb: 4, width: '100%', p: 2, pt: 0 }}>
          <AppHeader about={<AboutCodeAssistant />} />

          <PanelControls
            fe={fe}
            toggleFe={() => setFe(!fe)}
            lib={lib}
            toggleLib={() => setLib(!lib)}
          />

          <Box sx={{ display: 'flex', gap: 2, width: '100%', mt: 2 }}>
            <Box
              sx={{
                flex: lib ? '0 0 67%' : '0 0 100%', // 67% when lib is visible, 100% when hidden
                transition: 'flex 0.5s ease-in-out', // Smooth width transition
                maxWidth: '100%',
              }}
            >
              <Stack direction='column' sx={{ width: '100%' }}>
                {fe && <FrontEndComponent />}

                <PromptInputs />

                <Box sx={{ mt: 2 }}>
                  <ResultHistoryDisplay />
                </Box>
              </Stack>
            </Box>

            <Slide direction='left' timeout={500} in={lib}>
              <Box
                sx={{
                  flex: '0 0 33%',
                  maxWidth: '33%',
                  minWidth: '200px',
                }}
              >
                <LibraryList />
              </Box>
            </Slide>
          </Box>
        </Stack>
      </CodegenProvider>
    </SBThemeProvider>
  );
};

export default CodeAssistant;
