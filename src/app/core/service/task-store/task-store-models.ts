import { FormControl } from '@angular/forms';
import { Priority } from '../../../shared/ui/input/input-select/models/priority.model';
import { Status } from '../../../shared/ui/input/input-select/models/status.model';

export interface TaskStoreModel {
  title: string | null | undefined;
  priority: Priority | null | undefined;
  status: Status | null | undefined;
  date: { start?: Date; end?: Date } | '' | null | undefined;
  assign: string | null | undefined;
  description: string | null | undefined;
}
