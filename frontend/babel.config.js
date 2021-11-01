module.exports = {
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react",
      {
        runtime: 'automatic',
        "targets": {
          "browsers": [
            ">0.25%",
            "not ie 11",
            "not op_mini all"
          ]
        }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
