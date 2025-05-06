import { CodegenProvider } from '@/apps/codeassistant/codegen/context/CodegenContext';
import AppHeader from '@/layout/apps/AppHeader';
import { Box, Slide, Stack } from '@mui/material';
import { AboutCodeAssistant } from '@/apps/codeassistant/AboutCodeAssistant';
import { PanelControls } from '@/apps/codeassistant/PanelControls';
import { ResultHistoryDisplay } from '@/apps/codeassistant/codegen/components/codedisplay/ResultHistoryDisplay';
import { useState } from 'react';
import { SBThemeProvider } from '@/theme/SBThemeContext';
import { CodeLibrary } from '@/apps/codeassistant/codelibrary/CodeLibrary';
import { CodeGenSettings } from '@/apps/codeassistant/codegen/CodeGenSettings';

const CodeAssistant = () => {
  const [genSettings, setGenSettings] = useState<boolean>(true);
  const [lib, setLib] = useState<boolean>(true);

  return (
    <SBThemeProvider theme={'resumeDark'}>
      <CodegenProvider>
        <Stack sx={{ pb: 4, width: '100%', p: 2, pt: 0 }}>
          <AppHeader about={<AboutCodeAssistant />} />

          <PanelControls
            genSettings={genSettings}
            toggleSettings={() => setGenSettings(!genSettings)}
            lib={lib}
            toggleLib={() => setLib(!lib)}
          />

          <Box sx={{ display: 'flex', gap: 2, width: '100%', mt: 2 }}>
            <Box
              sx={{
                flex: lib ? '0 0 60%' : '0 0 100%',
                transition: 'flex 0.5s ease-in-out',
                maxWidth: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              <Stack direction='column' sx={{ width: '100%', rowGap: '16px' }}>
                {genSettings && <CodeGenSettings />}

                <ResultHistoryDisplay />
              </Stack>
            </Box>

            <Slide direction='left' timeout={500} in={lib}>
              <Box
                sx={{
                  flex: '0 0 40%',
                  maxWidth: '40%',
                }}
              >
                <CodeLibrary />
              </Box>
            </Slide>
          </Box>
        </Stack>
      </CodegenProvider>
    </SBThemeProvider>
  );
};

export default CodeAssistant;
