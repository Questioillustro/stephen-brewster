import { Paper, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetAll } from '@/apps/codeassistant/codegen/service/CodeGenService';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { LibraryItemCard } from './libraryitemcard/LibraryItemCard';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const LibraryList = () => {
  const [all, setAll] = useState<ICodeGen[]>([]);

  const context = useCodegenContext();

  useEffect(() => {
    GetAll().then((all: ICodeGen[]) => {
      setAll(all);
    });
  }, []);

  return (
    <Stack sx={{ gap: 2, width: '100%' }}>
      {all.map((a) => {
        return (
          <Paper elevation={2} sx={{ p: 2, gap: 2 }} onClick={() => context.setCodeGenContext(a)}>
            <LibraryItemCard item={a} />
          </Paper>
        );
      })}
    </Stack>
  );
};
