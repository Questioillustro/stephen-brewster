import { Paper, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetAll } from '@/apps/codeassistant/codegen/service/CodeGenService';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { LibraryItemCard } from './libraryitemcard/LibraryItemCard';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { FrameworkMatch, UiLibraryMatch } from '@/apps/codeassistant/codelibrary/Filters';
import Typography from '@mui/material/Typography';

export const LibraryList = () => {
  const [all, setAll] = useState<ICodeGen[]>([]);
  const [filtered, setFiltered] = useState<ICodeGen[]>([]);

  const context = useCodegenContext();

  useEffect(() => {
    GetAll().then((all: ICodeGen[]) => {
      setAll(all);
      setFiltered(all);
    });
  }, []);

  useEffect(() => {
    setFiltered(
      all.filter((cg) => {
        return standardFilter(cg, context.codeGen);
      }),
    );
  }, [context]);

  const standardFilter = (c1: ICodeGen, c2: ICodeGen) => {
    return (
      !context.codeGen.request.framework ||
      (FrameworkMatch(c1, c2) && (!context.codeGen.request.uiLibrary || UiLibraryMatch(c1, c2)))
    );
  };

  const addToHistory = (codeGen: ICodeGen) => {
    const codeGenClone: ICodeGen = JSON.parse(JSON.stringify(codeGen));
    context.addResult({ ...codeGenClone });
  };

  return (
    <Stack sx={{ gap: 2, width: '100%' }}>
      {filtered.length > 0 &&
        filtered.map((a) => {
          return (
            <Paper elevation={2} sx={{ p: 2, gap: 2 }}>
              <LibraryItemCard item={a} onSelect={addToHistory} />
            </Paper>
          );
        })}

      {filtered.length === 0 && (
        <Paper
          elevation={2}
          sx={{
            border: '2px solid',
            height: '200px',
            width: '90%',
            justifyItems: 'center',
            alignContent: 'center',
            pr: 2,
          }}
        >
          <Typography variant={'h5'}>No results</Typography>
        </Paper>
      )}
    </Stack>
  );
};
