import { Paper, Stack } from '@mui/material';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { LibraryItemCard } from './libraryitemcard/LibraryItemCard';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import Typography from '@mui/material/Typography';
import { CAPaperPanel } from '@/apps/codeassistant/components/CAPaperPanel';

export interface ILibraryListProps {
  componentList: ICodeGen[];
}

export const LibraryList = (props: ILibraryListProps) => {
  const context = useCodegenContext();

  const addToHistory = (codeGen: ICodeGen) => {
    const codeGenClone: ICodeGen = JSON.parse(JSON.stringify(codeGen));
    context.addResult({ ...codeGenClone });
  };

  return (
    <Stack sx={{ gap: 2, width: '100%' }}>
      {props.componentList.length > 0 &&
        props.componentList.map((a) => {
          return (
            <CAPaperPanel sx={{ gap: 2 }} key={a._id}>
              <LibraryItemCard item={a} onSelect={addToHistory} />
            </CAPaperPanel>
          );
        })}

      {props.componentList.length === 0 && (
        <Paper
          elevation={2}
          sx={{
            border: '2px solid',
            height: '200px',
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
