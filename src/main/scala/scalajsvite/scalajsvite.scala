package scalajsvite

import com.raquo.laminar.api.L.{*, given}
import scala.scalajs.js
import scala.scalajs.js.annotation.*
import org.scalajs.dom

@main
def ScalaJSVite(): Unit =
  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )

object Main:
  def appElement(): Element =
    div(
      Header.headerElement(),
    )

  end appElement
end Main

object Header:
  def headerElement(): Element =
    div(
      h1("Hello, Scala!"),
      h2("Hello, Laminar!"),
      h3("Hello, World!!!")
    )
  end headerElement
end Header