var nodes = null;
    var edges = null;
    var network = null;

    var DIR = 'img/soft-scraps-icons/';

      // create people.
      // value corresponds with the age of the person
      nodes = [
        {id: 1, value: 2, label:'Algie', title: 'Algie (2 years old)'},
        {id: 2, value: 31, label: 'Alston', title: 'Alston (31 years old)'},
        {id: 3, value: 12, label: 'Barney', title: 'Barney (12 years old)'},
        {id: 4, value: 16, label: 'Coley', title: 'Coley (16 years old)'},
        {id: 5, value: 17, label: 'Grant', title: 'Grant (17 years old)'},
        {id: 6, value: 15, label: 'Langdon', title: 'Langdon (15 years old)'},
        {id: 7, value: 6, label: 'Lee', title: 'Lee (6 years old)'},
        {id: 8, value: 5, label: 'Merlin', title: 'Merlin (5 years old)'},
        {id: 9, value: 30, label: 'Mick', title: 'Mick (30 years old)'},
        {id: 10, value: 18, label: 'Tod', title: 'Tod (18 years old)'}
      ];

      // create connections.
      // value corresponds with the amount of contact between two people
      edges = [
        {from: 2, to: 8, value: 3, title: '3 emails per week'},
        {from: 2, to: 9, value: 5, title: '5 emails per week'},
        {from: 2, to: 10,value: 1, title: '1 emails per week'},
        {from: 4, to: 6, value: 8, title: '8 emails per week'},
        {from: 5, to: 7, value: 2, title: '2 emails per week'},
        {from: 4, to: 5, value: 1, title: '1 emails per week'},
        {from: 9, to: 10,value: 2, title: '2 emails per week'},
        {from: 2, to: 3, value: 6, title: '6 emails per week'},
        {from: 3, to: 9, value: 4, title: '4 emails per week'},
        {from: 5, to: 3, value: 1, title: '1 emails per week'},
        {from: 2, to: 7, value: 4, title: '4 emails per week'}
      ];

    function draw() {
      // Instantiate our network object.
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        nodes: {
          shape: 'dot'
        },
        edges: {
          color: '#97C2FC'
        }
      };
      network = new vis.Network(container, data, options);
    }
