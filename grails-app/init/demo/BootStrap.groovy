package demo

class BootStrap {

    def init = { servletContext ->
        log.info "Loading database..."


        def rice  = new  FoodCategary(name: "rice").save()
      //  def bread = new  FoodCategary(name: "bread").save()
     //   def corn  = new  FoodCategary(name: "corn").save()

        //new Vehicle(name: "Pickup", driver: driver1, make: nissan, FoodCategary: rice).save()
       // new Vehicle(name: "Economy", driver: driver1, make: nissan, FoodCategary: bread).save()
       // new Vehicle(name: "Minivan", driver: driver2, make: ford, FoodCategary: corn).save()


        new FeedDuckInfo(date: "2019:07:22", loc: "NY", numberofDuck: 1, foodWeight: 1, food_category: "rice", food:"bread").save()

    }
    def destroy = {
    }
}
