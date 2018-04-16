
    var data = null;
    var graph = null;

    function onclick(point) {
      console.log(point);
    }

    // Called when the Visualization API is loaded.
    function drawVisualization() {
      // create the data table.
      data = new vis.DataSet();

      // create some shortcuts to math functions
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var random = Math.random;

      // create the animation data
      /*
      var imax = 5;
      for (var i = 0; i < imax; i++) {
        var x = pow(random(), 2);
        var y = pow(random(), 2);
        var z = pow(random(), 2);
        var style = (i%2==0) ? sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2)) : "#00ffff";

        data.add({x:x,y:y,z:z,style:style});
      }*/

      // This is the data for migraine
      data.add({x:0.86247053,y:0.455447165,z:147.0766894,style:"#ff0000"});
      data.add({x:6.309225997,y:0.512394167,z:3.37843E+11,style:"#ff0000"});
      data.add({x:3.374015926,y:0.386964722,z:6.20653E+11,style:"#ff0000"});
      data.add({x:1.077144724,y:0.405631712,z:8.99077E+11,style:"#ff0000"});
      data.add({x:1.879694322,y:0.465532665,z:4.74501E+11,style:"#ff0000"});
      data.add({x:1.12826461,y:0.370883092,z:5.4142E+11,style:"#ff0000"});
      data.add({x:1.898677133,y:0.794179477,z:3.6947E+11,style:"#ff0000"});
      data.add({x:6.046966357,y:0.59306295,z:4.80463E+11,style:"#ff0000"});
      data.add({x:0.797964774,y:0.320909866,z:7.88666E+11,style:"#ff0000"});
      data.add({x:4.247799224,y:0.437075002,z:46484478899,style:"#ff0000"});
      data.add({x:4.197604648,y:0.425991455,z:1.84039E+11,style:"#ff0000"});
      data.add({x:2.536708199,y:0.424025552,z:1.20631E+12,style:"#ff0000"});
      data.add({x:1.893846992,y:0.427046786,z:3.10752E+11,style:"#ff0000"});
      data.add({x:1.235577767,y:0.330591956,z:.23029E+11,style:"#ff0000"});

      // This is the data for normal control
      data.add({x:0.540484294,y:0.376611443,z:19.32849265,style:"#17c11a"});
      data.add({x:1.64364863,y:2.010698251,z:1866.928051,style:"#17c11a"});
      data.add({x:1.124287563,y:1.55103719,z:1002.126775,style:"#17c11a"});
      data.add({x:0.620848055,y:0.530113994,z:18.11062598,style:"#17c11a"});
      data.add({x:0.818839994,y:0.403625996,z:159.8663642,style:"#17c11a"});
      data.add({x:0.684468817,y:0.912141078,z:153.3083746,style:"#17c11a"});
      data.add({x:0.652723768,y:0.429791861,z:357.752542,style:"#17c11a"});
      data.add({x:0.837794277,y:0.469981177,z:93.79375663,style:"#17c11a"});
      data.add({x:1.086876585,y:1.175387026,z:125.4828348,style:"#17c11a"});
      data.add({x:1.535016996,y:0.777110772,z:301.8193105,style:"#17c11a"});
      data.add({x:1.971420056,y:0.561284275,z:144.8414825,style:"#17c11a"});
      data.add({x:1.035555269,y:1.065224014,z:.250995,style:"#17c11a"});
      data.add({x:0.742228117,y:0.548243248,z:100.7782668,style:"#17c11a"});
      data.add({x:0.602917567,y:0.280322633,z:28.60909992,style:"#17c11a"});


      // specify options
      // for more options go to http://visjs.org/docs/graph3d/
      // for bokeh in python https://www.youtube.com/watch?v=Mz1AXUE0nR4
      var options = {
        width:  '600px',
        height: '600px',
        style: 'dot-color',
        showPerspective: true,
        showGrid: false,
        keepAspectRatio: true,
        verticalRatio: 1.0,
        //showLegend:true,
        //legendLabel: 'distance',
        xLabel:'wavelet',
        yLabel:'plv',
        zLabel:'ar',
        onclick: onclick,
        cameraPosition: {
          horizontal: -0.35,
          vertical: 0.22,
          distance: 1.8
        }
        
      };

      // create our graph
      var container = document.getElementById('mygraph');
      graph = new vis.Graph3d(container, data, options);
    }
