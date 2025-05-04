import { Paper } from '@mui/material';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { PromptFilter } from '@/apps/codeassistant/codelibrary/filters/PromptFilter';

export interface ILibraryFilterPanelProps {
  all: ICodeGen[];
  emitFilteredList: (filtered: ICodeGen[]) => void;
}

export const LibraryFilterPanel = (props: ILibraryFilterPanelProps) => {
  const promptFilter = (search: string) => {
    const filtered = props.all.filter((cg) =>
      cg.request.prompt?.toLowerCase().includes(search.toLowerCase()),
    );
    props.emitFilteredList(filtered);
  };

  return (
    <Paper elevation={2}>
      <PromptFilter onChange={promptFilter} />
    </Paper>
  );
};
