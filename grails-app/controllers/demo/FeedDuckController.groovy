package demo

class FeedDuckController {


    def index() { }



  def  save() {

      if (player == null) {
          render status: HttpStatus.NOT_FOUND
          return
      }

      if (player.hasErrors()) {
          respond player.errors, view: 'create'
          return
      }

  }

}
