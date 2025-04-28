import { Stack } from '@mui/material';
import { ICodeGen } from '@/apps/codeassistant/codegen/CodeGen.types';
import { UserPrompt } from './UserPrompt';
import { TechStackDisplay } from './TechStackDisplay';
import { DetailsAccordion } from '@/apps/codeassistant/codelibrary/libraryitemcard/DetailsAccordion';
import PillDisplay from '@/apps/codeassistant/codelibrary/libraryitemcard/PillDisplay';

export interface ILibraryItemCardProps {
  item: ICodeGen;
}

export const LibraryItemCard = (props: ILibraryItemCardProps) => {
  return (
    <Stack sx={{ gap: 1 }}>
      <UserPrompt prompt={props.item.request.prompt} />

      <Stack direction={'row'} sx={{ gap: 1 }}>
        <TechStackDisplay
          framework={props.item.request.framework ?? undefined}
          uiLibrary={props.item.request.uiLibrary ?? undefined}
        />

        <PillDisplay label={props.item.request.llmOption} color={'secondary'} />
      </Stack>

      <DetailsAccordion request={props.item.request} />
    </Stack>
  );
};
