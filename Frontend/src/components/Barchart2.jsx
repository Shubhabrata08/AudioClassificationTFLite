import * as React from 'react';
import {
  VerticalStackedBarChart
} from '@fluentui/react-charting';
// import { DefaultPalette } from '@fluentui/react/lib/Styling';




export class Barchart2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      width: 650,
      height: 350,
      showLine: true,
      barGapMax: 2,
      hideLabels: false,
      showAxisTitles: true,
      margins: {
        top: 20,
        bottom: 55,
        right: 40,
        left: 60,
      },
    };
  }

   render() {
    return <div key={'id_VBC'}>{this._basicExample()}</div>;
  }

   _onWidthChange = (e) => {
    this.setState({ width: parseInt(e.target.value, 10) });
  };
  _onHeightChange = (e) => {
    this.setState({ height: parseInt(e.target.value, 10) });
  };

  _onShowLineChange = (ev ,checked) => {
    this.setState({ showLine: checked });
  };
  _onHideLabelsCheckChange = (ev, checked) => {
    this.setState({ hideLabels: checked });
  };
  _onToggleAxisTitlesCheckChange = (ev, checked) => {
    this.setState({
      showAxisTitles: checked,
    });
    if (checked) {
      this.setState({
        margins: {
          top: 20,
          bottom: 55,
          right: 40,
          left: 60,
        },
      });
    } else {
      this.setState({
        margins: {
          top: 20,
          bottom: 35,
          right: 20,
          left: 40,
        },
      });
    }
  };

  _basicExample(){
    const { showLine } = this.state;
    const firstChartPoints = [
      {
        legend: 'DrillinG',
        data: 40,
        color: 'rgb(2, 178, 175)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '61%',
      },
      {
        legend: 'Enginge Idling',
        data: 5,
        color:  'rgb(46, 150, 255)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '8%',
      },
      {
        legend: 'Gun Shot',
        data: 20,
        color: 'rgb(184, 0, 216)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '31%',
      },
    //   {
    //     legend: 'dog_bark',
    //     data: 20,
    //     color: 'rgb(96, 0, 155)',
    //     xAxisCalloutData: '2020/04/30',
    //     yAxisCalloutData: '31%',
    //   },
    ];

    const secondChartPoints= [
      {
        legend: 'DrillinG',
        data: 30,
        color: 'rgb(2, 178, 175)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '33%',
      },
      {
        legend: 'Enginge Idling',
        data: 20,
        color:  'rgb(46, 150, 255)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '22%',
      },
      {
        legend: 'Gun Shot',
        data: 40,
        color: 'rgb(184, 0, 216)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '45%',
      },
    //   {
    //     legend: 'dog_bark',
    //     data: 20,
    //     color: 'rgb(96, 0, 155)',
    //     xAxisCalloutData: '2020/04/30',
    //     yAxisCalloutData: '31%',
    //   },
    ];

    const thirdChartPoints = [
      {
        legend: 'DrillinG',
        data: 44,
        color: 'rgb(2, 178, 175)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '43%',
      },
      {
        legend: 'Enginge Idling',
        data: 28,
        color:  'rgb(46, 150, 255)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '27%',
      },
      {
        legend: 'Gun Shot',
        data: 30,
        color: 'rgb(184, 0, 216)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '30%',
      },
    //   {
    //     legend: 'dog_bark',
    //     data: 20,
    //     color: 'rgb(96, 0, 155)',
    //     xAxisCalloutData: '2020/04/30',
    //     yAxisCalloutData: '31%',
    //   },
    ];

    const fourthChartPoints = [
      {
        legend: 'DrillinG',
        data: 88,
        color: 'rgb(2, 178, 175)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '63%',
      },
      {
        legend: 'Enginge Idling',
        data: 22,
        color: 'rgb(46, 150, 255)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '16%',
      },
      {
        legend: 'Gun Shot',
        data: 30,
        color: 'rgb(184, 0, 216)',
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '21%',
      },
    //   {
    //     legend: 'dog_bark',
    //     data: 20,
    //     color: 'rgb(96, 0, 155)',
    //     xAxisCalloutData: '2020/04/30',
    //     yAxisCalloutData: '31%',
    //   },
    ];

    const data = [
      {
        chartData: firstChartPoints,
        xAxisPoint: 0,

        // ...(showLine && {
        //   lineData: [
        //     { y: 42, legend: 'Supported Builds', color: DefaultPalette.magentaLight },
        //     { y: 10, legend: 'Recommended Builds', color: DefaultPalette.redDark },
        //   ],
        // }),
      },
      {
        chartData: secondChartPoints,
        xAxisPoint: 20,
        // ...(showLine && {
        //   lineData: [{ y: 33, legend: 'Supported Builds', color: DefaultPalette.magentaLight }],
        // }),
      },
      {
        chartData: thirdChartPoints,
        xAxisPoint: 40,
        // ...(showLine && {
        //   lineData: [
        //     { y: 60, legend: 'Supported Builds', color: DefaultPalette.magentaLight },
        //     { y: 20, legend: 'Recommended Builds', color: DefaultPalette.redDark },
        //   ],
        // }),
      },
      {
        chartData: firstChartPoints,
        xAxisPoint: 60,
        // ...(showLine && {
        //   lineData: [
        //     { y: 41, legend: 'Supported Builds', color: DefaultPalette.magentaLight },
        //     { y: 10, legend: 'Recommended Builds', color: DefaultPalette.redDark },
        //   ],
        // }),
      },
      {
        chartData: fourthChartPoints,
        xAxisPoint: 80,
        // ...(showLine && {
        //   lineData: [
        //     { y: 100, legend: 'Supported Builds', color: DefaultPalette.magentaLight },
        //     { y: 70, legend: 'Recommended Builds', color: DefaultPalette.redDark },
        //   ],
        // }),
      },
      {
        chartData: firstChartPoints,
        xAxisPoint: 100,
      },
      {
        chartData: firstChartPoints,
        xAxisPoint: 120,
      },
    ];

    const lineOptions = { lineBorderWidth: '2' };

    const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };
    return (
      <>
        
        {this.state.showAxisTitles && (
          <div style={rootStyle}>
            <VerticalStackedBarChart
              culture={window.navigator.language}
              chartTitle="Vertical stacked bar chart basic example"
              barGapMax={this.state.barGapMax}
              data={data}
              height={this.state.height}
              width={this.state.width}
              margins={this.state.margins}
              lineOptions={lineOptions}
              legendProps={{
                allowFocusOnLegends: true,
              }}
              hideLabels={this.state.hideLabels}
              enableReflow={true}
              yAxisTitle={this.state.showAxisTitles ? 'VOICES' : undefined}
              xAxisTitle={this.state.showAxisTitles ? 'TIME' : undefined}
            />
          </div>
        )}
        {!this.state.showAxisTitles && (
          <div style={rootStyle}>
            <VerticalStackedBarChart
              culture={window.navigator.language}
              chartTitle="Vertical stacked bar chart basic example"
              barGapMax={this.state.barGapMax}
              data={data}
              height={this.state.height}
              width={this.state.width}
              margins={this.state.margins}
              lineOptions={lineOptions}
              legendProps={{
                allowFocusOnLegends: true,
              }}
              hideLabels={this.state.hideLabels}
              enableReflow={true}
            />
          </div>
        )}
      </>
    );
  }
}
