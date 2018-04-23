// ----------------------------------  Generate ranges for the axis --------------------------------
    var xxMin = 0.13941556499999999;
    var xxMax = 1;

    var yyMin = 0.085665704999999995;
    var yyMax = 1;
    var numIncrements = 50;

    xxMin = xxMin-0.1;
    xxMax = xxMax;

    yyMin = yyMin-0.1;
    yyMax = yyMax;


    var xxIncrements = (xxMax-xxMin)/numIncrements;
    var yyIncrements = (yyMax-yyMin)/numIncrements;

    var xxPoints = [];
    var yyPoints = [];
    var xxMatrix = [];
    var yyMatrix = [];

    for (i = 0; i < numIncrements; i++) { 
      xxPoints.push(xxMin+(xxIncrements*i));
      yyPoints.push(yyMin+(yyIncrements*i));
    }

    var w1 = 0.29434643582248704;
    var w2 = -0.82132557656481664;
    var w3 = -1.5362053665267839;
    var yIntercept = -0.50168999;

    var zzPoints = [];
    var currentValue = [];
    for (yInd = 0; yInd < numIncrements; yInd++) { 
      var zzPointsRow = [];
      var xxPointsRow = [];
      var yyPointsRow = [];
      for (xInd = 0; xInd < numIncrements; xInd++) { 
        currentValue = (-w1*xxPoints[xInd]-w2*yyPoints[yInd]+yIntercept)/w3;
        zzPointsRow.push(currentValue);
        xxPointsRow.push(xxPoints[xInd]);
        yyPointsRow.push(yyPoints[yInd]);
      }
      zzPoints.push(zzPointsRow);
      xxMatrix.push(xxPointsRow);
      yyMatrix.push(yyPointsRow);
    }

    // Normalize zzPoints 
    
    var decisionPlane = {z: zzPoints, x:xxMatrix,y:yyMatrix,
      type: 'surface',
      showlegend: true,
      name: decisionPlane,
      showscale: false,      
      colorscale: [
        [0, 'rgb(119,136,153)'],
        [0.5, 'rgb(119,136,153)'],
        [1, 'rgb(119,136,153)']
    ]
    };    
    /*
    var layout = {
      xaxis: {
        autotick: false,
        ticks: 'outside',
        tick0: xxMin,
        dtick: xxIncrements,
        ticklen: xxMax,
        title:'plv'
      },
      yaxis: {
        autotick: false,
        ticks: 'outside',
        tick0: yyMin,
        dtick: yyIncrements,
        ticklen: yyMax,
        title:'wavelet'
      },
      zaxis: {
        autotick: true  ,
        title:'ar'      
      }
    };*/

    var layout = {
      title:'Feature Space',
      scene: {        
        xaxis:{title: 'Alpha Phase Synchronization'},
        yaxis:{title: 'Wavelet'},
        zaxis:{title: 'AR Statistics'},
        },
        autosize: false,
        width: 1000,
        height: 800,
    }

    
    Plotly.newPlot('myDiv', [decisionPlane],layout);

    // ------------------------------------------ Plotting the Scatter Plots ------------------------------------------------
    var xM = [0.226511942,0.254833945,0.192452906,0.201736741,0.231527861,0.184454874,0.394976957,0.29495373,0.159601206,0.217374736,0.211862448,0.210884727,0.212387307,0.164416494]; //PLV
    var yM = [0.136699895,1,0.534774936,0.170725335,0.297927879,0.178827738,0.300936618,0.958432359,0.126475858,0.673267882,0.66531214,0.402063296,0.30017105,0.195836663];    //Wavelet
    var zM = [1.22E-10,0.280063315,0.514506304,0.745313028,0.393349697,0.448824274,0.306281972,0.398292095,0.653784769,0.038534513,0.152563507,1,0.257606019,0.433578481]; //AR

    var xNC = [0.18730381,1,0.77139232,0.263646718,0.200739219,0.453643941,0.213752541,0.233740282,0.584566593,0.386488013,0.279148935,0.529778157,0.272663115,0.139415565]; //PLV
    var yNC = [0.085665705,0.260515098,0.178197383,0.098403204,0.12978454,0.108486971,0.103455443,0.132788757,0.172267816,0.243297196,0.312466229,0.164133488,0.117641707,0.095561257]; //Wavelet
    var zNC = [1.60E-11,1.55E-09,8.31E-10,1.50E-11,1.33E-10,1.27E-10,2.97E-10,7.78E-11,1.04E-10,2.50E-10,1.20E-10,1.54E-09,8.35E-11,2.37E-11]; //AR

    var patientLocation = [Math.random(),Math.random(),Math.random()];
    //var patientLocation = [0.5,0.5,0.5];
    var traceM = {
          x:xM,  y:yM, z:zM, 
          mode: 'markers',
          marker: {
            size: 5,
            line: {
              color: 'rgba(217, 0, 0, 0.14)',
              width: 0.1
            },
            opacity: 0.8
          },
          type: 'scatter3d',
          name: 'Migraine with Aura'
        };

    var traceNC = {
      x:xNC,  y:yNC, z:zNC, 
      mode: 'markers',
      marker: {
        size: 5,
        line: {
          color: 'rgba(0, 217, 0, 0.14)',
          width: 0.1
        },
        opacity: 0.8
      },
      type: 'scatter3d',
      name: 'Normal Control'
    };

    var tracePatient = {
      x:[patientLocation[0]],  y:[patientLocation[1]], z:[patientLocation[2]], 
      mode: 'markers',
      marker: {
        size: 12,
        line: {
          color: 'rgba(0, 0, 217, 0.14)',
          width: 0.1
        },
        opacity: 0.8
      },
      type: 'scatter3d',
      name: 'Patient'
    };

    var data = [traceM,traceNC,tracePatient];   
    
    Plotly.addTraces('myDiv', data);