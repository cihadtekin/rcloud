rcloud.spectraviewer.caps <- NULL

.onLoad <- function(libname, pkgname)
{
  f <- function(module.name, module.path) {
    path <- system.file("javascript", module.path, package="rcloud.spectraviewer")
    caps <- rcloud.install.js.module(module.name,
                                     paste(readLines(path), collapse='\n'))
    caps
  }
  rcloud.spectraviewer.caps <<- f("rcloud.spectraviewer", "rcloud.spectraviewer.js")
  if(!is.null(rcloud.spectraviewer.caps))
    rcloud.spectraviewer.caps$init()
}
