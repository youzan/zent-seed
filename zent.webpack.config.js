var conf = {
    externals: [{
        'react': {
          amd: 'react',
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react'
        },
        'react-dom': {
          amd: 'react-dom',
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom'
        }
    }]
};

module.exports = conf;
