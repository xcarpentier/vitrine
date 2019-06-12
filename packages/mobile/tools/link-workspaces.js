try {
  require('crna-make-symlinks-for-yarn-workspaces')(
    require('path').join(__dirname, '..'),
  )
} catch (e) {
  console.warn(e)
}
