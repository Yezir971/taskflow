import { Component, computed, effect, inject, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TaskStore } from '../../service/task-store/task-store';

@Component({
  selector: 'app-pie-charts',
  imports: [BaseChartDirective],
  templateUrl: './pie-charts.html',
  styleUrl: './pie-charts.css',
})
export class PieCharts {
  private dataStore = inject(TaskStore);
  private tasks = this.dataStore.getTaskStore();

  private numberInProgresse = computed(
    () => this.tasks().filter((element) => element.status == 'En cours').length
  );

  private numberDoIt = computed(
    () => this.tasks().filter((element) => element.status == 'Terminé').length
  );

  private numberToDo = computed(
    () => this.tasks().filter((element) => element.status == 'À faire').length
  );

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public dynHeight = 397;

  pieChartData = computed(() => ({
    labels: ['À faire', 'En cours', 'Terminées'],
    datasets: [
      {
        data: [this.numberToDo(), this.numberInProgresse(), this.numberDoIt()],
        backgroundColor: ['#f87171', '#fbbf24', '#34d399'],
      },
    ],
  }));
  public pieChartType: ChartType = 'pie';

  // events
  public chartClicked({ event, active }: { event: ChartEvent; active: object[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent; active: object[] }): void {
    console.log(event, active);
  }

  changeLegendPosition(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position =
        this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }

    this.chart?.render();
  }

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }
}
