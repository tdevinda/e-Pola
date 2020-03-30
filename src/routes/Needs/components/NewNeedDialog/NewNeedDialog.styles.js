export default (theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '300px'
  },
  inputs: {
    ...theme.flexColumnCenter
  },
  selection: {
    width: '100%'
  },
  buttons: {
    ...theme.flexColumnCenter,
  }
})
