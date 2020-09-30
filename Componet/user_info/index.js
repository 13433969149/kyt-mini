const from = (n, array = []) => (n <= 0 ? array : from(n - 1, [n, ...array]));

Component({
  properties: {
    orderStatus:{
      type: String,
      value: '1'
    }
  },

  data: {
   
  },

  attached() {

  },

  methods: {
    
  }
});
