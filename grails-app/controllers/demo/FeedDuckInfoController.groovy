package demo

class FeedDuckInfoController {


    def index() { }



  def  save(FeedDuckInfo info) {

      if (info == null) {
          render status: HttpStatus.NOT_FOUND
          return
      }

      if (info.hasErrors()) {
          respond info.errors, view: 'index'
          return
      }

  }

}
