import { Injectable } from '@angular/core'

import { SchedulingService } from '../../../core/services/scheduling.service'

@Injectable()
export class FinishTaskService {
  constructor(private schedule: SchedulingService) {}

  updateTaskToComplete(task): Promise<any> {
    const updatedTask = task
    updatedTask.completed = true
    this.schedule.addToCompletedTasks(updatedTask)
    return this.schedule.insertTask(updatedTask)
  }
}
