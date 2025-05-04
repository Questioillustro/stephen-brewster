import { LibraryList } from '@/apps/codeassistant/codelibrary/LibraryList';
import { Stack } from '@mui/material';
import { LibraryFilterPanel } from '@/apps/codeassistant/codelibrary/filters/LibraryFilterPanel';
import { useEffect, useState } from 'react';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { GetAll } from '@/apps/codeassistant/codegen/service/CodeGenService';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

export const CodeLibrary = () => {
  const [all, setAll] = useState<ICodeGen[]>([]);
  const [filtered, setFiltered] = useState<ICodeGen[]>([]);

  const context = useCodegenContext();

  useEffect(() => {
    GetAll().then((all: ICodeGen[]) => {
      setAll(all);
      setFiltered(all);
    });
  }, []);

  return (
    <Stack sx={{ gap: 2, width: '100%' }}>
      <LibraryFilterPanel all={all} emitFilteredList={setFiltered} />
      <LibraryList componentList={filtered} />
    </Stack>
  );
};
