type Theme = {
  breakpoints: string[],
  container: string[],
  fonts: { [key: string]: string },
  colors: { [key: string]: string }
}

const theme: Theme = {
  breakpoints: ["576px", "768px", "992px", "1200px"],
  container: ["540px", "720px", "960px", "1140px"],
  fonts: {
    'body': `-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
  },
  colors: {}
}

export default theme