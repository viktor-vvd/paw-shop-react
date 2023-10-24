module.exports = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'prefixIds',
        params: {
          prefix: {
            toString() {
              this.counter = this.counter || 0;
  
              return `id-${this.counter++}`;
            },
          },
        },
      },
    ],
  };