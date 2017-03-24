# there doesn't seem to be a lower-level way to customize View?


SpectraViewer <- function ()
{
  methods<-showMethods(classes="Spectra", printTo=FALSE)
  invisible(rcloud.spectraviewer.caps$view(methods))
}

