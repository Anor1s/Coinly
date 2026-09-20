import { Chart, ChartsTemplate, getChartStyles, ChartStore, FilterButtonsGetData } from '../index.js';

const PieChartCreate = {
  chart: null,
  localData: { labels: [], values: [] },

  render(chartId) { return ChartsTemplate.render(chartId); },

  getChartOptions() {
    const styles = getChartStyles();
    const currency = ChartsTemplate.getCurrencySymbol();
    return {
      responsive: true, maintainAspectRatio: false, cutout: '40%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 10,
            boxWidth: 16,
            color: styles.color,
            font: {
              family: styles.fontFamily,
              size: styles.fontSizeMain,
            },
          },
        },
        tooltip: {
          enabled: true,
          padding: 16,
          backgroundColor: styles.backgroundColor,
          titleColor: styles.color,
          bodyColor: styles.color,
          footerColor: styles.color,
          borderColor: styles.border,
          bodyFont: {
            family: styles.fontFamily,
            size: 16
          },
          titleFont: {
            family: styles.fontFamily,
            size: 20, weight: 'bold'
          },
          footerFont: {
            family: styles.fontFamily,
            size: 16, weight: 'bold'
          },
          borderWidth: 2,
          displayColors: true,
          boxPadding: 6,
          usePointStyle: false,

          callbacks: {
            label: (context) => {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${currency} ${context.parsed.toFixed(2)} (${percentage}%)`;
            }
          }
        }
      },
    };
  },

  async updateChart(forceRefresh = false) {
    await ChartsTemplate.fetchAndRefresh(this, forceRefresh, (rawData) => {
      const categories = rawData?.categoryStats || [];
      if (categories.length === 0) return { labels: ['No data available'], values: [1], colors: ['#3f3f46'] };

      return {
        labels: categories.map(item => item.categoryDisplayName),
        values: categories.map(item => item.amount),
        colors: ['#22C55E', '#F43F5E', '#FACC15', '#0EA5E9', '#A855F7', '#FB923C', '#14B8A6', '#EC4899']
      };
    });
  },

  async init(chartId) {
    const ctx = document.getElementById(chartId);
    if (!ctx) return;
    if (this.chart) this.chart.destroy();
    window.PieChartInstance = this;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderColor: 'transparent',
          borderWidth: 2,
          hoverOffset: 30
        }]
      },
      options: this.getChartOptions(),
    });
    ChartsTemplate.subscribeRefresh(() => this.updateChart(true));
    await this.updateChart();
  },

  async refreshChartData() { await this.updateChart(true); },

  updateColors() {
    if (!this.chart) return;
    this.chart.options = this.getChartOptions();
    this.chart.update();
  }
};
export default PieChartCreate;