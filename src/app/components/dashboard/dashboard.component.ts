import { Component, AfterViewInit, OnInit, ViewChild, Injector } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { ActivatedRoute } from '@angular/router';
import { text } from 'stream/consumers';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  constructor() {
    // Register all necessary components in Chart.js, including data labels and annotations
    Chart.register(...registerables, ChartDataLabels, annotationPlugin);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // Initialize all charts
    this.initializePersonalityChart();
    this.initializeSkillsetChart();

  }


  initializePersonalityChart(): void {
    new Chart('connectionTrendsChart', {
      type: 'bar',
      data: {
        labels: ['Decision-Making in Connection Trends', 'Strategic Planning in Connection Settings', 'Risk Management and Connection Safety', 'Understanding and Applying Connection Regulations', 'Understanding and Applying Connection Regulations'],
        datasets: [{
          label: 'Score (%)',
          data: [65, 62, 50, 43, 37],
          backgroundColor: '#000',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 5,
          borderSkipped: false,
          barThickness: 25,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            display: true,
            color: '#6C757D', // Set the color of the label text
            align: 'end', // Position the label at the end (top) of each bar
            anchor: 'end',
            formatter: (value) => value + '%', // Format each label with a '%' symbol
            font: {
              weight: 600, // Make the labels bold
              size: 10 // Adjust the size as needed
            }
          },
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false // Hide vertical grid lines
            },

            ticks: {
              font: {
                weight: 600, // Make the labels bold
                size: 10 // Adjust the size as needed
              },
              autoSkip: false, // Ensures all labels are displayed
              maxRotation: 0, // Prevents label rotation
              callback: function (value: number | string, index: number, values: any) {
                const label = this.getLabelForValue(Number(value)); // Cast value to number
                return label.length > 7 ? label.substring(0, 6) + '...' : label; // Truncate long labels
              }
            }
          },
          y: {
            beginAtZero: true,
            max: 100, // Ensures that the max value is set to 100%

            ticks: {
              color: "#6C757D",
              font: {
                weight: 600, // Make the labels bold
                size: 12, // Adjust the size as needed

              },
              stepSize: 20, // Sets the intervals between ticks to 20
              callback: function (value) {
                return value + '%'; // Adds '%' to each tick label
              }
            }
          }
        }
      }
    });
  }


  initializeSkillsetChart(): void {
    new Chart('revenueAnalysisChart', {
      type: 'radar',
      data: {
        labels: ['Harmonious', 'Creative', 'Outgoing', 'Structured', 'Functional', 'Practical', 'Reserved'],
        datasets: [{
          label: 'Skillset',
          data: [9, 5, 6, 4, 7, 8, 6],
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent #000
          borderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              color: "red",

              display: false, // Disable the Y-axis labels
              maxTicksLimit: 4
            }
          }
        },
        plugins: {
          datalabels: {
            display: false,// Disable data labels

          },
          legend: {
            display: false,
          }
        }
      }
    });
  }
}
