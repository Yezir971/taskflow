import { Component, computed, inject, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TaskStore } from '../../service/task-store/task-store';

@Component({
  selector: 'app-bar-charts',
  imports: [BaseChartDirective],
  templateUrl: './bar-charts.html',
  styleUrl: './bar-charts.css',
})
export class BarCharts {
  dataStore = inject(TaskStore);
  tasks = this.dataStore.getTaskStore();
  private numberLow = computed(
    () => this.tasks().filter((element: { priority: string }) => element.priority == 'Basse').length
  );
  private numberMedium = computed(
    () =>
      this.tasks().filter((element: { priority: string }) => element.priority == 'Moyenne').length
  );
  private numberHeight = computed(
    () => this.tasks().filter((element: { priority: string }) => element.priority == 'Haute').length
  );
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#fff' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#fff' },
        grid: { color: '#374151' },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData = computed(() => ({
    labels: ['Basse', 'Moyenne', 'Haute'],
    datasets: [
      {
        data: [this.numberLow(), this.numberMedium(), this.numberHeight()], // valeurs par priorité
        label: 'Tâches',
        backgroundColor: ['#6b7280', '#6366f1', '#ef4444'], // gris, bleu, rouge
        borderRadius: 8,
      },
    ],
  }));

  // events
  public chartClicked({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.log(event, active);
  }
}
